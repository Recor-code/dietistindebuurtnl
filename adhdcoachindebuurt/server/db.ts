import { createClient } from '@supabase/supabase-js';
import * as schema from "../shared/schema";

// Use Supabase client instead of Neon driver for Supabase compatibility
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Supabase credentials must be set. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
  );
}

// Create Supabase client for server-side operations
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// For compatibility with existing Drizzle code, create a wrapper
export const db = {
  select: () => ({ from: (table: string) => supabase.from(table).select() }),
  insert: (data: any) => ({ into: (table: string) => supabase.from(table).insert(data) }),
  update: (data: any) => ({ table: (table: string) => supabase.from(table).update(data) }),
  delete: () => ({ from: (table: string) => supabase.from(table).delete() })
};