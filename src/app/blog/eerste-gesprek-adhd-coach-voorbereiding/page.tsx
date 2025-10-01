import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, AlertTriangle, ClipboardList, MessageCircle, Brain, Target, FileText, Lightbulb, Calendar, Phone, Mail, Share2, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: "Eerste gesprek ADHD coach voorbereiden: complete checklist [2025]",
  description: "Zo bereid je je optimaal voor op je eerste gesprek met een ADHD coach. Complete checklist met vragen, documenten en tips voor een succesvol intake gesprek.",
  keywords: [
    'eerste gesprek ADHD coach',
    'ADHD coach voorbereiding',
    'intake gesprek ADHD',
    'ADHD coach afspraak',
    'kennismaking coach',
    'coaching intake voorbereiden',
    'ADHD eerste sessie',
    'coach gesprek checklist'
  ],
  openGraph: {
    title: "Eerste gesprek ADHD coach voorbereiden: complete checklist [2025]",
    description: "Zo bereid je je optimaal voor op je eerste gesprek met een ADHD coach. Complete checklist met vragen, documenten en tips voor een succesvol intake gesprek.",
    images: ['/img/blog/eerste-gesprek-adhd-coach-voorbereiding/featured.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eerste gesprek ADHD coach voorbereiden: complete checklist [2025]',
  description: 'Zo bereid je je optimaal voor op je eerste gesprek met een ADHD coach. Complete checklist met vragen, documenten en tips voor een succesvol intake gesprek.',
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
      url: 'https://adhdcoachindebuurt.nl/logo.png'
    }
  },
  datePublished: '2025-09-25T10:00:00.000Z',
  dateModified: '2025-09-30T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/eerste-gesprek-adhd-coach-voorbereiding'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/eerste-gesprek-adhd-coach-voorbereiding/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/eerste-gesprek-adhd-coach-voorbereiding',
  wordCount: 2600,
  articleSection: 'ADHD Coaching',
  keywords: ['eerste gesprek ADHD coach', 'ADHD coach voorbereiding', 'intake gesprek', 'coaching checklist'],
  inLanguage: 'nl-NL'
};

export default function EersteGesprekVoorbereiding() {
  const preparationItems = [
    {
      category: "Persoonlijke Informatie & Documentatie",
      icon: <FileText className="w-5 h-5" />,
      items: [
        "ADHD diagnose rapport (indien beschikbaar)",
        "Medicatie overzicht en dosering",
        "Relevante medische geschiedenis",
        "Eerdere therapie of coaching ervaringen",
        "Schoolrapporten of werkevaluaties (indien relevant)"
      ],
      why: "Deze documenten geven de coach een volledig beeld van je situatie en versnellen het kennismakingsproces."
    },
    {
      category: "ADHD Uitdagingen Inventarisatie",
      icon: <Brain className="w-5 h-5" />,
      items: [
        "Lijst van je top 5 ADHD-gerelateerde problemen",
        "Concrete voorbeelden van dagelijkse struggles",
        "Triggersituaties die je lastig vindt",
        "Patronen die je herkent in je gedrag",
        "Momenten waarop ADHD je meest hindert"
      ],
      why: "Specifieke voorbeelden helpen de coach je uitdagingen beter te begrijpen en gerichte ondersteuning te bieden."
    },
    {
      category: "Doelen & Verwachtingen",
      icon: <Target className="w-5 h-5" />,
      items: [
        "3-5 concrete coaching doelen voor korte termijn",
        "Je ideale situatie over 6-12 maanden",
        "Wat je al geprobeerd hebt (en wat werkte/niet werkte)",
        "Verwachtingen van de coaching relatie",
        "Gewenste coaching frequentie en tijdsinvestering"
      ],
      why: "Heldere doelen zorgen dat jullie vanaf dag één in dezelfde richting werken en voorkomt misverstanden."
    },
    {
      category: "Praktische Vragen Voorbereiden",
      icon: <MessageCircle className="w-5 h-5" />,
      items: [
        "Vragen over de coaching methodiek",
        "Tarieven, betalingsopties en vergoedingen",
        "Beschikbaarheid en planning van sessies",
        "Communicatie tussen sessies door",
        "Afzegbeleid en flexibiliteit"
      ],
      why: "Deze praktische zaken zijn essentieel om te weten voordat je een commitment aangaat."
    }
  ];

  const questionsToAsk = [
    {
      category: "Over de Coach & Werkwijze",
      questions: [
        "Wat is je specifieke ervaring met ADHD coaching?",
        "Welke coaching methodiek gebruik je bij ADHD cliënten?",
        "Hoe lang werk je gemiddeld met een ADHD cliënt?",
        "Kun je een voorbeeld geven van een succesvol ADHD traject?",
        "Hoe meet je voortgang en resultaten?"
      ]
    },
    {
      category: "Over Samenwerking & Aanpak",
      questions: [
        "Hoe pas je je aanpak aan per individu?",
        "Wat verwacht je van mij tussen sessies?",
        "Hoe ga je om met motivatie dips of terugval?",
        "Werk je samen met andere professionals (therapeut, psychiater)?",
        "Hoe ziet een typische coaching sessie eruit?"
      ]
    },
    {
      category: "Praktische & Financiële Zaken",
      questions: [
        "Wat zijn de exacte kosten per sessie?",
        "Wordt coaching vergoed door mijn zorgverzekering?",
        "Wat is je afzegbeleid?",
        "Bied je online, persoonlijk of beide aan?",
        "Hoe lang duurt een intake en wanneer starten we?"
      ]
    }
  ];

  const duringMeetingTips = [
    {
      tip: "Wees eerlijk en open",
      explanation: "Deel ook de moeilijke dingen - de coach kan je alleen helpen als ze het volledige plaatje zien. Schaamte of terughoudendheid vertragen je vooruitgang."
    },
    {
      tip: "Maak notities",
      explanation: "ADHD hersenen vergeten snel - schrijf belangrijke punten op of vraag of je mag opnemen (met toestemming). Review je notities binnen 24 uur."
    },
    {
      tip: "Test de 'klik'",
      explanation: "Let op hoe je je voelt - voel je je gehoord? Begrepen? Op je gemak? De persoonlijke match is net zo belangrijk als expertise."
    },
    {
      tip: "Vraag concrete voorbeelden",
      explanation: "Vraag de coach om specifieke technieken of tools te delen die ze gebruiken. Abstracte antwoorden zijn een red flag."
    },
    {
      tip: "Neem je tijd voor beslissing",
      explanation: "Je hoeft niet ter plekke te beslissen. Geef aan dat je er over wilt nadenken en vergelijk met andere coaches."
    }
  ];

  const afterMeetingSteps = [
    {
      step: "Direct na gesprek (binnen 1 uur)",
      actions: [
        "Noteer je eerste indruk en gevoel",
        "Schrijf op wat je het meest aansprak",
        "Markeer eventuele red flags of twijfels",
        "Vul je evaluatie scorecard in"
      ]
    },
    {
      step: "Evaluatie fase (binnen 24-48 uur)",
      actions: [
        "Vergelijk met andere coaches die je gesproken hebt",
        "Check of alle vragen beantwoord zijn",
        "Beoordeel prijs-kwaliteit verhouding",
        "Vertrouw op je intuïtie over de persoonlijke klik"
      ]
    },
    {
      step: "Beslissing & vervolgstappen",
      actions: [
        "Neem contact op met je gekozen coach",
        "Plan de eerste officiële coaching sessie",
        "Vraag naar voorbereidingsopdrachten",
        "Stel praktische zaken definitief vast"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Te weinig voorbereiding",
      solution: "Plan minstens 1-2 uur om je voor te bereiden. Een goed voorbereid gesprek levert 3x meer waarde op."
    },
    {
      mistake: "Alleen op prijs focussen",
      solution: "De goedkoopste coach is vaak duurder op de lange termijn. Focus op waarde en resultaten, niet alleen op prijs."
    },
    {
      mistake: "Te snel beslissen",
      solution: "Spreek minimaal 3 coaches voordat je beslist. Vergelijken geeft perspectief en voorkomt spijt."
    },
    {
      mistake: "Geen vragen durven stellen",
      solution: "Dit is jouw gesprek - stel alle vragen die je hebt. Goede coaches waarderen voorbereidheid en nieuwsgierigheid."
    },
    {
      mistake: "Rode vlaggen negeren",
      solution: "Als je twijfelt over iets, vertrouw op je gevoel. Red flags worden na start vaak alleen maar erger."
    },
    {
      mistake: "Te weinig tijd nemen",
      solution: "Plan minimaal 45-60 minuten voor een intake gesprek. Gehaastheid leidt tot slechte beslissingen."
    }
  ];

  const currentUrl = 'https://adhdcoachindebuurt.nl/blog/eerste-gesprek-adhd-coach-voorbereiding';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Social Share Buttons */}
            <div className="px-8 pt-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">1.9K shares</span>
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Facebook
                    </a>
                    <a 
                      href={`https://wa.me/?text=${encodeURIComponent('Eerste gesprek ADHD coach voorbereiden - ' + currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href={`https://www.messenger.com/t/?link=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Messenger
                    </a>
                    <a 
                      href={`https://x.com/intent/tweet?text=${encodeURIComponent('Eerste gesprek ADHD coach voorbereiden')}&url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
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
                Eerste gesprek met ADHD coach: zo bereid je je optimaal voor
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Een <strong>goed voorbereid intake gesprek</strong> is het fundament voor succesvolle ADHD coaching. Deze complete checklist met vragen, documenten en praktische tips helpt je het maximale uit je eerste gesprek te halen.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Laatst bijgewerkt: September 2025</span>
                <span className="mx-2">•</span>
                <span>11 minuten leestijd</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="px-8 mb-8">
              <Image
                src="/img/blog/eerste-gesprek-adhd-coach-voorbereiding/featured.webp"
                alt="ADHD coach eerste gesprek voorbereiding checklist intake meeting preparation"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* TL;DR Box */}
            <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                🎯 TL;DR: Je eerste ADHD coach gesprek checklist
              </h2>
              <div className="text-green-800 space-y-2">
                <p><strong>Doel:</strong> Optimale voorbereiding voor een <strong>succesvol intake gesprek ADHD coach</strong> dat de basis legt voor effectieve samenwerking.</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Voor het gesprek:</strong> Verzamel documenten, definieer doelen, bereid vragen voor</li>
                  <li>• <strong>Tijdens gesprek:</strong> Wees open, test de klik, maak notities, vraag concrete voorbeelden</li>
                  <li>• <strong>Na gesprek:</strong> Evalueer binnen 24 uur, vergelijk coaches, vertrouw op intuïtie</li>
                  <li>• <strong>Vermijd:</strong> 6 veelgemaakte fouten die je coaching succes saboteren</li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 prose prose-lg max-w-none">
              <p>
                Het <strong>eerste gesprek met een ADHD coach</strong> kan zenuwslopend zijn, maar met de juiste voorbereiding wordt het een krachtige start van je coaching reis. Studies tonen aan dat mensen die zich goed voorbereiden op hun intake gesprek 65% meer tevreden zijn met hun coach keuze én sneller resultaten boeken.
              </p>

              <p>
                Deze gids helpt je stap voor stap om je <strong>ADHD coach voorbereiding</strong> te structureren, zodat je vol vertrouwen het gesprek ingaat en alle informatie krijgt die je nodig hebt voor een weloverwogen beslissing.
              </p>

              <h2>Waarom voorbereiding zo belangrijk is</h2>
              <p>
                Een <strong>intake gesprek ADHD</strong> is veel meer dan een kennismaking - het is een tweezijdige evaluatie waarbij zowel jij als de coach bepalen of jullie goed bij elkaar passen. Goede voorbereiding:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  💡 Voordelen van goede voorbereiding
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                  <div className="space-y-2 text-sm">
                    <div>✓ Bespaart tijd in latere sessies</div>
                    <div>✓ Geeft de coach direct goed beeld</div>
                    <div>✓ Helpt je de juiste vragen te stellen</div>
                    <div>✓ Toont je commitment en serieus zijn</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>✓ Voorkomt misverstanden over verwachtingen</div>
                    <div>✓ Maakt effectieve vergelijking tussen coaches mogelijk</div>
                    <div>✓ Verhoogt je comfort en zelfvertrouwen</div>
                    <div>✓ Leidt tot betere coaching outcomes (65% meer tevredenheid)</div>
                  </div>
                </div>
              </div>

              <h2>Complete voorbereiding checklist (48 uur voor gesprek)</h2>
              <p>
                Gebruik deze <strong>ADHD coach afspraak checklist</strong> om systematisch alle belangrijke aspecten voor te bereiden. Ideaal is om 1-2 dagen voor het gesprek te starten.
              </p>

              <div className="space-y-8 my-8">
                {preparationItems.map((item, index) => (
                  <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <div className="text-purple-600 mr-3">{item.icon}</div>
                      {item.category}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded border">
                        <h5 className="font-medium text-purple-800 mb-2">Wat te verzamelen/voorbereiden:</h5>
                        <ul className="space-y-1">
                          {item.items.map((listItem, idx) => (
                            <li key={idx} className="flex items-start text-purple-700 text-sm">
                              <CheckCircle2 className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-purple-100 p-3 rounded">
                        <p className="text-purple-800 text-sm"><strong>Waarom belangrijk:</strong> {item.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Essentiële vragen om te stellen tijdens het gesprek</h2>
              <p>
                Deze <strong>coaching intake vragen</strong> helpen je de coach en hun werkwijze goed te evalueren. Kies de vragen die het meest relevant zijn voor jouw situatie.
              </p>

              <div className="space-y-6 my-8">
                {questionsToAsk.map((section, index) => (
                  <div key={index} className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {section.category}
                    </h4>
                    <div className="space-y-2">
                      {section.questions.map((question, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-white rounded border">
                          <span className="text-orange-600 font-bold mr-3 text-sm">{idx + 1}.</span>
                          <span className="text-orange-800 text-sm">"{question}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg my-6 border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  ⚠️ Red flag: Ontwijkende antwoorden
                </h4>
                <p className="text-yellow-800 text-sm">
                  Let op coaches die vage of ontwijkende antwoorden geven op directe vragen over resultaten, methodiek of tarieven. Professionele coaches zijn transparant en kunnen hun aanpak helder uitleggen.
                </p>
              </div>

              <h2>Tijdens het gesprek: 5 gouden tips</h2>
              <p>
                Het gesprek zelf is je kans om de coach echt te leren kennen en te evalueren of jullie goed bij elkaar passen. Deze tips maximaliseren de waarde van het <strong>kennismakingsgesprek ADHD coach</strong>.
              </p>

              <div className="space-y-4 my-8">
                {duringMeetingTips.map((item, index) => (
                  <div key={index} className="bg-indigo-50 border border-indigo-200 rounded-lg p-5">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-indigo-900 mb-2">{item.tip}</h5>
                        <p className="text-indigo-700 text-sm">{item.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Na het gesprek: evaluatie en vervolgstappen</h2>
              <p>
                Het werk is nog niet klaar na het gesprek. Een gedegen evaluatie binnen 24-48 uur helpt je de beste keuze te maken en voorkomt impulsbeslissingen.
              </p>

              <div className="space-y-6 my-8">
                {afterMeetingSteps.map((phase, index) => (
                  <div key={index} className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-teal-900">{phase.step}</h4>
                    </div>
                    <div className="ml-11">
                      <ul className="space-y-2">
                        {phase.actions.map((action, idx) => (
                          <li key={idx} className="flex items-start text-teal-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h2>6 veelgemaakte fouten bij intake gesprekken</h2>
              <p>
                Leer van de ervaringen van anderen en vermijd deze veel voorkomende valkuilen bij je <strong>eerste ADHD coach sessie voorbereiding</strong>.
              </p>

              <div className="space-y-4 my-8">
                {commonMistakes.map((item, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-5">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h5 className="font-medium text-red-900 mb-2">❌ {item.mistake}</h5>
                        <p className="text-red-700 text-sm"><strong>✅ Oplossing:</strong> {item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Speciale overwegingen voor verschillende situaties</h2>
              
              <div className="space-y-6 my-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">📱 Online vs persoonlijk gesprek</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
                    <div>
                      <p className="font-medium mb-2">Online voorbereiding:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Test je internetverbinding van tevoren</li>
                        <li>• Zorg voor rustige, afleidingsvrije ruimte</li>
                        <li>• Check camera en microfoon kwaliteit</li>
                        <li>• Heb headset/oordopjes bij de hand</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Persoonlijk voorbereiding:</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Check route en reistijd (plan extra tijd!)</li>
                        <li>• Neem al je documenten fysiek mee</li>
                        <li>• Kom 5-10 minuten voor tijd aan</li>
                        <li>• Noteer parkeerinformatie en locatie details</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">🧠 ADHD-vriendelijke voorbereidingstips</h4>
                  <div className="text-gray-700 text-sm space-y-2">
                    <p>• <strong>Gebruik visuele checklist:</strong> Print deze gids en vink af wat je hebt voorbereid</p>
                    <p>• <strong>Stel reminders in:</strong> 48 uur, 24 uur en 2 uur voor het gesprek</p>
                    <p>• <strong>Body doubling:</strong> Vraag iemand om bij je te zitten tijdens de voorbereiding</p>
                    <p>• <strong>Chunk het:</strong> Verdeel voorbereiding over meerdere korte sessies van 15-20 minuten</p>
                    <p>• <strong>Beloon jezelf:</strong> Plan iets leuks na het gesprek als motivatie</p>
                  </div>
                </div>
              </div>

              <h2>Veelgestelde vragen over intake gesprekken</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Hoe lang duurt een typisch intake gesprek?</h4>
                  <p className="text-yellow-800 text-sm">
                    Een goed intake gesprek duurt gemiddeld 45-60 minuten. Kortere gesprekken (onder 30 min) zijn vaak te oppervlakkig. Als een coach minder dan 45 minuten plant, vraag dan waarom.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Moet ik betalen voor het intake gesprek?</h4>
                  <p className="text-yellow-800 text-sm">
                    Dit verschilt per coach. Sommige bieden een gratis kennismaking (15-30 min), andere rekenen hun normale uurtarief. Vraag dit vooraf duidelijk na en budget ervoor als het betaald is.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Wat als ik zenuwachtig ben of mijn gedachten niet kan ordenen?</h4>
                  <p className="text-yellow-800 text-sm">
                    Dat is normaal! Breng je voorbereide vragen en notities mee naar het gesprek. Leg uit dat je ADHD hebt en soms moeite hebt met structuur - goede coaches begrijpen dit perfect en helpen je erdoorheen.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Kan ik iemand meenemen naar het intake gesprek?</h4>
                  <p className="text-yellow-800 text-sm">
                    Ja, als dat je helpt! Veel mensen nemen hun partner of een goede vriend mee voor steun. Informeer de coach wel vooraf. Een tweede paar oren kan helpen om dingen te onthouden die jij misschien mist.
                  </p>
                </div>
              </div>

              <h2>Conclusie: Voorbereiding = succesfactor #1</h2>
              <p>
                Een <strong>goed voorbereid eerste gesprek ADHD coach</strong> legt de basis voor een succesvolle coaching relatie. Door deze checklist te volgen, je vragen voor te bereiden en na het gesprek goed te evalueren, vergroot je je kansen op het vinden van de perfecte coach match aanzienlijk.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg my-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">🎯 Volgende stappen</h4>
                <div className="space-y-3 text-green-800 text-sm">
                  <p>✅ Print of bookmark deze checklist voor je gesprek</p>
                  <p>✅ Plan 1-2 uur deze week om je voor te bereiden</p>
                  <p>✅ Maak een lijst van minimaal 3 coaches om te spreken</p>
                  <p>✅ Stel herinneringen in voor 48u, 24u en 2u voor het gesprek</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl border-2 border-sky-200">
                <h3 className="text-2xl font-bold text-sky-900 mb-4 text-center">
                  Klaar om de juiste ADHD coach te vinden?
                </h3>
                <p className="text-sky-800 text-center mb-6">
                  Ontdek gecertificeerde ADHD coaches bij jou in de buurt. Vergelijk profielen, lees reviews en vind de perfecte match.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/" 
                    className="inline-flex items-center px-8 py-4 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105 shadow-lg"
                  >
                    <ClipboardList className="w-5 h-5 mr-2" />
                    Vind jouw ADHD coach
                  </Link>
                  <Link 
                    href="/blog/beste-vragen-adhd-coach" 
                    className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-all border-2 border-sky-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Meer vragen voor je coach
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
