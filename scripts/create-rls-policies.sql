-- ============================================
-- RLS POLICIES FOR ADHD COACH IN DE BUURT
-- ============================================
-- Run this script in your Supabase SQL editor
-- Dashboard > SQL Editor > New Query
-- ============================================

-- 1. CITIES TABLE - Public read access
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public read access" ON cities;

-- Create new policy for public read
CREATE POLICY "Allow public read access" 
ON cities 
FOR SELECT 
TO public 
USING (true);

-- 2. PLACES TABLE - Public read access  
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public read access" ON places;

-- Create new policy for public read
CREATE POLICY "Allow public read access" 
ON places 
FOR SELECT 
TO public 
USING (true);

-- 3. POSTCODES TABLE - Public read access
-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Allow public read access" ON postcodes;

-- Create new policy for public read
CREATE POLICY "Allow public read access" 
ON postcodes 
FOR SELECT 
TO public 
USING (true);

-- ============================================
-- VERIFY RLS IS ENABLED (should return true for all)
-- ============================================
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('cities', 'places', 'postcodes');

-- ============================================
-- VERIFY POLICIES ARE CREATED
-- ============================================
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename IN ('cities', 'places', 'postcodes')
ORDER BY tablename, policyname;

-- ============================================
-- SUCCESS MESSAGE
-- ============================================
-- If you see 3 rows with rowsecurity = true
-- and 3 policies created, you're all set!
-- Your database is now secure with RLS enabled
-- and public read-only access configured.