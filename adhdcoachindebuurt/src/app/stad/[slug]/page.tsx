import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { MapPin, Star, Phone, Mail, Globe, Clock, Users, Heart, Filter } from 'lucide-react';
import Link from 'next/link';
import GoogleMap from '@/components/GoogleMap';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getCityWithCoaches(slug: string) {
  try {
    // Get city data
    const { data: city, error: cityError } = await supabase
      .from('cities')
      .select('id, name, slug, province, country, population, latitude, longitude, adhd_stats, tldr, created_at, updated_at')
      .eq('slug', slug)
      .maybeSingle();

    if (cityError || !city) {
      return null;
    }

    // Get coaches for this city
    const { data: coaches, error: coachesError } = await supabase
      .from('coaches')
      .select('id, name, slug, email, phone, website, specialization, description, address, latitude, longitude, city_id, rating, review_count, is_child_friendly, weekend_available, online_available, in_person_available, accepts_insurance, availability_status, created_at, updated_at')
      .eq('city_id', city.id);

    if (coachesError) {
      console.error('Error fetching coaches:', coachesError);
      return { ...city, coaches: [] };
    }

    // Transform data shape to match UI expectations
    const transformedCity = {
      ...city,
      adhdStats: city.adhd_stats,
      createdAt: city.created_at ? new Date(city.created_at) : null,
      updatedAt: city.updated_at ? new Date(city.updated_at) : null
    };

    const transformedCoaches = (coaches || []).map(coach => ({
      ...coach,
      cityId: coach.city_id,
      reviewCount: coach.review_count,
      isChildFriendly: coach.is_child_friendly,
      weekendAvailable: coach.weekend_available,
      onlineAvailable: coach.online_available,
      inPersonAvailable: coach.in_person_available,
      acceptsInsurance: coach.accepts_insurance,
      availabilityStatus: coach.availability_status,
      createdAt: coach.created_at ? new Date(coach.created_at) : null,
      updatedAt: coach.updated_at ? new Date(coach.updated_at) : null
    }));

    return { ...transformedCity, coaches: transformedCoaches };
  } catch (error) {
    console.error('Error fetching city:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const city = await getCityWithCoaches(slug);
  
  if (!city) {
    return {
      title: 'Stad niet gevonden',
    };
  }

  return {
    title: `ADHD Coach ${city.name} - Vind de beste ADHD coaches in ${city.name}`,
    description: `Zoek ADHD coaches in ${city.name}. Bekijk reviews, specialisaties en beschikbaarheid van lokale ADHD coaches en gedragstherapeuten.`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = await getCityWithCoaches(slug);

  if (!city) {
    notFound();
  }

  const adhdStats = city.adhdStats ? JSON.parse(city.adhdStats) : null;
  const availableCoaches = city.coaches.filter(coach => coach.availabilityStatus === 'available');
  const avgRating = city.coaches.length > 0 
    ? city.coaches.reduce((sum, coach) => sum + parseFloat(coach.rating || '0'), 0) / city.coaches.length 
    : 0;

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ADHD Coach ${city.name}`,
    "description": `Vind ADHD coaches en gedragstherapeuten in ${city.name}. Vergelijk specialisten, bekijk reviews en boek een afspraak.`,
    "url": `https://adhdcoachindebuurt.nl/stad/${city.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.province,
      "addressCountry": city.country === 'NL' ? 'Nederland' : 'België'
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": city.latitude,
      "longitude": city.longitude
    },
    "serviceType": "ADHD Coaching and Therapy Services",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": city.province,
      "addressCountry": city.country === 'NL' ? 'Nederland' : 'België'
    },
    "aggregateRating": city.coaches.length > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": city.coaches.reduce((sum, coach) => sum + parseInt(coach.reviewCount || '0'), 0),
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ADHD Coaching Services",
      "itemListElement": city.coaches.map((coach, index) => ({
        "@type": "Offer",
        "name": `${coach.name} - ${coach.specialization}`,
        "description": coach.description,
        "seller": {
          "@type": "Person",
          "name": coach.name,
          "jobTitle": coach.specialization || "ADHD Coach"
        },
        "areaServed": city.name,
        "priceRange": "€75-€125",
        "availability": coach.availabilityStatus === 'available' ? "InStock" : "OutOfStock"
      }))
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": city.coaches.length,
      "itemListElement": city.coaches.map((coach, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Person",
          "name": coach.name,
          "jobTitle": coach.specialization || "ADHD Coach",
          "description": coach.description,
          "address": coach.address,
          "aggregateRating": coach.rating ? {
            "@type": "AggregateRating", 
            "ratingValue": coach.rating,
            "reviewCount": coach.reviewCount || 1
          } : undefined
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800 leading-tight">ADHD Coaching</span>
                <span className="text-sm text-gray-600 leading-tight">in de Buurt</span>
              </div>
            </Link>
            
            {/* Navigation Menu */}
            <nav className="flex items-center gap-4 md:gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Home
              </Link>
              <Link href="/coaches" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Coaches
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                FAQ
              </Link>
            </nav>

            <a
              href="https://adhdzelftest.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors shadow-md text-sm md:text-base"
            >
              ADHD Test
            </a>
          </div>
        </div>
      </header>

      {/* City Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ADHD Coach {city.name}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {city.tldr}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">{city.coaches.length}</div>
                <div className="text-blue-200 text-sm">ADHD Coaches</div>
              </div>
              <div className="bg-blue-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">{availableCoaches.length}</div>
                <div className="text-blue-200 text-sm">Beschikbaar</div>
              </div>
              <div className="bg-blue-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">{avgRating.toFixed(1)}★</div>
                <div className="text-blue-200 text-sm">Gem. Rating</div>
              </div>
              <div className="bg-blue-700 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">{city.population?.toLocaleString()}</div>
                <div className="text-blue-200 text-sm">Inwoners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <section className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">ℹ</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                TL;DR - {city.name}
              </h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              {city.name} biedt uitstekende ADHD ondersteuning met {city.coaches.length} geregistreerde specialisten en diverse behandelingsopties voor zowel kinderen als volwassenen.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Lokale ADHD Zorg */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Lokale ADHD Zorg</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{city.coaches.length} geregistreerde specialisten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Gemiddelde wachttijd: {city.coaches.length > 20 ? '2-4' : city.coaches.length > 10 ? '3-5' : '4-6'} weken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Kosten: €75-€125 per sessie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Online en fysieke consulten beschikbaar</span>
                  </li>
                </ul>
              </div>

              {/* ADHD Statistieken */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">ADHD Statistieken {city.name}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Prevalentie: 5.2% van de bevolking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Geschat {Math.round((city.population || 100000) * 0.052).toLocaleString()} mensen met ADHD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Populatie: {(city.population || 0).toLocaleString()} inwoners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Provincie: {city.province}, {city.country === 'NL' ? 'Nederland' : 'België'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coaches List */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                ADHD Coaches in {city.name}
              </h2>
              <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
                <Filter size={20} />
                Filters
              </button>
            </div>

            <div className="space-y-6">
              {city.coaches.map((coach) => (
                <div key={coach.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {coach.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {coach.specialization}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span>{coach.rating} ({coach.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{coach.address}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      coach.availabilityStatus === 'available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {coach.availabilityStatus === 'available' ? 'Beschikbaar' : 'Druk bezet'}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {coach.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {coach.isChildFriendly && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        Kindvriendelijk
                      </span>
                    )}
                    {coach.weekendAvailable && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Weekend beschikbaar
                      </span>
                    )}
                    {coach.onlineAvailable && (
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        Online coaching
                      </span>
                    )}
                    {coach.acceptsInsurance && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                        Zorgverzekering
                      </span>
                    )}
                  </div>

                  {/* Contact Options */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    {coach.phone && (
                      <a 
                        href={`tel:${coach.phone}`}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        <Phone size={16} />
                        Bellen
                      </a>
                    )}
                    {coach.email && (
                      <a 
                        href={`mailto:${coach.email}`}
                        className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        <Mail size={16} />
                        E-mail
                      </a>
                    )}
                    {coach.website && (
                      <a 
                        href={coach.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        <Globe size={16} />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {city.coaches.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Users size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nog geen coaches gevonden
                </h3>
                <p className="text-gray-600">
                  We zijn nog bezig met het toevoegen van ADHD coaches in {city.name}. 
                  Check binnenkort opnieuw of neem contact met ons op.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                ADHD Coaches op de kaart
              </h3>
              <GoogleMap
                coaches={city.coaches.map(coach => ({
                  id: coach.id,
                  name: coach.name,
                  latitude: coach.latitude,
                  longitude: coach.longitude,
                  rating: coach.rating,
                  address: coach.address,
                  specialization: coach.specialization
                }))}
                center={{
                  lat: parseFloat(city.latitude!),
                  lng: parseFloat(city.longitude!)
                }}
                height="300px"
              />
            </div>
            {/* ADHD Statistics */}
            {adhdStats && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  ADHD in {city.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prevalentie volwassenen:</span>
                    <span className="font-medium">{adhdStats.prevalenceAdults}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prevalentie kinderen:</span>
                    <span className="font-medium">{adhdStats.prevalenceChildren}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gem. wachttijd:</span>
                    <span className="font-medium">{adhdStats.waitingTimeAverageWeeks} weken</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Handige Links
              </h3>
              <div className="space-y-3">
                <Link 
                  href="/faq"
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Veelgestelde vragen over ADHD
                </Link>
                <Link 
                  href="/blog"
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  ADHD Blog en artikelen
                </Link>
                <Link 
                  href="/over-adhd"
                  className="block text-blue-600 hover:text-blue-800 text-sm"
                >
                  Alles over ADHD symptomen
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Ben je een ADHD coach?
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                Wil je ook vermeld worden in onze directory? 
                Neem contact met ons op om je profiel toe te voegen.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium w-full">
                Coach worden
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Organicolabs CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://shop.organicolabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            Op zoek naar natuurlijke supplementen die doen wat ze beloven? →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-blue-400" size={24} />
                <span className="text-xl font-bold">ADHD Coach in de Buurt</span>
              </div>
              <p className="text-gray-400">
                De grootste directory van ADHD coaches en therapeuten in Nederland en België.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Handige Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/over-adhd" className="hover:text-white">Over ADHD</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Andere Steden</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/stad/amsterdam" className="hover:text-white">Amsterdam</Link></li>
                <li><Link href="/stad/rotterdam" className="hover:text-white">Rotterdam</Link></li>
                <li><Link href="/stad/utrecht" className="hover:text-white">Utrecht</Link></li>
                <li><Link href="/stad/eindhoven" className="hover:text-white">Eindhoven</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ADHD Coach in de Buurt. Alle rechten voorbehouden.
              </p>
              <div className="text-center">
                <a
                  href="https://shop.organicolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm underline"
                >
                  Op zoek naar natuurlijke supplementen die doen wat ze beloven?
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}