import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface QuizSubmission {
  age: string;
  diagnosis: string;
  therapy: string;
  concern: string;
  location: string;
  name: string;
  email: string;
  phone: string;
}

export async function POST(request: NextRequest) {
  try {
    console.log('📋 Quiz submission received');
    
    const formData: QuizSubmission = await request.json();
    
    // Validate required fields
    if (!formData.name?.trim() || !formData.email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Get user IP address
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const userIP = forwarded?.split(',')[0] || realIp || 'unknown';
    
    // Get user agent
    const userAgent = request.headers.get('user-agent') || 'unknown';
    
    // Prepare submission data for external API
    const submissionData = {
      // Quiz answers
      age: formData.age,
      diagnosis: formData.diagnosis,
      therapy_experience: formData.therapy,
      main_concern: formData.concern,
      location: formData.location,
      
      // Contact information
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      
      // Technical information
      ip_address: userIP,
      user_agent: userAgent,
      submission_date: new Date().toISOString(),
      source: 'adhdcoachindebuurt.nl',
      quiz_type: 'matching_quiz'
    };

    console.log('📤 Forwarding to organicolabs.com...');
    
    // Submit to external API
    const externalResponse = await fetch('https://organicolabs.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'ADHD-Coach-Platform/1.0',
      },
      body: JSON.stringify(submissionData),
    });

    if (!externalResponse.ok) {
      console.error('❌ External API error:', externalResponse.status, externalResponse.statusText);
      
      // Even if external API fails, we can still return success to user
      // but log the error for debugging
      console.log('⚠️ Continuing despite external API error to not block user experience');
    } else {
      console.log('✅ Successfully submitted to external API');
    }

    console.log('✅ Quiz submission processed');
    
    return NextResponse.json({
      success: true,
      message: 'Quiz submitted successfully'
    });

  } catch (error) {
    console.error('❌ Quiz submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit quiz',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}