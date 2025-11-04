import { MapPin, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Static blog posts data - 14 diëtist articles
const blogPosts = [
  {
    id: 'waarom-afvallen-niet-lukt',
    title: 'Waarom Afvallen Niet Lukt: De 7 Grootste Valkuilen en Hoe Je Ze Vermijdt',
    slug: 'waarom-afvallen-niet-lukt',
    excerpt: 'Ontdek waarom 95% van de diëten faalt en leer de wetenschappelijk bewezen methoden om wel succesvol af te vallen.',
    metaDescription: 'Waarom lukt afvallen niet? Ontdek de 7 grootste valkuilen en wetenschappelijk bewezen oplossingen voor blijvend gewichtsverlies.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Afvallen', 'Gewichtsverlies', 'Dieet', 'Gezondheid']
  },
  {
    id: 'hoeveel-kilo-per-week-afvallen',
    title: 'Hoeveel Kilo Per Week Afvallen is Gezond? Experts Leggen Uit',
    slug: 'hoeveel-kilo-per-week-afvallen',
    excerpt: 'Alles wat je moet weten over gezond afvallen: van realistische doelen tot wetenschappelijk onderbouwde strategieën.',
    metaDescription: 'Hoeveel kilo per week afvallen is gezond? Leer de wetenschappelijke richtlijnen en praktische tips voor blijvend resultaat.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Gewichtsverlies', 'Gezond afvallen', 'Doelen', 'Tempo']
  },
  {
    id: 'dietist-vs-voedingsdeskundige',
    title: 'Diëtist vs Voedingsdeskundige: Wat is het Verschil?',
    slug: 'dietist-vs-voedingsdeskundige',
    excerpt: 'Uitgebreide vergelijking tussen diëtisten en voedingsdeskundigen: opleidingen, bevoegdheden en wanneer je voor welke professional kiest.',
    metaDescription: 'Diëtist of voedingsdeskundige? Ontdek het verschil in opleiding, bevoegdheden en expertise om de juiste keuze te maken.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Diëtist', 'Voedingsdeskundige', 'Verschil', 'Expertise']
  },
  {
    id: 'wat-kost-een-dietist',
    title: 'Wat Kost een Diëtist? Complete Prijsoverzicht 2025',
    slug: 'wat-kost-een-dietist',
    excerpt: 'Alles over diëtist kosten, vergoedingen en hoe je maximaal profiteert van je zorgverzekering.',
    metaDescription: 'Wat kost een diëtist in 2025? Ontdek alle tarieven, vergoedingen en hoe je diëtist kosten vergoed krijgt.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Kosten', 'Tarieven', 'Vergoeding', 'Verzekering']
  },
  {
    id: 'eerste-consult-dietist',
    title: 'Eerste Consult bij de Diëtist: Wat Kun Je Verwachten?',
    slug: 'eerste-consult-dietist',
    excerpt: 'Complete gids voor je eerste bezoek aan de diëtist: voorbereiding, verloop en wat je kunt verwachten.',
    metaDescription: 'Eerste consult diëtist: ontdek wat er gebeurt, hoe je je voorbereidt en wat je kunt verwachten van je eerste afspraak.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Eerste consult', 'Intake', 'Voorbereiding', 'Verwachtingen']
  },
  {
    id: 'dieet-diabetes-type-2',
    title: 'Dieet bij Diabetes Type 2: Complete Gids van Experts',
    slug: 'dieet-diabetes-type-2',
    excerpt: 'Wetenschappelijk onderbouwde voedingsadviezen voor diabetes type 2: van bloedsuikercontrole tot gezond eten.',
    metaDescription: 'Dieet diabetes type 2: ontdek de beste voeding voor bloedsuikercontrole en gezond leven met diabetes.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Diabetes', 'Bloedsuiker', 'Chronische ziekte', 'Voeding']
  },
  {
    id: 'hoog-cholesterol-dietist',
    title: 'Hoog Cholesterol Verlagen: Voedingsadvies van de Diëtist',
    slug: 'hoog-cholesterol-dietist',
    excerpt: 'Alles over cholesterol verlagen met voeding: van wetenschappelijke basis tot praktische maaltijdplannen.',
    metaDescription: 'Hoog cholesterol verlagen met voeding? Ontdek de beste voedingstips en adviezen van diëtisten voor gezonde cholesterolwaarden.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Cholesterol', 'Hart en vaatziekten', 'Preventie', 'Gezonde vetten']
  },
  {
    id: 'afvallen-na-50',
    title: 'Afvallen na je 50e: Waarom Het Moeilijker Is en Hoe Het Wel Lukt',
    slug: 'afvallen-na-50',
    excerpt: 'Complete gids voor gezond gewichtsverlies na je 50e: hormonale veranderingen, metabolisme en effectieve strategieën.',
    metaDescription: 'Afvallen na 50: ontdek waarom het moeilijker wordt en welke strategieën wetenschappelijk bewezen effectief zijn.',
    publishedAt: new Date('2025-10-15'),
    tags: ['50 plus', 'Hormonen', 'Metabolisme', 'Leeftijd']
  },
  {
    id: 'sportvoeding-voor-tijdens-na',
    title: 'Sportvoeding: Wat te Eten Voor, Tijdens en Na je Training',
    slug: 'sportvoeding-voor-tijdens-na',
    excerpt: 'Complete sportvoedingsgids: timing, macronutriënten en supplementen voor optimale prestaties en herstel.',
    metaDescription: 'Sportvoeding timing: ontdek wat je moet eten voor, tijdens en na je training voor optimale prestaties en herstel.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Sportvoeding', 'Prestatie', 'Herstel', 'Training']
  },
  {
    id: 'veganistisch-voedingsstoffen',
    title: 'Veganistisch Eten: Welke Voedingsstoffen Mis Je en Hoe Vul Je Ze Aan?',
    slug: 'veganistisch-voedingsstoffen',
    excerpt: 'Complete gids voor gezond veganistisch eten: kritieke voedingsstoffen, supplementen en praktische tips.',
    metaDescription: 'Veganistisch eten gezond? Ontdek welke voedingsstoffen je mist en hoe je ze aanvult voor optimale gezondheid.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Veganistisch', 'Plantaardig', 'Voedingsstoffen', 'Supplementen']
  },
  {
    id: 'prikkelbare-darm-dieet',
    title: 'Prikkelbare Darm Syndroom: Het Beste Dieet Volgens Experts',
    slug: 'prikkelbare-darm-dieet',
    excerpt: 'Wetenschappelijk onderbouwde voedingsadviezen voor prikkelbare darm: FODMAP-dieet, triggers en symptoomverlichting.',
    metaDescription: 'Prikkelbare darm dieet: ontdek het FODMAP-dieet en andere voedingsstrategieën voor symptoomverlichting.',
    publishedAt: new Date('2025-10-15'),
    tags: ['PDS', 'FODMAP', 'Maagdarmproblemen', 'Symptomen']
  },
  {
    id: 'voedselallergien-intoleranties',
    title: 'Voedselallergie vs Intolerantie: Verschil, Symptomen en Behandeling',
    slug: 'voedselallergien-intoleranties',
    excerpt: 'Alles over voedselallergieën en intoleranties: herkenning, diagnose en hoe je ermee omgaat in je dagelijks leven.',
    metaDescription: 'Voedselallergie of intolerantie? Leer het verschil kennen, symptomen herkennen en ontdek hoe je ermee omgaat.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Allergie', 'Intolerantie', 'Symptomen', 'Diagnose']
  },
  {
    id: 'emotioneel-eten',
    title: 'Emotioneel Eten Stoppen: Praktische Tips van Experts',
    slug: 'emotioneel-eten',
    excerpt: 'Begrijp waarom je emotioneel eet en leer effectieve strategieën om de cyclus te doorbreken.',
    metaDescription: 'Emotioneel eten stoppen: ontdek de oorzaken en leer bewezen strategieën om gezonder met je emoties om te gaan.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Emotioneel eten', 'Mindful eten', 'Gedragsverandering', 'Psychologie']
  },
  {
    id: 'gezonde-voeding-kinderen',
    title: 'Gezonde Voeding voor Kinderen: Complete Gids voor Ouders',
    slug: 'gezonde-voeding-kinderen',
    excerpt: 'Alles wat ouders moeten weten over gezonde kindervoeding: van peuters tot tieners, met praktische tips en recepten.',
    metaDescription: 'Gezonde voeding kinderen: ontdek leeftijdsspecifieke voedingsadviezen, praktische tips en recepten voor elke leeftijd.',
    publishedAt: new Date('2025-10-15'),
    tags: ['Kinderen', 'Gezin', 'Groei', 'Ontwikkeling']
  }
];

export const metadata = {
  title: 'Diëtiek Blog - Tips, Nieuws en Lokale Informatie | Diëtist in de Buurt',
  description: 'Lees de laatste artikelen over voedingsadvies, tips voor dagelijks leven en lokale informatie per stad.',
};

export default function BlogPage() {
  // Sort posts by published date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diëtiek Blog
          </h1>
          <p className="text-xl text-blue-100">
            Ontdek praktische tips, het laatste nieuws en lokale informatie over voedingsadvies en ondersteuning.
          </p>
          <div className="mt-6 bg-blue-400/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-100 text-lg">
              📚 <strong>{sortedPosts.length} uitgebreide artikelen</strong> over voedingsadvies, relaties, werkstrategieën en meer
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Featured Image */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50 cursor-pointer hover:opacity-95 transition-opacity">
                    <Image
                      src={`/img/blog/${post.slug}/featured.webp`}
                      alt={`${post.title} - voedingsadvies artikel`}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                      priority={index < 6} // Priority for first 6 posts
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs mb-3">
                    <span className="text-green-600 font-medium">• Nieuw</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Lees meer →
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}