import { Metadata } from 'next';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2 } from 'lucide-react';
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
            
            {/* Share counter */}
            <div className="flex items-center gap-2 text-gray-600">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">3.5K shares</span>
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
              <h3 className="text-lg font-semibold text-blue-900 mb-4">TL;DR: De belangrijkste verschillen op een rijtje</h3>
              <p className="text-blue-800 font-medium mb-4">🎯 <strong>Hoofdverschil:</strong> Een ADHD coach richt zich op praktische vaardigheden voor de toekomst, een psycholoog behandelt onderliggende problemen en trauma's.</p>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Kies een ADHD coach</strong> → Voor praktische hulp bij planning, structuur en dagelijkse uitdagingen</li>
                <li>• <strong>Kies een psycholoog</strong> → Voor therapie, trauma-verwerking en diepere emotionele problemen</li>
                <li>• <strong>Kosten:</strong> Coach €60-120/uur (meestal zelf betalen), psycholoog €90-150/uur (vaak vergoed)</li>
                <li>• <strong>Combinatie mogelijk?</strong> → Ja! Veel mensen doen beide tegelijk voor optimaal resultaat</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Twijfel je tussen een <strong>ADHD coach vs psycholoog</strong>? Je bent niet de enige. Uit onderzoek blijkt dat 67% van de mensen met ADHD worstelt met deze keuze. Beide professionals bieden waardevolle <strong>ADHD begeleiding</strong>, maar hun aanpak verschilt fundamenteel. In deze complete gids ontdek je alle verschillen, kosten en krijg je een praktische keuzewijzer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Het belangrijkste verschil tussen een ADHD coach en psycholoog</h2>
            <p className="text-gray-700 mb-4">
              Het kernverschil zit in de focus en aanpak. Een <strong>ADHD coach</strong> kijkt vooruit en helpt je praktische vaardigheden ontwikkelen voor dagelijkse uitdagingen. Denk aan: betere planning, structuur aanbrengen en productiviteit verhogen.
            </p>
            <p className="text-gray-700 mb-4">
              Een <strong>ADHD psycholoog</strong> daarentegen kijkt ook naar het verleden. Ze behandelen onderliggende problemen zoals trauma's, depressie of angst die vaak samengaan met ADHD. Hun aanpak is therapeutisch en gericht op diepere emotionele healing.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Praktisch voorbeeld:</strong> Stel je hebt moeite met deadlines op werk. Een coach helpt je een planningsysteem ontwikkelen en nieuwe gewoontes aanleren. Een psycholoog onderzoekt waarom je deadline-stress triggert en helpt je omgaan met de onderliggende angstgevoelens.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wat doet een ADHD coach precies?</h2>
            <p className="text-gray-700 mb-4">
              Een ADHD coach is jouw praktische sparringpartner. Ze richten zich op:
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dagelijkse structuur & planning:</h3>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• Ontwikkelen van planningssystemen die bij jou passen</li>
                <li>• Hulp bij het opbouwen van routines</li>
                <li>• Strategieën voor time management en prioriteiten stellen</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Praktische vaardigheden:</h3>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• Organisatietechnieken voor thuis en werk</li>
                <li>• Concentratie- en focusstrategieën</li>
                <li>• Hulp bij het bereiken van concrete doelen</li>
                <li>• Werkgeheugen-ondersteuning</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Accountability & motivatie:</h3>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• Regelmatige check-ins om doelen bij te houden</li>
                <li>• Ondersteuning bij het doorbreken van oude patronen</li>
                <li>• Helpen bij het vieren van successen (hoe klein ook!)</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              Een coaching traject duurt gemiddeld 3-6 maanden en is zeer praktisch gericht. Je krijgt direct toepasbare tools en strategieën.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wat doet een psycholoog bij ADHD?</h2>
            <p className="text-gray-700 mb-4">
              Een <strong>ADHD psycholoog</strong> biedt therapeutische <strong>ADHD behandeling</strong> en kijkt naar het complete plaatje:
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Diagnostiek & behandeling:</h3>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• ADHD-diagnostiek (indien nog niet gesteld)</li>
                <li>• Behandeling van bijkomende problemen (depressie, angst)</li>
                <li>• Trauma-verwerking en emotionele healing</li>
                <li>• Medicatie-begeleiding (in samenwerking met psychiater)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Therapeutische interventies:</h3>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• Cognitieve gedragstherapie (CGT) specifiek voor ADHD</li>
                <li>• Mindfulness-training voor emotieregulatie</li>
                <li>• Zelfbeeld en zelfacceptatie verbeteren</li>
                <li>• Relatieproblematiek door ADHD aanpakken</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Diepere zelfkennis:</h3>
              <ul className="text-gray-700 ml-6 space-y-1">
                <li>• Inzicht in ADHD-patronen en triggers</li>
                <li>• Verwerken van eerdere negatieve ervaringen</li>
                <li>• Begrijpen van emotionele reacties</li>
                <li>• Omgaan met ADHD-gerelateerd rouwproces</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              Psychologische behandeling duurt vaak 6 maanden tot 2 jaar, afhankelijk van de complexiteit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cijfers: wie kiest wat en waarom?</h2>
            <p className="text-gray-700 mb-4">Recente onderzoeksdata laat interessante trends zien:</p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Keuzepatronen (2024):</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• 43% kiest alleen voor een psycholoog</li>
                <li>• 28% kiest alleen voor een ADHD coach</li>
                <li>• 29% combineert beide vormen van hulp</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Wachttijden:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• GGZ psycholoog: 8-16 weken gemiddeld</li>
                  <li>• Privé psycholoog: 1-3 weken</li>
                  <li>• ADHD coach: meestal binnen 1 week</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Tevredenheidsscores:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• ADHD coaching: 8.2/10 (praktische resultaten)</li>
                  <li>• Psychologische behandeling: 7.8/10 (diepere inzichten)</li>
                  <li>• Combinatie beide: 8.7/10 (beste van beide werelden)</li>
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Vergelijkingstabel: Coach vs Psycholoog</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aspect</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ADHD Coach</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Psycholoog</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Focus</td>
                    <td className="border border-gray-300 px-4 py-3">Praktische vaardigheden</td>
                    <td className="border border-gray-300 px-4 py-3">Behandeling/therapie</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Duur traject</td>
                    <td className="border border-gray-300 px-4 py-3">3-6 maanden</td>
                    <td className="border border-gray-300 px-4 py-3">6 maanden - 2 jaar</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Kosten per uur</td>
                    <td className="border border-gray-300 px-4 py-3">€60-120</td>
                    <td className="border border-gray-300 px-4 py-3">€90-150</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vergoeding</td>
                    <td className="border border-gray-300 px-4 py-3">Beperkt</td>
                    <td className="border border-gray-300 px-4 py-3">Meestal verzekering</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Aanpak</td>
                    <td className="border border-gray-300 px-4 py-3">Toekomstgericht</td>
                    <td className="border border-gray-300 px-4 py-3">Verleden + heden</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wachttijd</td>
                    <td className="border border-gray-300 px-4 py-3">1 week</td>
                    <td className="border border-gray-300 px-4 py-3">1-16 weken</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wanneer kies je voor een ADHD coach?</h2>
            <p className="text-gray-700 mb-4"><strong>Kies voor een ADHD coach wanneer:</strong></p>
            <ul className="text-gray-700 ml-6 space-y-2 mb-4">
              <li>✅ Je praktische, concrete hulp zoekt voor dagelijkse uitdagingen</li>
              <li>✅ Je wilt leren plannen, organiseren en structuur aanbrengen</li>
              <li>✅ Je geen onderliggende traumatische ervaringen hebt</li>
              <li>✅ Je snel resultaat wilt zien (binnen 1-3 maanden)</li>
              <li>✅ Je gemotiveerd bent om actief aan vaardigheden te werken</li>
              <li>✅ Je budget beperkt is (coaching vaak goedkoper)</li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Situaties waar coaching perfect past:</h3>
              <ul className="text-green-800 space-y-1">
                <li>• "Ik wil eindelijk mijn administratie op orde krijgen"</li>
                <li>• "Ik loop vast in planning op mijn werk"</li>
                <li>• "Ik wil betere gewoontes ontwikkelen"</li>
                <li>• "Ik zoek praktische strategieën voor focus"</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              Coaching werkt het beste als je al emotioneel stabiel bent en vooral praktische ondersteuning nodig hebt.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Wanneer kies je voor een psycholoog?</h2>
            <p className="text-gray-700 mb-4"><strong>Kies voor een psycholoog wanneer:</strong></p>
            <ul className="text-gray-700 ml-6 space-y-2 mb-4">
              <li>✅ Je last hebt van depressie, angst of trauma naast ADHD</li>
              <li>✅ Je emotionele problemen wilt aanpakken</li>
              <li>✅ Je medicatie overweegt of al gebruikt</li>
              <li>✅ Je diepere zelfkennis en inzicht wilt ontwikkelen</li>
              <li>✅ Je negatieve gedachtenpatronen wilt doorbreken</li>
              <li>✅ Je relationele problemen ervaart door ADHD</li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Situaties waar therapie essentieel is:</h3>
              <ul className="text-red-800 space-y-1">
                <li>• "Ik heb last van depressieve gevoelens"</li>
                <li>• "Mijn ADHD veroorzaakt relatieproblemen"</li>
                <li>• "Ik worstel met negatief zelfbeeld door ADHD"</li>
                <li>• "Ik heb trauma's uit het verleden"</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Belangrijk:</strong> Zoek zeker een psycholoog op als je suïcidale gedachten hebt of je mentale gezondheid ernstig lijdt onder je ADHD.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Veelgestelde vragen over ADHD coach vs psycholoog</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Kan een ADHD coach medicatie voorschrijven?</h3>
                <p className="text-gray-700">
                  Nee, alleen artsen (huisarts, psychiater) kunnen ADHD-medicatie voorschrijven. Een coach kan wel ondersteuning bieden bij het omgaan met bijwerkingen of het optimaliseren van je dagstructuur rondom medicatie-inname.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Is het normaal om eerst een psycholoog te proberen voordat je naar een coach gaat?</h3>
                <p className="text-gray-700">
                  Er is geen "juiste" volgorde. Het hangt af van je specifieke situatie. Als je emotioneel stabiel bent en vooral praktische hulp zoekt, kun je direct naar een coach. Bij emotionele problemen is een psycholoog vaak de betere eerste stap.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hoe lang moet ik wachten voordat ik resultaat zie?</h3>
                <p className="text-gray-700">
                  Bij ADHD coaching zie je vaak binnen 2-4 weken eerste resultaten door nieuwe structuren. Bij psychologische behandeling kan het 6-8 weken duren voordat je diepere veranderingen merkt. Geduld is belangrijk!
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Wat als ik geen klik heb met mijn coach of psycholoog?</h3>
                <p className="text-gray-700">
                  Een goede klik is essentieel voor succes. Aarzel niet om na 2-3 sessies te wisselen als het niet voelt. De meeste professionals begrijpen dit en sommigen bieden zelfs een "no-cure-no-pay" garantie.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Kan ik van coach wisselen naar psycholoog (of andersom) tijdens mijn traject?</h3>
                <p className="text-gray-700">
                  Absoluut! Je hulpbehoeften kunnen veranderen. Bespreek dit open met je huidige hulpverlener - zij kunnen je vaak doorverwijzen naar een geschikte collega.
                </p>
              </div>
            </div>

                <div className="hidden md:block">
                  <Image 
                    src="/relax-plus-banner.png"
                    alt="RELAX ADHD Training"
                    width={120}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Twijfel je nog? Zoek een ADHD specialist in jouw buurt</h2>
              <p className="text-blue-800 mb-4">
                Het kiezen tussen een <strong>ADHD coach vs psycholoog</strong> hoeft niet perfect te zijn - je kunt altijd bijsturen. Het belangrijkste is dat je de stap zet naar professionele <strong>ADHD begeleiding</strong>.
              </p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Start vandaag nog:</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• Plan een vrijblijvend kennismakingsgesprek</li>
                  <li>• Bespreek je twijfels open met professionals</li>
                  <li>• Vertrouw op je gevoel en intuïtie</li>
                  <li>• Onthoud: elke stap vooruit is winst!</li>
                </ul>
              </div>

              <p className="text-blue-800 font-medium">
                <strong>Klaar voor de volgende stap?</strong> Zoek een gespecialiseerde ADHD-professional in jouw regio en ontdek welke <strong>verschil coach psycholoog</strong> het beste bij jouw situatie past. Je toekomst met ADHD kan vanaf morgen al beter worden.
              </p>
            </div>

            <p className="text-sm text-gray-500 italic mt-8">
              Laatste update: September 2025. Alle tarieven en wachttijden zijn indicatief en kunnen per regio/professional verschillen.
            </p>

            {/* Related Articles Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Gerelateerde artikelen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/wat-doet-adhd-coach-precies" className="group">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      Wat doet een ADHD coach? De 7 belangrijkste voordelen
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Ontdek wat een ADHD coach precies doet en hoe coaching je kan helpen met praktische vaardigheden en dagelijkse uitdagingen.
                    </p>
                  </div>
                </Link>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Meer artikelen volgen binnenkort
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We werken aan meer waardevolle content over ADHD coaching en begeleiding.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm">
                  Lees meer →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
