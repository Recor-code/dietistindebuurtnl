import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple rate limiting (in production, use Redis or a proper rate limiting service)
const emailAttempts = new Map<string, { count: number; lastAttempt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_ATTEMPTS_PER_HOUR = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const attempts = emailAttempts.get(ip);
  
  if (!attempts) {
    emailAttempts.set(ip, { count: 1, lastAttempt: now });
    return true;
  }
  
  if (now - attempts.lastAttempt > RATE_LIMIT_WINDOW) {
    emailAttempts.set(ip, { count: 1, lastAttempt: now });
    return true;
  }
  
  if (attempts.count >= MAX_ATTEMPTS_PER_HOUR) {
    return false;
  }
  
  attempts.count++;
  attempts.lastAttempt = now;
  return true;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 320;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Te veel berichten verzonden. Probeer het over een uur opnieuw.' },
        { status: 429 }
      );
    }

    const { name, email, subject, message, honeypot } = await request.json();

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }); // Pretend success to avoid revealing honeypot
    }

    // Validate required fields and lengths
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Naam mag maximaal 100 karakters lang zijn' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Bericht mag maximaal 5000 karakters lang zijn' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Voer een geldig e-mailadres in' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP configuration');
      return NextResponse.json(
        { error: 'E-mail configuratie is niet compleet. Neem contact op met de beheerder.' },
        { status: 500 }
      );
    }

    // Create transporter using your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Determine subject line
    const subjectMap: { [key: string]: string } = {
      'coach-listing': 'Coach toevoegen aan platform',
      'general-question': 'Algemene vraag',
      'technical-issue': 'Technisch probleem',
      'partnership': 'Samenwerking',
      'other': 'Anders'
    };

    const emailSubject = subject && subjectMap[subject] 
      ? `Contact formulier: ${subjectMap[subject]}` 
      : 'Nieuw contact formulier bericht';

    // Sanitize user inputs
    const sanitizedName = sanitizeInput(name.trim());
    const sanitizedEmail = sanitizeInput(email.trim());
    const sanitizedSubject = subject ? sanitizeInput(subject.trim()) : '';
    const sanitizedMessage = sanitizeInput(message.trim());

    // Email content with sanitized inputs
    const textMessage = `
Nieuw bericht via contactformulier

Naam: ${sanitizedName}
E-mail: ${sanitizedEmail}  
Onderwerp: ${sanitizedSubject ? subjectMap[subject] || sanitizedSubject : 'Niet opgegeven'}

Bericht:
${sanitizedMessage}

---
Dit bericht is verzonden via het contactformulier van dietistindebuurt.nl
Verzonden op: ${new Date().toLocaleString('nl-NL')}
    `.trim();

    const mailOptions = {
      from: `Diëtist in de Buurt <${process.env.SMTP_USER}>`,
      to: 'info@dietistindebuurt.nl',
      replyTo: email,
      subject: emailSubject,
      text: textMessage,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Nieuw bericht via contactformulier
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Naam:</strong> ${sanitizedName}</p>
            <p><strong>E-mail:</strong> ${sanitizedEmail}</p>
            <p><strong>Onderwerp:</strong> ${sanitizedSubject ? subjectMap[subject] || sanitizedSubject : 'Niet opgegeven'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Bericht:</h3>
            <div style="background-color: #ffffff; border-left: 4px solid #2563eb; padding: 15px; margin: 10px 0;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>Dit bericht is verzonden via het contactformulier van dietistindebuurt.nl</p>
            <p>Verzonden op: ${new Date().toLocaleString('nl-NL')}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}