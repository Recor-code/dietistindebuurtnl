import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { amount, coachId, cityId, position, duration = 30 } = await request.json();

    // Create PaymentIntent for featured spot
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert EUR to cents
      currency: 'eur',
      metadata: {
        coachId: coachId.toString(),
        cityId: cityId.toString(),
        position: position.toString(),
        duration: duration.toString(), // days
        type: 'featured_spot'
      },
      description: `Featured spot position ${position} for coach ${coachId} in city ${cityId}`,
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Error creating payment intent: ' + error.message },
      { status: 500 }
    );
  }
}