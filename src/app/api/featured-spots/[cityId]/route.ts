import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ cityId: string }> }
) {
  try {
    const { cityId } = await params;

    // Get active featured spots for the city with coach details
    const { data: featuredSpots, error } = await supabase
      .from('featured_spots')
      .select(`
        *,
        coaches (
          id, name, slug, email, phone, website, specialization, 
          description, address, rating, review_count, 
          is_child_friendly, weekend_available, online_available,
          in_person_available, accepts_insurance, availability_status
        )
      `)
      .eq('city_id', cityId)
      .eq('is_active', true)
      .gte('end_date', new Date().toISOString())
      .order('position', { ascending: true });

    if (error) {
      console.error('Error fetching featured spots:', error);
      return NextResponse.json(
        { error: 'Failed to fetch featured spots' },
        { status: 500 }
      );
    }

    return NextResponse.json({ featuredSpots: featuredSpots || [] });
  } catch (error: any) {
    console.error('Error in featured spots API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}