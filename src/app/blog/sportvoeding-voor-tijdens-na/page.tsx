import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Activity, Zap, Timer, Award, Droplet, Apple, CheckCircle2, Clock, TrendingUp, Battery, Flame, AlertCircle, Info , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Sportvoeding: Wat Eet Je Voor, Tijdens en Na Sporten? | Complete Gids 2025',
  description: 'Complete gids sportvoeding: optimale voeding voor, tijdens en na sporten voor betere prestaties, meer energie en sneller herstel.',
  keywords: [
    'sportvoeding',
    'eten voor sporten',
    'eten na sporten',
    'sport voeding',
    'voeding sporters',
    'herstel na sport',
    'energie voor sport',
    'koolhydraten sporten',
    'eiwit na sporten',
    'sportdrank'
  ],
  openGraph: {
    title: 'Sportvoeding: Wat Eet Je Voor, Tijdens en Na Sporten?',
    description: 'Complete gids over sportvoeding voor optimale prestaties en herstel',
    images: ['/img/blog/sportvoeding-voor-tijdens-na/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sportvoeding: Wat Eet Je Voor, Tijdens en Na Sporten?',
  description: 'Uitgebreide gids over sportvoeding: timing, hoeveelheden en beste voeding voor optimale prestaties.',
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
    '@id': 'https://dietistindebuurt.nl/blog/sportvoeding-voor-tijdens-na'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/sportvoeding-voor-tijdens-na/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/sportvoeding-voor-tijdens-na',
  inLanguage: 'nl-NL'
};

export default function SportvoedingPage() {
  const timingOverview = {
    before: {
      title: "Voor Sporten",
      icon: Clock,
      timing: "2-3 uur voor (grote maaltijd) of 30-60 min voor (snack)",
      goal: "Energie tanken, bloedsuiker stabiel, niet vol gevoel",
      macros: "Koolhydraten (hoog) + Eiwit (matig) + Vet (laag)",
      examples: ["Havermout met banaan", "Volkoren brood met pindakaas", "Pasta met kip"]
    },
    during: {
      title: "Tijdens Sporten",
      icon: Activity,
      timing: "Elke 15-30 min (bij >60 min intensief)",
      goal: "Energie aanvullen, vocht en elektrolyten op peil",
      macros: "Snelle koolhydraten + Elektrolyten + Water",
      examples: ["Sportdrank", "Energiegel", "Banaan", "Dadels"]
    },
    after: {
      title: "Na Sporten",
      icon: Award,
      timing: "Binnen 30-60 min na afloop",
      goal: "Herstel spieren, glycogeen aanvullen, rehydrateren",
      macros: "Koolhydraten (hoog) + Eiwit (hoog) + Vocht",
      examples: ["Kwark met fruit", "Kip met rijst", "Eiwitshake met banaan"]
    }
  };

  const beforeSport = {
    bigMeal: {
      title: "2-3 Uur Voor Sport: Grote Maaltijd",
      carbs: "1-2g KH per kg lichaamsgewicht",
      protein: "15-25g eiwit",
      fat: "Laag (<10g)",
      examples: [
        {
          meal: "Volkoren pasta met kipfilet",
          details: "100g pasta + 120g kip + tomatensaus + groenten",
          carbs: "75g",
          protein: "35g",
          timing: "3 uur voor"
        },
        {
          meal: "Bruin brood met ei en avocado",
          details: "3 sneetjes bruin + 2 eieren + ¼ avocado",
          carbs: "55g",
          protein: "20g",
          timing: "2-3 uur voor"
        },
        {
          meal: "Havermout met Griekse yoghurt",
          details: "80g havermout + 150g yoghurt + fruit + noten",
          carbs: "60g",
          protein: "25g",
          timing: "2-3 uur voor"
        }
      ]
    },
    smallSnack: {
      title: "30-60 Min Voor Sport: Kleine Snack",
      carbs: "0.5-1g KH per kg lichaamsgewicht",
      protein: "5-10g eiwit (optioneel)",
      fat: "Zeer laag (<5g)",
      examples: [
        {
          snack: "Banaan met pindakaas",
          details: "1 banaan + 1 eetlepel pindakaas",
          carbs: "30g",
          protein: "5g",
          timing: "30-45 min voor",
          benefit: "Snel beschikbare energie"
        },
        {
          snack: "Volkoren crackers met honing",
          details: "3-4 crackers + 1 theelepel honing",
          carbs: "25g",
          protein: "3g",
          timing: "30-45 min voor",
          benefit: "Licht verteerbaar"
        },
        {
          snack: "Smoothie (fruit + yoghurt)",
          details: "1 banaan + 100g bessen + 100ml yoghurt",
          carbs: "35g",
          protein: "8g",
          timing: "45-60 min voor",
          benefit: "Vloeibaar = snel verteren"
        },
        {
          snack: "Dadels (3-4 stuks)",
          details: "40g dadels",
          carbs: "30g",
          protein: "1g",
          timing: "30 min voor",
          benefit: "Natuurlijke snelle suikers"
        }
      ]
    }
  };

  const duringSport = {
    duration: {
      short: {
        title: "< 60 Minuten",
        need: "Alleen water",
        amount: "150-250ml per 15-20 min",
        carbs: "Niet nodig",
        note: "Lichaam heeft voldoende glycogeen"
      },
      medium: {
        title: "60-90 Minuten",
        need: "Water + optioneel KH",
        amount: "150-250ml water + eventueel 15-30g KH per uur",
        carbs: "Sportdrank of energiegel indien intensief",
        note: "Afhankelijk van intensiteit"
      },
      long: {
        title: "> 90 Minuten (Duursporten)",
        need: "Water + KH + Elektrolyten verplicht",
        amount: "250-350ml per 15-20 min + 30-60g KH per uur",
        carbs: "Sportdrank, gels, banaan, dadels",
        note: "Glycogeen raakt op, bijvullen cruciaal"
      }
    },
    products: [
      {
        product: "Sportdrank (isotoon)",
        carbs: "6-8% KH (15-20g per 250ml)",
        electrolytes: "Natrium, kalium, magnesium",
        when: "60+ min matige tot intensieve inspanning",
        benefit: "Vocht + energie + elektrolyten in 1",
        diy: "500ml water + 30g suiker + snufje zout + citroensap"
      },
      {
        product: "Energiegel",
        carbs: "20-25g per gel",
        electrolytes: "Soms toegevoegd (check etiket)",
        when: "Hardlopen, fietsen >90 min",
        benefit: "Compacte snelle energie",
        tip: "Altijd met water innemen!"
      },
      {
        product: "Banaan",
        carbs: "25-30g per stuk",
        electrolytes: "Kalium (400mg)",
        when: "Alle sporten >60 min",
        benefit: "Natuurlijk, makkelijk verteerbaar",
        tip: "Rijpe banaan verteert sneller"
      },
      {
        product: "Dadels",
        carbs: "20g per 3-4 stuks",
        electrolytes: "Kalium, magnesium",
        when: "Duursporten, fietsen",
        benefit: "Natuurlijke snelle suikers",
        tip: "Goed kauwen voor opname"
      },
      {
        product: "Energierepen",
        carbs: "25-40g per reep",
        electrolytes: "Variabel",
        when: "Lange trainingen/wedstrijden",
        benefit: "Energie + soms eiwit",
        tip: "Kies laag-vezel variant (beter verteerbaar)"
      }
    ]
  };

  const afterSport = {
    immediate: {
      title: "Direct Na (<30 min): Herstelvenster",
      priority: "Zeer Hoog",
      why: "Spieren nemen maximaal glucose en eiwit op",
      carbs: "1-1.2g per kg lichaamsgewicht",
      protein: "20-30g (0.3-0.4g per kg)",
      ratio: "KH:Eiwit = 3:1 tot 4:1",
      examples: [
        {
          option: "Chocolademelk",
          details: "500ml halfvolle chocolademelk",
          carbs: "60g",
          protein: "18g",
          benefit: "Perfect 3:1 ratio, vloeibaar"
        },
        {
          option: "Kwark met banaan en honing",
          details: "200g magere kwark + 1 banaan + 1el honing",
          carbs: "50g",
          protein: "25g",
          benefit: "Caseine + whey eiwit"
        },
        {
          option: "Eiwitshake met fruit",
          details: "30g whey + 1 banaan + 200ml melk",
          carbs: "45g",
          protein: "35g",
          benefit: "Snelle eiwit opname"
        },
        {
          option: "Brood met ei en jam",
          details: "2 sneetjes volkoren + 2 eieren + jam",
          carbs: "45g",
          protein: "18g",
          benefit: "Vast voedsel optie"
        }
      ]
    },
    fullMeal: {
      title: "1-2 Uur Na: Volledige Maaltijd",
      priority: "Hoog",
      why: "Volledig herstel glycogeen en spierweefsel",
      carbs: "1-1.5g per kg lichaamsgewicht",
      protein: "25-40g",
      fats: "Matig (10-20g gezonde vetten)",
      examples: [
        {
          meal: "Zalm met zoete aardappel",
          details: "150g zalm + 200g zoete aardappel + 200g groenten",
          carbs: "45g",
          protein: "35g",
          fats: "15g omega-3"
        },
        {
          meal: "Kip met quinoa en avocado",
          details: "150g kip + 150g quinoa + ½ avocado + groenten",
          carbs: "50g",
          protein: "40g",
          fats: "18g"
        },
        {
          meal: "Volkoren pasta met tonijn",
          details: "120g pasta + 150g tonijn + tomatensaus + olijfolie",
          carbs: "85g",
          protein: "35g",
          fats: "12g"
        },
        {
          meal: "Volkoren wrap met scrambled eggs",
          details: "2 wraps + 3 eieren + avocado + groenten",
          carbs: "60g",
          protein: "30g",
          fats: "20g"
        }
      ]
    }
  };

  const hydrationGuide = {
    importance: "Je verliest 0.5-2 liter vocht per uur sporten (afhankelijk van intensiteit en temperatuur)",
    dehydrationEffects: [
      { loss: "2% lichaamsgewicht", effect: "Prestatie -10-20%", symptoms: "Dorst, lichte vermoeidheid" },
      { loss: "3-4%", effect: "Prestatie -20-30%", symptoms: "Droge mond, hoofdpijn, duizelig" },
      { loss: ">5%", effect: "Prestatie >30% daling", symptoms: "Ernstige vermoeidheid, krampen, misselijkheid" }
    ],
    schedule: [
      { timing: "2 uur voor", amount: "400-600ml water", why: "Lichaam gehydrateerd starten" },
      { timing: "15 min voor", amount: "200-300ml water", why: "Extra voorbereiding" },
      { timing: "Tijdens (<60 min)", amount: "150-250ml per 15-20 min", why: "Vochtverlies compenseren" },
      { timing: "Tijdens (>60 min)", amount: "150-250ml sportdrank per 15-20 min", why: "Vocht + KH + elektrolyten" },
      { timing: "Direct na", amount: "150% van verlies (weeg jezelf)", why: "Volledig rehydrateren" }
    ],
    electrolyteNeeds: {
      title: "Wanneer Elektrolyten Nodig?",
      situations: [
        "> 60 min intensief sporten",
        "Heet weer (>25°C)",
        "Veel zweten (zoutvlekken op kleding)",
        "Meerdere trainingen per dag",
        "Duursporten (hardlopen, fietsen, triathlon)"
      ],
      sources: ["Sportdrank", "Elektrolyt tabletten", "Bouillon", "Banaan (kalium)", "Noten (magnesium)"]
    }
  };

  const sportTypes = {
    strength: {
      title: "Krachttraining / Fitness",
      duration: "30-90 minuten",
      focus: "Spieropbouw en kracht",
      before: {
        timing: "1-2 uur voor",
        food: "Matige KH + Eiwit",
        examples: ["Brood met ei", "Kwark met fruit", "Havermout"]
      },
      during: {
        need: "Alleen water",
        amount: "150-250ml per 20 min"
      },
      after: {
        timing: "Binnen 30 min!",
        priority: "Eiwit >> KH",
        target: "25-40g eiwit + 30-50g KH",
        examples: ["Eiwitshake + banaan", "Kip met rijst", "Kwark met granola"]
      }
    },
    endurance: {
      title: "Duursporten (Hardlopen, Fietsen)",
      duration: "60-180+ minuten",
      focus: "Uithoudingsvermogen en energie",
      before: {
        timing: "2-3 uur voor",
        food: "Hoog KH + Laag vet",
        examples: ["Pasta met tomatensaus", "Havermout met banaan", "Brood met jam"]
      },
      during: {
        need: "KH + elektrolyten verplicht bij >60 min",
        amount: "30-60g KH per uur + 500-750ml vocht",
        products: ["Sportdrank", "Gels", "Banaan", "Dadels"]
      },
      after: {
        timing: "Binnen 30-60 min",
        priority: "KH = Eiwit (3:1 ratio)",
        target: "60-90g KH + 20-30g eiwit",
        examples: ["Chocolademelk", "Smoothie bowl", "Pasta met kip"]
      }
    },
    hiit: {
      title: "HIIT / Intervaltraining",
      duration: "20-45 minuten",
      focus: "Intensiteit en vetverbranding",
      before: {
        timing: "45-60 min voor",
        food: "Lichte KH snack",
        examples: ["Banaan", "Rijstwafels met honing", "Smoothie"]
      },
      during: {
        need: "Water voldoende",
        amount: "200-300ml totaal"
      },
      after: {
        timing: "Binnen 30 min",
        priority: "Eiwit + Matige KH",
        target: "20-30g eiwit + 30-40g KH",
        examples: ["Eiwitshake + fruit", "Yoghurt met granola", "Ei met brood"]
      }
    },
    team: {
      title: "Teamsporten (Voetbal, Hockey)",
      duration: "60-120 minuten",
      focus: "Explosiviteit en uithoudingsvermogen",
      before: {
        timing: "2-3 uur voor",
        food: "Matig-Hoog KH + Matig eiwit",
        examples: ["Brood met kip", "Pasta salade", "Wrap met hummus"]
      },
      during: {
        need: "Water + optioneel KH bij >90 min",
        amount: "250ml per 15-20 min, sportdrank bij verlenging"
      },
      after: {
        timing: "Binnen 60 min",
        priority: "KH + Eiwit (3:1)",
        target: "50-70g KH + 20-25g eiwit",
        examples: ["Broodjes met beleg", "Pasta met vlees", "Chocolademelk"]
      }
    }
  };

  const commonMistakes = [
    {
      mistake: "Te Kort Voor Training Eten",
      consequence: "Vol gevoel, krampen, misselijkheid tijdens sporten",
      correct: "Grote maaltijd: 2-3u voor | Snack: 30-60 min voor",
      solution: "Plan maaltijden van tevoren, test wat werkt voor jou"
    },
    {
      mistake: "Te Veel Vet Voor Training",
      consequence: "Langzame vertering, loom gevoel, geen energie",
      correct: "Hoog KH, matig eiwit, laag vet (<10g) voor sporten",
      solution: "Vermijd avocado, noten, vette vis voor training"
    },
    {
      mistake: "Herstelvenster Missen (>2u wachten)",
      consequence: "Trager herstel, meer spierpijn, glycogeen niet aangevuld",
      correct: "Binnen 30-60 min KH + eiwit innemen",
      solution: "Neem altijd herstelsnack mee (shake, yoghurt, banaan)"
    },
    {
      mistake: "Alleen Eiwit Na Krachttraining",
      consequence: "Suboptimaal herstel, glycogeen niet aangevuld",
      correct: "Ook na kracht: KH + eiwit (25-40g eiwit + 30-50g KH)",
      solution: "Voeg fruit, brood of havermout toe aan eiwitshake"
    },
    {
      mistake: "Te Weinig Drinken Tijdens Sport",
      consequence: "Dehydratie = 10-30% prestatie daling + krampen",
      correct: "150-250ml per 15-20 min, >60min sportdrank",
      solution: "Zet timers, weeg jezelf voor/na (verlies = te weinig gedronken)"
    },
    {
      mistake: "Nieuwe Voeding Proberen Op Wedstrijddag",
      consequence: "Maagklachten, diarree, slechte prestatie",
      correct: "Alleen eten wat je tijdens training getest hebt!",
      solution: "Test alle voeding en timing minimaal 3x in training"
    }
  ];

  const supplements = [
    {
      supplement: "Whey Proteïne",
      when: "Direct na kracht/intensieve training",
      dose: "20-30g",
      benefit: "Snelle spieropbouw, gemakkelijk verteerbaar",
      necessary: "Niet nodig als je 1.6-2g eiwit/kg eet via voeding"
    },
    {
      supplement: "Creatine",
      when: "Dagelijks (timing maakt niet uit)",
      dose: "3-5g per dag",
      benefit: "5-15% meer kracht en spiermassa (bewezen)",
      necessary: "Zeer effectief voor kracht/sprintsport, minder voor duursporten"
    },
    {
      supplement: "Cafeïne",
      when: "45-60 min voor training",
      dose: "3-6mg per kg (200-400mg)",
      benefit: "5-10% prestatieverbetering, meer focus",
      necessary: "Nuttig voor ochtendtraining of lange duurinspanning"
    },
    {
      supplement: "BCAA's (Vertakte Aminozuren)",
      when: "Tijdens lange training (>90 min)",
      dose: "5-10g",
      benefit: "Vermindert spirafbraak tijdens lange inspanning",
      necessary: "Niet nodig bij voldoende eiwit inname"
    },
    {
      supplement: "Beta-Alanine",
      when: "Dagelijks (opbouw nodig)",
      dose: "3-6g per dag",
      benefit: "Beter presteert bij korte intensieve inspanningen (HIIT, sprinten)",
      necessary: "Alleen voor specifieke doelen, niet essentieel"
    },
    {
      supplement: "Elektrolyt Tabletten",
      when: "Tijdens sport >60 min (vooral warm weer)",
      dose: "1 tablet per 500ml water",
      benefit: "Voorkomt krampen, verbetert hydratatie",
      necessary: "Ja bij intensief >60 min of heet weer"
    }
  ];

  const weekPlan = {
    title: "Voorbeeld Voedingsschema Sportweek",
    days: [
      {
        day: "Maandag",
        training: "Krachttraining 18:00 (60 min)",
        meals: {
          breakfast: "Havermout + eieren + fruit (700 kcal)",
          lunch: "Volkoren brood + kip + salade (600 kcal)",
          preworkout: "16:30 - Banaan + pindakaas (200 kcal)",
          postworkout: "19:15 - Eiwitshake + banaan (300 kcal)",
          dinner: "20:00 - Zalm + rijst + groenten (700 kcal)"
        },
        total: "2500 kcal | 160g eiwit | 280g KH | 70g vet"
      },
      {
        day: "Dinsdag",
        training: "Hardlopen 7:00 (45 min)",
        meals: {
          preworkout: "6:30 - Koffie + 2 dadels (80 kcal)",
          breakfast: "8:00 - Brood + ei + avocado (500 kcal)",
          lunch: "Pasta salade met tonijn (650 kcal)",
          snack: "Yoghurt + fruit (200 kcal)",
          dinner: "Kip + quinoa + groenten (700 kcal)"
        },
        total: "2400 kcal | 140g eiwit | 270g KH | 75g vet"
      },
      {
        day: "Woensdag",
        training: "Rust / Lichte wandeling",
        meals: {
          breakfast: "Smoothie bowl (450 kcal)",
          lunch: "Volkoren wrap + hummus + groenten (550 kcal)",
          snack: "Noten + fruit (250 kcal)",
          dinner: "Vegetarische curry + rijst (700 kcal)"
        },
        total: "2200 kcal | 100g eiwit | 260g KH | 80g vet"
      },
      {
        day: "Donderdag",
        training: "HIIT 18:30 (30 min)",
        meals: {
          breakfast: "Brood + kaas + fruit (600 kcal)",
          lunch: "Salade met feta + volkoren brood (550 kcal)",
          preworkout: "17:00 - Smoothie (banaan + yoghurt) (250 kcal)",
          postworkout: "19:15 - Kwark + honing + granola (350 kcal)",
          dinner: "20:00 - Pasta + gehaktballetjes (750 kcal)"
        },
        total: "2500 kcal | 150g eiwit | 300g KH | 65g vet"
      },
      {
        day: "Vrijdag",
        training: "Lange fietstocht 9:00 (120 min)",
        meals: {
          breakfast: "7:00 - Havermout + banaan + noten (650 kcal)",
          during: "Sportdrank + 2 bananen (300 kcal)",
          postworkout: "11:30 - Chocolademelk + broodje (500 kcal)",
          lunch: "13:00 - Pasta + kip (800 kcal)",
          dinner: "Zalm + zoete aardappel (700 kcal)"
        },
        total: "2950 kcal | 160g eiwit | 380g KH | 80g vet"
      }
    ]
  };

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
            src="/img/blog/sportvoeding-voor-tijdens-na/featured.webp"
            alt="Sportvoeding - Voor, Tijdens en Na Sporten"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Sportvoeding: Wat Eet Je Voor, Tijdens en Na Sporten?" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Activity className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Sportvoeding Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Sportvoeding: Wat Eet Je Voor, Tijdens en Na Sporten?
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Complete gids voor optimale sportprestaties: timing, hoeveelheden en beste voeding voor maximale energie en herstel
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

        {/* Timing Overview */}
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              De 3 Belangrijkste Momenten
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.values(timingOverview).map((phase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border-2 border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Timing:</p>
                      <p className="text-sm">{phase.timing}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Doel:</p>
                      <p className="text-sm">{phase.goal}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Focus:</p>
                      <p className="text-sm font-bold text-blue-700">{phase.macros}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Voorbeelden:</p>
                      <ul className="space-y-1">
                        {phase.examples.map((ex, eIdx) => (
                          <li key={eIdx} className="text-sm">• {ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Before Sport */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voor Sporten: Energy Tanken
            </h2>

            <div className="space-y-8">
              {/* Big Meal */}
              <div className="bg-green-50 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-800">{beforeSport.bigMeal.title}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Koolhydraten:</p>
                    <p className="font-bold text-green-700">{beforeSport.bigMeal.carbs}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Eiwit:</p>
                    <p className="font-bold text-green-700">{beforeSport.bigMeal.protein}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Vet:</p>
                    <p className="font-bold text-green-700">{beforeSport.bigMeal.fat}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {beforeSport.bigMeal.examples.map((meal, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold mb-2">{meal.meal}</h4>
                      <p className="text-sm text-gray-600 mb-3">{meal.details}</p>
                      <div className="flex justify-between text-sm mb-2">
                        <span>KH: <strong className="text-green-700">{meal.carbs}</strong></span>
                        <span>Eiwit: <strong className="text-green-700">{meal.protein}</strong></span>
                      </div>
                      <p className="text-xs bg-green-100 p-2 rounded text-green-800">
                        ⏰ {meal.timing}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small Snack */}
              <div className="bg-blue-50 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">{beforeSport.smallSnack.title}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Koolhydraten:</p>
                    <p className="font-bold text-blue-700">{beforeSport.smallSnack.carbs}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Eiwit:</p>
                    <p className="font-bold text-blue-700">{beforeSport.smallSnack.protein}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Vet:</p>
                    <p className="font-bold text-blue-700">{beforeSport.smallSnack.fat}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {beforeSport.smallSnack.examples.map((snack, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold mb-2">{snack.snack}</h4>
                      <p className="text-sm text-gray-600 mb-2">{snack.details}</p>
                      <div className="flex justify-between text-sm mb-2">
                        <span>KH: <strong className="text-blue-700">{snack.carbs}</strong></span>
                        <span>Eiwit: <strong className="text-blue-700">{snack.protein}</strong></span>
                      </div>
                      <p className="text-xs bg-blue-100 p-2 rounded text-blue-800 mb-1">
                        ⏰ {snack.timing}
                      </p>
                      <p className="text-xs bg-green-50 p-2 rounded text-green-800">
                        ✅ {snack.benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>

        {/* During Sport */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-yellow-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tijdens Sporten: Energie Aanvullen
            </h2>

            {/* Duration Guide */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {Object.values(duringSport.duration).map((dur, idx) => (
                <div key={idx} className={`rounded-xl p-6 shadow-md border-2 ${
                  idx === 0 ? 'bg-green-50 border-green-500' :
                  idx === 1 ? 'bg-yellow-50 border-yellow-500' :
                  'bg-red-50 border-red-500'
                }`}>
                  <h3 className="text-xl font-bold mb-3">{dur.title}</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Wat:</p>
                      <p className="text-sm font-bold">{dur.need}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">Hoeveel:</p>
                      <p className="text-sm">{dur.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">KH:</p>
                      <p className="text-sm">{dur.carbs}</p>
                    </div>
                    <div className={`p-2 rounded ${
                      idx === 0 ? 'bg-green-100' :
                      idx === 1 ? 'bg-yellow-100' :
                      'bg-red-100'
                    }`}>
                      <p className="text-xs">💡 {dur.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Products */}
            <h3 className="text-2xl font-bold mb-6">Sportvoeding Producten</h3>
            <div className="space-y-4">
              {duringSport.products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="grid md:grid-cols-5 gap-4">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{product.product}</h4>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Koolhydraten:</p>
                      <p className="text-sm font-semibold">{product.carbs}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Elektrolyten:</p>
                      <p className="text-sm font-semibold">{product.electrolytes}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Wanneer:</p>
                      <p className="text-sm">{product.when}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Voordeel:</p>
                      <p className="text-sm text-green-700 font-semibold">{product.benefit}</p>
                    </div>
                  </div>
                  {product.diy && (
                    <div className="bg-blue-50 p-3 rounded mt-3">
                      <p className="text-sm"><strong>DIY:</strong> {product.diy}</p>
                    </div>
                  )}
                  {product.tip && (
                    <div className="bg-yellow-50 p-3 rounded mt-3">
                      <p className="text-sm"><strong>💡 Tip:</strong> {product.tip}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
        </section>

        {/* After Sport - Content continues... */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Na Sporten: Herstel & Groei
            </h2>

            <div className="space-y-8">
              {/* Immediate Recovery */}
              <div className="bg-purple-50 rounded-xl p-6 shadow-md border-2 border-purple-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">
                    {afterSport.immediate.priority}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">{afterSport.immediate.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-4"><strong>Waarom:</strong> {afterSport.immediate.why}</p>
                
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Koolhydraten:</p>
                    <p className="font-bold text-purple-700">{afterSport.immediate.carbs}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Eiwit:</p>
                    <p className="font-bold text-purple-700">{afterSport.immediate.protein}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Ratio:</p>
                    <p className="font-bold text-purple-700">{afterSport.immediate.ratio}</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {afterSport.immediate.examples.map((ex, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-bold mb-2">{ex.option}</h4>
                      <p className="text-sm text-gray-600 mb-2">{ex.details}</p>
                      <div className="flex justify-between text-sm mb-2">
                        <span>KH: <strong className="text-purple-700">{ex.carbs}</strong></span>
                        <span>Eiwit: <strong className="text-purple-700">{ex.protein}</strong></span>
                      </div>
                      <p className="text-xs bg-purple-100 p-2 rounded text-purple-800">
                        ✅ {ex.benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Meal */}
              <div className="bg-orange-50 rounded-xl p-6 shadow-md border-2 border-orange-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold">
                    {afterSport.fullMeal.priority}
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800">{afterSport.fullMeal.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-4"><strong>Waarom:</strong> {afterSport.fullMeal.why}</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Koolhydraten:</p>
                    <p className="font-bold text-orange-700">{afterSport.fullMeal.carbs}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Eiwit:</p>
                    <p className="font-bold text-orange-700">{afterSport.fullMeal.protein}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-600">Vetten:</p>
                    <p className="font-bold text-orange-700">{afterSport.fullMeal.fats}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {afterSport.fullMeal.examples.map((meal, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-bold mb-2">{meal.meal}</h4>
                      <p className="text-sm text-gray-600 mb-2">{meal.details}</p>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <span>KH: <strong className="text-orange-700">{meal.carbs}</strong></span>
                        <span>Eiwit: <strong className="text-orange-700">{meal.protein}</strong></span>
                        <span>Vet: <strong className="text-orange-700">{meal.fats}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>

        {/* Hydration Guide */}
        <section className="py-16 px-6 md:px-12 bg-cyan-50">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Hydratatie: Het Vergeten Onderdeel
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              {hydrationGuide.importance}
            </p>

            {/* Dehydration Effects */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="font-bold text-xl mb-4">Effect Dehydratie Op Prestatie:</h3>
              <div className="space-y-3">
                {hydrationGuide.dehydrationEffects.map((effect, idx) => (
                  <div key={idx} className={`p-4 rounded-lg ${
                    idx === 0 ? 'bg-yellow-50' :
                    idx === 1 ? 'bg-orange-50' :
                    'bg-red-50'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold">{effect.loss} vochtverlies</span>
                        <span className="mx-2">→</span>
                        <span className="text-red-700 font-bold">{effect.effect}</span>
                      </div>
                      <span className="text-sm text-gray-600">{effect.symptoms}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hydration Schedule */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="font-bold text-xl mb-4">Drinkschema:</h3>
              <div className="space-y-3">
                {hydrationGuide.schedule.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold min-w-[120px]">
                      {item.timing}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.amount}</p>
                      <p className="text-sm text-gray-600">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Electrolytes */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-4">{hydrationGuide.electrolyteNeeds.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Situaties:</h4>
                  <ul className="space-y-2">
                    {hydrationGuide.electrolyteNeeds.situations.map((sit, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                        <span>{sit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bronnen:</h4>
                  <ul className="space-y-2">
                    {hydrationGuide.electrolyteNeeds.sources.map((source, idx) => (
                      <li key={idx} className="flex gap-2">
                        <Droplet className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                        <span>{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </section>

        {/* Sport Types - Abbreviated for space */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voeding Per Sporttype
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(sportTypes).map((sport, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-md border border-indigo-200">
                  <h3 className="text-xl font-bold mb-2 text-indigo-800">{sport.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">Duur: {sport.duration}</p>
                  <p className="text-sm font-semibold text-indigo-700 mb-4">Focus: {sport.focus}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-bold mb-1">Voor: {sport.before.timing}</p>
                      <p className="text-sm">{sport.before.food}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm font-bold mb-1">Tijdens:</p>
                      <p className="text-sm">{sport.during.need}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-sm font-bold mb-1">Na: {sport.after.timing}</p>
                      <p className="text-sm">{sport.after.priority} - {sport.after.target}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-6 md:px-12 bg-red-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij Sportvoeding
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-red-100 rounded-full p-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">{mistake.mistake}</h3>
                      <p className="text-sm text-red-700 mb-2"><strong>Gevolg:</strong> {mistake.consequence}</p>
                      <p className="text-sm text-green-700 mb-2"><strong>Correct:</strong> {mistake.correct}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-sm text-green-800"><strong>✅</strong> {mistake.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Wil Je Persoonlijk Sportvoedingsadvies?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Vind een sportdiëtist bij jou in de buurt voor een plan op maat
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Vind Een Sportdiëtist
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Sportvoeding draait om <strong>timing en juiste samenstelling</strong>. Voor sporten tank je energie met koolhydraten (2-3u grote maaltijd OF 30-60 min snack), tijdens sporten &gt;60 min vul je aan met 30-60g KH per uur + vocht, en na sporten herstel je binnen 30-60 min met KH + eiwit (3:1 ratio).
              </p>
              <p>
                Het <strong>herstelvenster van 30-60 minuten</strong> na sporten is cruciaal - hier neemt je lichaam maximaal glucose en eiwit op. Mis je dit, dan duurt herstel langer en bouw je minder spieren op. Hydratatie is net zo belangrijk: al bij 2% vochtverlies daalt je prestatie met 10-20%.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Quick Reference Kaart:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>2-3u voor:</strong> Grote maaltijd (KH + eiwit, laag vet)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>30-60 min voor:</strong> Snack (KH focus, banaan/dadels)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Tijdens &gt;60 min:</strong> 30-60g KH per uur + 150-250ml vocht per 15-20 min</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Binnen 30 min na:</strong> KH + eiwit 3:1 ratio (chocolademelk perfect!)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Altijd:</strong> Test voeding in training, NOOIT nieuwe dingen op wedstrijddag</span>
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
