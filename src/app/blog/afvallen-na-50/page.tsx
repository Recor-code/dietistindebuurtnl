import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { TrendingDown, Activity, Users, Calendar, Flame, Heart, Brain, Dumbbell, Moon, Apple, CheckCircle2, XCircle, AlertTriangle, Info, Target, Zap, Clock, Award , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Afvallen Na Je 50e: Waarom Het Moeilijker Is (En Hoe Het Wel Lukt) | 2025',
  description: 'Complete gids afvallen 50+: hormonen, metabolisme, spierverlies en bewezen strategieën om succesvol gewicht te verliezen na je 50e.',
  keywords: [
    'afvallen 50 plus',
    'afvallen na 50e',
    'gewichtsverlies menopauze',
    'metabolisme 50 plus',
    'spierverlies ouderen',
    'hormonen afvallen',
    'dieet 50 plus',
    'afvallen na menopauze',
    'gewicht oudere leeftijd',
    'gezond vermageren 50+'
  ],
  openGraph: {
    title: 'Afvallen Na Je 50e: Waarom Het Moeilijker Is (En Hoe Het Wel Lukt)',
    description: 'Complete gids over afvallen na je 50e met bewezen strategieën',
    images: ['/img/blog/afvallen-na-50/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Afvallen Na Je 50e: Waarom Het Moeilijker Is (En Hoe Het Wel Lukt)',
  description: 'Uitgebreide gids over gewichtsverlies na je 50e: hormonen, metabolisme en bewezen strategieën.',
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
    '@id': 'https://dietistindebuurt.nl/blog/afvallen-na-50'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/afvallen-na-50/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/afvallen-na-50',
  inLanguage: 'nl-NL'
};

export default function AfvallenNa50Page() {
  const whyHarder = [
    {
      reason: "Hormoonveranderingen",
      icon: Activity,
      impact: "Zeer Hoog",
      men: {
        title: "Mannen: Dalend Testosteron",
        changes: [
          "Testosteron daalt 1-2% per jaar na 30e",
          "Minder spieropbouw en -behoud",
          "Meer vetopslag, vooral buikvet",
          "Lagere energieverbranding",
          "Verminderde motivatie en drive"
        ],
        effect: "2-4 kg extra per 10 jaar zonder aanpassing"
      },
      women: {
        title: "Vrouwen: Menopauze",
        changes: [
          "Oestrogeen daalt sterk (tot 90%)",
          "Vetopslag verschuift naar buik",
          "Basaal metabolisme -5-10%",
          "Meer honger door hormoonschommelingen",
          "Slaapproblemen beïnvloeden gewicht"
        ],
        effect: "5-8 kg gemiddelde toename tijdens transitie"
      }
    },
    {
      reason: "Trager Metabolisme",
      icon: Flame,
      impact: "Hoog",
      explanation: "Je basaal metabolisme daalt met 2-5% per decennium na je 30e",
      numbers: [
        { age: "30 jaar", calories: "1800 kcal/dag", baseline: "100%" },
        { age: "40 jaar", calories: "1750 kcal/dag", baseline: "97%" },
        { age: "50 jaar", calories: "1650 kcal/dag", baseline: "92%" },
        { age: "60 jaar", calories: "1550 kcal/dag", baseline: "86%" },
        { age: "70 jaar", calories: "1450 kcal/dag", baseline: "81%" }
      ],
      conclusion: "Op 60-jarige leeftijd verbrand je 250-350 kcal minder per dag dan op 30-jarige leeftijd"
    },
    {
      reason: "Spierverlies (Sarcopenie)",
      icon: Dumbbell,
      impact: "Zeer Hoog",
      progression: [
        { age: "30-40 jaar", loss: "3-5% per decennium", effect: "Langzaam begin" },
        { age: "40-50 jaar", loss: "5-8% per decennium", effect: "Versnelling begint" },
        { age: "50-60 jaar", loss: "8-10% per decennium", effect: "Significant verlies" },
        { age: "60+ jaar", loss: "10-15% per decennium", effect: "Drastisch verlies" }
      ],
      consequence: "Minder spieren = lagere rustmetabolisme = makkelijker aankomen",
      solution: "Krachttraining wordt belangrijker dan cardio!"
    },
    {
      reason: "Verminderde Activiteit",
      icon: Activity,
      impact: "Middel-Hoog",
      factors: [
        "Zittend werk (gemiddeld 8-10 uur per dag)",
        "Minder spontane beweging (NEAT daling)",
        "Gewrichtsproblemen beperken sport",
        "Vermoeidheid door slaapproblemen",
        "Sociale verplichtingen (kleinkinderen, werk)"
      ],
      numbers: "Gemiddeld 30-40% minder beweging dan op 30-jarige leeftijd"
    },
    {
      reason: "Slaapproblemen",
      icon: Moon,
      impact: "Middel",
      issues: [
        "Menopauze-gerelateerde opvliegers (vrouwen)",
        "Toegenomen slaapapneu (vooral mannen)",
        "Meer nachtwaken (bloeddruk, toiletgang)",
        "Lichtere slaap met minder diepe slaap",
        "Stress en piekeren"
      ],
      effect: "Slecht slapen verhoogt honger (ghreline ↑) en verlaagt verzadiging (leptine ↓)",
      impact_weight: "1-2 kg extra per jaar bij chronisch slaapgebrek"
    },
    {
      reason: "Medicatie Bijwerkingen",
      icon: AlertTriangle,
      impact: "Variabel",
      common: [
        "Antidepressiva (SSRI's) - 2-5 kg gewichtstoename",
        "Bloeddrukmedicatie (bètablokkers) - vertraagd metabolisme",
        "Diabetes medicatie (insuline) - verhoogde vetopslag",
        "Ontstekingsremmers (corticosteroïden) - vochtretentie + eetlust",
        "Hormoontherapie - kan gewicht beïnvloeden"
      ],
      advice: "Bespreek alternatieven met huisarts, stop nooit zelf!"
    }
  ];

  const strategiesThatWork = [
    {
      strategy: "Kracht/Weerstandstraining",
      priority: "Nr. 1 Prioriteit!",
      icon: Dumbbell,
      why: "Behoudt en bouwt spieren op, verhoogt basaal metabolisme",
      how: [
        "Minimaal 2-3x per week",
        "Alle grote spiergroepen (benen, rug, borst, armen)",
        "8-12 herhalingen, 2-3 sets",
        "Progressieve overbelasting (steeds zwaarder)",
        "Begin met elastieken of lichte gewichten"
      ],
      effect: "Kan metabolisme met 7-10% verhogen, compenseert leeftijdsdaling",
      bonus: "Beschermt tegen osteoporose en valpartijen"
    },
    {
      strategy: "Eiwit Verhogen Naar 1.2-1.6g/kg",
      priority: "Zeer Hoog",
      icon: Apple,
      why: "Voorkomt spierverlies, verzadigt langer, thermogeen effect",
      how: [
        "Bij 70kg lichaamsgewicht: 85-110g eiwit per dag",
        "Verdeeld over alle maaltijden (25-35g per keer)",
        "Ontbijt: eieren, Griekse yoghurt, magere kwark",
        "Lunch/Diner: mager vlees, vis, peulvruchten, tofu",
        "Snack: noten, eiwitshake (indien nodig)"
      ],
      effect: "30% hoger thermogeen effect dan KH/vet = meer calorieën verbrand bij verteren",
      practical: "Elke maaltijd palm-grote portie eiwit"
    },
    {
      strategy: "Intermittent Fasting (16:8 of 14:10)",
      priority: "Hoog (Vooral Voor Vrouwen 50+)",
      icon: Clock,
      why: "Verbetert insulinegevoeligheid, verhoogt groeihormoon, vereenvoudigt afvallen",
      how: [
        "16:8 - Eet tussen 12:00-20:00, vast 20:00-12:00",
        "14:10 - Eet tussen 10:00-20:00 (milder voor vrouwen)",
        "Drink water, zwarte koffie, thee tijdens vasten",
        "Eerste maaltijd eiwitrijk voor verzadiging",
        "Pas aan bij medicatie (overleg arts)"
      ],
      effect: "Gemiddeld 3-8% gewichtsverlies in 8-12 weken",
      note: "Niet bij diabetes type 1 of ernstige eetstoornis geschiedenis"
    },
    {
      strategy: "NEAT Maximaliseren",
      priority: "Hoog",
      icon: Activity,
      why: "Niet-Oefening Activiteit Thermogenese - dagelijkse beweging telt meer dan je denkt",
      how: [
        "10.000 stappen per dag doel (start met 6000, bouw op)",
        "Trap i.p.v. lift",
        "Sta op elk uur (zittend werk)",
        "Actieve hobbies (tuinieren, dansen, wandelen)",
        "Bewust bewegen tijdens dagelijkse taken"
      ],
      effect: "NEAT kan 200-500 kcal per dag schelen",
      practical: "Stappenteller of smartwatch gebruiken voor tracking"
    },
    {
      strategy: "Verminder Koolhydraten (Vooral 's Avonds)",
      priority: "Middel-Hoog",
      icon: TrendingDown,
      why: "Lagere KH = betere insulinegevoeligheid en minder buikvet (vooral 50+)",
      how: [
        "Niet nul koolhydraten, maar matig (100-150g/dag)",
        "Ontbijt/Lunch: volkoren producten oké",
        "Avondeten: focus op groenten + eiwit + vet",
        "Vervang pasta/rijst/aardappel door extra groenten",
        "Kies complexe KH met lage GI"
      ],
      effect: "Vooral effectief voor buikvet reductie na menopauze",
      balance: "Niet te laag - minimaal 80-100g voor schildklier/hormonen"
    },
    {
      strategy: "Slaap Optimaliseren (7-8 uur)",
      priority: "Middel",
      icon: Moon,
      why: "Slecht slapen verstoort honger/verzadigingshormonen en verhoogt cortisol",
      how: [
        "Vaste slaap-waaktijden (ook weekend)",
        "Slaapkamer koel (16-18°C) en donker",
        "Geen schermen 1-2 uur voor slapen",
        "Magnesium supplement overwegen (300-400mg)",
        "Bij opvliegers: overleg HRT met arts"
      ],
      effect: "Slechte slaap kan 1-2 kg extra per jaar betekenen",
      practical: "Slaaptracker gebruiken om patronen te herkennen"
    }
  ];

  const dietAdjustments = {
    calories: {
      title: "Calorieaanpassing Per Leeftijd",
      explanation: "Je hebt minder calorieën nodig, maar meer van bepaalde voedingsstoffen",
      table: [
        { 
          age: "30-40 jaar",
          women: "1800-2000 kcal",
          men: "2200-2400 kcal",
          adjustment: "Baseline"
        },
        { 
          age: "40-50 jaar",
          women: "1700-1900 kcal",
          men: "2100-2300 kcal",
          adjustment: "-5%"
        },
        { 
          age: "50-60 jaar",
          women: "1600-1800 kcal",
          men: "2000-2200 kcal",
          adjustment: "-10%"
        },
        { 
          age: "60-70 jaar",
          women: "1500-1700 kcal",
          men: "1900-2100 kcal",
          adjustment: "-15%"
        },
        { 
          age: "70+ jaar",
          women: "1400-1600 kcal",
          men: "1800-2000 kcal",
          adjustment: "-20%"
        }
      ],
      note: "Bij actieve sport/werk: +200-400 kcal"
    },
    macros: {
      title: "Macro Verdeling 50+ Voor Afvallen",
      optimal: [
        {
          macro: "Eiwit",
          percentage: "30-35%",
          grams: "1.2-1.6 g/kg lichaamsgewicht",
          why: "Behoud spiermassa, verzadiging, thermogenese",
          sources: "Mager vlees, vis, eieren, zuivel, peulvruchten"
        },
        {
          macro: "Vet",
          percentage: "30-35%",
          grams: "0.8-1.0 g/kg lichaamsgewicht",
          why: "Hormoonproductie, verzadiging, opname vitamines",
          sources: "Olijfolie, noten, avocado, vette vis, zaden"
        },
        {
          macro: "Koolhydraten",
          percentage: "30-40%",
          grams: "100-150g per dag (matig-laag)",
          why: "Energie, maar gematigd voor insulinegevoeligheid",
          sources: "Volkoren, groenten, fruit, peulvruchten"
        }
      ],
      contrast: "Traditioneel dieet is vaak 50-60% KH - té hoog voor 50+"
    }
  };

  const menVsWomen = {
    men: {
      title: "Mannen 50+: Specifieke Uitdagingen",
      challenges: [
        "Buikvet door dalend testosteron",
        "Minder spieropbouw dan vroeger",
        "Verhoogd risico hart- en vaatziekten",
        "Vaak onbewust van hormonale veranderingen",
        "Verlies kracht en uithoudingsvermogen"
      ],
      solutions: [
        "Focus op krachttraining (zeer belangrijk!)",
        "Eiwit 1.4-1.6g/kg voor spieropbouw",
        "Zink en vitamine D optimaliseren (testosteron)",
        "Verzadigd vet beperken (hart)",
        "Overweeg testosteron controle bij arts (bij <12 nmol/L)"
      ]
    },
    women: {
      title: "Vrouwen 50+: Menopauze Impact",
      challenges: [
        "Oestrogeen daling → buikvet toename",
        "Opvliegers verstoren slaap en eetlust",
        "Emotioneel eten door hormoonschommelingen",
        "Botdichtheid afname (osteoporose risico)",
        "Insulineresistentie toename"
      ],
      solutions: [
        "Krachttraining + impact oefeningen (botten)",
        "Fytooestrogenen: soja, lijnzaad, volkoren",
        "Calcium 1200mg + vit D 20mcg per dag",
        "Overweeg HRT met gynaecoloog (< 60 jaar)",
        "Stressmanagement (yoga, meditatie, wandelen)"
      ]
    }
  };

  const commonMistakes = [
    {
      mistake: "Alleen Cardio Doen",
      why: "Cardio verbrandt calorieën maar bouwt geen spier op",
      consequence: "Verlies spiermassa → nog trager metabolisme → jojo-effect",
      solution: "2-3x kracht + 2-3x cardio per week, kracht is prioriteit"
    },
    {
      mistake: "Te Weinig Eten (<1200 kcal)",
      why: "Lichaam gaat in 'hongermodus', metabolisme vertraagt verder",
      consequence: "Extreme vermoeidheid, spierverlies, jojo zodra je normaal eet",
      solution: "Minimaal 1400-1500 kcal (vrouwen), 1800-2000 kcal (mannen)"
    },
    {
      mistake: "Eiwit Verwaarlozen",
      why: "Zonder voldoende eiwit verlies je vooral spieren i.p.v. vet",
      consequence: "Na dieet zwakker, slapper en lager metabolisme",
      solution: "Minimaal 1.2g eiwit/kg lichaamsgewicht, liever 1.4-1.6g"
    },
    {
      mistake: "Hetzelfde Dieet Als Op 30-jarige Leeftijd",
      why: "Je lichaam is fundamenteel veranderd",
      consequence: "Frustratie omdat 'oude trucjes' niet meer werken",
      solution: "Pas aan: meer eiwit, minder KH, krachttraining toevoegen"
    },
    {
      mistake: "Snelle Resultaten Verwachten",
      why: "Metabolisme trager = langzamer gewichtsverlies (0.3-0.5 kg/week is normaal)",
      consequence: "Opgeven na 2 weken door teleurstelling",
      solution: "Geduld! 0.3-0.5 kg/week = 6-10 kg in 6 maanden (gezond en houdbaar)"
    },
    {
      mistake: "Medicatie Negeren",
      why: "Veel medicijnen beïnvloeden gewicht",
      consequence: "Vechten tegen bijwerkingen zonder het te weten",
      solution: "Bespreek met arts, soms zijn alternatieven mogelijk"
    }
  ];

  const supplementsOver50 = [
    {
      supplement: "Vitamine D",
      dosage: "20-50 mcg per dag (1000-2000 IE)",
      why: "Vaak tekort, belangrijk voor spieren, botten en afweersysteem",
      effect: "Kan metabolisme met 3-5% verhogen, verbetert spierfunctie",
      note: "Laat spiegel controleren (ideaal: 75-100 nmol/L)"
    },
    {
      supplement: "Omega-3 (EPA/DHA)",
      dosage: "1-2 gram per dag",
      why: "Anti-inflammatoir, beschermt hart, helpt bij vetverbranding",
      effect: "Ondersteunt gezonde insulinegevoeligheid",
      note: "Of 2-3x per week vette vis eten"
    },
    {
      supplement: "Eiwit Poeder (Whey of Plant)",
      dosage: "20-30g na krachttraining",
      why: "Gemakkelijke manier om eiwitbehoefte te halen",
      effect: "Ondersteunt spieropbouw en -behoud",
      note: "Vooral handig bij verminderde eetlust"
    },
    {
      supplement: "Magnesium",
      dosage: "300-400 mg per dag",
      why: "Verbetert slaap, spierontspanning, energieproductie",
      effect: "Indirect via betere slaap en herstel",
      note: "Neem 's avonds voor slaap (magnesium citraat/bisglycinaat)"
    },
    {
      supplement: "Creatine",
      dosage: "3-5 gram per dag",
      why: "Helpt spierkracht en -massa behouden (wetenschappelijk bewezen)",
      effect: "5-10% meer kracht, beter herstel",
      note: "Vooral effectief in combinatie met krachttraining"
    },
    {
      supplement: "Probiotica",
      dosage: "Volgens etiket (10-50 miljard CFU)",
      why: "Darmgezondheid beïnvloedt gewicht, ontstekingen en metabolisme",
      effect: "Kan lichte gewichtsverlies ondersteuning bieden",
      note: "Kies breed spectrum met Lactobacillus en Bifidobacterium"
    }
  ];

  const weekSchedule = {
    title: "Voorbeeldweek Schema 50+ Afvallen",
    week: [
      {
        day: "Maandag",
        training: "Krachttraining (60 min) - Benen + Core",
        meals: "Eiwit: 120g | KH: 130g | Vet: 60g | 1650 kcal",
        focus: "Start week sterk, krachttraining geeft boost"
      },
      {
        day: "Dinsdag",
        training: "Wandelen (45 min) 8000 stappen",
        meals: "Eiwit: 110g | KH: 140g | Vet: 55g | 1600 kcal",
        focus: "Actief herstel, lichter eten"
      },
      {
        day: "Woensdag",
        training: "Krachttraining (60 min) - Boven Lichaam",
        meals: "Eiwit: 125g | KH: 120g | Vet: 65g | 1700 kcal",
        focus: "Tweede krachttraining, iets meer calorieën"
      },
      {
        day: "Donderdag",
        training: "Yoga/Stretching (30 min) + Wandelen",
        meals: "Eiwit: 105g | KH: 135g | Vet: 60g | 1600 kcal",
        focus: "Mobiliteit en herstel"
      },
      {
        day: "Vrijdag",
        training: "Krachttraining (60 min) - Full Body",
        meals: "Eiwit: 130g | KH: 140g | Vet: 60g | 1700 kcal",
        focus: "Laatste krachttraining week"
      },
      {
        day: "Zaterdag",
        training: "Fietsen/Zwemmen (45-60 min) Matig",
        meals: "Eiwit: 115g | KH: 160g | Vet: 55g | 1650 kcal",
        focus: "Actieve vrije dag, iets meer KH mag"
      },
      {
        day: "Zondag",
        training: "Rustige wandeling (30 min) + Rust",
        meals: "Eiwit: 110g | KH: 120g | Vet: 70g | 1650 kcal",
        focus: "Hersteldag, meer gezonde vetten"
      }
    ],
    totals: {
      avgCalories: "1650 kcal/dag",
      avgProtein: "116g/dag (1.4g/kg bij 70kg)",
      training: "3x kracht + 3x cardio/actief",
      deficit: "350-500 kcal/dag = 0.4-0.6 kg/week verlies"
    }
  };

  const successFactors = [
    {
      factor: "Geduld & Realistische Verwachtingen",
      importance: "Cruciaal",
      detail: "0.3-0.5 kg per week is uitstekend op 50+, 6-10 kg in 6 maanden is succesvol"
    },
    {
      factor: "Krachttraining Prioriteren",
      importance: "Zeer Hoog",
      detail: "2-3x per week is niet optioneel, het is essentieel voor behoud metabolisme"
    },
    {
      factor: "Eiwitinname Verhogen",
      importance: "Zeer Hoog",
      detail: "Van 0.8g/kg naar 1.4-1.6g/kg maakt verschil tussen spier/vet verlies"
    },
    {
      factor: "Professionele Begeleiding",
      importance: "Hoog",
      detail: "Diëtist + evt. personal trainer - investering die zich terugbetaalt"
    },
    {
      factor: "Slaap Optimaliseren",
      importance: "Hoog",
      detail: "7-8 uur slaap is net zo belangrijk als voeding en beweging"
    },
    {
      factor: "Sociale Steun",
      importance: "Middel-Hoog",
      detail: "Partner, vrienden of groep die zelfde doelen heeft verhoogt slaagkans 40%"
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
            src="/img/blog/afvallen-na-50/featured.webp"
            alt="Afvallen Na Je 50e - Succesvol Gewichtsverlies 50+"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Afvallen Na Je 50e: Waarom Het Moeilijker Is (En Hoe Het Wel Lukt)" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">50+ Gewichtsverlies Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Afvallen Na Je 50e: Waarom Het Moeilijker Is (En Hoe Het Wel Lukt)
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Complete gids: hormonen, metabolisme, spierverlies en bewezen strategieën voor succesvol gewichtsverlies 50+
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>14 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Quick Facts */}
        <section className="py-16 px-6 md:px-12">
            <div className="bg-amber-100 border-l-4 border-amber-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-amber-600" />
                De Harde Waarheid
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Metabolisme Daling:</h3>
                  <p className="text-3xl font-bold text-amber-700">250-350</p>
                  <p className="text-sm text-gray-600">kcal/dag minder op 60 vs 30 jaar</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Spierverlies:</h3>
                  <p className="text-3xl font-bold text-amber-700">30-40%</p>
                  <p className="text-sm text-gray-600">tussen 30 en 70 jaar (zonder actie)</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Goede Nieuws:</h3>
                  <p className="text-3xl font-bold text-green-700">80%+</p>
                  <p className="text-sm text-gray-600">kan succesvol afvallen met juiste aanpak</p>
                </div>
              </div>
            </div>
        </section>

        {/* Why Harder */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Redenen Waarom Afvallen Moeilijker Wordt Na 50
            </h2>

            <div className="space-y-8">
              {whyHarder.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-amber-50 to-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-amber-100 rounded-full p-3">
                      <item.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="text-2xl font-bold">{item.reason}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.impact === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                          item.impact === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          Impact: {item.impact}
                        </span>
                      </div>

                      {item.men && item.women && (
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-bold text-blue-800 mb-2">{item.men.title}</h4>
                            <ul className="space-y-1 mb-3">
                              {item.men.changes.map((change, cIdx) => (
                                <li key={cIdx} className="text-sm text-gray-700">• {change}</li>
                              ))}
                            </ul>
                            <p className="text-sm bg-blue-100 p-2 rounded text-blue-800">
                              <strong>Effect:</strong> {item.men.effect}
                            </p>
                          </div>
                          <div className="bg-pink-50 rounded-lg p-4">
                            <h4 className="font-bold text-pink-800 mb-2">{item.women.title}</h4>
                            <ul className="space-y-1 mb-3">
                              {item.women.changes.map((change, cIdx) => (
                                <li key={cIdx} className="text-sm text-gray-700">• {change}</li>
                              ))}
                            </ul>
                            <p className="text-sm bg-pink-100 p-2 rounded text-pink-800">
                              <strong>Effect:</strong> {item.women.effect}
                            </p>
                          </div>
                        </div>
                      )}

                      {item.numbers && Array.isArray(item.numbers) && (
                        <div className="mb-4">
                          <p className="font-semibold mb-2">{item.explanation}</p>
                          <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg overflow-hidden">
                              <thead>
                                <tr className="bg-amber-600 text-white">
                                  <th className="p-2 text-left">Leeftijd</th>
                                  <th className="p-2 text-left">Basaal Metabolisme</th>
                                  <th className="p-2 text-left">% van Baseline</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.numbers.map((row: any, rIdx: number) => (
                                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="p-2 font-semibold">{row.age}</td>
                                    <td className="p-2">{row.calories}</td>
                                    <td className="p-2">
                                      <span className={`font-bold ${
                                        parseInt(row.baseline) < 90 ? 'text-red-600' :
                                        parseInt(row.baseline) < 95 ? 'text-orange-600' :
                                        'text-green-600'
                                      }`}>
                                        {row.baseline}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-sm bg-red-50 p-3 rounded mt-3 text-red-800">
                            <strong>⚠️ </strong>{item.conclusion}
                          </p>
                        </div>
                      )}

                      {item.numbers && typeof item.numbers === 'string' && (
                        <div className="bg-amber-100 p-3 rounded mb-4">
                          <p className="text-sm"><strong>📊</strong> {item.numbers}</p>
                        </div>
                      )}

                      {item.progression && (
                        <div className="mb-4">
                          <div className="space-y-2">
                            {item.progression.map((prog, pIdx) => (
                              <div key={pIdx} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                <span className="font-semibold">{prog.age}</span>
                                <span className="text-red-600 font-bold">{prog.loss}</span>
                                <span className="text-sm text-gray-600">{prog.effect}</span>
                              </div>
                            ))}
                          </div>
                          <div className="bg-red-50 p-3 rounded mt-3">
                            <p className="text-sm text-red-800"><strong>Gevolg:</strong> {item.consequence}</p>
                            <p className="text-sm text-green-800 mt-1"><strong>✅ Oplossing:</strong> {item.solution}</p>
                          </div>
                        </div>
                      )}

                      {item.factors && (
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {item.factors.map((factor, fIdx) => (
                              <li key={fIdx} className="flex gap-2 text-gray-700">
                                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <span>{factor}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm bg-amber-100 p-3 rounded mt-3 text-amber-800">
                            <strong>Impact:</strong> {item.numbers}
                          </p>
                        </div>
                      )}

                      {item.issues && (
                        <div className="mb-4">
                          <ul className="space-y-2 mb-3">
                            {item.issues.map((issue, iIdx) => (
                              <li key={iIdx} className="flex gap-2 text-gray-700">
                                <Moon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span>{issue}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm bg-indigo-50 p-3 rounded text-indigo-800">
                            <strong>Effect:</strong> {item.effect}
                          </p>
                          <p className="text-sm bg-red-50 p-3 rounded mt-2 text-red-800">
                            <strong>Impact:</strong> {item.impact_weight}
                          </p>
                        </div>
                      )}

                      {item.common && (
                        <div>
                          <ul className="space-y-2 mb-3">
                            {item.common.map((med, mIdx) => (
                              <li key={mIdx} className="flex gap-2 text-gray-700">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span>{med}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                            <p className="text-sm text-green-800">
                              <strong>✅ Advies:</strong> {item.advice}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Strategies That Work */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Strategieën Die WÉL Werken Na 50
            </h2>

            <div className="space-y-6">
              {strategiesThatWork.map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <strategy.icon className="w-6 h-6 text-green-600" />
                        <h3 className="text-xl font-bold">{strategy.strategy}</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                          {strategy.priority}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4"><strong>Waarom:</strong> {strategy.why}</p>
                      
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold mb-2">Hoe Doe Je Dit:</h4>
                        <ul className="space-y-1">
                          {strategy.how.map((step, sIdx) => (
                            <li key={sIdx} className="flex gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-sm text-green-800">
                            <strong>Effect:</strong> {strategy.effect}
                          </p>
                        </div>
                        {strategy.bonus && (
                          <div className="bg-purple-50 p-3 rounded">
                            <p className="text-sm text-purple-800">
                              <strong>Bonus:</strong> {strategy.bonus}
                            </p>
                          </div>
                        )}
                        {strategy.practical && (
                          <div className="bg-amber-50 p-3 rounded">
                            <p className="text-sm text-amber-800">
                              <strong>Praktisch:</strong> {strategy.practical}
                            </p>
                          </div>
                        )}
                        {strategy.note && (
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="text-sm text-yellow-800">
                              <strong>Let Op:</strong> {strategy.note}
                            </p>
                          </div>
                        )}
                        {strategy.balance && (
                          <div className="bg-orange-50 p-3 rounded">
                            <p className="text-sm text-orange-800">
                              <strong>Balans:</strong> {strategy.balance}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Diet Adjustments */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voeding Aanpassen Per Leeftijd
            </h2>

            {/* Calories Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">{dietAdjustments.calories.title}</h3>
              <p className="text-gray-600 mb-6">{dietAdjustments.calories.explanation}</p>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-amber-600 text-white">
                      <th className="p-4 text-left">Leeftijd</th>
                      <th className="p-4 text-left">Vrouwen</th>
                      <th className="p-4 text-left">Mannen</th>
                      <th className="p-4 text-left">Aanpassing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dietAdjustments.calories.table.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-semibold">{row.age}</td>
                        <td className="p-4">{row.women}</td>
                        <td className="p-4">{row.men}</td>
                        <td className="p-4">
                          <span className={`font-bold ${
                            row.adjustment === 'Baseline' ? 'text-green-600' :
                            parseInt(row.adjustment) >= -10 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {row.adjustment}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-3">💡 {dietAdjustments.calories.note}</p>
            </div>

            {/* Macros */}
            <div>
              <h3 className="text-2xl font-bold mb-4">{dietAdjustments.macros.title}</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {dietAdjustments.macros.optimal.map((macro, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-200">
                    <h4 className="text-xl font-bold mb-2 text-blue-800">{macro.macro}</h4>
                    <div className="mb-3">
                      <p className="text-3xl font-bold text-blue-600">{macro.percentage}</p>
                      <p className="text-sm text-gray-600">{macro.grams}</p>
                    </div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Waarom:</strong> {macro.why}</p>
                    <p className="text-xs text-gray-600"><strong>Bronnen:</strong> {macro.sources}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl">
                <p className="text-gray-700">
                  <strong>⚠️ Let Op:</strong> {dietAdjustments.macros.contrast}
                </p>
              </div>
            </div>
        </section>

        {/* Men vs Women */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Mannen vs Vrouwen: Verschillende Uitdagingen
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Men */}
              <div className="bg-blue-50 rounded-xl p-6 shadow-md border-2 border-blue-500">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">{menVsWomen.men.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Uitdagingen:</h4>
                  <ul className="space-y-2">
                    {menVsWomen.men.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-100 rounded p-4">
                  <h4 className="font-bold mb-2">Oplossingen:</h4>
                  <ul className="space-y-2">
                    {menVsWomen.men.solutions.map((solution, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Women */}
              <div className="bg-pink-50 rounded-xl p-6 shadow-md border-2 border-pink-500">
                <h3 className="text-2xl font-bold mb-4 text-pink-800">{menVsWomen.women.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Uitdagingen:</h4>
                  <ul className="space-y-2">
                    {menVsWomen.women.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <AlertTriangle className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-pink-100 rounded p-4">
                  <h4 className="font-bold mb-2">Oplossingen:</h4>
                  <ul className="space-y-2">
                    {menVsWomen.women.solutions.map((solution, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij Afvallen 50+
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">{mistake.mistake}</h3>
                      <p className="text-sm text-gray-600 mb-2"><strong>Waarom Fout:</strong> {mistake.why}</p>
                      <p className="text-sm text-red-700 mb-3"><strong>Gevolg:</strong> {mistake.consequence}</p>
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
        </section>

        {/* Supplements */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Nuttige Supplementen Voor 50+ Afvallen
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Deze supplementen kunnen ondersteunen (niet vervangen goede voeding!)
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {supplementsOver50.map((supp, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-purple-700">{supp.supplement}</h3>
                  <p className="text-sm text-gray-600 mb-3"><strong>Dosering:</strong> {supp.dosage}</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Waarom:</strong> {supp.why}</p>
                  <div className="bg-purple-50 p-3 rounded mb-2">
                    <p className="text-sm text-purple-800"><strong>Effect:</strong> {supp.effect}</p>
                  </div>
                  <p className="text-xs text-gray-600">💡 {supp.note}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Week Schedule */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {weekSchedule.title}
            </h2>

            <div className="space-y-3 mb-8">
              {weekSchedule.week.map((day, idx) => (
                <div key={idx} className="bg-gradient-to-r from-green-50 to-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="font-bold text-green-700">{day.day}</div>
                    <div className="text-sm">{day.training}</div>
                    <div className="text-sm">{day.meals}</div>
                    <div className="text-sm text-gray-600">{day.focus}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
              <h3 className="font-bold text-xl mb-4">Week Totalen:</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Gem. Calorieën:</p>
                  <p className="text-xl font-bold text-green-700">{weekSchedule.totals.avgCalories}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gem. Eiwit:</p>
                  <p className="text-xl font-bold text-green-700">{weekSchedule.totals.avgProtein}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Training:</p>
                  <p className="text-xl font-bold text-green-700">{weekSchedule.totals.training}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Verwacht Verlies:</p>
                  <p className="text-xl font-bold text-green-700">{weekSchedule.totals.deficit}</p>
                </div>
              </div>
            </div>
        </section>
          {/* Success Factors */}
          <section className="py-16 px-6 md:px-12 bg-amber-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Succesfactoren: Wat Maakt Het Verschil?
            </h2>

            <div className="space-y-4">
              {successFactors.map((factor, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{factor.factor}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        factor.importance === 'Cruciaal' ? 'bg-red-100 text-red-700' :
                        factor.importance === 'Zeer Hoog' ? 'bg-orange-100 text-orange-700' :
                        factor.importance === 'Hoog' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {factor.importance}
                      </span>
                    </div>
                    <p className="text-gray-700">{factor.detail}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-amber-600 to-orange-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klaar Om Succesvol Af Te Vallen Na Je 50e?
            </h2>
            <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
              Vind een gespecialiseerde diëtist die begrijpt hoe afvallen werkt na 50
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
            >
              Vind Een Diëtist Voor 50+ Begeleiding
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Afvallen na je 50e is uitdagender door <strong>hormoonveranderingen, trager metabolisme en spierverlies</strong>, maar absoluut mogelijk met de juiste aanpak. De sleutel ligt in het <strong>aanpassen van je strategie</strong> aan je veranderende lichaam.
              </p>
              <p>
                De belangrijkste pijlers: <strong>krachttraining 2-3x per week</strong> (niet optioneel!), <strong>eiwit verhogen naar 1.4-1.6g/kg</strong>, <strong>calorieën aanpassen aan leeftijd</strong> en <strong>geduld hebben</strong> met 0.3-0.5 kg verlies per week. Met professionele begeleiding van een diëtist haal je betere resultaten en voorkom je veelgemaakte fouten.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Start Vandaag Met Deze 5 Acties:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Schrijf je in bij een sportschool of koop halters voor thuis (krachttraining start nu!)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Verhoog eiwit naar minimaal 1.2g/kg (palm-grote portie bij elke maaltijd)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Verlaag calorieën geleidelijk naar 1600-1800 (vrouwen) of 2000-2200 (mannen)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Zet realistische doelen: 0.3-0.5 kg per week = 6-10 kg in 6 maanden</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Maak afspraak met diëtist gespecialiseerd in 50+ voor persoonlijk plan</span>
                  </li>
                </ul>
              </div>
            </div>
        </section>
      </article>

      </div>
    </>
  );
}
