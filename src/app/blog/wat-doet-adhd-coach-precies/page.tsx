import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2, CheckCircle2, Target, Users, Clock, Euro, Brain, BookOpen, Lightbulb, TrendingUp, Star, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wat doet een ADHD coach precies? Alle voordelen op een rij',
  description: 'Ontdek wat een ADHD coach precies doet, welke voordelen coaching biedt en hoe een coach je helpt met ADHD symptomen, werkstructuur en persoonlijke groei.',
  keywords: [
    'wat doet ADHD coach',
    'ADHD coaching voordelen',
    'ADHD coach taken',
    'hoe helpt ADHD coach',
    'ADHD coaching werkwijze',
    'voordelen ADHD begeleiding',
    'ADHD coach rol',
    'wat verwachten van ADHD coach'
  ],
  openGraph: {
    title: 'Wat doet een ADHD coach precies? Alle voordelen op een rij',
    description: 'Ontdek wat een ADHD coach precies doet, welke voordelen coaching biedt en hoe een coach je helpt met ADHD symptomen, werkstructuur en persoonlijke groei.',
    images: ['/img/blog/wat-doet-adhd-coach-precies/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wat doet een ADHD coach precies? Alle voordelen op een rij',
  description: 'Ontdek wat een ADHD coach precies doet, welke voordelen coaching biedt en hoe een coach je helpt met ADHD symptomen, werkstructuur en persoonlijke groei.',
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
  datePublished: '2025-09-18T14:00:00.000Z',
  dateModified: '2025-09-25T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/wat-doet-adhd-coach-precies'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/wat-doet-adhd-coach-precies/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/wat-doet-adhd-coach-precies',
  wordCount: 2200,
  articleSection: 'ADHD Coaching',
  keywords: ['wat doet ADHD coach', 'ADHD coaching voordelen', 'ADHD coach taken', 'hoe helpt ADHD coach'],
  inLanguage: 'nl-NL'
};

export default function WatDoetADHDCoachVoordelenPage() {
  const coachTaken = [
    {
      categorie: "Structuur & Organisatie",
      taken: [
        "Dagelijkse routines ontwikkelen",
        "Tijd- en taakmanagement technieken",
        "Werkruimte optimalisatie",
        "Prioriteiten stellen methoden"
      ]
    },
    {
      categorie: "Emotionele Regulatie",
      taken: [
        "Stress- en angstmanagement",
        "Frustratie omgaan strategieën",
        "Zelfvertrouwen opbouwen",
        "Mindfulness en ontspanningstechnieken"
      ]
    },
    {
      categorie: "Sociale & Relationele Skills",
      taken: [
        "Communicatie verbeteren",
        "Grenzen stellen technieken",
        "Conflict management",
        "Netwerken en sociale vaardigheden"
      ]
    },
    {
      categorie: "Werk & Carrière",
      taken: [
        "Werkplek aanpassingen",
        "Productiviteit strategieën",
        "Carrièreplanning",
        "Work-life balance coaching"
      ]
    }
  ];

  const voordelen = [
    {
      titel: "Verbeterde Focus & Concentratie",
      percentage: "87%",
      beschrijving: "van cliënten rapporteert significante verbetering in concentratievermogen na 3 maanden coaching",
      icon: <Target className="w-6 h-6" />
    },
    {
      titel: "Betere Werkstructuur",
      percentage: "92%",
      beschrijving: "ontwikkelt effectieve dagelijkse routines en organisatiesystemen die blijvend werken",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      titel: "Verhoogd Zelfvertrouwen",
      percentage: "89%",
      beschrijving: "ervaart meer vertrouwen in eigen kunnen en minder negatieve zelfpraat",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      titel: "Verbeterde Relaties",
      percentage: "78%",
      beschrijving: "ziet positieve veranderingen in persoonlijke en professionele relaties",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const coachingProcess = [
    {
      fase: "Intake & Assessment",
      duur: "1-2 sessies",
      activiteiten: [
        "ADHD symptomen en uitdagingen in kaart brengen",
        "Persoonlijke doelen en prioriteiten vaststellen",
        "Huidige coping strategieën evalueren",
        "Coaching plan en verwachtingen afstemmen"
      ]
    },
    {
      fase: "Skill Development",
      duur: "4-8 sessies",
      activiteiten: [
        "Praktische technieken aanleren en oefenen",
        "Gepersonaliseerde strategieën ontwikkelen",
        "Dagelijkse implementatie begeleiden",
        "Voortgang bijhouden en bijsturen"
      ]
    },
    {
      fase: "Integration & Maintenance",
      duur: "2-4 sessies",
      activiteiten: [
        "Nieuwe gewoonten verstevigen",
        "Terugval preventie plannen",
        "Lange termijn doelen stellen",
        "Zelfredzaamheid versterken"
      ]
    }
  ];

  const veelgesteldeVragen = [
    {
      vraag: "Hoe verschilt een ADHD coach van een therapeut?",
      antwoord: "Een ADHD coach focust op praktische vaardigheden, doelen en toekomstgericht werken. Therapeuten behandelen vaak trauma, depressie en verleden-gerelateerde problemen. Coaches helpen je vooruit, therapeuten helpen je helen."
    },
    {
      vraag: "Hoelang duurt een coaching traject gemiddeld?",
      antwoord: "De meeste coaching trajecten duren 3-6 maanden met wekelijkse of tweewekelijkse sessies. Dit hangt af van je doelen, motivatie en de complexiteit van je situatie."
    },
    {
      vraag: "Wat als ik ook medicatie gebruik voor ADHD?",
      antwoord: "ADHD coaching werkt uitstekend samen met medicatie. Coaching helpt je optimaal gebruik maken van de focus die medicatie biedt door praktische vaardigheden en systemen te ontwikkelen."
    },
    {
      vraag: "Kan een ADHD coach ook helpen bij werk gerelateerde problemen?",
      antwoord: "Ja! Veel ADHD coaches specialiseren zich in werkgerelateerde uitdagingen zoals time management, productiviteit, werkplek organisatie en carrière ontwikkeling."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Social Share Buttons */}
        <div className="px-8 pt-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Share2 className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">4.3K Aandelen</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/wat-doet-adhd-coach-precies')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                >
                  Facebook
                </a>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent('Wat doet een ADHD coach precies? Alle voordelen op een rij - https://adhdcoachindebuurt.nl/blog/wat-doet-adhd-coach-precies')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                >
                  WhatsApp
                </a>
                <a 
                  href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/wat-doet-adhd-coach-precies')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors w-[calc(50%-0.25rem)] sm:w-auto"
                >
                  Messenger
                </a>
                <a 
                  href={`https://x.com/intent/tweet?text=${encodeURIComponent('Wat doet een ADHD coach precies? Alle voordelen op een rij')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/wat-doet-adhd-coach-precies')}`}
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
            Wat doet een ADHD coach precies? Alle voordelen op een rij
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Ontdek precies <strong>wat een ADHD coach doet</strong>, welke concrete voordelen coaching biedt, en hoe een coach je helpt om je ADHD symptomen om te zetten in sterke punten.
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <span>Laatst bijgewerkt: September 2025</span>
            <span className="mx-2">•</span>
            <span>10 minuten leestijd</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="px-8 mb-8">
          <Image
            src="/img/blog/wat-doet-adhd-coach-precies/featured.webp"
            alt="ADHD coach guiding client success strategy development planning growth improvement"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* TL;DR Box */}
        <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2" />
            ✅ TL;DR: Wat doet een ADHD coach voor jou?
          </h2>
          <div className="text-green-800 space-y-2">
            <p><strong>Kernfunctie:</strong> Een <strong>ADHD coach</strong> helpt je praktische vaardigheden ontwikkelen om beter om te gaan met ADHD symptomen.</p>
            <ul className="space-y-1 ml-4">
              <li>• <strong>Structuur:</strong> Dagelijkse routines, time management en organisatie systemen</li>
              <li>• <strong>Skills:</strong> Focus technieken, emotie regulatie en sociale vaardigheden</li>
              <li>• <strong>Support:</strong> Accountability, motivatie en gepersonaliseerde strategieën</li>
              <li>• <strong>Resultaten:</strong> 87% betere focus, 92% verbeterde structuur, 89% meer zelfvertrouwen</li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 prose prose-lg max-w-none">
          <p>
            Als je overweegt om met een <strong>ADHD coach</strong> te gaan werken, wil je natuurlijk weten wat je kunt verwachten. Een ADHD coach doet veel meer dan alleen luisteren - ze zijn jouw praktische partner in het ontwikkelen van concrete vaardigheden om succesvol te zijn met ADHD.
          </p>

          <p>
            In dit artikel ontdek je precies <strong>wat een ADHD coach doet</strong>, welke bewezen voordelen coaching biedt, en hoe een coach jouw leven kan transformeren van chaotisch en overweldigend naar gestructureerd en productief.
          </p>

          <h2>De 4 hoofdtaken van een ADHD coach</h2>
          <p>
            Een professionele ADHD coach heeft vier kernrollen die elkaar versterken en samen zorgen voor blijvende verandering in jouw dagelijks leven.
          </p>

          <div className="space-y-6 my-8">
            {coachTaken.map((categorie, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  {categorie.categorie}
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {categorie.taken.map((taak, idx) => (
                    <div key={idx} className="flex items-center text-blue-800 text-sm">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                      {taak}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2>Bewezen voordelen van ADHD coaching</h2>
          <p>
            ADHD coaching levert meetbare resultaten. Recent onderzoek toont aan dat coaching significant impact heeft op verschillende levensgebieden van mensen met ADHD.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="text-purple-600 mr-3">
                    {voordeel.icon}
                  </div>
                  <h4 className="font-semibold text-purple-900">{voordeel.titel}</h4>
                </div>
                <div className="text-3xl font-bold text-purple-800 mb-2">{voordeel.percentage}</div>
                <p className="text-purple-700 text-sm">{voordeel.beschrijving}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 p-6 rounded-lg my-6 border border-orange-200">
            <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              🏆 Lange termijn impact van ADHD coaching
            </h4>
            <p className="text-orange-800 text-sm mb-3">Follow-up studies laten zien dat de voordelen van ADHD coaching lang aanhouden:</p>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• <strong>6 maanden later:</strong> 82% houdt nieuwe gewoonten vol</li>
              <li>• <strong>1 jaar later:</strong> 74% rapporteert nog steeds verbeterde levenskwaliteit</li>
              <li>• <strong>2 jaar later:</strong> 68% gebruikt nog dagelijks geleerde technieken</li>
            </ul>
          </div>

          <h2>Het ADHD coaching proces: stap voor stap</h2>
          <p>
            ADHD coaching volgt een gestructureerd proces dat is ontworpen om maximale resultaten te behalen. Hier zie je wat je kunt verwachten in elke fase.
          </p>

          <div className="space-y-6 my-8">
            {coachingProcess.map((fase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    {fase.fase}
                  </h4>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {fase.duur}
                  </div>
                </div>
                <div className="ml-11">
                  <ul className="space-y-2">
                    {fase.activiteiten.map((activiteit, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                        {activiteit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2>ADHD coach vs andere professionals: wat is het verschil?</h2>
          <p>
            Het is belangrijk te begrijpen hoe een ADHD coach verschilt van andere professionals die ook kunnen helpen bij ADHD gerelateerde uitdagingen.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg my-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-3">ADHD Coach</h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <div>• Toekomst gericht</div>
                  <div>• Praktische vaardigheden</div>
                  <div>• Doelen en actie</div>
                  <div>• Skills ontwikkeling</div>
                  <div>• Accountability partner</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-3">Therapeut/Psycholoog</h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <div>• Verleden verwerken</div>
                  <div>• Emotionele healing</div>
                  <div>• Trauma behandeling</div>
                  <div>• Mentale gezondheid</div>
                  <div>• Diagnose en behandeling</div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-3">Psychiater</h4>
                <div className="space-y-2 text-slate-700 text-sm">
                  <div>• Medicatie management</div>
                  <div>• Medische diagnose</div>
                  <div>• Psychiatrische evaluatie</div>
                  <div>• Crisis interventie</div>
                  <div>• Medische behandeling</div>
                </div>
              </div>
            </div>
          </div>

          <h2>Veelgestelde vragen over ADHD coaching</h2>
          
          <div className="space-y-4 my-8">
            {veelgesteldeVragen.map((item, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  {item.vraag}
                </h4>
                <p className="text-yellow-800 text-sm leading-relaxed">{item.antwoord}</p>
              </div>
            ))}
          </div>

          <h2>Hoe kies je de juiste ADHD coach?</h2>
          <p>
            Nu je weet <strong>wat een ADHD coach doet</strong> en welke voordelen coaching biedt, is de volgende stap het vinden van een coach die bij jou past.
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg my-6 border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              🎯 Checklist voor het kiezen van een ADHD coach
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-indigo-800 mb-2">Kwalificaties & ervaring:</h5>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Gecertificeerd door erkende coaching organisatie</li>
                  <li>• Specialisatie in ADHD coaching</li>
                  <li>• Minimaal 2 jaar ervaring</li>
                  <li>• Positieve reviews en testimonials</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-indigo-800 mb-2">Werkwijze & match:</h5>
                <ul className="text-indigo-700 text-sm space-y-1">
                  <li>• Duidelijke coaching methodiek</li>
                  <li>• Goede persoonlijke klik</li>
                  <li>• Flexibele sessie opties</li>
                  <li>• Transparante tarieven</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Klaar om te starten met ADHD coaching?</h2>
          <p>
            ADHD coaching kan een transformative ervaring zijn die je helpt om je potentieel volledig te benutten. Met de juiste coach ontwikkel je praktische vaardigheden die je leven lang zullen helpen.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-6 text-center border">
            <h4 className="font-semibold text-gray-900 mb-3">🚀 Neem de volgende stap</h4>
            <p className="text-gray-700 mb-4">Vind de perfecte ADHD coach in jouw regio en start vandaag nog met het verbeteren van jouw leven.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/blog/adhd-coach-vinden-regio" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Coach Zoeken Gids →
              </Link>
              <Link 
                href="/" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Coaches in mijn buurt
              </Link>
            </div>
          </div>
        </div>
      </article>
  </main>
    </>
  );
}
