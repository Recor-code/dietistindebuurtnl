import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Brain, AlertCircle, CheckCircle2, XCircle, Lightbulb, TrendingUp, Shield, Book, Sparkles, Target, Clock, Award , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Emotioneel Eten: Herken en Doorbreek de Cyclus | Complete Gids 2025',
  description: 'Emotioneel eten stoppen: leer triggers herkennen, doorbreek stress- en troosteten patronen met praktische strategieën en bewust eten technieken.',
  keywords: [
    'emotioneel eten',
    'stress eten',
    'troosteten',
    'emotioneel eten stoppen',
    'eetbuien',
    'bewust eten',
    'emotionele honger',
    'vreetbuien',
    'eetpatroon doorbreken',
    'stress en eten'
  ],
  openGraph: {
    title: 'Emotioneel Eten: Herken en Doorbreek de Cyclus',
    description: 'Complete gids om emotioneel eten te herkennen en stoppen met bewezen strategieën',
    images: ['/img/blog/emotioneel-eten/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Emotioneel Eten: Herken en Doorbreek de Cyclus',
  description: 'Uitgebreide gids om emotioneel eten te herkennen en te doorbreken met praktische strategieën.',
  author: {
    '@type': 'Organization',
    name: 'Dietist in de Buurt',
    url: 'https://dietistindebuurt.nl'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dietist in de Buurt',
    url: 'https://dietistindebuurt.nl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dietistindebuurt.nl/images/logo.webp'
    }
  },
  datePublished: '2025-10-14T10:00:00.000Z',
  dateModified: '2025-10-14T10:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dietistindebuurt.nl/blog/emotioneel-eten'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/emotioneel-eten/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/emotioneel-eten',
  inLanguage: 'nl-NL'
};

export default function EmotioneelEtenPage() {
  const emotionalVsPhysical = {
    emotional: {
      title: "Emotionele Honger",
      icon: Brain,
      characteristics: [
        "Komt plotseling op (binnen minuten)",
        "Verlangt naar specifiek voedsel (zoet, vet, hartig)",
        "Niet te stoppen met eten (blijft doorgaan)",
        "Gevoel van schaamte/schuld na het eten",
        "Honger 'boven de nek' (in je hoofd)",
        "Vaak gelinkt aan emotie (stress, verdriet, verveling)"
      ],
      triggers: "Emoties, gebeurtenissen, gedachten",
      satisfaction: "Tijdelijk (honger komt snel terug)",
      timing: "Geen fysieke signalen (lege maag rommelt niet)",
      aftermath: "Schuldgevoel, spijt, teleurstelling in jezelf"
    },
    physical: {
      title: "Fysieke Honger",
      icon: Heart,
      characteristics: [
        "Komt geleidelijk op (over uren)",
        "Alles smaakt goed (niet perse 1 specifiek ding)",
        "Stopt bij verzadiging (voelt wanneer genoeg is)",
        "Geen schuldgevoel (normale behoefte)",
        "Honger 'onder de nek' (lege maag, energie laag)",
        "Gelinkt aan tijdstip laatste maaltijd"
      ],
      triggers: "Tijd sinds laatste maaltijd, energie nodig",
      satisfaction: "Langdurig (3-5 uur voldaan)",
      timing: "Fysieke signalen (maag rommelt, energie daalt, concentratie vermindert)",
      aftermath: "Voldaan gevoel, energie terugkomt"
    }
  };

  const commonTriggers = [
    {
      trigger: "Stress en Spanning",
      icon: AlertCircle,
      why: "Cortisol (stresshormoon) verhoogt trek in suiker/vet voor snelle energie",
      examples: [
        "Deadline op werk → chips/chocolade voor bureau",
        "Ruzie met partner → halve zak koekjes leegeten",
        "Financiële zorgen → 's avonds snacken voor 'troost'",
        "Drukte thuis (kinderen) → stiekem eten als moment rust"
      ],
      emotion: "Overweldigd, gespannen, machteloos",
      solution: "Stressmanagement: ademhaling, wandeling, praten, bewegen",
      alternative: "15min wandelen, warm bad, thee, bellen vriend(in)"
    },
    {
      trigger: "Verdriet en Eenzaamheid",
      icon: Heart,
      why: "Eten activeert beloningssysteem (dopamine) voor tijdelijke emotionele lift",
      examples: [
        "Eenzame avond → ijs/chocolade als 'gezelschap'",
        "Na verbroken relatie → comfort food zoeken",
        "Gemis van iemand → eten wat jullie samen aten",
        "Sociale isolatie → eten als 'vriend'"
      ],
      emotion: "Verdrietig, alleen, verlaten",
      solution: "Sociaal contact: bel iemand, wandel naar vriend, online community",
      alternative: "Dagboek schrijven, muziek, huisdier knuffelen, vrijwilligerswerk"
    },
    {
      trigger: "Verveling",
      icon: Brain,
      why: "Eten geeft stimulans en iets te doen bij gebrek aan activiteit/doel",
      examples: [
        "Thuiswerken → elke 30min naar keuken",
        "Weekend alleen thuis → constant snacken",
        "TV kijken → automatisch chips/snoep",
        "'Niks te doen' gevoel → koelkast 10x openen"
      ],
      emotion: "Leeg, doelloos, onvervuld",
      solution: "Betekenisvolle activiteit: hobby, project, sociaal contact",
      alternative: "Boek lezen, puzzelen, wandelen, vriend bellen, opruimen"
    },
    {
      trigger: "Gewoonte en Ritueel",
      icon: Target,
      why: "Hersenpad: situatie X = eten Y (automatische reactie, niet bewust)",
      examples: [
        "Thuiskomen van werk → direct naar koelkast",
        "Film kijken = popcorn/chips (altijd samen)",
        "Na eten ouders → altijd toetje (ook zonder honger)",
        "Bepaald tijdstip → vast snackmoment (bijv. 15:00 'teatime')"
      ],
      emotion: "Automatisme (geen emotie, gewoon routine)",
      solution: "Patroon doorbreken: andere route, andere activiteit eerst",
      alternative: "Eerst wandelen, thee zonder snack, ander plekje zitten"
    },
    {
      trigger: "Beloning en Vieren",
      icon: Sparkles,
      why: "Eten als beloning sinds jeugd geleerd ('braaf geweest = snoep')",
      examples: [
        "Goede dag werk → 'verdien' pizza/ijs",
        "Klus geklaard → trakteer jezelf op snack",
        "Sportschool geweest → 'mag' ongezond eten",
        "Weekend = 'vrij' dus ongezond eten 'toegestaan'"
      ],
      emotion: "Trots, vreugde, zelfvoldaanheid",
      solution: "Niet-eten beloningen: massage, film, uitje, nieuw boek",
      alternative: "Wandeling natuur, muziek, bad, Netflix, mooi item kopen"
    },
    {
      trigger: "Zelfkritiek en Perfectionisme",
      icon: XCircle,
      why: "Eten als zelfstraf ('ben toch al mislukt') of om negatieve gedachten te dempen",
      examples: [
        "Foute op werk → 'ben waardeloos' → eetbui als straf/troost",
        "Afvallen mislukt → 'kan toch niet' → opgeven en eetbui",
        "Lichaam niet perfect → 'maakt niks meer uit' → onbeperkt eten",
        "Negatieve gedachten → eten om gedachten te stoppen"
      ],
      emotion: "Schaamte, waardeloosheid, zelfhaat",
      solution: "Zelfcompassie: spreek jezelf toe als vriend(in), mild zijn",
      alternative: "Positieve affirmaties, meditatie, therapie, zelfhulpboek"
    }
  ];

  const recognitionSignals = {
    before: [
      "Plotselinge intense trek (0 naar 100 in minuten)",
      "Verlangen naar 1 specifiek voedsel (niet honger algemeen)",
      "Trek onafhankelijk van laatste maaltijd tijdstip",
      "Emotie voelbaar (boos, verdrietig, gestrest) voor trek",
      "Situatie trigger (bijv. altijd na bepaalde gebeurtenis)",
      "Fysiek geen honger (maag niet leeg, geen energie tekort)"
    ],
    during: [
      "Eet automatisch (geen bewuste smaak ervaring)",
      "Eet snel (geen tijd kauwen, proeven)",
      "Kan niet stoppen (ook bij vol gevoel)",
      "Eet meer dan gepland (begint met 1, eindigt bij lege pak)",
      "Eet stiekem/in eenzaamheid (schaamte)",
      "Afleidingseten (tijdens TV, werk, rijden)"
    ],
    after: [
      "Schuldgevoel, schaamte ('waarom deed ik dit weer?')",
      "Lichamelijk ongemak (te vol, misselijk, loom)",
      "Emotie nog steeds aanwezig (niet opgelost)",
      "Zelfkritiek ('geen discipline, zwak, mislukkeling')",
      "Plannen compensatie (extra sport, overslaan maaltijd)",
      "Cyclus herhaalt zich (schuldgevoel → weer emotioneel eten)"
    ]
  };

  const breakingStrategies = [
    {
      strategy: "HALT Controle (Honger, Angry, Lonely, Tired)",
      icon: Shield,
      description: "Voor je eet: controleer of het HALT is (geen echte honger)",
      steps: [
        "H - Honger? Laatste maaltijd &gt;3u geleden? Fysieke signalen?",
        "A - Angry (Boos)? Geïrriteerd, gefrustreerd, boos op iets/iemand?",
        "L - Lonely (Eenzaam)? Alleen, gemis, sociaal contact nodig?",
        "T - Tired (Moe)? Uitgeput, slaaptekort, energie laag?"
      ],
      action: "Als HALT = ja → Los oorzaak op (niet met eten). Boos? Praat. Moe? Rust. Eenzaam? Bel iemand.",
      effectiveness: "80% emotioneel eten herkenbaar met HALT controle"
    },
    {
      strategy: "10 Minuten Regel",
      icon: Brain,
      description: "Uitstel techniek: wacht 10 minuten voor je eet",
      steps: [
        "Trek voelen → Zeg: 'Ik wacht 10 minuten'",
        "Doe iets anders: wandelen, muziek, opruimen, water drinken",
        "Na 10min: controleer opnieuw of trek er nog is",
        "Vaak verdwijnt emotionele trek (want geen echte honger)"
      ],
      action: "Als trek blijft na 10min EN fysieke honger = eet. Anders = emotioneel (zoek andere oplossing)",
      effectiveness: "60% emotionele eetmomenten gestopt met 10min regel"
    },
    {
      strategy: "Emotie Benoemen + Alternatief",
      icon: Heart,
      description: "Identificeer emotie en kies passende (niet-eten) actie",
      steps: [
        "Voel trek → Stop, vraag: 'Wat voel ik nu echt?'",
        "Benoem emotie: 'Ik ben gestrest / verdrietig / boos / eenzaam'",
        "Kies passend alternatief (zie lijst hieronder)",
        "Voer actie uit (15-30min), controleer daarna of trek weg is"
      ],
      action: "Elke emotie heeft betere oplossing dan eten. Stress? Beweeg. Verdriet? Huil/praat. Verveling? Activiteit.",
      effectiveness: "70% succesvol bij bewust emotie benoemen en alternatief kiezen"
    },
    {
      strategy: "Bewust Eten (Mindful Eating)",
      icon: Lightbulb,
      description: "Als je eet: doe het volledig bewust (geen automatisme)",
      steps: [
        "Ga zitten (niet staan/lopen eten)",
        "Zet portie af (niet uit pak/zak eten)",
        "Leg telefoon/laptop weg (geen afleiding)",
        "Eet langzaam: ruik, proef, kauw 20x per hap",
        "Controleer elke 5 happen: 'Ben ik nog honger?' (stop bij verzadigd)"
      ],
      action: "Bewust eten maakt emotioneel eten zichtbaar (smaakt niet eens lekker, stop automatisch eerder)",
      effectiveness: "50% minder geconsumeerd bij bewust eten vs afleiden"
    },
    {
      strategy: "Emotie Dagboek (Patroon Inzicht)",
      icon: Book,
      description: "Bijhouden wanneer/waarom emotioneel gegeten wordt",
      steps: [
        "Noteer bij elke emotionele eetmoment: Tijd, Situatie, Emotie, Gegeten, Gevoel erna",
        "Voorbeeld: '15:00, Ruzie collega, Boos/machteloos, Halve zak chips, Schuldgevoel + nog steeds boos'",
        "Wekelijks analyseren: welke patronen? Welke triggers komen vaak voor?",
        "Focus op 1 trigger per keer (bijv. eerst 'stress op werk' aanpakken)"
      ],
      action: "Patronen zien = eerste stap doorbreken. Plan alternatief voor geïdentificeerde trigger.",
      effectiveness: "Bewustwording vergroot, 65% beter in herkennen triggers na 2 weken dagboek"
    },
    {
      strategy: "Omgeving Aanpassen (Trigger Eliminatie)",
      icon: Target,
      description: "Maak emotioneel eten moeilijker/onmogelijk",
      steps: [
        "Verwijder trigger foods uit huis (chips, koekjes, ijs - niet in voorraad)",
        "Vervang zichtbare snacks door fruit/gezonde opties",
        "Eet alleen aan eettafel (niet op bank/bed/achter bureau)",
        "Kleine borden/kommen gebruiken (visueel meer eten)",
        "Gezonde snacks voorbereid (groente gesneden, noten geportioneerd)"
      ],
      action: "Als het er niet is, kun je het niet eten. Omgeving is sterker dan discipline.",
      effectiveness: "40-50% reductie emotioneel eten door omgeving optimaliseren"
    }
  ];

  const emotionAlternatives = [
    { emotion: "Stress", alternatives: ["15min wandelen/hardlopen", "Ademhalingsoefening (4-7-8)", "Yoga/stretchen", "Warme douche/bad", "Praten met vriend", "Muziek (rustig/energiek)"] },
    { emotion: "Verdriet", alternatives: ["Huilen (mag en helpt!)", "Dagboek schrijven", "Bellen vriend(in)", "Troostfilm kijken", "Knuffelen huisdier", "Emotionele muziek"] },
    { emotion: "Eenzaamheid", alternatives: ["Bel/videocall iemand", "Ga naar drukke plek (café, park)", "Join online community", "Vrijwilligerswerk", "Huisdier (lenen/adopteren)", "Buurtactiviteit"] },
    { emotion: "Verveling", alternatives: ["Hobby starten/oppakken", "Wandelen (nieuwe route)", "Boek lezen", "Puzzel/sudoku/game", "Opruimen/organiseren", "Leren (online cursus)"] },
    { emotion: "Boos/Gefrustreerd", alternatives: ["Intensief sporten/boksen", "Schreeuwen (in kussen/auto)", "Praten (uiten frustratie)", "Schrijven boze brief (niet versturen)", "Opruimen/schoonmaken (energie kwijt)", "Muziek (hard)"] },
    { emotion: "Angst/Onzekerheid", alternatives: ["Meditatie/mindfulness app", "Praten met vertrouwde persoon", "Therapie/coaching", "Dagboek: angsten opschrijven", "Aarden: 5-4-3-2-1 techniek", "Bevestigende affirmaties"] },
    { emotion: "Moe/Uitgeput", alternatives: ["Powernap (20min)", "Vroeg naar bed", "Cafeïnevrije thee", "Korte wandeling (frisse lucht)", "Energie snack (noten, fruit)", "Screen break (ogen rust)"] },
    { emotion: "Schuldgevoel", alternatives: ["Zelfcompassie oefening", "Vriend perspectief (wat zou je hen zeggen?)", "Dagboek: 3 dingen goed gedaan", "Vergeven jezelf (hardop)", "Therapie als diep trauma", "Focus op volgende keer beter"] }
  ];

  const longTermSolutions = [
    {
      solution: "Therapie (CGT/ACT)",
      description: "Cognitieve Gedragstherapie of Acceptance Commitment Therapy",
      when: "Bij hardnekkige patronen, trauma, eetstoornis",
      what: "Leren onderliggende gedachten/overtuigingen veranderen + emotieregulatie",
      duration: "8-20 sessies gemiddeld",
      effectiveness: "70-80% verbetering bij professionele begeleiding"
    },
    {
      solution: "Diëtist Gespecialiseerd Eetgedrag",
      description: "Diëtist met extra training emotioneel/intuïtief eten",
      when: "Bij emotioneel eten + afvalwens, of gezond gewicht willen bereiken",
      what: "Voedingsplan + emotieregulatie + intuïtief eten leren",
      duration: "3-6 maanden begeleiding",
      effectiveness: "65-75% langdurig succes met begeleiding vs 20% zelfstandig"
    },
    {
      solution: "Mindfulness/Meditatie Training",
      description: "Structureel leren bewust zijn van gedachten/emoties/lichaam",
      when: "Bij stress, automatische reacties, weinig lichaamsbesef",
      what: "Dagelijkse mindfulness praktijk (10-30min) + emotie observeren zonder oordeel",
      duration: "8 weken MBSR (Mindfulness Based Stress Reduction) of doorlopend",
      effectiveness: "50-60% reductie emotioneel eten na 8 weken mindfulness training"
    },
    {
      solution: "Sociale Steun / Support Groep",
      description: "Groep lotgenoten (online/fysiek) voor herkenning en tips",
      when: "Bij eenzaamheid, schaamte, gevoel 'alleen te staan met probleem'",
      what: "Wekelijkse bijeenkomsten delen ervaringen, vieren successen, steun bij struggle",
      duration: "Doorlopend (zolang als behoefte)",
      effectiveness: "40-50% meer succes met sociale steun vs volledig alleen"
    },
    {
      solution: "Stressmanagement Systeem",
      description: "Structureel aanpakken stressbronnen in leven",
      when: "Als stress hoofdtrigger is (werk, relatie, financieel)",
      what: "Grenzen stellen, werk/privé balans, delegeren, therapie, carrière switch",
      duration: "Continue proces (levensstijl aanpassing)",
      effectiveness: "60% minder emotioneel eten bij structurele stress reductie"
    },
    {
      solution: "Lichaamsbeweging Routine",
      description: "Regelmatig sporten als emotie uitlaatklep + stressreductie",
      when: "Bij stress, boosheid, angst als triggers",
      what: "3-5x per week 30min bewegen (cardio voor stress, kracht voor controle gevoel)",
      duration: "Doorlopend (vast onderdeel levensstijl)",
      effectiveness: "30-40% minder emotioneel eten door regelmatig sporten (endorfines)"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Dieet Starten Als Oplossing",
      problem: "Emotioneel eten is emotie-probleem, niet voeding-probleem. Dieet lost emoties niet op",
      result: "Dieet faalt → schuldgevoel → meer emotioneel eten (vicieuze cirkel)",
      correct: "Eerst emotieregulatie leren, dan eventueel voedingspatroon verbeteren"
    },
    {
      mistake: "Trigger Foods Compleet Verbieden",
      problem: "Verbod creëert obsessie + 'verboden vrucht effect' (wil het juist meer)",
      result: "Houdt niet vol → eetbui → 'ben toch al mislukt' → opgeven",
      correct: "Matig beschikbaar + bewust eten (kleine portie, genietend) als geen emotie"
    },
    {
      mistake: "Jezelf Straffen Na Emotioneel Eten",
      problem: "Extra sporten/maaltijd overslaan = straf = negatieve spiraal",
      result: "Schuldgevoel vergroot → lagere zelfwaarde → meer emotioneel eten",
      correct: "Zelfcompassie: 'Ik ben mens, dit gebeurt, volgende keer beter' (milde aanpak)"
    },
    {
      mistake: "Alleen Wilskracht Gebruiken",
      problem: "Emotioneel eten is sterker dan wilskracht (emoties winnen altijd)",
      result: "Falen → 'ik heb geen discipline' → zelfkritiek → meer emotioneel eten",
      correct: "Strategie gebruiken (HALT, 10min regel, alternatief) - niet wilskracht"
    },
    {
      mistake: "Emoties Onderdrukken",
      problem: "'Niet emotioneel mogen zijn' → emoties stapelen op → explosie = grote eetbui",
      result: "Emoties komen er toch uit (via eten of anders)",
      correct: "Emoties toestaan + gezond uiten (huilen, praten, bewegen) - niet onderdrukken"
    },
    {
      mistake: "Te Hongerig Worden",
      problem: "Te lang niet eten → bloedsuiker daalt → emotieregulatie verslechtert → grijpen naar eten",
      result: "'Hangry' (hungry + angry) → verlies controle → emotionele keuzes",
      correct: "Regelmatig eten (3-4u tussen maaltijden) voorkomt extreme honger"
    }
  ];

  const successStories = [
    {
      name: "Sarah (34)",
      trigger: "Stress op werk (deadline druk)",
      pattern: "Elke dag 15:00 naar automaat voor chocolade/chips tijdens stressvolle periode",
      approach: "HALT controle + 10min wandeling alternatief + therapie voor werkstress",
      result: "Na 6 weken: 80% minder emotioneel eten, wandeling = vast ritual 15:00",
      key: "Alternatief ritual creëren (wandeling) voor oude ritual (snack automaat)"
    },
    {
      name: "Mark (42)",
      trigger: "Eenzaamheid (scheiding, alleen wonen)",
      pattern: "Avonden alleen → halve pizza + ijs voor TV als 'gezelschap'",
      approach: "Sociaal contact plan (vriend bellen dagelijks) + bewust eten + hobby (piano)",
      result: "Na 3 maanden: emotioneel eten van 6x per week naar 1x per 2 weken",
      key: "Echte behoefte vervullen (sociaal contact) in plaats van vervangen met eten"
    },
    {
      name: "Lisa (28)",
      trigger: "Perfectionism + zelfkritiek (nooit goed genoeg gevoel)",
      pattern: "Fout maken → zelfkritiek → 'ben mislukkeling' → eetbui als straf/troost",
      approach: "Zelfcompassie training + therapie + dagboek (3 dingen goed gedaan/dag)",
      result: "Na 4 maanden: 70% minder eetbuien, mildere innerlijke stem",
      key: "Zelfcompassie is antwoord op zelfkritiek-eetbui cyclus"
    }
  ];

  const practicalPlan = [
    {
      week: "Week 1-2: Bewustwording",
      goal: "Patronen herkennen zonder veranderen",
      actions: [
        "Emotie dagboek bijhouden elke emotionele eetmoment",
        "HALT controle doen (niet stoppen, alleen observeren)",
        "Fysieke vs emotionele honger onderscheid leren voelen",
        "Geen verandering forceren, alleen observeren"
      ]
    },
    {
      week: "Week 3-4: Experimenten",
      goal: "Eerste strategieën proberen bij 1 trigger",
      actions: [
        "Kies 1 meest voorkomende trigger uit dagboek",
        "Test 10 minuten regel bij deze trigger",
        "Lijst 3 alternatieven voor deze specifieke emotie",
        "Oefen alternatieven (ook als niet perfect lukt)"
      ]
    },
    {
      week: "Week 5-8: Uitbreiding",
      goal: "Meerdere strategieën + triggers aanpakken",
      actions: [
        "Voeg HALT controle toe aan routine",
        "Bewust eten bij 1 maaltijd per dag oefenen",
        "Omgeving aanpassen (trigger foods niet meer in huis)",
        "Sociale steun: vertel 1 vertrouwd persoon over reis"
      ]
    },
    {
      week: "Week 9-12: Verdieping",
      goal: "Langdurige oplossingen + professionele hulp",
      actions: [
        "Evalueer: welke strategieën werken best? Focus daarop",
        "Overweeg therapie/diëtist als hardnekkige patronen blijven",
        "Mindfulness dagelijkse praktijk (10min ochtend)",
        "Vier successen (ook kleine), wees mild bij terugval"
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Light Blue Background Wrapper */}

      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8">

      
        <article className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Back to Blog Link */}
        <div className="px-6 md:px-12 pt-6 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar blog
          </Link>
        </div>

        {/* Featured Image */}
        <div className="w-full aspect-video max-h-[500px] overflow-hidden">
          <Image
            src="/img/blog/emotioneel-eten/featured.webp"
            alt="Emotioneel Eten - Herken en Doorbreek de Cyclus"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Emotioneel Eten: Herken en Doorbreek de Cyclus" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Emotioneel Eten Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Emotioneel Eten: Herken en Doorbreek de Cyclus
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Van stress-eten naar bewust genieten: leer triggers herkennen en doorbreek patronen met bewezen strategieën
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Emotional vs Physical Hunger */}
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Het Verschil: Emotionele vs Fysieke Honger
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(emotionalVsPhysical).map((type, idx) => (
                <div key={idx} className={`rounded-xl p-8 shadow-lg border-2 ${
                  idx === 0 ? 'bg-rose-50 border-rose-500' : 'bg-green-50 border-green-500'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`rounded-full p-3 ${
                      idx === 0 ? 'bg-rose-100' : 'bg-green-100'
                    }`}>
                      <type.icon className={`w-8 h-8 ${
                        idx === 0 ? 'text-rose-600' : 'text-green-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold">{type.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="font-semibold mb-2">Kenmerken:</p>
                      <ul className="space-y-1">
                        {type.characteristics.map((char, cIdx) => (
                          <li key={cIdx} className="text-sm flex gap-2">
                            <span className={idx === 0 ? 'text-rose-600' : 'text-green-600'}>•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Triggers:</p>
                        <p className="text-sm font-semibold">{type.triggers}</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Voldaan gevoel:</p>
                        <p className="text-sm font-semibold">{type.satisfaction}</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Timing:</p>
                        <p className="text-sm font-semibold">{type.timing}</p>
                      </div>
                    </div>

                    <div className={`p-3 rounded font-semibold ${
                      idx === 0 ? 'bg-rose-100 text-rose-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {idx === 0 ? '⚠️' : '✓'} Na eten: {type.aftermath}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Common Triggers */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Meest Voorkomende Emotionele Eet-Triggers
            </h2>

            <div className="space-y-6">
              {commonTriggers.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 shadow-md border-l-4 border-rose-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 rounded-full p-3 flex-shrink-0">
                      <item.icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{item.trigger}</h3>
                      <p className="text-sm text-gray-700 mb-4"><strong>Waarom:</strong> {item.why}</p>
                      
                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2">Herkenbare Voorbeelden:</p>
                        <ul className="space-y-1">
                          {item.examples.map((example, eIdx) => (
                            <li key={eIdx} className="text-sm">• {example}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-rose-100 p-3 rounded">
                          <p className="text-sm"><strong>Emotie:</strong> {item.emotion}</p>
                        </div>
                        <div className="bg-green-100 p-3 rounded">
                          <p className="text-sm"><strong>Oplossing:</strong> {item.solution}</p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-3 rounded mt-3">
                        <p className="text-sm text-green-800"><strong>✓ Alternatieven:</strong> {item.alternative}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Recognition Signals */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-rose-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Emotioneel Eten Herkennen: Voor, Tijdens en Na
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(recognitionSignals).map(([phase, signals], idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 capitalize">
                    {phase === 'before' ? 'Voor Het Eten' : phase === 'during' ? 'Tijdens Het Eten' : 'Na Het Eten'}
                  </h3>
                  <ul className="space-y-2">
                    {signals.map((signal: string, sIdx: number) => (
                      <li key={sIdx} className="flex gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-rose-100 border-l-4 border-rose-500 p-6 rounded-r-xl mt-8">
              <p className="font-semibold text-lg mb-2">💡 Herkenning is de Eerste Stap</p>
              <p className="text-gray-700">
                Hoe meer signalen je herkent, hoe eerder je kunt ingrijpen. Emotioneel eten is GEEN zwakte of gebrek aan wilskracht - het is een aangeleerde reactie op emoties die je kunt afleren.
              </p>
            </div>
        </section>

        {/* Breaking Strategies */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Bewezen Strategieën Om Cyclus Te Doorbreken
            </h2>

            <div className="space-y-8">
              {breakingStrategies.map((strategy, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg border-2 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                      <strategy.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{strategy.strategy}</h3>
                      <p className="text-gray-700 mb-4">{strategy.description}</p>
                      
                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2">Hoe Te Doen:</p>
                        <ol className="space-y-1">
                          {strategy.steps.map((step, sIdx) => (
                            <li key={sIdx} className="text-sm">{sIdx + 1}. {step}</li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-green-100 p-3 rounded mb-2">
                        <p className="text-sm"><strong>Actie:</strong> {strategy.action}</p>
                      </div>

                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-sm text-blue-800"><strong>📊 Effectiviteit:</strong> {strategy.effectiveness}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Emotion Alternatives */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Te Doen In Plaats Van Eten? (Per Emotie)
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {emotionAlternatives.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-5 shadow-md border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-3 text-blue-800">{item.emotion}</h3>
                  <ul className="space-y-1">
                    {item.alternatives.map((alt, aIdx) => (
                      <li key={aIdx} className="text-sm flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{alt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-6 md:px-12 bg-rose-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij Emotioneel Eten Aanpakken
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">{mistake.mistake}</h3>
                      <p className="text-sm text-red-700 mb-2"><strong>Probleem:</strong> {mistake.problem}</p>
                      <p className="text-sm text-orange-700 mb-2"><strong>Resultaat:</strong> {mistake.result}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-sm text-green-800"><strong>✅ Correct:</strong> {mistake.correct}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Practical Plan */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              12-Weken Plan: Stap Voor Stap Emotioneel Eten Doorbreken
            </h2>

            <div className="space-y-6">
              {practicalPlan.map((phase, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-2">{phase.week}</h3>
                  <p className="text-purple-800 font-semibold mb-3">🎯 Doel: {phase.goal}</p>
                  <ul className="space-y-2">
                    {phase.actions.map((action, aIdx) => (
                      <li key={aIdx} className="flex gap-2 text-sm">
                        <Target className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-8">
              <p className="font-semibold mb-2">⚠️ Belangrijke Noot:</p>
              <p className="text-sm">
                Dit plan is richtlijn, geen strikt schema. Iedereen gaat in eigen tempo. Terugval is normaal (onderdeel van proces). Bij hardnekkige patronen of eetstoornis: zoek professionele hulp (therapie/diëtist).
              </p>
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Professionele Hulp Bij Emotioneel Eten
            </h2>
            <p className="text-xl text-rose-50 mb-8 max-w-2xl mx-auto">
              Vind een gespecialiseerde diëtist of therapeut bij jou in de buurt voor persoonlijke begeleiding
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-colors shadow-lg"
            >
              Vind Een Specialist
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>Emotioneel eten is geen zwakte</strong> - het is een aangeleerde reactie op emoties die je kunt afleren. Het verschil tussen emotionele en fysieke honger leren voelen is de eerste cruciale stap. Emotionele honger komt plotseling, verlangt specifiek voedsel, stopt niet bij verzadiging en geeft schuldgevoel. Fysieke honger komt geleidelijk, accepteert elk voedsel en geeft voldaan gevoel.
              </p>
              <p>
                De <strong>6 meest voorkomende triggers</strong>: stress (cortisol verhoogt trek), verdriet (dopamine via eten), verveling (stimulans zoeken), gewoonte (automatisme), beloning (aangeleerd sinds jeugd) en zelfkritiek (eten als straf/troost). Elk heeft betere oplossing dan eten: stress? Beweeg. Verdriet? Praat/huil. Verveling? Activiteit. Gewoonte? Doorbreek patroon.
              </p>
              <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">🎯 Bewezen Strategieën Samenvatting:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>HALT controle:</strong> Voor eten: ben ik Hongerig, Angry, Lonely of Tired? (80% effectief)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>10 minuten regel:</strong> Uitstel, doe iets anders (60% emotionele trek verdwijnt)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Emotie benoemen + alternatief:</strong> Elke emotie heeft betere oplossing dan eten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Bewust eten:</strong> Bewust eten = 50% minder consumptie vs afgeleid eten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Dagboek:</strong> Patronen zien = eerste stap doorbreken (2 weken al effect)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Omgeving:</strong> Trigger foods niet in huis = 40-50% minder emotioneel eten</span>
                  </li>
                </ul>
              </div>
              <p>
                <strong>Langdurig succes vereist:</strong> zelfcompassie (niet straffen bij terugval), professionele hulp bij hardnekkige patronen (therapie 70-80% effectief, diëtist 65-75%), structurele stressreductie (60% minder emotioneel eten) en sociale steun (40-50% meer succes). Onthoud: het is een reis, geen race. Elke kleine stap vooruit telt.
              </p>
            </div>
        </section>
      </article>

      </div>
    </>
  );
}
