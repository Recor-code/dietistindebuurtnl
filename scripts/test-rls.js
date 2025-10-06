const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error('Missing environment variables');
  process.exit(1);
}

async function testRLS() {
  console.log('🧪 Testing RLS Configuration\n');
  console.log('=' .repeat(50));
  
  // Test with ANON key (simulating public access)
  const anonClient = createClient(supabaseUrl, supabaseAnonKey);
  
  console.log('\n1️⃣  Testing with ANON key (public access):\n');
  
  for (const table of ['cities', 'places', 'postcodes']) {
    const { data, error } = await anonClient
      .from(table)
      .select('*')
      .limit(1);
    
    if (error) {
      console.log(`❌ ${table}: ${error.message}`);
    } else {
      console.log(`✅ ${table}: Can read (${data.length} row returned)`);
    }
  }
  
  // Test with SERVICE ROLE key (admin access)
  const adminClient = createClient(supabaseUrl, supabaseServiceKey);
  
  console.log('\n2️⃣  Testing with SERVICE ROLE key (admin access):\n');
  
  for (const table of ['cities', 'places', 'postcodes']) {
    const { data, error } = await adminClient
      .from(table)
      .select('*')
      .limit(1);
    
    if (error) {
      console.log(`❌ ${table}: ${error.message}`);
    } else {
      console.log(`✅ ${table}: Can read (${data.length} row returned)`);
    }
  }
  
  console.log('\n' + '=' .repeat(50));
  console.log('\n📊 ANALYSIS:\n');
  console.log('If ANON key fails but SERVICE ROLE succeeds:');
  console.log('→ RLS is working but policies need to be added');
  console.log('\nIf both succeed:');
  console.log('→ RLS policies are correctly configured');
  console.log('\nIf both fail:');
  console.log('→ Database connection issue');
}

testRLS().catch(console.error);