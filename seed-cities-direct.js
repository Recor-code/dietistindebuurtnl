// Direct city seeding script to populate Supabase database
import { createClient } from '@supabase/supabase-js';

// All cities data - Dutch + Belgian cities
const allCities = [
  // Dutch cities (Den Haag is here!)
  { name: 'Amsterdam', slug: 'amsterdam', province: 'Noord-Holland', country: 'NL', population: 907976, latitude: 52.3676, longitude: 4.9041 },
  { name: 'Rotterdam', slug: 'rotterdam', province: 'Zuid-Holland', country: 'NL', population: 651446, latitude: 51.9244, longitude: 4.4777 },
  { name: 'Den Haag', slug: 'den-haag', province: 'Zuid-Holland', country: 'NL', population: 548320, latitude: 52.0705, longitude: 4.3007 },
  { name: 'Utrecht', slug: 'utrecht', province: 'Utrecht', country: 'NL', population: 361966, latitude: 52.0907, longitude: 5.1214 },
  { name: 'Eindhoven', slug: 'eindhoven', province: 'Noord-Brabant', country: 'NL', population: 238326, latitude: 51.4416, longitude: 5.4697 },
  { name: 'Groningen', slug: 'groningen', province: 'Groningen', country: 'NL', population: 233218, latitude: 53.2194, longitude: 6.5665 },
  { name: 'Tilburg', slug: 'tilburg', province: 'Noord-Brabant', country: 'NL', population: 219800, latitude: 51.5555, longitude: 5.0913 },
  { name: 'Almere', slug: 'almere', province: 'Flevoland', country: 'NL', population: 214715, latitude: 52.3508, longitude: 5.2647 },
  { name: 'Breda', slug: 'breda', province: 'Noord-Brabant', country: 'NL', population: 184271, latitude: 51.5719, longitude: 4.7683 },
  { name: 'Nijmegen', slug: 'nijmegen', province: 'Gelderland', country: 'NL', population: 179073, latitude: 51.8426, longitude: 5.8518 },
  { name: 'Enschede', slug: 'enschede', province: 'Overijssel', country: 'NL', population: 159734, latitude: 52.2215, longitude: 6.8937 },
  { name: 'Haarlem', slug: 'haarlem', province: 'Noord-Holland', country: 'NL', population: 162961, latitude: 52.3873, longitude: 4.6462 },
  { name: 'Arnhem', slug: 'arnhem', province: 'Gelderland', country: 'NL', population: 161368, latitude: 51.9851, longitude: 5.8987 },
  { name: 'Zaanstad', slug: 'zaanstad', province: 'Noord-Holland', country: 'NL', population: 156711, latitude: 52.4391, longitude: 4.8170 },
  { name: 'Amersfoort', slug: 'amersfoort', province: 'Utrecht', country: 'NL', population: 158172, latitude: 52.1561, longitude: 5.3878 },
  { name: "'s-Hertogenbosch", slug: 's-hertogenbosch', province: 'Noord-Brabant', country: 'NL', population: 156793, latitude: 51.6978, longitude: 5.3037 },
  { name: 'Apeldoorn', slug: 'apeldoorn', province: 'Gelderland', country: 'NL', population: 165525, latitude: 52.2112, longitude: 5.9699 },
  { name: 'Hoofddorp', slug: 'hoofddorp', province: 'Noord-Holland', country: 'NL', population: 76660, latitude: 52.3030, longitude: 4.6890 },
  { name: 'Maastricht', slug: 'maastricht', province: 'Limburg', country: 'NL', population: 121558, latitude: 50.8514, longitude: 5.6910 },
  { name: 'Leiden', slug: 'leiden', province: 'Zuid-Holland', country: 'NL', population: 125174, latitude: 52.1601, longitude: 4.4970 },
  { name: 'Dordrecht', slug: 'dordrecht', province: 'Zuid-Holland', country: 'NL', population: 119300, latitude: 51.8133, longitude: 4.6900 },
  { name: 'Zoetermeer', slug: 'zoetermeer', province: 'Zuid-Holland', country: 'NL', population: 125283, latitude: 52.0575, longitude: 4.4933 },
  { name: 'Zwolle', slug: 'zwolle', province: 'Overijssel', country: 'NL', population: 130592, latitude: 52.5168, longitude: 6.0830 },
  { name: 'Deventer', slug: 'deventer', province: 'Overijssel', country: 'NL', population: 100718, latitude: 52.2551, longitude: 6.1639 },
  { name: 'Delft', slug: 'delft', province: 'Zuid-Holland', country: 'NL', population: 103659, latitude: 52.0116, longitude: 4.3571 },
  { name: 'Alkmaar', slug: 'alkmaar', province: 'Noord-Holland', country: 'NL', population: 109896, latitude: 52.6326, longitude: 4.7482 },
  { name: 'Leeuwarden', slug: 'leeuwarden', province: 'Friesland', country: 'NL', population: 123107, latitude: 53.2012, longitude: 5.8086 },
  { name: 'Sittard-Geleen', slug: 'sittard-geleen', province: 'Limburg', country: 'NL', population: 92422, latitude: 50.9979, longitude: 5.8562 },
  { name: 'Venlo', slug: 'venlo', province: 'Limburg', country: 'NL', population: 101797, latitude: 51.3704, longitude: 6.1724 },
  { name: 'Hilversum', slug: 'hilversum', province: 'Noord-Holland', country: 'NL', population: 92407, latitude: 52.2242, longitude: 5.1758 },
  { name: 'Roosendaal', slug: 'roosendaal', province: 'Noord-Brabant', country: 'NL', population: 77226, latitude: 51.5308, longitude: 4.4653 },
  { name: 'Purmerend', slug: 'purmerend', province: 'Noord-Holland', country: 'NL', population: 81233, latitude: 52.5051, longitude: 4.9592 },
  { name: 'Oss', slug: 'oss', province: 'Noord-Brabant', country: 'NL', population: 91932, latitude: 51.7659, longitude: 5.5153 },
  { name: 'Schiedam', slug: 'schiedam', province: 'Zuid-Holland', country: 'NL', population: 77999, latitude: 51.9200, longitude: 4.3897 },
  { name: 'Spijkenisse', slug: 'spijkenisse', province: 'Zuid-Holland', country: 'NL', population: 74988, latitude: 51.8447, longitude: 4.3289 },
  
  // Belgian cities
  { name: 'Brussel', slug: 'brussel', province: 'Brussels Hoofdstedelijk Gewest', country: 'BE', population: 1218255, latitude: 50.8503, longitude: 4.3517 },
  { name: 'Antwerpen', slug: 'antwerpen', province: 'Antwerpen', country: 'BE', population: 529247, latitude: 51.2194, longitude: 4.4025 },
  { name: 'Gent', slug: 'gent', province: 'Oost-Vlaanderen', country: 'BE', population: 262219, latitude: 51.0500, longitude: 3.7303 },
  { name: 'Charleroi', slug: 'charleroi', province: 'Henegouwen', country: 'BE', population: 201816, latitude: 50.4108, longitude: 4.4446 },
  { name: 'Luik', slug: 'luik', province: 'Luik', country: 'BE', population: 197355, latitude: 50.6326, longitude: 5.5797 },
  { name: 'Brugge', slug: 'brugge', province: 'West-Vlaanderen', country: 'BE', population: 118284, latitude: 51.2085, longitude: 3.2254 },
  { name: 'Namen', slug: 'namen', province: 'Namen', country: 'BE', population: 111300, latitude: 50.4674, longitude: 4.8720 },
  { name: 'Leuven', slug: 'leuven', province: 'Vlaams-Brabant', country: 'BE', population: 103000, latitude: 50.8798, longitude: 4.7005 },
  { name: 'Bergen', slug: 'bergen', province: 'Henegouwen', country: 'BE', population: 93259, latitude: 50.4541, longitude: 3.9517 },
  { name: 'Mechelen', slug: 'mechelen', province: 'Antwerpen', country: 'BE', population: 86921, latitude: 51.0259, longitude: 4.4777 },
  { name: 'Aalst', slug: 'aalst', province: 'Oost-Vlaanderen', country: 'BE', population: 85638, latitude: 50.9368, longitude: 4.0397 },
  { name: 'La Louvière', slug: 'la-louviere', province: 'Henegouwen', country: 'BE', population: 79844, latitude: 50.4792, longitude: 4.1878 },
  { name: 'Kortrijk', slug: 'kortrijk', province: 'West-Vlaanderen', country: 'BE', population: 76265, latitude: 50.8281, longitude: 3.2648 },
  { name: 'Hasselt', slug: 'hasselt', province: 'Limburg', country: 'BE', population: 79073, latitude: 50.9307, longitude: 5.3378 },
  { name: 'Sint-Niklaas', slug: 'sint-niklaas', province: 'Oost-Vlaanderen', country: 'BE', population: 78549, latitude: 51.1657, longitude: 4.1431 }
];

// ADHD stats template
const adhdStatsTemplate = {
  prevalenceAdults: '4-6%',
  prevalenceChildren: '5-8%',
  waitingTimeAverageWeeks: 12,
  availableCoaches: 0,
  averageRating: 4.2,
  treatmentTypes: [
    'ADHD Coaching',
    'Gedragstherapie',
    'Medicatie begeleiding',
    'Psychoeducatie',
    'Ouder/partner coaching'
  ],
  lastUpdated: new Date().toISOString()
};

function generateCityTldr(cityName) {
  const templates = [
    `ADHD coach zoeken in ${cityName}? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.`,
    `ADHD hulp in ${cityName}: bekijk reviews, beschikbaarheid en specialisaties van lokale coaches en therapeuten.`,
    `Professionele ADHD ondersteuning in ${cityName}. Van coaching tot therapie - vind de juiste hulp bij jou in de buurt.`
  ];
  return templates[cityName.length % templates.length];
}

async function seedCitiesWithSupabase() {
  const supabaseUrl = process.env.SUPABASE_SERVICE_ROLE_KEY ? 
    'https://dxpsufymxujtrzyexufe.supabase.co' : // Extract from DATABASE_URL if needed
    process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials');
    return false;
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('🌱 Starting to seed cities in Supabase...');
  console.log(`📊 Total cities to insert: ${allCities.length}`);

  try {
    // Prepare city data
    const cityData = allCities.map(city => ({
      name: city.name,
      slug: city.slug,
      province: city.province,
      country: city.country,
      population: city.population,
      latitude: city.latitude,
      longitude: city.longitude,
      adhd_stats: adhdStatsTemplate,
      tldr: generateCityTldr(city.name)
    }));

    // Insert cities in batches to avoid timeout
    const batchSize = 20;
    let inserted = 0;

    for (let i = 0; i < cityData.length; i += batchSize) {
      const batch = cityData.slice(i, i + batchSize);
      console.log(`📤 Inserting batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(cityData.length/batchSize)}...`);
      
      const { data, error } = await supabase
        .from('cities')
        .upsert(batch, {
          onConflict: 'slug',
          ignoreDuplicates: false
        });

      if (error) {
        console.error(`❌ Error in batch ${Math.floor(i/batchSize) + 1}:`, error);
        // Continue with next batch
      } else {
        inserted += batch.length;
        console.log(`✅ Batch ${Math.floor(i/batchSize) + 1} completed`);
      }
    }

    console.log(`🎉 Successfully seeded ${inserted} cities!`);
    console.log('✅ Den Haag should now be searchable!');
    
    return true;
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    return false;
  }
}

// Run the seeding
seedCitiesWithSupabase().then((success) => {
  if (success) {
    console.log('🚀 Cities seeding completed successfully!');
    process.exit(0);
  } else {
    console.log('💥 Cities seeding failed!');
    process.exit(1);
  }
}).catch(console.error);