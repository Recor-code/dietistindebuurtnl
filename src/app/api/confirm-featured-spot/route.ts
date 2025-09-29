import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '../../../../lib/supabase';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing required Stripe secret: STRIPE_SECRET_KEY');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId } = await request.json();

    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    const { coachId, cityId, position, duration } = paymentIntent.metadata;
    const amountPaid = paymentIntent.amount / 100; // Convert cents to EUR

    // Calculate start and end dates
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + parseInt(duration || '30'));

    // Check if position is already taken for the overlapping period
    const { data: existingSpot } = await supabaseServer
      .from('featured_spots')
      .select('*')
      .eq('city_id', parseInt(cityId))
      .eq('position', parseInt(position))
      .eq('is_active', true)
      .gte('end_date', startDate.toISOString())
      .single();

    if (existingSpot) {
      return NextResponse.json(
        { error: 'Featured spot position is already taken for this period' },
        { status: 409 }
      );
    }

    // Create featured spot record
    const { data: featuredSpot, error } = await supabaseServer
      .from('featured_spots')
      .insert({
        coach_id: parseInt(coachId),
        city_id: parseInt(cityId),
        position: parseInt(position),
        stripe_payment_intent_id: paymentIntentId,
        stripe_customer_id: paymentIntent.customer,
        amount_paid: amountPaid,
        currency: 'EUR',
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        is_active: true
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating featured spot:', error);
      return NextResponse.json(
        { error: 'Failed to create featured spot' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      featuredSpot,
      message: `Featured spot confirmed for position ${position}` 
    });
  } catch (error: any) {
    console.error('Error confirming featured spot:', error);
    return NextResponse.json(
      { error: 'Error confirming featured spot: ' + error.message },
      { status: 500 }
    );
  }
}