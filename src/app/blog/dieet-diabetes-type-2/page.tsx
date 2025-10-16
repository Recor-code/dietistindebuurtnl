import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, TrendingDown, Apple, CheckCircle2, XCircle, AlertTriangle, Clock, Target, Activity, Utensils, Info, Zap, Shield, Award } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Dieet voor Diabetes Type 2: Complete Gids | Bloedsuiker Verlagen 2025',
  description: 'Alles over diabetes type 2 dieet: welke voeding verlaagt bloedsuiker, koolhydraten tellen, maaltijdtiming en hoe een diëtist helpt medicatie te verminderen.',
  keywords: [
    'diabetes type 2 dieet',
    'bloedsuiker verlagen voeding',
    'diabetes voeding',
    'koolhydraten diabetes',
    'wat eten bij diabetes',
    'diabetes diëtist',
    'HbA1c verlagen',
    'suikerziekte voeding',
    'diabetes maaltijdplan',
    'insulineresistentie dieet'
  ],
  openGraph: {
    title: 'Dieet voor Diabetes Type 2: Complete Gids',
    description: 'Complete gids over voeding bij diabetes type 2 en hoe je bloedsuiker onder controle krijgt',
    images: ['/img/blog/dieet-diabetes-type-2/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dieet voor Diabetes Type 2: Complete Gids',
  description: 'Uitgebreide gids over voeding bij diabetes type 2, bloedsuikercontrole en hoe diëtisten helpen.',
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
    '@id': 'https://dietistindebuurt.nl/blog/dieet-diabetes-type-2'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/dieet-diabetes-type-2/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/dieet-diabetes-type-2',
  inLanguage: 'nl-NL'
};

export default function DieetDiabetesType2Page() {
  const keyPrinciples = [
    {
      principle: "Koolhydraten Spreiden",
      icon: Clock,
      importance: "Zeer Hoog",
      explanation: "Verdeel koolhydraten gelijkmatig over de dag in plaats van grote porties ineens",
      benefits: [
        "Voorkomt bloedsuikerpiek na maaltijd",
        "Stabielere energie door de dag",
        "Minder belasting op alvleesklier",
        "Betere medicatie-effectiviteit"
      ],
      howTo: "15-20g KH ontbijt, 40-60g lunch, 40-60g diner, 15-20g tussendoor (indien nodig)"
    },
    {
      principle: "Vezels Zijn Essentieel",
      icon: Apple,
      importance: "Hoog",
      explanation: "Vezels vertragen suikeropname en verbeteren bloedsuikercontrole",
      benefits: [
        "Langzamere stijging bloedsuiker",
        "Langer verzadigd gevoel",
        "Verbetert darmgezondheid",
        "Verlaagt LDL cholesterol"
      ],
      howTo: "Minimaal 30-40g vezels per dag: volkoren, groente, peulvruchten, noten"
    },
    {
      principle: "Kies Gezonde Vetten",
      icon: Heart,
      importance: "Hoog",
      explanation: "Onverzadigde vetten verbeteren insulinegevoeligheid",
      benefits: [
        "Betere insulinewerking",
        "Bescherming hart en vaten",
        "Ontstekingsremmend effect",
        "Helpt bij gewichtsverlies"
      ],
      howTo: "Olijfolie, avocado, noten, vette vis (zalm, makreel, haring)"
    },
    {
      principle: "Eiwitten Bij Elke Maaltijd",
      icon: Activity,
      importance: "Middel-Hoog",
      explanation: "Eiwit vertraagt koolhydraatopname en verzadigt langer",
      benefits: [
        "Minder bloedsuikerschommelingen",
        "Behoud spiermassa",
        "Langer verzadigd",
        "Ondersteunt gewichtsverlies"
      ],
      howTo: "20-30g eiwit per maaltijd: mager vlees, vis, zuivel, peulvruchten, eieren"
    },
    {
      principle: "Timing Maaltijden",
      icon: Clock,
      importance: "Middel",
      explanation: "Regelmatige maaltijden helpen bloedsuiker stabiel houden",
      benefits: [
        "Voorkomt hypo's (te laag)",
        "Voorkomt hyper's (te hoog)",
        "Betere medicatiewerking",
        "Minder hongermomenten"
      ],
      howTo: "3 hoofdmaaltijden, eventueel 2-3 kleine tussendoortjes, max 3-4 uur tussen"
    }
  ];

  const foodCategories = {
    green: {
      title: "Groen: Eet Onbeperkt",
      color: "green",
      foods: [
        { item: "Groenten (niet-zetmeelrijk)", portion: "Onbeperkt", note: "Sla, komkommer, tomaat, paprika, broccoli, etc." },
        { item: "Bladgroenten", portion: "Onbeperkt", note: "Spinazie, andijvie, boerenkool, rucola" },
        { item: "Champignons", portion: "Onbeperkt", note: "Alle paddenstoelen variëteiten" },
        { item: "Kruiden en specerijen", portion: "Onbeperkt", note: "Kaneel (helpt bloedsuiker!), kurkuma, gember" },
        { item: "Water, thee, koffie", portion: "Onbeperkt", note: "Zonder suiker of met zoetstof" }
      ]
    },
    yellow: {
      title: "Geel: Eet Met Mate (Portiecontrole)",
      color: "yellow",
      foods: [
        { item: "Volkoren producten", portion: "1-2 porties/dag", note: "Volkoren brood, pasta, rijst (max 150g gekookt)" },
        { item: "Aardappelen", portion: "2-3 kleine", note: "Gekookt of gebakken zonder vet, max 150g" },
        { item: "Fruit", portion: "2 stuks/dag", note: "Appel, peer, mandarijn - niet gedroogd of sap!" },
        { item: "Peulvruchten", portion: "150g gekookt", note: "Linzen, kikkererwten, bruine bonen" },
        { item: "Noten en zaden", portion: "Handvol (25g)", note: "Ongezouten, naturel" },
        { item: "Zuivel", portion: "3 porties/dag", note: "Magere melk, yoghurt, kwark (ongezoet)" }
      ]
    },
    red: {
      title: "Rood: Vermijd of Zeer Beperkt",
      color: "red",
      foods: [
        { item: "Suiker en snoep", portion: "Vermijd", note: "Bloedsuikerpiek gegarandeerd" },
        { item: "Frisdrank en sappen", portion: "Vermijd", note: "Ook vruchtensap! Kies light variant" },
        { item: "Witbrood, croissants", portion: "Vermijd", note: "Snelle koolhydraten zonder vezels" },
        { item: "Gebak en koekjes", portion: "Zeer beperkt", note: "Alleen bij speciale gelegenheden, kleine portie" },
        { item: "Friet en chips", portion: "Zeer beperkt", note: "Hoog vet + snelle koolhydraten" },
        { item: "Alcohol", portion: "Max 1/dag", note: "Risico op hypo, kies droge wijn boven bier" }
      ]
    }
  };

  const glycemicIndex = {
    explanation: "Glycemische Index (GI) geeft aan hoe snel een voedingsmiddel je bloedsuiker laat stijgen",
    categories: [
      {
        gi: "Laag (< 55)",
        color: "green",
        effect: "Langzame, stabiele bloedsuikerstijging",
        examples: [
          "Volkoren pasta, zilvervliesrijst",
          "Peulvruchten (linzen, bonen)",
          "Meeste groenten",
          "Appel, peer, citrus",
          "Noten en zaden"
        ],
        recommendation: "Baseer maaltijden hierop"
      },
      {
        gi: "Middel (55-70)",
        color: "yellow",
        effect: "Matige bloedsuikerstijging",
        examples: [
          "Volkoren brood",
          "Basmati rijst",
          "Couscous",
          "Banaan, mango",
          "Rozijnen"
        ],
        recommendation: "In beperkte porties oké"
      },
      {
        gi: "Hoog (> 70)",
        color: "red",
        effect: "Snelle, hoge bloedsuikerstijging",
        examples: [
          "Witbrood, crackers",
          "Witte rijst, instant pasta",
          "Cornflakes, rijstwafels",
          "Watermeloen",
          "Glucose tablets"
        ],
        recommendation: "Vermijd zoveel mogelijk"
      }
    ]
  };

  const mealPlan = {
    breakfast: [
      {
        option: "Volkoren brood met ei",
        carbs: "30g",
        details: "2 sneetjes volkoren + gekookt ei + tomaat + komkommer",
        tips: "Besmeer brood dun met halvarine"
      },
      {
        option: "Havermout met noten",
        carbs: "35g",
        details: "50g havermout + 200ml magere melk + 15g noten + kaneel",
        tips: "Kaneel helpt bloedsuiker verlagen"
      },
      {
        option: "Griekse yoghurt bowl",
        carbs: "25g",
        details: "200g Griekse yoghurt + 100g bessen + 20g granola",
        tips: "Kies ongezoete yoghurt en granola"
      }
    ],
    lunch: [
      {
        option: "Volkoren wrap met kip",
        carbs: "45g",
        details: "1 volkoren wrap + 100g kip + sla + paprika + hummus",
        tips: "Grill kip zonder olie"
      },
      {
        option: "Volkoren brood met zalm",
        carbs: "40g",
        details: "2 sneetjes volkoren + 80g gerookte zalm + roomkaas light + komkommer",
        tips: "Zalm bevat omega-3 (goed voor hart)"
      },
      {
        option: "Quinoa salade",
        carbs: "50g",
        details: "100g gekookte quinoa + kikkererwten + feta + groenten",
        tips: "Quinoa is eiwitrijk en vezelrijk"
      }
    ],
    dinner: [
      {
        option: "Zalmfilet met zoete aardappel",
        carbs: "55g",
        details: "150g zalm + 150g zoete aardappel + 300g groenten",
        tips: "Stoom of bak zalm in olijfolie"
      },
      {
        option: "Kip met volkoren pasta",
        carbs: "50g",
        details: "120g kip + 60g ongekookte pasta + tomaten saus + groenten",
        tips: "Al dente koken geeft lagere GI"
      },
      {
        option: "Linzen curry",
        carbs: "45g",
        details: "200g linzen + kokosmelk light + groenten + kruiden",
        tips: "Linzen zijn eiwitrijk en bloedsuikervriendelijk"
      }
    ],
    snacks: [
      { option: "Handvol noten (25g)", carbs: "5g", benefit: "Gezonde vetten, langdurig verzadigd" },
      { option: "Appel met pindakaas", carbs: "18g", benefit: "Vezels + eiwit = stabiele suiker" },
      { option: "Magere yoghurt met kaneel", carbs: "12g", benefit: "Eiwit + kaneel helpt bloedsuiker" },
      { option: "Volkoren cracker met kaas", carbs: "15g", benefit: "Eiwit vertraagt suikeropname" },
      { option: "Rauwkost met hummus", carbs: "10g", benefit: "Vezels + gezonde vetten" }
    ]
  };

  const carbCounting = {
    title: "Koolhydraten Tellen: De Basis",
    basics: [
      "1 KH-portie = 10 gram koolhydraten",
      "Gemiddelde dagbehoefte: 15-20 KH-porties (150-200g KH)",
      "Verdeling: ontbijt 2-3, lunch 4-6, diner 4-6, snacks 1-2 per tussendoor",
      "Lees etiketten: let op 'koolhydraten waarvan suikers'",
      "Gebruik keukenweegschaal in begin, later op gevoel"
    ],
    examples: [
      { food: "1 snee volkoren brood", carbs: "15g", portions: "1.5 KH" },
      { food: "3 aardappelen (150g)", carbs: "20g", portions: "2 KH" },
      { food: "Volkoren pasta gekookt (150g)", carbs: "30g", portions: "3 KH" },
      { food: "1 appel middelgroot", carbs: "15g", portions: "1.5 KH" },
      { food: "Magere yoghurt (150g)", carbs: "7g", portions: "0.7 KH" },
      { food: "Bruine bonen gekookt (150g)", carbs: "20g", portions: "2 KH" }
    ]
  };

  const diabetesDietistRole = {
    assessment: {
      title: "Persoonlijke Analyse",
      activities: [
        "HbA1c en bloedsuikerpatroon analyseren",
        "Huidige eetpatroon en KH-inname beoordelen",
        "Medicatie en insuline schema bekijken",
        "Levensstijl en obstakels inventariseren",
        "Doelen samen stellen (HbA1c doel, gewichtsverlies)"
      ]
    },
    plan: {
      title: "Op Maat Gemaakt Voedingsplan",
      activities: [
        "KH-verdeling passend bij jouw schema en medicatie",
        "Rekening houdend met voorkeuren en cultuur",
        "Praktische maaltijdvoorbeelden en recepten",
        "Boodschappenlijsten en meal prep tips",
        "Strategie voor feestjes, restaurants, vakantie"
      ]
    },
    education: {
      title: "Educatie en Vaardigheden",
      activities: [
        "Leren koolhydraten tellen en etiketten lezen",
        "Herkennen hypo en hyper symptomen",
        "Omgaan met bloedsuikerschommelingen",
        "Sport en voeding afstemmen",
        "Alcohol en suikervervangers verantwoord gebruiken"
      ]
    },
    monitoring: {
      title: "Monitoring en Bijstelling",
      activities: [
        "Bloedsuikerlogboek analyseren (samen met jou)",
        "HbA1c verbetering meten (elke 3 maanden)",
        "Medicatie aanpassen in overleg met arts",
        "Plan optimaliseren op basis van resultaten",
        "Lange termijn complicaties voorkomen"
      ]
    }
  };

  const results = [
    {
      result: "HbA1c Verlaging",
      typical: "1-2% verlaging in 3-6 maanden",
      example: "Van 8.5% naar 6.5% (behandeldoel < 7%)",
      impact: "Minder risico op complicaties"
    },
    {
      result: "Gewichtsverlies",
      typical: "5-10% lichaamsgewicht",
      example: "Van 95kg naar 86kg",
      impact: "Betere insulinegevoeligheid"
    },
    {
      result: "Medicatie Reductie",
      typical: "30-50% minder medicatie",
      example: "Van 3 naar 1 tablet per dag",
      impact: "Minder bijwerkingen, lagere kosten"
    },
    {
      result: "Bloeddruk Verbetering",
      typical: "10-15 mmHg verlaging",
      example: "Van 145/95 naar 130/80",
      impact: "Minder hart- en vaatrisico"
    },
    {
      result: "Energie Toename",
      typical: "Stabiele energie hele dag",
      example: "Geen middagdip meer",
      impact: "Betere kwaliteit van leven"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Fruit Onbeperkt Eten",
      why: "Fruit bevat veel suikers (fructose)",
      consequence: "Bloedsuikerpiek",
      solution: "Max 2 stuks per dag, eet bij maaltijd met eiwit/vet"
    },
    {
      mistake: "Alle Koolhydraten Schrappen",
      why: "Te weinig KH = hypo's en energie tekort",
      consequence: "Gevaarlijke bloedsuikerdaling",
      solution: "Verspreid 150-200g KH over de dag"
    },
    {
      mistake: "Light Producten = Gezond",
      why: "Light kan nog steeds veel suiker bevatten",
      consequence: "Onverwachte bloedsuikerstijging",
      solution: "Check altijd etiketten op KH-gehalte"
    },
    {
      mistake: "Maaltijden Overslaan",
      why: "Lange periode zonder eten verstoort bloedsuiker",
      consequence: "Hypo gevolgd door hyper",
      solution: "Regelmatige maaltijden, max 4 uur tussen"
    },
    {
      mistake: "Denken dat Vet Het Probleem Is",
      why: "Gezonde vetten zijn juist belangrijk",
      consequence: "Te veel KH compensatie",
      solution: "Focus op onverzadigde vetten (olijfolie, noten, vis)"
    },
    {
      mistake: "Sport Zonder Aanpassing",
      why: "Sport verlaagt bloedsuiker, risico hypo",
      consequence: "Gevaarlijke daling tijdens/na sport",
      solution: "15-30g extra KH voor intensieve sport"
    }
  ];

  const supplements = [
    {
      supplement: "Kaneel",
      evidence: "Matig bewijs",
      effect: "Kan insulinegevoeligheid licht verbeteren",
      dosage: "1-6 gram per dag (1-2 theelepels)",
      note: "Voeg toe aan yoghurt, havermout, koffie"
    },
    {
      supplement: "Chroom",
      evidence: "Beperkt bewijs",
      effect: "Mogelijk kleine verbetering glucosecontrole",
      dosage: "200-400 mcg per dag",
      note: "Overleg met arts, kan interacties geven"
    },
    {
      supplement: "Vitamine D",
      evidence: "Goed bewijs",
      effect: "Tekort verslechtert insulinegevoeligheid",
      dosage: "25-50 mcg per dag (bij tekort)",
      note: "Laat spiegel controleren bij huisarts"
    },
    {
      supplement: "Magnesium",
      evidence: "Matig bewijs",
      effect: "Tekort verhoogt diabetes risico",
      dosage: "300-400 mg per dag",
      note: "Bij veel volkoren en noten vaak voldoende"
    },
    {
      supplement: "Omega-3 (Visolie)",
      evidence: "Goed bewijs",
      effect: "Beschermt hart en vaten, ontstekingsremmend",
      dosage: "1-2 gram EPA+DHA per dag",
      note: "Of 2x per week vette vis eten"
    }
  ];

  const hypoHyper = {
    hypo: {
      title: "Hypo (< 4.0 mmol/L)",
      symptoms: [
        "Trillen, zweten",
        "Hartkloppingen",
        "Hongergevoel",
        "Verwardheid, concentratieproblemen",
        "Bleek zien, duizelig"
      ],
      treatment: "15g snelle suiker (3 klontjes, glas sap) → wacht 15 min → meet opnieuw → herhaal indien nodig",
      prevention: [
        "Sla geen maaltijden over",
        "Extra KH voor intensieve sport",
        "Draag altijd glucose bij je",
        "Waarschuw omgeving over diabetes"
      ]
    },
    hyper: {
      title: "Hyper (> 10.0 mmol/L)",
      symptoms: [
        "Veel dorst",
        "Vaak plassen",
        "Vermoeidheid",
        "Wazig zien",
        "Hoofdpijn"
      ],
      treatment: "Drink veel water → check ketonlichamen (urine) → bij ketonlichamen: bel arts → pas voeding/medicatie aan",
      prevention: [
        "Portiecontrole koolhydraten",
        "Regelmatig meten",
        "Medicatie op tijd innemen",
        "Stress management",
        "Ziekte: extra controle!"
      ]
    }
  };

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
            src="/img/blog/dieet-diabetes-type-2/featured.webp"
            alt="Dieet voor Diabetes Type 2 - Bloedsuiker Controle"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="max-w-4xl mx-auto px-4 py-6 border-b">
          <ShareButtons title="Dieet voor Diabetes Type 2: Complete Gids" />
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-4 py-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Diabetes Type 2 Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Dieet voor Diabetes Type 2: Complete Gids
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Alles over voeding bij diabetes: bloedsuiker onder controle, medicatie verminderen en gezonder leven
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>13 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Quick Facts */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-100 border-l-4 border-red-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-red-600" />
                De Feiten
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Met Goede Voeding Kun Je:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>HbA1c verlagen met 1-2%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Medicatie verminderen met 30-50%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Risico complicaties sterk verlagen</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Belangrijkste Pijlers:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      <span>Koolhydraten spreiden over de dag</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      <span>Veel vezels (30-40g per dag)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      <span>Gezonde vetten i.p.v. verzadigd</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              5 Belangrijkste Voedingsprincipes Bij Diabetes
            </h2>

            <div className="space-y-6">
              {keyPrinciples.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-100 rounded-full p-3">
                      <item.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold">{item.principle}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.importance === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                          item.importance === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.importance}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{item.explanation}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold mb-2">Voordelen:</h4>
                          <ul className="space-y-1">
                            {item.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex gap-2 text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold mb-2">Hoe Doe Je Dit:</h4>
                          <p className="text-sm text-gray-700">{item.howTo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Traffic Light */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voeding Stoplicht: Wat Mag Wel & Niet?
            </h2>

            <div className="space-y-6">
              {/* Green */}
              <div className="bg-green-50 rounded-xl p-6 shadow-md border-2 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8" />
                  {foodCategories.green.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {foodCategories.green.foods.map((food, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold">{food.item}</span>
                        <span className="text-green-700 font-bold">{food.portion}</span>
                      </div>
                      <p className="text-sm text-gray-600">{food.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yellow */}
              <div className="bg-yellow-50 rounded-xl p-6 shadow-md border-2 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4 text-yellow-800 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8" />
                  {foodCategories.yellow.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {foodCategories.yellow.foods.map((food, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold">{food.item}</span>
                        <span className="text-yellow-700 font-bold">{food.portion}</span>
                      </div>
                      <p className="text-sm text-gray-600">{food.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red */}
              <div className="bg-red-50 rounded-xl p-6 shadow-md border-2 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
                  <XCircle className="w-8 h-8" />
                  {foodCategories.red.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {foodCategories.red.foods.map((food, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold">{food.item}</span>
                        <span className="text-red-700 font-bold">{food.portion}</span>
                      </div>
                      <p className="text-sm text-gray-600">{food.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glycemic Index */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Glycemische Index (GI): Belangrijk Bij Diabetes
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              {glycemicIndex.explanation}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {glycemicIndex.categories.map((cat, idx) => (
                <div key={idx} className={`rounded-xl p-6 shadow-md border-2 ${
                  cat.color === 'green' ? 'bg-green-50 border-green-500' :
                  cat.color === 'yellow' ? 'bg-yellow-50 border-yellow-500' :
                  'bg-red-50 border-red-500'
                }`}>
                  <div className={`px-3 py-1 rounded-full w-fit mb-3 font-bold ${
                    cat.color === 'green' ? 'bg-green-600 text-white' :
                    cat.color === 'yellow' ? 'bg-yellow-600 text-white' :
                    'bg-red-600 text-white'
                  }`}>
                    GI {cat.gi}
                  </div>
                  <p className="font-semibold mb-3">{cat.effect}</p>
                  <h4 className="text-sm font-bold mb-2">Voorbeelden:</h4>
                  <ul className="space-y-1 mb-4">
                    {cat.examples.map((ex, eIdx) => (
                      <li key={eIdx} className="text-sm text-gray-700">• {ex}</li>
                    ))}
                  </ul>
                  <div className={`p-2 rounded ${
                    cat.color === 'green' ? 'bg-green-100' :
                    cat.color === 'yellow' ? 'bg-yellow-100' :
                    'bg-red-100'
                  }`}>
                    <p className="text-sm font-semibold">{cat.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meal Plan */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voorbeeldmaaltijden Voor Diabetes
            </h2>

            <div className="space-y-8">
              {/* Breakfast */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-blue-600" />
                  Ontbijt (20-35g KH)
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mealPlan.breakfast.map((meal, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                      <h4 className="font-bold mb-2">{meal.option}</h4>
                      <p className="text-sm text-gray-600 mb-2">{meal.details}</p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-blue-700">KH: {meal.carbs}</span>
                      </div>
                      <p className="text-xs bg-blue-50 p-2 rounded text-blue-800">💡 {meal.tips}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lunch */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-green-600" />
                  Lunch (40-50g KH)
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mealPlan.lunch.map((meal, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                      <h4 className="font-bold mb-2">{meal.option}</h4>
                      <p className="text-sm text-gray-600 mb-2">{meal.details}</p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-green-700">KH: {meal.carbs}</span>
                      </div>
                      <p className="text-xs bg-green-50 p-2 rounded text-green-800">💡 {meal.tips}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dinner */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-orange-600" />
                  Diner (45-55g KH)
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mealPlan.dinner.map((meal, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                      <h4 className="font-bold mb-2">{meal.option}</h4>
                      <p className="text-sm text-gray-600 mb-2">{meal.details}</p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-orange-700">KH: {meal.carbs}</span>
                      </div>
                      <p className="text-xs bg-orange-50 p-2 rounded text-orange-800">💡 {meal.tips}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Snacks */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Apple className="w-6 h-6 text-purple-600" />
                  Gezonde Tussendoortjes (5-20g KH)
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mealPlan.snacks.map((snack, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 shadow-md border-l-4 border-purple-500">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold text-sm">{snack.option}</span>
                        <span className="text-xs font-bold text-purple-700">{snack.carbs}</span>
                      </div>
                      <p className="text-xs text-gray-600">{snack.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carb Counting */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {carbCounting.title}
            </h2>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-4">Basisregels:</h3>
              <ul className="space-y-2">
                {carbCounting.basics.map((rule, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-bold text-xl mb-4">Praktische Voorbeelden:</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Voedingsmiddel</th>
                    <th className="p-4 text-left">Koolhydraten</th>
                    <th className="p-4 text-left">KH-Porties</th>
                  </tr>
                </thead>
                <tbody>
                  {carbCounting.examples.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4">{item.food}</td>
                      <td className="p-4 font-semibold text-blue-700">{item.carbs}</td>
                      <td className="p-4 font-bold">{item.portions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Dietist Role */}
        <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Hoe Een Diëtist Je Helpt Bij Diabetes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-blue-700">{diabetesDietistRole.assessment.title}</h3>
                <ul className="space-y-2">
                  {diabetesDietistRole.assessment.activities.map((activity, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-green-700">{diabetesDietistRole.plan.title}</h3>
                <ul className="space-y-2">
                  {diabetesDietistRole.plan.activities.map((activity, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-purple-700">{diabetesDietistRole.education.title}</h3>
                <ul className="space-y-2">
                  {diabetesDietistRole.education.activities.map((activity, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-orange-700">{diabetesDietistRole.monitoring.title}</h3>
                <ul className="space-y-2">
                  {diabetesDietistRole.monitoring.activities.map((activity, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Kun Je Verwachten Met Goede Voeding?
            </h2>

            <div className="space-y-4">
              {results.map((result, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="font-bold text-lg">{result.result}</h3>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Typisch resultaat</p>
                      <p className="font-semibold text-green-700">{result.typical}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Voorbeeld</p>
                      <p className="font-semibold">{result.example}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Impact</p>
                      <p className="font-semibold text-blue-700">{result.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 bg-yellow-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Veelgemaakte Fouten Bij Diabetes Dieet
            </h2>

            <div className="space-y-4">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">
                        {idx + 1}. {mistake.mistake}
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Waarom fout:</p>
                          <p className="text-sm text-gray-700">{mistake.why}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Gevolg:</p>
                          <p className="text-sm text-red-700">{mistake.consequence}</p>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-sm text-gray-600 font-semibold">Doe Dit:</p>
                          <p className="text-sm text-green-800">{mistake.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hypo & Hyper */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Hypo & Hyper: Herkennen en Behandelen
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Hypo */}
              <div className="bg-blue-50 rounded-xl p-6 shadow-md border-2 border-blue-500">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">{hypoHyper.hypo.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Symptomen:</h4>
                  <ul className="space-y-1">
                    {hypoHyper.hypo.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-100 rounded p-3 mb-4">
                  <p className="font-bold text-sm mb-1">Behandeling:</p>
                  <p className="text-sm">{hypoHyper.hypo.treatment}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Preventie:</h4>
                  <ul className="space-y-1">
                    {hypoHyper.hypo.prevention.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hyper */}
              <div className="bg-red-50 rounded-xl p-6 shadow-md border-2 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-red-800">{hypoHyper.hyper.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Symptomen:</h4>
                  <ul className="space-y-1">
                    {hypoHyper.hyper.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-100 rounded p-3 mb-4">
                  <p className="font-bold text-sm mb-1">Behandeling:</p>
                  <p className="text-sm">{hypoHyper.hyper.treatment}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Preventie:</h4>
                  <ul className="space-y-1">
                    {hypoHyper.hyper.prevention.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Wil Je Jouw Diabetes Onder Controle Krijgen?
            </h2>
            <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
              Vind een gespecialiseerde diabetes diëtist bij jou in de buurt voor persoonlijk advies
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors shadow-lg"
            >
              Vind Een Diabetes Diëtist
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Diabetes type 2 is een aandoening die je kunt beheersen met de juiste voeding. Door <strong>koolhydraten te spreiden</strong>, <strong>veel vezels te eten</strong> (30-40g/dag), <strong>gezonde vetten te kiezen</strong> en <strong>regelmatige maaltijden</strong> te eten, kun je je bloedsuiker stabiel houden.
              </p>
              <p>
                Met goede begeleiding van een diëtist kun je <strong>HbA1c verlagen met 1-2%</strong>, <strong>medicatie verminderen met 30-50%</strong> en het risico op complicaties sterk reduceren. Veel mensen kunnen hun diabetes zelfs in remissie krijgen door combinatie van voeding en gewichtsverlies.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Belangrijkste Actiepunten:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Spreiding koolhydraten: 15-20g ontbijt, 40-60g lunch/diner</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Kies laag GI voedsel: volkoren, peulvruchten, groenten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Minimaal 30g vezels per dag voor betere bloedsuikercontrole</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Gezonde vetten (olijfolie, noten, vette vis) i.p.v. verzadigd</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Werk samen met diëtist voor optimaal resultaat en medicatie-aanpassing</span>
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
