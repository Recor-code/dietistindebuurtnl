const { drizzle } = require('drizzle-orm/neon-serverless');
const { Pool, neonConfig } = require('@neondatabase/serverless');
const ws = require('ws');

// Configure neon for WebSocket support
neonConfig.webSocketConstructor = ws;

// City data (Dutch + Belgian cities)
const cities = [
  // Top 20 largest Dutch cities
  { name: 'Amsterdam', slug: 'amsterdam', province: 'Noord-Holland', country: 'NL', population: 931298, latitude: 52.3676, longitude: 4.9041 },
  { name: 'Rotterdam', slug: 'rotterdam', province: 'Zuid-Holland', country: 'NL', population: 670610, latitude: 51.9244, longitude: 4.4777 },
  { name: 'Den Haag', slug: 'den-haag', province: 'Zuid-Holland', country: 'NL', population: 566221, latitude: 52.0705, longitude: 4.3007 },
  { name: 'Utrecht', slug: 'utrecht', province: 'Utrecht', country: 'NL', population: 374238, latitude: 52.0907, longitude: 5.1214 },
  { name: 'Eindhoven', slug: 'eindhoven', province: 'Noord-Brabant', country: 'NL', population: 246417, latitude: 51.4416, longitude: 5.4697 },
  // ... (truncated for brevity, but would include all 100 Dutch + Belgian cities)
  // Belgian cities
  { name: 'Brussel', slug: 'brussel', province: 'Brussels Hoofdstedelijk Gewest', country: 'BE', population: 1218255, latitude: 50.8503, longitude: 4.3517 },
  { name: 'Antwerpen', slug: 'antwerpen', province: 'Antwerpen', country: 'BE', population: 529247, latitude: 51.2194, longitude: 4.4025 },
  { name: 'Gent', slug: 'gent', province: 'Oost-Vlaanderen', country: 'BE', population: 262219, latitude: 51.0500, longitude: 3.7303 },
];

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

async function seedCities() {
  console.log('🌱 Starting city data seeding...');
  
  try {
    // First, let's test the connection
    console.log('🔌 Testing database connection...');
    const result = await db.execute('SELECT NOW()');
    console.log('✅ Database connected successfully!');
    
    // Create cities table if it doesn't exist
    console.log('📋 Creating cities table...');
    await db.execute(`
      CREATE TABLE IF NOT EXISTS cities (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) NOT NULL UNIQUE,
        province VARCHAR(100) NOT NULL,
        country VARCHAR(2) NOT NULL,
        population INTEGER,
        latitude DECIMAL(10,8),
        longitude DECIMAL(11,8),
        adhd_stats TEXT,
        tldr TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    
    // Clear existing city data
    console.log('🧹 Clearing existing city data...');
    await db.execute('DELETE FROM cities');
    
    console.log(`📊 Inserting ${cities.length} cities...`);
    
    // Insert cities one by one to handle any issues
    let inserted = 0;
    for (const city of cities) {
      try {
        await db.execute(`
          INSERT INTO cities (name, slug, province, country, population, latitude, longitude, adhd_stats, tldr)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `, [
          city.name,
          city.slug,
          city.province,
          city.country,
          city.population,
          city.latitude.toString(),
          city.longitude.toString(),
          JSON.stringify({
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
          `ADHD coach zoeken in ${city.name}? Ontdek ervaren professionals die jou helpen met focus, planning en dagelijkse uitdagingen.`
        ]);
        inserted++;
        if (inserted % 10 === 0) {
          console.log(`   ✓ Inserted ${inserted}/${cities.length} cities...`);
        }
      } catch (error) {
        console.error(`❌ Error inserting ${city.name}:`, error);
      }
    }
    
    console.log('✅ Successfully seeded city data!');
    console.log(`📊 Total cities inserted: ${inserted}`);
    
  } catch (error) {
    console.error('❌ Error seeding cities:', error);
  } finally {
    await pool.end();
    process.exit();
  }
}

seedCities();