const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  console.log('🚀 Setting up Supabase database schema...');
  
  try {
    // Test connection first
    const { data, error } = await supabase.from('cities').select('count');
    console.log('✅ Connected to Supabase successfully!');
    
    if (error && error.code === 'PGRST116') {
      console.log('📋 Tables don\'t exist yet - that\'s expected for first setup');
      console.log('');
      console.log('Next steps:');
      console.log('1. Go to your Supabase project: https://supabase.com/dashboard');
      console.log('2. Navigate to SQL Editor');
      console.log('3. Create a new query and paste this schema:');
      console.log('');
      console.log(getSchema());
      console.log('');
      console.log('4. Click "Run" to create the tables');
      console.log('5. Your app will then be fully connected to Supabase! 🎉');
      
    } else if (!error) {
      console.log('✅ Database tables already exist - you\'re all set!');
    } else {
      console.log('❌ Error:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

function getSchema() {
  return `-- ADHD Coaching Directory Schema
CREATE TABLE IF NOT EXISTS cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  province VARCHAR(100) NOT NULL,
  country VARCHAR(2) NOT NULL,
  population INTEGER,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  adhd_stats TEXT,
  tldr TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS coaches (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL,
  email VARCHAR(200),
  phone VARCHAR(50),
  website VARCHAR(300),
  specialization TEXT,
  description TEXT,
  address TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  city_id INTEGER REFERENCES cities(id),
  rating DECIMAL(3, 2),
  review_count INTEGER DEFAULT 0,
  is_child_friendly BOOLEAN DEFAULT FALSE,
  weekend_available BOOLEAN DEFAULT FALSE,
  online_available BOOLEAN DEFAULT FALSE,
  in_person_available BOOLEAN DEFAULT TRUE,
  accepts_insurance BOOLEAN DEFAULT FALSE,
  availability_status VARCHAR(50) DEFAULT 'available',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(300) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  meta_description VARCHAR(160),
  city_id INTEGER REFERENCES cities(id),
  province VARCHAR(100),
  tags TEXT,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS faq_items (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  "order" INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS chat_conversations (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(100) NOT NULL,
  messages TEXT,
  analysis TEXT,
  pain_points TEXT,
  recommendations TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);`;
}

setupDatabase();