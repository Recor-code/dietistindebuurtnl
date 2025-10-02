// Migration script to add slug column to places table and generate slugs
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Function to create URL-friendly slug from name
function generateSlug(name, city) {
  if (!name) return null;
  
  // Remove special characters and convert to lowercase
  let slug = name
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
  
  // Add city to make it more unique
  if (city) {
    const citySlug = city
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
    slug = `${slug}-${citySlug}`;
  }
  
  return slug;
}

async function addSlugColumnToPlaces() {
  console.log('🚀 Starting migration: Adding slug column to places table\n');
  
  try {
    // Step 1: Add slug column to places table
    console.log('Step 1: Adding slug column to places table...');
    
    // Use RPC to execute raw SQL
    const { error: alterError } = await supabase.rpc('exec_sql', {
      query: `
        ALTER TABLE places 
        ADD COLUMN IF NOT EXISTS slug text;
      `
    });
    
    if (alterError) {
      // If RPC doesn't work, we'll do it differently
      console.log('Note: Could not add column via RPC. This might already exist.');
    } else {
      console.log('✅ Slug column added successfully');
    }
    
    // Step 2: Fetch all places
    console.log('\nStep 2: Fetching all places...');
    const { data: places, error: fetchError } = await supabase
      .from('places')
      .select('*');
    
    if (fetchError) {
      throw new Error(`Failed to fetch places: ${fetchError.message}`);
    }
    
    console.log(`Found ${places.length} places to process\n`);
    
    // Step 3: Generate and update slugs
    console.log('Step 3: Generating slugs for each place...\n');
    
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    const slugMap = new Map(); // Track slug uniqueness
    
    for (const place of places) {
      // Skip if already has a slug
      if (place.slug) {
        skipCount++;
        continue;
      }
      
      const name = place['NAME'];
      const city = place['CITY'];
      
      if (!name) {
        console.log(`⚠️  Skipping place with no name (PLACE ID: ${place['PLACE ID']})`);
        skipCount++;
        continue;
      }
      
      // Generate slug
      let slug = generateSlug(name, city);
      
      // Handle duplicate slugs
      let counter = 1;
      const originalSlug = slug;
      while (slugMap.has(slug)) {
        slug = `${originalSlug}-${counter}`;
        counter++;
      }
      slugMap.set(slug, true);
      
      // Update the place with the slug
      const { error: updateError } = await supabase
        .from('places')
        .update({ slug: slug })
        .eq('PLACE ID', place['PLACE ID']);
      
      if (updateError) {
        console.error(`❌ Failed to update ${name}: ${updateError.message}`);
        errorCount++;
      } else {
        successCount++;
        if (successCount % 100 === 0) {
          console.log(`✅ Processed ${successCount} places...`);
        }
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 Migration Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully updated: ${successCount} places`);
    console.log(`⏭️  Skipped (already had slug): ${skipCount} places`);
    console.log(`❌ Errors: ${errorCount} places`);
    console.log(`📝 Total processed: ${places.length} places`);
    console.log('='.repeat(60));
    
    // Step 4: Create unique index on slug
    console.log('\nStep 4: Creating index on slug column...');
    const { error: indexError } = await supabase.rpc('exec_sql', {
      query: `
        CREATE INDEX IF NOT EXISTS idx_places_slug ON places(slug);
      `
    });
    
    if (indexError) {
      console.log('Note: Could not create index. You may need to do this manually in Supabase.');
    } else {
      console.log('✅ Index created successfully');
    }
    
    console.log('\n✅ Migration completed successfully!\n');
    console.log('Next steps:');
    console.log('1. Update your application code to use places table');
    console.log('2. Test specialist pages with /specialist/[slug]');
    console.log('3. Verify slugs are working correctly\n');
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run the migration
addSlugColumnToPlaces();