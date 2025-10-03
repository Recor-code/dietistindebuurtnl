import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

// In-memory cache for cities (loaded once on first request)
let citiesCache: Array<{
  id: number;
  name: string;
  slug: string;
  province: string;
  country: string;
  latitude: number;
  longitude: number;
}> | null = null;

// Maximum distance threshold in kilometers
const MAX_DISTANCE_KM = 50;

/**
 * Calculate distance between two points using Haversine formula
 * Returns distance in kilometers
 */
function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Load all cities into memory cache
 */
async function loadCitiesCache() {
  if (citiesCache) return citiesCache;
  
  const { data, error } = await supabase
    .from('cities')
    .select('id, name, slug, province, country, latitude, longitude');
  
  if (error || !data) {
    console.error('Failed to load cities cache:', error);
    return [];
  }
  
  citiesCache = data.map((city: any) => ({
    id: city.id,
    name: city.name,
    slug: city.slug,
    province: city.province,
    country: city.country,
    latitude: parseFloat(city.latitude),
    longitude: parseFloat(city.longitude),
  }));
  
  return citiesCache;
}

/**
 * Find the closest city to given coordinates
 */
function findClosestCity(
  lat: number,
  lon: number,
  cities: Array<{ id: number; name: string; slug: string; province: string; country: string; latitude: number; longitude: number }>
) {
  let closestCity = null;
  let minDistance = Infinity;
  
  for (const city of cities) {
    const distance = haversineDistance(lat, lon, city.latitude, city.longitude);
    if (distance < minDistance) {
      minDistance = distance;
      closestCity = city;
    }
  }
  
  return { city: closestCity, distance: minDistance };
}

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

    // Load cities cache
    const cities = await loadCitiesCache();

    // If it's a postcode, search the postcodes table first
    if (isDutchPostcode || isBelgianPostcode) {
      console.log('Searching for postcode:', searchTerm);
      
      // Try both uppercase and lowercase since postcodes might be stored in either format
      const { data: postcodeResults, error: postcodeError } = await supabase
        .from('postcodes')
        .select('postcode, woonplaats, lat, lon')
        .or(`postcode.eq.${searchTerm},postcode.eq.${searchTerm.toLowerCase()}`)
        .limit(5);
      
      console.log('Postcode results:', postcodeResults, 'Error:', postcodeError);

      if (!postcodeError && postcodeResults && postcodeResults.length > 0) {
        for (const postcodeResult of postcodeResults) {
          // First try to find exact match by woonplaats
          let matchingCity = cities.find((c) => 
            c.name.toLowerCase() === postcodeResult.woonplaats.toLowerCase()
          );
          
          let isApproximate = false;
          let distance = 0;
          
          // If no exact match, find closest city by coordinates
          if (!matchingCity && postcodeResult.lat && postcodeResult.lon) {
            // Handle coordinates that may be in scientific notation format
            // Example: '5,23249E+13' should be 52.3249, '4,5962E+14' should be 4.5962
            let latStr = postcodeResult.lat.replace(',', '.');
            let lonStr = postcodeResult.lon.replace(',', '.');
            
            // If in scientific notation like 5.23249E+13, divide by appropriate factor
            // Netherlands coordinates: lat ~50-54, lon ~3-7
            let postcodeLat = parseFloat(latStr);
            let postcodeLon = parseFloat(lonStr);
            
            // Fix incorrect scientific notation (if value is way too large)
            if (postcodeLat > 1000) {
              postcodeLat = postcodeLat / 1e12; // Adjust for E+13
            }
            if (postcodeLon > 1000) {
              postcodeLon = postcodeLon / 1e13; // Adjust for E+14
            }
            
            console.log('Parsed coordinates:', { 
              raw: { lat: postcodeResult.lat, lon: postcodeResult.lon },
              parsed: { postcodeLat, postcodeLon }
            });
            
            if (!isNaN(postcodeLat) && !isNaN(postcodeLon) && postcodeLat > 0 && postcodeLon > 0) {
              const { city: closestCity, distance: closestDistance } = findClosestCity(
                postcodeLat,
                postcodeLon,
                cities
              );
              
              // Only use closest city if within threshold
              if (closestCity && closestDistance <= MAX_DISTANCE_KM) {
                matchingCity = closestCity;
                isApproximate = true;
                distance = Math.round(closestDistance);
              }
            }
          }
          
          if (matchingCity) {
            results.push({
              id: `postcode-${postcodeResult.postcode}`,
              label: isApproximate
                ? `${postcodeResult.postcode} - Dichtstbijzijnde: ${matchingCity.name} (~${distance} km)`
                : `${postcodeResult.postcode} - ${matchingCity.name}`,
              value: matchingCity.name,
              slug: matchingCity.slug,
              country: matchingCity.country,
              type: 'postcode',
              approximate: isApproximate,
              distance: distance,
            });
          }
        }
      }
    }

    // Search cities by name (always include this)
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
        type: 'city',
        approximate: false,
      }));
      
      results.push(...cityMatches);
    }

    // If no city results found and not a postcode, try finding the city in postcodes table
    // and suggest nearest major city
    if (results.length === 0 && !isDutchPostcode && !isBelgianPostcode) {
      const { data: postcodesByCityName, error: postcodeNameError } = await supabase
        .from('postcodes')
        .select('woonplaats, lat, lon')
        .ilike('woonplaats', `%${searchTerm}%`)
        .limit(1);

      if (!postcodeNameError && postcodesByCityName && postcodesByCityName.length > 0) {
        const cityData = postcodesByCityName[0];
        
        if (cityData.lat && cityData.lon) {
          // Handle coordinates that may be in scientific notation format
          let latStr = cityData.lat.replace(',', '.');
          let lonStr = cityData.lon.replace(',', '.');
          
          let cityLat = parseFloat(latStr);
          let cityLon = parseFloat(lonStr);
          
          // Fix incorrect scientific notation (if value is way too large)
          if (cityLat > 1000) {
            cityLat = cityLat / 1e12;
          }
          if (cityLon > 1000) {
            cityLon = cityLon / 1e13;
          }
          
          if (!isNaN(cityLat) && !isNaN(cityLon) && cityLat > 0 && cityLon > 0) {
            const { city: closestCity, distance: closestDistance } = findClosestCity(
              cityLat,
              cityLon,
              cities
            );
            
            // Only suggest if within threshold
            if (closestCity && closestDistance <= MAX_DISTANCE_KM) {
              results.push({
                id: `nearest-${closestCity.slug}`,
                label: `${cityData.woonplaats} - Dichtstbijzijnde: ${closestCity.name} (~${Math.round(closestDistance)} km)`,
                value: closestCity.name,
                slug: closestCity.slug,
                country: closestCity.country,
                type: 'city',
                approximate: true,
                distance: Math.round(closestDistance),
              });
            }
          }
        }
      }
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
