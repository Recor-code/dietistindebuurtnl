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
      source: 'dietistindebuurt.nl',
      quiz_type: 'matching_quiz'
    };

    console.log('📤 Forwarding to n8n webhook...');
    
    // Submit to n8n webhook
    try {
      const webhookResponse = await fetch('https://n8n-595.workflowapp.ai/webhook/47e63627-c0a7-4af8-961d-d3f9c176c879', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });

      if (!webhookResponse.ok) {
        console.error('❌ Webhook error:', webhookResponse.status, webhookResponse.statusText);
        
        return NextResponse.json(
          { 
            error: 'Failed to submit quiz',
            details: `Webhook returned ${webhookResponse.status}`
          },
          { status: 502 }
        );
      }
      
      console.log('✅ Successfully submitted to webhook');
    } catch (webhookError) {
      console.error('❌ Webhook network error:', webhookError);
      
      return NextResponse.json(
        { 
          error: 'Network error submitting quiz',
          details: webhookError instanceof Error ? webhookError.message : 'Network timeout'
        },
        { status: 502 }
      );
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