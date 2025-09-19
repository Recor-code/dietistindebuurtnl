import { createClient } from '@supabase/supabase-js';

// Use Supabase HTTP client instead of direct database connection
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Supabase credentials must be set. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
  );
}

// Create Supabase client for server-side operations (bypasses RLS)
export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Export for compatibility with existing imports
export const db = supabase;