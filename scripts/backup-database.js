// Backup script for current database data
import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function backupDatabase() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = `backups/supabase-backup-${timestamp}`;
  
  await fs.mkdir(backupDir, { recursive: true });
  
  console.log('Starting database backup...');
  
  // Backup all tables
  const tables = ['cities', 'coaches', 'blog_posts', 'faq_items', 'featured_spots', 'chat_conversations'];
  
  // Also check for places and reviews tables
  const additionalTables = ['places', 'reviews'];
  
  for (const table of [...tables, ...additionalTables]) {
    try {
      console.log(`Backing up ${table}...`);
      const { data, error } = await supabase
        .from(table)
        .select('*');
      
      if (error) {
        console.log(`Table ${table} not found or error: ${error.message}`);
        continue;
      }
      
      await fs.writeFile(
        path.join(backupDir, `${table}.json`),
        JSON.stringify(data, null, 2)
      );
      console.log(`✅ Backed up ${table}: ${data?.length || 0} records`);
    } catch (err) {
      console.error(`Failed to backup ${table}:`, err);
    }
  }
  
  // Also get table structure information
  console.log('\nQuerying table structures...');
  
  // Query for all tables in the public schema
  const { data: tablesInfo } = await supabase.rpc('get_table_info', {});
  
  if (tablesInfo) {
    await fs.writeFile(
      path.join(backupDir, 'table_structures.json'),
      JSON.stringify(tablesInfo, null, 2)
    );
  }
  
  console.log(`\n✅ Backup completed: ${backupDir}`);
  return backupDir;
}

// Custom RPC function to get table info (add this to Supabase if needed)
const createTableInfoFunction = `
CREATE OR REPLACE FUNCTION get_table_info()
RETURNS TABLE (
  table_name text,
  column_name text,
  data_type text,
  is_nullable text,
  column_default text
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    t.table_name::text,
    t.column_name::text,
    t.data_type::text,
    t.is_nullable::text,
    t.column_default::text
  FROM information_schema.columns t
  WHERE t.table_schema = 'public'
  ORDER BY t.table_name, t.ordinal_position;
END;
$$ LANGUAGE plpgsql;
`;

backupDatabase().catch(console.error);