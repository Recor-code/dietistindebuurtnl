import { notFound } from 'next/navigation';
import { supabase } from '../../../../../../lib/supabase';
import { Calendar, MapPin, ArrowLeft, Users, Star, Clock, Phone, Heart } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';

interface PageProps {
  params: Promise<{
    slug: string;
    'article-slug': string;
  }>;
}

// City-specific article data
const cityArticles: Record<string, Record<string, any>> = {
  amsterdam: {
    'adhd-coach-in-amsterdam-hoe-vind-je-de-juiste-begeleiding-dichtbij-huis': {
      title: 'ADHD coach in Amsterdam: hoe vind je de juiste begeleiding dichtbij huis?',
      description: 'Ontdek hoe je de beste ADHD coach in Amsterdam vindt. Complete gids over ADHD coaching in de hoofdstad, kosten, specialisaties en praktische tips voor Amsterdam.',
      publishedAt: new Date('2024-12-15'),
      keywords: 'ADHD coach Amsterdam, ADHD coaching Amsterdam, ADHD behandeling Amsterdam',
      author: 'ADHD Coach in de Buurt',
      readingTime: '8 min',
    }
  }
};

async function getCityWithCoaches(citySlug: string) {
  try {
    const { data: city, error } = await supabase
      .from('cities')
      .select('id, name, slug, province, country, population')
      .eq('slug', citySlug)
      .maybeSingle();

    if (error || !city) {
      return null;
    }

    // Get coaches count for this city
    const { count: coachCount } = await supabase
      .from('coaches')
      .select('*', { count: 'exact', head: true })
      .eq('city_id', city.id);

    return { ...city, coachCount: coachCount || 0 };
  } catch (error) {
    console.error('Error fetching city:', error);
    return null;
  }
}

export default async function CityBlogPage({ params }: PageProps) {
  const { slug: citySlug, 'article-slug': articleSlug } = await params;
  
  const city = await getCityWithCoaches(citySlug);
  const article = cityArticles[citySlug]?.[articleSlug];
  
  if (!city || !article) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: 'ADHD Coach in de Buurt',
      url: 'https://adhdcoachindebuurt.nl'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADHD Coach in de Buurt',
      url: 'https://adhdcoachindebuurt.nl'
    },
    datePublished: article.publishedAt.toISOString(),
    dateModified: article.publishedAt.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://adhdcoachindebuurt.nl/stad/${citySlug}/blog/${articleSlug}`
    },
    url: `https://adhdcoachindebuurt.nl/stad/${citySlug}/blog/${articleSlug}`,
    articleSection: 'ADHD Coaching',
    keywords: article.keywords,
    inLanguage: 'nl-NL',
    locationCreated: {
      '@type': 'Place',
      name: city.name,
      addressRegion: city.province,
      addressCountry: city.country
    },
    about: [
      {
        '@type': 'Thing',
        name: 'ADHD Coaching'
      },
      {
        '@type': 'Place',
        name: city.name
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href={`/stad/${citySlug}`} className="hover:text-blue-600">{city.name}</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-800">ADHD coach in {city.name}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-8 pb-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{article.publishedAt.toLocaleDateString('nl-NL', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{city.name}, {city.province}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{article.readingTime} leestijd</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {article.description}
              </p>
            </div>

            {/* Content */}
            <div className="px-8 pb-8">
              <div className="prose prose-lg max-w-none">
                
                {/* Intro Section */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold text-blue-800 mb-3">
                    🎯 Snel overzicht: ADHD coaching in {city.name}
                  </h2>
                  <ul className="text-blue-700 space-y-2">
                    <li>• <strong>{city.coachCount} gecertificeerde ADHD coaches</strong> beschikbaar in {city.name}</li>
                    <li>• <strong>Kosten:</strong> €60-€150 per sessie (mogelijk vergoeding)</li>
                    <li>• <strong>Specialisaties:</strong> volwassenen, kinderen, werkgerelateerde problemen</li>
                    <li>• <strong>Locaties:</strong> Centrum, Noord, Zuid, Oost, West en online</li>
                  </ul>
                </div>

                <h2>Waarom een ADHD coach in {city.name}?</h2>
                <p>
                  {city.name} biedt een rijk aanbod aan ADHD-specialisten en coaches die je kunnen helpen bij het omgaan met ADHD in het dagelijks leven. 
                  Of je nu woont in het historische centrum, de groene wijken van Noord, of de moderne ontwikkelingen in Zuid - er is altijd een 
                  gekwalificeerde ADHD coach bij jou in de buurt.
                </p>

                <p>
                  Met meer dan {city.population?.toLocaleString() || '800.000'} inwoners kent {city.name} een grote diversiteit aan 
                  ADHD-professionals, elk met hun eigen specialisatie en aanpak. Dit artikel helpt je de juiste match te vinden.
                </p>

                <h2>Wat maakt een goede ADHD coach uit?</h2>
                <p>
                  Een effectieve ADHD coach in {city.name} heeft verschillende belangrijke kwaliteiten:
                </p>
                
                <h3>1. Erkende certificering en ervaring</h3>
                <p>
                  Zoek naar coaches met een officiële certificering in ADHD coaching. In Nederland zijn dit vaak coaches die zijn aangesloten bij 
                  de Nederlandse Vereniging voor ADHD (NVOA) of vergelijkbare organisaties. Veel coaches in {city.name} hebben aanvullende 
                  training gevolgd bij gerenommeerde instituten.
                </p>

                <h3>2. Lokale kennis en netwerk</h3>
                <p>
                  Een coach uit {city.name} kent de lokale zorgverleners, zoals psychiaters, psychologen en huisartsen die gespecialiseerd zijn 
                  in ADHD. Deze lokale connecties kunnen waardevol zijn voor doorverwijzingen en samenwerking in je behandeltraject.
                </p>

                <h3>3. Flexibele beschikbaarheid</h3>
                <p>
                  Gezien de drukke levensstijl in {city.name}, is het belangrijk dat je coach flexibele tijden aanbiedt. Veel coaches bieden 
                  zowel online als persoonlijke sessies aan, en sommigen hebben ook avond- of weekendtijden beschikbaar.
                </p>

                <h2>Hoe vind je de juiste ADHD coach in {city.name}?</h2>
                
                <h3>Stap 1: Bepaal je behoeften</h3>
                <p>
                  Voordat je op zoek gaat naar een coach, is het belangrijk om te weten wat je precies zoekt:
                </p>
                <ul>
                  <li><strong>Leeftijdsgroep:</strong> Coaches voor kinderen, adolescenten of volwassenen</li>
                  <li><strong>Specialisatie:</strong> Werk/studie, relaties, ouderschap, of algemene levensstijl</li>
                  <li><strong>Locatie:</strong> Voorkeur voor een bepaalde wijk in {city.name} of online sessies</li>
                  <li><strong>Budget:</strong> Wat kun je besteden aan coaching sessies</li>
                  <li><strong>Beschikbaarheid:</strong> Wanneer ben je beschikbaar voor sessies</li>
                </ul>

                <h3>Stap 2: Onderzoek lokale opties</h3>
                <p>
                  {city.name} heeft coaches verspreid over verschillende wijken. Populaire locaties voor ADHD coaching praktijken zijn:
                </p>
                <ul>
                  <li><strong>Centrum:</strong> Goed bereikbaar met openbaar vervoer</li>
                  <li><strong>Jordaan/Grachtengordel:</strong> Veel praktijken in karakteristieke panden</li>
                  <li><strong>Zuid:</strong> Moderne praktijken rond het Museumplein en Zuidas</li>
                  <li><strong>Noord:</strong> Opkomende locatie met innovatieve coaches</li>
                  <li><strong>Oost/West:</strong> Meer betaalbare opties, vaak goed bereikbaar</li>
                </ul>

                <h3>Stap 3: Eerste contact en intake</h3>
                <p>
                  De meeste ADHD coaches in {city.name} bieden een korte kennismakingssessie of telefonisch gesprek aan. 
                  Gebruik dit om te beoordelen of er een goede match is. Stel vragen over:
                </p>
                <ul>
                  <li>Hun specifieke ervaring met jouw type ADHD-uitdagingen</li>
                  <li>Hun coachingsaanpak en methodiek</li>
                  <li>Praktische zaken zoals kosten, frequentie en locatie</li>
                  <li>Hun beschikbaarheid en flexibiliteit</li>
                </ul>

                <h2>Kosten van ADHD coaching in {city.name}</h2>
                <p>
                  De kosten voor ADHD coaching in {city.name} variëren afhankelijk van verschillende factoren:
                </p>

                <h3>Tarievenstructuur</h3>
                <ul>
                  <li><strong>Startende coaches:</strong> €60-€80 per sessie</li>
                  <li><strong>Ervaren coaches:</strong> €80-€120 per sessie</li>
                  <li><strong>Gespecialiseerde experts:</strong> €120-€150 per sessie</li>
                  <li><strong>Groepssessies:</strong> €30-€50 per sessie</li>
                </ul>

                <h3>Vergoedingen en verzekeringen</h3>
                <p>
                  Hoewel ADHD coaching niet altijd volledig vergoed wordt door de basisverzekering, zijn er wel mogelijkheden:
                </p>
                <ul>
                  <li><strong>Aanvullende verzekering:</strong> Sommige pakketten vergoeden coaching gedeeltelijk</li>
                  <li><strong>Zorgtoeslag:</strong> Kan bijdragen aan de kosten</li>
                  <li><strong>Werkgeversregelingen:</strong> Sommige werkgevers in {city.name} bieden ondersteuning</li>
                  <li><strong>PGB (Persoonsgebonden Budget):</strong> Voor specifieke situaties</li>
                </ul>

                <h2>Specialisaties van ADHD coaches in {city.name}</h2>
                
                <h3>Coaches voor volwassenen</h3>
                <p>
                  Veel volwassenen in {city.name} krijgen pas later in hun leven een ADHD-diagnose. Gespecialiseerde coaches helpen bij:
                </p>
                <ul>
                  <li>Werk- en carrièregerelateerde uitdagingen</li>
                  <li>Relatie- en partnerschap problemen</li>
                  <li>Ouderschap met ADHD</li>
                  <li>Financieel management en organisatie</li>
                  <li>Sociale vaardigheden en netwerken</li>
                </ul>

                <h3>Coaches voor kinderen en tieners</h3>
                <p>
                  Voor jonge mensen met ADHD in {city.name} zijn er coaches die zich richten op:
                </p>
                <ul>
                  <li>Schoolprestaties en studievaardigheden</li>
                  <li>Sociale interacties en vriendschappen</li>
                  <li>Emotieregulatie en impulscontrole</li>
                  <li>Overgang naar zelfstandigheid</li>
                  <li>Samenwerking met scholen en ouders</li>
                </ul>

                <h3>Werkgerelateerde ADHD coaching</h3>
                <p>
                  Gezien de zakelijke drukte in {city.name}, zijn er veel coaches gespecialiseerd in werk-gerelateerde ADHD-uitdagingen:
                </p>
                <ul>
                  <li>Productiviteit en tijdmanagement</li>
                  <li>Communicatie op de werkplek</li>
                  <li>Stress- en burn-out preventie</li>
                  <li>Carrièreplanning en doelstelling</li>
                  <li>Ondernemerschap met ADHD</li>
                </ul>

                <h2>Online vs. persoonlijke sessies</h2>
                <p>
                  Coaches in {city.name} bieden meestal beide opties aan:
                </p>

                <h3>Voordelen van persoonlijke sessies</h3>
                <ul>
                  <li>Directe, persoonlijke connectie</li>
                  <li>Geen technische problemen</li>
                  <li>Volledig gefocuste omgeving</li>
                  <li>Mogelijkheid voor praktische oefeningen</li>
                </ul>

                <h3>Voordelen van online coaching</h3>
                <ul>
                  <li>Flexibiliteit en tijd besparing (geen reistijd door {city.name})</li>
                  <li>Comfort van thuis</li>
                  <li>Toegang tot coaches buiten {city.name}</li>
                  <li>Vaak iets voordeliger</li>
                </ul>

                <h2>Tips voor het eerste bezoek</h2>
                <p>
                  Voor je eerste afspraak met een ADHD coach in {city.name}:
                </p>
                <ul>
                  <li><strong>Bereiding:</strong> Schrijf vragen en doelen op voorhand op</li>
                  <li><strong>Documentatie:</strong> Neem relevante medische informatie mee</li>
                  <li><strong>Verwachtingen:</strong> Bespreek wat je hoopt te bereiken</li>
                  <li><strong>Praktisch:</strong> Plan extra tijd in voor reizen door {city.name}</li>
                  <li><strong>Open houding:</strong> Wees eerlijk over je uitdagingen en behoeften</li>
                </ul>

                <h2>Conclusie: De juiste ADHD coach vinden in {city.name}</h2>
                <p>
                  {city.name} biedt uitstekende mogelijkheden voor ADHD coaching, met een breed scala aan gekwalificeerde professionals 
                  die je kunnen helpen je doelen te bereiken. Door je behoeften goed in kaart te brengen, onderzoek te doen naar 
                  beschikbare opties, en gebruik te maken van kennismakingsgesprekken, kun je de perfecte coach vinden die bij jou past.
                </p>

                <p>
                  Vergeet niet dat ADHD coaching een investering in jezelf is. Met de juiste begeleiding kun je leren je ADHD te 
                  gebruiken als kracht en een meer gebalanceerd en succesvol leven leiden in deze prachtige stad.
                </p>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-3">Klaar om te beginnen?</h3>
                  <p className="mb-4">
                    Bekijk alle beschikbare ADHD coaches in {city.name} en vind de perfecte match voor jouw situatie.
                  </p>
                  <Link 
                    href={`/stad/${citySlug}`}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <Users size={20} />
                    Bekijk ADHD coaches in {city.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Back to city page */}
          <div className="mt-8 text-center">
            <Link 
              href={`/stad/${citySlug}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft size={16} />
              Terug naar {city.name} overzicht
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}