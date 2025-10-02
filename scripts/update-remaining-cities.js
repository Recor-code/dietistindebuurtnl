// Update the 5 remaining cities with correct provinces
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Remaining city mappings
const remainingCities = {
  'duivendrecht': 'Noord-Holland',
  'eemnes': 'Utrecht',
  'wognum': 'Noord-Holland',
  'voorthuizen': 'Gelderland',
  'haren': 'Groningen'
};

async function updateRemainingCities() {
  console.log('🗺️  Updating 5 remaining cities...\n');
  
  for (const [slug, province] of Object.entries(remainingCities)) {
    const { data, error } = await supabase
      .from('cities')
      .update({ province, country: 'NL' })
      .eq('slug', slug)
      .select();
    
    if (error) {
      console.error(`❌ Failed to update ${slug}: ${error.message}`);
    } else if (data && data.length > 0) {
      console.log(`✅ Updated ${data[0].name} (${slug}) → ${province}`);
    } else {
      console.log(`⚠️  City not found: ${slug}`);
    }
  }
  
  console.log('\n✅ All remaining cities updated!\n');
}

updateRemainingCities();