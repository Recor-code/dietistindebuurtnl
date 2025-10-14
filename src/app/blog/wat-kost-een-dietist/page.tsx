import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Euro, CheckCircle2, XCircle, Shield, Calendar, AlertCircle, TrendingUp, FileText, CreditCard, Info, Calculator, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wat Kost Een Diëtist? Tarieven en Vergoeding 2025 | Complete Gids',
  description: 'Alles over diëtist kosten in 2025: €70-95 eerste consult, €45-70 vervolgconsult. Ontdek wat je zorgverzekering vergoedt (€100-400/jaar) en hoe je kosten kunt besparen.',
  keywords: [
    'diëtist kosten',
    'wat kost diëtist',
    'diëtist tarieven 2025',
    'diëtist vergoeding',
    'zorgverzekering diëtist',
    'diëtist vergoed',
    'aanvullende verzekering diëtist',
    'diëtist prijs',
    'kosten voedingsadvies',
    'diëtist declareren'
  ],
  openGraph: {
    title: 'Wat Kost Een Diëtist? Tarieven en Vergoeding 2025',
    description: 'Complete gids over diëtist kosten en wat je zorgverzekering vergoedt',
    images: ['/img/blog/wat-kost-een-dietist/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat Kost Een Diëtist? Tarieven en Vergoeding 2025',
  description: 'Uitgebreide gids over diëtist tarieven, zorgverzekering vergoedingen en hoe je kosten kunt besparen.',
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
    '@id': 'https://dietistindebuurt.nl/blog/wat-kost-een-dietist'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/wat-kost-een-dietist/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/wat-kost-een-dietist',
  inLanguage: 'nl-NL'
};

export default function WatKostEenDietistPage() {
  const currentTariffs = {
    firstConsult: {
      min: 70,
      max: 95,
      average: 82,
      duration: "45-60 minuten",
      description: "Uitgebreide intake, anamnese, meting en persoonlijk voedingsplan"
    },
    followUp: {
      min: 45,
      max: 70,
      average: 57,
      duration: "30-45 minuten",
      description: "Voortgang bespreken, plan bijstellen, motivatie en vragen"
    },
    shortConsult: {
      min: 30,
      max: 45,
      average: 37,
      duration: "15-20 minuten",
      description: "Korte check-in, snelle vraag, tussenevaluatie"
    },
    groupSession: {
      min: 15,
      max: 35,
      average: 25,
      duration: "60-90 minuten groep",
      description: "Workshop, kookcursus, groepsbegeleiding (per persoon)"
    }
  };

  const insuranceCoverage = {
    basis: {
      title: "Basisverzekering",
      covered: false,
      amount: "€0",
      note: "Sinds 2012 niet meer in basispakket",
      icon: XCircle,
      color: "red"
    },
    additional: {
      title: "Aanvullende Verzekering",
      covered: true,
      amount: "€100 - €400 per jaar",
      note: "Afhankelijk van pakket en verzekeraar",
      icon: CheckCircle2,
      color: "green"
    }
  };

  const insuranceComparison = [
    {
      insurer: "Zilveren Kruis",
      basic: "€0",
      packages: [
        { name: "Basis Aanvullend", amount: "€100", percentage: "100%", max: "3 consulten" },
        { name: "Standaard Aanvullend", amount: "€250", percentage: "100%", max: "6 consulten" },
        { name: "Uitgebreid", amount: "€400", percentage: "100%", max: "10 consulten" }
      ]
    },
    {
      insurer: "VGZ/IZA/Bewust",
      basic: "€0",
      packages: [
        { name: "Basis Extra", amount: "€150", percentage: "100%", max: "4 consulten" },
        { name: "Excellent", amount: "€300", percentage: "100%", max: "8 consulten" },
        { name: "Top", amount: "€500", percentage: "100%", max: "12+ consulten" }
      ]
    },
    {
      insurer: "CZ",
      basic: "€0",
      packages: [
        { name: "Aanvullend Basis", amount: "€100", percentage: "100%", max: "3 consulten" },
        { name: "Aanvullend Plus", amount: "€250", percentage: "100%", max: "6 consulten" },
        { name: "Aanvullend Extra", amount: "€350", percentage: "100%", max: "9 consulten" }
      ]
    },
    {
      insurer: "Menzis",
      basic: "€0",
      packages: [
        { name: "Basis Pakket", amount: "€125", percentage: "100%", max: "3 consulten" },
        { name: "Extra Pakket", amount: "€250", percentage: "100%", max: "6 consulten" },
        { name: "Optimaal", amount: "€400", percentage: "100%", max: "10 consulten" }
      ]
    }
  ];

  const priceFactors = [
    {
      factor: "Locatie",
      icon: Calculator,
      impact: "€10-20 verschil",
      details: [
        "Randstad (Amsterdam, Utrecht, Rotterdam): €80-95 gemiddeld",
        "Grote steden (Eindhoven, Groningen): €70-85 gemiddeld",
        "Kleinere plaatsen: €65-80 gemiddeld",
        "Platteland: €60-75 gemiddeld"
      ],
      reason: "Hogere praktijkkosten in grote steden"
    },
    {
      factor: "Ervaring Diëtist",
      icon: TrendingUp,
      impact: "€5-15 verschil",
      details: [
        "Startend (0-3 jaar): vaak lager tarief €60-75",
        "Ervaren (3-10 jaar): gemiddeld tarief €70-85",
        "Specialist (10+ jaar): hoger tarief €80-95",
        "Top specialist/docent: tot €100-120"
      ],
      reason: "Meer ervaring = meer kennis en specialisaties"
    },
    {
      factor: "Specialisatie",
      icon: Shield,
      impact: "€10-25 extra",
      details: [
        "Algemeen diëtist: standaard tarief",
        "Sportvoeding specialist: +€10-15",
        "Obesitas/bariatrie specialist: +€10-20",
        "Gedragswetenschappen: +€15-25",
        "Medisch complex (oncologie, nierfalen): +€15-25"
      ],
      reason: "Extra opleidingen en expertise rechtvaardigen hoger tarief"
    },
    {
      factor: "Praktijk Type",
      icon: FileText,
      impact: "€5-15 verschil",
      details: [
        "Solo praktijk: vaak flexibele tarieven €65-80",
        "Groepspraktijk: gemiddelde tarieven €70-85",
        "Keten/franchise: vaste tarieven €75-90",
        "Ziekenhuis polikliniek: DBC tarieven (anders systeem)"
      ],
      reason: "Overhead en bedrijfsmodel beïnvloeden prijzen"
    },
    {
      factor: "Online vs Fysiek",
      icon: Clock,
      impact: "€5-10 korting online",
      details: [
        "Fysiek consult: vol tarief €70-95",
        "Videoconsult: vaak €5-10 korting",
        "E-mail/app begeleiding: €30-50 per maand",
        "Hybride (mix): verschillende tarieven"
      ],
      reason: "Online = lagere kosten (geen praktijkruimte)"
    }
  ];

  const typicalTrajectories = [
    {
      name: "Basis Traject",
      duration: "3 maanden",
      sessions: "5 consulten (1 intake + 4 vervolgconsulten)",
      grossCost: "€70 + (4 × €50) = €270",
      insurance: "€200 vergoed (aanvullend)",
      netCost: "€70 eigen bijdrage",
      perMonth: "€23/maand",
      forWho: "Mild overgewicht, preventie, algemeen advies",
      worth: "Goede investering in je gezondheid"
    },
    {
      name: "Standaard Traject",
      duration: "6 maanden",
      sessions: "8 consulten (1 intake + 7 vervolgconsulten)",
      grossCost: "€80 + (7 × €55) = €465",
      insurance: "€350 vergoed (aanvullend)",
      netCost: "€115 eigen bijdrage",
      perMonth: "€19/maand",
      forWho: "Gewichtsverlies 10-20 kg, licht medisch",
      worth: "Meest gekozen traject met beste prijs/kwaliteit"
    },
    {
      name: "Intensief Traject",
      duration: "12 maanden",
      sessions: "12 consulten (1 intake + 11 vervolgconsulten)",
      grossCost: "€90 + (11 × €60) = €750",
      insurance: "€400 vergoed (aanvullend)",
      netCost: "€350 eigen bijdrage",
      perMonth: "€29/maand",
      forWho: "Obesitas, diabetes, medisch complex, langdurige begeleiding",
      worth: "Intensieve begeleiding tegen scherp tarief"
    }
  ];

  const requirements2025 = {
    noReferral: {
      title: "Geen Verwijzing Meer Nodig",
      since: "Sinds 1 januari 2022",
      description: "Je kunt direct naar de diëtist zonder verwijzing van je huisarts",
      benefits: [
        "Sneller starten met behandeling",
        "Geen wachttijd bij huisarts voor verwijzing",
        "Minder administratieve rompslomp",
        "Toch vergoed door aanvullende verzekering"
      ]
    },
    mustHaves: {
      title: "Wat Is Verplicht Voor Vergoeding?",
      requirements: [
        {
          item: "Diëtist staat in BIG-register",
          critical: true,
          check: "Controleer op bigregister.nl - anders GEEN vergoeding!"
        },
        {
          item: "Contract met jouw zorgverzekeraar",
          critical: true,
          check: "Check lijst op website verzekeraar of bel klantenservice"
        },
        {
          item: "Aanvullende verzekering afgesloten",
          critical: true,
          check: "Basisverzekering vergoedt NIET, alleen aanvullend pakket"
        },
        {
          item: "Binnen jaarlijks maximum blijven",
          critical: false,
          check: "Check hoeveel budget je nog over hebt dit jaar"
        }
      ]
    }
  };

  const savingsTips = [
    {
      tip: "Kies Een Gecontracteerde Diëtist",
      saving: "100% vergoeding vs 75% bij vrije keuze",
      explanation: "Diëtisten met contract bij jouw verzekeraar worden volledig vergoed. Vrije keuze diëtisten vaak maar 75%.",
      action: "Check de lijst op website van je verzekeraar"
    },
    {
      tip: "Upgrade Je Aanvullende Verzekering",
      saving: "€150-300 extra vergoeding per jaar",
      explanation: "Hoger pakket kost €5-15 per maand extra, maar vergoedt €150-300 meer aan diëtist kosten.",
      action: "Bereken of upgrade voordeliger is (vaak wel bij > 5 consulten)"
    },
    {
      tip: "Gebruik Je Budget Elk Jaar",
      saving: "Verlies niet €200+ ongebruikt budget",
      explanation: "Budget voor diëtist vervalt eind jaar en telt niet mee naar volgend jaar.",
      action: "November/december nog 1-2 consulten plannen als budget over is"
    },
    {
      tip: "Vraag Naar Kortingstrajecten",
      saving: "10-20% korting bij vooruitbetaling",
      explanation: "Sommige diëtisten geven korting als je een compleet traject vooruitbetaalt (5-10 consulten).",
      action: "Vraag tijdens intake of er pakket-kortingen zijn"
    },
    {
      tip: "Combineer Met Werkgever Regeling",
      saving: "Extra €100-200 via werkgever",
      explanation: "Veel werkgevers hebben leefstijlbudget of vitaliteitsprogramma dat ook diëtist vergoedt.",
      action: "Check bij HR of je werkgever lifestyle/gezondheidsbudget heeft"
    },
    {
      tip: "Kies Online Consulten Waar Mogelijk",
      saving: "€5-10 per consult",
      explanation: "Videoconsulten zijn vaak goedkoper en net zo effectief als fysieke consulten.",
      action: "Vraag of vervolgconsulten online kunnen (intake vaak wel fysiek)"
    }
  ];

  const notCovered = {
    title: "Wat Wordt NIET Vergoed?",
    items: [
      {
        item: "Producten en Supplementen",
        explanation: "Eiwitpoeders, vitamines, maaltijdvervangers moet je zelf betalen",
        alternative: "Diëtist kan vaak goedkopere alternatieven adviseren uit normale voeding"
      },
      {
        item: "DNA/Bloedtesten",
        explanation: "Commerciële voedingstesten (bijv. voedselintolerantie DNA test) meestal niet vergoed",
        alternative: "Medisch noodzakelijke bloedtesten via huisarts wel vergoed"
      },
      {
        item: "Boeken en Materiaal",
      explanation: "Receptenboeken, weegschalen, meal prep bakjes zijn voor eigen rekening",
        alternative: "Veel gratis materiaal krijg je van diëtist (handouts, recepten)"
      },
      {
        item: "No-Show Kosten",
        explanation: "Als je niet komt opdagen en niet 24u van tevoren afzegt, betaal je vaak vol tarief",
        alternative: "Zet afspraken in agenda met herinnering"
      },
      {
        item: "Lifestyle Coaching",
        explanation: "Als je geen medische noodzaak hebt (puur cosmetisch), vaak geen vergoeding",
        alternative: "Ook bij 'klein' overgewicht is vaak medische indicatie aan te tonen"
      }
    ]
  };

  const realExamples = [
    {
      case: "Emma, 32 jaar - Gewichtsverlies 15 kg",
      situation: "BMI 29, wil gezond afvallen",
      trajectory: "8 consulten in 6 maanden",
      costs: {
        gross: "€80 (intake) + 7 × €55 = €465",
        insurance: "Zilveren Kruis Standaard: €250 vergoed",
        net: "€215 eigen bijdrage"
      },
      perMonth: "€36 per maand",
      worth: "Ja - blijvend resultaat en gezonder"
    },
    {
      case: "Jan, 58 jaar - Diabetes Type 2",
      situation: "Net gediagnosticeerd, suiker te hoog",
      trajectory: "12 consulten in 12 maanden",
      costs: {
        gross: "€90 (intake) + 11 × €60 = €750",
        insurance: "VGZ Excellent: €300 vergoed + werkgever €150",
        net: "€300 eigen bijdrage"
      },
      perMonth: "€25 per maand",
      worth: "Zeker - voorkomt medicatie en complicaties"
    },
    {
      case: "Lisa, 25 jaar - Sportvoeding",
      situation: "Halve marathon training optimaliseren",
      trajectory: "4 consulten in 3 maanden",
      costs: {
        gross: "€85 (intake) + 3 × €60 = €265",
        insurance: "CZ Plus: €250 vergoed",
        net: "€15 eigen bijdrage"
      },
      perMonth: "€5 per maand",
      worth: "Absoluut - betere prestaties en herstel"
    }
  ];

  const declarationProcess = {
    steps: [
      {
        step: 1,
        title: "Tijdens Consult",
        action: "Diëtist noteert behandeling in systeem",
        time: "Direct"
      },
      {
        step: 2,
        title: "Betaling",
        action: "Je betaalt diëtist (pin, factuur of vooraf)",
        time: "Direct of binnen 14 dagen"
      },
      {
        step: 3,
        title: "Declaratie",
        action: "Diëtist declareert bij jouw verzekeraar (of jij zelf)",
        time: "Binnen 1-7 dagen"
      },
      {
        step: 4,
        title: "Vergoeding",
        action: "Geld wordt teruggestort op je rekening",
        time: "5-15 werkdagen"
      }
    ],
    methods: [
      {
        method: "Directe Declaratie",
        description: "Diëtist declareert direct bij verzekeraar, jij betaalt alleen eigen bijdrage",
        pros: ["Makkelijk", "Geen voorschot", "Geen gedoe"],
        cons: ["Moet gecontracteerde diëtist zijn"],
        recommended: true
      },
      {
        method: "Zelf Declareren",
        description: "Jij betaalt diëtist en declareert zelf bij verzekeraar",
        pros: ["Werkt bij elke diëtist", "Meer controle"],
        cons: ["Voorschot nodig", "Meer administratie", "Wachten op terugbetaling"],
        recommended: false
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Euro className="w-5 h-5" />
              <span className="font-medium">Kosten & Vergoeding 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wat Kost Een Diëtist? Tarieven en Vergoeding 2025
            </h1>
            <p className="text-xl text-emerald-50 mb-8">
              Complete gids over diëtist kosten, wat je zorgverzekering vergoedt en hoe je geld kunt besparen
            </p>
          </div>
        </header>

        {/* Quick Answer */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-100 border-l-4 border-emerald-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-emerald-600" />
                Het Snelle Antwoord
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">Tarieven 2025:</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span><strong>Eerste consult:</strong> €70-95 (gemiddeld €82)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span><strong>Vervolgconsult:</strong> €45-70 (gemiddeld €57)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Vergoeding:</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span><strong>Basisverzekering:</strong> €0 (niet vergoed)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span><strong>Aanvullend:</strong> €100-400/jaar (vaak 100%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Current Tariffs Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <h2 className="text-2xl font-bold p-6 bg-gray-50 border-b">Actuele Tarieven Overzicht 2025</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-50">
                      <th className="p-4 text-left font-semibold">Type Consult</th>
                      <th className="p-4 text-left font-semibold">Prijs Range</th>
                      <th className="p-4 text-left font-semibold">Gemiddeld</th>
                      <th className="p-4 text-left font-semibold">Duur</th>
                      <th className="p-4 text-left font-semibold">Wat Krijg Je</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-emerald-50">
                      <td className="p-4 font-bold">Eerste Consult (Intake)</td>
                      <td className="p-4 text-emerald-700 font-bold">€{currentTariffs.firstConsult.min} - €{currentTariffs.firstConsult.max}</td>
                      <td className="p-4 font-semibold">€{currentTariffs.firstConsult.average}</td>
                      <td className="p-4">{currentTariffs.firstConsult.duration}</td>
                      <td className="p-4 text-sm">{currentTariffs.firstConsult.description}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Vervolgconsult</td>
                      <td className="p-4 text-emerald-700 font-bold">€{currentTariffs.followUp.min} - €{currentTariffs.followUp.max}</td>
                      <td className="p-4 font-semibold">€{currentTariffs.followUp.average}</td>
                      <td className="p-4">{currentTariffs.followUp.duration}</td>
                      <td className="p-4 text-sm">{currentTariffs.followUp.description}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-bold">Kort Consult</td>
                      <td className="p-4 text-emerald-700 font-bold">€{currentTariffs.shortConsult.min} - €{currentTariffs.shortConsult.max}</td>
                      <td className="p-4 font-semibold">€{currentTariffs.shortConsult.average}</td>
                      <td className="p-4">{currentTariffs.shortConsult.duration}</td>
                      <td className="p-4 text-sm">{currentTariffs.shortConsult.description}</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Groepssessie</td>
                      <td className="p-4 text-emerald-700 font-bold">€{currentTariffs.groupSession.min} - €{currentTariffs.groupSession.max}</td>
                      <td className="p-4 font-semibold">€{currentTariffs.groupSession.average}</td>
                      <td className="p-4">{currentTariffs.groupSession.duration}</td>
                      <td className="p-4 text-sm">{currentTariffs.groupSession.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Coverage */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Wat Vergoedt Je Zorgverzekering?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Overzicht per verzekeraar (gegevens 2025)
            </p>

            {/* Basis vs Aanvullend */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-100 rounded-full p-3">
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{insuranceCoverage.basis.title}</h3>
                    <p className="text-3xl font-bold text-red-600">{insuranceCoverage.basis.amount}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{insuranceCoverage.basis.note}</p>
                <div className="bg-red-100 rounded p-3">
                  <p className="text-sm text-red-800">
                    ⚠️ <strong>Belangrijk:</strong> Zonder aanvullende verzekering betaal je alles zelf!
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{insuranceCoverage.additional.title}</h3>
                    <p className="text-3xl font-bold text-green-600">{insuranceCoverage.additional.amount}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{insuranceCoverage.additional.note}</p>
                <div className="bg-green-100 rounded p-3">
                  <p className="text-sm text-green-800">
                    ✅ <strong>Check je polis:</strong> Zie hoeveel jouw pakket vergoedt!
                  </p>
                </div>
              </div>
            </div>

            {/* Insurer Comparison */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6">Vergoeding Per Verzekeraar</h3>
              {insuranceComparison.map((ins, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-bold mb-4 text-emerald-700">{ins.insurer}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left">Pakket</th>
                          <th className="p-3 text-left">Vergoeding</th>
                          <th className="p-3 text-left">Percentage</th>
                          <th className="p-3 text-left">Max Consulten</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ins.packages.map((pkg, pIdx) => (
                          <tr key={pIdx} className="border-b">
                            <td className="p-3 font-medium">{pkg.name}</td>
                            <td className="p-3 text-emerald-700 font-bold">{pkg.amount}</td>
                            <td className="p-3">{pkg.percentage}</td>
                            <td className="p-3 text-gray-600">{pkg.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mt-8">
              <p className="text-gray-700">
                <strong>💡 Tip:</strong> Bel je verzekeraar om exacte vergoeding te checken. Sommige verzekeraars hebben meerdere pakket varianten met verschillende bedragen. De getoonde bedragen zijn indicatief voor 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Price Factors */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              5 Factoren Die De Prijs Beïnvloeden
            </h2>

            <div className="space-y-6">
              {priceFactors.map((factor, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <factor.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{idx + 1}. {factor.factor}</h3>
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {factor.impact}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-3">
                        {factor.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-2 text-gray-700">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 italic">
                        <strong>Waarom:</strong> {factor.reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Trajectories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Wat Kost Een Compleet Traject?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {typicalTrajectories.map((traj, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 shadow-md border border-emerald-200">
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full w-fit mb-4 text-sm font-bold">
                    {traj.name}
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Duur</p>
                      <p className="font-semibold">{traj.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Sessies</p>
                      <p className="font-semibold">{traj.sessions}</p>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-600">Totale kosten</p>
                      <p className="font-bold text-lg">{traj.grossCost}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Verzekering vergoedt</p>
                      <p className="font-bold text-green-700">- {traj.insurance}</p>
                    </div>
                    <div className="bg-emerald-100 rounded p-3">
                      <p className="text-sm text-gray-600">Jij betaalt</p>
                      <p className="font-bold text-2xl text-emerald-700">{traj.netCost}</p>
                      <p className="text-sm text-gray-600 mt-1">{traj.perMonth}</p>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600 mb-1">Voor wie:</p>
                    <p className="text-sm">{traj.forWho}</p>
                  </div>
                  <div className="mt-3 bg-green-50 rounded p-2">
                    <p className="text-sm font-semibold text-green-800">
                      ✓ {traj.worth}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements 2025 */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Voorwaarden Voor Vergoeding (2025)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* No Referral */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full w-fit mb-4 text-sm font-bold">
                  GOED NIEUWS
                </div>
                <h3 className="text-xl font-bold mb-3">{requirements2025.noReferral.title}</h3>
                <p className="text-gray-600 mb-4">
                  <strong>{requirements2025.noReferral.since}:</strong> {requirements2025.noReferral.description}
                </p>
                <ul className="space-y-2">
                  {requirements2025.noReferral.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Must Haves */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full w-fit mb-4 text-sm font-bold">
                  VERPLICHT
                </div>
                <h3 className="text-xl font-bold mb-3">{requirements2025.mustHaves.title}</h3>
                <div className="space-y-3">
                  {requirements2025.mustHaves.requirements.map((req, idx) => (
                    <div key={idx} className={`p-3 rounded ${req.critical ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50'}`}>
                      <div className="flex items-start gap-2">
                        {req.critical ? (
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className={`font-semibold ${req.critical ? 'text-red-800' : 'text-gray-800'}`}>
                            {req.item}
                            {req.critical && <span className="text-red-600 ml-1">*</span>}
                          </p>
                          <p className="text-sm text-gray-600 italic">{req.check}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Savings Tips */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Tips Om Geld Te Besparen
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {savingsTips.map((tip, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{tip.tip}</h3>
                      <p className="text-green-700 font-semibold text-sm mb-2">💰 Besparing: {tip.saving}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{tip.explanation}</p>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm font-semibold text-green-800">
                      ✅ Actie: {tip.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Covered */}
        <section className="py-16 px-4 bg-yellow-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {notCovered.title}
            </h2>

            <div className="space-y-4">
              {notCovered.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{item.item}</h3>
                      <p className="text-gray-700 mb-2">{item.explanation}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                        <p className="text-sm text-blue-800">
                          <strong>Alternatief:</strong> {item.alternative}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Praktijkvoorbeelden: Wat Betaalden Anderen?
            </h2>

            <div className="space-y-6">
              {realExamples.map((example, idx) => (
                <div key={idx} className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
                  <h3 className="font-bold text-xl mb-3 text-emerald-800">{example.case}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 mb-4"><strong>Situatie:</strong> {example.situation}</p>
                      <p className="text-gray-700 mb-4"><strong>Traject:</strong> {example.trajectory}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Totale kosten:</span>
                          <span className="font-semibold">{example.costs.gross}</span>
                        </div>
                        <div className="flex justify-between text-green-700">
                          <span>Vergoed:</span>
                          <span className="font-semibold">- {example.costs.insurance}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                          <span className="font-bold">Eigen bijdrage:</span>
                          <span className="font-bold text-emerald-700 text-xl">{example.costs.net}</span>
                        </div>
                        <p className="text-sm text-gray-600 text-center">({example.perMonth})</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded p-3">
                    <p className="font-semibold text-green-800">
                      <strong>Was het de moeite waard?</strong> {example.worth}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Declaration Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Hoe Werkt Declareren?
            </h2>

            {/* Steps */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-center">Het Proces in 4 Stappen</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {declarationProcess.steps.map((step) => (
                  <div key={step.step} className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-700 mb-3">{step.action}</p>
                    <p className="text-xs text-gray-500">⏱️ {step.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methods */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-center">2 Manieren Van Declareren</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {declarationProcess.methods.map((method, idx) => (
                  <div key={idx} className={`rounded-xl p-6 shadow-md border-2 ${method.recommended ? 'bg-green-50 border-green-500' : 'bg-white border-gray-300'}`}>
                    {method.recommended && (
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full w-fit mb-3 text-sm font-bold">
                        AANBEVOLEN
                      </div>
                    )}
                    <h4 className="font-bold text-lg mb-3">{method.method}</h4>
                    <p className="text-gray-700 mb-4">{method.description}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm text-green-700 mb-1">Voordelen:</p>
                        <ul className="space-y-1">
                          {method.pros.map((pro, pIdx) => (
                            <li key={pIdx} className="flex gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-red-700 mb-1">Nadelen:</p>
                        <ul className="space-y-1">
                          {method.cons.map((con, cIdx) => (
                            <li key={cIdx} className="flex gap-2 text-sm text-gray-700">
                              <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klaar Om Te Starten?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Vind een diëtist bij jou in de buurt die gecontracteerd is bij jouw zorgverzekeraar voor optimale vergoeding
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Vind Een Diëtist in Jouw Regio
            </Link>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Een diëtist kost gemiddeld <strong>€70-95 voor het eerste consult</strong> en <strong>€45-70 voor vervolgconsulten</strong>. Hoewel dit niet in de basisverzekering zit, vergoedt je aanvullende verzekering meestal <strong>€100-400 per jaar</strong>, wat betekent dat je per saldo vaak maar <strong>€20-40 per consult</strong> zelf betaalt.
              </p>
              <p>
                Sinds 2022 heb je geen verwijzing meer nodig van je huisarts, waardoor de drempel om hulp te zoeken lager is. Check altijd eerst of de diëtist gecontracteerd is bij jouw verzekeraar voor optimale vergoeding.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Belangrijkste Tips:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Kies een gecontracteerde diëtist voor volledige vergoeding</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Check je aanvullende verzekering - sommige vergoeden tot €400/jaar</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Gebruik je jaarbudget volledig - het vervalt eind jaar</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Vraag naar pakket-kortingen bij vooruitbetaling van traject</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Online consulten zijn vaak €5-10 goedkoper</span>
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
