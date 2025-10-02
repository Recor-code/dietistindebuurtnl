// Update adhd_stats and tldr for cities from id 108 and above
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Function to generate ADHD stats based on city size
function generateADHDStats(cityName, population) {
  // Estimate population if not provided (based on typical Dutch city sizes)
  const estimatedPop = population || 50000;
  
  // Calculate ADHD statistics (approximately 5% of population has ADHD)
  const adhdPercentage = 5;
  const estimatedADHD = Math.round((estimatedPop * adhdPercentage) / 100);
  const children = Math.round(estimatedADHD * 0.4); // 40% children
  const adults = Math.round(estimatedADHD * 0.6); // 60% adults
  const diagnosed = Math.round(estimatedADHD * 0.7); // 70% diagnosed
  const seeking = Math.round(estimatedADHD * 0.3); // 30% actively seeking help
  
  return JSON.stringify({
    estimatedADHDPopulation: estimatedADHD,
    percentageWithADHD: adhdPercentage,
    childrenWithADHD: children,
    adultsWithADHD: adults,
    diagnosedCases: diagnosed,
    seekingSupport: seeking,
    availableCoaches: Math.floor(Math.random() * 10) + 3, // 3-12 coaches
    lastUpdated: '2025-10-02'
  });
}

// Function to generate TL;DR based on city characteristics
function generateTLDR(cityName, province) {
  const templates = [
    `ADHD coaching in ${cityName}: vind lokale specialisten en begeleiding voor volwassenen en kinderen. Praktijken in ${province} met bewezen aanpak.`,
    `Op zoek naar ADHD hulp in ${cityName}? Ontdek ervaren coaches en therapeuten in jouw regio. Persoonlijke begeleiding in ${province}.`,
    `ADHD begeleiding ${cityName}: van diagnose tot dagelijkse ondersteuning. Lokale coaches met expertise in ${province}.`,
    `Professionele ADHD coaching in ${cityName}. Specialisten voor kinderen, jongeren en volwassenen in ${province}.`,
    `ADHD ondersteuning in ${cityName}: vind de juiste coach voor jouw situatie. Ervaren professionals in ${province}.`
  ];
  
  // Select template based on city name hash for consistency
  const index = cityName.charCodeAt(0) % templates.length;
  return templates[index];
}

async function updateCityADHDInfo() {
  console.log('📊 Updating ADHD stats and TL;DR for cities from id 108 and above...\n');
  
  try {
    // Get cities from id 108 and above
    const { data: cities, error: fetchError } = await supabase
      .from('cities')
      .select('*')
      .gte('id', 108)
      .order('id');
    
    if (fetchError) {
      throw new Error(`Failed to fetch cities: ${fetchError.message}`);
    }
    
    console.log(`Found ${cities.length} cities to update\n`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const city of cities) {
      const adhdStats = generateADHDStats(city.name, city.population);
      const tldr = generateTLDR(city.name, city.province);
      
      // Update the city
      const { error: updateError } = await supabase
        .from('cities')
        .update({ 
          adhd_stats: adhdStats,
          tldr: tldr
        })
        .eq('id', city.id);
      
      if (updateError) {
        console.error(`❌ Failed to update ${city.name}: ${updateError.message}`);
        errorCount++;
      } else {
        successCount++;
        if (successCount % 50 === 0) {
          console.log(`✅ Updated ${successCount}/${cities.length} cities...`);
        }
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully updated: ${successCount} cities`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log('='.repeat(60));
    
    // Show a sample
    if (cities.length > 0) {
      const sample = cities[0];
      console.log('\n📝 Sample output:');
      console.log(`City: ${sample.name}`);
      console.log(`ADHD Stats: ${generateADHDStats(sample.name, sample.population).substring(0, 100)}...`);
      console.log(`TL;DR: ${generateTLDR(sample.name, sample.province)}`);
    }
    
    console.log('\n✅ ADHD info update completed!\n');
    
  } catch (error) {
    console.error('\n❌ Failed:', error.message);
    process.exit(1);
  }
}

updateCityADHDInfo();