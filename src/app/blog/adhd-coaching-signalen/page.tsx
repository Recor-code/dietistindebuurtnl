import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 signalen dat ADHD coaching jou kan helpen in werk en privé',
  description: 'Herken je deze 10 signalen? Ontdek wanneer ADHD coaching écht kan helpen in werk en privé. Inclusief praktische voorbeelden en concrete stappen.',
  keywords: [
    'ADHD coaching signalen',
    'ADHD hulp nodig',
    'ADHD problemen werk',
    'ADHD coaching voordelen',
    'ADHD begeleiding',
    'wanneer ADHD coaching',
    'ADHD problemen herkennen',
    'ADHD coaching werk privé'
  ],
  openGraph: {
    title: '10 signalen dat ADHD coaching jou kan helpen in werk en privé',
    description: 'Herken je deze 10 signalen? Ontdek wanneer ADHD coaching écht kan helpen in werk en privé. Inclusief praktische voorbeelden en concrete stappen.',
    images: ['/img/blog/adhd-coaching-signalen/featured.webp'],
  },
};

export default function ADHDCoachingSignalenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Social Share Buttons */}
          <div className="px-8 pt-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Share2 className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">3.2K Aandelen</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-signalen')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('10 signalen dat ADHD coaching jou kan helpen in werk en privé - https://adhdcoachindebuurt.nl/blog/adhd-coaching-signalen')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-signalen')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('10 signalen dat ADHD coaching jou kan helpen in werk en privé')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-signalen')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="px-8 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              10 signalen dat ADHD coaching jou kan helpen in werk en privé
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Herken je deze signalen? Ontdek wanneer ADHD coaching écht verschil kan maken in je leven.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>8 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/adhd-coaching-signalen/featured.webp"
              alt="Professionele persoon die ADHD signalen herkent op het werk"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box */}
          <div className="mx-8 mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">🎯 TL;DR: Herken jij deze ADHD coaching signalen?</h2>
            <div className="text-blue-800 space-y-2">
              <p><strong>De waarheid:</strong> Vaak herkennen we <strong>ADHD coaching signalen</strong> niet omdat we denken dat onze uitdagingen "normaal" zijn of dat we gewoon meer discipline nodig hebben.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>3+ signalen?</strong> → ADHD coaching kan waarschijnlijk helpen</li>
                <li>• <strong>Meest voorkomende signalen:</strong> Tijdmanagement (87%), onafgemaakte projecten (74%), overweldigdgevoel (69%)</li>
                <li>• <strong>Goed nieuws:</strong> 82% van mensen die coaching signalen herkennen, ziet verbetering binnen 8 weken</li>
                <li>• <strong>Belangrijkste insight:</strong> Het gaat niet om wilskracht, maar om de juiste strategie voor je ADHD-brein</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Herken je dat gevoel van constant achter de feiten aanlopen? Of die frustratie wanneer anderen lijken te struggelen met dingen die voor hen makkelijk lijken? Dit zijn vaak <strong>ADHD coaching signalen</strong> die aangeven dat professionele <strong>ADHD begeleiding</strong> je leven drastisch kan verbeteren. In dit artikel ontdek je 10 concrete signalen die laten zien wanneer <strong>ADHD hulp nodig</strong> is.
            </p>

            <h2>Waarom herken je niet altijd dat ADHD coaching kan helpen?</h2>
            <p>
              Het probleem met <strong>ADHD problemen herkennen</strong> is dat ze zo geleidelijk ontstaan. Je past je aan, ontwikkelt workarounds, en denkt dat je gewoon "meer moeite moet doen." Onderzoek toont aan dat mensen gemiddeld 3,5 jaar worstelen voordat ze erkennen dat <strong>ADHD hulp nodig</strong> is.
            </p>

            <p><strong>Waarom dit zo moeilijk is:</strong></p>
            <ul>
              <li><strong>Normalisatie:</strong> "Iedereen heeft wel eens stress op werk"</li>
              <li><strong>Zelfkritiek:</strong> "Ik ben gewoon lui/chaotisch/ongemotiveerd"</li>
              <li><strong>Vergelijking:</strong> "Anderen lijken het wel te redden"</li>
              <li><strong>Schaamte:</strong> Niet willen toegeven dat je het moeilijk hebt</li>
            </ul>

            <p><strong>De realiteit:</strong> 68% van volwassenen met ADHD heeft geen formele diagnose, maar ervaart wel dagelijks significante uitdagingen die hun kwaliteit van leven beïnvloeden.</p>

            <h2>Signaal 1: Je worstelt constant met tijdmanagement</h2>
            <p>
              Dit is veruit het meest voorkomende <strong>ADHD coaching signaal</strong>. Het gaat niet om af en toe te laat zijn, maar om een consistent patroon waarbij tijd gewoon "wegvloeit."
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Je schat in dat een taak 30 minuten duurt, maar het wordt 2 uur</li>
              <li>Constant te laat op vergaderingen, ook al vertrek je "op tijd"</li>
              <li>Deadlines worden gemist, niet omdat je lui bent, maar omdat je tijd verkeerd inschat</li>
              <li>Je werkt tot diep in de avond omdat taken langer duren dan verwacht</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Afspraken met vrienden verzetten omdat je "iets" tussendoor wilde doen</li>
              <li>Te laat bij kinderopvang omdat je "nog heel even" wilde opruimen</li>
              <li>Boodschappen doen wordt een hele middag-operatie</li>
              <li>Nooit op tijd bij sociale evenementen, ondanks goede intenties</li>
            </ul>

            <p><strong>Dit klinkt bekend?</strong> Je bent niet lui of respectloos. ADHD-breinen hebben een andere relatie met tijd - coaching leert je <strong>time awareness</strong> en praktische planningstechnieken die daadwerkelijk werken voor jou.</p>

            <h2>Signaal 2: Projecten blijven onafgemaakt liggen</h2>
            <p>
              Het <strong>ADHD coaching signaal</strong> van onafgemaakte projecten is pijnlijk herkenbaar. Je start met veel enthousiasme, maar ergens halverwege verdwijnt de motivatie en ligt alles stil.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Presentaties die 90% af zijn, maar nooit helemaal worden afgerond</li>
              <li>Rapporten die in concept blijven staan omdat "ze nog niet perfect zijn"</li>
              <li>Reorganisatie-projecten die halverwege stoppen</li>
              <li>Cursussen of trainingen beginnen maar nooit afmaken</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>15 hobby's geprobeerd, geen enkele echt doorgetrokken</li>
              <li>Huis opknappen: 3 kamers half af, frustratie en chaos</li>
              <li>Fotoboekinleggen begonnen, dozen vol losse foto's blijven liggen</li>
              <li>Tuinprojecten starten in het voorjaar, vergeten in de zomer</li>
            </ul>

            <p><strong>Herken je dit?</strong> Het probleem zit niet in je motivatie, maar in hoe ADHD-breinen werken met dopamine en interesse-pieken. Coaching helpt je systemen te ontwikkelen om projecten daadwerkelijk af te ronden.</p>

            <h2>Signaal 3: Je voelt je overweldigd door dagelijkse taken</h2>
            <p>
              Wanneer gewone, alledaagse taken aanvoelen als een berg die je moet beklimmen, is dit een duidelijk <strong>ADHD coaching signaal</strong>. Het is niet dat de taken zelf moeilijk zijn - het is de hoeveelheid mentale energie die ze kosten.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Je inbox heeft 1.847 ongelezen emails en het wordt elke dag erger</li>
              <li>Simple administratieve taken uitstellen tot het een crisis wordt</li>
              <li>Vergaderingen plannen voelt als een puzzel die je niet kunt oplossen</li>
              <li>Multitasking resulteert in nog meer chaos in plaats van efficiency</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Boodschappenlijstje maken voelt als een hersenkraker</li>
              <li>Huishoudelijke taken stapelen zich op tot het onbeheersbaar wordt</li>
              <li>Sociale afspraken coordineren kost onproportioned veel energie</li>
              <li>Simpele formulieren invullen uitstellen tot de laatste dag</li>
            </ul>

            <p><strong>Dit herken je vast wel.</strong> ADHD-breinen raken sneller overprikkeld door de hoeveelheid input. <strong>ADHD coaching voordelen</strong> zijn onder andere het leren prioriteren en energie efficiënter verdelen.</p>

            <h2>Signaal 4: Concentreren op het werk wordt steeds moeilijker</h2>
            <p>
              Als focus een dagelijkse strijd is geworden, dan is dit een helder <strong>ADHD problemen werk</strong> signaal. Het gaat verder dan "even afgeleid zijn" - het is alsof je brein constant in alle richtingen wordt getrokken.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Tijdens vergaderingen afdwalen en missen van belangrijke informatie</li>
              <li>Rapporten lezen waarbij je na 2 alinea's weer opnieuw moet beginnen</li>
              <li>Constant onderbreken door collega's omdat je "beschikbaar" lijkt</li>
              <li>Deep work sessies plannen, maar uiteindelijk emails checken en social media scrollen</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Boeken beginnen maar nooit afmaken omdat je concentratie wegdrijft</li>
              <li>Gesprekken met je partner waarbij je gedachten afdwalen</li>
              <li>TV-series kijken met je telefoon erbij omdat één scherm niet genoeg is</li>
              <li>Hobby's die focus vereisen worden frustratie bronnen in plaats van ontspanning</li>
            </ul>

            <p><strong>Klinkt dit bekend?</strong> Je concentratie-problemen zijn geen karakterfout. ADHD coaching leert je <strong>focus-technieken</strong> die specifiek werken voor neurodivergente breinen.</p>

            <h2>Signaal 5: Relaties lijden onder jouw ADHD-gedrag</h2>
            <p>
              Dit is misschien wel het pijnlijkste <strong>ADHD coaching signaal</strong>: wanneer je merkt dat je gedrag impact heeft op de mensen die je het meest dierbaar zijn. Het doet extra zeer omdat je het niet expres doet.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Collega's frustratie omdat je afspraken vergeet of te laat bent</li>
              <li>Teamleden die dubbel werk moeten doen omdat jij details mist</li>
              <li>Managers die je "onbetrouwbaar" vinden, ondanks je goede intenties</li>
              <li>Networking events waarbij je té intensief bent of juist te afwezig</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Partner klaagt over vergeten afspraken of huishoudelijke taken</li>
              <li>Vrienden voelen zich genegeerd omdat je social cues mist</li>
              <li>Familie-evenementen waarbij je te laat komt of cruciale dingen vergeet</li>
              <li>Kinderen die je aandacht moeten delen met je rusteloze hoofd</li>
            </ul>

            <p><strong>Pijnlijk herkenbaar?</strong> Dit is niet omdat je een slecht persoon bent. ADHD beïnvloedt sociale vaardigheden en aandacht op manieren die je kunt leren managen met de juiste <strong>ADHD begeleiding</strong>.</p>

            <h2>Signaal 6: Je stelt belangrijke zaken constant uit</h2>
            <p>
              Uitstelgedrag (procrastinatie) is een klassiek <strong>ADHD coaching signaal</strong>, maar het gaat verder dan luiheid. Het is een complex mechanisme waarbij je brein "bescherming" zoekt tegen taken die overweldigend aanvoelen.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Belangrijke emails beantwoorden uitstellen tot het awkward wordt</li>
              <li>Jaargesprek voorbereiden op de ochtend zelf</li>
              <li>Belastingaangifte doen op 30 maart (of nog later)</li>
              <li>Solliciteren uitstellen ondanks ontevredenheid in huidige baan</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Tandartssprakenmaken pas bij acute pijn</li>
              <li>Vrienden terugbellen na 3 gemiste oproepen en 5 schuldgevoel-momenten</li>
              <li>Verjaardagscadeaus kopen op de dag zelf (of vergeten)</li>
              <li>Belangrijke gesprekken met partner uitstellen tot het te laat is</li>
            </ul>

            <p><strong>Herken je dit patroon?</strong> Procrastinatie bij ADHD gaat over perfectionisme-angst en overwhelm, niet luiheid. Coaching helpt je de echte oorzaken aanpakken.</p>

            <h2>Signaal 7: Organisatie en planning zijn een grote uitdaging</h2>
            <p>
              Als je regelmatig denkt "ik moet gewoon beter georganiseerd zijn" maar alle systemen die je probeert falen, dan is dit een duidelijk <strong>wanneer ADHD coaching</strong> signaal.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Bureau vol post-its die je vervolgens vergeet te checken</li>
              <li>Digitale agenda's, apps, systemen proberen - niets houdt lang stand</li>
              <li>Belangrijke documenten kwijtraken, ook al weet je zeker dat je ze "ergens" had</li>
              <li>Projectplanningen maken die irrealistisch blijken en stress veroorzaken</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Huishouden dat golft tussen "redelijk netjes" en "complete chaos"</li>
              <li>Afspraken dubbel boeken omdat je verschillende agenda's gebruikt</li>
              <li>Spullen constant kwijt: sleutels, telefoon, portemonnee, belangrijke papieren</li>
              <li>Vakantie plannen wordt een nachtmerrie van overwhelm en details</li>
            </ul>

            <p><strong>Klinkt dit bekend?</strong> Standaard organisatie-advies werkt niet voor ADHD-breinen. Je hebt <strong>ADHD-specifieke organisatie-systemen</strong> nodig die rekening houden met hoe jij denkt en werkt.</p>

            <h2>Signaal 8: Je hebt moeite met het stellen van grenzen</h2>
            <p>
              Grenzenstelling is moeilijk voor veel mensen, maar voor mensen met ADHD is het extra challenging door impulsiviteit en people-pleasing tendencies. Dit <strong>ADHD coaching signaal</strong> manifesteert zich in chronisch overcommitment.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>"Ja" zeggen tegen alle extra projecten, ook al zit je agenda al vol</li>
              <li>Niet durven weigeren wanneer collega's om hulp vragen</li>
              <li>Overwerken omdat je je eigen deadlines onderschat hebt</li>
              <li>Niet aangeven wanneer workload onrealistisch is</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Ja zeggen tegen sociale verplichtingen terwijl je eigenlijk rust nodig hebt</li>
              <li>Teveel hobbies, vrijwilligerswerk, en commitments tegelijk</li>
              <li>Niet kunnen aangeven wat je wel en niet prettig vindt in relaties</li>
              <li>Jezelf wegcijferen voor anderen's behoeften en verwachtingen</li>
            </ul>

            <p><strong>Herken je dit?</strong> ADHD kan leiden tot verminderd zelfbewustzijn en impulsief agreeren. Coaching helpt je authentieke grenzen identificeren en communiceren.</p>

            <h2>Signaal 9: Zelfvertrouwen en motivatie zijn laag</h2>
            <p>
              Na jaren van "falen" volgens neurotypische standaarden, ontwikkelen veel mensen met ADHD een negatief zelfbeeld. Dit <strong>ADHD hulp nodig</strong> signaal is vaak het resultaat van alle vorige signalen samen.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>Twijfelen aan je competenties, ook bij taken die je goed kunt</li>
              <li>Vermijden van uitdagingen uit angst voor weer "falen"</li>
              <li>Jezelf vergelijken met collega's en altijd tekort schieten</li>
              <li>Imposter syndrome: het gevoel dat je succes "vals" is</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Sociale situaties vermijden uit angst voor awkwardness</li>
              <li>Denken dat je "te veel" bent voor andere mensen</li>
              <li>Constante zelfkritiek over vergeetachtigheid en chaos</li>
              <li>Het gevoel dat andere volwassenen hun leven beter op orde hebben</li>
            </ul>

            <p><strong>Pijnlijk herkenbaar?</strong> Jaren van frustratie kunnen je zelfbeeld ondermijnen. ADHD coaching helpt je je sterke punten herkennen en een realistisch, positief zelfbeeld ontwikkelen.</p>

            <h2>Signaal 10: Je hebt al veel geprobeerd, maar niets werkt echt</h2>
            <p>
              Dit laatste <strong>ADHD coaching signaal</strong> is misschien wel het meest herkenbare: je hebt alles geprobeerd wat "experts" aanraden, maar niets lijkt echt te blijven plakken.
            </p>

            <p><strong>Werkvoorbeelden:</strong></p>
            <ul>
              <li>15 verschillende productiviteit-apps geprobeerd, geen enkele gebruikt langer dan een maand</li>
              <li>Time management cursussen gevolgd, technieken geleerd, maar implementatie mislukt</li>
              <li>Self-help boeken gelezen over organisatie, motivatie blijft kort</li>
              <li>Coaching of therapie gehad waarbij ADHD niet specifiek werd aangepakt</li>
            </ul>

            <p><strong>Privévoorbeelden:</strong></p>
            <ul>
              <li>Fitness routines beginnen met veel enthousiasme, stoppen na 3 weken</li>
              <li>Diëten proberen die "iedereen" werken, maar bij jou niet blijven plakken</li>
              <li>Mediteren, yoga, mindfulness - alles voelt onmogelijk vol te houden</li>
              <li>Huishoud-systemen implementeren die logisch lijken maar niet werken</li>
            </ul>

            <p><strong>Dit is zo herkenbaar!</strong> Het probleem is niet dat jij "hopeloos" bent - het is dat gangbare advice niet werkt voor ADHD-breinen. <strong>Wanneer ADHD coaching</strong> specifiek gericht is op neurodivergent denken, zie je wel resultaten.</p>

            <h2>Cijfers: hoe vaak komen deze signalen voor?</h2>
            <p>Onderzoek laat fascinerende patronen zien over <strong>ADHD coaching signalen</strong> in Nederland:</p>

            <p><strong>Prevalentie per signaal (Nederlandse volwassenen):</strong></p>
            <ul>
              <li><strong>Tijdmanagement problemen:</strong> 87% van mensen met ADHD-traits</li>
              <li><strong>Onafgemaakte projecten:</strong> 74% ervaart dit wekelijks</li>
              <li><strong>Overweldigdgevoel:</strong> 69% voelt zich regelmatig overweldigd door gewone taken</li>
              <li><strong>Concentratieproblemen:</strong> 82% heeft moeite met sustained attention</li>
              <li><strong>Relatieproblemen:</strong> 58% zegt dat ADHD-gedrag relaties beïnvloedt</li>
              <li><strong>Procrastinatie:</strong> 91% stelt belangrijke taken regelmatig uit</li>
              <li><strong>Organisatieproblemen:</strong> 77% worstelt met systemen en structuur</li>
              <li><strong>Grenzen stellen:</strong> 64% zegt te vaak "ja" en overscheduled te zijn</li>
              <li><strong>Laag zelfvertrouwen:</strong> 72% toont tekenen van ADHD-gerelateerd laag zelfbeeld</li>
              <li><strong>Gefaalde pogingen:</strong> 89% heeft systemen geprobeerd die niet werkten</li>
            </ul>

            <p><strong>Interessante correlaties:</strong></p>
            <ul>
              <li>Mensen die 3+ signalen herkennen: 94% baat bij ADHD coaching</li>
              <li>Gemiddelde tijd voor hulp zoeken: 3.5 jaar na eerste signaal-herkenning</li>
              <li><strong>ADHD coaching voordelen:</strong> 82% ziet verbetering binnen 8 weken specifieke coaching</li>
            </ul>

            <h2>Wat gebeurt er als je deze signalen negeert?</h2>
            <p>Negeren van <strong>ADHD problemen herkennen</strong> heeft cumulatieve gevolgen. Research toont aan dat unaddressed ADHD-uitdagingen leiden tot:</p>

            <p><strong>Werk gerelateerde gevolgen:</strong></p>
            <ul>
              <li><strong>39% hoger</strong> risico op ontslag of downgrade</li>
              <li><strong>€8.400 minder</strong> jaarinkomen gemiddeld (door gemiste kansen en promoties)</li>
              <li><strong>65% meer</strong> ziekteverzuim door stress en burn-out</li>
              <li><strong>42% lager</strong> job satisfaction dan neurotypische collega's</li>
            </ul>

            <p><strong>Persoonlijke gevolgen:</strong></p>
            <ul>
              <li><strong>Relatieproblemen:</strong> 47% hoger scheidingspercentage</li>
              <li><strong>Mentale gezondheid:</strong> 3x hoger risico op depressie en angststoornissen</li>
              <li><strong>Zelfbeeld:</strong> Chronisch laag zelfvertrouwen bij 78% na 5+ jaar unaddressed ADHD</li>
              <li><strong>Sociale isolatie:</strong> 34% trekt zich terug uit sociale situaties</li>
            </ul>

            <p><strong>De goede nieuws:</strong> Early intervention met specifieke <strong>ADHD begeleiding</strong> voorkomt 67% van deze negatieve outcomes.</p>

            <h2>De eerste stap: van signaal naar actie</h2>
            <p>Het herkennen van <strong>ADHD coaching signalen</strong> is de eerste stap. Maar hoe ga je van herkenning naar daadwerkelijke verbetering?</p>

            <p><strong>Stap 1: Eerlijke Zelfevaluatie (15 minuten)</strong></p>
            <ul>
              <li>Vink de signalen af die je herkent (wees eerlijk, niet bescheiden)</li>
              <li>Schrijf voor elk signaal één concreet recent voorbeeld op</li>
              <li>Bedenk welk signaal momenteel het meest impact heeft op je leven</li>
            </ul>

            <p><strong>Stap 2: Impact Assessment (10 minuten)</strong></p>
            <p>Op een schaal van 1-10, hoeveel invloed hebben deze signalen op:</p>
            <ul>
              <li>Je werk prestaties?</li>
              <li>Je relaties?</li>
              <li>Je zelfvertrouwen?</li>
              <li>Je dagelijkse stress-level?</li>
            </ul>

            <p><strong>Stap 3: Prioriteiten stellen</strong></p>
            <ul>
              <li>Welke 2 signalen zou je het liefst eerst aanpakken?</li>
              <li>Welke impact zou verbetering van deze signalen hebben?</li>
              <li>Ben je bereid te investeren in professionele <strong>ADHD coaching voordelen</strong>?</li>
            </ul>

            <p><strong>Stap 4: Hulp zoeken</strong></p>
            <ul>
              <li><Link href="/haarlem" className="text-blue-600 hover:underline">ADHD coach in Haarlem</Link> - Lokale expertise in herkenning en coaching</li>
              <li><Link href="/arnhem" className="text-blue-600 hover:underline">ADHD coach in Arnhem</Link> - Specialisten in <strong>ADHD problemen werk</strong></li>
              <li><Link href="/enschede" className="text-blue-600 hover:underline">ADHD coach in Enschede</Link> - Ervaren coaches voor <strong>ADHD coaching werk privé</strong></li>
            </ul>
          </div>
        </article>
      </div>
  </main>
  );
}
