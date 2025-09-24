import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';
import { cities } from '../shared/schema';
import { dutchCities, belgianCities, allCities } from '../src/data/cities';

// Configure neon for WebSocket support
neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const db = drizzle({ client: pool, schema: { cities } });

async function seedCities() {
  console.log('Starting city data seeding...');
  
  try {
    // Clear existing city data
    console.log('Clearing existing city data...');
    await db.delete(cities);
    
    // Insert all cities (Dutch + Belgian)
    console.log(`Inserting ${allCities.length} cities...`);
    
    const cityInserts = allCities.map(city => ({
      name: city.name,
      slug: city.slug,
      province: city.province,
      country: city.country,
      population: city.population,
      latitude: city.latitude.toString(),
      longitude: city.longitude.toString(),
      adhdStats: JSON.stringify({
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
        ]
      }),
      tldr: `ADHD coach zoeken in ${city.name}? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.`
    }));

    // Insert in batches of 50 to avoid overwhelming the database
    const batchSize = 50;
    for (let i = 0; i < cityInserts.length; i += batchSize) {
      const batch = cityInserts.slice(i, i + batchSize);
      await db.insert(cities).values(batch);
      console.log(`Inserted batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(cityInserts.length/batchSize)}`);
    }
    
    console.log('✅ Successfully seeded city data!');
    console.log(`📊 Total cities: ${allCities.length}`);
    console.log(`🇳🇱 Dutch cities: ${dutchCities.length}`);
    console.log(`🇧🇪 Belgian cities: ${belgianCities.length}`);
    
  } catch (error) {
    console.error('❌ Error seeding cities:', error);
  } finally {
    await pool.end();
    process.exit();
  }
}

seedCities();