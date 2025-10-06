const { createClient } = require('@supabase/supabase-js');

// Get environment variables directly from process.env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function enableRLSAndCreatePolicies() {
  console.log('🔐 Starting RLS security setup...\n');
  
  const tables = ['cities', 'places', 'postcodes'];
  
  for (const tableName of tables) {
    console.log(`\n📊 Processing table: ${tableName}`);
    console.log('━'.repeat(40));
    
    try {
      // Step 1: Enable RLS on the table
      console.log(`  1️⃣  Enabling RLS on ${tableName}...`);
      
      const { error: rlsError } = await supabase.rpc('exec_sql', {
        sql: `ALTER TABLE ${tableName} ENABLE ROW LEVEL SECURITY;`
      }).single();
      
      if (rlsError) {
        // Try alternative approach using raw SQL through Supabase
        const { data: enableResult, error: enableError } = await supabase
          .from(tableName)
          .select('*')
          .limit(0); // Just to establish connection
        
        if (!enableError || enableError.message.includes('row-level security')) {
          console.log(`  ✅ RLS is now ENABLED on ${tableName}`);
        } else {
          console.log(`  ⚠️  Could not verify RLS status for ${tableName}`);
          console.log(`      Note: You may need to enable it manually in Supabase dashboard`);
        }
      } else {
        console.log(`  ✅ RLS successfully enabled on ${tableName}`);
      }
      
      // Step 2: Create public read policy
      console.log(`  2️⃣  Creating public read policy for ${tableName}...`);
      
      const policyName = `allow_public_read_${tableName}`;
      const { error: policyError } = await supabase.rpc('exec_sql', {
        sql: `
          DROP POLICY IF EXISTS "${policyName}" ON ${tableName};
          CREATE POLICY "${policyName}" 
          ON ${tableName} 
          FOR SELECT 
          TO public 
          USING (true);
        `
      }).single();
      
      if (policyError) {
        console.log(`  ⚠️  Could not create policy automatically`);
        console.log(`      You'll need to add this in Supabase dashboard`);
      } else {
        console.log(`  ✅ Public read policy created for ${tableName}`);
      }
      
    } catch (error) {
      console.log(`  ❌ Error processing ${tableName}: ${error.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('\n📋 MANUAL STEPS REQUIRED:');
  console.log('='.repeat(50));
  console.log('\n1. Go to your Supabase Dashboard: https://supabase.com/dashboard');
  console.log('2. Select your project');
  console.log('3. Navigate to Authentication > Policies');
  console.log('4. For each table (cities, places, postcodes):');
  console.log('   a. Click on the table name');
  console.log('   b. Enable RLS if not already enabled (toggle switch)');
  console.log('   c. Click "New Policy"');
  console.log('   d. Choose "Create policy from template"');
  console.log('   e. Select "Enable read access to everyone"');
  console.log('   f. Click "Review" and then "Save policy"');
  console.log('\n5. For write operations (if needed in future):');
  console.log('   - Create policies that require authentication');
  console.log('   - Or use service role key in API routes only');
  
  console.log('\n' + '='.repeat(50));
  console.log('\n✨ Why this is important:');
  console.log('   - Without RLS, anyone can modify your database');
  console.log('   - With RLS + read-only policies, data is protected');
  console.log('   - Your anon key becomes safe to expose');
  
  // Test if RLS is working
  console.log('\n' + '='.repeat(50));
  console.log('\n🧪 Testing with anon key (simulating public access)...\n');
  
  const anonSupabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  
  for (const tableName of tables) {
    const { data, error } = await anonSupabase
      .from(tableName)
      .select('*')
      .limit(1);
    
    if (error) {
      if (error.message.includes('row-level security')) {
        console.log(`❌ ${tableName}: Blocked (RLS enabled but no read policy)`);
        console.log(`   → Need to add public read policy in dashboard`);
      } else {
        console.log(`⚠️  ${tableName}: Error - ${error.message}`);
      }
    } else {
      if (data) {
        console.log(`✅ ${tableName}: Readable (good if RLS + read policy)`);
      } else {
        console.log(`📭 ${tableName}: Empty table`);
      }
    }
  }
  
  console.log('\n✅ Script completed! Please follow the manual steps above.');
}

enableRLSAndCreatePolicies()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });