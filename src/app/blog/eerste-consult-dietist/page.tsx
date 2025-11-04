import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, CheckCircle2, FileText, MessageCircle, Scale, Clock, Clipboard, Users, Target, AlertCircle, Lightbulb, TrendingUp, Info, Award , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Eerste Consult Bij Diëtist: Wat Kun Je Verwachten? | Complete Gids 2025',
  description: 'Alles over je eerste afspraak bij de diëtist: voorbereiding, duur (45-60 min), wat wordt gevraagd, metingen en wat je meeneemt. Inclusief checklist en tips.',
  keywords: [
    'eerste consult diëtist',
    'diëtist eerste afspraak',
    'wat verwachten bij diëtist',
    'voorbereiding diëtist',
    'intake diëtist',
    'diëtist gesprek',
    'wat vraagt diëtist',
    'diëtist meenemen',
    'diëtist anamnese',
    'eerste keer naar diëtist'
  ],
  openGraph: {
    title: 'Eerste Consult Bij Diëtist: Wat Kun Je Verwachten?',
    description: 'Complete gids over je eerste afspraak bij de diëtist',
    images: ['/img/blog/eerste-consult-dietist/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eerste Consult Bij Diëtist: Wat Kun Je Verwachten?',
  description: 'Uitgebreide gids over het eerste consult bij een diëtist: voorbereiding, proces, vragen en tips.',
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
    '@id': 'https://dietistindebuurt.nl/blog/eerste-consult-dietist'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/eerste-consult-dietist/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/eerste-consult-dietist',
  inLanguage: 'nl-NL'
};

export default function EersteConsultDietistPage() {
  const consultOverview = {
    duration: "45-60 minuten",
    cost: "€70-95 gemiddeld",
    when: "Binnen 1-2 weken na aanmelding",
    where: "Praktijk of online (videoconsult)",
    preparation: "10-15 minuten voorbereiding thuis"
  };

  const consultPhases = [
    {
      phase: "Kennismaking & Intake",
      duration: "10-15 min",
      icon: Users,
      activities: [
        "Voorstellen en uitleg werkwijze diëtist",
        "Bespreken van je hulpvraag en doelen",
        "Privacy en gegevensverwerking uitleggen",
        "Verwachtingen wederzijds bespreken"
      ],
      tip: "Wees eerlijk en open - alle informatie blijft strikt vertrouwelijk"
    },
    {
      phase: "Anamnese (Medische Geschiedenis)",
      duration: "15-20 min",
      icon: FileText,
      activities: [
        "Huidige klachten en medische diagnoses bespreken",
        "Medicatie en supplementen doornemen",
        "Eerdere diëten en gewichtsverlies pogingen",
        "Familiegeschiedenis (diabetes, hart- en vaatziekten, etc.)",
        "Allergie en intoleranties controleren",
        "Levensstijl: werk, stress, slaap, beweging"
      ],
      tip: "Neem een lijst mee van je medicatie en eventuele bloedwaarden"
    },
    {
      phase: "Voedingsanamnese",
      duration: "10-15 min",
      icon: MessageCircle,
      activities: [
        "Doorlopen van typische dag eten en drinken",
        "Ontbijt, lunch, diner en tussendoortjes",
        "Portiegroottes en bereidingswijze",
        "Eetpatroon weekend vs doordeweeks",
        "Alcohol, koffie, frisdrank consumptie",
        "Emotioneel eten, triggers, moeilijke momenten"
      ],
      tip: "Bijhouden voedingsdagboek 3-7 dagen vooraf helpt enorm"
    },
    {
      phase: "Metingen & Lichaamssamenstelling",
      duration: "5-10 min",
      icon: Scale,
      activities: [
        "Lichaamsgewicht meten (zonder schoenen/jas)",
        "Lengte meten",
        "Buikomtrek meten (op navelhoogte)",
        "Eventueel: vetpercentage met bio-impedantie",
        "Eventueel: bloeddruk meten",
        "BMI berekenen"
      ],
      tip: "Kom in lichte kleding en nuchter indien mogelijk (voor accurate meting)"
    },
    {
      phase: "Advies & Voedingsplan",
      duration: "10-15 min",
      icon: Target,
      activities: [
        "Eerste indruk en bevindingen bespreken",
        "Realistische doelen samen stellen",
        "Globaal voedingsadvies en belangrijkste aanpassingen",
        "Eventueel: start met basale veranderingen",
        "Uitleg over vervolgtraject en frequentie",
        "Vragen beantwoorden"
      ],
      tip: "Noteer de belangrijkste tips - je krijgt ook schriftelijk materiaal mee"
    }
  ];

  const questionsAsked = {
    medical: {
      title: "Medische Vragen",
      icon: Clipboard,
      questions: [
        "Heb je een medische diagnose? (diabetes, hoge bloeddruk, etc.)",
        "Welke medicijnen gebruik je?",
        "Heb je allergieën of intoleranties?",
        "Zijn er ziektes in de familie?",
        "Hoe is je energieniveau en vermoeidheid?",
        "Bij vrouwen: menstruatiecyclus regelmatig?",
        "Heb je klachten zoals buikpijn, obstipatie, diarree?"
      ]
    },
    lifestyle: {
      title: "Levensstijl & Gedrag",
      icon: TrendingUp,
      questions: [
        "Hoe ziet een normale dag eruit? (werk, activiteiten)",
        "Hoeveel beweeg/sport je per week?",
        "Hoe is je slaappatroon? (uren, kwaliteit)",
        "Ervaar je veel stress?",
        "Rook je of drink je alcohol?",
        "Eet je uit emotie of verveling?",
        "Wie doet de boodschappen en kookt thuis?"
      ]
    },
    nutrition: {
      title: "Voedings Vragen",
      icon: MessageCircle,
      questions: [
        "Hoe ziet een typische ontbijt/lunch/diner eruit?",
        "Welke producten eet je nooit of zelden?",
        "Waar snack je het meest van?",
        "Hoe vaak eet je buiten de deur of laat je bezorgen?",
        "Drink je voldoende water?",
        "Heb je vaste eettijden of onregelmatig?",
        "Met wie eet je meestal? (alleen, gezin, collega's)"
      ]
    },
    goals: {
      title: "Doel & Motivatie",
      icon: Target,
      questions: [
        "Wat is je belangrijkste doel? (afvallen, gezonder, medisch)",
        "Heb je een streefgewicht voor ogen?",
        "Wat heb je al geprobeerd in het verleden?",
        "Waarom denk je dat eerdere pogingen niet lukten?",
        "Wat motiveert je op dit moment?",
        "Hoe gemotiveerd ben je op schaal 1-10?",
        "Wat zou succes voor jou betekenen over 6 maanden?"
      ]
    }
  };

  const whatToBring = [
    {
      item: "Medische Informatie",
      icon: FileText,
      critical: true,
      checklist: [
        "Lijst van huidige medicatie (namen + dosering)",
        "Recente bloedwaarden (max 3 maanden oud)",
        "Medische diagnoses of verwijsbrief huisarts",
        "Allergie/intolerantie informatie",
        "Eerdere dieet/voedingsplannen"
      ]
    },
    {
      item: "Voedingsdagboek",
      icon: Clipboard,
      critical: true,
      checklist: [
        "3-7 dagen eten en drinken bijgehouden",
        "Inclusief tijdstippen en portiegroottes",
        "Ook snacks, snoep en drinken noteren",
        "Gevoelens/emoties bij eetmomenten",
        "Weekend EN doordeweekse dagen"
      ]
    },
    {
      item: "Praktische Zaken",
      icon: CheckCircle2,
      critical: false,
      checklist: [
        "Paspoort/ID voor identificatie",
        "Zorgverzekeringspas",
        "Licht kleding voor weging (zonder schoenen)",
        "Notitieblok en pen voor aantekeningen",
        "Betaalpas of contant geld (indien niet via verzekering)"
      ]
    },
    {
      item: "Vragen & Doelen",
      icon: MessageCircle,
      critical: false,
      checklist: [
        "Lijst met vragen die je wilt stellen",
        "Je belangrijkste doelen opgeschreven",
        "Obstakels waar je tegenaan loopt",
        "Voedingsmiddelen die je wilt bespreken",
        "Specifieke situaties (feestjes, werk, sport)"
      ]
    }
  ];

  const preparationTips = [
    {
      tip: "Houd 3-7 Dagen een Voedingsdagboek Bij",
      why: "Geeft diëtist compleet beeld van je eetpatroon",
      how: "Noteer ALLES: maaltijden, snacks, drinken, tijden, porties en hoe je je voelde",
      impact: "Hoog - dit is de basis van het advies"
    },
    {
      tip: "Verzamel Medische Informatie",
      why: "Voorkomt extra lab onderzoek en vertraging",
      how: "Vraag kopie bloedwaarden bij huisarts (gratis), noteer alle medicijnen",
      impact: "Hoog - bespaart tijd en geld"
    },
    {
      tip: "Wees Eerlijk Over Je Eetgedrag",
      why: "Diëtist kan alleen goed helpen met eerlijke informatie",
      how: "Vertel ook over 'ongezonde' momenten - geen oordeel, alleen hulp",
      impact: "Zeer Hoog - cruciale basis"
    },
    {
      tip: "Kom Nuchter Als Het Kan",
      why: "Metingen (gewicht, buikomtrek, vet%) zijn dan meest accuraat",
      how: "Drink alleen water, eet niet voor afspraak (controleer of dit mag)",
      impact: "Middel - betere baseline meting"
    },
    {
      tip: "Schrijf Je Vragen Op",
      why: "Je vergeet vaak belangrijke vragen tijdens gesprek",
      how: "Maak lijstje van alles wat je wilt weten",
      impact: "Middel - maximaal rendement"
    },
    {
      tip: "Plan Tijd In Voor Nazorg",
      why: "Na consult wil je in rust nadenken en eventueel boodschappen doen",
      how: "Plan geen drukke afspraken direct erna, neem buffer van 30-60 min",
      impact: "Laag - comfort"
    }
  ];

  const afterConsult = {
    immediately: {
      title: "Direct Na Consult",
      timeframe: "Dezelfde dag",
      actions: [
        "Notities doornemen en eventueel aanvullen",
        "Eerste aanpassingen direct implementeren",
        "Eventuele recepten of boodschappenlijst bekijken",
        "Volgende afspraak in agenda zetten",
        "Bij vragen: noteer ze voor volgende keer"
      ]
    },
    firstWeek: {
      title: "Eerste Week",
      timeframe: "Dag 1-7",
      actions: [
        "Start met basale veranderingen uit voedingsplan",
        "Blijf voedingsdagboek bijhouden indien gevraagd",
        "Probeer nieuwe recepten of producten uit",
        "Let op je energie, verzadiging en welzijn",
        "E-mail bij acute vragen (meestal gratis tussendoor contact)"
      ]
    },
    followUp: {
      title: "Vervolgconsult",
      timeframe: "Na 2-4 weken",
      actions: [
        "Voortgang bespreken (gewicht, klachten, gevoel)",
        "Obstakels en moeilijkheden aankaarten",
        "Plan verder verfijnen en aanscherpen",
        "Nieuwe doelen stellen",
        "Frequentie vervolgconsulten bepalen"
      ]
    }
  };

  const commonConcerns = [
    {
      concern: "Ik schaam me voor mijn eetgedrag",
      reality: "Diëtisten hebben alles al gezien en oordelen niet",
      advice: "Bedenk: ze zijn er om te helpen, niet te veroordelen. Eerlijkheid helpt jezelf het meest."
    },
    {
      concern: "Wat als ik de doelen niet haal?",
      reality: "Tegenslagen zijn normaal en onderdeel van het proces",
      advice: "Diëtist helpt je obstakels overwinnen. Perfectie wordt niet verwacht."
    },
    {
      concern: "Moet ik mijn favoriete eten opgeven?",
      reality: "Moderne voedingsadvies gaat over balans, niet verbieden",
      advice: "Vertel wat je belangrijk vindt - diëtist vindt manieren om dit te behouden."
    },
    {
      concern: "Ik weet niet goed wat ik eet/drink",
      reality: "Dat is juist waarom je komt! Diëtist helpt hiermee",
      advice: "Doe je best met voedingsdagboek, rest wordt samen uitgevogeld."
    },
    {
      concern: "Het voelt alsof ik huiswerk krijg",
      reality: "Je krijgt alleen wat haalbaar is voor jou",
      advice: "Geef aan wat wel/niet kan - plan wordt op maat gemaakt."
    }
  ];

  const dosDonts = {
    dos: [
      "Kom op tijd (5-10 min voor afspraak)",
      "Wees eerlijk en open, ook over moeilijke onderwerpen",
      "Stel alle vragen die je hebt, geen vraag is te gek",
      "Noteer belangrijke tips en adviezen",
      "Geef aan wat wel/niet haalbaar is voor jouw situatie",
      "Deel je verwachtingen en doelen",
      "Vertel over eerdere ervaringen (wat werkte/niet werkte)"
    ],
    donts: [
      "Kom niet in strakke kleding (ongemakkelijk bij metingen)",
      "Verzin geen dingen of lieg over je eetpatroon",
      "Verwacht geen kant-en-klaar dieet in 1 consult",
      "Denk niet dat alles meteen moet veranderen",
      "Schaam je niet voor je vragen of situatie",
      "Ga niet uit van een 'verboden lijst' met voedsel",
      "Verwacht geen wonderoplossing zonder inzet"
    ]
  };

  const typicalTimeline = [
    { time: "T-7 dagen", activity: "Voedingsdagboek starten, medische info verzamelen" },
    { time: "T-1 dag", activity: "Vragen opschrijven, spullen klaarzetten" },
    { time: "T=0 (afspraak)", activity: "Eerste consult 45-60 minuten" },
    { time: "T+1 dag", activity: "Start met eerste aanpassingen uit voedingsplan" },
    { time: "T+1 week", activity: "Nieuwe routine oefenen, dagboek bijhouden" },
    { time: "T+2-4 weken", activity: "Eerste vervolgconsult, voortgang bespreken" }
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
            src="/img/blog/eerste-consult-dietist/featured.webp"
            alt="Eerste Consult Bij Diëtist - Wat Te Verwachten"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Eerste Consult Bij Diëtist: Wat Kun Je Verwachten?" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Eerste Afspraak Gids 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Eerste Consult Bij Diëtist: Wat Kun Je Verwachten?
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Complete gids over je eerste afspraak: voorbereiding, wat er gebeurt en hoe je het meeste eruit haalt
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

        {/* Quick Overview */}
        <section className="py-16 px-6 md:px-12">
            <div className="bg-blue-100 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-blue-600" />
                Het Snelle Overzicht
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Duur</p>
                      <p className="font-bold">{consultOverview.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="text-sm text-gray-600">Kosten</p>
                      <p className="font-bold">{consultOverview.cost}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Wanneer</p>
                      <p className="font-bold">{consultOverview.when}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-600">Waar</p>
                      <p className="font-bold">{consultOverview.where}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clipboard className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Voorbereiding</p>
                      <p className="font-bold">{consultOverview.preparation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* Consult Phases */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Wat Gebeurt Er Tijdens Het Consult?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Het eerste consult bestaat uit 5 fases
            </p>

            <div className="space-y-6">
              {consultPhases.map((phase, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <phase.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </span>
                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {phase.activities.map((activity, aIdx) => (
                          <li key={aIdx} className="flex gap-2 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-sm text-green-800">
                          <strong className="text-green-700">💡 Tip:</strong> {phase.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Questions Asked */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Welke Vragen Worden Gesteld?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(questionsAsked).map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.questions.map((question, qIdx) => (
                      <li key={qIdx} className="flex gap-2 text-gray-700">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mt-8">
              <p className="text-gray-700">
                <strong>⚠️ Belangrijk:</strong> Al deze vragen zijn bedoeld om je zo goed mogelijk te helpen. Wees eerlijk - alle informatie is strikt vertrouwelijk en valt onder medisch beroepsgeheim.
              </p>
            </div>
        </section>

        {/* What to Bring */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Moet Je Meenemen?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {whatToBring.map((item, idx) => (
                <div key={idx} className={`rounded-xl p-6 shadow-md border-2 ${
                  item.critical ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-300'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-full p-3 ${item.critical ? 'bg-blue-100' : 'bg-gray-200'}`}>
                      <item.icon className={`w-6 h-6 ${item.critical ? 'text-blue-600' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{item.item}</h3>
                      {item.critical && (
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                          Verplicht
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.checklist.map((check, cIdx) => (
                      <li key={cIdx} className="flex gap-2 text-gray-700">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          item.critical ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Preparation Tips */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-green-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Tips Voor Optimale Voorbereiding
            </h2>

            <div className="space-y-4">
              {preparationTips.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{item.tip}</h3>
                      <div className="grid md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Waarom:</p>
                          <p className="text-sm text-gray-700">{item.why}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Hoe:</p>
                          <p className="text-sm text-gray-700">{item.how}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-semibold">Impact:</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            item.impact === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                            item.impact === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                            item.impact === 'Middel' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {item.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* After Consult */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Gebeurt Er Na Het Consult?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-md border border-blue-200">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full w-fit mb-4 text-sm font-bold">
                  {afterConsult.immediately.timeframe}
                </div>
                <h3 className="text-xl font-bold mb-4">{afterConsult.immediately.title}</h3>
                <ul className="space-y-2">
                  {afterConsult.immediately.actions.map((action, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md border border-green-200">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full w-fit mb-4 text-sm font-bold">
                  {afterConsult.firstWeek.timeframe}
                </div>
                <h3 className="text-xl font-bold mb-4">{afterConsult.firstWeek.title}</h3>
                <ul className="space-y-2">
                  {afterConsult.firstWeek.actions.map((action, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-md border border-purple-200">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full w-fit mb-4 text-sm font-bold">
                  {afterConsult.followUp.timeframe}
                </div>
                <h3 className="text-xl font-bold mb-4">{afterConsult.followUp.title}</h3>
                <ul className="space-y-2">
                  {afterConsult.followUp.actions.map((action, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </section>

        {/* Common Concerns */}
        <section className="py-16 px-6 md:px-12 bg-yellow-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Veelvoorkomende Zorgen (En De Realiteit)
            </h2>

            <div className="space-y-4">
              {commonConcerns.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-yellow-800">
                        Zorg: "{item.concern}"
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Realiteit:</strong> {item.reality}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-sm text-green-800">
                          <strong>✅ Advies:</strong> {item.advice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Do's & Don'ts Voor Je Eerste Consult
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="bg-green-50 rounded-xl p-6 shadow-md border-2 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-800 flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8" />
                  Wel Doen
                </h3>
                <ul className="space-y-3">
                  {dosDonts.dos.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-red-50 rounded-xl p-6 shadow-md border-2 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-8 h-8" />
                  Niet Doen
                </h3>
                <ul className="space-y-3">
                  {dosDonts.donts.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Typische Tijdlijn Rondom Je Eerste Consult
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
              <div className="space-y-6">
                {typicalTimeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-20">
                    <div className="absolute left-0 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
                      {item.time}
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md flex-1">
                      <p className="text-gray-800 font-medium">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klaar Voor Je Eerste Consult?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Vind een ervaren diëtist bij jou in de buurt en plan je eerste afspraak
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Vind Een Diëtist in Jouw Regio
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Het eerste consult bij een diëtist duurt gemiddeld <strong>45-60 minuten</strong> en bestaat uit kennismaking, uitgebreide anamnese, voedingsanalyse, metingen en eerste advies. Goede voorbereiding met een voedingsdagboek en medische informatie maakt het consult veel effectiever.
              </p>
              <p>
                Wees vooral <strong>eerlijk en open</strong> - diëtisten hebben alles al gezien en oordelen niet. Ze zijn er puur om je te helpen. Hoe eerlijker je bent, hoe beter het advies dat je krijgt.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Gouden Regels:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Houd 3-7 dagen voedingsdagboek bij vóór je afspraak</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Verzamel medische info en medicatielijst</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Kom op tijd in lichte kleding voor accurate metingen</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Schrijf je vragen op - je vergeet anders de helft</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Wees eerlijk, ook over moeilijke onderwerpen</span>
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
