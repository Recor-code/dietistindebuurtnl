// Simple script to generate slugs for places table
// Run AFTER adding the slug column via SQL
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
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .trim();
  
  // Add city to make it more unique
  if (city) {
    const citySlug = city
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-|-$/g, '')
      .trim();
    if (citySlug) {
      slug = `${slug}-${citySlug}`;
    }
  }
  
  return slug || null;
}

async function generateSlugs() {
  console.log('🚀 Generating slugs for places table\n');
  
  try {
    // Fetch all places without slugs (batch processing)
    console.log('Fetching places...');
    const { data: places, error: fetchError } = await supabase
      .from('places')
      .select('*')
      .is('slug', null);
    
    if (fetchError) {
      throw new Error(`Failed to fetch places: ${fetchError.message}`);
    }
    
    if (places.length === 0) {
      console.log('✅ All places already have slugs!');
      return;
    }
    
    console.log(`Found ${places.length} places without slugs\n`);
    
    // Track unique slugs
    const slugMap = new Map();
    
    // First pass: Check existing slugs
    const { data: existingSlugs } = await supabase
      .from('places')
      .select('slug')
      .not('slug', 'is', null);
    
    if (existingSlugs) {
      existingSlugs.forEach(p => {
        if (p.slug) slugMap.set(p.slug, true);
      });
    }
    
    console.log('Generating and updating slugs...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    // Process in batches of 10
    for (let i = 0; i < places.length; i++) {
      const place = places[i];
      const name = place['NAME'];
      const city = place['CITY'];
      
      if (!name) {
        console.log(`⚠️  Skipping place with no name`);
        continue;
      }
      
      // Generate slug
      let slug = generateSlug(name, city);
      if (!slug) {
        console.log(`⚠️  Could not generate slug for: ${name}`);
        continue;
      }
      
      // Handle duplicate slugs
      let counter = 1;
      const originalSlug = slug;
      while (slugMap.has(slug)) {
        slug = `${originalSlug}-${counter}`;
        counter++;
      }
      slugMap.set(slug, true);
      
      // Update the place
      const { error: updateError } = await supabase
        .from('places')
        .update({ slug: slug })
        .eq('PLACE ID', place['PLACE ID']);
      
      if (updateError) {
        console.error(`❌ ${name}: ${updateError.message}`);
        errorCount++;
      } else {
        successCount++;
        if (successCount % 50 === 0) {
          console.log(`✅ Processed ${successCount}/${places.length} places...`);
        }
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully generated: ${successCount} slugs`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log('='.repeat(60));
    console.log('\n✅ Slug generation completed!\n');
    
  } catch (error) {
    console.error('\n❌ Failed:', error.message);
    process.exit(1);
  }
}

generateSlugs();