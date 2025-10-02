-- Add slug column to places table
-- Run this in Supabase Dashboard → SQL Editor

-- Step 1: Add the slug column
ALTER TABLE places ADD COLUMN IF NOT EXISTS slug text;

-- Step 2: Create an index for faster lookups
CREATE INDEX IF NOT EXISTS idx_places_slug ON places(slug);

-- Step 3: Add additional columns we need for coach functionality
ALTER TABLE places ADD COLUMN IF NOT EXISTS specialization text;
ALTER TABLE places ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE places ADD COLUMN IF NOT EXISTS city_id integer REFERENCES cities(id);
ALTER TABLE places ADD COLUMN IF NOT EXISTS rating decimal(3,2);
ALTER TABLE places ADD COLUMN IF NOT EXISTS review_count integer DEFAULT 0;
ALTER TABLE places ADD COLUMN IF NOT EXISTS is_child_friendly boolean DEFAULT false;
ALTER TABLE places ADD COLUMN IF NOT EXISTS weekend_available boolean DEFAULT false;
ALTER TABLE places ADD COLUMN IF NOT EXISTS online_available boolean DEFAULT false;
ALTER TABLE places ADD COLUMN IF NOT EXISTS in_person_available boolean DEFAULT true;
ALTER TABLE places ADD COLUMN IF NOT EXISTS accepts_insurance boolean DEFAULT false;
ALTER TABLE places ADD COLUMN IF NOT EXISTS availability_status text DEFAULT 'available';

-- Verify the columns were added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'places' 
AND column_name IN ('slug', 'specialization', 'description', 'city_id', 'rating');
