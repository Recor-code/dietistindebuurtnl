// Update province and country for cities from id 108 and above
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// City to province mapping for Dutch cities
const cityProvinceMap = {
  // Utrecht
  'utrecht': 'Utrecht', 'zeist': 'Utrecht', 'amersfoort': 'Utrecht', 'soest': 'Utrecht',
  'nieuwegein': 'Utrecht', 'veenendaal': 'Utrecht', 'woerden': 'Utrecht', 'vianen': 'Utrecht',
  'odijk': 'Utrecht', 'bilthoven': 'Utrecht', 'maarssen': 'Utrecht', 'baarn': 'Utrecht',
  'oud-zuilen': 'Utrecht', 'ijsselstein': 'Utrecht', 'leusden': 'Utrecht', 'bunnik': 'Utrecht',
  'de-bilt': 'Utrecht', 'houten': 'Utrecht', 'wijk-bij-duurstede': 'Utrecht', 'doorn': 'Utrecht',
  
  // Gelderland
  'nijmegen': 'Gelderland', 'apeldoorn': 'Gelderland', 'arnhem': 'Gelderland', 'ede': 'Gelderland',
  'harderwijk': 'Gelderland', 'barneveld': 'Gelderland', 'tiel': 'Gelderland', 'nijkerk': 'Gelderland',
  'druten': 'Gelderland', 'elst': 'Gelderland', 'epe': 'Gelderland', 'wijchen': 'Gelderland',
  'duiven': 'Gelderland', 'winterswijk': 'Gelderland', 'doetinchem': 'Gelderland', 'zutphen': 'Gelderland',
  'wageningen': 'Gelderland', 'renkum': 'Gelderland', 'vaassen': 'Gelderland', 'bennekom': 'Gelderland',
  'hattem': 'Gelderland', 'doesburg': 'Gelderland', 'zelhem': 'Gelderland', 'wamel': 'Gelderland',
  'oosterbeek': 'Gelderland', 'bemmel': 'Gelderland', 'malden': 'Gelderland', 'eibergen': 'Gelderland',
  'terborg': 'Gelderland', 'zevenaar': 'Gelderland', 'ermelo': 'Gelderland', 'keijenborg': 'Gelderland',
  'dieren': 'Gelderland', 'doorwerth': 'Gelderland', 'beuningen': 'Gelderland', 'elburg': 'Gelderland',
  'heerde': 'Gelderland', 'wezep': 'Gelderland', 'valburg': 'Gelderland', 'ommel': 'Gelderland',
  'ochten': 'Gelderland', 'rozendaal': 'Gelderland', 'brummen': 'Gelderland', 'velp': 'Gelderland',
  
  // Noord-Holland
  'amsterdam': 'Noord-Holland', 'haarlem': 'Noord-Holland', 'alkmaar': 'Noord-Holland',
  'zaandam': 'Noord-Holland', 'purmerend': 'Noord-Holland', 'hoorn': 'Noord-Holland',
  'heemstede': 'Noord-Holland', 'diemen': 'Noord-Holland', 'halfweg': 'Noord-Holland',
  'enkhuizen': 'Noord-Holland', 'broek-in-waterland': 'Noord-Holland', 'de-rijp': 'Noord-Holland',
  'hoek-van-holland': 'Noord-Holland', 'heerhugowaard': 'Noord-Holland', 'hoofddorp': 'Noord-Holland',
  'amstelveen': 'Noord-Holland', 'hilversum': 'Noord-Holland', 'naaldwijk': 'Noord-Holland',
  'zandvoort': 'Noord-Holland', 'huizen': 'Noord-Holland', 'bussum': 'Noord-Holland',
  'castricum': 'Noord-Holland', 'uitgeest': 'Noord-Holland', 'wijk-aan-zee': 'Noord-Holland',
  'santpoortnoord': 'Noord-Holland', 'den-helder': 'Noord-Holland', 'andijk': 'Noord-Holland',
  'anna-paulowna': 'Noord-Holland', 'badhoevedorp': 'Noord-Holland', 'kudelstaart': 'Noord-Holland',
  'uithoorn': 'Noord-Holland', 'loosdrecht': 'Noord-Holland', 'vinkeveen': 'Noord-Holland',
  'koekange': 'Noord-Holland', 'ouderkerk-aan-de-amstel': 'Noord-Holland', 'marken': 'Noord-Holland',
  'laren': 'Noord-Holland', 'naarden': 'Noord-Holland', 'weesp': 'Noord-Holland',
  'hoogwoud': 'Noord-Holland', 'koedijk': 'Noord-Holland', 'assendelft': 'Noord-Holland',
  'overveen': 'Noord-Holland', 'heemskerk': 'Noord-Holland', 'opperdoes': 'Noord-Holland',
  'schagen': 'Noord-Holland', 'oosthuizen': 'Noord-Holland', 'broek-op-langedijk': 'Noord-Holland',
  
  // Zuid-Holland
  'rotterdam': 'Zuid-Holland', 'delft': 'Zuid-Holland', 'den-haag': 'Zuid-Holland',
  'dordrecht': 'Zuid-Holland', 'gouda': 'Zuid-Holland', 'leiden': 'Zuid-Holland',
  'zoetermeer': 'Zuid-Holland', 'barendrecht': 'Zuid-Holland', 'voorschoten': 'Zuid-Holland',
  'waddinxveen': 'Zuid-Holland', 'pijnacker': 'Zuid-Holland', 'delfgauw': 'Zuid-Holland',
  'den-hoorn': 'Zuid-Holland', 'reeuwijk': 'Zuid-Holland', 'bleiswijk': 'Zuid-Holland',
  'boskoop': 'Zuid-Holland', 'capelle-aan-den-ijssel': 'Zuid-Holland', 'papendrecht': 'Zuid-Holland',
  'zwijndrecht': 'Zuid-Holland', 'spijkenisse': 'Zuid-Holland', 'schiedam': 'Zuid-Holland',
  'vlaardingen': 'Zuid-Holland', 'maassluis': 'Zuid-Holland', 'ridderkerk': 'Zuid-Holland',
  'noordwijk': 'Zuid-Holland', 'katwijk-aan-zee': 'Zuid-Holland', 'leiderdorp': 'Zuid-Holland',
  'oegstgeest': 'Zuid-Holland', 'voorburg': 'Zuid-Holland', 'rijswijk': 'Zuid-Holland',
  'nootdorp': 'Zuid-Holland', 'alphen-aan-den-rijn': 'Zuid-Holland', 'gorinchem': 'Zuid-Holland',
  'hellevoetsluis': 'Zuid-Holland', 'krimpen-aan-den-ijssel': 'Zuid-Holland', 'giessenburg': 'Zuid-Holland',
  'noordwijkerhout': 'Zuid-Holland', 'de-zilk': 'Zuid-Holland', 'voorhout': 'Zuid-Holland',
  'moordrecht': 'Zuid-Holland', 'bergschenhoek': 'Zuid-Holland', 'oudbeijerland': 'Zuid-Holland',
  'wateringen': 'Zuid-Holland', 'velsenzuid': 'Zuid-Holland', 'hillegom': 'Zuid-Holland',
  'oudalblas': 'Zuid-Holland', 'lisse': 'Zuid-Holland', 'hoogvliet-rotterdam': 'Zuid-Holland',
  'poortugaal': 'Zuid-Holland', 'sgravenzande': 'Zuid-Holland', 'honselersdijk': 'Zuid-Holland',
  'middelharnis': 'Zuid-Holland',
  
  // Noord-Brabant
  'eindhoven': 'Noord-Brabant', 'breda': 'Noord-Brabant', 'tilburg': 'Noord-Brabant',
  'shertogenbosch': 'Noord-Brabant', 'helmond': 'Noord-Brabant', 'oss': 'Noord-Brabant',
  'uden': 'Noord-Brabant', 'boxtel': 'Noord-Brabant', 'roosendaal': 'Noord-Brabant',
  'raamsdonksveer': 'Noord-Brabant', 'geldrop': 'Noord-Brabant', 'gemert': 'Noord-Brabant',
  'goirle': 'Noord-Brabant', 'boxmeer': 'Noord-Brabant', 'de-mortel': 'Noord-Brabant',
  'veldhoven': 'Noord-Brabant', 'best': 'Noord-Brabant', 'bergen-op-zoom': 'Noord-Brabant',
  'oosterhout': 'Noord-Brabant', 'valkenswaard': 'Noord-Brabant', 'dongen': 'Noord-Brabant',
  'vught': 'Noord-Brabant', 'gilze': 'Noord-Brabant', 'oirschot': 'Noord-Brabant',
  'nuenen': 'Noord-Brabant', 'son': 'Noord-Brabant', 'veghel': 'Noord-Brabant',
  'hilvarenbeek': 'Noord-Brabant', 'ettenleur': 'Noord-Brabant', 'heusden': 'Noord-Brabant',
  'waalwijk': 'Noord-Brabant', 'cuijk': 'Noord-Brabant', 'boekel': 'Noord-Brabant',
  'liempde': 'Noord-Brabant', 'sintoedenrode': 'Noord-Brabant', 'velden': 'Noord-Brabant',
  'heeswijk-dinther': 'Noord-Brabant', 'oost-west-en-middelbeers': 'Noord-Brabant',
  'haaren': 'Noord-Brabant', 'rosmalen': 'Noord-Brabant', 'geertruidenberg': 'Noord-Brabant',
  'nistelrode': 'Noord-Brabant', 's-gravenmoer': 'Noord-Brabant', 'teteringen': 'Noord-Brabant',
  'den-hout': 'Noord-Brabant', 'steenbergen': 'Noord-Brabant', 'rijsbergen': 'Noord-Brabant',
  'made': 'Noord-Brabant', 'zevenbergen': 'Noord-Brabant', 'halsteren': 'Noord-Brabant',
  'berlicum': 'Noord-Brabant', 'mechelen': 'Noord-Brabant', 'den-dungen': 'Noord-Brabant',
  'deurne': 'Noord-Brabant', 'heesch': 'Noord-Brabant', 'lage-zwaluwe': 'Noord-Brabant',
  'westdorp': 'Noord-Brabant', 'mill': 'Noord-Brabant', 'terheijden': 'Noord-Brabant',
  'berghem': 'Noord-Brabant',
  
  // Limburg
  'maastricht': 'Limburg', 'heerlen': 'Limburg', 'sittard': 'Limburg', 'venlo': 'Limburg',
  'geleen': 'Limburg', 'roermond': 'Limburg', 'weert': 'Limburg', 'venray': 'Limburg',
  'beek': 'Limburg', 'heythuysen': 'Limburg', 'reuver': 'Limburg', 'bunde': 'Limburg',
  'gulpen': 'Limburg', 'nuth': 'Limburg', 'spaubeek': 'Limburg', 'voerendaal': 'Limburg',
  'eijsden': 'Limburg', 'meerssen': 'Limburg', 'elsloo': 'Limburg', 'wittem': 'Limburg',
  'leuth': 'Limburg',
  
  // Overijssel
  'enschede': 'Overijssel', 'zwolle': 'Overijssel', 'deventer': 'Overijssel',
  'almelo': 'Overijssel', 'hengelo': 'Overijssel', 'kampen': 'Overijssel',
  'dalfsen': 'Overijssel', 'dedemsvaart': 'Overijssel', 'steenwijk': 'Overijssel',
  'deursendennenburg': 'Overijssel', 'tubbergen': 'Overijssel', 'oldenzaal': 'Overijssel',
  'kloosterhaar': 'Overijssel', 'hurdegaryp': 'Overijssel', 't-harde': 'Overijssel',
  'schalkhaar': 'Overijssel', 'ommen': 'Overijssel', 'borne': 'Overijssel',
  'rheezerveen': 'Overijssel', 'ootmarsum': 'Overijssel',
  
  // Friesland
  'leeuwarden': 'Friesland', 'heerenveen': 'Friesland', 'sneek': 'Friesland',
  'haulerwijk': 'Friesland', 'workum': 'Friesland', 'drachten': 'Friesland',
  'hallum': 'Friesland', 'de-westereen': 'Friesland', 'buitenpost': 'Friesland',
  'deinum': 'Friesland',
  
  // Groningen
  'groningen': 'Groningen', 'winschoten': 'Groningen', 'hoogezand': 'Groningen',
  'stadskanaal': 'Groningen', 'onstwedde': 'Groningen', 'eelde': 'Groningen',
  'zuidlaren': 'Groningen', 'roden': 'Groningen',
  
  // Drenthe
  'emmen': 'Drenthe', 'hoogeveen': 'Drenthe', 'assen': 'Drenthe', 'coevorden': 'Drenthe',
  'beilen': 'Drenthe', 'meppel': 'Drenthe', 'emst': 'Drenthe', 'nieuwbuinen': 'Drenthe',
  'vries': 'Drenthe',
  
  // Zeeland
  'middelburg': 'Zeeland', 'goes': 'Zeeland', 'vlissingen': 'Zeeland', 'terneuzen': 'Zeeland',
  'zierikzee': 'Zeeland', 'kruiningen': 'Zeeland', 'tholen': 'Zeeland', 'hulst': 'Zeeland',
  'oostburg': 'Zeeland', 'oostsouburg': 'Zeeland', 'rilland': 'Zeeland', 'yerseke': 'Zeeland',
  'ovezande': 'Zeeland', 'kloosterzande': 'Zeeland', 'sintmaartensdijk': 'Zeeland',
  
  // Flevoland
  'almere': 'Flevoland', 'lelystad': 'Flevoland', 'zeewolde': 'Flevoland',
  'emmeloord': 'Flevoland', 'bant': 'Flevoland',
  
  // Special cases
  'franeker': 'Friesland', 'wapenveld': 'Gelderland', 'groenekan': 'Utrecht',
  'hendrikidoambacht': 'Zuid-Holland', 'leerdam': 'Zuid-Holland', 'lichtenvoorde': 'Gelderland',
  'loosbroek': 'Noord-Brabant', 'meijel': 'Limburg', 'nederweert': 'Limburg',
  'rijkevoort': 'Noord-Brabant', 'sint-jansklooster': 'Overijssel', 'tolbert': 'Groningen',
  'vogelenzang': 'Noord-Holland', 'vortummullem': 'Overijssel', 'waarland': 'Noord-Holland',
  'valkenburg': 'Limburg', 'baarlenassau': 'Noord-Brabant', 'culemborg': 'Gelderland',
  'mijdrecht': 'Utrecht', 'waalre': 'Noord-Brabant', 'nieuwvennep': 'Noord-Holland',
  'witharen': 'Drenthe', 'giethoorn': 'Overijssel', 'wanssum': 'Limburg',
  'simonshaven': 'Zuid-Holland', 'bovenleeuwen': 'Gelderland', 'broekland': 'Overijssel',
  'benedenleeuwen': 'Gelderland', 'maarsbergen': 'Utrecht', 'amerongen': 'Utrecht',
  'driebergenrijsenburg': 'Utrecht', 'hoevelaken': 'Gelderland', 'zevenhuizen': 'Zuid-Holland',
  'steggerda': 'Friesland', 'hoogland': 'Utrecht', 'zwaag': 'Noord-Holland',
  'zaltbommel': 'Gelderland', 'winterswijk-ratum': 'Gelderland', 'radewijk': 'Overijssel',
  'weteringbrug': 'Zuid-Holland', 'breukelen': 'Utrecht', 'beemte-broekland': 'Overijssel',
  'hoogerheide': 'Noord-Brabant', 'wilp': 'Gelderland'
};

async function updateProvinces() {
  console.log('🗺️  Updating provinces for cities from id 108 and above...\n');
  
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
    let notFoundCount = 0;
    let errorCount = 0;
    
    for (const city of cities) {
      const province = cityProvinceMap[city.slug];
      
      if (!province) {
        console.log(`⚠️  No province mapping for: ${city.name} (${city.slug})`);
        notFoundCount++;
        continue;
      }
      
      // Update the city
      const { error: updateError } = await supabase
        .from('cities')
        .update({ 
          province: province,
          country: 'NL'
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
    console.log(`⚠️  No mapping found: ${notFoundCount} cities`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log('='.repeat(60));
    console.log('\n✅ Province update completed!\n');
    
  } catch (error) {
    console.error('\n❌ Failed:', error.message);
    process.exit(1);
  }
}

updateProvinces();