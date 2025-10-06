const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkRLSStatus() {
  console.log('🔍 Checking RLS status on all tables...\n');
  
  try {
    // Get list of all tables
    const { data: tables, error: tablesError } = await supabase.rpc('get_tables_rls_status', {}, {
      get: true,
      head: false
    }).single();

    // If RPC doesn't exist, use direct query
    const { data, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_type', 'BASE TABLE');

    if (error) {
      // Fallback to checking known tables
      const knownTables = ['cities', 'places', 'postcodes'];
      console.log('📊 Checking known tables:', knownTables.join(', '), '\n');
      
      for (const tableName of knownTables) {
        try {
          // Try to query each table
          const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .limit(1);
          
          if (error && error.message.includes('row-level security')) {
            console.log(`✅ ${tableName}: RLS is ENABLED`);
          } else if (data) {
            console.log(`⚠️  ${tableName}: RLS is DISABLED (public access allowed)`);
          } else {
            console.log(`❓ ${tableName}: Unable to determine RLS status`);
          }
        } catch (e) {
          console.log(`❌ ${tableName}: Error checking - ${e.message}`);
        }
      }
      
      return;
    }

    // Check RLS for each table if we got the list
    if (data && data.length > 0) {
      for (const table of data) {
        const tableName = table.table_name;
        
        // Skip internal tables
        if (tableName.startsWith('_')) continue;
        
        console.log(`Checking ${tableName}...`);
        
        // Try to detect if RLS is enabled by attempting a query
        const { data: testData, error: testError } = await supabase
          .from(tableName)
          .select('*')
          .limit(1);
        
        if (testError && testError.message.includes('row-level security')) {
          console.log(`✅ ${tableName}: RLS is ENABLED`);
        } else {
          console.log(`⚠️  ${tableName}: RLS is DISABLED`);
        }
      }
    }
    
  } catch (error) {
    console.error('Error checking RLS status:', error.message);
    
    // Fallback: check specific tables we know exist
    console.log('\n📊 Falling back to checking known tables...\n');
    const tables = ['cities', 'places', 'postcodes'];
    
    for (const tableName of tables) {
      const { data, error } = await supabase
        .from(tableName)
        .select('count')
        .limit(1);
      
      if (error) {
        if (error.message.includes('row-level security') || error.message.includes('denied')) {
          console.log(`✅ ${tableName}: RLS is ENABLED`);
        } else {
          console.log(`❌ ${tableName}: Error - ${error.message}`);
        }
      } else {
        console.log(`⚠️  ${tableName}: RLS is DISABLED (query succeeded without auth)`);
      }
    }
  }
  
  console.log('\n💡 Note: Tables with RLS disabled are vulnerable to unauthorized access!');
  console.log('   Anyone with your anon key can read/write to these tables.');
}

checkRLSStatus().then(() => process.exit(0)).catch(console.error);