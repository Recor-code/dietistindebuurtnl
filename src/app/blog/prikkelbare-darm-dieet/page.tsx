import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, XCircle, Info, Apple, ShieldAlert, TrendingDown, Heart, Lightbulb, Clock, BookOpen, ChefHat, Award } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Prikkelbare Darm Syndroom (PDS): Het Juiste Dieet | FODMAP Gids 2025',
  description: 'Complete gids PDS/IBS dieet: FODMAP eliminatiedieet, symptomen verminderen, goede en slechte voeding, en praktische tips van diëtist.',
  keywords: [
    'prikkelbare darm',
    'PDS dieet',
    'IBS voeding',
    'FODMAP dieet',
    'buikpijn voeding',
    'opgeblazen gevoel',
    'darmklachten dieet',
    'fodmap lijst',
    'PDS symptomen',
    'diëtist prikkelbare darm'
  ],
  openGraph: {
    title: 'Prikkelbare Darm Syndroom (PDS): Het Juiste Dieet',
    description: 'Complete gids over PDS/IBS dieet met FODMAP eliminatiedieet en praktische voedingstips',
    images: ['/img/blog/prikkelbare-darm-dieet/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Prikkelbare Darm Syndroom (PDS): Het Juiste Dieet',
  description: 'Uitgebreide gids over het juiste dieet bij prikkelbare darm syndroom (PDS/IBS) met FODMAP aanpak.',
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
    '@id': 'https://dietistindebuurt.nl/blog/prikkelbare-darm-dieet'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/prikkelbare-darm-dieet/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/prikkelbare-darm-dieet',
  inLanguage: 'nl-NL'
};

export default function PrikkelbareDarmDieetPage() {
  const symptoms = {
    digestive: [
      "Buikpijn en krampen (vooral na eten)",
      "Opgeblazen gevoel en bolle buik",
      "Overmatige gasvorming en winderigheid",
      "Afwisselend diarree en obstipatie",
      "Slijm in de ontlasting",
      "Gevoel van incomplete stoelgang"
    ],
    other: [
      "Vermoeidheid en energietekort",
      "Hoofdpijn en concentratieproblemen",
      "Misselijkheid (vooral 's ochtends)",
      "Rugpijn en spierpijn",
      "Angst en stress (vicieuze cirkel)"
    ],
    triggers: [
      "Stress en emoties (70% van PDS-patiënten)",
      "Bepaalde voedingsmiddelen (FODMAP)",
      "Grote maaltijden",
      "Hormonen (menstruatie verergert vaak)",
      "Cafeïne en alcohol",
      "Kunstmatige zoetstoffen"
    ]
  };

  const fodmapExplained = {
    title: "Wat Zijn FODMAPs?",
    fullName: "Fermenteerbare Oligosachariden, Disachariden, Monosachariden And Polyolen",
    explanation: "Kortketenige koolhydraten die slecht worden opgenomen in de dunne darm en fermenteren in de dikke darm, wat leidt tot gas, opgeblazen gevoel en buikpijn bij PDS-patiënten.",
    types: [
      {
        type: "Oligosachariden",
        subtypes: "Fructanen & GOS (galacto-oligosachariden)",
        found: "Tarwe, ui, knoflook, peulvruchten",
        effect: "Meest voorkomende trigger bij PDS"
      },
      {
        type: "Disachariden",
        subtypes: "Lactose",
        found: "Melk, yoghurt, zachte kazen",
        effect: "Vooral bij lactose-intolerantie"
      },
      {
        type: "Monosachariden",
        subtypes: "Fructose (vrije fructose)",
        found: "Honing, appels, mango, agavesiroop",
        effect: "Problemen bij overschot fructose t.o.v. glucose"
      },
      {
        type: "Polyolen",
        subtypes: "Sorbitol, mannitol, xylitol",
        found: "Steenvruchten, paddenstoelen, kunstmatige zoetstoffen",
        effect: "Trekken vocht naar darmen, laxerend effect"
      }
    ]
  };

  const fodmapPhases = {
    phase1: {
      title: "Fase 1: Eliminatie (4-6 weken)",
      duration: "4-6 weken strikt",
      goal: "Alle hoge FODMAP voeding vermijden, symptomen laten verdwijnen",
      allowed: [
        "Laag FODMAP groenten: wortel, courgette, aubergine, tomaat, spinazie",
        "Laag FODMAP fruit: banaan, blauwe bes, aardbei, sinaasappel (max 1 stuks)",
        "Glutenvrije granen: rijst, quinoa, haver, maïs, aardappel",
        "Eiwitten: vis, kip, ei, tofu (vast), tempeh (gefermenteerd)",
        "Lactosevrij zuivel of plantaardige alternatieven",
        "Noten: max 10-15 stuks (amandel, walnoot, pinda, macadamia)"
      ],
      avoid: [
        "Hoog FODMAP groenten: ui, knoflook, bloemkool, champignons",
        "Hoog FODMAP fruit: appel, peer, watermeloen, mango, pruimen",
        "Tarwe, rogge, gerst (fructanen)",
        "Peulvruchten: bruine bonen, kikkererwten, linzen (GOS)",
        "Gewone melk en yoghurt (lactose)",
        "Honing, agave siroop (fructose)"
      ],
      tips: [
        "Gebruik knoflookolie i.p.v. knoflook (FODMAPs zijn niet vetoplosbaar)",
        "Eet kleine porties (grote porties kunnen alsnog klachten geven)",
        "Houd dagboek bij: voeding + symptomen",
        "80-90% symptoomverbetering = geslaagd"
      ]
    },
    phase2: {
      title: "Fase 2: Herintroductie (6-8 weken)",
      duration: "6-8 weken systematisch testen",
      goal: "Ontdekken welke FODMAPs en hoeveel je verdraagt",
      method: [
        "Test 1 FODMAP-groep per keer (bijv. alleen fructanen)",
        "Start met kleine hoeveelheid, verhoog over 3 dagen",
        "2-3 dagen pauze tussen tests (symptomen laten zakken)",
        "Blijf laag FODMAP eten tijdens herintroductie (behalve test-voedsel)"
      ],
      testOrder: [
        { week: "Week 1-2", fodmap: "Fructanen (tarwe)", test: "Dag 1: 1 snee brood | Dag 2: 2 sneetjes | Dag 3: 3 sneetjes" },
        { week: "Week 3-4", fodmap: "GOS (kikkererwten)", test: "Dag 1: 2el | Dag 2: 4el | Dag 3: 6el" },
        { week: "Week 5-6", fodmap: "Lactose (melk)", test: "Dag 1: 50ml | Dag 2: 100ml | Dag 3: 200ml" },
        { week: "Week 7-8", fodmap: "Polyolen (paddenstoelen)", test: "Dag 1: 50g | Dag 2: 100g | Dag 3: 150g" }
      ],
      recording: "Noteer na elke test: symptomen (0-10), welke symptomen, na hoeveel uur"
    },
    phase3: {
      title: "Fase 3: Personalisatie (Levenslang)",
      duration: "Permanent persoonlijk dieet",
      goal: "Maximale variatie met minimale klachten",
      rules: [
        "Eet FODMAPs die je verdraagt in veilige hoeveelheden",
        "Vermijd of limiteer FODMAPs die klachten geven",
        "Spreiding: niet alle FODMAPs in 1 maaltijd stapelen",
        "Blijf variëren binnen lage FODMAP opties"
      ],
      examples: [
        "Verdraagt kleine hoeveelheid tarwe? → 1-2 sneetjes brood per dag OK",
        "Geen lactose? → Blijf lactosevrij, maar andere FODMAPs wel mogelijk",
        "Geen ui/knoflook? → Gebruik knoflookolie en prei (groene deel)",
        "Sommige polyolen wel? → Test elk apart (sorbitol ≠ mannitol)"
      ],
      longTerm: "Hertest jaarlijks: tolerantie kan veranderen over tijd"
    }
  };

  const lowFodmapFoods = {
    vegetables: [
      { food: "Wortel", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Courgette", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Aubergine", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Tomaat", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Spinazie", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Komkommer", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Sla (ijsbergsla)", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Paprika", serving: "Max 150g", fodmap: "Laag" },
      { food: "Paksoi", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Boerenkool", serving: "Max 100g", fodmap: "Laag-Matig" }
    ],
    fruits: [
      { food: "Banaan (rijp)", serving: "1 stuks", fodmap: "Laag" },
      { food: "Blauwe bessen", serving: "Handvol (40g)", fodmap: "Laag" },
      { food: "Aardbeien", serving: "10 stuks", fodmap: "Laag" },
      { food: "Sinaasappel", serving: "1 stuks", fodmap: "Laag" },
      { food: "Druiven", serving: "Handvol (100g)", fodmap: "Laag" },
      { food: "Kiwi", serving: "2 stuks", fodmap: "Laag" },
      { food: "Ananas", serving: "1 plak (140g)", fodmap: "Laag" },
      { food: "Framboos", serving: "Handvol (60g)", fodmap: "Laag-Matig" }
    ],
    grains: [
      { food: "Rijst (wit/bruin)", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Quinoa", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Haver", serving: "50g", fodmap: "Laag" },
      { food: "Maïs", serving: "½ kolf", fodmap: "Laag" },
      { food: "Aardappel", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Glutenvrij brood", serving: "2 sneetjes", fodmap: "Laag" },
      { food: "Rijstwafels", serving: "Onbeperkt", fodmap: "Laag" }
    ],
    proteins: [
      { food: "Kip, kalkoen", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Vis (alle soorten)", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Eieren", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Tofu (vast)", serving: "150g", fodmap: "Laag" },
      { food: "Tempeh", serving: "100g", fodmap: "Laag" },
      { food: "Pinda's", serving: "Max 32 stuks", fodmap: "Laag" },
      { food: "Amandelen", serving: "Max 10 stuks", fodmap: "Laag-Matig" }
    ],
    dairy: [
      { food: "Lactosevrije melk", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Lactosevrije yoghurt", serving: "Onbeperkt", fodmap: "Laag" },
      { food: "Harde kaas (belegen)", serving: "40g", fodmap: "Laag" },
      { food: "Sojamelk (geen bonen)", serving: "250ml", fodmap: "Laag" },
      { food: "Amandelmelk", serving: "250ml", fodmap: "Laag" },
      { food: "Kokosmelk", serving: "125ml", fodmap: "Laag-Matig" }
    ]
  };

  const highFodmapFoods = {
    vegetables: [
      { food: "Ui (alle soorten)", fodmap: "Zeer Hoog - Fructanen", alternative: "Knoflookolie, bieslook, prei (groen)" },
      { food: "Knoflook", fodmap: "Zeer Hoog - Fructanen", alternative: "Knoflookolie, asafoetida poeder" },
      { food: "Bloemkool", fodmap: "Hoog - Polyolen", alternative: "Broccoli (max 75g)" },
      { food: "Champignons", fodmap: "Hoog - Polyolen", alternative: "Oesterzwam (klein)" },
      { food: "Asperges", fodmap: "Hoog - Fructanen", alternative: "Sperziebonen" },
      { food: "Erwten (vers)", fodmap: "Hoog - GOS", alternative: "Sugarsnaps (klein)" }
    ],
    fruits: [
      { food: "Appel", fodmap: "Zeer Hoog - Fructose & Polyolen", alternative: "Banaan, aardbei" },
      { food: "Peer", fodmap: "Zeer Hoog - Fructose & Polyolen", alternative: "Kiwi, druiven" },
      { food: "Watermeloen", fodmap: "Hoog - Fructose", alternative: "Meloen (galia/honingmeloen)" },
      { food: "Mango", fodmap: "Hoog - Fructose", alternative: "Ananas, kiwi" },
      { food: "Pruimen", fodmap: "Hoog - Polyolen", alternative: "Sinaasappel" },
      { food: "Gedroogd fruit", fodmap: "Zeer Hoog - Fructose", alternative: "Vers laag FODMAP fruit" }
    ],
    grains: [
      { food: "Tarwe (brood, pasta)", fodmap: "Hoog - Fructanen", alternative: "Glutenvrij brood, rijst, quinoa" },
      { food: "Rogge", fodmap: "Hoog - Fructanen", alternative: "Spelt (zuurdesem)" },
      { food: "Gerst", fodmap: "Hoog - Fructanen", alternative: "Haver, maïs" }
    ],
    legumes: [
      { food: "Kikkererwten", fodmap: "Zeer Hoog - GOS", alternative: "Blikje uitgespoeld (max 40g)" },
      { food: "Bruine bonen", fodmap: "Hoog - GOS", alternative: "Linzen (blik, max 40g)" },
      { food: "Linzen", fodmap: "Hoog - GOS", alternative: "Tofu, tempeh, ei" },
      { food: "Sojamelk (met bonen)", fodmap: "Hoog - GOS", alternative: "Sojamelk zonder bonen" }
    ],
    dairy: [
      { food: "Melk (koe)", fodmap: "Hoog - Lactose", alternative: "Lactosevrije melk" },
      { food: "Yoghurt", fodmap: "Hoog - Lactose", alternative: "Lactosevrije yoghurt" },
      { food: "Zachte kaas", fodmap: "Hoog - Lactose", alternative: "Harde kaas (belegen/oud)" },
      { food: "IJs", fodmap: "Hoog - Lactose", alternative: "Lactosevrij ijs / sorbet" }
    ],
    sweeteners: [
      { food: "Honing", fodmap: "Zeer Hoog - Fructose", alternative: "Ahornsiroop (max 1el)" },
      { food: "Agave siroop", fodmap: "Zeer Hoog - Fructose", alternative: "Glucosestroop, dextrose" },
      { food: "Xylitol, sorbitol", fodmap: "Zeer Hoog - Polyolen", alternative: "Gewone suiker, stevia" }
    ]
  };

  const mealPlan = {
    day1: {
      breakfast: {
        meal: "Glutenvrij brood met ei en tomaat",
        ingredients: "2 sneetjes glutenvrij brood + 2 eieren (roerei) + gegrilde tomaat + olijfolie",
        fodmap: "✓ Laag FODMAP",
        tips: "Zonder ui/knoflook in ei, gebruik kruiden"
      },
      lunch: {
        meal: "Rijstsalade met kip en groenten",
        ingredients: "100g rijst + 100g kip + wortel + komkommer + sla + olijfolie-citroendressing",
        fodmap: "✓ Laag FODMAP",
        tips: "Dress met verse kruiden (basilicum, peterselie)"
      },
      dinner: {
        meal: "Gegrilde zalm met aardappel en courgette",
        ingredients: "150g zalm + 200g aardappel + 150g courgette + knoflookolie",
        fodmap: "✓ Laag FODMAP",
        tips: "Knoflookolie goed, verse knoflook niet!"
      },
      snacks: {
        options: "Rijstwafels met pindakaas | Banaan | Lactosevrije yoghurt met blauwe bessen"
      }
    },
    day2: {
      breakfast: {
        meal: "Havermout met banaan en aardbei",
        ingredients: "50g haver + 250ml lactosevrije melk + 1 banaan + 5 aardbeien + 10 amandelen",
        fodmap: "✓ Laag FODMAP",
        tips: "Niet meer dan 50g haver (hoger = matig FODMAP)"
      },
      lunch: {
        meal: "Quinoa bowl met tofu en groenten",
        ingredients: "150g quinoa + 100g vaste tofu + spinazie + tomaat + wortel + sesamolie",
        fodmap: "✓ Laag FODMAP",
        tips: "Vaste tofu is laag, zachte tofu is hoog FODMAP"
      },
      dinner: {
        meal: "Kip-roerbak met rijst en groenten",
        ingredients: "150g kip + 150g rijst + paksoi + paprika + wortel + gember + knoflookolie",
        fodmap: "✓ Laag FODMAP",
        tips: "Gember en knoflookolie geven smaak zonder FODMAPs"
      },
      snacks: {
        options: "Handvol druiven | 10 pinda's | Rijstcrackers met harde kaas"
      }
    }
  };

  const practicalTips = [
    {
      category: "Eten Buitenshuis",
      icon: ChefHat,
      tips: [
        "Restaurant: vraag of ze ui/knoflook kunnen weglaten",
        "Kies simpele gerechten: gegrild vlees/vis + aardappel + groenten",
        "Vermijd sauzen (vaak ui/knoflook) - vraag om olijfolie apart",
        "Glutenvrij ≠ laag FODMAP (kan nog steeds ui/honing/appel bevatten)",
        "Neem eigen snacks mee voor noodgevallen"
      ]
    },
    {
      category: "Boodschappen Doen",
      icon: Apple,
      tips: [
        "Download FODMAP app (Monash University is de beste)",
        "Lees ingrediëntenlijsten: ui/knoflook vaak verstopt in producten",
        "Let op 'natuurlijke smaakstoffen' (kan ui/knoflook zijn)",
        "Kies producten met korte ingrediëntenlijst",
        "Lactosevrij zuivel apart afdeling (niet bij gewone zuivel)"
      ]
    },
    {
      category: "Stress Management",
      icon: Heart,
      tips: [
        "Stress verergert PDS bij 70% van patiënten (darmen = 2e brein)",
        "Dagelijkse ontspanning: meditatie, yoga, wandelen (15-30 min)",
        "Ademhalingsoefeningen voor acute buikpijn (4-7-8 methode)",
        "Voldoende slaap (7-9 uur) - slaaptekort triggert symptomen",
        "Overweeg psycholoog of MDL-psycholoog (gespecialiseerd darm)"
      ]
    },
    {
      category: "Eetpatroon",
      icon: Clock,
      tips: [
        "Kleine frequente maaltijden (5-6x per dag) i.p.v. 3 grote",
        "Rustig eten, goed kauwen (vermindert lucht slikken)",
        "Niet te laat eten (3u voor slapen stoppen)",
        "Regelmaat: vaste eettijden helpen darmen ritme vinden",
        "Drink voldoende water (1.5-2L), maar niet tijdens eten"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Denken Dat Glutenvrij = Laag FODMAP",
      problem: "Glutenvrije producten kunnen nog steeds hoge FODMAP ingrediënten bevatten (ui, honing, appel, dadels)",
      correct: "Check altijd alle ingrediënten, niet alleen gluten",
      solution: "Gebruik FODMAP app bij twijfel"
    },
    {
      mistake: "Fase 1 Te Kort Volhouden",
      problem: "Stoppen na 2-3 weken, geen volledig herstel darmen (duurt 4-6 weken)",
      correct: "Minimaal 4 weken strikte eliminatie nodig",
      solution: "Plan vooraf, bereid je voor, houd dagboek bij"
    },
    {
      mistake: "Herintroductie Overslaan",
      problem: "Levenslang onnodig strikt dieet, sociale isolatie, voedingstekorten",
      correct: "Herintroductie is essentieel om te weten wat JIJ verdraagt",
      solution: "Werk samen met diëtist voor begeleide herintroductie"
    },
    {
      mistake: "Alle FODMAPs Tegelijk Testen",
      problem: "Weet je niet welke FODMAP het probleem is, verwarring",
      correct: "Test 1 FODMAP-type per keer met pauzes ertussen",
      solution: "Volg systematisch schema (fructanen → GOS → lactose → polyolen)"
    },
    {
      mistake: "Geen Professionele Begeleiding",
      problem: "80% doet het fout zonder diëtist, onnodig strikt of verkeerde uitvoering",
      correct: "FODMAP dieet is complex, doe het onder begeleiding",
      solution: "Zoek MDL-diëtist (gespecialiseerd maag-darm-lever)"
    },
    {
      mistake: "Stress en Emoties Negeren",
      problem: "Dieet alleen lost het niet op als stress de trigger is",
      correct: "PDS = combinatie darmen + stress + voeding",
      solution: "Aanpak stress tegelijk met dieet (mindfulness, therapie)"
    }
  ];

  const supplements = [
    {
      supplement: "Probiotica",
      evidence: "Gemengd - sommige stammen helpen (bijv. Bifidobacterium)",
      dosage: "Specifieke PDS-probiotica: minimaal 10 miljard CFU",
      timing: "4-8 weken testen, niet langer zonder resultaat",
      note: "Kan initieel klachten verergeren (eerste 1-2 weken)"
    },
    {
      supplement: "Pepermuntolie (capsules)",
      evidence: "Bewezen effectief bij 40-50% PDS-patiënten",
      dosage: "1-2 capsules 3x per dag (maagsapresistent)",
      timing: "30 min voor maaltijd",
      note: "Niet bij reflux/brandend maagzuur"
    },
    {
      supplement: "Psylliumvezels",
      evidence: "Helpt bij obstipatie-dominant PDS",
      dosage: "1-2 theelepels per dag, opbouwen",
      timing: "Met veel water (200ml per theelepel)",
      note: "Start laag, kan initieel gasvorming geven"
    },
    {
      supplement: "Vitamine D",
      evidence: "Tekort komt vaak voor bij PDS, supplementeren kan helpen",
      dosage: "Check bloedwaarden, vaak 25-50 mcg per dag",
      timing: "Met vetrijke maaltijd",
      note: "Laat arts checken bij aanhoudende klachten"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="min-h-screen bg-white">
        {/* Featured Image */}
        <div className="w-full aspect-video max-h-[500px] overflow-hidden">
          <Image
            src="/img/blog/prikkelbare-darm-dieet/featured.webp"
            alt="Prikkelbare Darm Syndroom - Het Juiste Dieet"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="max-w-4xl mx-auto px-4 py-6 border-b">
          <ShareButtons title="Prikkelbare Darm Syndroom (PDS): Het Juiste Dieet" />
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-4 py-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">PDS / IBS Dieet Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Prikkelbare Darm Syndroom (PDS): Het Juiste Dieet
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Complete FODMAP gids: elimineren, herintroduceren en personaliseren voor minder klachten
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

        {/* Quick Stats */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-100 border-l-4 border-orange-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-orange-600" />
                PDS In Nederland
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Aantal Patiënten:</h3>
                  <p className="text-3xl font-bold text-orange-700">10-15%</p>
                  <p className="text-sm text-gray-600">van bevolking heeft PDS (1.5-2.5 miljoen NL)</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Vrouwen:</h3>
                  <p className="text-3xl font-bold text-orange-700">2-3x</p>
                  <p className="text-sm text-gray-600">vaker dan mannen (hormonale invloed)</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">FODMAP Succes:</h3>
                  <p className="text-3xl font-bold text-orange-700">70-80%</p>
                  <p className="text-sm text-gray-600">verbetering bij correct uitgevoerd dieet</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              PDS Symptomen en Triggers
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 shadow-md border-2 border-red-300">
                <h3 className="text-xl font-bold mb-4 text-red-800">Spijsvertering</h3>
                <ul className="space-y-2">
                  {symptoms.digestive.map((symptom, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 shadow-md border-2 border-yellow-300">
                <h3 className="text-xl font-bold mb-4 text-yellow-800">Andere Klachten</h3>
                <ul className="space-y-2">
                  {symptoms.other.map((symptom, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 shadow-md border-2 border-orange-300">
                <h3 className="text-xl font-bold mb-4 text-orange-800">Triggers</h3>
                <ul className="space-y-2">
                  {symptoms.triggers.map((trigger, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <ShieldAlert className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{trigger}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FODMAP Explained */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {fodmapExplained.title}
            </h2>
            <p className="text-lg text-center text-gray-600 mb-8">
              <strong>FODMAP:</strong> {fodmapExplained.fullName}
            </p>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              {fodmapExplained.explanation}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {fodmapExplained.types.map((type, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">{type.type}</h3>
                  <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {type.subtypes}</p>
                  <p className="text-sm mb-2"><strong>Voorkomt in:</strong> {type.found}</p>
                  <p className="text-sm bg-blue-50 p-2 rounded text-blue-700">
                    <strong>Effect:</strong> {type.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FODMAP Phases */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Het FODMAP 3-Fasen Plan
            </h2>

            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 shadow-lg border-2 border-red-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-800">{fodmapPhases.phase1.title}</h3>
                    <p className="text-sm text-gray-600">Duur: {fodmapPhases.phase1.duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6"><strong>Doel:</strong> {fodmapPhases.phase1.goal}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Wel Eten (Laag FODMAP):
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {fodmapPhases.phase1.allowed.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Niet Eten (Hoog FODMAP):
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {fodmapPhases.phase1.avoid.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">💡 Tips Fase 1:</h4>
                  <ul className="space-y-1 text-sm">
                    {fodmapPhases.phase1.tips.map((tip, idx) => (
                      <li key={idx}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-8 shadow-lg border-2 border-yellow-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-800">{fodmapPhases.phase2.title}</h3>
                    <p className="text-sm text-gray-600">Duur: {fodmapPhases.phase2.duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6"><strong>Doel:</strong> {fodmapPhases.phase2.goal}</p>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-bold mb-3">Methode:</h4>
                  <ul className="space-y-1 text-sm">
                    {fodmapPhases.phase2.method.map((step, idx) => (
                      <li key={idx}>• {step}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-bold mb-3">Test Volgorde:</h4>
                  <div className="space-y-2">
                    {fodmapPhases.phase2.testOrder.map((test, idx) => (
                      <div key={idx} className="bg-yellow-50 p-3 rounded">
                        <p className="font-semibold text-sm">{test.week}: {test.fodmap}</p>
                        <p className="text-xs text-gray-600">{test.test}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg">
                  <p className="text-sm"><strong>📝 Noteer:</strong> {fodmapPhases.phase2.recording}</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">{fodmapPhases.phase3.title}</h3>
                    <p className="text-sm text-gray-600">Duur: {fodmapPhases.phase3.duration}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6"><strong>Doel:</strong> {fodmapPhases.phase3.goal}</p>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-bold mb-3">Regels:</h4>
                  <ul className="space-y-1 text-sm">
                    {fodmapPhases.phase3.rules.map((rule, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-bold mb-3">Voorbeelden:</h4>
                  <ul className="space-y-1 text-sm">
                    {fodmapPhases.phase3.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-sm"><strong>🔄 Lange termijn:</strong> {fodmapPhases.phase3.longTerm}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Low FODMAP Foods */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              ✅ Laag FODMAP Voeding (Wel Eten)
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(lowFodmapFoods).map(([category, foods], idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 capitalize text-green-800">
                    {category === 'vegetables' ? 'Groenten' :
                     category === 'fruits' ? 'Fruit' :
                     category === 'grains' ? 'Granen' :
                     category === 'proteins' ? 'Eiwitten' :
                     'Zuivel'}
                  </h3>
                  <div className="space-y-2">
                    {foods.map((item, fIdx) => (
                      <div key={fIdx} className="flex justify-between items-center bg-green-50 p-2 rounded">
                        <span className="font-semibold text-sm">{item.food}</span>
                        <span className="text-xs text-gray-600">{item.serving}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High FODMAP Foods */}
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              ❌ Hoog FODMAP Voeding (Vermijden Fase 1)
            </h2>

            <div className="space-y-4">
              {Object.entries(highFodmapFoods).map(([category, foods], idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 capitalize text-red-800">
                    {category === 'vegetables' ? 'Groenten' :
                     category === 'fruits' ? 'Fruit' :
                     category === 'grains' ? 'Granen' :
                     category === 'legumes' ? 'Peulvruchten' :
                     category === 'dairy' ? 'Zuivel' :
                     'Zoetstoffen'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {foods.map((item, fIdx) => (
                      <div key={fIdx} className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-sm">{item.food}</span>
                          <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">{item.fodmap}</span>
                        </div>
                        <p className="text-xs text-green-700">
                          <strong>→</strong> {item.alternative}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Praktische Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {practicalTips.map((section, idx) => (
                <div key={idx} className="bg-orange-50 rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-8 h-8 text-orange-600" />
                    <h3 className="text-xl font-bold">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex gap-2 text-sm">
                        <Lightbulb className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij FODMAP Dieet
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
                      <p className="text-sm text-green-700 mb-2"><strong>Correct:</strong> {mistake.correct}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-sm text-green-800"><strong>✅</strong> {mistake.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Wil Je Professionele Begeleiding Bij PDS?
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              Vind een MDL-diëtist gespecialiseerd in prikkelbare darm syndroom bij jou in de buurt
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg"
            >
              Vind Een MDL-Diëtist
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Het <strong>FODMAP eliminatiedieet is de meest effectieve voedingsaanpak</strong> bij prikkelbare darm syndroom, met 70-80% symptoomverbetering bij correct uitgevoerd. Het 3-fasen plan (eliminatie 4-6 weken, systematische herintroductie 6-8 weken, personalisatie levenslang) helpt je ontdekken welke FODMAPs JIJ verdraagt.
              </p>
              <p>
                Belangrijkste succesfactoren: <strong>professionele begeleiding door MDL-diëtist</strong> (80% doet het fout zonder begeleiding), strikte eliminatie minimaal 4 weken, systematische herintroductie (1 FODMAP per keer), en stress management (70% heeft stress als trigger). Glutenvrij is niet hetzelfde als laag FODMAP - check altijd alle ingrediënten.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 FODMAP Succes Checklist:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Fase 1 (4-6 weken):</strong> Strikte eliminatie alle hoge FODMAPs, dagboek bijhouden</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Fase 2 (6-8 weken):</strong> Systematisch testen - 1 FODMAP per keer met pauzes</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Fase 3 (levenslang):</strong> Persoonlijk dieet - maximale variatie met minimale klachten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Begeleiding:</strong> Werk samen met MDL-diëtist voor juiste uitvoering</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Stress:</strong> Pak stress tegelijk aan (mindfulness, therapie) voor beste resultaat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
