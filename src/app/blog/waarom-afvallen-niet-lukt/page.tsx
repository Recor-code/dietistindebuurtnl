import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, Brain, Heart, TrendingDown, TrendingUp, AlertCircle, Coffee, Moon, Users, Target, CheckCircle2, Lightbulb, Calendar, Search, Clock, Award } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: '10 Redenen Waarom Afvallen Niet Lukt (En Hoe Een Dietist Kan Helpen) | 2025',
  description: 'Ontdek waarom 95% van de diëten faalt en hoe een dietist jou kan helpen met duurzaam gewichtsverlies. Biologische, psychologische en praktische obstakels uitgelegd.',
  keywords: [
    'waarom lukt afvallen niet',
    'afvallen mislukt',
    'dieet faalt',
    'gewichtsverlies problemen',
    'dietist afvallen',
    'duurzaam afvallen',
    'jojo effect',
    'metabolisme afvallen',
    'emotioneel eten',
    'afvallen hulp'
  ],
  openGraph: {
    title: '10 Redenen Waarom Afvallen Niet Lukt (En Hoe Een Dietist Kan Helpen)',
    description: 'Ontdek waarom 95% van de diëten faalt en hoe een dietist jou kan helpen met duurzaam gewichtsverlies.',
    images: ['/img/blog/waarom-afvallen-niet-lukt/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 Redenen Waarom Afvallen Niet Lukt (En Hoe Een Dietist Kan Helpen)',
  description: 'Uitgebreide analyse van waarom gewichtsverlies zo moeilijk is en hoe professionele begeleiding het verschil maakt.',
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
    '@id': 'https://dietistindebuurt.nl/blog/waarom-afvallen-niet-lukt'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/waarom-afvallen-niet-lukt/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/waarom-afvallen-niet-lukt',
  inLanguage: 'nl-NL'
};

export default function WaaromAfvallenNietLuktPage() {
  const failureReasons = [
    {
      id: 1,
      title: "Je Lichaam Werkt Tegen Je: Biologische Adaptatie",
      icon: Brain,
      severity: "Zeer Hoog",
      description: "Je lichaam ziet gewichtsverlies als bedreiging en activeert overlevingsmechanismen",
      details: [
        "Honger hormonen (ghreline) stijgen met 20-30% tijdens dieet",
        "Verzadigingshormoon (leptine) daalt, waardoor je nooit echt vol voelt",
        "Metabolisme vertraagt met 10-25% om energie te besparen",
        "Lichaam verhoogt efficiëntie: zelfde activiteit kost minder calorieën",
        "Set-point theorie: je lichaam heeft een 'voorkeur' gewicht"
      ],
      dietistHelp: [
        "Berekent realistisch calorietekort dat metabolisme minimaal beïnvloedt",
        "Plant 'diet breaks' om metabole adaptatie te verminderen",
        "Monitort hormoonbalans via bloedwaarden en symptomen",
        "Past strategie aan wanneer gewichtsverlies stagneert",
        "Leert omgaan met honger vs eetlust"
      ],
      scientificEvidence: "Studies tonen dat 95% van diëters binnen 5 jaar weer op oorspronkelijk gewicht of hoger zit (Mann et al., 2007)"
    },
    {
      id: 2,
      title: "Emotioneel Eten: Voedsel Als Troost",
      icon: Heart,
      severity: "Hoog",
      description: "Eten uit verveling, stress, verdriet of gewoonte in plaats van echte honger",
      details: [
        "Stress verhoogt cortisol → meer trek in suiker en vet",
        "Eten geeft tijdelijk dopamine boost (beloningscentrum)",
        "Geleerd gedrag sinds kindertijd: snoep als troost",
        "Eten om emoties te onderdrukken of vermijden",
        "80% van overgewicht heeft emotionele component"
      ],
      triggers: [
        "Stress op werk of thuis",
        "Verveling, vooral 's avonds",
        "Verdriet of eenzaamheid",
        "Sociale situaties (feestjes, etentjes)",
        "Slaaptekort en vermoeidheid"
      ],
      dietistHelp: [
        "Helpt onderscheid maken tussen honger en emotie",
        "Leert alternatieve coping strategieën (wandelen, journalen, ademhaling)",
        "Gebruikt voedingsdagboek met gevoelens en situaties",
        "Werkt samen met psycholoog bij ernstige eetproblematiek",
        "Mindful eating technieken: bewust en langzaam eten"
      ],
      practicalTip: "Vóór eten: stel jezelf vraag 'Ben ik echt fysiek honger of voel ik iets anders?'"
    },
    {
      id: 3,
      title: "Te Strenge Diëten: All-or-Nothing Mentaliteit",
      icon: AlertCircle,
      severity: "Hoog",
      description: "Extreme regels die onmogelijk vol te houden zijn op lange termijn",
      details: [
        "Verbieden van voedsel maakt het juist aantrekkelijker",
        "Een 'foutje' leidt tot opgeven: 'Nu heb ik het toch verpest'",
        "Te weinig eten → extreme honger → binge eating",
        "Sociale isolatie: kan niet meer normaal mee-eten",
        "Crash diëten (< 1200 kcal/dag) zijn niet vol te houden"
      ],
      commonMistakes: [
        "Koolhydraten volledig schrappen",
        "Na 18:00 uur niet meer eten",
        "Alleen rauw eten of sapjes drinken",
        "Minder dan 1000 calorieën per dag",
        "Iedere dag exact hetzelfde eten",
        "Alle 'ongezonde' snacks verbieden"
      ],
      consequences: [
        "Nutriënt tekorten (vitamines, mineralen)",
        "Verlies van spiermassa",
        "Vermoeidheid en concentratieproblemen",
        "Verstoorde hormoonbalans",
        "Jojo-effect: snel weer aankomen"
      ],
      dietistHelp: [
        "Geen verboden, wel portiebewustzijn",
        "80/20 regel: 80% gezond, 20% flexibiliteit",
        "Leert genieten zonder schuldgevoel",
        "Realistische doelen: 0,5-1 kg per week",
        "Voedingsplan dat past bij jouw leven en voorkeuren"
      ]
    },
    {
      id: 4,
      title: "Onderschatten van Calorie-Inname",
      icon: Coffee,
      severity: "Zeer Hoog",
      description: "Mensen schatten hun calorie-inname 30-50% te laag in",
      details: [
        "Vergeten snacks en drinken mee te tellen",
        "Porties zijn groter dan je denkt",
        "'Gezonde' producten hebben ook calorieën",
        "Proeven tijdens koken telt ook mee",
        "Weekend eetpatroon verschilt sterk van weekdagen"
      ],
      hiddenCalories: [
        {
          item: "Handvol noten",
          estimated: "50 kcal",
          actual: "180-200 kcal",
          difference: "+260%"
        },
        {
          item: "Salade dressing",
          estimated: "20 kcal",
          actual: "120-150 kcal",
          difference: "+600%"
        },
        {
          item: "Frappuccino",
          estimated: "150 kcal",
          actual: "400-500 kcal",
          difference: "+233%"
        },
        {
          item: "Gezonde smoothie",
          estimated: "100 kcal",
          actual: "300-400 kcal",
          difference: "+300%"
        },
        {
          item: "Glas wijn (avond)",
          estimated: "80 kcal",
          actual: "120 kcal x 2-3 = 240-360 kcal",
          difference: "+200-300%"
        }
      ],
      dietistHelp: [
        "Leert nauwkeurig bijhouden (apps, wegen)",
        "Bespreekt eerlijk en zonder oordeel je eetpatroon",
        "Toont echte portiegrootte vs wat je denkt",
        "Berekent jouw dagelijkse caloriebehoefte precies",
        "Helpt verborgen calorieën identificeren"
      ],
      shockingFact: "Studies tonen: zelfrapportage is gemiddeld 47% te laag (Lichtman et al., NEJM)"
    },
    {
      id: 5,
      title: "Overschatten van Calorie-Verbranding",
      icon: TrendingDown,
      severity: "Hoog",
      description: "Sport verbrandt minder calorieën dan je denkt en kan honger verhogen",
      details: [
        "30 min hardlopen = ~300 kcal (1 croissant)",
        "Fitness apps en apparaten overschatten vaak 20-30%",
        "Compensatie gedrag: extra eten na sporten",
        "NEAT (Non-Exercise Activity) daalt: je beweegt minder overdag",
        "'Earned it' mentaliteit: ik heb gesport dus mag dit"
      ],
      realityCheck: [
        {
          activity: "30 min joggen (8 km/u)",
          burned: "300 kcal",
          equals: "1 croissant of 2 sneetjes brood met pindakaas"
        },
        {
          activity: "1 uur fietsen (matig)",
          burned: "400 kcal",
          equals: "1 burger menu zonder friet"
        },
        {
          activity: "45 min fitness",
          burned: "250 kcal",
          equals: "1 reep chocolade (100g)"
        },
        {
          activity: "1 uur zwemmen",
          burned: "500 kcal",
          equals: "1 pizza margherita (half)"
        }
      ],
      compensationExamples: [
        "Na sportschool extra groot ontbijt → +400 kcal",
        "Energie drank voor workout → +150 kcal",
        "Proteïne shake na training → +200 kcal",
        "Avond snack omdat je 'verdiend hebt' → +300 kcal",
        "Totaal: +1050 kcal vs 300 kcal verbrand = +750 kcal surplus"
      ],
      dietistHelp: [
        "Realistische verwachtingen over sport en gewichtsverlies",
        "Voedingsplan dat rekening houdt met trainingen",
        "Pre/post workout voeding optimaliseren",
        "Focus op voeding (80%) en beweging (20%) voor afvallen",
        "Sporten voor gezondheid, niet alleen voor afvallen"
      ]
    },
    {
      id: 6,
      title: "Slaaptekort: De Vergeten Factor",
      icon: Moon,
      severity: "Middel-Hoog",
      description: "Te weinig slaap verstoort honger hormonen en verhoogt calorie-inname",
      details: [
        "< 7 uur slaap verhoogt ghreline (hongerhormoon) met 15%",
        "Leptine (verzadigingshormoon) daalt met 15%",
        "Volgende dag 300-400 kcal meer eten (vooral suiker/vet)",
        "Verminderde wilskracht en impulscontrole",
        "Cortisol (stresshormoon) stijgt → buikvet opslag"
      ],
      sleepStats: [
        "Mensen met < 6 uur slaap hebben 55% meer kans op obesitas",
        "Elk uur slaap minder = gemiddeld 0,35 BMI punt hoger",
        "Slaaptekort verhoogt trek in fast-food met 33%",
        "Zelfcontrole daalt met 20% na slecht geslapen nacht"
      ],
      circleOfFailure: [
        "1. Weinig slapen",
        "2. Meer honger + trek in ongezond",
        "3. Meer eten + gewicht stijgt",
        "4. Minder energie voor beweging",
        "5. Stress over gewicht",
        "6. Nog slechter slapen",
        "→ Terug naar 1"
      ],
      dietistHelp: [
        "Beoordeelt slaap als onderdeel van intake",
        "Geeft voedingsadvies voor betere slaap",
        "Adviseert over timing van maaltijden",
        "Verwijst door naar slaapspecialist indien nodig",
        "Plant realistische doelen rekening houdend met energie"
      ],
      sleepTips: [
        "7-9 uur slaap per nacht",
        "Vaste bedtijden, ook in weekend",
        "Geen cafeïne na 14:00 uur",
        "Licht avondmaal, 2-3 uur voor slapen",
        "Donkere, koele slaapkamer (16-18°C)"
      ]
    },
    {
      id: 7,
      title: "Sociale Druk en Omgeving",
      icon: Users,
      severity: "Middel",
      description: "Je omgeving en sociale kring hebben enorme invloed op je eetgedrag",
      details: [
        "Je eet gemiddeld evenveel als de persoon tegenover je",
        "Familie/vrienden die aandringen: 'Eén keer kan geen kwaad'",
        "Feestjes, verjaardagen, etentjes = caloriebommen",
        "Junkfood thuis = 5x meer kans om het te eten",
        "Partner/huisgenoten die anders eten"
      ],
      socialChallenges: [
        {
          situation: "Verjaardagsfeest",
          challenge: "Taart + borrelhapjes + alcohol",
          calories: "1000-1500 kcal extra",
          frequency: "1-2x per maand"
        },
        {
          situation: "Etentje met vrienden",
          challenge: "Restaurant porties + wijn + dessert",
          calories: "1500-2500 kcal",
          frequency: "2-4x per maand"
        },
        {
          situation: "Borrelen na werk",
          challenge: "Alcohol + bitterballen + nootjes",
          calories: "800-1200 kcal",
          frequency: "Wekelijks"
        },
        {
          situation: "Familie diner zondag",
          challenge: "Grote porties + toetje + gezelligheid",
          calories: "1000-1500 kcal extra",
          frequency: "Wekelijks"
        }
      ],
      environmentFactors: [
        "Grote borden → automatisch meer opscheppen",
        "Zichtbaar snoepgoed → 300% meer consumptie",
        "Eten uit pakket/zak → 50% meer inname",
        "TV eten → 25% meer calorieën",
        "Eten met anderen → 35% grotere porties"
      ],
      dietistHelp: [
        "Strategieën voor sociale situaties ontwikkelen",
        "Leert 'nee' zeggen zonder schuldgevoel",
        "Bespreekt omgeving optimaliseren (junkfood weg)",
        "Partner/familie betrekken in traject",
        "Vooruit plannen voor feestjes en etentjes"
      ]
    },
    {
      id: 8,
      title: "Onrealistische Verwachtingen",
      icon: Target,
      severity: "Middel",
      description: "Teleurgestelde verwachtingen leiden tot opgeven",
      details: [
        "'Ik wil 20 kilo kwijt in 2 maanden' (onhaalbaar)",
        "Focus alleen op cijfer weegschaal",
        "Vergelijken met unrealistische social media transformaties",
        "Niet lineair verloop: gewicht schommelt",
        "Niet vieren van kleine overwinningen"
      ],
      unrealisticGoals: [
        "10 kg in 1 maand (-35.000 kcal/week tekort!)",
        "Iedere dag kilo verliezen",
        "Platte buik in 2 weken",
        "Van maat 46 naar 36 in 3 maanden",
        "Zonder moeite en verandering afvallen"
      ],
      realisticExpectations: [
        {
          timeframe: "Week 1-2",
          loss: "1-2 kg",
          note: "Veel vocht, lijkt snel"
        },
        {
          timeframe: "Week 3-8",
          loss: "0,5-1 kg/week",
          note: "Gezond tempo, duurzaam"
        },
        {
          timeframe: "Maand 3-6",
          loss: "0,3-0,7 kg/week",
          note: "Vertragend maar goed"
        },
        {
          timeframe: "Plateau",
          loss: "0 kg gedurende 2-3 weken",
          note: "Normaal, lichaam past aan"
        }
      ],
      nonScaleVictories: [
        "Meer energie en betere focus",
        "Kleding zit losser (lichaam vermagert)",
        "Betere slaap",
        "Minder pijn in gewrichten",
        "Betere bloedwaarden",
        "Meer conditie (trap lopen makkelijker)",
        "Beter humeur en zelfvertrouwen",
        "Betere huidconditie"
      ],
      dietistHelp: [
        "Stelt realistische en haalbare doelen",
        "Meet meer dan alleen gewicht (omtrek, vetpercentage)",
        "Viert non-scale victories met jou",
        "Bereidt voor op plateaus en schommelingen",
        "Houdt focus op lange termijn gezondheid"
      ]
    },
    {
      id: 9,
      title: "Stress en Cortisol",
      icon: Brain,
      severity: "Middel-Hoog",
      description: "Chronische stress blokkeert gewichtsverlies door hormonale veranderingen",
      details: [
        "Cortisol (stresshormoon) bevordert vetopslag, vooral buikvet",
        "Stress verhoogt trek in comfort food (suiker, vet, zout)",
        "Vermindert wilskracht en zelfcontrole",
        "Verstoort slaap → extra gewichtstoename",
        "Ontstekingen in lichaam belemmeren vetstofwisseling"
      ],
      stressSources: [
        "Werk: deadlines, lange dagen, slechte sfeer",
        "Financiën: geldzorgen, schulden",
        "Relaties: ruzie, scheiding, eenzaamheid",
        "Gezondheid: chronische pijn, ziekte",
        "Combinatie: werk + kinderen + huishouden"
      ],
      cortisolEffects: [
        {
          effect: "Vetopslag",
          mechanism: "Cortisol stuurt vet naar buik (visceraal vet)",
          result: "Gevaarlijk buikvet neemt toe"
        },
        {
          effect: "Honger",
          mechanism: "Verhoogt neuropeptide Y (trigger honger)",
          result: "Constante trek, vooral in snelle energie"
        },
        {
          effect: "Spierabbouw",
          mechanism: "Cortisol breekt spierweefsel af voor energie",
          result: "Metabolisme daalt verder"
        },
        {
          effect: "Insuline resistentie",
          mechanism: "Cellen reageren minder op insuline",
          result: "Meer vetopslag, diabetes risico"
        }
      ],
      viciousCircle: [
        "Stress → ongezond eten → gewichtstoename",
        "Gewichtstoename → stress over lichaam",
        "Stress over lichaam → nog meer eten",
        "Zelfbeeld daalt → depressieve gevoelens",
        "Depressie → nog meer stress en eten"
      ],
      dietistHelp: [
        "Helpt stressmanagement via voeding",
        "Regelmatige maaltijden stabiliseren cortisol",
        "Adviseert voedingsmiddelen die stress verminderen",
        "Refereert naar psycholoog/coach bij ernstige stress",
        "Leert gezonde coping strategieën i.p.v. eten"
      ]
    },
    {
      id: 10,
      title: "Gebrek aan Structuur en Planning",
      icon: Calendar,
      severity: "Middel",
      description: "Zonder plan grijp je steeds naar gemakkelijke (ongezonde) opties",
      details: [
        "'Wat eten we vanavond?' → besluiteloosheid → afhaal",
        "Geen gezonde snacks klaar → grijpen naar koekjes",
        "Lege koelkast → noodoplossing fast food",
        "Geen tijd om te koken → convenience food",
        "Weekenden zonder structuur → extra calorieën"
      ],
      planningFailures: [
        {
          scenario: "Drukke werkdag zonder lunch mee",
          result: "Broodje kroket bij cafetaria (800 kcal)",
          alternative: "Voorbereide salade box (400 kcal)",
          difference: "+400 kcal"
        },
        {
          scenario: "Avond laat thuis, te moe om te koken",
          result: "Pizza bestellen (1200 kcal)",
          alternative: "Voorbereide maaltijd opwarmen (600 kcal)",
          difference: "+600 kcal"
        },
        {
          scenario: "Weekend zonder plan",
          result: "Brunchen + snacken + uiteten (3000 kcal/dag)",
          alternative: "Geplande gezonde maaltijden (2000 kcal/dag)",
          difference: "+2000 kcal over weekend"
        }
      ],
      timeExcuses: [
        "'Geen tijd om gezond te koken' → maar wel 2 uur Netflix",
        "'Te druk voor meal prep' → maar wel 1 uur scrollen",
        "'Geen energie om boodschappen te doen' → maar wel naar drive-through",
        "Realiteit: prioriteit en organisatie, niet tijd"
      ],
      dietistHelp: [
        "Maakt haalbaar weekmenu met boodschappenlijst",
        "Leert efficiënte meal prep strategieën",
        "Simpele, snelle recepten binnen 20 minuten",
        "Gezonde convenience opties en kant-en-klaar maaltijden",
        "Structuur voor weekdagen én weekenden"
      ],
      mealPrepTips: [
        "Zondag 2 uur meal prep = hele week geregeld",
        "Dubbelportie koken = lunch volgende dag",
        "Groente voorsnijden en bewaren",
        "Gezonde snacks portioneren in bakjes",
        "Smoothie zakjes voorbereiden (vriezer)"
      ]
    }
  ];

  const dietistApproach = {
    intake: {
      title: "Uitgebreide Intake (60-90 min)",
      steps: [
        "Medische geschiedenis en huidige gezondheid",
        "Eetpatroon analyse (wat, wanneer, waarom)",
        "Leefstijl: werk, stress, slaap, beweging",
        "Eerdere dieet pogingen en waarom ze faalden",
        "Doelen: wat wil je bereiken en waarom",
        "Metingen: gewicht, lengte, buikomvang, vetpercentage"
      ]
    },
    personalized: {
      title: "Persoonlijk Plan op Maat",
      elements: [
        "Calorieën en macronutriënten voor jouw lichaam",
        "Rekening houdend met voorkeuren en afkeren",
        "Praktisch uitvoerbaar binnen jouw leven",
        "Flexibel: ruimte voor sociale momenten",
        "Geen verboden, wel bewustzijn",
        "Gefaseerd: kleine stappen, grote impact"
      ]
    },
    support: {
      title: "Continue Begeleiding en Aanpassing",
      frequency: "Elke 2-4 weken gedurende traject",
      includes: [
        "Voortgang bespreken en vieren",
        "Obstakels identificeren en oplossen",
        "Plan bijsturen waar nodig",
        "Motivatie en accountability",
        "Leren van terugval momenten",
        "Psychologische ondersteuning",
        "Samenwerking met andere professionals indien nodig"
      ]
    },
    longTerm: {
      title: "Focus op Behoud en Levenslange Gezondheid",
      approach: [
        "Niet tijdelijk dieet maar lifestyle verandering",
        "Leren omgaan met triggers en verleidingen",
        "Zelfstandigheid opbouwen",
        "Terugval preventie strategieën",
        "Periodieke check-ins (3-6 maanden)",
        "Leven lang gezonde relatie met eten"
      ]
    }
  };

  const successFactors = [
    {
      factor: "Realistische Verwachtingen",
      description: "0,5-1 kg per week, focus op proces niet alleen resultaat",
      impact: "Hoog"
    },
    {
      factor: "Consistentie > Perfectie",
      description: "80% goed is beter dan 100% voor 2 weken en dan opgeven",
      impact: "Zeer Hoog"
    },
    {
      factor: "Gedragsverandering",
      description: "Aanpakken van onderliggende oorzaken, niet alleen symptomen",
      impact: "Zeer Hoog"
    },
    {
      factor: "Sociale Steun",
      description: "Familie, vrienden, professionals die je steunen",
      impact: "Hoog"
    },
    {
      factor: "Zelfcompassie",
      description: "Vriendelijk voor jezelf bij tegenslag, niet zelfkritiek",
      impact: "Middel-Hoog"
    },
    {
      factor: "Structuur en Planning",
      description: "Maaltijdplanning, meal prep, voorbereiding",
      impact: "Hoog"
    },
    {
      factor: "Geduld",
      description: "Duurzame verandering kost tijd, 6-12 maanden minimaal",
      impact: "Zeer Hoog"
    }
  ];

  const costBenefit = {
    selfGuided: {
      cost: "€0-50 (apps, boeken)",
      successRate: "5-10%",
      timeInvested: "Trial & error, jaren",
      pros: ["Goedkoop", "Flexibel"],
      cons: ["Zeer lage slagingskans", "Geen begeleiding", "Risico op jojo-effect", "Kan schadelijk zijn"]
    },
    withDietist: {
      cost: "€400-800 (8-12 sessies)",
      successRate: "50-70%",
      timeInvested: "6-12 maanden",
      pros: ["Professionele begeleiding", "Bewezen effectief", "Duurzame resultaten", "Gezonde aanpak", "Leren voor leven"],
      cons: ["Kosten vooraf", "Commitment nodig"],
      insurance: "Vaak gedeeltelijk vergoed (€100-400/jaar)"
    }
  };

  const scientificStats = [
    "95% van zelfgeleide diëten faalt binnen 5 jaar (Mann et al., 2007)",
    "Gemiddeld gewichtsverlies zonder begeleiding: 5-10% met 80% terugval binnen 1 jaar",
    "Met dietist begeleiding: 7-15% gewichtsverlies met 60% behoud na 2 jaar",
    "Begeleide trajecten hebben 5-7x hogere slagingskans dan zelfstandig",
    "Medische kosten van obesitas: €1000-3000 per jaar, dietist betaalt zichzelf terug"
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
        {/* Featured Image */}
        <div className="w-full aspect-video max-h-[500px] overflow-hidden">
          <Image
            src="/img/blog/waarom-afvallen-niet-lukt/featured.webp"
            alt="Waarom Afvallen Niet Lukt - Gewichtsverlies Tips"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

          {/* Share Buttons */}
          <div className="px-6 md:px-12 py-6 border-b">
            <ShareButtons title="10 Redenen Waarom Afvallen Niet Lukt (En Hoe Een Dietist Kan Helpen)" />
          </div>

          {/* Hero Section */}
          <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Scale className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Gewichtsverlies Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            10 Redenen Waarom Afvallen Niet Lukt (En Hoe Een Dietist Kan Helpen)
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ontdek waarom 95% van de diëten faalt en hoe professionele begeleiding het verschil maakt voor duurzaam gewichtsverlies
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>14 oktober 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

          {/* Introduction */}
          <section className="py-16 px-6 md:px-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Schokkend Feit</h3>
                  <p className="text-gray-700">
                    Studies tonen aan dat <strong>95% van alle mensen die op eigen houtje een dieet volgen, binnen 5 jaar weer op hun oorspronkelijke gewicht zitten of zwaarder zijn</strong>. Dit komt niet door gebrek aan wilskracht, maar door biologische, psychologische en praktische factoren die tegen je werken.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Je hebt het waarschijnlijk zelf ervaren: vol goede moed begin je aan een dieet, de eerste weken gaat het goed, maar dan... stagneert het. Je krijgt steeds meer trek, de motivatie zakt, en voor je het weet ben je weer terug bij af. Frustrrerend? Absoluut. Jouw schuld? <strong>Absoluut niet.</strong>
              </p>

              <p className="text-gray-700 mb-8">
                In dit artikel ontdek je de 10 belangrijkste redenen waarom afvallen zo moeilijk is, wat er biologisch en psychologisch in je lichaam gebeurt, en - het goede nieuws - hoe een dietist je kan helpen deze obstakels te overwinnen. Want met de juiste kennis en begeleiding is duurzaam gewichtsverlies wel degelijk mogelijk.
              </p>
            </div>

            {/* Scientific Evidence Box */}
            <div className="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-200">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                Wetenschappelijke Feiten
              </h3>
              <ul className="space-y-3">
                {scientificStats.map((stat, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        {/* Main Content: 10 Reasons */}
          <section className="py-16 px-6 md:px-12 bg-white">

            <h2 className="text-3xl font-bold mb-12 text-center">
              De 10 Belangrijkste Redenen Waarom Afvallen Mislukt
            </h2>

            <div className="space-y-12">
              {failureReasons.map((reason) => (
                <div key={reason.id} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <reason.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          #{reason.id}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          reason.severity === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                          reason.severity === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                          reason.severity === 'Middel-Hoog' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          Impact: {reason.severity}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Wat gebeurt er:</h4>
                    <ul className="space-y-2">
                      {reason.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Info Sections */}
                  {reason.triggers && (
                    <div className="mb-6 bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-bold mb-3 text-gray-900">Veel Voorkomende Triggers:</h4>
                      <ul className="space-y-2">
                        {reason.triggers.map((trigger, idx) => (
                          <li key={idx} className="flex gap-2 text-gray-700">
                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                            <span>{trigger}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {reason.commonMistakes && (
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-900">Veel Gemaakte Fouten:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {reason.commonMistakes.map((mistake, idx) => (
                          <div key={idx} className="flex gap-2 text-gray-700">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span>{mistake}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {reason.hiddenCalories && (
                    <div className="mb-6">
                      <h4 className="font-bold mb-3 text-gray-900">Verborgen Calorieën: Realiteit Check</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="border p-3 text-left">Product</th>
                              <th className="border p-3 text-left">Jij denkt</th>
                              <th className="border p-3 text-left">Echte waarde</th>
                              <th className="border p-3 text-left">Verschil</th>
                            </tr>
                          </thead>
                          <tbody>
                            {reason.hiddenCalories.map((item, idx) => (
                              <tr key={idx} className="border-b">
                                <td className="border p-3 font-medium">{item.item}</td>
                                <td className="border p-3">{item.estimated}</td>
                                <td className="border p-3 font-bold text-red-600">{item.actual}</td>
                                <td className="border p-3 font-bold text-red-600">{item.difference}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Dietist Help Section */}
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      Hoe Een Dietist Je Helpt:
                    </h4>
                    <ul className="space-y-2">
                      {reason.dietistHelp.map((help, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{help}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {reason.practicalTip && (
                    <div className="mt-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-gray-700">
                        <strong className="text-blue-700">💡 Praktische Tip:</strong> {reason.practicalTip}
                      </p>
                    </div>
                  )}

                  {reason.scientificEvidence && (
                    <div className="mt-4 text-sm text-gray-600 italic">
                      📚 {reason.scientificEvidence}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        {/* Dietist Approach Section */}
          <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">

            <h2 className="text-3xl font-bold mb-4 text-center">
              Hoe Werkt Begeleiding Door Een Dietist?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Een bewezen methode voor duurzaam gewichtsverlies
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Intake */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{dietistApproach.intake.title}</h3>
                <ul className="space-y-2">
                  {dietistApproach.intake.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personalized Plan */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{dietistApproach.personalized.title}</h3>
                <ul className="space-y-2">
                  {dietistApproach.personalized.elements.map((element, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{dietistApproach.support.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Frequentie:</strong> {dietistApproach.support.frequency}
                </p>
                <ul className="space-y-2">
                  {dietistApproach.support.includes.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Long Term */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-orange-100 rounded-full p-3 w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{dietistApproach.longTerm.title}</h3>
                <ul className="space-y-2">
                  {dietistApproach.longTerm.approach.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        {/* Success Factors */}
          <section className="py-16 px-6 md:px-12 bg-white">

            <h2 className="text-3xl font-bold mb-8 text-center">
              7 Succesfactoren Voor Duurzaam Gewichtsverlies
            </h2>

            <div className="space-y-4">
              {successFactors.map((factor, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full px-3 py-1 font-bold text-blue-700">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{factor.factor}</h3>
                      <p className="text-gray-700 mb-2">{factor.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        factor.impact === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                        factor.impact === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        Impact: {factor.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        {/* Cost-Benefit Analysis */}
          <section className="py-16 px-6 md:px-12 bg-gray-50">

            <h2 className="text-3xl font-bold mb-8 text-center">
              Kosten vs Baten: Alleen vs Met Dietist
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Self-guided */}
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-300">
                <h3 className="font-bold text-xl mb-4 text-center">Zelfstandig Afvallen</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-bold">Kosten:</span> {costBenefit.selfGuided.cost}
                  </div>
                  <div>
                    <span className="font-bold">Slagingskans:</span>{' '}
                    <span className="text-red-600 font-bold">{costBenefit.selfGuided.successRate}</span>
                  </div>
                  <div>
                    <span className="font-bold">Tijdsinvestering:</span> {costBenefit.selfGuided.timeInvested}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Voordelen:</h4>
                    <ul className="space-y-1">
                      {costBenefit.selfGuided.pros.map((pro, idx) => (
                        <li key={idx} className="flex gap-2 text-green-700">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Nadelen:</h4>
                    <ul className="space-y-1">
                      {costBenefit.selfGuided.cons.map((con, idx) => (
                        <li key={idx} className="flex gap-2 text-red-700">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* With Dietist */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-md border-2 border-blue-500">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full w-fit mb-2 text-sm font-bold">
                  AANBEVOLEN
                </div>
                <h3 className="font-bold text-xl mb-4 text-center">Met Dietist Begeleiding</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-bold">Kosten:</span> {costBenefit.withDietist.cost}
                  </div>
                  <div>
                    <span className="font-bold">Slagingskans:</span>{' '}
                    <span className="text-green-600 font-bold">{costBenefit.withDietist.successRate}</span>
                  </div>
                  <div>
                    <span className="font-bold">Tijdsinvestering:</span> {costBenefit.withDietist.timeInvested}
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Voordelen:</h4>
                    <ul className="space-y-1">
                      {costBenefit.withDietist.pros.map((pro, idx) => (
                        <li key={idx} className="flex gap-2 text-green-700">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Nadelen:</h4>
                    <ul className="space-y-1">
                      {costBenefit.withDietist.cons.map((con, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700">
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-500">
                    <p className="text-sm font-semibold text-green-700">
                      💰 {costBenefit.withDietist.insurance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Klaar Om Te Starten Met Duurzaam Afvallen?
              </h2>
              <p className="text-xl text-blue-50 mb-8">
                Vind een geregistreerde dietist bij jou in de buurt die je kan helpen met persoonlijke begeleiding en bewezen methoden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2 justify-center"
                >
                  <Search className="w-5 h-5" />
                  Vind Een Dietist
                </Link>
                <Link
                  href="/faq"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-2 justify-center"
                >
                  <Lightbulb className="w-5 h-5" />
                  Veelgestelde Vragen
                </Link>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Afvallen is moeilijk - en dat is niet jouw schuld. Je lichaam, je omgeving, je stress, en vele andere factoren werken tegen je. <strong>Willskracht alleen is niet genoeg</strong> omdat je tegen biologische overlevingsmechanismen vecht die miljoenen jaren oud zijn.
              </p>
              <p className="mb-4">
                De goede nieuws? Met de juiste kennis, aanpak en professionele begeleiding is duurzaam gewichtsverlies wél mogelijk. Een dietist kan je helpen:
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>De onderliggende oorzaken aan te pakken in plaats van alleen symptomen</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Een realistisch plan te maken dat bij jouw leven past</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Biologische obstakels te omzeilen met slimme strategieën</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Vol te houden zonder extreme regels of verboden</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Je gewichtsverlies ook daadwerkelijk te behouden op lange termijn</span>
                </li>
              </ul>
              <p className="mb-4">
                De investering in professionele begeleiding betaalt zich terug - niet alleen in gewichtsverlies, maar in <strong>betere gezondheid, meer energie, en een gezondere relatie met eten</strong> voor de rest van je leven.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
                <p className="font-semibold text-lg mb-2">💡 Eerste Stap:</p>
                <p className="text-gray-700">
                  Gebruik onze zoekfunctie om een geregistreerde dietist bij jou in de buurt te vinden. De meeste eerste consulten worden (gedeeltelijk) vergoed door je zorgverzekering. Je hebt sinds 2022 geen verwijzing meer nodig van je huisarts.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
