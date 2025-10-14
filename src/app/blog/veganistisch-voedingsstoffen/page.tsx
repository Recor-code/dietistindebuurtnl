import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, CheckCircle2, AlertTriangle, Info, Apple, Pill, TrendingUp, Shield, Zap, Heart, Brain, Bone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veganistisch en Alle Voedingsstoffen Binnenkrijgen | Complete Gids 2025',
  description: 'Complete gids veganistisch eten: alle essentiële voedingsstoffen, supplementen, plantaardige eiwitbronnen en gezonde vegan maaltijden.',
  keywords: [
    'veganistisch eten',
    'vegan voedingsstoffen',
    'plantaardig eiwit',
    'vitamine B12 vegan',
    'vegan supplementen',
    'gezond veganistisch',
    'vegan dieet',
    'plantaardig voedingspatroon',
    'vegan ijzer',
    'vegan omega 3'
  ],
  openGraph: {
    title: 'Veganistisch en Alle Voedingsstoffen Binnenkrijgen',
    description: 'Complete gids over veganistisch eten met alle essentiële voedingsstoffen',
    images: ['/img/blog/veganistisch-voedingsstoffen/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Veganistisch en Alle Voedingsstoffen Binnenkrijgen',
  description: 'Uitgebreide gids over veganistisch eten en alle essentiële voedingsstoffen binnenkrijgen.',
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
    '@id': 'https://dietistindebuurt.nl/blog/veganistisch-voedingsstoffen'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/veganistisch-voedingsstoffen/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/veganistisch-voedingsstoffen',
  inLanguage: 'nl-NL'
};

export default function VeganistischVoedingsstoffenPage() {
  const criticalNutrients = [
    {
      nutrient: "Vitamine B12",
      icon: Brain,
      risk: "Zeer Hoog",
      why: "Komt ALLEEN in dierlijke producten voor",
      deficiencySymptoms: [
        "Extreme vermoeidheid en zwakte",
        "Geheugenproblemen en concentratiestoornis",
        "Tintelingen in handen en voeten",
        "Bloedarmoede (anemie)",
        "Depressie en stemmingswisselingen"
      ],
      veganSources: "GEEN natuurlijke plantaardige bronnen!",
      solution: [
        "Supplementen: 50-100 mcg dagelijks OF 1000-2000 mcg 2x per week",
        "Verrijkte producten: sojamelk, cereals (check etiket)",
        "Voedingsgist (nutritional yeast) verrijkt met B12"
      ],
      critical: "Verplicht supplementeren - geen uitzondering!"
    },
    {
      nutrient: "Vitamine D",
      icon: Bone,
      risk: "Hoog",
      why: "Weinig plantaardige bronnen, vooral in winter tekort",
      deficiencySymptoms: [
        "Vermoeidheid en spierpijn",
        "Botontkalking (osteoporose)",
        "Verhoogde infecties",
        "Depressieve gevoelens",
        "Zwakkere spieren"
      ],
      veganSources: "Zonlicht (15-30 min per dag), paddenstoelen (UV-bestraald), verrijkte producten",
      solution: [
        "Supplementen: 20-25 mcg (800-1000 IE) per dag",
        "Extra in winter: 25-50 mcg per dag",
        "Kies altijd D3 vegan (uit korstmos/algen)",
        "Check bloedwaarden 1-2x per jaar (streef 75-100 nmol/L)"
      ],
      critical: "Vooral najaar/winter supplementeren essentieel"
    },
    {
      nutrient: "Omega-3 (EPA/DHA)",
      icon: Heart,
      risk: "Hoog",
      why: "Plantaardige omega-3 (ALA) wordt slecht omgezet naar EPA/DHA",
      deficiencySymptoms: [
        "Droge huid en haar",
        "Concentratieproblemen",
        "Verhoogd risico hart- en vaatziekten",
        "Ontstekingen",
        "Stemmingsproblemen"
      ],
      veganSources: "Lijnzaad, chiazaad, walnoten (alleen ALA - moet nog omgezet worden)",
      solution: [
        "Supplementen: 200-300mg EPA+DHA uit algen per dag",
        "Eet dagelijks: 1 eetlepel gemalen lijnzaad OF 1 handvol walnoten",
        "Extra: chiazaad, hennepzaad in smoothies",
        "Kies algenolie capsules voor directe EPA/DHA"
      ],
      critical: "Algen-omega-3 supplement sterk aanbevolen"
    },
    {
      nutrient: "IJzer",
      icon: Zap,
      risk: "Middel-Hoog",
      why: "Plantaardig ijzer (non-heem) wordt 3-5x minder goed opgenomen",
      deficiencySymptoms: [
        "Extreme vermoeidheid",
        "Bleke huid en nagels",
        "Kortademigheid",
        "Hoofdpijn en duizeligheid",
        "IJskoude handen en voeten"
      ],
      veganSources: "Peulvruchten, volkoren granen, groene bladgroenten, noten, zaden",
      solution: [
        "Eet ijzerrijke voeding MET vitamine C (verdubbelt opname)",
        "Dagelijks: 1-2 porties peulvruchten + fruit met vitamine C",
        "Vermijd thee/koffie tijdens maaltijd (remt opname)",
        "Bij tekort: supplement 15-30mg (niet-heem) met maaltijd",
        "Vrouwen: extra aandacht (menstruatie = ijzerverlies)"
      ],
      critical: "Check ijzerniveaus 1x per jaar, vooral vrouwen"
    },
    {
      nutrient: "Zink",
      icon: Shield,
      risk: "Middel",
      why: "Fytinezuur in plantaardig voedsel remt zinkopname",
      deficiencySymptoms: [
        "Verzwakt immuunsysteem (vaak ziek)",
        "Haaruitval",
        "Langzame wondgenezing",
        "Smaak- en reukverlies",
        "Huidproblemen (acne)"
      ],
      veganSources: "Peulvruchten, noten, zaden, volkoren granen, tempeh",
      solution: [
        "Week peulvruchten/granen 12-24u (verlaagt fytinezuur)",
        "Kiemen van granen/zaden (verhoogt opname)",
        "Dagelijks: handvol noten + 2 eetlepels zaden",
        "Bij tekort: supplement 15-25mg per dag",
        "Vermijd hoge dosis calcium tegelijk (remt zinkopname)"
      ],
      critical: "Verhoog behoefte: eet 50% meer dan aanbevolen"
    },
    {
      nutrient: "Jodium",
      icon: TrendingUp,
      risk: "Middel",
      why: "Weinig plantaardige bronnen, zeewier bevat te veel",
      deficiencySymptoms: [
        "Vergrote schildklier (struma)",
        "Vermoeidheid en traagheid",
        "Gewichtstoename",
        "Droge huid en haaruitval",
        "Concentratieproblemen"
      ],
      veganSources: "Gejodeerd zout, zeewier (voorzichtig - kan te veel zijn!)",
      solution: [
        "Gebruik gejodeerd (niet-raffinaded) zout: 1/2 - 1 theelepel per dag",
        "Zeewier: max 1-2x per week (te veel jodium = ook schadelijk)",
        "Supplementen: 150 mcg per dag (niet meer dan 300 mcg)",
        "Bij schildklier problemen: overleg arts voor dosering"
      ],
      critical: "Balans is cruciaal - niet te weinig, niet te veel"
    },
    {
      nutrient: "Calcium",
      icon: Bone,
      risk: "Laag-Middel",
      why: "Genoeg plantaardige bronnen, maar aandacht nodig",
      deficiencySymptoms: [
        "Osteoporose (broze botten)",
        "Spierkrampen",
        "Tintelingen rond mond",
        "Zwakke nagels",
        "Hartritmestoornissen"
      ],
      veganSources: "Verrijkte plantmelk, tofu (met calcium), groene bladgroenten, amandelen, sesamzaad, vijgen",
      solution: [
        "Dagelijks: 3-4 porties calciumrijk (verrijkte melk, tofu, groenten)",
        "Per dag: 1000-1200mg (3-4 glazen verrijkte sojamelk = voldoende)",
        "Vitamine D helpt calciumopname (zie hierboven)",
        "Bij supplementeren: verdeeld over dag (max 500mg per keer)",
        "Groene groenten: bok choy, broccoli, boerenkool (goed opneembaar)"
      ],
      critical: "Makkelijk te halen met verrijkte producten"
    }
  ];

  const proteinSources = [
    {
      category: "Peulvruchten",
      protein: "Zeer Hoog",
      sources: [
        { food: "Linzen (gekookt)", per100g: "9g eiwit", serving: "200g = 18g", bonus: "IJzer, vezels, foliumzuur" },
        { food: "Kikkererwten", per100g: "9g eiwit", serving: "200g = 18g", bonus: "IJzer, zink, vezels" },
        { food: "Zwarte bonen", per100g: "9g eiwit", serving: "200g = 18g", bonus: "IJzer, magnesium" },
        { food: "Edamame (sojabonen)", per100g: "11g eiwit", serving: "100g = 11g", bonus: "Compleet eiwit, ijzer" }
      ]
    },
    {
      category: "Sojaproducten",
      protein: "Zeer Hoog",
      sources: [
        { food: "Tempeh", per100g: "19g eiwit", serving: "100g = 19g", bonus: "Probiotica, ijzer, calcium" },
        { food: "Tofu (vast)", per100g: "12g eiwit", serving: "150g = 18g", bonus: "Calcium, ijzer, compleet eiwit" },
        { food: "Sojamelk", per100g: "3.5g eiwit", serving: "250ml = 9g", bonus: "Vaak verrijkt B12, D, calcium" },
        { food: "Texturized soja (TVP)", per100g: "50g eiwit", serving: "30g droog = 15g", bonus: "Langhoudbaa, veelzijdig" }
      ]
    },
    {
      category: "Noten & Zaden",
      protein: "Hoog",
      sources: [
        { food: "Amandelen", per100g: "21g eiwit", serving: "30g = 6g", bonus: "Calcium, vitamine E, vezels" },
        { food: "Pindakaas", per100g: "25g eiwit", serving: "2 el (30g) = 8g", bonus: "Gezonde vetten, magnesium" },
        { food: "Chiazaad", per100g: "17g eiwit", serving: "2 el (30g) = 5g", bonus: "Omega-3, vezels, calcium" },
        { food: "Hennepzaad", per100g: "32g eiwit", serving: "3 el (30g) = 10g", bonus: "Compleet eiwit, omega-3" }
      ]
    },
    {
      category: "Granen & Pseudo-granen",
      protein: "Matig-Hoog",
      sources: [
        { food: "Quinoa (gekookt)", per100g: "4.4g eiwit", serving: "200g = 9g", bonus: "Compleet eiwit, ijzer" },
        { food: "Volkoren pasta", per100g: "5g eiwit", serving: "150g = 8g", bonus: "Vezels, B-vitamines" },
        { food: "Volkoren brood", per100g: "9g eiwit", serving: "2 sneetjes = 7g", bonus: "Vezels, ijzer" },
        { food: "Haver", per100g: "13g eiwit", serving: "50g = 6g", bonus: "Beta-glucanen, ijzer" }
      ]
    },
    {
      category: "Groenten (Hoog Eiwit)",
      protein: "Matig",
      sources: [
        { food: "Spinazie (gekookt)", per100g: "3g eiwit", serving: "200g = 6g", bonus: "IJzer, foliumzuur" },
        { food: "Broccoli", per100g: "3g eiwit", serving: "200g = 6g", bonus: "Calcium, vitamine C, K" },
        { food: "Erwten (vers)", per100g: "5g eiwit", serving: "150g = 8g", bonus: "Vezels, vitamine C" },
        { food: "Spruitjes", per100g: "3.5g eiwit", serving: "200g = 7g", bonus: "Vitamine C, K, vezels" }
      ]
    }
  ];

  const completeProteins = {
    title: "Complete vs Incomplete Eiwitten",
    explanation: "Complete eiwitten bevatten alle 9 essentiële aminozuren in voldoende hoeveelheden",
    complete: [
      "Quinoa (pseudo-graan)",
      "Soja (tofu, tempeh, edamame)",
      "Hennepzaad",
      "Spirulina",
      "Amaranth",
      "Boekweit",
      "Chia zaad"
    ],
    incomplete: "Meeste plantaardige bronnen (bonen, granen, noten) zijn incompleet",
    solution: {
      title: "Oplossing: Complementaire Eiwitten Combineren",
      explanation: "Combineer binnen de dag verschillende bronnen voor alle aminozuren",
      combinations: [
        { combo: "Granen + Peulvruchten", examples: "Rijst met bonen, brood met hummus, pasta met linzen" },
        { combo: "Noten/Zaden + Peulvruchten", examples: "Salade met kikkererwten en amandelen, hummus met sesamzaad (tahini)" },
        { combo: "Granen + Noten/Zaden", examples: "Brood met pindakaas, havermout met noten" }
      ],
      myth: "Oude mythe: moet per maaltijd. Nieuwe wetenschap: binnen de dag is voldoende!"
    }
  };

  const dailyMealPlan = {
    title: "Voorbeeld Dagmenu Vegan (Alle Voedingsstoffen)",
    meals: [
      {
        meal: "Ontbijt",
        time: "8:00",
        food: "Havermout met sojamelk, chiazaad, walnoten, banaan en blauwe bessen",
        nutrients: {
          eiwit: "18g",
          highlights: "Omega-3 (ALA), ijzer, B12 (verrijkte sojamelk), calcium"
        },
        supplement: "Vitamine B12 (50mcg) + Vitamine D (25mcg)"
      },
      {
        meal: "Lunch",
        time: "12:30",
        food: "Volkoren wrap met hummus, gebakken tempeh, avocado, spinazie, tomaat",
        nutrients: {
          eiwit: "24g",
          highlights: "Compleet eiwit (tempeh), ijzer + vit C, calcium, zink"
        },
        supplement: "-"
      },
      {
        meal: "Snack",
        time: "15:30",
        food: "Handvol amandelen (30g) + sinaasappel",
        nutrients: {
          eiwit: "6g",
          highlights: "Calcium (amandelen), vitamine C (sinaasappel helpt ijzeropname)"
        },
        supplement: "-"
      },
      {
        meal: "Diner",
        time: "18:30",
        food: "Tofu roerbak met broccoli, paprika, rode kool, cashewnoten en quinoa",
        nutrients: {
          eiwit: "28g",
          highlights: "Calcium (tofu + broccoli), compleet eiwit (quinoa), ijzer, zink"
        },
        supplement: "Algen omega-3 (250mg EPA+DHA)"
      },
      {
        meal: "Avondsnack",
        time: "21:00",
        food: "Sojajoghurt met lijnzaad en frambozen",
        nutrients: {
          eiwit: "10g",
          highlights: "Omega-3 (lijnzaad), calcium, probiotica"
        },
        supplement: "-"
      }
    ],
    totals: {
      protein: "86g eiwit (voor 70kg persoon = 1.2g/kg ✓)",
      supplements: "B12: 50mcg | D: 25mcg | Omega-3 algen: 250mg EPA+DHA",
      coverage: "Alle kritieke voedingsstoffen gedekt via voeding + supplements"
    }
  };

  const supplements = {
    essential: [
      {
        supplement: "Vitamine B12",
        dosage: "50-100 mcg dagelijks OF 1000-2000 mcg 2x per week",
        form: "Methylcobalamine of cyanocobalamine (beide goed)",
        timing: "Met maaltijd voor betere opname",
        cost: "€5-10 per jaar",
        critical: "VERPLICHT - geen uitzondering!"
      },
      {
        supplement: "Vitamine D3 (vegan uit korstmos)",
        dosage: "20-25 mcg (800-1000 IE) dagelijks, winter: 50 mcg",
        form: "D3 > D2 (beter opneembaar)",
        timing: "Met vetrijke maaltijd",
        cost: "€10-15 per jaar",
        critical: "Sterk aanbevolen, vooral najaar/winter"
      },
      {
        supplement: "Omega-3 algenolie (EPA+DHA)",
        dosage: "200-300mg EPA+DHA per dag",
        form: "Algenolie capsules",
        timing: "Met maaltijd",
        cost: "€15-25 per jaar",
        critical: "Sterk aanbevolen voor hart en hersenen"
      }
    ],
    conditional: [
      {
        supplement: "IJzer",
        when: "Bij aangetoond tekort (bloedtest)",
        dosage: "15-30mg non-heem ijzer met vitamine C",
        note: "Niet preventief! Kan schadelijk zijn bij teveel",
        checkup: "Bloedtest 1x per jaar"
      },
      {
        supplement: "Zink",
        when: "Bij tekort of verhoogde behoefte",
        dosage: "15-25mg per dag",
        note: "Niet tegelijk met calcium of ijzer (remt opname)",
        checkup: "Bij klachten (immuun, huid, haar)"
      },
      {
        supplement: "Jodium",
        when: "Als je geen gejodeerd zout gebruikt",
        dosage: "150 mcg (max 300 mcg)",
        note: "Zeewier heeft vaak TE VEEL - voorzichtig!",
        checkup: "Bij schildklier klachten"
      },
      {
        supplement: "Calcium",
        when: "Bij te weinig verrijkte producten",
        dosage: "500mg 2x per dag (max 500mg per keer)",
        note: "Vaak niet nodig met verrijkte sojamelk",
        checkup: "Botdichtheid scan bij risico"
      }
    ]
  };

  const commonMistakes = [
    {
      mistake: "Alleen B12 Supplementeren",
      consequence: "Tekorten aan D, omega-3, ijzer, zink blijven onopgemerkt",
      correct: "Minimaal: B12 + D + omega-3 algen. Check bloedwaarden jaarlijks",
      solution: "Neem complete vegan multivitamine of individuele supplements"
    },
    {
      mistake: "Denken Dat Plantaardig = Automatisch Gezond",
      consequence: "Bewerkte vegan producten (burgers, kaas) kunnen ongezond zijn",
      correct: "Focus op whole foods: peulvruchten, granen, groenten, fruit, noten",
      solution: "80% onbewerkt plantaardig, 20% bewerkt/gemak mag"
    },
    {
      mistake: "Te Weinig Eiwit Eten",
      consequence: "Spierverlies, zwakte, constant honger, slecht herstel",
      correct: "Minimaal 1.2-1.6g eiwit per kg lichaamsgewicht",
      solution: "Elke maaltijd 20-30g eiwit: tofu/tempeh/peulvruchten/noten"
    },
    {
      mistake: "IJzer Zonder Vitamine C",
      consequence: "Opname plantaardig ijzer blijft 3-5x lager dan mogelijk",
      correct: "Eet ijzerrijk MET vitamine C (verdubbelt opname)",
      solution: "Spinazie met citroen, linzen met tomaat, volkoren met sinaasappelsap"
    },
    {
      mistake: "Geen Bloedwaarden Checken",
      consequence: "Tekorten pas opmerken bij ernstige symptomen (te laat)",
      correct: "Check minimaal 1x per jaar: B12, D, ijzer, foliumzuur",
      solution: "Plan jaarlijkse check-up, vraag uitgebreide bloedwaarden aan huisarts"
    },
    {
      mistake: "Zeewier Onbeperkt Eten Voor Jodium",
      consequence: "TE VEEL jodium = schildklier problemen",
      correct: "Max 1-2x per week kleine hoeveelheid (5-10g)",
      solution: "Gebruik gejodeerd zout als primaire bron (veiliger)"
    }
  ];

  const veganAthletes = {
    title: "Vegan & Sporten: Extra Aandacht",
    needs: [
      {
        nutrient: "Eiwit",
        standard: "1.2-1.6g/kg",
        athlete: "1.6-2.2g/kg",
        why: "Plant eiwit wordt iets minder goed opgenomen",
        solution: "Verhoog inname 10-20%, focus op complete eiwitten (soja, quinoa, hennep)"
      },
      {
        nutrient: "Creatine",
        standard: "Lichaam maakt zelf aan",
        athlete: "3-5g supplement per dag",
        why: "Vleeseters krijgen 1-2g via voeding, vegans maken dit niet goed genoeg aan",
        solution: "Creatine monohydraat supplement (bewezen effectief +5-15% kracht)"
      },
      {
        nutrient: "IJzer",
        standard: "Check 1x per jaar",
        athlete: "Check 2-3x per jaar",
        why: "Intensief sporten verhoogt ijzerverlies (zweet, impact)",
        solution: "Extra aandacht voor ijzerrijke voeding + vitamine C, supplement indien nodig"
      },
      {
        nutrient: "Omega-3",
        standard: "200-300mg EPA+DHA",
        athlete: "500-1000mg EPA+DHA",
        why: "Ontstekingsremmend, herstel, cardiovasculair",
        solution: "Hogere dosis algenolie, of 2x daags standaard dosis"
      }
    ],
    tips: [
      "Timing eiwit: binnen 30-60 min na training (soja shake + banaan perfect)",
      "Combineer altijd verschillende eiwitbronnen binnen de dag",
      "BCAA supplementen meestal niet nodig bij voldoende eiwit (1.6g+/kg)",
      "Extra calorieën nodig: noten, pindakaas, avocado, smoothies"
    ]
  };

  const transitionTips = {
    gradual: {
      title: "Geleidelijke Overgang (Aanbevolen)",
      timeline: "3-6 maanden",
      steps: [
        { week: "Week 1-4", action: "Start B12 supplement + vervang helft zuivel door plantaardig" },
        { week: "Week 5-8", action: "Voeg D + omega-3 toe, vervang alle zuivel" },
        { week: "Week 9-12", action: "Vervang vlees/vis door peulvruchten/tofu/tempeh" },
        { week: "Week 13+", action: "Laatste dierlijke producten vervangen, check bloedwaarden" }
      ],
      benefit: "Lichaam went geleidelijk, minder kans op tekorten, duurzamer volhouden"
    },
    immediate: {
      title: "Direct Overstappen",
      timeline: "Vanaf dag 1",
      critical: [
        "START METEEN met B12 supplement (verplicht!)",
        "Binnen week 1: ook D en omega-3 toevoegen",
        "Plan maaltijden vooraf (voorkom improviseren zonder eiwit)",
        "Check bloedwaarden na 3 maanden (B12, D, ijzer, foliumzuur)"
      ],
      benefit: "Snelle overgang, duidelijke commitment",
      risk: "Hogere kans op tekorten eerste maanden als je niet plant"
    },
    checkpoints: [
      { timing: "Na 1 maand", check: "Energieniveau, spijsvertering, supplementen routine" },
      { timing: "Na 3 maanden", check: "Bloedwaarden (B12, D, ijzer), gewicht stabiel?" },
      { timing: "Na 6 maanden", check: "Uitgebreide bloedtest, bijstellen indien nodig" },
      { timing: "Daarna", check: "Jaarlijkse controle bloedwaarden" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5" />
              <span className="font-medium">Vegan Voedingsgids</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Veganistisch en Alle Voedingsstoffen Binnenkrijgen
            </h1>
            <p className="text-xl text-green-50 mb-8">
              Complete gids: kritieke voedingsstoffen, supplementen, plantaardig eiwit en gezonde vegan maaltijden
            </p>
          </div>
        </header>

        {/* Quick Facts */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-100 border-l-4 border-green-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-green-600" />
                De Harde Feiten
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Verplicht Supplementeren:</h3>
                  <p className="text-3xl font-bold text-green-700">3</p>
                  <p className="text-sm text-gray-600">B12 + Vitamine D + Omega-3 (EPA/DHA)</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Eiwit Per Dag:</h3>
                  <p className="text-3xl font-bold text-green-700">1.2-1.6g</p>
                  <p className="text-sm text-gray-600">per kg lichaamsgewicht (iets meer dan omnivoor)</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Check Bloedwaarden:</h3>
                  <p className="text-3xl font-bold text-green-700">1-2x</p>
                  <p className="text-sm text-gray-600">per jaar (B12, D, ijzer, foliumzuur)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Nutrients */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              7 Kritieke Voedingsstoffen Bij Veganistisch Eten
            </h2>

            <div className="space-y-6">
              {criticalNutrients.map((item, idx) => (
                <div key={idx} className={`rounded-xl p-6 shadow-md border-l-4 ${
                  item.risk === 'Zeer Hoog' ? 'bg-red-50 border-red-600' :
                  item.risk === 'Hoog' ? 'bg-orange-50 border-orange-600' :
                  'bg-yellow-50 border-yellow-600'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`rounded-full p-3 ${
                      item.risk === 'Zeer Hoog' ? 'bg-red-100' :
                      item.risk === 'Hoog' ? 'bg-orange-100' :
                      'bg-yellow-100'
                    }`}>
                      <item.icon className={`w-8 h-8 ${
                        item.risk === 'Zeer Hoog' ? 'text-red-600' :
                        item.risk === 'Hoog' ? 'text-orange-600' :
                        'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{item.nutrient}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          item.risk === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                          item.risk === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          Risico: {item.risk}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4"><strong>Waarom risico:</strong> {item.why}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold mb-2">Tekort symptomen:</h4>
                          <ul className="space-y-1">
                            {item.deficiencySymptoms.map((symptom, sIdx) => (
                              <li key={sIdx} className="text-sm text-gray-700">• {symptom}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Vegan bronnen:</h4>
                          <p className="text-sm text-gray-700 mb-3">{item.veganSources}</p>
                          <h4 className="font-semibold mb-2">Oplossing:</h4>
                          <ul className="space-y-1">
                            {item.solution.map((sol, solIdx) => (
                              <li key={solIdx} className="flex gap-2 text-sm text-green-700">
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>{sol}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`p-3 rounded font-semibold ${
                        item.risk === 'Zeer Hoog' ? 'bg-red-100 text-red-800' :
                        item.risk === 'Hoog' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        ⚠️ {item.critical}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Protein Sources */}
        <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Plantaardige Eiwitbronnen: Complete Gids
            </h2>

            <div className="space-y-6">
              {proteinSources.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">{category.category}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.sources.map((source, sIdx) => (
                      <div key={sIdx} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <h4 className="font-bold mb-2">{source.food}</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                          <span>Per 100g: <strong className="text-blue-700">{source.per100g}</strong></span>
                          <span>Portie: <strong className="text-blue-700">{source.serving}</strong></span>
                        </div>
                        <p className="text-xs bg-green-50 p-2 rounded text-green-800">
                          ✅ {source.bonus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Proteins */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {completeProteins.title}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              {completeProteins.explanation}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-xl p-6 shadow-md border-2 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-800">✅ Complete Plantaardige Eiwitten:</h3>
                <ul className="space-y-2">
                  {completeProteins.complete.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 shadow-md border-2 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 text-yellow-800">⚠️ Incomplete Eiwitten:</h3>
                <p className="mb-4">{completeProteins.incomplete}</p>
                <div className="bg-yellow-100 p-4 rounded">
                  <p className="font-semibold mb-2">{completeProteins.solution.title}</p>
                  <p className="text-sm mb-3">{completeProteins.solution.explanation}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4">Smart Combinaties:</h4>
              <div className="space-y-3">
                {completeProteins.solution.combinations.map((combo, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-blue-800 mb-1">{combo.combo}</p>
                    <p className="text-sm text-gray-600">{combo.examples}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-100 p-4 rounded mt-4">
                <p className="text-sm"><strong>💡 Moderne wetenschap:</strong> {completeProteins.solution.myth}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Meal Plan */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {dailyMealPlan.title}
            </h2>

            <div className="space-y-4 mb-8">
              {dailyMealPlan.meals.map((meal, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs">{meal.time}</span>
                      <span className="text-sm font-bold">{meal.meal}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-2">{meal.food}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-purple-50 p-3 rounded">
                          <p className="text-sm"><strong>Eiwit:</strong> {meal.nutrients.eiwit}</p>
                          <p className="text-sm text-purple-700">{meal.nutrients.highlights}</p>
                        </div>
                        {meal.supplement !== '-' && (
                          <div className="bg-green-50 p-3 rounded">
                            <p className="text-sm"><strong>💊 Supplement:</strong></p>
                            <p className="text-sm text-green-700">{meal.supplement}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
              <h3 className="font-bold text-xl mb-4">Dag Totalen:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Eiwit:</p>
                  <p className="font-bold text-green-700">{dailyMealPlan.totals.protein}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Supplementen:</p>
                  <p className="font-bold text-green-700">{dailyMealPlan.totals.supplements}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dekking:</p>
                  <p className="font-bold text-green-700">{dailyMealPlan.totals.coverage}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supplements */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Vegan Supplementen: Essentieel vs Optioneel
            </h2>

            {/* Essential */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-red-700">🔴 Essentieel (Verplicht)</h3>
              <div className="space-y-4">
                {supplements.essential.map((supp, idx) => (
                  <div key={idx} className="bg-red-50 rounded-xl p-6 shadow-md border-l-4 border-red-600">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{supp.supplement}</h4>
                        <p className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded w-fit">{supp.critical}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Dosering:</p>
                        <p className="text-sm font-semibold">{supp.dosage}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Vorm:</p>
                        <p className="text-sm">{supp.form}</p>
                        <p className="text-sm text-gray-600 mt-1">Timing:</p>
                        <p className="text-sm">{supp.timing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Kosten:</p>
                        <p className="text-sm font-bold text-green-700">{supp.cost}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditional */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-700">🟡 Optioneel (Bij Tekort)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {supplements.conditional.map((supp, idx) => (
                  <div key={idx} className="bg-yellow-50 rounded-xl p-6 shadow-md border border-yellow-500">
                    <h4 className="font-bold text-lg mb-2">{supp.supplement}</h4>
                    <p className="text-sm mb-2"><strong>Wanneer:</strong> {supp.when}</p>
                    <p className="text-sm mb-2"><strong>Dosering:</strong> {supp.dosage}</p>
                    <p className="text-sm bg-yellow-100 p-2 rounded mb-2">⚠️ {supp.note}</p>
                    <p className="text-xs text-gray-600">Check-up: {supp.checkup}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 bg-red-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij Veganistisch Eten
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Wil Je Persoonlijk Vegan Voedingsadvies?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Vind een diëtist gespecialiseerd in plantaardige voeding bij jou in de buurt
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Vind Een Vegan Diëtist
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Veganistisch eten kan gezond zijn, maar vereist <strong>bewuste aandacht voor kritieke voedingsstoffen</strong>. B12, vitamine D en omega-3 (EPA/DHA) supplementeren is verplicht - deze zijn niet of nauwelijks in plantaardige voeding aanwezig. IJzer, zink en jodium vereisen extra aandacht door lagere opname of beperkte bronnen.
              </p>
              <p>
                <strong>Eiwit is geen probleem</strong> als je gevarieerd eet met peulvruchten, soja, noten en volkoren granen. Streef naar 1.2-1.6g per kg lichaamsgewicht en combineer verschillende bronnen binnen de dag. Check jaarlijks je bloedwaarden (minimaal B12, D, ijzer, foliumzuur) om tekorten tijdig op te sporen.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Vegan Succes Checklist:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Verplicht supplementeren:</strong> B12 (50-100mcg/dag) + D (25mcg) + Omega-3 algen (250mg EPA/DHA)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Eiwit elke maaltijd:</strong> 20-30g uit tofu/tempeh/peulvruchten/noten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>IJzer met vitamine C:</strong> Spinazie met citroen, linzen met tomaat</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Check bloedwaarden:</strong> 1-2x per jaar (B12, D, ijzer, foliumzuur)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Focus whole foods:</strong> 80% onbewerkt plantaardig voor optimale gezondheid</span>
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
