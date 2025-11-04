import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Baby, Apple, Utensils, Heart, AlertCircle, CheckCircle2, XCircle, TrendingUp, Shield, Smile, Book, Sparkles, Timer, Clock, Award , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Gezonde Voeding Voor Kinderen: Complete Gids Voor Ouders | 2025',
  description: 'Gezonde kindervoeding gids: portiegroottes per leeftijd, vitaal eetpatroon, groenten lekker maken, kieskeurige eters aanpak en praktische tips.',
  keywords: [
    'gezonde voeding kinderen',
    'kindervoeding',
    'kieskeurige eters',
    'groenten kinderen',
    'portiegroottes kinderen',
    'gezond eten kids',
    'schoollunch',
    'kinderen en suiker',
    'vitamines kinderen',
    'eetpatroon kinderen'
  ],
  openGraph: {
    title: 'Gezonde Voeding Voor Kinderen: Complete Gids Voor Ouders',
    description: 'Praktische gids voor gezonde kindervoeding met portiegroottes, tips voor kieskeurige eters en gezonde lunch ideeën',
    images: ['/img/blog/gezonde-voeding-kinderen/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gezonde Voeding Voor Kinderen: Complete Gids Voor Ouders',
  description: 'Uitgebreide gids voor ouders over gezonde kindervoeding met praktische tips en portiegroottes.',
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
    '@id': 'https://dietistindebuurt.nl/blog/gezonde-voeding-kinderen'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/gezonde-voeding-kinderen/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/gezonde-voeding-kinderen',
  inLanguage: 'nl-NL'
};

export default function GezondeVoedingKinderenPage() {
  const ageDailyNeeds = [
    {
      age: "1-3 Jaar (Peuters)",
      icon: Baby,
      calories: "1000-1400 kcal/dag",
      meals: "3 hoofdmaaltijden + 2-3 tussendoortjes",
      portions: {
        grains: "4-5 porties (1 portie = 1 snee brood, 2 el gekookte pasta/rijst)",
        vegetables: "2-3 porties (1 portie = 50g, handvol)",
        fruit: "2 porties (1 portie = half stuk fruit, handvol bessen)",
        dairy: "2-3 porties (1 portie = 150ml melk/yoghurt, plakje kaas)",
        protein: "1-2 porties (1 portie = 25-50g vlees/vis, 1 ei, 2 el peulvruchten)"
      },
      water: "1-1.5 liter per dag (6-8 bekertjes)",
      special: [
        "Volle melk (geen halfvolle) tot 2 jaar voor ontwikkeling hersenen",
        "Kleine stukjes (verstikkingsgevaar vermijden)",
        "Veel herhaling nodig (10-15x aanbieden nieuw voedsel)",
        "Zelf laten eten (ook al is het rommelig)"
      ]
    },
    {
      age: "4-8 Jaar (Kleuters/Basisschool)",
      icon: Smile,
      calories: "1200-1800 kcal/dag",
      meals: "3 hoofdmaaltijden + 2 tussendoortjes",
      portions: {
        grains: "5-6 porties (1 portie = 1 snee brood, 3 el gekookte pasta/rijst)",
        vegetables: "3-4 porties (1 portie = 50-75g)",
        fruit: "2 porties (1 portie = 1 appel, handvol druiven)",
        dairy: "2-3 porties (1 portie = 200ml melk, 150g yoghurt)",
        protein: "2 porties (1 portie = 50-75g vlees/vis, 1-2 eieren)"
      },
      water: "1.5-2 liter per dag (8-10 bekertjes)",
      special: [
        "Halfvolle melk vanaf 2 jaar (tenzij ondergewicht)",
        "Betrek bij koken (groenten snijden, mengen)",
        "School: gezonde lunch meegeven (brood, groente, fruit, water)",
        "Snoep beperken: max 1 moment/dag, niet als beloning"
      ]
    },
    {
      age: "9-13 Jaar (Bovenbouw/Middelbare School)",
      icon: Book,
      calories: "1600-2200 kcal/dag (afhankelijk activiteit)",
      meals: "3 hoofdmaaltijden + 1-2 tussendoortjes",
      portions: {
        grains: "6-7 porties (1 portie = 1 snee brood, 4 el gekookte pasta/rijst)",
        vegetables: "4-5 porties (1 portie = 75-100g)",
        fruit: "2-3 porties (1 portie = 1 appel, banaan)",
        dairy: "3-4 porties (1 portie = 250ml melk, 200g yoghurt)",
        protein: "2-3 porties (1 portie = 75-100g vlees/vis, 2 eieren)"
      },
      water: "2-2.5 liter per dag (10-12 bekertjes)",
      special: [
        "Groeiperiode: extra calcium (zuivel) en eiwit belangrijk",
        "Zelfstandigheid: leren zelf gezonde keuzes maken",
        "Lunchpakket: betrek kind bij samenstellen (eigen keuzes binnen gezonde opties)",
        "Sociale druk: praat over reclame, social media, body image"
      ]
    },
    {
      age: "14-18 Jaar (Tieners)",
      icon: TrendingUp,
      calories: "2000-3000 kcal/dag (jongens vaak meer, sporters hoger)",
      meals: "3 hoofdmaaltijden + 1-2 tussendoortjes (bij sport meer)",
      portions: {
        grains: "6-8 porties (1 portie = 1 snee brood, 4-5 el gekookte pasta)",
        vegetables: "4-5 porties (1 portie = 100g)",
        fruit: "2-3 porties",
        dairy: "3-4 porties (calcium voor botvorming)",
        protein: "2-3 porties (1 portie = 100-125g vlees/vis, 2-3 eieren)"
      },
      water: "2.5-3 liter per dag (12-15 bekertjes, bij sport meer)",
      special: [
        "IJzer belangrijk (meisjes: menstruatie, jongens: spiergroei)",
        "Vaak overslaan ontbijt: benadruk belang (concentratie, energie)",
        "Fastfood sociale momenten: leer gezondere keuzes (grilled vs fried)",
        "Body image gevoelig: focus op gezondheid, niet uiterlijk/gewicht"
      ]
    }
  ];

  const essentialNutrients = [
    {
      nutrient: "Calcium",
      why: "Sterke botten en tanden, groei, spieren, zenuwen",
      need: "1-3j: 500mg | 4-8j: 800mg | 9-18j: 1200mg/dag",
      sources: "Zuivel (melk, yoghurt, kaas), verrijkte plantmelk, groene groenten, noten",
      deficiency: "Zwakke botten, groeistoornissen, verhoogd fractuurrisico later",
      tip: "3-4 porties zuivel/dag dekt behoefte (glas melk, yoghurt, kaas op brood)"
    },
    {
      nutrient: "IJzer",
      why: "Zuurstoftransport in bloed, energie, cognitieve ontwikkeling",
      need: "1-3j: 7mg | 4-8j: 10mg | Jongens 9-13j: 8mg | Meisjes 9-18j: 15mg (menstruatie)",
      sources: "Rood vlees (beste opname), kip, vis, peulvruchten, volkoren granen, groene groenten",
      deficiency: "Vermoeidheid, concentratieproblemen, bleke huid, verhoogde infecties",
      tip: "Vitamine C bij maaltijd verhoogt ijzeropname (glas sinaasappelsap bij vlees/peulvruchten)"
    },
    {
      nutrient: "Vitamine D",
      why: "Calciumopname, sterke botten, immuunsysteem",
      need: "0-4j: 10mcg | 4-70j: 10mcg/dag (supplement aanbevolen Nederland)",
      sources: "Vette vis (zalm, makreel), eieren, verrijkte margarine, zonlicht (beperkt in NL)",
      deficiency: "Rachitis (zachte botten), groeistoornissen, verhoogd infectierisico",
      tip: "Dagelijks supplement 10mcg aanbevolen voor alle kinderen in Nederland (weinig zon)"
    },
    {
      nutrient: "Vitamine A",
      why: "Gezonde ogen, huid, immuunsysteem, groei",
      need: "1-3j: 300mcg | 4-8j: 400mcg | 9-13j: 600mcg | 14-18j: 700-900mcg/dag",
      sources: "Oranje groenten (wortel, pompoen, zoete aardappel), groene bladgroenten, zuivel, ei",
      deficiency: "Nachtblindheid, droge huid, verhoogde infecties",
      tip: "Vit A is vetoplosbaar: eet wortels/pompoen met beetje vet (olijfolie, notenpasta)"
    },
    {
      nutrient: "Omega-3 (DHA/EPA)",
      why: "Hersenontwikkeling, concentratie, gedrag, oog gezondheid",
      need: "1-3j: 100mg | 4-8j: 200mg | 9-18j: 250-300mg DHA+EPA/dag",
      sources: "Vette vis (zalm, makreel, haring 1-2x/week), algenolie, verrijkte producten",
      deficiency: "Concentratieproblemen, gedragsproblemen, leerproblemen mogelijk",
      tip: "Vis niet lekker? Probeer vissticks (nog steeds omega-3), of algenolie supplement"
    },
    {
      nutrient: "Vezels",
      why: "Gezonde spijsvertering, voorkomt obstipatie, langere verzadiging",
      need: "1-3j: 15g | 4-8j: 20g | 9-13j: 25-30g | 14-18j: 30-40g/dag",
      sources: "Volkoren granen, fruit (met schil), groenten, peulvruchten, noten",
      deficiency: "Obstipatie (verstopping), hongergevoel snel terug, verhoogd diabetes risico",
      tip: "Kies volkoren brood/pasta, eet fruit met schil, geef dagelijks groente bij lunch/diner"
    }
  ];

  const pickyEaterStrategies = [
    {
      strategy: "Herhaling Zonder Druk (10-15x Regel)",
      problem: "Kind weigert nieuwe groenten/voedsel",
      solution: "Blijf aanbieden zonder forceren - 10-15x nodig voor acceptatie",
      how: [
        "Zet wekelijks nieuwe groente op tafel (ook als kind weigert)",
        "Geen druk: 'Het staat er, je mag proberen als je wilt'",
        "Zelf eten (voorbeeldrol): 'Hmm, lekker deze broccoli!'",
        "Geen alternatief aanbieden (honger gaat vanzelf over)",
        "Vier kleine successen: aanraken, likken, proeven = vooruitgang!"
      ],
      effectiveness: "80% kinderen accepteert na 10-15x aanbieden"
    },
    {
      strategy: "Betrek Bij Koken en Boodschappen",
      problem: "Kind niet geïnteresseerd in gezond eten",
      solution: "Eigen inbreng verhoogt interesse en bereidheid te proberen",
      how: [
        "Winkel: kind mag 1 nieuwe groente kiezen om te proberen",
        "Keuken: laat wassen, scheuren sla, mengen, groenten snijden (veilig mes)",
        "Kweken: tuinkers, tomaat op vensterbank (verbinding voedsel)",
        "Kies recept samen: kind mag 1x per week recept uitkiezen (binnen gezonde opties)",
        "Presenteren: kind mag bord mooi maken (eigen creatie = trots)"
      ],
      effectiveness: "Kinderen eten 3x vaker groenten die ze zelf geholpen hebben bereiden"
    },
    {
      strategy: "Creatieve Presentatie (Visueel Aantrekkelijk)",
      problem: "Kind vindt gezond eten saai/niet lekker",
      solution: "Maak eten leuk en aantrekkelijk met kleur, vormen, namen",
      how: [
        "Gezichtjes maken (komkommer ogen, tomaat neus, wortel mond)",
        "Steekvormpjes: ster-komkommers, hart-watermeloen",
        "Regenboog bord: alle kleuren groenten (kleurrijk = gezonder associatie)",
        "Leuke namen: 'Broccoli boompjes', 'Wortel raketten', 'Superhelden smoothie'",
        "Dip sauzen: hummus, yoghurt dip (maakt groenten leuker)"
      ],
      effectiveness: "60% meer groente consumptie bij creatieve presentatie vs regulier"
    },
    {
      strategy: "Verstop/Meng Groenten",
      problem: "Kind weigert categorisch zichtbare groenten",
      solution: "Mix groenten in favoriete gerechten (tijdelijke strategie)",
      how: [
        "Pastasaus: blend paprika, courgette, wortel in tomatensaus",
        "Gehaktballen: fijngehakte groenten door gehakt",
        "Smoothie: spinazie in fruitsmoothie (proeft niet, maar groen is leuk)",
        "Pannenkoeken: geraspte courgette/wortel in beslag",
        "Soep: puur groenten (kind ziet niet welke)"
      ],
      effectiveness: "Tijdelijk OK, maar blijf ook zichtbare groenten aanbieden (anders leert kind nooit)"
    },
    {
      strategy: "Positief Voorbeeldgedrag (Ouders Als Voorbeeld)",
      problem: "Kind weigert wat ouders ook niet eten",
      solution: "Kinderen kopiëren ouders - eet zelf wat je kind moet eten",
      how: [
        "Eet zelf enthousiast groenten: 'Mmm, deze broccoli is zo lekker!'",
        "Geen negatieve opmerkingen over eten waar kind bij is",
        "Gezamenlijke maaltijden: iedereen krijgt hetzelfde (geen apart kindermenu)",
        "Experimenteer samen: 'Zullen we samen deze nieuwe groente proberen?'",
        "Gezonde snacks zichtbaar: fruitmand op tafel, groenten in koelkast vooraan"
      ],
      effectiveness: "Kinderen eten 2-3x meer groenten als ouders dat ook doen"
    },
    {
      strategy: "Geen Beloning Met Eten (Vooral Geen Toetje)",
      problem: "Eten als beloning creëert ongezonde relatie met voedsel",
      solution: "Ontkoppel eten en emotie/gedrag - gebruik andere beloningen",
      how: [
        "NIET: 'Als je groenten opeet, krijg je ijs' (maakt groenten straf, ijs prijs)",
        "WEL: 'Na eten gaan we samen spelen/lezen' (tijd als beloning)",
        "Toetje is onderdeel maaltijd (niet verdienen, gewoon onderdeel)",
        "Braaf geweest? Beloon met activiteit: park, spelletje, knuffel, stickers",
        "Eten = brandstof voor lijf, niet beloning/troost/straf"
      ],
      effectiveness: "Voorkomt emotioneel eten en ongezonde voedsel relatie op volwassen leeftijd"
    }
  ];

  const healthyLunchIdeas = [
    {
      type: "Broodlunch (Klassiek)",
      examples: [
        "Volkoren brood + hummus + komkommer + cherry tomaten",
        "Bruin brood + pindakaas (ongezoet) + banaan schijfjes",
        "Meergranen brood + kaas + paprika reepjes",
        "Volkoren wrap + kip + sla + komkommer + yoghurt dressing"
      ],
      tips: "Wissel broodsoorten (volkoren, spelt, rogge), voeg altijd groente toe"
    },
    {
      type: "Warme Lunch (Thermos)",
      examples: [
        "Pasta volkoren + tomatensaus + gehaktballetjes + broccoli",
        "Rijst + kip + roerbakgroenten + sojasaus",
        "Soep (tomaat, pompoen, groente) + volkoren crackers",
        "Wraps (zelf rollen ochtend): volkoren + bonen + kaas + sla"
      ],
      tips: "Thermos voorverwarmen (kokend water 5min), dan warme lunch erin = blijft warm"
    },
    {
      type: "Lunchbox Variatie",
      examples: [
        "Mini volkoren pannenkoeken + fruit + yoghurt dip",
        "Ei muffins (ei + groenten + kaas gebakken in muffinvorm)",
        "Volkoren crackers + kaas blokjes + druiven + wortels",
        "Zelfgemaakte pizza stukjes (volkoren bodem + groenten) - koud lekker"
      ],
      tips: "Maak zondag maaltijdvoorbereiding: portioneer in bakjes voor hele week"
    },
    {
      type: "Tussendoortjes (Bij Lunch)",
      examples: [
        "Fruit: appel partjes, druiven, blauwe bessen, mandarijn",
        "Groenten: komkommer, wortel, paprika, cherry tomaat + hummus",
        "Noten (vanaf 5j, geen allergie): handje ongezoute noten/pitten",
        "Zuivel: yoghurt naturel + fruit, kaas blokjes"
      ],
      tips: "Vermijd: koekjes, chips, snoep, pakjes sap (te veel suiker)"
    }
  ];

  const sugarGuidelines = {
    max: [
      { age: "1-3 jaar", max: "15g toegevoegde suiker/dag (3 theelepels)", reality: "Gemiddeld 30g = 2x te veel!" },
      { age: "4-8 jaar", max: "20g toegevoegde suiker/dag (4 theelepels)", reality: "Gemiddeld 45g = 2x te veel!" },
      { age: "9-18 jaar", max: "25-30g toegevoegde suiker/dag (5-6 theelepels)", reality: "Gemiddeld 60-80g = 3x te veel!" }
    ],
    hidden: [
      { product: "Pakje drinken (200ml)", sugar: "20g (5 klontjes!)", better: "Water, thee zonder suiker" },
      { product: "Ontbijtgranen 'gezond' (40g)", sugar: "12-18g", better: "Havermout, ongezoete muesli" },
      { product: "Fruityoghurt (150g)", sugar: "18-25g", better: "Naturel yoghurt + vers fruit" },
      { product: "Ketchup (2 el)", sugar: "8g", better: "Tomatensaus zelf maken" },
      { product: "Granola reep 'gezond'", sugar: "15-20g", better: "Handje noten + fruit" }
    ],
    healthySwaps: [
      "Pakje drinken → Water met fruit (citroen, aardbei)",
      "Suiker ontbijtgranen → Havermout + banaan + kaneel",
      "Fruityoghurt → Naturel yoghurt + vers fruit",
      "Koekjes tussendoor → Fruit + handje noten",
      "Snoep na eten → Stukje pure chocolade (1-2 blokjes 70%+)"
    ]
  };

  const commonMistakes = [
    {
      mistake: "Kort Koken (15min Regel Misbruiken)",
      problem: "Aparte maaltijd voor kind (patat/pasta terwijl rest eet gezond)",
      why: "Kind leert: zeuren = krijg favoriete eten. Ontwikkelt geen brede smaak",
      correct: "Iedereen eet hetzelfde. Kind hoeft niet alles op, maar geen alternatief. Honger? Bij volgende maaltijd",
      note: "Eerste weken zwaar, daarna accepteert kind (honger wint van voorkeur)"
    },
    {
      mistake: "Toetje Als Beloning",
      problem: "'Groenten opeten, dan krijg je toetje' (maakt groenten straf)",
      why: "Kind leert: groenten = slecht (moet door voor iets lekkers), toetje = prijs (ongezonde focus)",
      correct: "Toetje is onderdeel maaltijd (zoals bijgerecht). Niet verdienen, gewoon een stuk fruit/yoghurt na",
      note: "Toetje niet elke dag nodig - 3-4x per week is voldoende"
    },
    {
      mistake: "Forceren Opeten (Schone Bord Dwang)",
      problem: "'Bord moet leeg' (negeert verzadigingssignalen kind)",
      why: "Kind leert verzadiging negeren → overeters als volwassene, geen body awareness",
      correct: "Kind bepaalt hoeveel (ouder bepaalt wat/wanneer). Vol = stoppen mag. Honger? Wacht tot volgende maaltijd",
      note: "Vertrouw kind: ze eten instinctief wat ze nodig hebben over dag/week"
    },
    {
      mistake: "Snoep Totaal Verbieden",
      problem: "Nul snoep toegestaan (verbod creëert obsessie)",
      why: "'Verboden vrucht' effect: kind denkt alleen aan snoep, grijpt kans (vriend, oma) om over te eten",
      correct: "1 snoepmoment per dag (of 1 dag per week 'snoepdag'). Leer matigheid in plaats van verbod",
      note: "Kinderen die thuis mogen snoepen (gematigd) eten minder bij vrienden dan verboden kinderen"
    },
    {
      mistake: "Snacken Hele Dag Door",
      problem: "Constant beschikbaar eten/drinken (tussen maaltijden)",
      why: "Nooit echte honger → geen eetlust hoofdmaaltijd → geen groenten eten → te weinig voedingsstoffen",
      correct: "Vaste eetmomenten: 3 hoofdmaaltijden + 2 tussendoortjes (vast tijdstip). Tussen door: alleen water",
      note: "2-3u tussen eetmomenten zorgt voor honger = beter eten bij maaltijd"
    },
    {
      mistake: "Drinken = Sap en Frisdrank",
      problem: "Pakjes sap, frisdrank als standaard drinken",
      why: "20-30g suiker per pakje = vermindert eetlust, tandbederf, suiker gewenning",
      correct: "Standaard: water. Melk bij maaltijd. Sap = traktatie 1x per week (niet dagelijks)",
      note: "100% vruchtensap ≠ gezond (zelfde suiker als frisdrank, zonder vezels)"
    }
  ];

  const practicalWeekMenu = [
    {
      day: "Maandag",
      breakfast: "Havermout + banaan + kaneel + handje blauwe bessen",
      lunch: "Volkoren brood + kaas + tomaat + komkommer | Appel",
      snack: "Wortelsticks + hummus",
      dinner: "Pasta volkoren + gehaktballetjes + tomatensaus + broccoli",
      extra: "Maaltijd samen eten, TV uit, 20min rustig"
    },
    {
      day: "Dinsdag",
      breakfast: "Volkoren brood + pindakaas + banaan schijfjes | Melk",
      lunch: "Wrap volkoren + kip + sla + komkommer + yoghurt | Druiven",
      snack: "Yoghurt naturel + aardbeitjes",
      dinner: "Rijst + vis (zalm) + roerbakgroenten (paprika, ui, peen)",
      extra: "Kind helpt groenten snijden (veilig mes)"
    },
    {
      day: "Woensdag",
      breakfast: "Volkoren beschuit + halvarine + hagelslag | Melk",
      lunch: "Soep (pompoen/tomaat) + volkoren crackers + kaas | Mandarijn",
      snack: "Handje noten (amandelen, walnoten)",
      dinner: "Aardappel + kipfilet + sperziebonen + wortel",
      extra: "Probeer nieuwe groente: bietjes roosteren"
    },
    {
      day: "Donderdag",
      breakfast: "Yoghurt naturel + muesli ongezoet + vers fruit",
      lunch: "Volkoren brood + ei + sla + tomaat | Peer",
      snack: "Appel + plakje kaas",
      dinner: "Volkoren couscous + kikkererwten + geroosterde groenten",
      extra: "Vegetarisch (1-2x week is gezond)"
    },
    {
      day: "Vrijdag",
      breakfast: "Volkoren pannenkoek + fruit (aardbei, banaan)",
      lunch: "Bruin brood + hummus + komkommer + paprika | Druiven",
      snack: "Komkommer + cherry tomaat",
      dinner: "Pizza (volkoren bodem zelf) + groenten + kaas + kip",
      extra: "Kind mag pizza zelf beleggen (binnen opties)"
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
            src="/img/blog/gezonde-voeding-kinderen/featured.webp"
            alt="Gezonde Voeding Voor Kinderen - Complete Gids"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Gezonde Voeding Voor Kinderen: Complete Gids Voor Ouders" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
            <Apple className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Kindervoeding Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Gezonde Voeding Voor Kinderen: Complete Gids Voor Ouders
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Praktische gids voor gezonde kindervoeding: portiegroottes, kieskeurige eters aanpak, lunch ideeën en suiker vermijden
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Daily Needs Per Age */}
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Dagelijkse Voedingsbehoefte Per Leeftijd
            </h2>

            <div className="space-y-8">
              {ageDailyNeeds.map((age, idx) => (
                <div key={idx} className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 shadow-lg border-2 border-amber-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                      <age.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{age.age}</h3>
                      
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        <div className="bg-white p-3 rounded">
                          <p className="text-xs text-gray-600">Calorieën:</p>
                          <p className="text-sm font-semibold">{age.calories}</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-xs text-gray-600">Maaltijden:</p>
                          <p className="text-sm font-semibold">{age.meals}</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-xs text-gray-600">Water:</p>
                          <p className="text-sm font-semibold">{age.water}</p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2">Portiegroottes Per Dag:</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {Object.entries(age.portions).map(([key, value]) => (
                            <div key={key} className="text-sm">
                              <span className="font-semibold capitalize">{key === 'grains' ? 'Granen' : key === 'vegetables' ? 'Groenten' : key === 'fruit' ? 'Fruit' : key === 'dairy' ? 'Zuivel' : 'Eiwit'}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-amber-100 p-3 rounded">
                        <p className="font-semibold mb-2">⭐ Specifiek Voor Deze Leeftijd:</p>
                        <ul className="space-y-1">
                          {age.special.map((item, sIdx) => (
                            <li key={sIdx} className="text-sm">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Essential Nutrients */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Essentiële Voedingsstoffen Voor Groei
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {essentialNutrients.map((nutrient, idx) => (
                <div key={idx} className="bg-green-50 rounded-xl p-6 shadow-md border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-2 text-green-800">{nutrient.nutrient}</h3>
                  <p className="text-sm text-gray-700 mb-3"><strong>Waarom:</strong> {nutrient.why}</p>
                  
                  <div className="bg-white p-3 rounded mb-2">
                    <p className="text-sm"><strong>Behoefte:</strong> {nutrient.need}</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded mb-2">
                    <p className="text-sm"><strong>Bronnen:</strong> {nutrient.sources}</p>
                  </div>

                  <div className="bg-red-50 p-2 rounded mb-2">
                    <p className="text-xs text-red-700"><strong>Tekort:</strong> {nutrient.deficiency}</p>
                  </div>

                  <div className="bg-green-100 p-2 rounded">
                    <p className="text-sm text-green-800"><strong>💡 Tip:</strong> {nutrient.tip}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Kieskeurige Eters Strategieën */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Kieskeurige Eters: 6 Strategieën Die Werken
            </h2>

            <div className="space-y-6">
              {pickyEaterStrategies.map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-400">
                  <h3 className="text-2xl font-bold mb-3 text-blue-800">{strategy.strategy}</h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm"><strong>Probleem:</strong> {strategy.problem}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm"><strong>Oplossing:</strong> {strategy.solution}</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-3">
                    <p className="font-semibold mb-2">Hoe Te Doen:</p>
                    <ul className="space-y-1">
                      {strategy.how.map((step, sIdx) => (
                        <li key={sIdx} className="text-sm">{sIdx + 1}. {step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm text-green-800"><strong>📊 Effectiviteit:</strong> {strategy.effectiveness}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Healthy Lunch Ideas */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Gezonde Lunch Ideeën Voor School
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {healthyLunchIdeas.map((lunch, idx) => (
                <div key={idx} className="bg-purple-50 rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-3 text-purple-800">{lunch.type}</h3>
                  <ul className="space-y-2 mb-3">
                    {lunch.examples.map((example, eIdx) => (
                      <li key={eIdx} className="text-sm flex gap-2">
                        <Utensils className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-purple-100 p-3 rounded">
                    <p className="text-sm text-purple-800"><strong>💡</strong> {lunch.tips}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Sugar Guidelines */}
        <section className="py-16 px-6 md:px-12 bg-red-50">
            <h2 className="text-3xl font-bold mb-12 text-center text-red-800">
              ⚠️ Suiker: De Verborgen Vijand
            </h2>

            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Maximale Toegevoegde Suiker Per Dag</h3>
              <div className="space-y-3">
                {sugarGuidelines.max.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <div>
                      <p className="font-semibold">{item.age}</p>
                      <p className="text-sm text-green-700">Max: {item.max}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-red-700 font-semibold">{item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Verborgen Suiker (Shocking!)</h3>
              <div className="space-y-3">
                {sugarGuidelines.hidden.map((item, idx) => (
                  <div key={idx} className="grid md:grid-cols-3 gap-3 p-3 bg-yellow-50 rounded">
                    <div>
                      <p className="font-semibold text-sm">{item.product}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-red-600 font-bold">{item.sugar}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-700">✓ {item.better}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-xl">
              <h3 className="font-bold text-lg mb-3">✅ Gezonde Swaps:</h3>
              <ul className="space-y-2">
                {sugarGuidelines.healthySwaps.map((swap, idx) => (
                  <li key={idx} className="text-sm">{swap}</li>
                ))}
              </ul>
            </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij Kindervoeding
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-2 border-red-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">{mistake.mistake}</h3>
                      <p className="text-sm text-red-700 mb-2"><strong>Probleem:</strong> {mistake.problem}</p>
                      <p className="text-sm text-orange-700 mb-2"><strong>Waarom fout:</strong> {mistake.why}</p>
                      <div className="bg-green-50 p-3 rounded mb-2">
                        <p className="text-sm text-green-800"><strong>✅ Correct:</strong> {mistake.correct}</p>
                      </div>
                      <p className="text-xs text-gray-600 italic">{mistake.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Weekly Menu */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-teal-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Praktisch Weekmenu (Maandag-Vrijdag)
            </h2>

            <div className="space-y-4">
              {practicalWeekMenu.map((day, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
                  <h3 className="text-xl font-bold mb-3 text-teal-800">{day.day}</h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="bg-yellow-50 p-3 rounded">
                      <p className="text-xs font-semibold text-gray-600">Ontbijt:</p>
                      <p className="text-sm">{day.breakfast}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-xs font-semibold text-gray-600">Lunch:</p>
                      <p className="text-sm">{day.lunch}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-xs font-semibold text-gray-600">Tussendoortje:</p>
                      <p className="text-sm">{day.snack}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-xs font-semibold text-gray-600">Avondeten:</p>
                      <p className="text-sm">{day.dinner}</p>
                    </div>
                  </div>
                  <div className="bg-teal-100 p-3 rounded">
                    <p className="text-sm text-teal-800"><strong>💡 Extra:</strong> {day.extra}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-8">
              <p className="font-semibold mb-2">📝 Weekmenu Tips:</p>
              <ul className="text-sm space-y-1">
                <li>• Weekend: ruimte voor uitzonderingen (pannenkoeken, pizza, uiteten)</li>
                <li>• Restjes: maak grote porties, lunch volgende dag of vries in</li>
                <li>• Variatie: wissel recepten, maar herhaal favorieten (herkenning = veiligheid)</li>
                <li>• Kind betrekken: 1x per week recept kiezen (binnen gezonde opties)</li>
              </ul>
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-amber-500 to-yellow-400 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Hulp Nodig Bij Kindervoeding?
            </h2>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
              Vind een gespecialiseerde kinderdiëtist bij jou in de buurt voor persoonlijk advies
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              Vind Een Kinderdiëtist
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>Gezonde kindervoeding start met de juiste portiegroottes</strong>: peuters (1-3j) 1000-1400 kcal, kleuters (4-8j) 1200-1800 kcal, opgroeiende kinderen (9-13j) 1600-2200 kcal, en tieners (14-18j) 2000-3000 kcal. Focus op 6 essentiële voedingsstoffen: calcium voor botten (3-4 porties zuivel/dag), ijzer voor energie (rood vlees + vitamine C), vitamine D supplement (10mcg/dag), vitamine A voor ogen (oranje groenten), omega-3 voor hersenen (vette vis 1-2x/week), en vezels voor spijsvertering (volkoren granen, fruit, groenten).
              </p>
              <p>
                <strong>Kieskeurige eters aanpakken met bewezen strategieën</strong>: herhaal nieuwe voedsel 10-15x zonder druk (80% acceptatie), betrek kind bij koken (3x meer groente consumptie), creatieve presentatie met kleuren en vormen (60% meer consumptie), verstop groenten tijdelijk maar blijf ook zichtbaar aanbieden, wees een voorbeeld (kinderen eten 2-3x meer groenten als ouders dat ook doen), en gebruik GEEN eten als beloning (voorkomt emotioneel eten later).
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">🎯 Cruciale Do's &amp; Don'ts:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>DO:</strong> Iedereen eet hetzelfde (geen apart kindermenu), vaste eetmomenten (2-3u tussen), water als standaard drinken</span>
                  </li>
                  <li className="flex gap-2">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span><strong>DON'T:</strong> Toetje als beloning, forceren opeten, snoep verbieden (creëert obsessie), pakjes sap dagelijks</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Suiker max:</strong> 1-3j: 15g, 4-8j: 20g, 9-18j: 25-30g/dag (maar gemiddeld 2-3x te veel!)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Lunch school:</strong> Volkoren brood + groente + fruit + water (vermijd koekjes, sap, chips)</span>
                  </li>
                </ul>
              </div>
              <p>
                <strong>Geduld en consistentie zijn sleutel</strong>: kinderen ontwikkelen smaak over jaren, niet dagen. Eerste 1000 dagen (0-3 jaar) cruciaal voor smaakvoorkeuren (brede variatie aanbieden = gezondere eter later). Bij hardnekkige picky eating, gewichtsproblemen of zorgen: zoek kinderdiëtist (gespecialiseerd in gedragsverandering en ouder-kind dynamiek).
              </p>
            </div>
        </section>
      </article>

      </div>
    </>
  );
}
