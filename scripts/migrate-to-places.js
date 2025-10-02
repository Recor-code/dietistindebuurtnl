// Migration script to safely transition from coaches to places table
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateToPlaces() {
  console.log('Starting migration from coaches to places table...\n');
  
  try {
    // Step 1: Check if slug column exists in places table
    console.log('Step 1: Checking places table structure...');
    const { data: columns } = await supabase.rpc('get_column_info', {
      table_name: 'places',
      column_name: 'slug'
    }).single();
    
    if (!columns) {
      console.log('Adding slug column to places table...');
      // This is safe - just adds a column, doesn't change existing data
      await supabase.rpc('add_slug_column');
    } else {
      console.log('Slug column already exists in places table.');
    }
    
    // Step 2: Get all coaches
    console.log('\nStep 2: Fetching coaches data...');
    const { data: coaches, error: coachError } = await supabase
      .from('coaches')
      .select('*');
    
    if (coachError) {
      throw new Error(`Failed to fetch coaches: ${coachError.message}`);
    }
    
    console.log(`Found ${coaches.length} coaches to migrate.`);
    
    // Step 3: For each coach, either find existing place or create new one
    console.log('\nStep 3: Syncing coaches with places...');
    
    for (const coach of coaches) {
      console.log(`Processing: ${coach.name}`);
      
      // Try to find existing place by name and city
      let { data: existingPlace } = await supabase
        .from('places')
        .select('*')
        .eq('NAME', coach.name)
        .eq('CITY', coach.city_id === 1 ? 'Amsterdam' : 
                    coach.city_id === 2 ? 'Rotterdam' : 
                    coach.city_id === 3 ? 'Den Haag' : 
                    coach.city_id === 4 ? 'Utrecht' : 
                    coach.city_id === 88 ? 'Brussel' : 'Unknown')
        .single();
      
      if (!existingPlace) {
        // Create new place entry
        console.log(`  Creating new place for: ${coach.name}`);
        
        const cityName = coach.city_id === 1 ? 'Amsterdam' : 
                        coach.city_id === 2 ? 'Rotterdam' : 
                        coach.city_id === 3 ? 'Den Haag' : 
                        coach.city_id === 4 ? 'Utrecht' : 
                        coach.city_id === 88 ? 'Brussel' : 'Unknown';
        
        const newPlace = {
          'PLACE ID': `coach_${coach.id}_${Date.now()}`, // Generate unique PLACE ID
          'NAME': coach.name,
          'slug': coach.slug,
          'CATEGORY': coach.specialization || 'ADHD Coach',
          'STREET ADDRESS': coach.address,
          'ADDRESS': coach.address,
          'CITY': cityName,
          'REGION': '',
          'ZIP CODE': '',
          'COUNTRY NAME': coach.city_id === 88 ? 'Belgium' : 'The Netherlands',
          'COUNTRY CODE': coach.city_id === 88 ? 'BE' : 'NL',
          'PHONE': coach.phone,
          'EMAIL': coach.email,
          'WEBSITE': coach.website,
          'LAT': coach.latitude,
          'LNG': coach.longitude,
          'specialization': coach.specialization,
          'description': coach.description,
          'city_id': coach.city_id,
          'rating': coach.rating,
          'review_count': coach.review_count,
          'is_child_friendly': coach.is_child_friendly,
          'weekend_available': coach.weekend_available,
          'online_available': coach.online_available,
          'in_person_available': coach.in_person_available,
          'accepts_insurance': coach.accepts_insurance,
          'availability_status': coach.availability_status
        };
        
        const { data: createdPlace, error: createError } = await supabase
          .from('places')
          .insert(newPlace)
          .select()
          .single();
        
        if (createError) {
          console.error(`  Failed to create place: ${createError.message}`);
          continue;
        }
        
        // Update coach with place_id reference
        await supabase
          .from('coaches')
          .update({ place_id: createdPlace['PLACE ID'] })
          .eq('id', coach.id);
        
        console.log(`  ✅ Created place with ID: ${createdPlace['PLACE ID']}`);
      } else {
        // Update existing place with coach data
        console.log(`  Updating existing place: ${existingPlace['PLACE ID']}`);
        
        const updateData = {
          'slug': coach.slug,
          'specialization': coach.specialization || existingPlace.specialization,
          'description': coach.description || existingPlace.description,
          'city_id': coach.city_id,
          'rating': coach.rating || existingPlace.rating,
          'review_count': existingPlace['RATINGS'] ? parseInt(existingPlace['RATINGS']) : coach.review_count,
          'is_child_friendly': coach.is_child_friendly,
          'weekend_available': coach.weekend_available,
          'online_available': coach.online_available,
          'in_person_available': coach.in_person_available,
          'accepts_insurance': coach.accepts_insurance,
          'availability_status': coach.availability_status
        };
        
        const { error: updateError } = await supabase
          .from('places')
          .update(updateData)
          .eq('PLACE ID', existingPlace['PLACE ID']);
        
        if (updateError) {
          console.error(`  Failed to update place: ${updateError.message}`);
        } else {
          // Update coach with place_id reference
          await supabase
            .from('coaches')
            .update({ place_id: existingPlace['PLACE ID'] })
            .eq('id', coach.id);
          
          console.log(`  ✅ Updated place: ${existingPlace['PLACE ID']}`);
        }
      }
    }
    
    // Step 4: Update featured_spots to use place_id
    console.log('\nStep 4: Updating featured_spots references...');
    const { data: featuredSpots } = await supabase
      .from('featured_spots')
      .select('*, coaches!inner(place_id)');
    
    if (featuredSpots && featuredSpots.length > 0) {
      for (const spot of featuredSpots) {
        if (spot.coaches?.place_id) {
          await supabase
            .from('featured_spots')
            .update({ place_id: spot.coaches.place_id })
            .eq('id', spot.id);
        }
      }
      console.log(`Updated ${featuredSpots.length} featured spots.`);
    }
    
    console.log('\n✅ Migration completed successfully!');
    console.log('\nSummary:');
    console.log('- Places table now has slug column');
    console.log('- All coaches are synced with places table');
    console.log('- Featured spots updated to use place_id');
    console.log('\nNext steps:');
    console.log('1. Update application code to use places table');
    console.log('2. Test that reviews load correctly by PLACE_ID');
    console.log('3. Verify all functionality works with new structure');
    
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Create SQL functions if they don't exist
async function setupSQLFunctions() {
  console.log('Setting up SQL helper functions...\n');
  
  // Function to check if column exists
  const checkColumnSQL = `
    CREATE OR REPLACE FUNCTION get_column_info(table_name text, column_name text)
    RETURNS TABLE(column_exists boolean) AS $$
    BEGIN
      RETURN QUERY
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name = $1
        AND column_name = $2
      );
    END;
    $$ LANGUAGE plpgsql;
  `;
  
  // Function to add slug column
  const addSlugColumnSQL = `
    CREATE OR REPLACE FUNCTION add_slug_column()
    RETURNS void AS $$
    BEGIN
      ALTER TABLE places ADD COLUMN IF NOT EXISTS slug text;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS specialization text;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS description text;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS city_id integer REFERENCES cities(id);
      ALTER TABLE places ADD COLUMN IF NOT EXISTS rating decimal(3,2);
      ALTER TABLE places ADD COLUMN IF NOT EXISTS review_count integer DEFAULT 0;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS is_child_friendly boolean DEFAULT false;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS weekend_available boolean DEFAULT false;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS online_available boolean DEFAULT false;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS in_person_available boolean DEFAULT true;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS accepts_insurance boolean DEFAULT false;
      ALTER TABLE places ADD COLUMN IF NOT EXISTS availability_status text DEFAULT 'available';
      
      ALTER TABLE coaches ADD COLUMN IF NOT EXISTS place_id text;
      ALTER TABLE featured_spots ADD COLUMN IF NOT EXISTS place_id text;
    END;
    $$ LANGUAGE plpgsql;
  `;
  
  try {
    await supabase.rpc('query', { sql: checkColumnSQL });
    await supabase.rpc('query', { sql: addSlugColumnSQL });
    console.log('SQL functions created successfully.\n');
  } catch (error) {
    console.log('Note: SQL functions may already exist or require manual setup.\n');
  }
}

// Run migration
setupSQLFunctions().then(() => {
  migrateToPlaces().catch(console.error);
});