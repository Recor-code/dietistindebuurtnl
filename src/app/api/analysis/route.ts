import { NextRequest, NextResponse } from 'next/server';
import { generateDiëtiekAnalysis, type ChatMessage } from '@/lib/openai';

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: ChatMessage[] } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const analysis = await generateDiëtiekAnalysis(messages);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Analysis API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate analysis' },
      { status: 500 }
    );
  }
}