import { NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/seed-data';

export async function POST() {
  try {
    // Only allow seeding in development
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Seeding not allowed in production' },
        { status: 403 }
      );
    }

    await seedDatabase();
    
    return NextResponse.json({ 
      message: 'Database seeded successfully' 
    });
  } catch (error) {
    console.error('Seeding error:', error);
    // If the error is about duplicate data, that's okay - data is already there
    if (error instanceof Error && error.message.includes('duplicate key value')) {
      return NextResponse.json({ 
        message: 'Database already contains data - no seeding needed' 
      });
    }
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}