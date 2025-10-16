import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Heart, TrendingDown, CheckCircle2, XCircle, AlertTriangle, Info, Shield, Activity, Apple, Droplet, Zap, ArrowDown, ArrowUp, Clock, Award } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Hoog Cholesterol? Dit Kan Een Diëtist Voor Je Doen | Cholesterol Verlagen 2025',
  description: 'Complete gids over cholesterol verlagen met voeding: LDL verlagen, HDL verhogen, beste voedingsmiddelen en hoe een diëtist helpt medicatie te vermijden.',
  keywords: [
    'hoog cholesterol',
    'cholesterol verlagen voeding',
    'LDL verlagen',
    'HDL verhogen',
    'cholesterol dieet',
    'cholesterol diëtist',
    'hart en vaatziekten voorkomen',
    'gezonde vetten cholesterol',
    'statines vermijden',
    'cholesterol voeding'
  ],
  openGraph: {
    title: 'Hoog Cholesterol? Dit Kan Een Diëtist Voor Je Doen',
    description: 'Complete gids over cholesterol verlagen met voeding en begeleiding van diëtist',
    images: ['/img/blog/hoog-cholesterol-dietist/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hoog Cholesterol? Dit Kan Een Diëtist Voor Je Doen',
  description: 'Uitgebreide gids over cholesterol verlagen met voeding en hoe diëtisten helpen.',
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
    '@id': 'https://dietistindebuurt.nl/blog/hoog-cholesterol-dietist'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/hoog-cholesterol-dietist/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/hoog-cholesterol-dietist',
  inLanguage: 'nl-NL'
};

export default function HoogCholesterolDietistPage() {
  const cholesterolBasics = {
    ldl: {
      name: "LDL (Slecht Cholesterol)",
      icon: ArrowUp,
      color: "red",
      description: "Laag dichtheids lipoproteïne - veroorzaakt aderverkalking",
      ideal: "< 2.6 mmol/L (gezond)",
      elevated: "2.6-3.3 mmol/L (verhoogd)",
      high: "> 3.3 mmol/L (hoog)",
      risk: "Hoe hoger, hoe groter risico op hart- en vaatziekten"
    },
    hdl: {
      name: "HDL (Goed Cholesterol)",
      icon: ArrowDown,
      color: "green",
      description: "Hoog dichtheids lipoproteïne - ruimt slecht cholesterol op",
      ideal: "> 1.0 mmol/L (man), > 1.3 mmol/L (vrouw)",
      low: "< 1.0 mmol/L (te laag)",
      benefit: "Beschermt tegen hart- en vaatziekten",
      goal: "Hoe hoger, hoe beter beschermd"
    },
    total: {
      name: "Totaal Cholesterol",
      description: "LDL + HDL + andere vetten",
      ideal: "< 5.0 mmol/L",
      elevated: "5.0-6.5 mmol/L",
      high: "> 6.5 mmol/L",
      note: "Minder belangrijk dan LDL/HDL verhouding"
    }
  };

  const foodsToIncrease = [
    {
      category: "Vette Vis (Omega-3)",
      effect: "Verlaagt triglyceriden, verhoogt HDL",
      foods: [
        { item: "Zalm", serving: "2x per week 100-150g", ldlEffect: "↓ 5-10%" },
        { item: "Makreel", serving: "2x per week 100-150g", ldlEffect: "↓ 5-10%" },
        { item: "Haring", serving: "2x per week 100-150g", ldlEffect: "↓ 5-10%" },
        { item: "Sardines", serving: "2x per week 100-150g", ldlEffect: "↓ 5-10%" }
      ],
      tip: "Grill, stoom of bak met olijfolie - niet frituren"
    },
    {
      category: "Noten en Zaden",
      effect: "Verlaagt LDL, verhoogt HDL, verzadigt",
      foods: [
        { item: "Walnoten", serving: "Handvol (30g/dag)", ldlEffect: "↓ 7-10%" },
        { item: "Amandelen", serving: "Handvol (30g/dag)", ldlEffect: "↓ 5-7%" },
        { item: "Lijnzaad", serving: "1-2 eetlepels gemalen", ldlEffect: "↓ 8-14%" },
        { item: "Chiazaad", serving: "1-2 eetlepels", ldlEffect: "↓ 5-8%" }
      ],
      tip: "Ongezouten en naturel - niet geroosterd met zout/suiker"
    },
    {
      category: "Vezels (Oplosbaar)",
      effect: "Bindt cholesterol in darmen, voorkomt opname",
      foods: [
        { item: "Havermout", serving: "40-50g per dag", ldlEffect: "↓ 5-10%" },
        { item: "Volkoren producten", serving: "3-5 porties/dag", ldlEffect: "↓ 5-8%" },
        { item: "Peulvruchten", serving: "3-4x per week 150g", ldlEffect: "↓ 5-11%" },
        { item: "Appel met schil", serving: "1-2 stuks/dag", ldlEffect: "↓ 3-5%" }
      ],
      tip: "Minimaal 30g vezels per dag voor optimaal effect"
    },
    {
      category: "Plantaardige Oliën",
      effect: "Vervangt verzadigd vet, verlaagt LDL",
      foods: [
        { item: "Extra vierge olijfolie", serving: "2-3 eetlepels/dag", ldlEffect: "↓ 8-14%" },
        { item: "Raapzaadolie", serving: "1-2 eetlepels/dag", ldlEffect: "↓ 5-8%" },
        { item: "Lijnzaadolie", serving: "1 eetlepel/dag", ldlEffect: "↓ 5-10%" },
        { item: "Avocado", serving: "½ per dag", ldlEffect: "↓ 5-8%" }
      ],
      tip: "Gebruik i.p.v. boter, margarine en andere dierlijke vetten"
    },
    {
      category: "Soja Producten",
      effect: "Plant eiwitten verlagen LDL direct",
      foods: [
        { item: "Sojamelk", serving: "250ml/dag", ldlEffect: "↓ 3-5%" },
        { item: "Tofu", serving: "100g, 3-4x/week", ldlEffect: "↓ 3-6%" },
        { item: "Edamame", serving: "100g, 2-3x/week", ldlEffect: "↓ 3-5%" },
        { item: "Tempeh", serving: "100g, 2-3x/week", ldlEffect: "↓ 3-6%" }
      ],
      tip: "Vervang (gedeeltelijk) vlees voor extra effect"
    },
    {
      category: "Sterolen & Stanolen",
      effect: "Blokkeert cholesterol opname in darmen",
      foods: [
        { item: "Becel ProActiv", serving: "Volgens etiket (2-3g/dag)", ldlEffect: "↓ 7-10%" },
        { item: "Fruit&Fit sterol", serving: "Volgens etiket", ldlEffect: "↓ 7-10%" },
        { item: "Verrijkte yoghurt", serving: "1-2 porties/dag", ldlEffect: "↓ 5-8%" }
      ],
      tip: "Gebruik bij maaltijd voor beste effect"
    }
  ];

  const foodsToAvoid = [
    {
      category: "Verzadigd Vet",
      why: "Verhoogt LDL cholesterol direct",
      avoid: [
        "Rood vlees (rund, varken, lam) - max 1-2x per week",
        "Boter, roomboter - vervang door olijfolie/halvarine",
        "Volle zuivel - kies magere variant (0-1% vet)",
        "Kokosvet, palmolie - lees ingrediënten",
        "Kaas vol vet - max 20-30g/dag, kies 20+ variant"
      ],
      alternative: "Kies mager vlees, vis, plant eiwitten"
    },
    {
      category: "Trans Vetten",
      why: "Verhoogt LDL én verlaagt HDL (dubbel nadelig)",
      avoid: [
        "Frituurvet (friet, snacks) - vermijd zoveel mogelijk",
        "Kant-en-klaar gebak - lees etiket, vermijd 'geharde olie'",
        "Koekjes en crackers - check etiket op trans vet",
        "Bak- en braadvetten - gebruik olijfolie",
        "Fast food - beperkt tot max 1x per maand"
      ],
      alternative: "Zelf koken met verse ingrediënten"
    },
    {
      category: "Overtollig Cholesterol",
      why: "Directe cholesterol inname (minder effect dan verzadigd vet)",
      avoid: [
        "Eigeel - max 3-4 per week (eiwit onbeperkt)",
        "Orgaanvlees (lever, nieren) - vermijd",
        "Garnalen, inktvis - max 1x per week",
        "Bewerkt vlees (worst, salami) - beperkt tot 1x per week"
      ],
      alternative: "Focus vooral op verzadigd vet verminderen"
    },
    {
      category: "Suiker en Geraffineerde KH",
      why: "Verhoogt triglyceriden, verlaagt HDL",
      avoid: [
        "Frisdrank en sappen - kies water, thee",
        "Snoep en gebak - beperkt tot speciale gelegenheden",
        "Witbrood, witte pasta - vervang door volkoren",
        "Gesuikerde yoghurt - kies naturel + fruit",
        "Alcohol - max 1 glas per dag"
      ],
      alternative: "Natuurlijke suikers uit fruit, max 2 stuks/dag"
    }
  ];

  const dietistRole = {
    analysis: {
      title: "Bloedwaarden & Risicoprofiel Analyse",
      icon: Activity,
      activities: [
        "Huidige LDL, HDL en totaal cholesterol beoordelen",
        "Triglyceriden en andere lipiden waarden checken",
        "Familiaire belasting en cardiovasculair risico bepalen",
        "Huidige voedingspatroon en verzadigd vet inname analyseren",
        "Doelstellingen bepalen op basis van totaal risicoprofiel"
      ]
    },
    plan: {
      title: "Cholesterolverlagend Voedingsplan",
      icon: Apple,
      activities: [
        "Vervangen verzadigd vet door onverzadigd vet",
        "Verhogen vezelinname naar 30-40g per dag",
        "Toevoegen omega-3 rijke voeding (vette vis 2x/week)",
        "Integreren plantsterolen en stanolen producten",
        "Aanpassen portiegroottes en maaltijdfrequentie"
      ]
    },
    education: {
      title: "Educatie & Praktische Tips",
      icon: Info,
      activities: [
        "Leren etiketten lezen (verzadigd vet, trans vet)",
        "Gezond boodschappen doen en keuzes maken",
        "Koken met gezonde vetten (olijfolie, noten)",
        "Recepten en meal prep voor de hele week",
        "Omgaan met sociale situaties (feestjes, restaurants)"
      ]
    },
    monitoring: {
      title: "Monitoring & Optimalisatie",
      icon: TrendingDown,
      activities: [
        "Bloedwaarden meten na 6-8 weken (eerste controle)",
        "Voedingsplan bijstellen op basis van resultaten",
        "LDL/HDL verhouding optimaliseren",
        "Samenwerken met huisarts over medicatie",
        "Lange termijn levensstijl veranderingen borgen"
      ]
    }
  };

  const expectedResults = [
    {
      timeframe: "Na 4-6 Weken",
      ldlReduction: "5-10% daling",
      example: "Van 4.2 naar 3.8 mmol/L",
      changes: [
        "Vervangen boter door olijfolie",
        "2x per week vette vis",
        "Dagelijks havermout of volkoren",
        "Handvol noten per dag"
      ]
    },
    {
      timeframe: "Na 3 Maanden",
      ldlReduction: "10-20% daling",
      example: "Van 4.2 naar 3.4 mmol/L",
      changes: [
        "Alle voorgaande plus:",
        "Plantsterolen/stanolen product dagelijks",
        "Vermindering rood vlees naar 1x/week",
        "Gewichtsverlies 3-5 kg (indien overgewicht)"
      ]
    },
    {
      timeframe: "Na 6 Maanden",
      ldlReduction: "15-30% daling",
      example: "Van 4.2 naar 3.0 mmol/L",
      changes: [
        "Volledig geïntegreerde levensstijl:",
        "Mediterraan dieetpatroon",
        "Regelmatig bewegen 150 min/week",
        "Gewichtsverlies 5-10% (indien overgewicht)",
        "Mogelijk reductie of stoppen statines"
      ]
    }
  ];

  const mediterraneanDiet = {
    description: "Het Mediterrane dieet is wetenschappelijk bewezen het beste voor cholesterol en hart",
    benefits: [
      "15-20% LDL verlaging mogelijk",
      "30% minder risico op hart- en vaatziekten",
      "Verhoogt HDL (goed cholesterol)",
      "Anti-inflammatoire werking",
      "Beschermt tegen beroerte"
    ],
    principles: [
      {
        principle: "Basis: Groenten, Fruit, Volkoren",
        daily: "5-7 porties groenten, 2-3 fruit, volkoren bij elke maaltijd"
      },
      {
        principle: "Olijfolie als Hoofdvet",
        daily: "3-4 eetlepels extra vierge olijfolie per dag"
      },
      {
        principle: "Vis en Zeevruchten",
        daily: "Minimaal 2x per week, bij voorkeur vette vis"
      },
      {
        principle: "Noten en Peulvruchten",
        daily: "Dagelijks handvol noten, 3-4x week peulvruchten"
      },
      {
        principle: "Beperkt Rood Vlees",
        daily: "Max 1-2x per maand, vervang door vis/kip/peulvruchten"
      },
      {
        principle: "Matige Zuivel",
        daily: "Vooral yoghurt en kaas, bij voorkeur mager/halfvol"
      }
    ]
  };

  const mealExamples = {
    breakfast: [
      {
        meal: "Havermout met noten en fruit",
        cholesterolImpact: "↓↓↓",
        ingredients: "50g havermout + 200ml sojamelk + 20g walnoten + 100g bessen + kaneel",
        benefits: "Oplosbare vezels + omega-3 + antioxidanten"
      },
      {
        meal: "Volkoren brood met avocado",
        cholesterolImpact: "↓↓",
        ingredients: "2 sneetjes volkoren + ½ avocado + tomaat + ei (eiwit)",
        benefits: "Gezonde vetten + vezels + eiwit"
      },
      {
        meal: "Griekse yoghurt met lijnzaad",
        cholesterolImpact: "↓↓",
        ingredients: "200g Griekse yoghurt 0% + 2el gemalen lijnzaad + fruit + 15g amandelen",
        benefits: "Omega-3 + eiwit + calcium"
      }
    ],
    lunch: [
      {
        meal: "Zalm salade",
        cholesterolImpact: "↓↓↓",
        ingredients: "100g gerookte zalm + grote salade + volkoren crackers + olijfolie dressing",
        benefits: "Omega-3 + vezels + gezonde vetten"
      },
      {
        meal: "Volkoren wrap met hummus",
        cholesterolImpact: "↓↓",
        ingredients: "Volkoren wrap + hummus + gegrilde groenten + feta 30+ kaas",
        benefits: "Plant eiwitten + vezels + onverzadigd vet"
      },
      {
        meal: "Quinoa bowl met tofu",
        cholesterolImpact: "↓↓↓",
        ingredients: "100g quinoa + 100g tofu + edamame + groenten + sesamolie",
        benefits: "Soja eiwit + omega-3 + vezels"
      }
    ],
    dinner: [
      {
        meal: "Gegrilde zalm met zoete aardappel",
        cholesterolImpact: "↓↓↓",
        ingredients: "150g zalm + 200g zoete aardappel + 300g groenten + olijfolie",
        benefits: "Omega-3 + vezels + antioxidanten"
      },
      {
        meal: "Linzensoep met volkoren brood",
        cholesterolImpact: "↓↓↓",
        ingredients: "200g linzen + groenten + kruiden + 2 sneetjes volkoren",
        benefits: "Oplosbare vezels + plant eiwit"
      },
      {
        meal: "Kip met quinoa en broccoli",
        cholesterolImpact: "↓↓",
        ingredients: "120g kipfilet + 150g quinoa + 300g broccoli + olijfolie",
        benefits: "Mager eiwit + vezels + vitamines"
      }
    ]
  };

  const supplements = [
    {
      supplement: "Omega-3 Visolie",
      evidence: "Sterk bewijs",
      effect: "Verlaagt triglyceriden 20-30%, licht HDL verhoging",
      dosage: "1-2g EPA+DHA per dag",
      note: "Kies getest op zware metalen en PCB's"
    },
    {
      supplement: "Plantsterolen/Stanolen",
      evidence: "Zeer sterk bewijs",
      effect: "7-10% LDL verlaging bij 2-3g/dag",
      dosage: "2-3g per dag bij maaltijd",
      note: "In verrijkte margarine of supplementen"
    },
    {
      supplement: "Psylliumvezels",
      evidence: "Sterk bewijs",
      effect: "5-10% LDL verlaging",
      dosage: "5-10g per dag met veel water",
      note: "Oplosbare vezels die cholesterol binden"
    },
    {
      supplement: "Rode Gist Rijst",
      evidence: "Sterk bewijs (bevat natuurlijke statine)",
      effect: "15-25% LDL verlaging",
      dosage: "Alleen onder medisch toezicht",
      note: "Bevat monacoline K (=statine), risico bijwerkingen"
    },
    {
      supplement: "Knoflook Extract",
      evidence: "Matig bewijs",
      effect: "5-8% LDL verlaging mogelijk",
      dosage: "600-900mg aged garlic extract",
      note: "Effect klein, niet als enige interventie"
    },
    {
      supplement: "Bergamot Extract",
      evidence: "Opkomend bewijs",
      effect: "10-15% LDL verlaging mogelijk",
      dosage: "500-1000mg per dag",
      note: "Nieuwe onderzoeken veelbelovend"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Alle Vetten Vermijden",
      consequence: "Te weinig essentiële vetzuren, geen HDL verhoging",
      solution: "Eet gezonde vetten: olijfolie, noten, avocado, vette vis"
    },
    {
      mistake: "Alleen Verzadigd Vet Minderen",
      consequence: "Vaak compensatie met suiker/KH → triglyceriden ↑",
      solution: "Vervang verzadigd vet door onverzadigd, niet door suiker"
    },
    {
      mistake: "Eieren Volledig Schrappen",
      consequence: "Weinig effect want verzadigd vet is belangrijker",
      solution: "3-4 eieren per week is prima, focus op boter/vlees minderen"
    },
    {
      mistake: "Denken Light = Gezond",
      consequence: "Light producten kunnen veel suiker bevatten",
      solution: "Check etiketten: kies laag verzadigd vet én suiker"
    },
    {
      mistake: "Geen Voedingsplan, Alleen Statines",
      consequence: "Gemiste kans op 20-30% extra LDL verlaging",
      solution: "Combineer medicatie met voeding voor optimaal resultaat"
    },
    {
      mistake: "Te Snel Resultaat Verwachten",
      consequence: "Frustratie en opgeven na 2 weken",
      solution: "Eerste bloedcontrole na 6-8 weken, geduld is nodig"
    }
  ];

  const withVsWithout = {
    title: "Met vs Zonder Voedingsadvies",
    without: {
      scenario: "Alleen Statines (Geen Voedingsaanpassing)",
      ldl: "Van 4.5 naar 3.2 mmol/L",
      reduction: "30% reductie",
      sideEffects: [
        "Mogelijk spierpijn",
        "Leverfunctiestoornissen mogelijk",
        "Hogere dosering nodig",
        "Levenslange medicatie"
      ],
      quality: "Gelijk of lager door bijwerkingen"
    },
    with: {
      scenario: "Statines + Voedingsadvies Diëtist",
      ldl: "Van 4.5 naar 2.5 mmol/L",
      reduction: "45% reductie (30% medicatie + 15% voeding)",
      benefits: [
        "Lagere dosering statines mogelijk",
        "Minder bijwerkingen",
        "HDL verhoging",
        "Gewichtsverlies als bonus",
        "Algehele gezondheid ↑"
      ],
      quality: "Significant beter"
    }
  };

  const statinAlternative = {
    title: "Kan Voeding Statines Vervangen?",
    answer: "Voor sommige mensen wel, maar niet altijd - het hangt af van je risicoprofiel",
    scenarios: [
      {
        profile: "Laag Risico (Geen hart/vaatziekte, familie OK)",
        ldl: "3.5-4.5 mmol/L",
        approach: "Start met voeding + beweging 3-6 maanden",
        success: "60-70% haalt doel zonder medicatie",
        monitoring: "Controle elke 2-3 maanden"
      },
      {
        profile: "Matig Risico (Overgewicht, hoge bloeddruk, 50+)",
        ldl: "4.0-5.0 mmol/L",
        approach: "Intensief voedingsadvies + mogelijk lage dosis statine",
        success: "40-50% kan statines vermijden of dosering halveren",
        monitoring: "Controle elke 1-2 maanden"
      },
      {
        profile: "Hoog Risico (Hart/vaatziekte gehad, diabetes, familiair)",
        ldl: "> 4.0 mmol/L",
        approach: "Statines noodzakelijk + voeding voor optimalisatie",
        success: "Voeding geeft 15-20% extra LDL verlaging bovenop statines",
        monitoring: "Controle elke maand eerste 3 maanden"
      }
    ]
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
            src="/img/blog/hoog-cholesterol-dietist/featured.webp"
            alt="Hoog Cholesterol - Diëtist Hulp"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="max-w-4xl mx-auto px-4 py-6 border-b">
          <ShareButtons title="Hoog Cholesterol? Dit Kan Een Diëtist Voor Je Doen" />
        </div>

        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-4 py-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Hart & Vaten Gezondheid 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Hoog Cholesterol? Dit Kan Een Diëtist Voor Je Doen
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Complete gids: LDL verlagen met voeding, medicatie vermijden en je hart beschermen
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Cholesterol Basics */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Cholesterol Uitgelegd: LDL vs HDL
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* LDL */}
              <div className="bg-red-50 rounded-xl p-6 shadow-md border-2 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <ArrowUp className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">{cholesterolBasics.ldl.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{cholesterolBasics.ldl.description}</p>
                <div className="space-y-2">
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm font-semibold">✅ Ideaal: {cholesterolBasics.ldl.ideal}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded">
                    <p className="text-sm font-semibold">⚠️ Verhoogd: {cholesterolBasics.ldl.elevated}</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded">
                    <p className="text-sm font-semibold">❌ Hoog: {cholesterolBasics.ldl.high}</p>
                  </div>
                </div>
                <div className="bg-red-100 rounded p-3 mt-4">
                  <p className="text-sm text-red-800 font-semibold">
                    ⚠️ {cholesterolBasics.ldl.risk}
                  </p>
                </div>
              </div>

              {/* HDL */}
              <div className="bg-green-50 rounded-xl p-6 shadow-md border-2 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">{cholesterolBasics.hdl.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{cholesterolBasics.hdl.description}</p>
                <div className="space-y-2">
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm font-semibold">✅ Ideaal: {cholesterolBasics.hdl.ideal}</p>
                  </div>
                  <div className="bg-red-100 p-3 rounded">
                    <p className="text-sm font-semibold">❌ Te Laag: {cholesterolBasics.hdl.low}</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded p-3 mt-4">
                  <p className="text-sm text-green-800 font-semibold">
                    ✅ {cholesterolBasics.hdl.goal}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
              <h3 className="font-bold text-lg mb-2">💡 Simpel Onthouden:</h3>
              <p className="text-gray-700">
                <strong>LDL</strong> = <span className="text-red-600">Lower is better</span> (hoe lager, hoe beter)<br />
                <strong>HDL</strong> = <span className="text-green-600">Higher is better</span> (hoe hoger, hoe beter)
              </p>
            </div>
          </div>
        </section>

        {/* Foods to Increase */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Voedingsgroepen Die LDL Verlagen
            </h2>

            <div className="space-y-6">
              {foodsToIncrease.map((group, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{group.category}</h3>
                      <p className="text-green-700 font-semibold mb-4">Effect: {group.effect}</p>
                      
                      <div className="overflow-x-auto mb-4">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-green-200">
                              <th className="text-left p-2">Voedingsmiddel</th>
                              <th className="text-left p-2">Portie</th>
                              <th className="text-left p-2">LDL Effect</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.foods.map((food, fIdx) => (
                              <tr key={fIdx} className="border-b border-green-100">
                                <td className="p-2 font-semibold">{food.item}</td>
                                <td className="p-2 text-sm">{food.serving}</td>
                                <td className="p-2">
                                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold text-sm">
                                    {food.ldlEffect}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                        <p className="text-sm text-blue-800">
                          <strong>💡 Tip:</strong> {group.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foods to Avoid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Te Vermijden Bij Hoog Cholesterol
            </h2>

            <div className="space-y-6">
              {foodsToAvoid.map((group, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{group.category}</h3>
                      <p className="text-red-700 font-semibold mb-4">Waarom vermijden: {group.why}</p>
                      
                      <div className="bg-red-50 rounded p-4 mb-4">
                        <h4 className="font-bold mb-2">❌ Vermijd of Beperk:</h4>
                        <ul className="space-y-1">
                          {group.avoid.map((item, aIdx) => (
                            <li key={aIdx} className="text-sm text-gray-700">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-sm text-green-800">
                          <strong>✅ Kies In Plaats:</strong> {group.alternative}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mediterranean Diet */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Mediterraan Dieet: Gouden Standaard Voor Cholesterol
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              {mediterraneanDiet.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-green-700">Bewezen Voordelen:</h3>
                <ul className="space-y-2">
                  {mediterraneanDiet.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-blue-700">Belangrijkste Principes:</h3>
                <div className="space-y-3">
                  {mediterraneanDiet.principles.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-sm">{item.principle}</h4>
                      <p className="text-sm text-gray-600">{item.daily}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meal Examples */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Cholesterolverlagende Maaltijdvoorbeelden
            </h2>

            <div className="space-y-8">
              {/* Breakfast */}
              <div>
                <h3 className="text-2xl font-bold mb-4">🌅 Ontbijt</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mealExamples.breakfast.map((meal, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 shadow-md border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">{meal.meal}</h4>
                        <span className="text-2xl">{meal.cholesterolImpact}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{meal.ingredients}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs text-green-800">{meal.benefits}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lunch */}
              <div>
                <h3 className="text-2xl font-bold mb-4">🥗 Lunch</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mealExamples.lunch.map((meal, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 shadow-md border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">{meal.meal}</h4>
                        <span className="text-2xl">{meal.cholesterolImpact}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{meal.ingredients}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs text-green-800">{meal.benefits}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dinner */}
              <div>
                <h3 className="text-2xl font-bold mb-4">🍽️ Diner</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mealExamples.dinner.map((meal, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 shadow-md border border-purple-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold">{meal.meal}</h4>
                        <span className="text-2xl">{meal.cholesterolImpact}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{meal.ingredients}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-xs text-green-800">{meal.benefits}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl mt-8">
              <p className="text-gray-700">
                <strong>Legend:</strong> ↓↓↓ = Zeer effectief voor LDL verlaging | ↓↓ = Effectief | ↓ = Licht effectief
              </p>
            </div>
          </div>
        </section>

        {/* Dietist Role */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Hoe Een Diëtist Je Helpt Cholesterol Te Verlagen
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(dietistRole).map((role, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-100 rounded-full p-3">
                      <role.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-lg">{role.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {role.activities.map((activity, aIdx) => (
                      <li key={aIdx} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Results Timeline */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Kun Je Verwachten? (Timeline)
            </h2>

            <div className="space-y-6">
              {expectedResults.map((result, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg w-fit mb-2">
                        {result.timeframe}
                      </div>
                      <p className="text-2xl font-bold text-green-700">{result.ldlReduction}</p>
                      <p className="text-sm text-gray-600">{result.example}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-bold mb-2">Veranderingen:</h4>
                      <ul className="space-y-1">
                        {result.changes.map((change, cIdx) => (
                          <li key={cIdx} className="flex gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* With vs Without Dietist */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {withVsWithout.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Without */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-300">
                <h3 className="font-bold text-xl mb-4 text-gray-700">{withVsWithout.without.scenario}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">LDL Resultaat:</p>
                  <p className="text-2xl font-bold text-blue-700">{withVsWithout.without.ldl}</p>
                  <p className="text-sm text-gray-600">{withVsWithout.without.reduction}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-sm">Mogelijke Bijwerkingen:</h4>
                  <ul className="space-y-1">
                    {withVsWithout.without.sideEffects.map((effect, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <p className="text-sm"><strong>Kwaliteit van Leven:</strong> {withVsWithout.without.quality}</p>
                </div>
              </div>

              {/* With */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-500">
                <h3 className="font-bold text-xl mb-4 text-green-700">{withVsWithout.with.scenario}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">LDL Resultaat:</p>
                  <p className="text-2xl font-bold text-green-700">{withVsWithout.with.ldl}</p>
                  <p className="text-sm text-gray-600">{withVsWithout.with.reduction}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-sm">Extra Voordelen:</h4>
                  <ul className="space-y-1">
                    {withVsWithout.with.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm"><strong>Kwaliteit van Leven:</strong> {withVsWithout.with.quality}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statin Alternative */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {statinAlternative.title}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              {statinAlternative.answer}
            </p>

            <div className="space-y-6">
              {statinAlternative.scenarios.map((scenario, idx) => (
                <div key={idx} className={`rounded-xl p-6 shadow-md border-2 ${
                  idx === 0 ? 'bg-green-50 border-green-500' :
                  idx === 1 ? 'bg-yellow-50 border-yellow-500' :
                  'bg-red-50 border-red-500'
                }`}>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="font-bold mb-1">{scenario.profile}</h3>
                      <p className="text-sm text-gray-600">LDL: {scenario.ldl}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Aanpak:</p>
                      <p className="text-sm">{scenario.approach}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Succeskans:</p>
                      <p className="text-sm font-bold">{scenario.success}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Monitoring:</p>
                      <p className="text-sm">{scenario.monitoring}</p>
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
              6 Veelgemaakte Fouten Bij Cholesterol Verlaging
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">{mistake.mistake}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Gevolg:</strong> {mistake.consequence}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-2 rounded">
                        <p className="text-sm text-green-800">
                          <strong>✅ Doe Dit:</strong> {mistake.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Wil Je Jouw Cholesterol Onder Controle Krijgen?
            </h2>
            <p className="text-xl text-indigo-50 mb-8 max-w-2xl mx-auto">
              Vind een gespecialiseerde diëtist voor cholesterolverlaging bij jou in de buurt
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Vind Een Diëtist Voor Cholesterol
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Hoog cholesterol is effectief te verlagen met de juiste voeding. Door <strong>verzadigd vet te vervangen door onverzadigd vet</strong>, <strong>dagelijks vezels te eten</strong> (30-40g), <strong>2x per week vette vis</strong> en <strong>plantsterolen te gebruiken</strong>, kun je <strong>LDL met 15-30% verlagen</strong>.
              </p>
              <p>
                Een diëtist helpt je een persoonlijk cholesterolverlagend plan te maken, rekening houdend met je risicoprofiel, voorkeuren en leefstijl. Veel mensen kunnen hiermee <strong>statines vermijden of de dosering halveren</strong>, met als bonus: <strong>gewichtsverlies, betere bloeddruk en hogere energie</strong>.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Start Vandaag Met Deze 5 Acties:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Vervang boter door extra vierge olijfolie (3-4 eetlepels/dag)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Eet 2x per week vette vis (zalm, makreel, haring)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Start elke dag met havermout + handvol noten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Gebruik plantsterol verrijkte margarine (Becel ProActiv)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Maak afspraak met diëtist voor persoonlijk plan</span>
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
