// Add missing cities to the cities table
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Read the city slugs from the file
const citySlugsList = `utrecht
nijmegen
franeker
oostsouburg
tiel
wapenveld
amsterdam
breda
nijkerk
rotterdam
eindhoven
delft
raamsdonksveer
barendrecht
zeist
enschede
harderwijk
alkmaar
amersfoort
apeldoorn
arnhem
baarn
barneveld
beilen
bleiswijk
boxmeer
broek-in-waterland
coevorden
dalfsen
de-mortel
de-rijp
dedemsvaart
delfgauw
den-haag
den-hoorn
deursendennenburg
deventer
diemen
dordrecht
druten
ede
elst
enkhuizen
epe
geldrop
gemert
goirle
gouda
groenekan
haarlem
halfweg
haulerwijk
heemstede
heerenveen
hendrikidoambacht
hilversum
hoek-van-holland
hoorn
hurdegaryp
kampen
kruiningen
leerdam
lichtenvoorde
lisse
loosbroek
meijel
middelburg
nederweert
nieuwegein
oegstgeest
oostburg
pijnacker
purmerend
reeuwijk
rijkevoort
s-gravenmoer
santpoortnoord
sint-jansklooster
son
teteringen
tilburg
tolbert
uden
veenendaal
veldhoven
vianen
vogelenzang
voorschoten
vortummullem
waarland
waddinxveen
wijchen
woerden
zaandam
zeewolde
zelhem
zoetermeer
zwolle
wamel
almere
vaassen
bennekom
shertogenbosch
boxtel
assen
boskoop
duiven
duivendrecht
almelo
groningen
hattem
odijk
winterswijk
hengelo
zandvoort
den-hout
leeuwarden
oosterhout
steenwijk
kloosterhaar
boekel
leiden
liempde
sintoedenrode
oud-zuilen
workum
elburg
helmond
sgravenzande
velden
bergen-op-zoom
culemborg
noordwijk
heerhugowaard
beek
goes
andijk
bergschenhoek
best
brummen
cuijk
emmen
heeswijk-dinther
honselersdijk
lelystad
noordwijkerhout
ochten
oost-west-en-middelbeers
rozendaal
schalkhaar
valkenburg
voorhout
voorburg
waalwijk
moordrecht
bemmel
broek-op-langedijk
mijdrecht
huizen
winschoten
anna-paulowna
baarlenassau
badhoevedorp
bussum
capelle-aan-den-ijssel
castricum
doetinchem
eemnes
geleen
gorinchem
haaren
heerlen
heythuysen
hoogeveen
hoogezand
hoogvliet-rotterdam
koekange
kudelstaart
maastricht
malden
oosterbeek
oss
papendrecht
stadskanaal
terborg
uitgeest
veghel
venray
waalre
zutphen
hilvarenbeek
vinkeveen
t-harde
naaldwijk
bilthoven
valkenswaard
roosendaal
witharen
dongen
heerde
vught
gilze
lage-zwaluwe
maarssen
sneek
loosdrecht
amstelveen
oirschot
westdorp
roermond
eibergen
wijk-aan-zee
zwijndrecht
ettenleur
katwijk-aan-zee
nistelrode
nootdorp
nuenen
rijswijk
rilland
wognum
wezep
sittard
simonshaven
meppel
berghem
bunde
de-zilk
den-helder
heusden
hoofddorp
ijsselstein
laren
oldenzaal
oosthuizen
reuver
rosmalen
schiedam
soest
spaubeek
terheijden
tubbergen
uithoorn
vlissingen
voorthuizen
zierikzee
amerongen
den-dungen
ermelo
hellevoetsluis
middelharnis
spijkenisse
zevenaar
driebergenrijsenburg
wijk-bij-duurstede
nieuwvennep
geertruidenberg
krimpen-aan-den-ijssel
tholen
vries
weert
giethoorn
de-westereen
beuningen
marken
oudbeijerland
wanssum
wateringen
wittem
ouderkerk-aan-de-amstel
ridderkerk
mill
velsenzuid
leiderdorp
wageningen
hillegom
haren
keijenborg
oudalblas
halsteren
borne
mechelen
ommel
renkum
alphen-aan-den-rijn
beemte-broekland
berlicum
bovenleeuwen
broekland
dieren
doesburg
drachten
emmeloord
emst
gulpen
hallum
hoogerheide
hoogwoud
kloosterzande
nuth
onstwedde
opperdoes
rheezerveen
schagen
sintmaartensdijk
venlo
vlaardingen
voerendaal
benedenleeuwen
eijsden
heemskerk
leuth
maarsbergen
steenbergen
terneuzen
velp
yerseke
doorn
naarden
weesp
wilp
zevenbergen
zevenhuizen
steggerda
roden
assendelft
doorwerth
rijsbergen
valburg
made
hoogland
elsloo
de-bilt
zwaag
heesch
maassluis
leusden
zaltbommel
buitenpost
hulst
overveen
winterswijk-ratum
hoevelaken
giessenburg
eelde
zuidlaren
deurne
ommen
ovezande
meerssen
bant
koedijk
ootmarsum
deinum
radewijk
weteringbrug
breukelen
nieuwbuinen
houten
poortugaal`.split('\n').map(s => s.trim()).filter(Boolean);

// Function to convert slug to proper city name
function slugToCityName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function addMissingCities() {
  console.log(`🏙️  Processing ${citySlugsList.length} city slugs...\n`);
  
  try {
    // Get existing cities
    console.log('Fetching existing cities...');
    const { data: existingCities, error: fetchError } = await supabase
      .from('cities')
      .select('slug, name');
    
    if (fetchError) {
      throw new Error(`Failed to fetch cities: ${fetchError.message}`);
    }
    
    const existingSlugs = new Set(existingCities.map(c => c.slug));
    console.log(`Found ${existingSlugs.size} existing cities\n`);
    
    // Filter out existing cities
    const newCitySlugs = citySlugsList.filter(slug => !existingSlugs.has(slug));
    
    if (newCitySlugs.length === 0) {
      console.log('✅ All cities already exist in the database!');
      return;
    }
    
    console.log(`Found ${newCitySlugs.length} new cities to add\n`);
    
    // Prepare new city records
    const newCities = newCitySlugs.map(slug => ({
      name: slugToCityName(slug),
      slug: slug,
      province: 'Unknown', // You'll need to update these manually or via another script
      country: 'NL'
    }));
    
    // Insert in batches of 50
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < newCities.length; i += 50) {
      const batch = newCities.slice(i, i + 50);
      
      const { data, error } = await supabase
        .from('cities')
        .insert(batch)
        .select();
      
      if (error) {
        console.error(`❌ Failed to insert batch ${i / 50 + 1}: ${error.message}`);
        errorCount += batch.length;
      } else {
        successCount += data.length;
        console.log(`✅ Inserted batch ${Math.floor(i / 50) + 1}: ${data.length} cities`);
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully added: ${successCount} cities`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`⏭️  Already existed: ${citySlugsList.length - newCitySlugs.length}`);
    console.log('='.repeat(60));
    console.log('\n✅ Cities added successfully!\n');
    
  } catch (error) {
    console.error('\n❌ Failed:', error.message);
    process.exit(1);
  }
}

addMissingCities();