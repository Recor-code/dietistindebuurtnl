import { Metadata } from 'next';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Static metadata for this specific article
export const metadata: Metadata = {
  title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
  description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
  openGraph: {
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
    type: 'article',
    publishedTime: '2025-09-24T14:00:00.000Z',
    authors: ['ADHD Coach in de Buurt'],
    images: [
      {
        url: 'https://adhdcoachindebuurt.nl/img/blog/hoe-kies-je-juiste-adhd-coach/featured.webp',
        width: 1024,
        height: 1024,
        alt: 'Hoe kies je de juiste ADHD coach? Complete gids'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
    images: ['https://adhdcoachindebuurt.nl/img/blog/hoe-kies-je-juiste-adhd-coach/featured.webp']
  }
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
  description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
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
  datePublished: '2025-09-24T14:00:00.000Z',
  dateModified: '2025-09-25T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/hoe-kies-je-juiste-adhd-coach'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/hoe-kies-je-juiste-adhd-coach/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/hoe-kies-je-juiste-adhd-coach',
  wordCount: 2500,
  articleSection: 'ADHD Coaching',
  keywords: ['ADHD coach', 'ADHD coaching', 'coach vinden', 'ADHD hulp', 'coach kiezen'],
  inLanguage: 'nl-NL'
};

export default function BlogPost() {
  const post = {
    id: 3,
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    slug: 'hoe-kies-je-juiste-adhd-coach',
    excerpt: 'Het ADHD coach kiezen kan overweldigend aanvoelen. Deze complete gids helpt je stap voor stap de juiste ADHD coach vinden die perfect aansluit bij jouw behoeften, budget en locatie.',
    metaDescription: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
    publishedAt: new Date('2025-09-24T14:00:00.000Z'),
    tags: ['ADHD', 'Coaching', 'Keuzewijzer', 'Gids', 'Coach vinden'],
    city: null
  };

  const featuredImageUrl = `/img/blog/${post.slug}/featured.webp`;
  const currentUrl = `https://adhdcoachindebuurt.nl/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Link>

            {/* Featured Image */}
            <div className="mb-8">
              <Image 
                src={featuredImageUrl}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
                priority
              />
            </div>
            {/* Social Share Buttons - Above Title */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">Deel dit artikel:</span>
                <div className="flex gap-2">
                  {/* Facebook */}
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Facebook
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    WhatsApp
                  </a>
                  
                  {/* Messenger */}
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    Messenger
                  </a>
                  
                  {/* X (Twitter) */}
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>

            {/* Title and Introduction */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Hoe kies je de juiste ADHD coach bij jou in de buurt?
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete stap-voor-stap gids om <strong>de juiste ADHD coach</strong> te vinden die perfect aansluit bij jouw behoeften, budget en persoonlijkheid. Van onderzoek tot eerste gesprek - alles wat je moet weten.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span>Laatst bijgewerkt: September 2025</span>
                <span className="mx-2">•</span>
                <span>14 minuten leestijd</span>
              </div>
            </header>

            {/* TL;DR Box */}
            <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                🎯 TL;DR: Perfecte ADHD coach vinden in 5 stappen
              </h2>
              <div className="text-blue-800 space-y-2">
                <p><strong>Strategie:</strong> Bepaal eerst je <strong>coaching doelen</strong>, onderzoek lokale coaches, vergelijk 3-5 kandidaten</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Stap 1:</strong> Definieer je specifieke ADHD uitdagingen en coaching doelen</li>
                  <li>• <strong>Stap 2:</strong> Onderzoek coaches in je regio (certificering, specialisatie, reviews)</li>
                  <li>• <strong>Stap 3:</strong> Plan intake gesprekken met 3-5 coaches</li>
                  <li>• <strong>Stap 4:</strong> Evalueer match op expertise, persoonlijkheid en budget</li>
                  <li>• <strong>Stap 5:</strong> Start met een proefperiode om de keuze te valideren</li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <p>
                Een <strong>ADHD coach kiezen</strong> is een belangrijke beslissing die je leven significant kan verbeteren. De juiste coach helpt je praktische vaardigheden ontwikkelen, doelen bereiken en je ADHD-gerelateerde uitdagingen effectief aanpakken. Maar hoe vind je die perfecte match?
              </p>

              <p>
                Deze complete gids neemt je stap voor stap mee door het hele proces, van het bepalen van je coaching behoeften tot het maken van de uiteindelijke keuze. Na het lezen weet je precies hoe je <strong>de juiste ADHD coach vinden</strong> die past bij jouw unieke situatie.
              </p>

              <h2>Stap 1: Bepaal je coaching doelen en behoeften</h2>
              <p>
                Voor je begint met zoeken naar <strong>ADHD coaches bij jou in de buurt</strong>, is het essentieel om helder te krijgen wat je precies wilt bereiken met coaching.
              </p>

              <div className="bg-green-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  🎯 Coaching doelen verkenning
                </h4>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h5 className="font-medium text-green-800 mb-3">Werkgerelateerde doelen:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2 text-green-700 text-sm">
                        <div>□ Productiviteit en time management verbeteren</div>
                        <div>□ Deadline stress en uitstelgedrag aanpakken</div>
                        <div>□ Organisatie en planning systemen ontwikkelen</div>
                        <div>□ Werkplek overstimulatie beheersen</div>
                      </div>
                      <div className="space-y-2 text-green-700 text-sm">
                        <div>□ Carrière planning en doelen stellen</div>
                        <div>□ Communicatie vaardigheden op werk</div>
                        <div>□ Balans werk-privé vinden</div>
                        <div>□ Leiderschapsvaardigheden ontwikkelen</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h5 className="font-medium text-green-800 mb-3">Persoonlijke & relationele doelen:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2 text-green-700 text-sm">
                        <div>□ Emotieregulatie en impulscontrole</div>
                        <div>□ Relatie communicatie verbeteren</div>
                        <div>□ Zelfvertrouwen en zelfbeeld opbouwen</div>
                        <div>□ Ouderschap met ADHD navigeren</div>
                      </div>
                      <div className="space-y-2 text-green-700 text-sm">
                        <div>□ Financieel management en budgettering</div>
                        <div>□ Gezonde gewoonten ontwikkelen</div>
                        <div>□ Sociale situaties en netwerken</div>
                        <div>□ Life transitions en grote veranderingen</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h5 className="font-medium text-green-800 mb-3">Studie & ontwikkeling doelen:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2 text-green-700 text-sm">
                        <div>□ Studievaardigheden en concentratie</div>
                        <div>□ Examen voorbereiding strategieën</div>
                        <div>□ Nieuwe vaardigheden leren</div>
                        <div>□ Creativiteit en innovatie ontwikkelen</div>
                      </div>
                      <div className="space-y-2 text-green-700 text-sm">
                        <div>□ Carrière transitie ondersteuning</div>
                        <div>□ Ondernemerschaps vaardigheden</div>
                        <div>□ Publiek spreken en presenteren</div>
                        <div>□ Netwerk opbouwen en onderhouden</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded">
                  <p className="text-green-800 text-sm">
                    <strong>💡 Actietip:</strong> Kies 3-5 prioritaire doelen om mee te starten. Te veel doelen tegelijk kan overweldigend zijn en de focus verwaten.
                  </p>
                </div>
              </div>

              <h2>Stap 2: Onderzoek en identificeer potentiële coaches</h2>
              <p>
                Nu je weet wat je zoekt, is het tijd om <strong>ADHD coaches in je regio</strong> te onderzoeken. Een systematische aanpak helpt je de beste kandidaten te identificeren.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-blue-900 mb-4">🔍 Research strategie checklist</h4>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h5 className="font-medium text-blue-800 mb-3">1. Lokale coaches vinden:</h5>
                    <div className="space-y-2 text-blue-700 text-sm">
                      <div>□ Zoek op platforms zoals ADHD Coach in de Buurt</div>
                      <div>□ Vraag referenties van je huisarts of GGZ instelling</div>
                      <div>□ Check certificering organisaties (NOBCO, ICF, EMCC)</div>
                      <div>□ Zoek in coaching directories en LinkedIn</div>
                      <div>□ Vraag aanbevelingen in ADHD support groepen</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h5 className="font-medium text-blue-800 mb-3">2. Kwalificaties checken:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2 text-blue-700 text-sm">
                        <div>□ ADHD-specifieke training en certificering</div>
                        <div>□ Erkende coaching opleiding (minimaal 125 uur)</div>
                        <div>□ Lidmaatschap professionele coaching organisatie</div>
                        <div>□ Voortgaande educatie en supervisie</div>
                      </div>
                      <div className="space-y-2 text-blue-700 text-sm">
                        <div>□ Minimaal 2-3 jaar coaching ervaring</div>
                        <div>□ Specialisatie in jouw doelgebied</div>
                        <div>□ Track record met ADHD cliënten</div>
                        <div>□ Referenties en testimonials beschikbaar</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h5 className="font-medium text-blue-800 mb-3">3. Online presence evalueren:</h5>
                    <div className="space-y-2 text-blue-700 text-sm">
                      <div>□ Professionele website met duidelijke informatie</div>
                      <div>□ Coaching filosofie en methodiek uitgelegd</div>
                      <div>□ Transparante pricing en voorwaarden</div>
                      <div>□ Client testimonials en case studies</div>
                      <div>□ Blog of content die expertise toont</div>
                      <div>□ Actieve en professionele social media</div>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Stap 3: Evaluatie criteria opstellen</h2>
              <p>
                Maak een systematische vergelijking mogelijk door van tevoren criteria op te stellen waarop je <strong>ADHD coaches</strong> gaat beoordelen.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-purple-900 mb-4">📊 Coach evaluatie scorecard</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-3">Professionaliteit & Expertise (Gewicht: 35%)</h5>
                    <div className="grid md:grid-cols-2 gap-3 text-purple-700 text-sm">
                      <div>
                        <div className="font-medium mb-1">Certificering & Training:</div>
                        <div>Score 1-10: ADHD-specifieke kwalificaties</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Ervaring:</div>
                        <div>Score 1-10: Jaren ervaring + aantal ADHD cliënten</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Specialisatie match:</div>
                        <div>Score 1-10: Alignment met jouw doelen</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Professionele ontwikkeling:</div>
                        <div>Score 1-10: Voortgaande educatie & supervisie</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-3">Persoonlijke Match & Chemie (Gewicht: 30%)</h5>
                    <div className="grid md:grid-cols-2 gap-3 text-purple-700 text-sm">
                      <div>
                        <div className="font-medium mb-1">Communicatiestijl:</div>
                        <div>Score 1-10: Past bij jouw voorkeur</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Comfort niveau:</div>
                        <div>Score 1-10: Voel je je op je gemak?</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Luistervaardigheden:</div>
                        <div>Score 1-10: Voelt gehoord en begrepen</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Culturele fit:</div>
                        <div>Score 1-10: Gedeelde waarden en normen</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-3">Praktische Aspecten (Gewicht: 25%)</h5>
                    <div className="grid md:grid-cols-2 gap-3 text-purple-700 text-sm">
                      <div>
                        <div className="font-medium mb-1">Locatie & Bereikbaarheid:</div>
                        <div>Score 1-10: Gemak van afspraken</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Flexibiliteit schema:</div>
                        <div>Score 1-10: Past bij jouw planning</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Prijs-kwaliteit verhouding:</div>
                        <div>Score 1-10: Waarde voor geld</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Communicatie tussen sessies:</div>
                        <div>Score 1-10: Email/app ondersteuning</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h5 className="font-medium text-purple-800 mb-3">Methodiek & Resultaten (Gewicht: 10%)</h5>
                    <div className="grid md:grid-cols-2 gap-3 text-purple-700 text-sm">
                      <div>
                        <div className="font-medium mb-1">Evidence-based aanpak:</div>
                        <div>Score 1-10: Wetenschappelijk onderbouwd</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Meetbare resultaten:</div>
                        <div>Score 1-10: Concrete voortgang tracking</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Tools & technieken:</div>
                        <div>Score 1-10: Praktische hulpmiddelen</div>
                      </div>
                      <div>
                        <div className="font-medium mb-1">Success stories:</div>
                        <div>Score 1-10: Aantoonbare resultaten</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-100 rounded">
                  <p className="text-purple-800 text-sm">
                    <strong>🎯 Totaal score berekening:</strong> (Professionaliteit×0.35) + (Persoonlijke Match×0.30) + (Praktisch×0.25) + (Methodiek×0.10) = Totaal score. Score 7+ = sterke kandidaat.
                  </p>
                </div>
              </div>

              <h2>Stap 4: Plan en voer intake gesprekken uit</h2>
              <p>
                Het intake gesprek is cruciaal om de echte 'fit' te bepalen. Plan gesprekken met je top 3-5 kandidaten om een weloverwogen keuze te maken.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-orange-900 mb-4">💬 Intake gesprek masterplan</h4>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h5 className="font-medium text-orange-800 mb-3">Voorbereiding (48 uur voor gesprek):</h5>
                    <div className="space-y-2 text-orange-700 text-sm">
                      <div>□ Bereid je top 10 vragen voor (zie onze vragenlijst)</div>
                      <div>□ Schrijf je specifieke ADHD uitdagingen op</div>
                      <div>□ Bepaal je ideale coaching frequentie en budget</div>
                      <div>□ Onderzoek de achtergrond van de coach nogmaals</div>
                      <div>□ Stel realistische verwachtingen voor het gesprek</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h5 className="font-medium text-orange-800 mb-3">Tijdens het gesprek (45-60 minuten):</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-medium text-orange-800 mb-2">Eerste 15 minuten:</div>
                        <div className="space-y-1 text-orange-700 text-sm">
                          <div>• Coach laat zichzelf introduceren</div>
                          <div>• Jij deelt je verhaal en uitdagingen</div>
                          <div>• Wederzijdse verwachtingen verkennen</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-orange-800 mb-2">Volgende 30 minuten:</div>
                        <div className="space-y-1 text-orange-700 text-sm">
                          <div>• Jouw vooraf bedachte vragen stellen</div>
                          <div>• Coach vraagt jou over doelen/motivatie</div>
                          <div>• Coaching aanpak en methodiek bespreken</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-orange-800 mb-2">Laatste 15 minuten:</div>
                        <div className="space-y-1 text-orange-700 text-sm">
                          <div>• Praktische zaken (planning, kosten)</div>
                          <div>• Volgende stappen en tijdlijn</div>
                          <div>• Open vragen en laatste indrukken</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h5 className="font-medium text-orange-800 mb-3">Direct na het gesprek (binnen 2 uur):</h5>
                    <div className="space-y-2 text-orange-700 text-sm">
                      <div>□ Noteer je eerste indruk en gevoel</div>
                      <div>□ Vul je evaluatie scorecard in</div>
                      <div>□ Beantwoord: "Kan ik me voorstellen om met deze coach te werken?"</div>
                      <div>□ Evalueer of de coach je vragen goed beantwoordde</div>
                      <div>□ Check of je je gehoord en begrepen voelde</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-100 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>⚡ Rode vlag waarschuwing:</strong> Stop direct als coach beloftes maakt over snelle "genezing", medisch advies geeft, of pusht voor lange contracten. Dit zijn tekenen van unprofessionaliteit.
                  </p>
                </div>
              </div>

              <h2>Stap 5: Vergelijk en maak je finale keuze</h2>
              <p>
                Na je intake gesprekken is het tijd om de informatie te analyseren en een weloverwogen beslissing te maken.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-indigo-900 mb-4">🤔 Beslissingshulp matrix</h4>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded border border-indigo-200">
                    <h5 className="font-medium text-indigo-800 mb-3">Kwantitatieve analyse:</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-indigo-700">
                        <thead>
                          <tr className="border-b border-indigo-300">
                            <th className="text-left py-2">Criteria</th>
                            <th className="text-center py-2">Coach A</th>
                            <th className="text-center py-2">Coach B</th>
                            <th className="text-center py-2">Coach C</th>
                            <th className="text-center py-2">Gewicht</th>
                          </tr>
                        </thead>
                        <tbody className="text-indigo-600">
                          <tr className="border-b border-indigo-200">
                            <td className="py-2">Professionaliteit</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">35%</td>
                          </tr>
                          <tr className="border-b border-indigo-200">
                            <td className="py-2">Persoonlijke match</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">30%</td>
                          </tr>
                          <tr className="border-b border-indigo-200">
                            <td className="py-2">Praktische aspecten</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">25%</td>
                          </tr>
                          <tr className="border-b border-indigo-200">
                            <td className="py-2">Methodiek</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">10%</td>
                          </tr>
                          <tr className="bg-indigo-100 font-medium">
                            <td className="py-2">Totaal Score</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">__/10</td>
                            <td className="text-center py-2">100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-indigo-200">
                    <h5 className="font-medium text-indigo-800 mb-3">Kwalitatieve factoren:</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-medium text-indigo-800 mb-2">Positieve signalen:</div>
                        <div className="space-y-1 text-indigo-700 text-sm">
                          <div>✓ Je voelde je direct op je gemak</div>
                          <div>✓ Coach stelde relevante tegenvragen</div>
                          <div>✓ Concrete voorbeelden en success stories</div>
                          <div>✓ Realistische verwachtingen geschetst</div>
                          <div>✓ Duidelijke communicatie over proces</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-indigo-800 mb-2">Waarschuwingssignalen:</div>
                        <div className="space-y-1 text-indigo-700 text-sm">
                          <div>⚠ Gevoel van ongemak of twijfel</div>
                          <div>⚠ Vaage antwoorden op specifieke vragen</div>
                          <div>⚠ Druk om snel te beslissen</div>
                          <div>⚠ Onrealistische beloftes over resultaten</div>
                          <div>⚠ Gebrek aan ADHD-specifieke expertise</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-indigo-200">
                    <h5 className="font-medium text-indigo-800 mb-3">De finale beslissing:</h5>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                        <div className="font-medium text-green-800 mb-1">Als scores dicht bij elkaar liggen:</div>
                        <div className="text-green-700 text-sm">Vertrouw op je intuïtie. Bij wie voelde je je het meest gehoord en gemotiveerd?</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                        <div className="font-medium text-blue-800 mb-1">Als je nog twijfelt:</div>
                        <div className="text-blue-700 text-sm">Vraag of je een korte trial sessie kunt doen met je top 2 kandidaten.</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-400">
                        <div className="font-medium text-purple-800 mb-1">Als budget een factor is:</div>
                        <div className="text-purple-700 text-sm">Vraag naar betalingsregelingen of sliding scale tarieven. Investeer liever in kwaliteit.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Stap 6: Start met een proefperiode</h2>
              <p>
                Zelfs na zorgvuldige selectie kan het 2-3 sessies duren voordat je weet of de coaching-relatie echt werkt. Start daarom met een beperkte commitment.
              </p>

              <div className="bg-teal-50 p-6 rounded-lg my-6">
                <h4 className="font-semibold text-teal-900 mb-4">🚀 Smart start strategie</h4>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-teal-200">
                    <h5 className="font-medium text-teal-800 mb-2">Trial periode planning (4-6 sessies):</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-teal-700 text-sm">
                        <div><strong>Sessie 1:</strong> Intake & goal setting</div>
                        <div><strong>Sessie 2:</strong> Assessment & eerste interventies</div>
                        <div><strong>Sessie 3:</strong> Skills development & oefenen</div>
                      </div>
                      <div className="space-y-2 text-teal-700 text-sm">
                        <div><strong>Sessie 4:</strong> Voortgang evalueren & bijstellen</div>
                        <div><strong>Sessie 5-6:</strong> Verdieping & continuatie beslissing</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-teal-200">
                    <h5 className="font-medium text-teal-800 mb-2">Evaluatiemomenten inbouwen:</h5>
                    <div className="space-y-2 text-teal-700 text-sm">
                      <div>□ <strong>Na sessie 2:</strong> Check of coaching methode aanslaat</div>
                      <div>□ <strong>Na sessie 4:</strong> Evalueer concrete vooruitgang</div>
                      <div>□ <strong>Na sessie 6:</strong> Besluit over voortzetting</div>
                      <div>□ <strong>Wekelijks:</strong> Bijhouden van persoonlijke observaties</div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-teal-200">
                    <h5 className="font-medium text-teal-800 mb-2">Voortzetting criteria:</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <div className="font-medium text-teal-800 mb-1">Positieve indicatoren:</div>
                        <div className="space-y-1 text-teal-700 text-sm">
                          <div>✓ Merkbare verbetering in doelgebieden</div>
                          <div>✓ Nieuwe inzichten en perspectief</div>
                          <div>✓ Verhoogde motivatie en zelfvertrouwen</div>
                          <div>✓ Praktische tools die je daadwerkelijk gebruikt</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-teal-800 mb-1">Waarschuwingssignalen:</div>
                        <div className="space-y-1 text-teal-700 text-sm">
                          <div>⚠ Geen vooruitgang na 4 sessies</div>
                          <div>⚠ Gevoel dat sessies niet productief zijn</div>
                          <div>⚠ Mismatch in communicatiestijl blijft bestaan</div>
                          <div>⚠ Geen concrete actionable takeaways</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-teal-100 rounded">
                  <p className="text-teal-800 text-sm">
                    <strong>🎯 Exit strategie:</strong> Bespreek van tevoren hoe je de samenwerking kunt stoppen als het niet werkt. Professionele coaches waarderen eerlijke feedback en faciliteren een soepele overgang.
                  </p>
                </div>
              </div>

              <h2>Veelgestelde vragen over ADHD coach selectie</h2>
              
              <div className="space-y-4 my-8">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Hoelang duurt het om de juiste coach te vinden?</h4>
                  <p className="text-yellow-800 text-sm">
                    Gemiddeld 2-4 weken van eerste research tot definitieve keuze. Plan 1 week voor research, 1-2 weken voor intake gesprekken, en 1 week voor evaluatie en beslissing. Haast niet - de juiste keuze bespaart tijd en geld op lange termijn.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Wat als er geen goede ADHD coaches in mijn regio zijn?</h4>
                  <p className="text-yellow-800 text-sm">
                    Overweeg online coaching - dit geeft toegang tot specialisten uit heel Nederland. Veel coaches bieden hybrid modellen (online + enkele persoonlijke sessies). Kwaliteit gaat boven locatie, zeker voor ADHD coaching waar praktische tools centraal staan.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Kan ik van coach wisselen als het niet werkt?</h4>
                  <p className="text-yellow-800 text-sm">
                    Absoluut! Professionele coaches begrijpen dat match belangrijk is. Bespreek dit van tevoren en vraag naar hun protocol voor coachwissel. Sommige coaches kunnen je zelfs doorverwijzen naar collega's die beter passen bij jouw behoeften.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Hoeveel coaches moet ik spreken voordat ik besliss?</h4>
                  <p className="text-yellow-800 text-sm">
                    3-5 coaches is optimaal. Minder dan 3 geeft te weinig perspectief, meer dan 5 kan verwarrend worden. Als je na 3 gesprekken nog geen goede kandidaat hebt, heroverweeg je selectiecriteria of zoek in een bredere regio.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="my-12 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Klaar om je perfecte ADHD coach te vinden?
                </h2>
                <p className="text-gray-700 mb-6">
                  Gebruik deze gids om systematisch de ideale coach te selecteren die jouw leven zal transformeren.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/" 
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Start je zoektocht naar de perfecte coach
                  </Link>
                  <Link 
                    href="/blog/beste-vragen-adhd-coach" 
                    className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    Interview vragen checklist →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
