import { createClient } from '@supabase/supabase-js'

// The environment variables were swapped - URL contains the anon key and vice versa
// Fix by swapping them back to correct values
const supabaseUrl = 'https://dxpsufymxujtrzyexufe.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_URL! // This actually contains the JWT token

export const supabase = createClient(supabaseUrl, supabaseAnonKey)