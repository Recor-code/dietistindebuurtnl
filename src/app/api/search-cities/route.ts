import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    if (!query || query.trim().length < 2) {
      return NextResponse.json([]);
    }

    const searchTerm = query.trim().toUpperCase();
    
    // Check if query looks like a postcode
    // Dutch: 4 digits + 2 letters (e.g., 1011AB)
    // Belgian: 4 digits only (e.g., 1000)
    const dutchPostcodePattern = /^\d{4}[A-Z]{0,2}$/;
    const belgianPostcodePattern = /^\d{4}$/;
    
    const isDutchPostcode = dutchPostcodePattern.test(searchTerm);
    const isBelgianPostcode = belgianPostcodePattern.test(searchTerm) && searchTerm.length === 4;
    
    let results: any[] = [];

    // If it's a postcode, search the postcodes table first
    if (isDutchPostcode || isBelgianPostcode) {
      const { data: postcodeResults, error: postcodeError } = await supabase
        .from('postcodes')
        .select('postcode, woonplaats')
        .eq('postcode', searchTerm)
        .limit(5);

      if (!postcodeError && postcodeResults && postcodeResults.length > 0) {
        // For each postcode result, get the city slug
        const cityNames = [...new Set(postcodeResults.map((p: { woonplaats: string }) => p.woonplaats))];
        
        const { data: cityData, error: cityError } = await supabase
          .from('cities')
          .select('id, name, slug, province, country')
          .in('name', cityNames);

        if (!cityError && cityData) {
          // Map postcode results to city results
          const postcodeMatches = postcodeResults.map((postcodeResult: { postcode: string; woonplaats: string }) => {
            const matchingCity = cityData.find((c: { name: string }) => 
              c.name.toLowerCase() === postcodeResult.woonplaats.toLowerCase()
            );
            
            if (matchingCity) {
              return {
                id: `postcode-${postcodeResult.postcode}`,
                label: `${postcodeResult.postcode} - ${postcodeResult.woonplaats}`,
                value: postcodeResult.woonplaats,
                slug: matchingCity.slug,
                country: matchingCity.country,
                type: 'postcode'
              };
            }
            return null;
          }).filter((r: any) => r !== null);

          results.push(...postcodeMatches);
        }
      }
    }

    // Also search cities by name (always include this)
    const { data: cityResults, error: cityError } = await supabase
      .from('cities')
      .select('id, name, slug, province, country')
      .ilike('name', `%${searchTerm}%`)
      .order('name', { ascending: true })
      .limit(10);

    if (!cityError && cityResults) {
      const cityMatches = cityResults.map((city: { id: number; name: string; slug: string; province: string; country: string }) => ({
        id: city.id,
        label: `${city.name}${city.province ? `, ${city.province}` : ''}`,
        value: city.name,
        slug: city.slug,
        country: city.country,
        type: 'city'
      }));
      
      results.push(...cityMatches);
    }

    // Remove duplicates based on slug
    const uniqueResults = results.filter((result: { slug: string }, index: number, self: any[]) => 
      index === self.findIndex((r: { slug: string }) => r.slug === result.slug)
    );

    return NextResponse.json(uniqueResults);
  } catch (error) {
    console.error('Search cities API error:', error);
    return NextResponse.json([]);
  }
}
