'use client';

import { ChevronDown, Heart, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelaxBanner from '@/components/RelaxBanner';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  created_at?: string;
  updated_at?: string;
  is_published?: boolean;
}

// Comprehensive static FAQ data for Dietist
const comprehensiveFAQs = [
  // General Information about Dietists
  {
    id: 'general-1',
    question: 'Wat is een dietist en wat doet een dietist?',
    answer: 'Een dietist is een erkend zorgprofessional die gespecialiseerd is in voeding en gezondheid. Dietisten hebben een HBO-opleiding Voeding en Diëtetiek afgerond en zijn geregistreerd bij de beroepsvereniging (NVD - Nederlandse Vereniging van Diëtisten).\n\n**Wat doet een dietist:**\n- **Voedingsadvies op maat:** Persoonlijke begeleiding bij gezonde voeding\n- **Medische voedingstherapie:** Behandeling van ziekten via voeding (diabetes, hart- en vaatziekten, maag-darmproblemen)\n- **Gewichtsmanagement:** Begeleiding bij gezond afvallen of aankomen\n- **Allergieën en intoleranties:** Hulp bij voedselallergie of -intolerantie\n- **Sportvoeding:** Optimale voeding voor sporters\n- **Eetgedrag:** Begeleiding bij eetstoornis of emotioneel eten\n\n**Verschil met voedingsdeskundige:**\nAlleen dietisten zijn erkende zorgverleners en mogen medische voedingstherapie geven. Voedingsdeskundigen hebben vaak geen erkende opleiding en hun adviezen worden niet vergoed door zorgverzekeraars.',
    category: 'Algemeen',
    order: 1
  },
  {
    id: 'general-2',
    question: 'Wanneer moet ik naar een dietist?',
    answer: 'Je kunt een dietist raadplegen in veel verschillende situaties:\n\n**Medische redenen:**\n- Diabetes type 1 of 2\n- Hoge cholesterol of bloeddruk\n- Hart- en vaatziekten\n- Overgewicht of obesitas\n- Ondergewicht of ondervoeding\n- Maag-darmproblemen (IBS, coeliakie, Crohn)\n- Nierziekte\n- Kanker (voedingsondersteuning tijdens behandeling)\n\n**Voedingsgerelateerde problemen:**\n- Voedselallergie of -intolerantie\n- Moeite met gezond eten\n- Vermoeidheid door verkeerde voeding\n- Spijsverteringsproblemen\n\n**Leefstijl en preventie:**\n- Gezond willen afvallen\n- Sportprestaties verbeteren\n- Zwangerschap of borstvoeding\n- Ouder worden gezond\n- Preventie van ziekten\n\n**Eetgedrag:**\n- Emotioneel eten\n- Binge eating\n- Orthorexie (obsessief gezond eten)\n\n**Tip:** Je hoeft niet te wachten tot problemen ernstig zijn. Preventief advies kan veel gezondheidsproblemen voorkomen.',
    category: 'Algemeen',
    order: 2
  },
  {
    id: 'general-3',
    question: 'Wat is het verschil tussen een dietist en een voedingsdeskundige?',
    answer: '**Dietist (erkend zorgprofessional):**\n- HBO-opleiding Voeding en Diëtetiek (4 jaar)\n- Geregistreerd bij kwaliteitsregister (SKD/NVD)\n- Mag medische diagnoses stellen en behandelen\n- Werkt evidence-based (wetenschappelijk onderbouwd)\n- Vergoeding via zorgverzekering mogelijk\n- Jaarlijkse bij- en nascholing verplicht\n- Valt onder tuchtrecht en klachtenregeling\n\n**Voedingsdeskundige (geen beschermde titel):**\n- Geen wettelijk erkende opleiding vereist\n- Geen registratie vereist\n- Mag geen medische voedingstherapie geven\n- Vaak korte cursussen of zelfstudie\n- Geen vergoeding via zorgverzekering\n- Geen verplichte nascholing\n- Geen tuchtrecht\n\n**Voedingscoach/lifestyle coach:**\n- Vaak nog minder opleiding dan voedingsdeskundige\n- Focus op algemene leefstijladviezen\n- Geen medische kennis vereist\n\n**Let op:** Alleen bij een erkende dietist ben je verzekerd van gekwalificeerde zorg en eventuele vergoeding. Check altijd registratie bij SKD (Stichting Kwaliteitszorg Diëtisten).',
    category: 'Algemeen',
    order: 3
  },
  {
    id: 'general-4',
    question: 'Zijn alle dietisten hetzelfde of zijn er specialisaties?',
    answer: 'Hoewel alle dietisten een brede basis hebben, zijn er veel specialisaties:\n\n**Medische specialisaties:**\n- **Diabetes dietist:** Gespecialiseerd in diabetes type 1 en 2\n- **Oncologie dietist:** Voeding bij kanker\n- **Nefro-dietist:** Nierziekten\n- **MDL-dietist:** Maag-, darm- en leverziekten\n- **Hart- en vaatziekte dietist**\n- **Intensive care dietist:** Kritiek zieke patiënten\n\n**Levensfase specialisaties:**\n- **Kinder dietist:** 0-18 jaar (groei, ontwikkeling, gewicht)\n- **Zwangerschaps dietist:** Voor, tijdens en na zwangerschap\n- **Ouderen dietist:** Ondervoeding, kauwproblemen\n\n**Gedrag en psychologie:**\n- **Eetstoornissen dietist:** Anorexia, boulimia, binge eating\n- **Emotioneel eten specialist**\n- **Mindful eating begeleider**\n\n**Sport en prestatie:**\n- **Sportdietist:** Topsporten tot recreatie\n- **Fitness dietist:** Bodybuilding, krachtsport\n\n**Overig:**\n- **Vegetarisch/veganistisch voedingsadvies**\n- **Allergie en intolerantie specialist**\n- **Gewichtsmanagement specialist**\n\n**Hoe vind je een specialist?**\nCheck op de website van de dietist of vraag bij eerste contact naar ervaring met jouw specifieke vraag.',
    category: 'Algemeen',
    order: 4
  },
  {
    id: 'costs-1',
    question: 'Wat kosten dietist consulten en wordt het vergoed?',
    answer: '**Kosten dietist consulten:**\n\n**Gemiddelde tarieven:**\n- **Eerste consult (60 min):** €70-€95\n- **Vervolgconsult (30-45 min):** €45-€70\n- **Groepssessies:** €25-€40 per persoon\n- **Online consult:** Vaak 10-20% goedkoper\n- **Thuisbezoek:** €90-€130 (inclusief reiskosten)\n\n**Vergoeding door zorgverzekering:**\n\n**Basisverzekering:**\n- Medische voeding bij diagnose zoals diabetes, hart- en vaatziekten\n- Vaak 3-7 consulten per jaar vergoed\n- Eigen risico van toepassing (€385 in 2024)\n- Verwijzing huisarts soms vereist (check je polis)\n\n**Aanvullende verzekering:**\n- Extra consulten zonder verwijzing\n- Vaak 3-10 extra consulten\n- Preventieve voedingsadviezen\n- Variabel per verzekeraar: €100-€400 per jaar\n\n**Voorbeelden per verzekeraar (2024):**\n- **VGZ:** 3 uur basis + max €250 aanvullend\n- **Zilveren Kruis:** 3 uur basis + max €200 aanvullend  \n- **CZ:** 3 uur basis + max €300 aanvullend\n- **Menzis:** 3 uur basis + max €150 aanvullend\n\n**Niet vergoed:**\n- Sportvoeding (tenzij medisch noodzakelijk)\n- Algemeen gezond leven advies\n- Consulten zonder diagnose\n\n**Tip:** Check altijd je polis en bel je verzekeraar voor zekerheid. Vraag de dietist om een kostenopgave vooraf.',
    category: 'Kosten en Vergoeding',
    order: 5
  },
  {
    id: 'costs-2',
    question: 'Heb ik een verwijzing nodig van mijn huisarts?',
    answer: '**Korte antwoord:** Nee, meestal niet meer!\n\n**Per 2022 is verwijsplicht afgeschaft:**\n- Je kunt direct naar een dietist zonder huisarts\n- Dit geldt voor vrijwel alle zorgverzekeraars\n- Scheelt tijd en een extra arts bezoek\n\n**Uitzonderingen waarbij verwijzing nog nuttig/nodig is:**\n\n**1. Medische indicatie aantonen:**\n- Als je vergoeding wilt uit basispakket\n- Huisarts kan medische noodzaak documenteren\n- Maakt verzekeringsproces soepeler\n\n**2. Enkele verzekeraars:**\n- Sommige polissen vereisen nog verwijzing\n- Check je polisvoorwaarden\n- Bel je verzekeraar bij twijfel\n\n**3. Complexe medische situaties:**\n- Bij multiple aandoeningen\n- Als medicatie aangepast moet worden\n- Multidisciplinaire aanpak nodig\n\n**Voordelen van wel naar huisarts gaan:**\n- Medische gegevens worden gedeeld\n- Arts kan bloedwaarden laten checken\n- Integrale aanpak van je gezondheid\n- Sommige verzekeraars geven hogere vergoeding\n\n**Nadelen:**\n- Extra tijd en mogelijk kosten\n- Wachttijd voor huisartsafspraak\n\n**Advies:** \n- Bij duidelijke medische diagnose (diabetes, hoog cholesterol): ga via huisarts\n- Bij algemeen voedingsadvies of preventie: direct naar dietist kan\n- Twijfel? Bel je zorgverzekeraar',
    category: 'Kosten en Vergoeding',
    order: 6
  },
  {
    id: 'process-1',
    question: 'Hoe verloopt een eerste consult bij een dietist?',
    answer: 'Een eerste consult bij een dietist duurt meestal 60 minuten en bestaat uit verschillende onderdelen:\n\n**Voor het consult:**\n- **Voorbereiding:** Vaak krijg je een vragenlijst of voedingsdagboek toe te sturen\n- **Medische gegevens:** Breng huisartsbrief mee (indien aanwezig)\n- **Bloedwaarden:** Recente labresultaten kunnen nuttig zijn\n\n**Tijdens het eerste consult:**\n\n**1. Intake gesprek (20-30 min):**\n- Kennismaking en vertrouwensband\n- Bespreking van je hulpvraag en doelen\n- Medische geschiedenis en huidige gezondheid\n- Medicijngebruik en allergieën\n- Eetgewoonten en leefstijl\n- Werk, gezin en dagelijks leven\n\n**2. Metingen (5-10 min):**\n- Lengte en gewicht\n- Body Mass Index (BMI)\n- Vaak ook: buikomvang, vetpercentage\n- Soms bloeddruk\n\n**3. Voedingsanalyse (15-20 min):**\n- Bespreking voedingsdagboek\n- Eetpatroon en gewoonten\n- Maaltijdritme en portie groottes\n- Voedingsvoorkeuren en afkeren\n- Kookvaardigheden en tijd\n\n**4. Advies en actieplan (15-20 min):**\n- Persoonlijk voedingsadvies\n- Concrete, haalbare doelen\n- Praktische tips en recepten\n- Vervolgafspraken plannen\n\n**Na het consult:**\n- **Schriftelijk advies:** Meestal krijg je binnen een week een rapport\n- **Recepten en tips:** Extra materiaal per email\n- **Vervolgafspraak:** Meestal na 2-4 weken\n\n**Wat te verwachten:**\n- Geen oordeel of veroordeling\n- Luisterende, empathische houding\n- Maatwerk, geen standaard diëten\n- Realistische, haalbare doelen',
    category: 'Praktisch',
    order: 7
  },
  {
    id: 'process-2',
    question: 'Hoe lang duurt een traject bij een dietist?',
    answer: '**Standaard traject duurt:** 3-6 maanden\n\n**Fase 1: Start en kennismaking (1-2 consulten)**\n- Eerste consult (60 min)\n- Eventueel tweede consult voor verdieping\n- Doelen stellen en actieplan maken\n\n**Fase 2: Actieve begeleiding (4-8 consulten)**\n- Vervolgconsulten elke 2-4 weken\n- Consulten van 30-45 minuten\n- Bijsturen van advies waar nodig\n- Obstakels bespreken en oplossen\n- Nieuwe vaardigheden aanleren\n\n**Fase 3: Consolidatie (2-3 consulten)**\n- Consulten elke 4-6 weken\n- Zelfstandigheid vergroten\n- Behoud van nieuwe gewoonten\n- Terugvalpreventie\n\n**Fase 4: Afsluiting en nazorg**\n- Evaluatie van resultaten\n- Toekomstplan zonder dietist\n- Mogelijk 1-2 check-ins per jaar\n\n**Totaal aantal consulten verschilt per situatie:**\n\n**Kort traject (3-5 consulten, 2-3 maanden):**\n- Simpele vraag (gezond afvallen, fitter worden)\n- Goede motivatie en discipline\n- Weinig obstakels\n\n**Gemiddeld traject (6-10 consulten, 3-6 maanden):**\n- Medische aandoening (diabetes, hoog cholesterol)\n- Gewichtsmanagement met uitdagingen\n- Leefstijl aanpassingen nodig\n\n**Lang traject (10-15+ consulten, 6-12 maanden):**\n- Complexe medische situatie\n- Eetstoornis of emotioneel eten\n- Groot gewichtsverlies nodig\n- Gedragsverandering moeilijk\n\n**Frequentie consulten:**\n- **Start:** Elke 2 weken\n- **Midden:** Elke 3-4 weken  \n- **Eind:** Elke 4-8 weken\n\n**Flexibiliteit:** Het tempo bepaal je zelf in overleg met de dietist. Sommige mensen hebben meer tijd nodig, anderen gaan sneller.',
    category: 'Praktisch',
    order: 8
  },
  {
    id: 'process-3',
    question: 'Kan ik ook online naar een dietist?',
    answer: '**Ja! Online diëtetiek is volwaardig alternatief.**\n\n**Voordelen online consulten:**\n- **Geen reistijd:** Bespaar 30-60 minuten per consult\n- **Flexibeler:** Ook \'s avonds of weekenden mogelijk\n- **Veilig thuis:** Geen zorgen over parkeren of ov\n- **Vaak goedkoper:** 10-20% lagere tarieven\n- **Grotere keuze:** Niet beperkt tot jouw regio\n- **Comfortabel:** Eigen vertrouwde omgeving\n\n**Hoe werkt het:**\n- **Videobellen:** Via Zoom, Teams, WhatsApp Video of speciale platforms\n- **Voorbereiding:** Vragenlijst en voedingsdagboek digitaal invullen\n- **Materialen:** Advies en recepten per email/app\n- **Metingen thuis:** Je weegt jezelf thuis\n- **App begeleiding:** Sommige dietisten gebruiken apps voor dagelijkse ondersteuning\n\n**Ook vergoed:**\n- Zorgverzekeraars vergoeden online consulten gelijk aan fysieke consulten\n- Dietist moet wel geregistreerd zijn bij kwaliteitsregister\n- Dezelfde regels voor verwijzing en eigen risico\n\n**Wanneer is online minder geschikt:**\n- Bij eerste consult wil je soms persoonlijk contact\n- Complexe medische metingen nodig (bijv. huidplooimetingen)\n- Problemen met technologie of internet\n- Voorkeur voor persoonlijk contact\n\n**Hybride optie:**\nVeel dietisten bieden combinatie:\n- Eerste consult fysiek voor kennismaking\n- Vervolgconsulten online voor gemak\n- Check-ups fysiek voor metingen\n\n**Kwaliteit:**\nOnline diëtetiek is net zo effectief als fysieke consulten volgens onderzoek. De persoonlijke aandacht en het advies zijn hetzelfde.',
    category: 'Praktisch',
    order: 9
  },
  {
    id: 'process-4',
    question: 'Hoe bereid ik me voor op mijn eerste afspraak?',
    answer: '**Goede voorbereiding zorgt voor beter resultaat!**\n\n**1. Verzamel medische informatie:**\n- Recente bloedwaarden (indien aanwezig)\n- Lijst van medicijnen die je gebruikt\n- Verwijsbrief van huisarts (indien van toepassing)\n- Eerdere diëten of programma\'s die je geprobeerd hebt\n- Relevante medische diagnoses\n\n**2. Bijhouden voedingsdagboek (3-7 dagen):**\n- **Noteer alles** wat je eet en drinkt\n- **Hoeveelheden:** Bij benadering is prima\n- **Tijdstippen:** Wanneer je eet\n- **Situaties:** Waar, met wie, hoe voel je je\n- **Eerlijk zijn:** Dietist oordeelt niet, maar heeft correcte info nodig\n\n**Voorbeeld dagboek:**\n```\n7:00 - 2 boterhammen volkoren met kaas, 1 glas melk\n10:30 - 1 appel, 1 kop koffie met melk\n13:00 - Broodje gezond met kip, 1 blikje cola light\n15:30 - Handje noten, 1 reep chocola (50gr)\n18:30 - Pasta carbonara (groot bord), salade, glas wijn\n21:00 - Chips tijdens TV kijken (klein zakje)\n```\n\n**3. Denk na over je doelen:**\n- **Wat wil je bereiken?** (afvallen, gezonder eten, meer energie)\n- **Waarom nu?** (wat is je motivatie)\n- **Wat zijn obstakels?** (weinig tijd, stress, gezin)\n- **Wat heb je al geprobeerd?** (wat werkte/werkte niet)\n\n**4. Praktische vragen voorbereiden:**\n- Hoe vaak moeten we afspreken?\n- Wat gaat het kosten totaal?\n- Wat kan ik verwachten qua resultaten?\n- Krijg ik recepten en boodschappenlijsten?\n- Hoe kan ik tussendoor contact opnemen?\n\n**5. Praktische zaken regelen:**\n- Zorg dat je op tijd bent (liever 5 min te vroeg)\n- Neem je ID-bewijs en zorgpas mee\n- Draag comfortabele kleding (voor eventuele metingen)\n- Zorg dat je niet direct na de afspraak weg moet\n\n**6. Mentale voorbereiding:**\n- **Open mindset:** Wees bereid om dingen te veranderen\n- **Realistisch:** Geen quick fix, maar duurzame verandering\n- **Eerlijk:** Alleen met eerlijkheid kan dietist je echt helpen\n- **Geduldig:** Resultaten komen geleidelijk\n\n**Wat NIET te doen:**\n- Niet extra "goed eten" de dagen ervoor (geeft geen realistisch beeld)\n- Niet crashdiëten voor de afspraak\n- Niet liegen in voedingsdagboek (helpt niemand)',
    category: 'Praktisch',
    order: 10
  },
  {
    id: 'weight-1',
    question: 'Kan een dietist mij helpen met afvallen?',
    answer: '**Absoluut! Gewichtsmanagement is kernexpertise van dietisten.**\n\n**Waarom een dietist bij afvallen:**\n- **Wetenschappelijk onderbouwd:** Geen modieuze diëten maar bewezen methoden\n- **Persoonlijk plan:** Afgestemd op jouw situatie, voorkeuren en gezondheid\n- **Gedragsverandering:** Focus op duurzame gewoonten, niet tijdelijke diëten\n- **Begeleiding:** Iemand die je motiveert en bijstuurt\n- **Medisch verantwoord:** Veilig afvallen zonder gezondheidsproblemen\n\n**Hoe werkt afvallen met een dietist:**\n\n**1. Realistische doelstelling:**\n- Gezond is 0,5-1 kg per week\n- Focus op gezondheid, niet alleen cijfer op weegschaal\n- Kleine, haalbare stappen\n\n**2. Analyse huidige situatie:**\n- Wat eet je nu en waarom\n- Welke gewoonten zorgen voor overgewicht\n- Emotionele triggers voor eten\n- Leefstijl en beweging\n\n**3. Persoonlijk voedingsplan:**\n- **Geen verboden:** Alles kan, op de juiste hoeveelheid\n- **Flexibel:** Past bij jouw leven en voorkeuren\n- **Haalbaar:** Geen extreme maatregelen\n- **Gezond:** Alle voedingstoffen die je nodig hebt\n\n**4. Gedragsverandering:**\n- Herkennen van eetpatronen\n- Omgaan met emotioneel eten\n- Mindful eten technieken\n- Alternatieve strategieën voor stress/verveling\n\n**5. Beweging:**\n- Advies over activiteit (samenwerking met fysiotherapeut mogelijk)\n- Realistisch beginnen\n- Opbouwen van beweging\n\n**Verwachte resultaten:**\n- **Eerste maand:** 2-4 kg (vaak iets meer door vocht)\n- **Daarna:** 0,5-1 kg per week gemiddeld\n- **10 kg afvallen:** 3-6 maanden\n- **20 kg afvallen:** 6-12 maanden\n\n**Succesfactoren:**\n- Regelmatige consulten (elke 2-4 weken)\n- Eerlijkheid over struggle\n- Geduld (geen quick fix)\n- Focus op gedrag, niet alleen gewicht\n- Acceptatie van terugval (hoort erbij)\n\n**Vergoeding:**\nAfvallen bij overgewicht/obesitas wordt vaak (gedeeltelijk) vergoed, vooral bij:\n- BMI > 30\n- BMI > 27 met gezondheidsproblemen (diabetes, hoge bloeddruk)\n- Medische indicatie van huisarts',
    category: 'Gewichtsmanagement',
    order: 11
  },
  {
    id: 'weight-2',
    question: 'Waarom lukt het mij niet om af te vallen zonder dietist?',
    answer: '**Je bent zeker niet de enige! Afvallen is moeilijk om meerdere redenen:**\n\n**1. Biologische factoren:**\n- **Honger hormonen:** Lichaam verhoogt honger bij gewichtsverlies\n- **Trager metabolisme:** Lichaam past zich aan en verbrandt minder\n- **Volle signalen:** Verzadigingssignalen werken minder goed\n- **Set point:** Lichaam heeft "voorkeurs" gewicht\n- **Genetica:** Sommige mensen hebben genetisch moeilijker afvallen\n\n**2. Psychologische obstakels:**\n- **Emotioneel eten:** Eten uit stress, verveling, verdriet\n- **All-or-nothing denken:** "Nu heb ik het toch verpest, ik eet alles maar op"\n- **Gebrek aan zelfvertrouwen:** "Ik kan het toch niet"\n- **Externe triggers:** Reclames, sociale media, eten overal aanwezig\n- **Stress en slaapgebrek:** Maken afvallen moeilijker\n\n**3. Praktische uitdagingen:**\n- **Onduidelijke informatie:** Tegenstrijdig advies overal\n- **Geen structuur:** Niet weten waar te beginnen\n- **Tijdgebrek:** Geen tijd voor gezonde maaltijden\n- **Sociale druk:** Verjaardagen, etentjes, familie\n- **Omgeving:** Junkfood in huis, geen gezonde opties bij werk\n\n**4. Foutieve aanpak:**\n- **Te streng dieet:** Niet vol te houden\n- **Te snelle verwachtingen:** Opgeven bij tegenvallende resultaten\n- **Focus op verbieden:** Verboden maakt juist aantrekkelijk\n- **Geen plan voor terugval:** Opgeven bij eerste misstap\n- **Alleen op cijfer weegschaal:** Vergeten van andere voordelen\n\n**Wat een dietist anders doet:**\n\n**Persoonlijke aanpak:**\n- Jouw unieke situatie, uitdagingen en voorkeuren\n- Plan dat bij jouw leven past\n- Realistische verwachtingen stellen\n\n**Gedragsverandering:**\n- Patronen herkennen en doorbreken\n- Nieuwe gewoonten aanleren\n- Omgaan met emotioneel eten\n- Mindful eten technieken\n\n**Ondersteuning en accountability:**\n- Regelmatige check-ins houden je gemotiveerd\n- Iemand om mee te sparren bij struggle\n- Geen oordeel, wel begrip\n- Samen terugval analyseren en oplossen\n\n**Structuur:**\n- Duidelijk stappenplan\n- Concrete doelen en acties\n- Monitoring van voortgang\n- Bijsturen wanneer nodig\n\n**Wetenschappelijke kennis:**\n- Bewezen methoden, geen hypes\n- Begrijpen van biologische processen\n- Medische aspecten in de gaten houden\n\n**De boodschap:** Afvallen is moeilijk en het is NIET jouw schuld dat het tot nu toe niet lukte. Met de juiste ondersteuning en aanpak verhoog je je kans op succes enorm.',
    category: 'Gewichtsmanagement',
    order: 12
  },
  {
    id: 'sports-1',
    question: 'Kan een dietist mij helpen met sportvoeding?',
    answer: '**Ja! Sportvoeding is een belangrijke specialisatie binnen de diëtetiek.**\n\n**Wat doet een sportdietist:**\n- **Voedingsplan voor training:** Wat eten voor, tijdens en na sport\n- **Prestatie optimalisatie:** Maximaal halen uit je training\n- **Herstel verbeteren:** Sneller herstellen tussen trainingen\n- **Lichaamssamenstelling:** Spiermassa opbouwen, vet verliezen\n- **Wedstrijd voeding:** Strategie voor competitie dag\n- **Supplementen advies:** Wat wel en niet nuttig is\n\n**Voor welke sporters:**\n- **Topsporters:** Professionele begeleiding\n- **Ambitie sporters:** Serieus trainende amateurs\n- **Recreatieve sporters:** Fitter en sterker worden\n- **Begin sporters:** Goede basis leggen\n\n**Verschillende sporten, verschillende aanpak:**\n\n**Duursport (hardlopen, wielrennen, zwemmen):**\n- Focus op koolhydraten en energie\n- Hydratatie strategie\n- Voeding tijdens lange sessies\n\n**Krachtsport (fitness, bodybuilding):**\n- Voldoende eiwit voor spiergroei\n- Timing van voeding rond training\n- Bulken en cutten verantwoord\n\n**Teamsport (voetbal, hockey):**\n- Energie voor intensieve wedstrijden\n- Herstel tussen wedstrijden\n- Seizoen periodisering\n\n**Wat te verwachten:**\n\n**Eerste consult:**\n- Bespreking sportdoel en ambitie\n- Analyse huidige voeding\n- Training schema bekijken\n- Metingen: gewicht, vetpercentage, spiermassa\n\n**Voedingsplan:**\n- Dagelijkse voeding aangepast op trainingen\n- Specifiek pre-workout en post-workout advies\n- Wedstrijd strategie\n- Recepten en maaltijdideeën\n\n**Supplementen:**\n- Advies over wat wel/niet zinvol is\n- Geen verkoop, objectief advies\n- Focus eerst op voeding, supplementen zijn aanvulling\n\n**Vergoeding:**\n- Sportvoeding wordt meestal NIET vergoed door zorgverzekering\n- Tenzij medische indicatie (ondergewicht, eetstoornis bij sporter)\n- Check je aanvullende verzekering, sommige hebben sportdietist vergoeding\n- Kosten: €60-€100 per consult\n\n**Samenwerking:**\nSportdietisten werken vaak samen met:\n- Personal trainers\n- Sportartsen\n- Fysiotherapeuten\n- Coaches',
    category: 'Specialisaties',
    order: 13
  },
  {
    id: 'medical-1',
    question: 'Kan een dietist mij helpen bij diabetes?',
    answer: '**Ja! Voeding is cruciaal bij diabetes management.**\n\n**Type 1 diabetes:**\nHoewel je insuline blijft nodig hebben, kan een dietist:\n- **Koolhydraat tellen leren:** Hoeveel insuline bij welk voedsel\n- **Bloedsuiker stabiliteit:** Voorkomen van hypo\'s en hyper\'s\n- **Sport en voeding:** Aanpassen van insuline en eten rond beweging\n- **Gezonde voeding:** Preventie van complicaties op lange termijn\n\n**Type 2 diabetes:**\nVoeding kan diabetes verbeteren of zelfs omkeren:\n- **Gewichtsverlies:** Vaak 5-10% verlies verbetert bloedsuiker al enorm\n- **Koolhydraat management:** Juiste koolhydraten op juiste moment\n- **Medicatie verminderen:** Soms kan dosering omlaag\n- **Complicaties voorkomen:** Hart- en vaatziekten preventie\n\n**Wat doet de dietist:**\n\n**1. Educatie:**\n- Uitleg over effect van voeding op bloedsuiker\n- Koolhydraten, vezels, vetten begrijpen\n- Labels lezen en berekeningen maken\n\n**2. Persoonlijk voedingsplan:**\n- **Niet streng dieet:** Flexibel plan dat past bij jouw leven\n- **Verdeling over de dag:** Regelmatige maaltijden\n- **Portie controle:** Juiste hoeveelheden\n- **Keuzes maken:** Gezonde alternatieven voor favorieten\n\n**3. Monitoring:**\n- Bloedsuiker logboek bespreken\n- HbA1c (gemiddelde bloedsuiker) verbeteren\n- Gewicht en andere waarden volgen\n\n**4. Praktische tips:**\n- Boodschappen doen\n- Koken en maaltijdbereiding\n- Eten buitenshuis\n- Feestdagen en speciale gelegenheden\n\n**Samenwerking:**\nDietist werkt samen met:\n- Huisarts of internist\n- Diabetesverpleegkundige\n- Eventueel podoloog, oogarts\n\n**Resultaten:**\nMet goede voeding en begeleiding:\n- **HbA1c verlaging:** 0,5-2% gemiddeld\n- **Gewichtsverlies:** 5-10% bij type 2\n- **Betere waardes:** Cholesterol, bloeddruk\n- **Meer energie:** Stabiele bloedsuiker = betere energie\n- **Minder medicatie:** Bij type 2 vaak mogelijk\n\n**Vergoeding:**\nDiabetes voedingsadvies wordt altijd vergoed:\n- Vanuit basispakket (3-7 consulten)\n- Eigen risico van toepassing\n- Vaak aanvullend nog extra consulten mogelijk\n- Verwijzing huisarts meestal gewenst',
    category: 'Medische Aandoeningen',
    order: 14
  },
  {
    id: 'medical-2',
    question: 'Helpt een dietist bij hoog cholesterol of hart- en vaatziekten?',
    answer: '**Absoluut! Voeding heeft grote impact op hart- en vaatgezondheid.**\n\n**Hoog cholesterol:**\nVoeding kan cholesterol met 10-20% verlagen:\n\n**Wat een dietist doet:**\n- **Analyse huidige voeding:** Waar zitten verzadigde vetten\n- **Gezonde vetten:** Vervangen door onverzadigd vet\n- **Vezels verhogen:** Havervezels, psyllium verlagen LDL\n- **Plantsterolen:** Producten met toegevoegde plantsterolen\n- **Gewichtsverlies:** Elke kilo minder helpt\n\n**Concreet voedingsadvies:**\n- **Vervangen:** Boter → margarine, rood vlees → vis/kip\n- **Toevoegen:** Noten, volkoren granen, groente, fruit\n- **Beperken:** Koekjes, gebak, gefrituurde producten\n- **Bewegen:** Combinatie met voeding is het beste\n\n**Hart- en vaatziekten:**\nNa hartinfarct, beroerte of bij hoog risico:\n\n**Mediterraan dieet bewezen effectief:**\n- Veel groente, fruit, volkoren\n- Olijfolie als hoofdvet\n- Vis 2x per week\n- Noten en peulvruchten\n- Weinig rood vlees\n- Gematigd alcohol (optioneel)\n\n**Specifieke aandachtspunten:**\n- **Zout beperken:** Max 6 gram per dag (bloeddruk)\n- **Omega-3:** Vette vis of supplement\n- **Antioxidanten:** Kleurrijke groente en fruit\n- **Gewicht:** Gezond gewicht bereiken/behouden\n\n**Hoge bloeddruk:**\nVoeding kan bloeddruk met 10-15 mmHg verlagen:\n- **DASH dieet:** Bewezen effectief\n- **Zout beperken:** Vers koken, geen kant-en-klaar\n- **Kalium:** Groente, fruit, aardappel\n- **Magnesium:** Volkoren, noten\n- **Alcohol matigen:** Max 1-2 glazen per dag\n\n**Resultaten met begeleiding:**\n- **Cholesterol:** 0,5-1 mmol/l verlaging LDL\n- **Bloeddruk:** 5-15 mmHg verlaging\n- **Gewicht:** 5-10% verlies verbetert alle waardes\n- **Medicatie:** Soms dosering verminderen mogelijk\n- **Risico:** 20-30% risico reductie op events\n\n**Duur begeleiding:**\n- 6-10 consulten over 6-9 maanden\n- Start intensief (elke 2-3 weken)\n- Later minder frequent (elke 4-6 weken)\n\n**Vergoeding:**\nHart- en vaatziekten worden altijd vergoed:\n- Vanuit basispakket\n- Verwijzing huisarts of cardioloog\n- Vaak aanvullende consulten in aanvullende verzekering',
    category: 'Medische Aandoeningen',
    order: 15
  },
  {
    id: 'behavior-1',
    question: 'Kan een dietist helpen bij emotioneel eten?',
    answer: '**Ja! Gedragsverandering is kern van modern dieetadvies.**\n\n**Wat is emotioneel eten:**\n- Eten uit verveling, stress, verdriet, woede\n- Eten zonder echte honger\n- Comfort zoeken in voedsel\n- Vaak snel, ongezond en veel\n\n**Waarom ontstaat het:**\n- **Geleerd gedrag:** Als kind troost met eten\n- **Stress coping:** Eten vermindert tijdelijk stress\n- **Beloning:** Jezelf trakteren na zware dag\n- **Sociale gewoonte:** Altijd eten bij bepaalde activiteit\n- **Emotie onderdrukking:** Niet voelen maar eten\n\n**Hoe helpt een dietist:**\n\n**1. Bewustwording:**\n- **Eetdagboek:** Noteer ook gevoelens en situaties\n- **Patronen herkennen:** Wanneer eet je emotioneel\n- **Triggers identificeren:** Wat zorgt voor emotioneel eten\n- **Onderscheid maken:** Echte honger vs emotionele honger\n\n**2. Alternatieve strategieën:**\n- **Stress:** Ademhalingen, wandelen, muziek\n- **Verveling:** Hobby, contact met vriend\n- **Verdriet:** Praten, schrijven, huilen mag\n- **Woede:** Sporten, schreeuwen (ergens veilig)\n\n**3. Mindful eating:**\n- **Langzaam eten:** Bewust proeven en genieten\n- **Aandachtig:** Geen TV, telefoon tijdens eten\n- **Portie controle:** Eerst opscheppen, dan eten\n- **Verzadigingssignalen:** Leren herkennen\n\n**4. Zelfcompassie:**\n- **Geen perfectie:** Terugval hoort erbij\n- **Vriendelijk zijn:** Voor jezelf zoals voor vriend\n- **Niet straffen:** Na emotioneel eten niet crashdiëten\n- **Leren:** Elke keer is leerkans\n\n**5. Gezonde gewoonten:**\n- **Regelmatig eten:** Voorkomt extreme honger\n- **Gezond in huis:** Geen junkfood voorraad\n- **Alternatieven:** Gezondere comfort food opties\n- **Plannen:** Maaltijden voorbereiden helpt\n\n**Wanneer extra hulp nodig:**\nBij ernstig emotioneel eten of eetstoornis:\n- **Psycholoog:** Voor onderliggende problemen\n- **GZ-psycholoog:** Cognitieve gedragstherapie\n- **Gespecialiseerde centrum:** Bij eetstoornis\n\n**Dietist werkt samen met psycholoog:**\n- Voeding en gedrag gaan hand in hand\n- Multidisciplinaire aanpak meest effectief\n- Dietist focus op voeding, psycholoog op emoties\n\n**Verwachte duur:**\n- Emotioneel eten verandert niet overnight\n- 6-12 maanden begeleiding vaak nodig\n- Kleine stappen, duurzame verandering\n\n**Resultaat:**\n- Beter omgaan met emoties\n- Minder afhankelijk van voedsel voor troost\n- Gezonder gewicht als bijeffect\n- Meer zelfvertrouwen en controle',
    category: 'Eetgedrag',
    order: 16
  },
  {
    id: 'special-1',
    question: 'Kan een dietist helpen bij voedselallergie of intolerantie?',
    answer: '**Ja! Dit is een belangrijke specialisatie binnen diëtetiek.**\n\n**Verschil allergie vs intolerantie:**\n\n**Voedselallergie:**\n- Immuunsysteem reageert op voedsel\n- Kleine hoeveelheid kan al ernstig zijn\n- Symptomen: huiduitslag, zwelling, ademhalingsproblemen\n- Diagnose via allergoloog (prik/bloedtest)\n- Voorbeelden: noten, melk, ei, vis, schaal-/schelpdieren\n\n**Voedselintolerantie:**\n- Spijsvertering kan voedsel niet goed verwerken\n- Afhankelijk van hoeveelheid\n- Symptomen: buikpijn, diarree, winderigheid\n- Diagnose soms lastig, uitsluit dieet\n- Voorbeelden: lactose, gluten (coeliakie), fructose, histamine\n\n**Wat doet de dietist:**\n\n**1. Bij voedselallergie:**\n- **Eliminatie:** Volledig vermijden van allergeen\n- **Labels lezen:** Herkennen van allergenen in producten\n- **Alternatieven:** Vervangingsproducten die wel kunnen\n- **Voedingswaarde:** Zorgen dat je alle voedingsstoffen krijgt\n- **Kruisbesmetting:** Voorkomen in keuken\n- **Eten buitenshuis:** Restaurant, feest, vakantie\n\n**2. Bij intolerantie:**\n- **Uitsluit dieet:** Tijdelijk weglaten om te testen\n- **Drempelwaarde vinden:** Hoeveel kan wel\n- **Alternatieven:** Producten die wel kunnen\n- **Enzymes/hulpmiddelen:** Lactase bij lactose intolerantie\n\n**Specifieke intoleranties:**\n\n**Lactose intolerantie:**\n- Beperken zuivel of lactasedruppels\n- Lactosevrije alternatieven\n- Calcium uit andere bronnen\n\n**Gluten (coeliakie):**\n- 100% glutenvrij noodzakelijk\n- Labels en herkennen van gluten\n- Alternatieve granen\n- DGA label herkennen\n\n**FODMAP intolerantie (IBS):**\n- Laag FODMAP dieet (complex!)\n- Gefaseerde introductie\n- Uitzoeken wat wel/niet kan\n\n**Histamine intolerantie:**\n- Beperken histamine rijke producten\n- Vers koken (geen lang bewaard)\n- Persoonlijke triggers vinden\n\n**Waarom dietist nodig:**\n- **Voorkomen tekorten:** Bij veel elimineren\n- **Niet te streng:** Alleen weglaten wat echt moet\n- **Diagnose ondersteuning:** Correct uitsluit dieet\n- **Praktisch advies:** Koken, boodschappen, eten buitenshuis\n- **Monitoring:** Groei bij kinderen, voedingsstatus\n\n**Samenwerking:**\n- **Allergoloog/MDL-arts:** Diagnose\n- **Huisarts:** Verwijzing en monitoring\n- **Apotheker:** Medicatie check op allergenen\n\n**Vergoeding:**\nAllergie/intolerantie begeleiding wordt meestal vergoed:\n- Vanuit basispakket bij diagnose\n- Vaak meerdere consulten nodig (5-10)\n- Vooral bij kinderen goede monitoring belangrijk',
    category: 'Specialisaties',
    order: 17
  },
  {
    id: 'children-1',
    question: 'Wanneer moet mijn kind naar een dietist?',
    answer: '**Kinderdietisten zijn gespecialiseerd in voeding voor kinderen 0-18 jaar.**\n\n**Redenen om naar kinderdietist te gaan:**\n\n**Gewichtsproblemen:**\n- **Overgewicht/obesitas:** Gezond afvallen zonder groei te remmen\n- **Ondergewicht:** Te weinig aankomen, groeistoornissen\n- **Selectief eten:** Kind eet zeer beperkt assortiment\n\n**Medische redenen:**\n- **Diabetes type 1:** Koolhydraat tellen leren\n- **Voedselallergie:** Veilig eten zonder tekorten\n- **Coeliakie:** Glutenvrij dieet met voldoende voedingstoffen\n- **Maag-darm problemen:** Reflux, obstipatie, diarree\n- **Ontwikkelingsstoornissen:** Autisme, ADHD met voedingsproblemen\n\n**Eet- en drinkproblemen:**\n- **Weigering:** Niet willen eten/drinken\n- **Textuurproblemen:** Alleen glad/krokant eten\n- **Zuigen/slikken problemen:** Bij baby's\n- **Sondevoeding:** Overgaan naar normale voeding\n\n**Sportvoeding:**\n- **Jonge topsporters:** Optimale voeding voor prestatie en groei\n- **Gewichtsklasse sporten:** Verantwoord gewichtsmanagement\n\n**Vegetarisch/veganistisch:**\n- **Correcte voedingstoffen:** Vooral vitamine B12, ijzer, calcium\n- **Groei monitoring:** Voorkomen van tekorten\n\n**Wat doet een kinderdietist:**\n\n**Speelse aanpak:**\n- Aangepast aan leeftijd kind\n- Spelletjes en activiteiten\n- Positieve sfeer, geen dwang\n- Kind betrekken bij keuzes\n\n**Ouders/verzorgers:**\n- Uitleg en educatie\n- Praktische tips voor thuis\n- Omgaan met lastig eetgedrag\n- Realistische verwachtingen\n\n**Monitoring:**\n- **Groei:** Lengte en gewicht bijhouden\n- **Ontwikkeling:** Leeftijd adequaat\n- **Voedingsstatus:** Bloedwaarden indien nodig\n\n**Samenwerking:**\n- Huisarts of kinderarts\n- Logopedist (bij slikproblemen)\n- Psycholoog (bij gedragsproblemen)\n- School (bij allergieën)\n\n**Hoe verloopt consult:**\n- **Met ouders én kind:** (vanaf ~4 jaar)\n- **Speelse setting:** Niet zielig of eng\n- **Praktisch:** Proeven, voelen, ruiken\n- **Samen doelen:** Wat wil kind/ouders\n\n**Vergoeding:**\nKinderen vrijwel altijd vergoed:\n- Groei en ontwikkeling prioriteit\n- Vaak meer consulten mogelijk\n- Verwijzing kinderarts of huisarts\n\n**Tip voor ouders:**\n- Hoe eerder hoe beter bij problemen\n- Niet afwachten "groeit wel over"\n- Vooral bij groei/gewicht problemen snel handelen\n- Open staan voor advies, ook over opvoeding rondom eten',
    category: 'Levensfasen',
    order: 18
  },
  {
    id: 'pregnancy-1',
    question: 'Kan een dietist mij begeleiden tijdens zwangerschap?',
    answer: '**Ja! Goede voeding tijdens zwangerschap is cruciaal voor jou én je baby.**\n\n**Waarom dietist tijdens zwangerschap:**\n\n**Voor de zwangerschap (preconceptie):**\n- **Foliumzuur:** Belangrijk voor eerst 12 weken\n- **Gezond gewicht:** Optimaal gewicht verhoogt vruchtbaarheid\n- **Voedingsstoffen:** Optimale status voor conceptie\n\n**Tijdens zwangerschap:**\n\n**Normale zwangerschap:**\n- **Gewichtstoename:** Hoeveel is gezond (12-16 kg gemiddeld)\n- **Voedingstoffen:** Foliumzuur, ijzer, calcium, vitamine D\n- **Veilig eten:** Wat wel/niet (toxoplasmose, listeria)\n- **Energie behoefte:** Extra energie in 2e en 3e trimester\n- **Klachten:** Misselijkheid, brandend maagzuur, obstipatie\n\n**Zwangerschapsdiabetes:**\n- Tijdelijke diabetes tijdens zwangerschap\n- Voeding eerste behandeling (medicatie vaak niet nodig)\n- Koolhydraat verdeling over de dag\n- Monitoring bloedsuiker\n- Baby gezondheid beschermen\n\n**Hoog risico zwangerschap:**\n- **Tweeling/meerling:** Extra voedingstoffen\n- **Ondergewicht:** Voldoende aankomen\n- **Obesitas:** Niet teveel aankomen, gezond eten\n- **Pre-eclampsie risico:** Zout, eiwit, calcium\n\n**Specifieke aandoeningen:**\n- **Diabetes type 1/2:** Extra monitoring\n- **Coeliakie:** Glutenvrij met alle voedingsstoffen\n- **Allergie:** Veilig eten zonder tekorten\n\n**Vegetarisch/veganistisch:**\n- Extra aandacht voor B12, ijzer, omega-3\n- Supplementen indien nodig\n- Voldoende eiwit\n\n**Wat te verwachten van dietist:**\n\n**Eerste trimester (0-12 weken):**\n- Advies over misselijkheid\n- Foliumzuur en andere supplementen\n- Wat te vermijden (rauwe vis, lever, bepaalde kazen)\n- Veilig eten (hygiene, temperatuur)\n\n**Tweede trimester (13-26 weken):**\n- Extra energie en voedingstoffen\n- Gewichtstoename monitoring\n- Gezonde snacks en maaltijden\n- Omgaan met trek en afkeer\n\n**Derde trimester (27-40 weken):**\n- Voorbereiden op borstvoeding\n- Kleine maaltijden (baby drukt op maag)\n- IJzer en calcium extra belangrijk\n- Energiereserve voor bevalling\n\n**Na bevalling:**\n\n**Borstvoeding:**\n- **Extra energie:** 500 kcal per dag\n- **Voldoende drinken:** 2-3 liter per dag\n- **Voedingsstoffen:** Omega-3, calcium, ijzer\n- **Verboden:** Alcohol, beperkt cafeïne\n- **Medicijnen check:** Wat mag wel/niet\n\n**Flesvoeding:**\n- Correcte bereiding en hygiene\n- Hoeveelheden per leeftijd\n\n**Herstel moeder:**\n- Gezond gewicht terugkeren\n- Niet crashdiëten tijdens borstvoeding\n- Energie voor verzorgen baby\n\n**Vergoeding:**\nZwangerschap gerelateerde zorg meestal vergoed:\n- Zwangerschapsdiabetes volledig\n- Bij complicaties/risico's\n- Check aanvullende verzekering voor preventief advies',
    category: 'Levensfasen',
    order: 19
  },
  {
    id: 'find-1',
    question: 'Hoe vind ik een goede dietist bij mij in de buurt?',
    answer: '**Stappen om de juiste dietist te vinden:**\n\n**1. Controleer kwaliteitsregistratie:**\n- **SKD register:** Stichting Kwaliteitszorg Diëtisten (www.skdregister.nl)\n- **NVD:** Nederlandse Vereniging van Diëtisten (www.nvdietist.nl)\n- Alleen geregistreerde dietisten zijn betrouwbaar\n- Registratie garandeert opleiding en nascholing\n\n**2. Bepaal jouw vraag/specialisatie:**\n- Wat is je hulpvraag (afvallen, diabetes, allergie, sport)?\n- Zoek dietist met ervaring in jouw gebied\n- Check website voor specialisaties\n\n**3. Zoek in jouw regio:**\n- **Online zoeken:** "dietist [jouw stad]"\n- **Zorgzoeker websites:** Filter op locatie en specialisatie\n- **Huisarts:** Kan dietist aanbevelen\n- **Zorgverzekeraar:** Heeft vaak overzicht gecontracteerde dietisten\n\n**4. Check reviews en ervaringen:**\n- Google reviews\n- Zorgkaartnederland.nl\n- Vraag bij kennissen/familie\n\n**5. Vergelijk praktijken:**\n\n**Locatie en bereikbaarheid:**\n- Afstand tot praktijk\n- Parkeren of OV bereikbaar\n- Online consulten mogelijk?\n\n**Werkwijze:**\n- Persoonlijke aanpak of protocollair\n- Ervaring met jouw vraagstuk\n- Samenwerking met andere zorgverleners\n\n**Praktisch:**\n- Openingstijden (ook avond/weekend?)\n- Wachttijd voor afspraak\n- Contact tussen consulten mogelijk\n\n**Kosten:**\n- Tarief per consult\n- Gecontracteerd met jouw verzekeraar?\n- Kostenopgave vooraf\n\n**6. Bel voor kennismaking:**\nMeeste dietisten bieden gratis telefoongesprek:\n- **Bespreek je vraag:** Past dietist bij jouw situatie?\n- **Stel vragen:** Werkwijze, ervaring, kosten\n- **Check klik:** Voel je je op je gemak?\n\n**Vragen om te stellen:**\n- Hoeveel ervaring heeft u met [jouw probleem]?\n- Hoe verloopt een typisch traject?\n- Hoeveel consulten zijn ongeveer nodig?\n- Wat gaat het totaal kosten?\n- Krijg ik materialen mee (recepten, schema's)?\n- Hoe kan ik contact opnemen tussen afspraken?\n- Werkt u samen met andere zorgverleners?\n\n**7. Probeer eerst consult:**\n- Klik je met de dietist?\n- Voel je je gehoord en begrepen?\n- Krijg je praktisch, haalbaar advies?\n- Geen oordeel of veroordeling?\n\n**Red flags (niet kiezen bij):**\n- Niet geregistreerd bij SKD\n- Belooft snelle resultaten zonder inspanning\n- Verkoopt eigen supplementen/producten\n- Heel streng dieet zonder maatwerk\n- Niet luisteren naar jouw verhaal\n- Veel te duur zonder duidelijke reden\n- Negatieve reviews over deskundigheid\n\n**Wissel van dietist als:**\n- Geen klik of vertrouwen\n- Advies werkt niet voor jou\n- Je voelt je niet gehoord\n- Geen vooruitgang na redelijke tijd\n\n**Gebruik onze website:**\nOp dietistindebuurt.nl vind je:\n- Overzicht dietisten per stad\n- Filter op specialisatie\n- Reviews van cliënten\n- Direct contact opnemen\n- Vergelijken van praktijken',
    category: 'Kiezen en Vinden',
    order: 20
  }
];

export default function FAQPage() {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>('Allemaal');

  // Get unique categories
  const categories = ['Allemaal', ...Array.from(new Set(comprehensiveFAQs.map(faq => faq.category)))];

  // Filter FAQs by category
  const filteredFAQs = activeCategory === 'Allemaal'
    ? comprehensiveFAQs
    : comprehensiveFAQs.filter(faq => faq.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Veelgestelde Vragen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Alles wat je moet weten over Dietisten
          </h1>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Uitgebreide antwoorden op de meest gestelde vragen over voedingsadvies, 
            kosten, vergoeding en het vinden van een dietist bij jou in de buurt.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b sticky top-[72px] z-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                      openItem === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {openItem === faq.id && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="prose prose-blue max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {faq.answer}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Geen vragen gevonden in deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Heb je nog vragen?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Neem direct contact op met een dietist bij jou in de buurt voor persoonlijk advies.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Vind een Dietist bij jou in de buurt
          </Link>
        </div>
      </section>

      <RelaxBanner />
      <Footer />
    </div>
  );
}
