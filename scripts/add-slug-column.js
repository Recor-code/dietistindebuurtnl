// Add slug column to places table via raw SQL
import { createClient } from '@supabase/supabase-js';
import pkg from 'pg';
const { Client } = pkg;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const databaseUrl = process.env.DATABASE_URL;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function addSlugColumn() {
  console.log('🚀 Adding slug column to places table...\n');
  
  try {
    // Method 1: Try using PostgREST raw SQL
    console.log('Attempting to add column...');
    
    // First, let's check if we can connect to the database
    const { data, error } = await supabase
      .from('places')
      .select('*')
      .limit(1);
    
    if (error) {
      throw new Error(`Cannot connect to places table: ${error.message}`);
    }
    
    console.log('✅ Connected to places table');
    console.log('\n⚠️  IMPORTANT: You need to manually add the slug column in Supabase!\n');
    console.log('Go to Supabase Dashboard → Table Editor → places table');
    console.log('Click "Add Column" and use these settings:');
    console.log('  - Name: slug');
    console.log('  - Type: text');
    console.log('  - Default value: (leave empty)');
    console.log('  - Allow nullable: Yes\n');
    console.log('After adding the column, run this script again to generate slugs.\n');
    console.log('Or you can run this SQL query in the SQL Editor:');
    console.log('--------------------------------------------------');
    console.log('ALTER TABLE places ADD COLUMN IF NOT EXISTS slug text;');
    console.log('CREATE INDEX IF NOT EXISTS idx_places_slug ON places(slug);');
    console.log('--------------------------------------------------\n');
    
    // Check if column already exists
    const { data: testData, error: testError } = await supabase
      .from('places')
      .select('slug')
      .limit(1);
    
    if (!testError) {
      console.log('✅ Slug column already exists! Proceeding with slug generation...\n');
      return true;
    } else {
      console.log('❌ Slug column does not exist yet. Please add it first.\n');
      return false;
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}

addSlugColumn().then(exists => {
  if (!exists) {
    console.log('\nTo add the column manually, run this in Supabase SQL Editor:');
    console.log('\nALTER TABLE places ADD COLUMN slug text;');
    console.log('CREATE INDEX idx_places_slug ON places(slug);\n');
  }
});