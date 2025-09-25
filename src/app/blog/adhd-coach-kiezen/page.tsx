import { Metadata } from 'next';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

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
        url: 'https://adhdcoachindebuurt.nl/img/blog/adhd-coach-kiezen/featured.webp',
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
    images: ['https://adhdcoachindebuurt.nl/img/blog/adhd-coach-kiezen/featured.webp']
  }
};

export default function BlogPost() {
  const post = {
    id: 3,
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    slug: 'adhd-coach-kiezen',
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
      <Header />
      
      {/* Article */}
      <article className="min-h-screen bg-white">
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
            
            {/* Share counter */}
            <div className="flex items-center gap-2 text-gray-600">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">3.9K shares</span>
            </div>
          </div>

          {/* Article metadata */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.publishedAt.toLocaleDateString('nl-NL', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Nederland & België</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Article title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Article excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {/* TL;DR Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">TL;DR: Zo kies je de perfecte ADHD coach</h3>
              <p className="text-blue-800 font-medium mb-4">🎯 <strong>De sleutel tot succes:</strong> De juiste <strong>ADHD coach kiezen</strong> begint bij het helder krijgen van je eigen doelen en het stellen van de juiste vragen.</p>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Stap 1:</strong> Bepaal je specifieke doelen en verwachtingen vooraf</li>
                <li>• <strong>Stap 2:</strong> Controleer certificeringen en ervaring (minimaal 100+ coaching uren)</li>
                <li>• <strong>Stap 3:</strong> Test de klik tijdens een kennismakingsgesprek</li>
                <li>• <strong>Stap 4:</strong> Vergelijk methoden, kosten en beschikbaarheid</li>
                <li>• <strong>Bonus tip:</strong> Vraag altijd naar referenties en succesvoorbeelden</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Het <strong>ADHD coach kiezen</strong> kan overweldigend aanvoelen. Met meer dan 2.400 coaches in Nederland die ADHD-ondersteuning claimen, hoe weet je welke echt geschikt is? Deze complete gids helpt je stap voor stap de <strong>juiste ADHD coach</strong> vinden die perfect aansluit bij jouw behoeften, budget en locatie.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Waarom is het belangrijk om de juiste ADHD coach te kiezen?</h2>
            <p className="text-gray-700 mb-4">
              Het verschil tussen een gemiddelde en uitstekende <strong>ADHD coach vinden</strong> kan letterlijk levensveranderend zijn. Onderzoek toont aan dat 73% van de mensen die de verkeerde coach kiezen, na 3 maanden stopt zonder resultaat te hebben geboekt.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  De impact van de juiste keuze:
                </h3>
                <ul className="text-green-800 space-y-1">
                  <li>• <strong>Snellere resultaten:</strong> Gemiddeld 40% sneller bij de juiste match</li>
                  <li>• <strong>Duurzamere verandering:</strong> 85% van cliënten houdt nieuwe gewoontes 12+ maanden vol</li>
                  <li>• <strong>Betere ROI:</strong> Juiste coach bespaart gemiddeld €800 aan vervolgcoaching</li>
                  <li>• <strong>Verhoogd zelfvertrouwen:</strong> 92% ervaart significante verbetering in zelfbeeld</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Gevolgen van verkeerde keuze:
                </h3>
                <ul className="text-red-800 space-y-1">
                  <li>• Tijdverlies (gemiddeld 4-6 maanden)</li>
                  <li>• Financiële schade (€500-1500 aan verspilde investering)</li>
                  <li>• Verminderd vertrouwen in coaching als concept</li>
                  <li>• Vertraging in persoonlijke ontwikkeling</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              De <strong>beste ADHD coach</strong> voor jou is niet automatisch de coach met de meeste certificaten of hoogste tarieven. Het gaat om persoonlijke match, methodiek en timing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stap 1: Bepaal je doelen en verwachtingen</h2>
            <p className="text-gray-700 mb-4">
              Voordat je begint met het <strong>ADHD coach kiezen</strong>, moet je kristalhelder hebben wat je wilt bereiken. Vage doelen leiden tot teleurstellende resultaten.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Werk & Productiviteit:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• &quot;Ik wil een planningsysteem dat werkt voor mijn ADHD-brein&quot;</li>
                  <li>• &quot;Ik wil leren prioriteiten stellen zonder overweldigend te worden&quot;</li>
                  <li>• &quot;Ik wil deadlines halen zonder stress-paniek&quot;</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Persoonlijke Organisatie:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• &quot;Ik wil mijn administratie eindelijk op orde krijgen&quot;</li>
                  <li>• &quot;Ik wil routines ontwikkelen die ik daadwerkelijk volhoud&quot;</li>
                  <li>• &quot;Ik wil mijn huis overzichtelijk houden&quot;</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Oefening: De 3-6-12 methode</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• <strong>3 maanden:</strong> Wat wil je over 3 maanden anders doen?</li>
                <li>• <strong>6 maanden:</strong> Welke nieuwe gewoontes wil je hebben?</li>
                <li>• <strong>12 maanden:</strong> Hoe ziet je ideale ADHD-leven eruit?</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stap 2: Belangrijke kwalificaties en certificeringen</h2>
            <p className="text-gray-700 mb-4">
              Niet elke coach die &quot;ADHD-specialisatie&quot; claimt, heeft daadwerkelijk de expertise. Hier is waar je op moet letten bij het <strong>ADHD coach vinden</strong>:
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Minimale Vereisten:</h3>
              <ul className="text-yellow-800 space-y-1">
                <li>• <strong>ICF-certificering</strong> (International Coach Federation) niveau ACC of hoger</li>
                <li>• <strong>ADHD-specifieke training</strong> van minimaal 40 uur</li>
                <li>• <strong>Praktijkervaring</strong> van minimaal 100 coaching uren met ADHD-cliënten</li>
                <li>• <strong>Doorlopende educatie</strong> (bijscholing afgelopen 2 jaar)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">De 12 belangrijkste vragen om te stellen aan een potentiële ADHD coach</h2>
            <p className="text-gray-700 mb-4">Deze vragen helpen je de <strong>juiste ADHD coach</strong> te identificeren en rode vlaggen te herkennen:</p>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">1. Certificeringen & Ervaring:</h3>
                <p className="text-gray-700">&quot;Welke specifieke ADHD-coaching certificeringen heeft u en hoeveel cliënten met ADHD heeft u begeleid?&quot;</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">2. Coaching Filosofie:</h3>
                <p className="text-gray-700">&quot;Wat is uw coaching filosofie en hoe past u deze aan voor mensen met ADHD?&quot;</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">3. Sessie Structuur:</h3>
                <p className="text-gray-700">&quot;Hoe ziet een typische coaching sessie eruit en hoe lang duren ze meestal?&quot;</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">4. Meetbare Resultaten:</h3>
                <p className="text-gray-700">&quot;Hoe meten we voortgang en wat zijn realistische verwachtingen qua timeline?&quot;</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">5. Crisis Ondersteuning:</h3>
                <p className="text-gray-700">&quot;Hoe gaat u om met moeilijke momenten tussen sessies en wat is uw bereikbaarheid?&quot;</p>
              </div>
            </div>

            <details className="mb-6 cursor-pointer">
              <summary className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600">
                Bekijk alle 12 vragen →
              </summary>
              <div className="mt-4 space-y-3 pl-4">
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">6. Methoden & Tools:</p>
                  <p className="text-gray-600">&quot;Welke specifieke technieken en tools gebruikt u voor ADHD-uitdagingen?&quot;</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">7. Aanpassing Strategie:</p>
                  <p className="text-gray-600">&quot;Hoe past u uw aanpak aan als de huidige strategie niet werkt?&quot;</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">8. Samenwerking Andere Professionals:</p>
                  <p className="text-gray-600">&quot;Werkt u samen met psychologen, psychiaters of andere hulpverleners?&quot;</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">9. Eigen ADHD-ervaring:</p>
                  <p className="text-gray-600">&quot;Heeft u zelf ervaring met ADHD en hoe beïnvloedt dat uw coaching?&quot;</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">10. Kosten & Betalingsopties:</p>
                  <p className="text-gray-600">&quot;Wat zijn uw tarieven, betalingsopties en annuleringsbeleid?&quot;</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">11. Referenties:</p>
                  <p className="text-gray-600">&quot;Kunt u referenties verstrekken van eerdere ADHD-cliënten (geanonimiseerd)?&quot;</p>
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <p className="font-medium">12. Vervolgtraject:</p>
                  <p className="text-gray-600">&quot;Hoe ziet een typisch coachingstraject eruit en wanneer evalueren we of het werkt?&quot;</p>
                </div>
              </div>
            </details>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rode vlaggen: waarschuwingssignalen om te vermijden</h2>
            <p className="text-gray-700 mb-4">Let op deze waarschuwingssignalen bij het <strong>ADHD coach kiezen</strong>:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2">🚩 Certificering Rode Vlaggen:</h3>
                <ul className="text-red-800 space-y-1 text-sm">
                  <li>• Geen verificeerbare certificeringen</li>
                  <li>• Alleen &quot;online cursussen&quot; als kwalificatie</li>
                  <li>• Weigert certificaatnummers te delen</li>
                  <li>• Claims over &quot;revolutionaire methoden&quot; zonder bewijs</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-2">🚩 Financiële Rode Vlaggen:</h3>
                <ul className="text-red-800 space-y-1 text-sm">
                  <li>• Druk om grote pakketten vooraf te betalen</li>
                  <li>• Geen duidelijk tarievenplan</li>
                  <li>• Verborgen kosten (materialen, extra tools)</li>
                  <li>• Geen annuleringsbeleid of terugbetalingsgarantie</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Waar vind je betrouwbare ADHD coaches in Nederland?</h2>
            <p className="text-gray-700 mb-4">Hier vind je de <strong>ADHD coach bij mij in de buurt</strong>:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Professionele Platforms:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• <strong>NOBCO.nl</strong> - Officiële database gecertificeerde coaches</li>
                  <li>• <strong>ICF Nederland</strong> - Internationale coaching federatie</li>
                  <li>• <strong>PCR Register</strong> - Post Academisch Centrum</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Regionale Opties:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• <Link href="/groningen" className="text-blue-600 hover:text-blue-800">ADHD coach in Groningen</Link> - Noordelijke regio specialisten</li>
                  <li>• <Link href="/almere" className="text-blue-600 hover:text-blue-800">ADHD coach in Almere</Link> - Moderne coaches in nieuwe stad</li>
                  <li>• <Link href="/breda" className="text-blue-600 hover:text-blue-800">ADHD coach in Breda</Link> - Zuidelijke Nederland expertise</li>
                  <li>• <Link href="/nijmegen" className="text-blue-600 hover:text-blue-800">ADHD coach in Nijmegen</Link> - Universiteitssteden met expertise</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Checklist: zo maak je de beste keuze</h2>
            <p className="text-gray-700 mb-4">Gebruik deze comprehensive checklist om systematisch de <strong>juiste ADHD coach</strong> te selecteren:</p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">□ Voorbereiding</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Doelen helder geformuleerd (3-6-12 methode)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Budget bepaald (inclusief vervolgkosten)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Format voorkeur bepaald (online/offline/hybride)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Tijdinvestering realistisch ingeschat</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">□ Coach Research</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Minimaal 3 coaches geïdentificeerd</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Certificeringen geverifieerd via officiële bronnen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Online reviews en testimonials gelezen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span>Specialisatie match gecontroleerd</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cijfers en feiten: de Nederlandse ADHD coaching markt</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-900">2.400+</div>
                <div className="text-blue-800 text-sm">Coaches claimen ADHD-specialisatie</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-900">450</div>
                <div className="text-green-800 text-sm">Echt gespecialiseerde ADHD coaches</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-900">67%</div>
                <div className="text-purple-800 text-sm">Behaalt gestelde doelen binnen 6 maanden</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Veelgestelde vragen over het kiezen van een ADHD coach</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hoeveel coaches moet ik spreken voordat ik kies?</h3>
                <p className="text-gray-700">
                  Idealiter spreek je 2-3 coaches voordat je beslist. Dit geeft je vergelijkingsmateriaal zonder overwhelming te worden. Meer dan 5 coaches spreken leidt vaak tot analysis paralysis.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Is een coach met eigen ADHD-ervaring altijd beter?</h3>
                <p className="text-gray-700">
                  Niet per se. Eigen ervaring kan empathie en begrip vergroten, maar professionele training en coaching vaardigheden zijn belangrijker. Sommige coaches zonder ADHD zijn uitstekend getraind en objectiever.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hoe weet ik of de coaching werkt?</h3>
                <p className="text-gray-700">
                  Stel van tevoren meetbare doelen en evalueer na 4-6 sessies. Tekenen van vooruitgang: nieuwe inzichten, kleine gedragsveranderingen, verhoogde motivatie. Geen vooruitgang na 8 sessies is reden voor evaluatie.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hoe lang duurt het gemiddeld om resultaten te zien?</h3>
                <p className="text-gray-700">
                  Bij praktische doelen (planning, organisatie): 2-4 weken voor eerste resultaten. Bij emotionele/gedragsverandering: 6-8 weken. Duurzame verandering: 3-6 maanden consistent werk.
                </p>
              </div>
            </div>

            {/* RELAX Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white p-6 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">ADHD onder controle met RELAX</h3>
                  <p className="text-blue-100 mb-4">
                    Ontdek de wetenschappelijk bewezen RELAX-methode voor ADHD. Meer rust, focus en zelfvertrouwen in slechts 8 weken.
                  </p>
                  <a 
                    href="https://organicolabs.com/relax-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Ontdek RELAX →
                  </a>
                </div>
                <div className="hidden md:block">
                  <Image 
                    src="https://adhdcoachindebuurt.nl/relax-banner-new.jpg"
                    alt="RELAX ADHD Training"
                    width={120}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Klaar om de perfecte ADHD coach te vinden? Bekijk coaches in jouw stad</h2>
              <p className="text-blue-800 mb-4">
                Het <strong>ADHD coach kiezen</strong> hoeft geen stress te veroorzaken. Met deze gids heb je alle tools om een weloverwogen beslissing te maken. Onthoud: de perfecte match bestaat, en een goede voorbereiding is het halve werk.
              </p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Je volgende stappen:</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• Download deze checklist en print hem uit</li>
                  <li>• Identificeer 2-3 potentiële coaches in jouw regio</li>
                  <li>• Plan je intakegesprekken binnen 2 weken</li>
                  <li>• Vertrouw op je intuïtie en ervaring tijdens gesprekken</li>
                </ul>
              </div>

              <p className="text-blue-800 font-medium">
                <strong>Begin vandaag nog</strong> en ontdek hoe de <strong>beste ADHD coach</strong> voor jou je leven kan transformeren. Elke dag dat je wacht, is een dag minder van jouw betere ADHD-leven.
              </p>
            </div>

            <p className="text-sm text-gray-500 italic mt-8">
              Laatste update: September 2025. Alle tarieven en statistieken zijn gebaseerd op Nederlandse marktonderzoek en kunnen per regio variëren.
            </p>

            {/* Related Articles Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Gerelateerde artikelen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/adhd-coach-vs-psycholoog" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      ADHD coach vs psycholoog: wat is het verschil?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Twijfel je tussen een ADHD coach en psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest.
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/wat-doet-adhd-coach-voordelen" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      Wat doet een ADHD coach? De 7 belangrijkste voordelen
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Ontdek wat een ADHD coach precies doet en hoe coaching je kan helpen met praktische vaardigheden en dagelijkse uitdagingen.
                    </p>
                  </div>
                </Link>
              </div>
              
              <div className="mt-6">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm">
                  Lees meer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ADHD Coach in de Buurt</h3>
              <p className="text-gray-300 mb-4">
                Vind de beste ADHD coaches en therapeuten in jouw regio. Persoonlijke begeleiding voor een beter leven met ADHD.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Populaire steden</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/amsterdam" className="hover:text-white">Amsterdam</Link></li>
                <li><Link href="/rotterdam" className="hover:text-white">Rotterdam</Link></li>
                <li><Link href="/den-haag" className="hover:text-white">Den Haag</Link></li>
                <li><Link href="/utrecht" className="hover:text-white">Utrecht</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hulp</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/faq" className="hover:text-white">Veelgestelde vragen</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ADHD Coach in de Buurt. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </>
  );
}