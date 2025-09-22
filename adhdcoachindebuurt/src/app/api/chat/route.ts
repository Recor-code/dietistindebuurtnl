import { NextRequest, NextResponse } from 'next/server';
import { generateStreamingChatResponse, type ChatMessage } from '@/lib/openai';

export async function POST(request: NextRequest) {
  try {
    const { messages, sessionId }: { messages: ChatMessage[]; sessionId?: string } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Return streaming response
    const stream = await generateStreamingChatResponse(messages, sessionId);

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}