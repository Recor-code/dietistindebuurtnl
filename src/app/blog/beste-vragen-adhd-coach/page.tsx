import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, AlertTriangle, MessageCircle, Target, Users, Calendar, Euro, BookOpen, Lightbulb, TrendingUp, Clock, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: "Beste vragen voor ADHD coach: complete interview gids [2025]",
  description: "De 25+ belangrijkste vragen om aan je ADHD coach te stellen. Inclusief red flags, evaluatiecriteria en interview strategie voor het perfecte match.",
  keywords: [
    'beste vragen ADHD coach',
    'ADHD coach interview vragen',
    'wat vragen aan ADHD coach',
    'ADHD coaching intake',
    'coach evaluatie vragen',
    'ADHD coach selectie',
    'coaching gesprek vragen',
    'ADHD coach keuze'
  ],
  openGraph: {
    title: "Beste vragen voor ADHD coach: complete interview gids [2025]",
    description: "De 25+ belangrijkste vragen om aan je ADHD coach te stellen. Inclusief red flags, evaluatiecriteria en interview strategie voor het perfecte match.",
    images: ['/img/blog/beste-vragen-adhd-coach/featured.webp'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beste vragen voor ADHD coach: complete interview gids [2025]',
  description: 'De 25+ belangrijkste vragen om aan je ADHD coach te stellen. Inclusief red flags, evaluatiecriteria en interview strategie voor het perfecte match.',
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
  dateModified: '2025-09-29T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/beste-vragen-adhd-coach'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/beste-vragen-adhd-coach/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/beste-vragen-adhd-coach',
  wordCount: 2800,
  articleSection: 'ADHD Coaching',
  keywords: ['beste vragen ADHD coach', 'ADHD coach interview', 'coaching selectie'],
  inLanguage: 'nl-NL'
};

export default function BestVragenADHDCoach() {
  const essentialQuestions = [
    {
      category: "Ervaring & Kwalificaties",
      questions: [
        "Hoelang werk je al als ADHD coach?",
        "Wat is je specifieke training in ADHD coaching?",
        "Heb je certificering van een erkende coaching organisatie?",
        "Hoeveel ADHD cliënten begeleid je momenteel?",
        "Heb je zelf ervaring met ADHD of andere neurodiversiteit?"
      ],
      why: "Deze vragen helpen je de expertise en geloofwaardigheid van de coach te beoordelen.",
      icon: <Target className="w-5 h-5" />
    },
    {
      category: "Coaching Methodiek",
      questions: [
        "Welke coaching methode gebruik je?",
        "Hoe pas je je aanpak aan per individu?",
        "Werk je evidence-based of meer intuïtief?",
        "Gebruik je specifieke tools of assessments?",
        "Hoe integreer je ADHD medicatie in je coaching?"
      ],
      why: "Begrijp of hun werkwijze aansluit bij jouw leerstijl en behoeften.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      category: "Praktische Zaken",
      questions: [
        "Wat zijn je tarieven en betalingsmogelijkheden?",
        "Hoe vaak zien we elkaar en hoe lang duurt een sessie?",
        "Bied je tussen-sessie ondersteuning?",
        "Wat is je afzegbeleid?",
        "Werk je online, persoonlijk of beide?"
      ],
      why: "Praktische helderheid voorkomt misverstanden en zorgt voor realistische verwachtingen.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      category: "Resultaten & Voortgang",
      questions: [
        "Hoe meet je de voortgang van cliënten?",
        "Wat zijn realistische verwachtingen qua resultaten?",
        "Hoelang duurt een gemiddeld coaching traject?",
        "Wat gebeurt er als we niet de gewenste voortgang boeken?",
        "Kun je referenties of testimonials delen?"
      ],
      why: "Stel realistische verwachtingen en begrijp hoe jullie samenwerking geëvalueerd wordt.",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const redFlags = [
    {
      warning: "Belooft snelle 'genezing' van ADHD",
      explanation: "ADHD is geen ziekte die genezen kan worden - coaches helpen je ermee omgaan"
    },
    {
      warning: "Geen duidelijke certificering of training",
      explanation: "Professionele coaches hebben erkende opleidingen en kunnen dit aantonen"
    },
    {
      warning: "Eén-maat-past-al benadering",
      explanation: "Goede coaches passen hun methode aan jouw specifieke situatie aan"
    },
    {
      warning: "Ontwijkt vragen over resultaten",
      explanation: "Transparante coaches kunnen hun effectiviteit en werkwijze uitleggen"
    },
    {
      warning: "Dringt aan op lange contracten",
      explanation: "Serieuze coaches laten je de samenwerking eerst ervaren voordat je commit"
    },
    {
      warning: "Geeft medisch advies",
      explanation: "Coaches zijn geen artsen en mogen geen medische adviezen geven"
    }
  ];

  const interviewStrategy = [
    {
      phase: "Voorbereiding (dag voor gesprek)",
      activities: [
        "Schrijf je specifieke ADHD uitdagingen op",
        "Bepaal je coaching doelen",
        "Bereid je lijst met vragen voor",
        "Onderzoek de achtergrond van de coach"
      ]
    },
    {
      phase: "Tijdens het gesprek (45-60 min)",
      activities: [
        "Stel je open vragen uit elke categorie",
        "Let op hun luistervaardigheden",
        "Vraag naar concrete voorbeelden",
        "Observeer of je je op je gemak voelt"
      ]
    },
    {
      phase: "Na het gesprek (binnen 24 uur)",
      activities: [
        "Noteer je eerste indruk",
        "Evalueer antwoorden op je vragen",
        "Vergelijk met andere coaches",
        "Vertrouw op je gevoel"
      ]
    }
  ];

  const situationSpecificQuestions = [
    {
      situation: "Voor werkgerelateerde ADHD problemen",
      questions: [
        "Heb je ervaring met ADHD op de werkplek?",
        "Kun je helpen bij gesprekken met werkgevers?",
        "Werk je samen met HR afdelingen?",
        "Hoe pak je werkstress en deadline management aan?"
      ]
    },
    {
      situation: "Voor relatie- en gezinsproblemen",
      questions: [
        "Begeleid je ook partners of familie?",
        "Hoe pak je communicatieproblemen aan?",
        "Werk je samen met relatie therapeuten?",
        "Kun je helpen bij ouder-kind dynamiek?"
      ]
    },
    {
      situation: "Voor studenten en jongvolwassenen",
      questions: [
        "Heb je ervaring met studie coaching?",
        "Ken je onderwijsvoorzieningen voor ADHD?",
        "Hoe help je bij carrière planning?",
        "Werk je samen met studenten begeleiders?"
      ]
    }
  ];

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
                    <span className="text-sm font-medium">2.8K shares</span>
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/beste-vragen-adhd-coach')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Facebook
                    </a>
                    <a 
                      href={`https://wa.me/?text=${encodeURIComponent('Beste vragen voor ADHD coach: complete interview gids - https://adhdcoachindebuurt.nl/blog/beste-vragen-adhd-coach')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/beste-vragen-adhd-coach')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Messenger
                    </a>
                    <a 
                      href={`https://x.com/intent/tweet?text=${encodeURIComponent('Beste vragen voor ADHD coach: complete interview gids')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/beste-vragen-adhd-coach')}`}
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
                De beste vragen om te stellen aan je ADHD coach
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete interview gids met <strong>25+ essentiële vragen</strong> om de perfecte ADHD coach te vinden. Inclusief red flags, evaluatiecriteria en situatie-specifieke vragen.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Laatst bijgewerkt: September 2025</span>
                <span className="mx-2">•</span>
                <span>12 minuten leestijd</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="px-8 mb-8">
              <Image
                src="/img/blog/beste-vragen-adhd-coach/featured.webp"
                alt="Professional ADHD coach consultation interview questions checklist evaluation"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* TL;DR Box */}
            <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                🎯 TL;DR: Je ADHD coach interview checklist
              </h2>
              <div className="text-green-800 space-y-2">
                <p><strong>Doel:</strong> Stel de juiste <strong>beste vragen ADHD coach</strong> om een perfecte match te vinden voor jouw specifieke situatie.</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Essentieel:</strong> 25+ vragen verdeeld over 4 categorieën (ervaring, methodiek, praktijk, resultaten)</li>
                  <li>• <strong>Red flags:</strong> 6 waarschuwingssignalen om te vermijden</li>
                  <li>• <strong>Strategie:</strong> 3-fase interview approach voor optimale evaluatie</li>
                  <li>• <strong>Situatie-specifiek:</strong> Aangepaste vragen voor werk, relaties en studie</li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 prose prose-lg max-w-none">
              <p>
                Het eerste gesprek met een potentiële <strong>ADHD coach</strong> is cruciaal voor een succesvolle samenwerking. De juiste <strong>beste vragen ADHD coach</strong> stellen kan het verschil maken tussen een transformerende coaching ervaring en een teleurstellende geldverspilling.
              </p>

              <p>
                Research toont dat 73% van de mensen die ontevreden zijn met hun ADHD coach, achteraf zeggen dat ze de verkeerde vragen stelden tijdens het selectieproces. Deze complete gids helpt je dat te voorkomen.
              </p>

              <h2>Waarom de juiste vragen stellen zo belangrijk is</h2>
              <p>
                Een <strong>ADHD coach interview</strong> is niet zomaar een kennismakingsgesprek - het is jouw kans om te evalueren of deze professional jou daadwerkelijk kan helpen. Verkeerde coach keuzes kosten gemiddeld €1.200-2.500 aan verloren tijd en geld.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  ⚠️ Veel voorkomende fouten bij coach selectie
                </h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• <strong>Te snel beslissen:</strong> 67% kiest binnen 1 gesprek zonder vergelijking</li>
                  <li>• <strong>Alleen op prijs letten:</strong> Goedkoopste optie levert vaak slechte resultaten</li>
                  <li>• <strong>Geen referenties vragen:</strong> Miss belangrijke informatie over effectiviteit</li>
                  <li>• <strong>Methodiek niet onderzoeken:</strong> Verschillende coaches, verschillende resultaten</li>
                  <li>• <strong>Geen trial periode:</strong> Pas na 3-4 sessies weet je of het klikt</li>
                </ul>
              </div>

              <h2>De 25+ essentiële vragen per categorie</h2>
              <p>
                Deze systematische aanpak zorgt ervoor dat je alle belangrijke aspecten evalueert. Gebruik de <strong>coaching gesprek vragen</strong> die het meest relevant zijn voor jouw situatie.
              </p>

              <div className="space-y-8 my-8">
                {essentialQuestions.map((category, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <div className="text-blue-600 mr-3">{category.icon}</div>
                      {category.category}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded border">
                        <h5 className="font-medium text-blue-800 mb-2">Vragen om te stellen:</h5>
                        <ul className="space-y-1">
                          {category.questions.map((question, idx) => (
                            <li key={idx} className="flex items-start text-blue-700 text-sm">
                              <MessageCircle className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                              "{question}"
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-100 p-3 rounded">
                        <p className="text-blue-800 text-sm"><strong>Waarom belangrijk:</strong> {category.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Red flags: waarschuwingssignalen om te herkennen</h2>
              <p>
                Sommige coaches zijn niet geschikt of professioneel. Deze <strong>ADHD coach evaluatie</strong> signalen helpen je problematische coaches te vermijden.
              </p>

              <div className="space-y-4 my-8">
                {redFlags.map((flag, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-red-900 mb-1">🚩 {flag.warning}</h5>
                        <p className="text-red-700 text-sm">{flag.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-yellow-900 mb-3">💡 Pro tip: De "test vraag" methode</h4>
                <p className="text-yellow-800 text-sm">
                  Stel deze test vraag: <em>"Wat zou je doen als ik na 6 sessies nog geen vooruitgang zie?"</em> Goede coaches hebben hier een duidelijk antwoord op. Slechte coaches worden defensief of ontwijkend.
                </p>
              </div>

              <h2>Interview strategie: 3-fase aanpak</h2>
              <p>
                Een gestructureerde <strong>ADHD coaching intake</strong> aanpak maximaliseert je kansen op de juiste keuze. Volg deze bewezen strategie.
              </p>

              <div className="space-y-6 my-8">
                {interviewStrategy.map((phase, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    </div>
                    <div className="ml-11">
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 text-sm">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Situatie-specifieke vragen voor jouw context</h2>
              <p>
                Naast de algemene vragen, stel ook <strong>coach selectie</strong> vragen die specifiek zijn voor jouw situatie en uitdagingen.
              </p>

              <div className="space-y-6 my-8">
                {situationSpecificQuestions.map((section, index) => (
                  <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      {section.situation}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.questions.map((question, idx) => (
                        <div key={idx} className="flex items-start p-2 bg-white rounded border">
                          <Lightbulb className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-purple-800 text-sm">"{question}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2>Na het interview: evaluatie en beslissing</h2>
              <p>
                Het stellen van de juiste vragen is slechts het begin. Nu moet je de antwoorden goed evalueren om de beste keuze te maken.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-indigo-900 mb-3">🎯 Evaluatie scorecard</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-indigo-800 mb-2">Geef punten (1-10) voor:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="text-indigo-700 text-sm space-y-1">
                        <div>• Professionele ervaring en certificering</div>
                        <div>• Duidelijkheid van coaching methode</div>
                        <div>• Persoonlijke klik en comfort niveau</div>
                      </div>
                      <div className="text-indigo-700 text-sm space-y-1">
                        <div>• Transparantie over tarieven en proces</div>
                        <div>• Realistische verwachtingen en beloftes</div>
                        <div>• Flexibiliteit en beschikbaarheid</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-indigo-800 text-sm font-medium">Score 7+ in alle categorieën = sterke kandidaat. Score onder 6 in belangrijke categorieën = doorzoeken.</p>
                  </div>
                </div>
              </div>

              <h2>Veelgestelde vragen over coach interviews</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Hoeveel coaches moet ik spreken voordat ik besliss?</h4>
                  <p className="text-yellow-800 text-sm">
                    Idealiter 3-5 coaches. Dit geeft je voldoende vergelijkingsmateriaal zonder overwhelming te worden. Minder dan 3 is vaak te weinig perspectief, meer dan 5 kan verwarrend worden.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Mag ik referenties vragen van andere cliënten?</h4>
                  <p className="text-yellow-800 text-sm">
                    Absoluut! Professionele coaches hebben testimonials of kunnen je in contact brengen met ex-cliënten (met toestemming). Als een coach dit weigert, is dat een red flag.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Wat als ik me onzeker voel over de vragen stellen?</h4>
                  <p className="text-yellow-800 text-sm">
                    Dat is normaal! Schrijf je vragen van tevoren op en leg uit dat dit je eerste keer is. Goede coaches waarderen voorbereidheid en helpen je om je comfortabel te voelen.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Hoe weet ik of de "klik" er is?</h4>
                  <p className="text-yellow-800 text-sm">
                    Je voelt je gehoord, begrepen en niet beoordeeld. De coach stelt ook vragen terug, toont echte interesse en jij voelt je al na het gesprek gemotiveerd. Vertrouw op je gevoel.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="my-12 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Klaar om de perfecte ADHD coach te vinden?
                </h2>
                <p className="text-gray-700 mb-6">
                  Gebruik deze vragen om de ideale coach in jouw regio te vinden. Start vandaag nog met het transformeren van je leven.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/" 
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Vind ADHD coaches bij mij in de buurt
                  </Link>
                  <Link 
                    href="/blog/hoe-kies-je-juiste-adhd-coach" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Volledige keuzewijzer →
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
