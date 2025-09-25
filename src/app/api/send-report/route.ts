import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, responses } = await request.json();

    // Validate required fields
    if (!name || !email || !responses) {
      return NextResponse.json(
        { error: 'Naam, e-mail en antwoorden zijn verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP configuration');
      return NextResponse.json(
        { error: 'E-mail configuratie is niet compleet' },
        { status: 500 }
      );
    }

    // Create transporter using SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate report content
    const reportContent = generateReportHTML(name, responses);
    const reportText = generateReportText(name, responses);

    // Email options
    const mailOptions = {
      from: `ADHD Coach in de Buurt Assistant <${process.env.SMTP_USER}>`,
      to: email,
      bcc: 'info@adhdcoachindebuurt.nl', // Send copy to the main inbox
      subject: `Je persoonlijke ADHD rapport van ${name}`,
      text: reportText,
      html: reportContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`ADHD rapport verzonden naar ${email} voor ${name}`);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error sending ADHD report:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van het rapport' },
      { status: 500 }
    );
  }
}

function generateReportHTML(name: string, responses: any): string {
  const sanitizeName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const currentDate = new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let responsesHTML = '';
  if (typeof responses === 'object' && responses !== null) {
    for (const [question, answer] of Object.entries(responses)) {
      if (typeof answer === 'string' || typeof answer === 'number') {
        responsesHTML += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #2563eb;">${question}:</strong><br>
            <p style="margin: 5px 0; padding: 10px; background-color: #f8fafc; border-left: 3px solid #2563eb; border-radius: 4px;">
              ${String(answer).replace(/\n/g, '<br>')}
            </p>
          </div>
        `;
      }
    }
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Je Persoonlijke ADHD Rapport</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2563eb; font-size: 28px; margin-bottom: 10px;">
          Je Persoonlijke ADHD Rapport
        </h1>
        <p style="color: #6b7280; font-size: 16px;">
          Gegenereerd op ${currentDate}
        </p>
      </div>

      <div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="color: #2563eb; margin-top: 0;">Hallo ${sanitizeName}!</h2>
        <p>Bedankt voor het invullen van de ADHD vragenlijst. Hieronder vind je een samenvatting van je antwoorden en wat dit kan betekenen voor jouw situatie.</p>
        <p><strong>Let op:</strong> Dit rapport is bedoeld ter informatie en vervangt geen professionele diagnose of behandeling.</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">
          Jouw Antwoorden
        </h3>
        ${responsesHTML || '<p>Geen specifieke antwoorden beschikbaar.</p>'}
      </div>

      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #16a34a; margin-top: 0;">Wat kun je nu doen?</h3>
        <ul style="margin: 0; padding-left: 20px;">
          <li>Bespreek je antwoorden met een ADHD-specialist of je huisarts</li>
          <li>Overweeg contact op te nemen met een ADHD coach voor praktische ondersteuning</li>
          <li>Bekijk onze website voor ADHD coaches bij jou in de buurt</li>
          <li>Zoek steun bij familie, vrienden of ADHD-gemeenschappen</li>
        </ul>
      </div>

      <div style="background-color: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #d97706; margin-top: 0;">Belangrijke opmerking</h3>
        <p style="margin: 0;">
          Dit rapport is gebaseerd op je eigen antwoorden en dient alleen ter informatie. 
          Voor een officiële diagnose of behandeling is het belangrijk om contact op te nemen 
          met een gekwalificeerde zorgverlener.
        </p>
      </div>

      <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          Met vriendelijke groeten,<br>
          <strong style="color: #2563eb;">ADHD Coach in de Buurt</strong>
        </p>
        <p style="color: #6b7280; font-size: 12px; margin-top: 10px;">
          Vind ADHD coaches bij jou in de buurt op adhdcoachindebuurt.nl
        </p>
      </div>

    </body>
    </html>
  `;
}

function generateReportText(name: string, responses: any): string {
  const currentDate = new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let responsesText = '';
  if (typeof responses === 'object' && responses !== null) {
    for (const [question, answer] of Object.entries(responses)) {
      if (typeof answer === 'string' || typeof answer === 'number') {
        responsesText += `\n${question}:\n${answer}\n\n`;
      }
    }
  }

  return `
Je Persoonlijke ADHD Rapport
Gegenereerd op ${currentDate}

Hallo ${name}!

Bedankt voor het invullen van de ADHD vragenlijst. Hieronder vind je een samenvatting van je antwoorden en wat dit kan betekenen voor jouw situatie.

Let op: Dit rapport is bedoeld ter informatie en vervangt geen professionele diagnose of behandeling.

Jouw Antwoorden:
${responsesText || 'Geen specifieke antwoorden beschikbaar.'}

Wat kun je nu doen?
- Bespreek je antwoorden met een ADHD-specialist of je huisarts
- Overweeg contact op te nemen met een ADHD coach voor praktische ondersteuning  
- Bekijk onze website voor ADHD coaches bij jou in de buurt
- Zoek steun bij familie, vrienden of ADHD-gemeenschappen

Belangrijke opmerking:
Dit rapport is gebaseerd op je eigen antwoorden en dient alleen ter informatie. 
Voor een officiële diagnose of behandeling is het belangrijk om contact op te nemen 
met een gekwalificeerde zorgverlener.

Met vriendelijke groeten,
ADHD Coach in de Buurt

Vind ADHD coaches bij jou in de buurt op adhdcoachindebuurt.nl
  `.trim();
}