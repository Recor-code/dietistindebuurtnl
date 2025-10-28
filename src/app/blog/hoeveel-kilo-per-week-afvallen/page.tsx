import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Scale, TrendingDown, AlertTriangle, CheckCircle2, Heart, Activity, Calendar, Clock, Target, Zap, Shield, ThumbsUp, XCircle, Info, Award } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Hoeveel Kilo Per Week Afvallen is Gezond en Haalbaar? | Expert Gids 2025',
  description: 'Ontdek hoeveel kilo per week gezond afvallen is (0,5-1 kg), waarom sneller afvallen gevaarlijk is, en hoe je realistisch en duurzaam gewicht verliest met hulp van een dietist.',
  keywords: [
    'hoeveel kilo per week afvallen',
    'gezond afvallen tempo',
    'verantwoord gewichtsverlies',
    'afvallen per week',
    'crash dieet gevaarlijk',
    'duurzaam afvallen',
    '1 kilo per week afvallen',
    'realistische gewichtsverlies',
    'afvallen snelheid',
    'gezond afslankten'
  ],
  openGraph: {
    title: 'Hoeveel Kilo Per Week Afvallen is Gezond en Haalbaar?',
    description: 'Expert gids over gezond afvallen: tempo, risicos en realistische verwachtingen',
    images: ['/img/blog/hoeveel-kilo-per-week-afvallen/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hoeveel Kilo Per Week Afvallen is Gezond en Haalbaar?',
  description: 'Complete gids over gezond afvaltempo, risicos van te snel afvallen en realistische verwachtingen voor duurzaam gewichtsverlies.',
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
    '@id': 'https://dietistindebuurt.nl/blog/hoeveel-kilo-per-week-afvallen'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/hoeveel-kilo-per-week-afvallen/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/hoeveel-kilo-per-week-afvallen',
  inLanguage: 'nl-NL'
};

export default function HoeveelKiloPerWeekAfvallenPage() {
  const recommendedPace = {
    title: "Aanbevolen Tempo: 0,5 - 1 kg per week",
    subtitle: "Gebaseerd op wetenschappelijk onderzoek en medische richtlijnen",
    benefits: [
      {
        icon: Heart,
        title: "Gezondheid Behouden",
        description: "Je lichaam heeft tijd om aan te passen zonder stress"
      },
      {
        icon: Activity,
        title: "Spiermassa Behouden",
        description: "Verlies vet, niet spieren (belangrijk voor metabolisme)"
      },
      {
        icon: Shield,
        title: "Voedingsstoffen Garantie",
        description: "Voldoende calorieën voor alle vitamines en mineralen"
      },
      {
        icon: ThumbsUp,
        title: "Houdbaar op Lange Termijn",
        description: "Niet te streng, dus makkelijker vol te houden"
      }
    ],
    calculation: {
      title: "Hoe berekenen we dit?",
      explanation: "Om 1 kg vet te verliezen moet je 7700 calorieën tekort creëren",
      examples: [
        {
          goal: "0,5 kg per week",
          deficit: "3850 kcal per week",
          daily: "550 kcal per dag",
          realistic: "Zeer haalbaar",
          color: "green"
        },
        {
          goal: "1 kg per week",
          deficit: "7700 kcal per week",
          daily: "1100 kcal per dag",
          realistic: "Haalbaar met discipline",
          color: "blue"
        },
        {
          goal: "2 kg per week",
          deficit: "15.400 kcal per week",
          daily: "2200 kcal per dag",
          realistic: "Te extreem, niet gezond",
          color: "red"
        }
      ]
    }
  };

  const weekByWeek = [
    {
      week: "Week 1-2",
      weightLoss: "1-3 kg",
      reality: "Vooral vochtverlies en glycogeen",
      whatHappens: [
        "Lichaam verliest opgeslagen water (1-2 liter)",
        "Glycogeen reserves worden afgebroken (500g-1kg)",
        "Buik voelt meteen platter (minder opgeblazen)",
        "Veel motivatie door snelle resultaten"
      ],
      warning: "Dit is NIET 3 kg puur vet! Verlies vertraagt daarna."
    },
    {
      week: "Week 3-8",
      weightLoss: "0,5-1 kg per week",
      reality: "Echte vetverbranding begint",
      whatHappens: [
        "Lichaam past zich aan aan lager calorie-inname",
        "Vetreserves worden daadwerkelijk aangesproken",
        "Gewichtsverlies wordt stabieler en voorspelbaarder",
        "Kleding begint losser te zitten"
      ],
      tip: "Dit is het gezonde, duurzame tempo. Blijf hierbij!"
    },
    {
      week: "Week 9-16",
      weightLoss: "0,3-0,7 kg per week",
      reality: "Vertraging is normaal",
      whatHappens: [
        "Metabolisme past zich aan (wordt iets trager)",
        "Lichter lichaam verbruikt minder calorieën",
        "Hormonen veranderen (meer honger, minder verzadiging)",
        "Mogelijk plateau van 2-3 weken"
      ],
      tip: "Geen paniek! Dit is biologisch normaal. Volhouden is key."
    },
    {
      week: "Maand 5-12",
      weightLoss: "0,25-0,5 kg per week",
      reality: "Laatste fase naar streefgewicht",
      whatHappens: [
        "Gewicht stabiliseert meer",
        "Lichaam komt dichter bij 'set point'",
        "Kleine aanpassingen hebben grote impact",
        "Focus verschuift naar behoud en lifestyle"
      ],
      tip: "Overgang naar onderhoud. Leer gewicht behouden."
    }
  ];

  const crashDietDangers = [
    {
      danger: "Spierverlies",
      icon: Activity,
      severity: "Zeer Hoog",
      description: "Bij > 1,5 kg per week verlies je tot 50% spieren i.p.v. vet",
      consequences: [
        "Metabolisme daalt met 10-20% (verbrand minder calorieën)",
        "Zwakker, minder energie",
        "Jojo-effect bijna gegarandeerd",
        "Verlies van kracht en conditie"
      ],
      science: "Studies tonen: spiermassa verlies verdubbelt bij > 1,5 kg/week"
    },
    {
      danger: "Nutriënt Tekorten",
      icon: AlertTriangle,
      severity: "Hoog",
      description: "< 1200 kcal/dag maakt het onmogelijk alle voedingsstoffen binnen te krijgen",
      consequences: [
        "Vitamines B, D, ijzer, calcium tekorten",
        "Vermoeidheid, hoofdpijn, duizeligheid",
        "Haarverlies, broos haar en nagels",
        "Verminderde immuunsysteem",
        "Bij vrouwen: menstruatie kan stoppen"
      ],
      realExample: "1000 kcal dieet = onmogelijk 30+ essentiële voedingsstoffen halen"
    },
    {
      danger: "Galstenen",
      icon: XCircle,
      severity: "Middel-Hoog",
      description: "Risico stijgt 12x bij > 1,5 kg per week gewichtsverlies",
      consequences: [
        "Pijnlijke galstenen ontwikkelen",
        "Kan leiden tot operatie",
        "Vooral bij vrouwen 40+",
        "Voorkomen door geleidelijk afvallen"
      ],
      science: "Bij > 1,5 kg/week: 25% ontwikkelt galstenen vs 2% bij normaal tempo"
    },
    {
      danger: "Elektrolyt Verstoringen",
      icon: Zap,
      severity: "Hoog",
      description: "Snel afvallen verstoort natrium, kalium en magnesium balans",
      consequences: [
        "Hartritme stoornissen (levensgevaarlijk!)",
        "Spierkrampen en zwakte",
        "Verwarring en concentratieproblemen",
        "Hoofdpijn en misselijkheid"
      ],
      warning: "In extreme gevallen kan dit fataal zijn"
    },
    {
      danger: "Psychologische Schade",
      icon: Heart,
      severity: "Hoog",
      description: "Te strikte diëten leiden tot obsessief gedrag en eetstoornissen",
      consequences: [
        "Ontwikkeling orthorexie (obsessie met 'gezond' eten)",
        "Binge eating na te streng dieet",
        "Angst voor voedsel en sociale isolatie",
        "Negatief zelfbeeld en schaamte",
        "Eeuwige dieet cyclus"
      ],
      longTerm: "Relatie met eten blijft levenslang beschadigd"
    }
  ];

  const realisticGoals = {
    starting: [
      {
        startWeight: "70 kg",
        goal: "60 kg (10 kg)",
        safeTime: "10-20 weken (2,5-5 maanden)",
        crashTime: "5 weken",
        recommendation: "Neem 12-16 weken, behoud is beter"
      },
      {
        startWeight: "90 kg",
        goal: "75 kg (15 kg)",
        safeTime: "15-30 weken (4-7 maanden)",
        crashTime: "7-8 weken",
        recommendation: "Neem 20-24 weken voor duurzaam resultaat"
      },
      {
        startWeight: "110 kg",
        goal: "85 kg (25 kg)",
        safeTime: "25-50 weken (6-12 maanden)",
        crashTime: "12-13 weken",
        recommendation: "Dit is een marathon, neem 9-12 maanden"
      }
    ]
  };

  const factors = [
    {
      factor: "Startgewicht",
      impact: "Hoe meer overgewicht, hoe sneller eerste weken",
      details: [
        "BMI > 35: Eerste weken 1-2 kg mogelijk",
        "BMI 30-35: 0,7-1,2 kg realistisch",
        "BMI 25-30: 0,5-0,8 kg normaal",
        "BMI < 25: 0,3-0,5 kg (laatste kilo's gaan traag)"
      ]
    },
    {
      factor: "Leeftijd",
      impact: "Metabolisme vertraagt met leeftijd",
      details: [
        "20-30 jaar: Snelst metabolisme, 1 kg/week haalbaar",
        "30-40 jaar: 0,7-1 kg/week realistisch",
        "40-50 jaar: 0,5-0,8 kg/week",
        "50+ jaar: 0,3-0,6 kg/week (spierafname speelt rol)"
      ]
    },
    {
      factor: "Geslacht",
      impact: "Mannen verliezen gemiddeld sneller dan vrouwen",
      details: [
        "Mannen: Meer spiermassa = hoger metabolisme",
        "Mannen: 15-20% sneller gewichtsverlies",
        "Vrouwen: Hormonale schommelingen (cyclus) beïnvloeden",
        "Vrouwen: Waterretentie maakt weegschaal onbetrouwbaar"
      ]
    },
    {
      factor: "Beweging & Sport",
      impact: "Kan gewichtsverlies versnellen met 20-30%",
      details: [
        "Cardio: 200-400 kcal extra per dag verbranden",
        "Kracht: Spierbehoud = hoger metabolisme",
        "NEAT: Meer bewegen overdag (+200 kcal)",
        "Combinatie sport + voeding = beste resultaat"
      ]
    },
    {
      factor: "Vorige Diëten",
      impact: "Jojo-diëters verliezen trager",
      details: [
        "Lichaam 'herinnert' eerdere hongerperiodes",
        "Metabole adaptatie is sterker",
        "Meer geduld en consistentie nodig",
        "Professionele begeleiding extra belangrijk"
      ]
    }
  ];

  const plateauTips = [
    {
      tip: "Wees niet alleen afhankelijk van weegschaal",
      explanation: "Meet ook buikomtrek, bovenbeen, bovenkant arm. Neem foto's elke 2 weken.",
      why: "Lichaam kan vetverliezen maar water vasthouden, of vet verliezen maar spier aankomen"
    },
    {
      tip: "Accepteer plateaus van 2-3 weken",
      explanation: "Dit is biologisch normaal. Lichaam past aan en herstelt zich.",
      why: "Na plateau komt vaak ineens 1-2 kg verlies in één week"
    },
    {
      tip: "Pas kleine dingen aan, niet alles",
      explanation: "Verlaag calorieën met 100-200 kcal of voeg 2x 30 min wandelen toe",
      why: "Drastische veranderingen leiden tot meer adaptatie en jojo-effect"
    },
    {
      tip: "Diet break: 1-2 weken onderhoud",
      explanation: "Eet op onderhoudsniveau (geen tekort) om metabolisme te resetten",
      why: "Hormonen normaliseren, honger vermindert, psychologische pauze"
    }
  ];

  const dietistHelp = {
    assessment: {
      title: "Persoonlijke Beoordeling",
      items: [
        "Berekent jouw exacte caloriebehoefte (geen online calculator)",
        "Houdt rekening met leeftijd, geslacht, activiteit, medische historie",
        "Stelt realistische doelen op basis van jouw situatie",
        "Voorkomt te strenge aanpak die tot falen leidt"
      ]
    },
    planning: {
      title: "Maatwerk Voedingsplan",
      items: [
        "500-1000 kcal tekort voor 0,5-1 kg per week",
        "Minimaal 1200 kcal vrouwen / 1500 kcal mannen",
        "Voldoende eiwit om spieren te behouden (1,6-2g per kg)",
        "Alle voedingsstoffen binnen krijgen",
        "Flexibel: ruimte voor favorieten en sociale momenten"
      ]
    },
    monitoring: {
      title: "Monitoring en Bijsturing",
      items: [
        "Wekelijkse/tweewekelijkse weging en metingen",
        "Bijhouden van energie, honger, slaap",
        "Aanpassen als gewichtsverlies te snel of te traag gaat",
        "Herkennen en doorbreken van plateaus",
        "Vieren van successen (non-scale victories)"
      ]
    },
    longTerm: {
      title: "Duurzaamheid en Behoud",
      items: [
        "Leert geleidelijk overgaan naar onderhoud",
        "Voorkomt jojo-effect door realistische aanpak",
        "Bouwt gezonde gewoonten op voor leven lang",
        "Check-ins na afsluiten (3-6-12 maanden)",
        "Interventiestrategie bij terugval"
      ]
    }
  };

  const myths = [
    {
      myth: "Hoe sneller je afvalt, hoe beter",
      reality: "Sneller afvallen = meer spierverlies, meer kans op jojo-effect",
      truth: "Traag en gestaag wint de race bij gewichtsverlies"
    },
    {
      myth: "Je moet 2 kg per week afvallen om resultaat te zien",
      reality: "0,5 kg per week = 26 kg per jaar! Dat is enorm resultaat",
      truth: "Kleine consistente stappen zijn beter dan grote onhoudbare sprongen"
    },
    {
      myth: "Als de weegschaal niet beweegt, werk je niet hard genoeg",
      reality: "Gewicht schommelt 1-3 kg door vocht, voedsel in darmen, hormonen",
      truth: "Focus op trend over 4 weken, niet dagelijkse schommelingen"
    },
    {
      myth: "Ik moet zo min mogelijk eten voor snelste resultaat",
      reality: "< 1200 kcal = nutriënt tekorten, spierverlies, vertraagd metabolisme",
      truth: "Eten is brandstof. Te weinig = motor stopt met draaien"
    },
    {
      myth: "Crash diëten werken voor kickstart, daarna normaal verder",
      reality: "Crash diëten trainen je lichaam juist om minder te verbranden",
      truth: "Begin zoals je verder wilt gaan: gezond en houdbaar"
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
        {/* Featured Image */}
        <div className="w-full aspect-video max-h-[500px] overflow-hidden">
          <Image
            src="/img/blog/hoeveel-kilo-per-week-afvallen/featured.webp"
            alt="Hoeveel Kilo Per Week Afvallen is Gezond"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Hoeveel Kilo Per Week Afvallen is Gezond en Haalbaar?" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            <Scale className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Gezond Afvallen Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Hoeveel Kilo Per Week Afvallen is Gezond en Haalbaar?
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Expert uitleg over het veilige tempo van gewichtsverlies en waarom sneller niet altijd beter is
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

        {/* Quick Answer */}
        <section className="py-16 px-6 md:px-12">
            <div className="bg-green-100 border-l-4 border-green-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                Het Snelle Antwoord
              </h2>
              <p className="text-xl text-gray-800 mb-4">
                <strong>0,5 tot 1 kilogram per week</strong> is het gezonde en duurzame tempo voor gewichtsverlies. Dit komt neer op een dagelijks tekort van 550-1100 calorieën.
              </p>
              <p className="text-gray-700">
                Sneller afvallen (meer dan 1,5 kg per week) leidt tot spierverlies, nutriënt tekorten en verhoogt het risico op het jojo-effect. Langzamer is niet erg - consistentie is belangrijker dan snelheid.
              </p>
            </div>

            {/* Recommended Pace */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">{recommendedPace.title}</h2>
              <p className="text-center text-gray-600 mb-8">{recommendedPace.subtitle}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {recommendedPace.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-100 rounded-full p-3 h-fit">
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Calculation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3">{recommendedPace.calculation.title}</h3>
                <p className="text-gray-700 mb-4">{recommendedPace.calculation.explanation}</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border p-3 text-left">Doel per week</th>
                        <th className="border p-3 text-left">Tekort per week</th>
                        <th className="border p-3 text-left">Tekort per dag</th>
                        <th className="border p-3 text-left">Realiteit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recommendedPace.calculation.examples.map((example, idx) => (
                        <tr key={idx} className={`border-b ${
                          example.color === 'green' ? 'bg-green-50' :
                          example.color === 'blue' ? 'bg-blue-50' :
                          'bg-red-50'
                        }`}>
                          <td className="border p-3 font-bold">{example.goal}</td>
                          <td className="border p-3">{example.deficit}</td>
                          <td className="border p-3 font-semibold">{example.daily}</td>
                          <td className={`border p-3 font-bold ${
                            example.color === 'green' ? 'text-green-700' :
                            example.color === 'blue' ? 'text-blue-700' :
                            'text-red-700'
                          }`}>
                            {example.realistic}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </section>

        {/* Week by Week Timeline */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Wat Gebeurt Er Week Na Week?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Realistische verwachtingen per fase van je afvalproces
            </p>

            <div className="space-y-6">
              {weekByWeek.map((phase, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{phase.week}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold text-sm">
                          {phase.weightLoss}
                        </span>
                        <span className="text-gray-600 italic">{phase.reality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Wat gebeurt er:</h4>
                    <ul className="space-y-2">
                      {phase.whatHappens.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {phase.warning && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                      <p className="text-gray-700">
                        <strong className="text-yellow-700">⚠️ Let op:</strong> {phase.warning}
                      </p>
                    </div>
                  )}

                  {phase.tip && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded mt-2">
                      <p className="text-gray-700">
                        <strong className="text-green-700">💡 Tip:</strong> {phase.tip}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
        </section>

        {/* Dangers of Crash Diets */}
        <section className="py-16 px-6 md:px-12 bg-red-50">
            <h2 className="text-3xl font-bold mb-4 text-center text-red-900">
              Waarom Te Snel Afvallen Gevaarlijk Is
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              5 ernstige gezondheidsrisico's bij meer dan 1,5 kg per week
            </p>

            <div className="space-y-6">
              {crashDietDangers.map((danger, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-100 rounded-full p-3">
                      <danger.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl">{danger.danger}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          danger.severity === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                          danger.severity === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          Risico: {danger.severity}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{danger.description}</p>

                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <h4 className="font-semibold mb-2">Gevolgen:</h4>
                        <ul className="space-y-1">
                          {danger.consequences.map((consequence, cIdx) => (
                            <li key={cIdx} className="flex gap-2 text-gray-700">
                              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                              <span>{consequence}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {danger.science && (
                        <p className="text-sm text-gray-600 italic">
                          📚 Wetenschappelijk: {danger.science}
                        </p>
                      )}

                      {danger.warning && (
                        <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded mt-3">
                          <p className="text-red-800 font-semibold">
                            ⚠️ {danger.warning}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Realistic Goals */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Realistische Tijdlijn Per Doel
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                    <th className="border p-4 text-left">Start</th>
                    <th className="border p-4 text-left">Doel</th>
                    <th className="border p-4 text-left">Veilige Tijd</th>
                    <th className="border p-4 text-left">Crash Dieet</th>
                    <th className="border p-4 text-left">Aanbeveling</th>
                  </tr>
                </thead>
                <tbody>
                  {realisticGoals.starting.map((goal, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border p-4 font-semibold">{goal.startWeight}</td>
                      <td className="border p-4">{goal.goal}</td>
                      <td className="border p-4 text-green-700 font-bold">{goal.safeTime}</td>
                      <td className="border p-4 text-red-700 font-bold">{goal.crashTime}</td>
                      <td className="border p-4 text-blue-700">{goal.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" />
                Belangrijk Te Weten
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deze tijden zijn <strong>minimums</strong>. Langer duwen is prima!</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Plateaus van 2-3 weken zijn normaal, tel deze mee in je planning</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Laatste 5-10 kg gaan altijd trager dan eerste kilo's</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Behoud</strong> is moeilijker dan verliezen, reken op 6-12 maanden stabilisatie</span>
                </li>
              </ul>
            </div>
        </section>

        {/* Factors */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              5 Factoren Die Je Afvaltempo Beïnvloeden
            </h2>

            <div className="space-y-6">
              {factors.map((factor, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-xl mb-2">{idx + 1}. {factor.factor}</h3>
                  <p className="text-gray-700 mb-4 italic">{factor.impact}</p>
                  <ul className="space-y-2">
                    {factor.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-2 text-gray-700">
                        <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Plateau Tips */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Als Je Gewicht Niet Meer Daalt (Plateau)
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              4 tips om door een plateau heen te breken
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {plateauTips.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-purple-700 flex-shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-lg">{item.tip}</h3>
                  </div>
                  <p className="text-gray-700 mb-2">{item.explanation}</p>
                  <p className="text-sm text-purple-700 italic">
                    <strong>Waarom:</strong> {item.why}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Dietist Help */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Hoe Een Dietist Je Helpt Met Gezond Tempo
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Professionele begeleiding voor duurzaam resultaat
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-green-700">{dietistHelp.assessment.title}</h3>
                <ul className="space-y-2">
                  {dietistHelp.assessment.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-blue-700">{dietistHelp.planning.title}</h3>
                <ul className="space-y-2">
                  {dietistHelp.planning.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-purple-700">{dietistHelp.monitoring.title}</h3>
                <ul className="space-y-2">
                  {dietistHelp.monitoring.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-orange-700">{dietistHelp.longTerm.title}</h3>
                <ul className="space-y-2">
                  {dietistHelp.longTerm.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </section>

        {/* Myths */}
        <section className="py-16 px-6 md:px-12 bg-yellow-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              5 Mythes Over Afvaltempo Ontkracht
            </h2>

            <div className="space-y-4">
              {myths.map((myth, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-700">
                        Mythe: {myth.myth}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Realiteit:</strong> {myth.reality}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-800">
                          <strong className="text-green-700">✅ Waarheid:</strong> {myth.truth}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klaar Voor Gezond en Duurzaam Gewichtsverlies?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Vind een geregistreerde dietist die je helpt met een realistisch plan op jouw tempo
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Vind Een Dietist Bij Jou in de Buurt
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Het antwoord op "hoeveel kilo per week afvallen is gezond?" is duidelijk: <strong>0,5 tot 1 kilogram per week</strong>. Dit tempo zorgt ervoor dat je vooral vet verliest, je spieren behoudt, alle voedingsstoffen binnenkrigt en het resultaat daadwerkelijk kunt behouden.
              </p>
              <p>
                Sneller afvallen lijkt aantrekkelijk, maar leidt tot spierverlies, nutriënt tekorten, galstenen, en een hoger risico op het jojo-effect. Het is letterlijk niet de moeite waard om je gezondheid in gevaar te brengen voor een paar weken tijdwinst die je uiteindelijk toch weer kwijtraakt.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-2">💡 Onthoud Dit:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Traag en gestaag wint de race bij gewichtsverlies</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Focus op wat je houdt, niet wat je snelste kunt verliezen</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Professionele begeleiding verhoogt je slagingskans met 5-7x</span>
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
