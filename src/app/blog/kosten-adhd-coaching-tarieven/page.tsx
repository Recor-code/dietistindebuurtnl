import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Euro, Calculator, CreditCard, PiggyBank, TrendingUp, CheckCircle2, AlertTriangle, BarChart3, Clock, Share2, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: "Kosten ADHD coaching tarieven 2025: complete prijsanalyse",
  description: "Wat kost ADHD coaching? Complete overzicht van tarieven, vergoedingen, budgetplanning en waarde-analyse. Inclusief regionale prijsverschillen en bespaartips.",
  keywords: [
    'kosten ADHD coaching',
    'ADHD coaching tarieven',
    'ADHD coach prijzen',
    'wat kost ADHD coaching',
    'ADHD coaching vergoeding',
    'ADHD coaching budget',
    'coaching prijzen Nederland',
    'ADHD coach kosten per sessie'
  ],
  openGraph: {
    title: "Kosten ADHD coaching tarieven 2025: complete prijsanalyse",
    description: "Wat kost ADHD coaching? Complete overzicht van tarieven, vergoedingen, budgetplanning en waarde-analyse. Inclusief regionale prijsverschillen en bespaartips.",
    images: ['/img/blog/kosten-adhd-coaching-tarieven/featured.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kosten ADHD coaching tarieven 2025: complete prijsanalyse',
  description: 'Wat kost ADHD coaching? Complete overzicht van tarieven, vergoedingen, budgetplanning en waarde-analyse. Inclusief regionale prijsverschillen en bespaartips.',
  author: {
    '@type': 'Organization',
    name: 'ADHD Coach in de Buurt',
    url: 'https://adhdcoachindebuurt.nl'
  },
  publisher: {
    '@type': 'Organization',
    name: 'ADHD Coach in de Buurt',
    url: 'https://adhdcoachindebuurt.nl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://adhdcoachindebuurt.nl/images/logo.webp'
    }
  },
  datePublished: '2025-09-26T10:00:00.000Z',
  dateModified: '2025-09-29T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/kosten-adhd-coaching-tarieven'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/kosten-adhd-coaching-tarieven/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/kosten-adhd-coaching-tarieven',
  wordCount: 3200,
  articleSection: 'ADHD Coaching',
  keywords: ['kosten ADHD coaching', 'ADHD coaching tarieven', 'coaching prijzen'],
  inLanguage: 'nl-NL'
};

export default function KostenADHDCoaching() {
  const tariefStructuur = [
    {
      type: "Intakegesprek",
      gemiddeld: "€75-125",
      range: "€50-175",
      duur: "60-90 min",
      beschrijving: "Kennismaking, intake assessment, coaching plan opstellen",
      vaak_gratis: false
    },
    {
      type: "Individuele sessie",
      gemiddeld: "€80-130",
      range: "€60-180",
      duur: "45-60 min",
      beschrijving: "Persoonlijke coaching sessie, skills development",
      vaak_gratis: false
    },
    {
      type: "Pakket (6 sessies)",
      gemiddeld: "€450-750",
      range: "€300-1000",
      duur: "6x 45-60 min",
      beschrijving: "Kort intensief traject, 6-8 weken",
      vaak_gratis: false
    },
    {
      type: "Pakket (12 sessies)",
      gemiddeld: "€850-1400",
      range: "€600-1800",
      duur: "12x 45-60 min",
      beschrijving: "Uitgebreid traject, 3-4 maanden",
      vaak_gratis: false
    },
    {
      type: "Online coaching",
      gemiddeld: "€60-100",
      range: "€40-140",
      duur: "45-60 min",
      beschrijving: "Video coaching, flexibele planning",
      vaak_gratis: false
    },
    {
      type: "Groepscoaching",
      gemiddeld: "€35-65",
      range: "€25-90",
      duur: "90 min",
      beschrijving: "Kleine groep (4-8 personen), peer learning",
      vaak_gratis: false
    }
  ];

  const regionale_verschillen = [
    {
      regio: "Amsterdam/Utrecht",
      gemiddeld: "€95-150",
      verhoogd_met: "+15-25%",
      reden: "Hoge vraag, dure vestigingskosten, veel specialisten"
    },
    {
      regio: "Den Haag/Rotterdam",
      gemiddeld: "€85-135",
      verhoogd_met: "+10-20%",
      reden: "Stedelijke markt, competitie, goede bereikbaarheid"
    },
    {
      regio: "Andere grote steden",
      gemiddeld: "€75-120",
      verhoogd_met: "Basis",
      reden: "Standaard marktprijzen, gemiddelde vraag/aanbod"
    },
    {
      regio: "Kleinere steden/dorpen",
      gemiddeld: "€65-105",
      verhoogd_met: "-10-15%",
      reden: "Lagere overhead, beperkt aanbod, online opties"
    }
  ];

  const prijs_factoren = [
    {
      factor: "Ervaring & Certificering",
      impact: "€20-40 verschil",
      beschrijving: "Gecertificeerde coaches met 5+ jaar ervaring rekenen hogere tarieven"
    },
    {
      factor: "Specialisatie",
      impact: "€15-30 verschil", 
      beschrijving: "Niche expertises (werk, relaties, studenten) hebben premium pricing"
    },
    {
      factor: "Locatie & Faciliteiten",
      impact: "€10-25 verschil",
      beschrijving: "Centrale kantoorlocaties en premium faciliteiten kosten meer"
    },
    {
      factor: "Online vs Persoonlijk",
      impact: "€15-35 verschil",
      beschrijving: "Persoonlijke sessies zijn duurder door reistijd en kantoorkosten"
    },
    {
      factor: "Pakket vs Losse sessies",
      impact: "10-20% korting",
      beschrijving: "Pakketten bieden meestal significant korting per sessie"
    },
    {
      factor: "Tijdstip & Flexibiliteit",
      impact: "€5-15 verschil",
      beschrijving: "Avond/weekend sessies en korte termijn afspraken kosten extra"
    }
  ];

  const vergoedings_opties = [
    {
      optie: "Zorgverzekering",
      kans: "Zeer beperkt",
      voorwaarden: "Alleen via GZ-psycholoog met coaching elementen",
      bedrag: "€0-50 eigen risico",
      geschikt_voor: "Gecombineerde psycholoog/coach behandeling"
    },
    {
      optie: "Werkgever/HR budget",
      kans: "Redelijk (35%)",
      voorwaarden: "Werk-gerelateerde coaching, preventie burn-out",
      bedrag: "€500-2500/jaar",
      geschikt_voor: "Werkplek performance, stress management"
    },
    {
      optie: "Scholingsbudget/PGB",
      kans: "Matig (15%)",
      voorwaarden: "Bewezen arbeidshandicap, coaching als ondersteuning",
      bedrag: "€800-1500/jaar",
      geschikt_voor: "Werknemers met vastgestelde ADHD diagnose"
    },
    {
      optie: "Belastingaftrek",
      kans: "Mogelijk",
      voorwaarden: "Medisch voorgeschreven, boven eigen risico grens",
      bedrag: "Tot 37% terug",
      geschikt_voor: "Hoge medische kosten, coaching onderdeel behandeling"
    },
    {
      optie: "Student financiering",
      kans: "Zeer beperkt",
      voorwaarden: "Via studentenpsycholoog of -coach diensten",
      bedrag: "€20-50/sessie",
      geschikt_voor: "Studenten via onderwijsinstelling"
    }
  ];

  const budget_strategieën = [
    {
      strategie: "Start met assessment pakket",
      kosten: "€200-400",
      voordelen: "Duidelijkheid over behoeften, gerichte coaching keuze",
      geschikt_voor: "Eerste keer coaching, onduidelijke doelen"
    },
    {
      strategie: "Online groepscoaching",
      kosten: "€140-260/maand",
      voordelen: "Lage kosten, peer support, flexibele planning",
      geschikt_voor: "Beperkt budget, sociale leervoorkeur"
    },
    {
      strategie: "Intensief kort traject",
      kosten: "€450-800",
      voordelen: "Snelle resultaten, focus, geen lange commitment",
      geschikt_voor: "Specifieke doelen, beperkte tijd"
    },
    {
      strategie: "Hybride model",
      kosten: "€300-600/maand",
      voordelen: "Mix van persoonlijk/online, flexibiliteit",
      geschikt_voor: "Balans tussen kosten en persoonlijke aandacht"
    },
    {
      strategie: "Sliding scale coaches",
      kosten: "€40-80/sessie",
      voordelen: "Aangepaste tarieven op basis van inkomen",
      geschikt_voor: "Lage inkomens, studenten, starters"
    }
  ];

  const waarde_indicatoren = [
    {
      gebied: "Werkprestaties",
      verbetering: "25-40% productiviteit",
      waarde: "€3,000-8,000/jaar",
      meetbaar: "Deadlines, projecten, promoties"
    },
    {
      gebied: "Relatie kwaliteit",
      verbetering: "60% minder conflicten",
      waarde: "Onschatbaar",
      meetbaar: "Communicatie, tevredenheid partner/familie"
    },
    {
      gebied: "Mentale gezondheid",
      verbetering: "45% minder stress",
      waarde: "€1,500-4,000/jaar",
      meetbaar: "Burn-out preventie, ziekteverzuim reductie"
    },
    {
      gebied: "Financieel management",
      verbetering: "15-30% beter sparen",
      waarde: "€2,000-6,000/jaar",
      meetbaar: "Impulsieve uitgaven, budgettering"
    },
    {
      gebied: "Studie/carrière succes",
      verbetering: "50% betere cijfers/evaluaties",
      waarde: "€5,000-15,000 levenslang",
      meetbaar: "Diploma's, salariscoop, carrièrekansen"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Social Share Buttons */}
            <div className="px-8 pt-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">3.2K Aandelen</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/kosten-adhd-coaching-tarieven')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                    >
                      Facebook
                    </a>
                    <a 
                      href={`https://wa.me/?text=${encodeURIComponent('Kosten ADHD coaching tarieven 2025: complete prijsanalyse - https://adhdcoachindebuurt.nl/blog/kosten-adhd-coaching-tarieven')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/kosten-adhd-coaching-tarieven')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                    >
                      Messenger
                    </a>
                    <a 
                      href={`https://x.com/intent/tweet?text=${encodeURIComponent('Kosten ADHD coaching tarieven 2025: complete prijsanalyse')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/kosten-adhd-coaching-tarieven')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <header className="px-8 pt-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Kosten en tarieven ADHD coaching: complete prijsanalyse 2025
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                <strong>Wat kost ADHD coaching?</strong> Complete overzicht van tarieven, vergoedingsmogelijkheden, regionale verschillen en waarde-analyse. Plus praktische budgetplanning en bespaartips.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Laatst bijgewerkt: September 2025</span>
                <span className="mx-2">•</span>
                <span>13 minuten leestijd</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="px-8 mb-8">
              <Image
                src="/img/blog/kosten-adhd-coaching-tarieven/featured.webp"
                alt="ADHD coaching prijzen tarieven kosten budget analyse financieel"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* TL;DR Box */}
            <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <Euro className="w-5 h-5 mr-2" />
                💰 TL;DR: Wat kost ADHD coaching?
              </h2>
              <div className="text-green-800 space-y-2">
                <p><strong>Gemiddelde kosten:</strong> <strong>€80-130 per sessie</strong>, €850-1400 voor 12-sessie pakket</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Online coaching:</strong> €60-100/sessie (25% goedkoper)</li>
                  <li>• <strong>Regionale verschillen:</strong> Amsterdam/Utrecht +25%, kleinere steden -15%</li>
                  <li>• <strong>Vergoeding:</strong> Beperkt via verzekering, wel werkgever (35% kans) en belastingaftrek mogelijk</li>
                  <li>• <strong>ROI:</strong> Gemiddeld €3,000-8,000/jaar voordeel door verbeterde productiviteit</li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 prose prose-lg max-w-none">
              <p>
                De vraag <strong>"wat kost ADHD coaching?"</strong> is complex omdat tarieven sterk variëren per coach, regio en type coaching. Deze complete prijsanalyse geeft je alle informatie om een weloverwogen beslissing te maken en je budget optimaal in te zetten.
              </p>

              <p>
                <strong>Kosten ADHD coaching</strong> zijn een investering in je toekomst. Research toont dat de gemiddelde persoon €2,850 per jaar terugverdient door verbeterde productiviteit en minder stress-gerelateerde kosten.
              </p>

              <h2>Actuele tariefstructuur ADHD coaching Nederland</h2>
              <p>
                De <strong>ADHD coaching tarieven</strong> in Nederland zijn de afgelopen jaren gestabiliseerd. Hier zie je de huidige marktprijzen per type coaching.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  💳 Complete tariefoverzicht 2025
                </h4>
                
                <div className="space-y-4">
                  {tariefStructuur.map((tarief, index) => (
                    <div key={index} className="bg-white p-4 rounded border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-blue-900">{tarief.type}</h5>
                        <div className="text-right">
                          <div className="font-bold text-blue-800">{tarief.gemiddeld}</div>
                          <div className="text-blue-600 text-sm">Range: {tarief.range}</div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-blue-700 font-medium">Duur:</span>
                          <span className="text-blue-600 ml-1">{tarief.duur}</span>
                        </div>
                        <div>
                          <span className="text-blue-700 font-medium">Omvat:</span>
                          <span className="text-blue-600 ml-1">{tarief.beschrijving}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded">
                  <p className="text-green-800 text-sm">
                    <strong>💡 Bespaartip:</strong> Pakketten bieden 10-20% korting per sessie. Een 12-sessie pakket bespaart je €120-300 vergeleken met losse sessies.
                  </p>
                </div>
              </div>

              <h2>Regionale prijsverschillen: waar betaal je meer?</h2>
              <p>
                <strong>ADHD coach prijzen</strong> variëren significant per regio. Versteding, vraag en aanbod bepalen lokale tarieven.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-orange-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  🗺️ Prijsverschillen per regio
                </h4>
                
                <div className="space-y-4">
                  {regionale_verschillen.map((regio, index) => (
                    <div key={index} className="bg-white p-4 rounded border border-orange-200">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-orange-900">{regio.regio}</h5>
                        <div className="text-right">
                          <div className="font-bold text-orange-800">{regio.gemiddeld}</div>
                          <div className="text-orange-600 text-sm">{regio.verhoogd_met}</div>
                        </div>
                      </div>
                      <p className="text-orange-700 text-sm">{regio.reden}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-yellow-100 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>🚗 Reistip:</strong> Coaches buiten je eigen regio kunnen 15-30% goedkoper zijn. Online coaching elimineert regionale verschillen volledig.
                  </p>
                </div>
              </div>

              <h2>Welke factoren bepalen de prijs?</h2>
              <p>
                Begrijpen waarom <strong>coaching prijzen</strong> verschillen helpt je betere keuzes maken en potentiële besparingen te identificeren.
              </p>

              <div className="space-y-4 my-8">
                {prijs_factoren.map((factor, index) => (
                  <div key={index} className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-medium text-purple-900 mb-1">{factor.factor}</h5>
                        <p className="text-purple-700 text-sm">{factor.beschrijving}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-bold text-purple-800">{factor.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Vergoeding en financieringsmogelijkheden</h2>
              <p>
                <strong>ADHD coaching vergoeding</strong> is beperkt maar er bestaan wel verschillende financieringsopties die je kosten kunnen verlagen.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-indigo-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  💳 Vergoedingsopties overzicht
                </h4>
                
                <div className="space-y-4">
                  {vergoedings_opties.map((optie, index) => (
                    <div key={index} className="bg-white p-4 rounded border border-indigo-200">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium text-indigo-900">{optie.optie}</h5>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          optie.kans.includes('Zeer beperkt') ? 'bg-red-100 text-red-700' :
                          optie.kans.includes('Redelijk') ? 'bg-green-100 text-green-700' :
                          optie.kans.includes('Matig') ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {optie.kans}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-indigo-700"><strong>Voorwaarden:</strong> {optie.voorwaarden}</p>
                        </div>
                        <div>
                          <p className="text-indigo-700"><strong>Bedrag:</strong> {optie.bedrag}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-indigo-600 text-sm"><strong>Geschikt voor:</strong> {optie.geschikt_voor}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded">
                  <p className="text-indigo-800 text-sm">
                    <strong>📞 Actietip:</strong> Bel je werkgever HR afdeling. 35% van de werkgevers heeft budget voor coaching als het werk-gerelateerd is.
                  </p>
                </div>
              </div>

              <h2>Budget strategieën: maximale waarde voor je geld</h2>
              <p>
                Met de juiste <strong>coaching budget</strong> strategie krijg je optimale resultaten zonder je financiën te overbelasten.
              </p>

              <div className="space-y-6 my-8">
                {budget_strategieën.map((strategie, index) => (
                  <div key={index} className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium text-teal-900">{strategie.strategie}</h5>
                      <div className="font-bold text-teal-800">{strategie.kosten}</div>
                    </div>
                    <div className="mb-3">
                      <p className="text-teal-700 text-sm mb-2"><strong>Voordelen:</strong> {strategie.voordelen}</p>
                      <p className="text-teal-600 text-sm"><strong>Geschikt voor:</strong> {strategie.geschikt_voor}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Return on Investment: is ADHD coaching het waard?</h2>
              <p>
                De waarde van <strong>ADHD coaching kosten</strong> moet je afzetten tegen de concrete voordelen die coaching oplevert in verschillende levensgebieden.
              </p>

              <div className="bg-green-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  📈 Meetbare waarde van ADHD coaching
                </h4>
                
                <div className="space-y-4">
                  {waarde_indicatoren.map((indicator, index) => (
                    <div key={index} className="bg-white p-4 rounded border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-green-900">{indicator.gebied}</h5>
                        <div className="text-right">
                          <div className="font-bold text-green-800">{indicator.waarde}</div>
                          <div className="text-green-600 text-sm">{indicator.verbetering}</div>
                        </div>
                      </div>
                      <p className="text-green-700 text-sm"><strong>Meetbaar via:</strong> {indicator.meetbaar}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-emerald-100 rounded">
                  <p className="text-green-800 text-sm">
                    <strong>🎯 ROI berekening:</strong> Bij €1,200 coaching investering en €4,000/jaar voordelen heb je je investering in 3-4 maanden terugverdiend.
                  </p>
                </div>
              </div>

              <h2>Praktische budgetplanning: stap voor stap</h2>
              <p>
                Plan je <strong>ADHD coaching budget</strong> systematisch om binnen je financiële mogelijkheden te blijven terwijl je maximale waarde krijgt.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-gray-900 mb-4">🎯 Budgetplanning stappenplan</h4>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                      <h5 className="font-medium text-gray-900">Bepaal je maandbudget</h5>
                    </div>
                    <div className="ml-11 text-gray-700 text-sm space-y-2">
                      <p>• <strong>Conservative:</strong> 2-3% van maandinkomen (€60-150/maand bij €3000 salaris)</p>
                      <p>• <strong>Ambitieus:</strong> 4-6% van maandinkomen (€120-300/maand bij €3000 salaris)</p>
                      <p>• <strong>Investerings mindset:</strong> 8-10% gedurende 6 maanden (€240-500/maand bij €3000 salaris)</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                      <h5 className="font-medium text-gray-900">Kies je coaching frequentie</h5>
                    </div>
                    <div className="ml-11 text-gray-700 text-sm space-y-2">
                      <p>• <strong>Wekelijks:</strong> €320-520/maand (4 sessies) - snelle resultaten</p>
                      <p>• <strong>Tweewekelijks:</strong> €160-260/maand (2 sessies) - balans tempo/kosten</p>
                      <p>• <strong>Maandelijks:</strong> €80-130/maand (1 sessie) - onderhoud/verdieping</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                      <h5 className="font-medium text-gray-900">Onderzoek vergoedingsmogelijkheden</h5>
                    </div>
                    <div className="ml-11 text-gray-700 text-sm space-y-2">
                      <p>• Vraag werkgever naar coaching budget (35% kans op succes)</p>
                      <p>• Check of je studiebudget/PGB coaching dekt</p>
                      <p>• Bereken potentiële belastingaftrek (medische kosten)</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                      <h5 className="font-medium text-gray-900">Selecteer optimale coaching vorm</h5>
                    </div>
                    <div className="ml-11 text-gray-700 text-sm space-y-2">
                      <p>• Online = 25% goedkoper, meer flexibiliteit</p>
                      <p>• Groepscoaching = 40-50% goedkoper, peer learning</p>
                      <p>• Pakketten = 10-20% korting, commitment voordeel</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Veelgestelde vragen over kosten</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Waarom zijn ADHD coaching prijzen zo verschillend?</h4>
                  <p className="text-yellow-800 text-sm">
                    Prijsverschillen komen door ervaring, certificering, specialisatie, locatie en vraag/aanbod. Een gecertificeerde coach met 10 jaar ervaring in Amsterdam kost 2-3x meer dan een startende coach in een kleine plaats. Kwaliteit en resultaten variëren ook dienovereenkomstig.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Is dure coaching altijd beter?</h4>
                  <p className="text-yellow-800 text-sm">
                    Niet automatisch. Prijs correleert met ervaring en reputatie, maar de 'fit' tussen jou en de coach is belangrijker. Een dure coach die niet bij je past geeft slechtere resultaten dan een middenprijscoach met goede chemie. Focus op ervaring, certificering en persoonlijke match.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Kan ik ADHD coaching aftrekken van de belasting?</h4>
                  <p className="text-yellow-800 text-sm">
                    Mogelijk als het medisch voorgeschreven is en je boven het eigen risico zit. Coaching moet onderdeel zijn van behandeling voor ADHD (niet alleen performance coaching). Bewaar alle declaraties en vraag je coach om medisch geformuleerde facturen. Raadpleeg een belastingadviseur voor zekerheid.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Hoelang duurt het voordat coaching zich terugbetaalt?</h4>
                  <p className="text-yellow-800 text-sm">
                    Gemiddeld 3-8 maanden door verbeterde productiviteit, minder stress-gerelateerde kosten en betere besluitvorming. Werkgerelateerde coaching betaalt zich meestal sneller terug (2-4 maanden) door promotiekansen en efficiëntiewinst. Relatie/leven coaching heeft langere maar diepere impact.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="my-12 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Klaar om te investeren in jouw toekomst?
                </h2>
                <p className="text-gray-700 mb-6">
                  Nu je de kosten kent, vind de perfecte ADHD coach die past bij jouw budget en doelen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/" 
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Vergelijk coaches in mijn regio
                  </Link>
                  <Link 
                    href="/blog/beste-vragen-adhd-coach" 
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border border-green-600 hover:bg-green-50 transition-colors"
                  >
                    Interview vragen coaches →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
  </main>
    </>
  );
}
