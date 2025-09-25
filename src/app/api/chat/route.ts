import { NextRequest, NextResponse } from 'next/server';
import { generateStreamingChatResponse, type ChatMessage } from '@/lib/openai';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Chat API called');
    
    // Handle regular chat messages with server-side automatic function calling
    const { messages, sessionId }: { messages: ChatMessage[]; sessionId?: string } = await request.json();

    console.log('📝 Messages received:', messages?.length, 'messages');

    if (!messages || !Array.isArray(messages)) {
      console.error('❌ Invalid messages format:', messages);
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    console.log('🤖 Generating streaming response...');
    // Return streaming response
    const stream = await generateStreamingChatResponse(messages, sessionId);

    console.log('✅ Stream created successfully');
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch (error) {
    console.error('❌ Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}