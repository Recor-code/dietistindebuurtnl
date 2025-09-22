import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query || query.trim().length < 2) {
      return NextResponse.json([]);
    }

    const searchTerm = query.trim().toLowerCase();
    
    // Search cities by name
    const { data: cities, error } = await supabase
      .from('cities')
      .select('id, name, slug, province, country')
      .ilike('name', `%${searchTerm}%`)
      .order('name', { ascending: true })
      .limit(10);

    if (error) {
      console.error('Error searching cities:', error);
      return NextResponse.json([]);
    }

    // Format results for autocomplete
    const results = (cities || []).map(city => ({
      id: city.id,
      label: `${city.name}${city.province ? `, ${city.province}` : ''}`,
      value: city.name,
      slug: city.slug,
      country: city.country,
      type: 'city'
    }));

    // If query looks like a postcode (starts with numbers), suggest postcode format
    const postcodePattern = /^\d{1,4}[a-zA-Z]{0,2}$/i;
    if (postcodePattern.test(searchTerm)) {
      // Dutch postcode format: 4 digits + 2 letters
      if (searchTerm.length >= 4) {
        const digits = searchTerm.substring(0, 4);
        const letters = searchTerm.substring(4).toUpperCase();
        
        // Suggest completing the postcode
        if (letters.length < 2) {
          const suggestions = ['AA', 'AB', 'AC', 'AD', 'AE'].map(suffix => ({
            id: `postcode-${digits}${letters}${suffix.substring(letters.length)}`,
            label: `${digits}${letters}${suffix.substring(letters.length)} - Postcode`,
            value: `${digits}${letters}${suffix.substring(letters.length)}`,
            slug: undefined,
            country: 'NL',
            type: 'postcode'
          }));
          results.unshift(...suggestions.slice(0, 3));
        }
      }
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error('Search cities API error:', error);
    return NextResponse.json([]);
  }
}