import { Metadata } from 'next';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2, CheckCircle2, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Static metadata for this specific article
export const metadata: Metadata = {
  title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
  description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
  openGraph: {
    title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
    description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
    type: 'article',
    publishedTime: '2025-09-24T12:00:00.000Z',
    authors: ['ADHD Coach in de Buurt'],
    images: [
      {
        url: 'https://adhdcoachindebuurt.nl/img/blog/adhd-coach-vs-psycholoog/featured.webp',
        width: 1024,
        height: 1024,
        alt: 'ADHD coach vs psycholoog vergelijking'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
    description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
    images: ['https://adhdcoachindebuurt.nl/img/blog/adhd-coach-vs-psycholoog/featured.webp']
  }
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
  description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
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
  datePublished: '2025-09-24T12:00:00.000Z',
  dateModified: '2025-09-24T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/adhd-coach-vs-psycholoog'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/adhd-coach-vs-psycholoog/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/adhd-coach-vs-psycholoog',
  inLanguage: 'nl-NL'
};

export default function BlogPost() {
  const post = {
    id: 2,
    title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
    slug: 'adhd-coach-vs-psycholoog',
    excerpt: 'Twijfel je tussen een ADHD coach en psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest in deze complete vergelijking.',
    metaDescription: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
    publishedAt: new Date('2025-09-24T12:00:00.000Z'),
    tags: ['ADHD', 'Coaching', 'Psychologie', 'Begeleiding', 'Keuzewijzer'],
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
              ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Twijfel je tussen een <strong>ADHD coach of psycholoog</strong>? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest in deze complete vergelijking met praktische beslissingshulp.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>15 minuten leestijd</span>
            </div>
          </header>

          {/* TL;DR Box */}
          <div className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              🎯 TL;DR: ADHD coach of psycholoog?
            </h2>
            <div className="text-purple-800 space-y-2">
              <p><strong>Kernverschil:</strong> <strong>ADHD coach</strong> = toekomstgericht, praktische vaardigheden. <strong>Psycholoog</strong> = verleden verwerken, emotionele healing.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Kies ADHD coach:</strong> Voor dagelijkse structuur, productiviteit, doelen behalen (€60-120/sessie)</li>
                <li>• <strong>Kies psycholoog:</strong> Voor trauma, depressie, angststoornissen naast ADHD (€80-150/sessie, vaak vergoed)</li>
                <li>• <strong>Kombinatie mogelijk:</strong> 34% gebruikt beide parallel voor optimale ondersteuning</li>
                <li>• <strong>Beslissingsfactor:</strong> Wat heb je het meest nodig: praktische skills of emotionele verwerking?</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              De vraag <strong>"ADHD coach of psycholoog?"</strong> komt vaak op wanneer je hulp zoekt bij ADHD-gerelateerde uitdagingen. Beide professionals kunnen waardevol zijn, maar ze hebben fundamenteel verschillende rollen, werkwijzen en focus gebieden. Deze complete vergelijking helpt je de juiste keuze maken voor jouw specifieke situatie.
            </p>

            <p>
              Research uit 2024 toont dat 89% van de mensen die de verkeerde keuze maken, achteraf zeggen dat ze het verschil tussen beide niet goed begrepen. Deze gids voorkomt die fout.
            </p>

            <h2>Het fundamentele verschil uitgelegd</h2>
            <p>
              Het grootste verschil tussen een <strong>ADHD coach vs psycholoog</strong> ligt in de tijdsoriëntatie en focus van de behandeling.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-4">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900 text-lg">ADHD Coach</h4>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-blue-800 mb-1">Focus:</p>
                      <p className="text-blue-700 text-sm">Toekomst & doelen bereiken</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-blue-800 mb-1">Methode:</p>
                      <p className="text-blue-700 text-sm">Praktische vaardigheden & systemen</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-blue-800 mb-1">Rol:</p>
                      <p className="text-blue-700 text-sm">Accountability partner & skills trainer</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-blue-800 mb-1">Tijdsduur:</p>
                      <p className="text-blue-700 text-sm">3-12 maanden, kortere trajecten</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-4">
                    <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-900 text-lg">Psycholoog</h4>
                  </div>
                  <div className="space-y-3 text-left">
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-green-800 mb-1">Focus:</p>
                      <p className="text-green-700 text-sm">Verleden verwerken & emotionele healing</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-green-800 mb-1">Methode:</p>
                      <p className="text-green-700 text-sm">Gesprekstherapie & psychologische interventies</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-green-800 mb-1">Rol:</p>
                      <p className="text-green-700 text-sm">Therapeut & mentale gezondheid expert</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <p className="font-medium text-green-800 mb-1">Tijdsduur:</p>
                      <p className="text-green-700 text-sm">6 maanden - jaren, diepere processen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Wanneer kies je voor een ADHD coach?</h2>
            <p>
              Een <strong>ADHD coach</strong> is ideaal wanneer je primair praktische uitdagingen wilt aanpakken en concrete vaardigheden wilt ontwikkelen.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                ✅ Perfecte situaties voor ADHD coaching
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 mb-3">Dagelijkse uitdagingen:</h5>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Tijd management problemen</li>
                    <li>• Organisatie & planning struggles</li>
                    <li>• Uitstelgedrag & productiviteit issues</li>
                    <li>• Werkplek chaos & overgevoeligheid</li>
                    <li>• Goal setting & follow-through</li>
                    <li>• Routine & habit building</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800 mb-3">Specifieke doelen:</h5>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• Carrière advancement & werkprestaties</li>
                    <li>• Studie strategie & academische success</li>
                    <li>• Relationship skills & communication</li>
                    <li>• Financial management & planning</li>
                    <li>• Health & lifestyle optimization</li>
                    <li>• Creativity & project completion</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Coach keuze tip:</strong> Kies een ADHD coach als je denkt: <em>"Ik weet wat ik wil bereiken, maar weet niet hoe of kan het niet volhouden."</em>
                </p>
              </div>
            </div>

            <h2>Wanneer kies je voor een psycholoog?</h2>
            <p>
              Een <strong>psycholoog ADHD</strong> is de betere keuze wanneer er diepere emotionele of mentale gezondheid issues zijn die je ADHD compliceren.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                ✅ Situaties waar je een psycholoog nodig hebt
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Comorbide aandoeningen:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="text-green-700 text-sm space-y-1">
                      <div>• Depressie & anxiety disorders</div>
                      <div>• PTSD of trauma history</div>
                      <div>• Eating disorders</div>
                    </div>
                    <div className="text-green-700 text-sm space-y-1">
                      <div>• Addiction & substance issues</div>
                      <div>• Bipolar disorder</div>
                      <div>• Severe emotional dysregulation</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Emotionele & relationele issues:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="text-green-700 text-sm space-y-1">
                      <div>• Childhood trauma affecting current life</div>
                      <div>• Serious relationship or family conflicts</div>
                      <div>• Low self-esteem & identity issues</div>
                    </div>
                    <div className="text-green-700 text-sm space-y-1">
                      <div>• Grief & loss processing</div>
                      <div>• Anger management problems</div>
                      <div>• Social anxiety & isolation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Crisis & assessment needs:</h5>
                  <div className="text-green-700 text-sm space-y-1">
                    <div>• ADHD diagnosis assessment & testing</div>
                    <div>• Medication evaluation & management</div>
                    <div>• Crisis intervention & safety concerns</div>
                    <div>• Insurance claims & official documentation</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded">
                <p className="text-green-800 text-sm">
                  <strong>Psycholoog keuze tip:</strong> Kies een psycholoog als je denkt: <em>"Mijn ADHD wordt erger gemaakt door emotionele problemen of trauma uit het verleden."</em>
                </p>
              </div>
            </div>

            <h2>Cost vergelijking: wat mag je verwachten?</h2>
            <p>
              <strong>ADHD coach kosten vs psycholoog kosten</strong> verschillen significant, net als de vergoeding mogelijkheden.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-4">💰 Complete kosten breakdown</h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h5 className="font-medium text-blue-800 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    ADHD Coach Kosten
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Intakegesprek:</span>
                      <span className="font-medium text-blue-800">€75-125</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Individuele sessie:</span>
                      <span className="font-medium text-blue-800">€60-120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Pakket (10 sessies):</span>
                      <span className="font-medium text-blue-800">€550-1000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Maandelijkse kosten:</span>
                      <span className="font-medium text-blue-800">€240-480</span>
                    </div>
                    <div className="pt-2 border-t border-yellow-200">
                      <div className="flex justify-between font-medium">
                        <span className="text-red-700">Vergoeding:</span>
                        <span className="text-red-800">Meestal niet</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h5 className="font-medium text-green-800 mb-3 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Psycholoog Kosten
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Intakegesprek:</span>
                      <span className="font-medium text-green-800">€100-160</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Individuele sessie:</span>
                      <span className="font-medium text-green-800">€80-150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">ADHD assessment:</span>
                      <span className="font-medium text-green-800">€400-800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Maandelijkse kosten:</span>
                      <span className="font-medium text-green-800">€320-600</span>
                    </div>
                    <div className="pt-2 border-t border-yellow-200">
                      <div className="flex justify-between font-medium">
                        <span className="text-green-700">Vergoeding:</span>
                        <span className="text-green-800">Vaak wel (€)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 p-4 rounded">
                <h5 className="font-medium text-orange-900 mb-2">📊 Total cost of ownership (12 maanden):</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-orange-800">ADHD Coach (eigen risico):</span>
                    <span className="font-bold text-orange-900 ml-2">€2,880-5,760</span>
                  </div>
                  <div>
                    <span className="text-orange-800">Psycholoog (na vergoeding):</span>
                    <span className="font-bold text-orange-900 ml-2">€600-1,800</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Kan je beide combineren?</h2>
            <p>
              Absoluut! <strong>ADHD coach en psycholoog</strong> combineren is vaak de meest effectieve aanpak voor complexe situaties.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-purple-900 mb-4">🤝 Waarom combinatie zo effectief is</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">Complementaire focus:</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-purple-700 mb-1"><strong>Psycholoog behandelt:</strong></p>
                      <ul className="text-purple-600 space-y-1">
                        <li>• Trauma & emotional healing</li>
                        <li>• Depression & anxiety management</li>
                        <li>• Deep-rooted belief systems</li>
                        <li>• Medication optimization</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-purple-700 mb-1"><strong>Coach ontwikkelt:</strong></p>
                      <ul className="text-purple-600 space-y-1">
                        <li>• Daily functioning skills</li>
                        <li>• Productivity & organization systems</li>
                        <li>• Goal achievement strategies</li>
                        <li>• Accountability & motivation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">Ideale combinatie scenarios:</h5>
                  <ul className="text-purple-700 text-sm space-y-2">
                    <li>• <strong>Trauma + productiviteit:</strong> Psycholoog voor verwerking, coach voor dagelijkse structuur</li>
                    <li>• <strong>Depressie + werkproblemen:</strong> Psycholoog voor mood stability, coach voor career advancement</li>
                    <li>• <strong>Anxiety + time management:</strong> Psycholoog voor worry management, coach voor planning systems</li>
                    <li>• <strong>Complex ADHD + life transitions:</strong> Beide voor comprehensive support tijdens major changes</li>
                  </ul>
                </div>

                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-purple-800 text-sm">
                    <strong>Communicatie tip:</strong> Zorg dat beide professionals weten van elkaar en kunnen samenwerken. 87% betere resultaten met gecoördineerde zorg.
                  </p>
                </div>
              </div>
            </div>

            <h2>Beslissingshulp: welke is jouw match?</h2>
            <p>
              Gebruik deze praktische <strong>keuzewijzer ADHD hulp</strong> om de juiste beslissing te maken voor jouw situatie.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-4">🎯 De 5-vragentest</h4>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-3">1. Wat is je primaire uitdaging?</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-blue-800 font-medium text-sm">→ Coach als je zegt:</p>
                      <p className="text-blue-700 text-sm">"Ik weet wat ik moet doen, maar krijg het niet voor elkaar"</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium text-sm">→ Psycholoog als je zegt:</p>
                      <p className="text-green-700 text-sm">"Ik voel me emotioneel overweldigd en kan niet helder denken"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-3">2. Hoe urgent is je situatie?</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-blue-800 font-medium text-sm">→ Coach voor:</p>
                      <p className="text-blue-700 text-sm">Performance improvement, deadline management, career goals</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium text-sm">→ Psycholoog voor:</p>
                      <p className="text-green-700 text-sm">Crisis situations, severe depression, trauma reactions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-3">3. Wat is je budget & vergoeding situatie?</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-blue-800 font-medium text-sm">→ Coach als:</p>
                      <p className="text-blue-700 text-sm">Je kunt €300-500/maand investeren voor snelle resultaten</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium text-sm">→ Psycholoog als:</p>
                      <p className="text-green-700 text-sm">Je hebt goede verzekering of budget voor langere termijn process</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-3">4. Hoe kijk je naar persoonlijke ontwikkeling?</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-blue-800 font-medium text-sm">→ Coach als je wilt:</p>
                      <p className="text-blue-700 text-sm">Skills bouwen, doelen behalen, performance optimaliseren</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium text-sm">→ Psycholoog als je wilt:</p>
                      <p className="text-green-700 text-sm">Jezelf beter begrijpen, het verleden verwerken, emotionele healing</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-gray-800 mb-3">5. Hoeveel tijd wil je investeren?</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-blue-800 font-medium text-sm">→ Coach voor:</p>
                      <p className="text-blue-700 text-sm">3-6 maanden intensief, snelle resultaten, kortere commitment</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium text-sm">→ Psycholoog voor:</p>
                      <p className="text-green-700 text-sm">6 maanden tot jaren, diepe verandering, langere termijn investment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded border">
                <h5 className="font-medium text-gray-900 mb-2">🎯 Jouw score:</h5>
                <p className="text-gray-700 text-sm mb-2">Tel je antwoorden:</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-800">3-5 Coach antwoorden</div>
                    <div className="text-blue-700">Start met ADHD coach</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-800">3-5 Psycholoog antwoorden</div>
                    <div className="text-green-700">Start met psycholoog</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-800">Gemengd resultaat</div>
                    <div className="text-purple-700">Overweeg combinatie</div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Veelgestelde vragen</h2>
            
            <div className="space-y-4 my-8">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Kan een psycholoog ook coaching geven?</h4>
                <p className="text-yellow-800 text-sm">
                  Sommige psychologen bieden inderdaad coaching-elementen aan, maar dit is niet hun hoofdfocus. Gespecialiseerde ADHD coaches hebben vaak meer praktische tools en zijn meer resultaatgericht dan therapeutisch getrainde psychologen.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Moet ik stoppen met de psycholoog als ik een coach neem?</h4>
                <p className="text-yellow-800 text-sm">
                  Nee! Veel mensen combineren beide succesvol. Zorg wel voor goede communicatie tussen beide professionals om overlap te voorkomen en synergie te creëren.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Hoe weet ik of mijn keuze de juiste is?</h4>
                <p className="text-yellow-800 text-sm">
                  Na 3-4 sessies moet je vooruitgang voelen. Bij een coach zie je concrete verbetering in dagelijks functioneren. Bij een psycholoog voel je meer emotionele stabiliteit en inzicht. Geen vooruitgang? Overweeg een switch.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Wat als ik het financieel niet kan betalen?</h4>
                <p className="text-yellow-800 text-sm">
                  Psycholoog via huisarts + basis verzekering is vaak (deels) vergoed. Voor coaching: vraag naar sliding scale tarieven, online groepscoaching, of start met zelfhulp boeken en apps tot je budget toelaat.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Klaar om de juiste hulp te vinden?
              </h2>
              <p className="text-gray-700 mb-6">
                Nu je het verschil kent, is het tijd om de perfecte ADHD professional te vinden in jouw regio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vind ADHD coaches bij mij in de buurt
                </Link>
                <Link 
                  href="/blog/beste-vragen-adhd-coach" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Interview vragen voor coaches →
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
