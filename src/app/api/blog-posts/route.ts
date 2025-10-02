import { NextResponse } from 'next/server';

// Blog posts table no longer exists - returning empty responses
export async function POST(request: Request) {
  return NextResponse.json({ error: 'Blog posts functionality is not available' }, { status: 404 });
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: 0,
    posts: []
  });
}