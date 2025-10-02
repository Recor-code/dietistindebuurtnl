'use client';

import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { MapPin, Star, Phone, Mail, Globe, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import GoogleMap from '@/components/GoogleMap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatAssistant from '@/components/ChatAssistant';
import { useState, useEffect } from 'react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getCityWithPlaces(slug: string) {
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

    // Get places for this city - using CITY name column
    console.log(`🏙️ Fetching places for city: ${city.name} (ID: ${city.id})`);
    const { data: places, error: placesError } = await supabase
      .from('places')
      .select('*')
      .eq('CITY', city.name)
      .order('RESULT POSITION', { ascending: true }); // Default: relevance (lower = more relevant)

    if (placesError) {
      console.error('❌ Error fetching places:', placesError);
      return { ...city, places: [] };
    }

    console.log(`👥 Found ${places?.length || 0} places for ${city.name}`);

    // Transform data
    const transformedCity = {
      ...city,
      adhdStats: city.adhd_stats,
      createdAt: city.created_at ? new Date(city.created_at) : null,
      updatedAt: city.updated_at ? new Date(city.updated_at) : null
    };

    const transformedPlaces = (places || []).map(place => ({
      id: place['PLACE ID'],
      placeId: place['PLACE ID'],
      name: place['NAME'],
      slug: place.slug,
      email: place['EMAIL'] && place['EMAIL'] !== 'n/a' ? place['EMAIL'] : null,
      phone: place['PHONE'],
      website: place['WEBSITE'],
      url: place['URL'],
      specialization: place['CATEGORY'] || 'ADHD Specialist',
      description: place.description || `Professionele ADHD begeleiding in ${city.name}`,
      address: place['ADDRESS'],
      city: place['CITY'],
      latitude: place['LAT'] ? parseFloat(place['LAT']) : null,
      longitude: place['LNG'] ? parseFloat(place['LNG']) : null,
      rating: place['SCORE'] ? parseFloat(place['SCORE']) : null,
      reviewCount: place['RATINGS'] ? parseInt(place['RATINGS']) : 0,
      isChildFriendly: place.kindvriendelijk_filter === 'yes',
      weekendAvailable: place.weekend_beschikbaar_filter === 'yes',
      acceptsInsurance: place.basisverzekering_filter === 'yes',
      studentFriendly: place.studenten_filter === 'yes',
      openingHours: place['OPENING HOURS'],
      mainImageUrl: place['MAIN IMAGE URL'],
      resultPosition: place['RESULT POSITION'] || 999999,
    }));

    return { ...transformedCity, places: transformedPlaces };
  } catch (error) {
    console.error('Error fetching city:', error);
    return null;
  }
}

export default function CityPage({ params }: PageProps) {
  const [city, setCity] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    kindvriendelijk: false,
    weekend: false,
    hoogsteBeoordeling: false
  });

  useEffect(() => {
    async function fetchCityData() {
      const resolvedParams = await params;
      const { slug } = resolvedParams;
      const cityData = await getCityWithPlaces(slug);
      
      if (!cityData) {
        notFound();
        return;
      }
      
      setCity(cityData);
      setLoading(false);
    }
    
    fetchCityData();
  }, [params]);

  if (loading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>;
  }

  if (!city) {
    notFound();
  }

  const adhdStats = city.adhd_stats ? JSON.parse(city.adhd_stats) : null;
  
  // Apply filters to places
  let filteredPlaces = [...city.places];
  
  if (filters.kindvriendelijk) {
    filteredPlaces = filteredPlaces.filter(place => place.isChildFriendly);
  }
  if (filters.weekend) {
    filteredPlaces = filteredPlaces.filter(place => place.weekendAvailable);
  }
  if (filters.hoogsteBeoordeling) {
    // Sort by SCORE (higher to lower)
    filteredPlaces = filteredPlaces.sort((a, b) => {
      const ratingA = parseFloat(a.rating || '0');
      const ratingB = parseFloat(b.rating || '0');
      return ratingB - ratingA;
    });
  } else {
    // Default: sort by RESULT POSITION (lower to higher = more relevant)
    filteredPlaces = filteredPlaces.sort((a, b) => a.resultPosition - b.resultPosition);
  }

  const avgRating = city.places.length > 0 
    ? city.places.reduce((sum: number, place: any) => sum + parseFloat(place.rating || '0'), 0) / city.places.length // eslint-disable-line @typescript-eslint/no-explicit-any 
    : 0;

  const toggleFilter = (filterName: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

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
    "aggregateRating": city.places.length > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": city.places.reduce((sum: number, place: any) => sum + parseInt(place.reviewCount || '0'), 0), // eslint-disable-line @typescript-eslint/no-explicit-any
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": city.places.length,
      "itemListElement": city.places.map((place: any, index: number) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "LocalBusiness",
          "name": place.name,
          "description": place.description,
          "address": place.address,
          "aggregateRating": place.rating ? {
            "@type": "AggregateRating", 
            "ratingValue": place.rating,
            "reviewCount": place.reviewCount || 1
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
      
      <Header />

      {/* City Hero */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ADHD Coach {city.name}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Vind de beste ADHD coaches en gedragstherapeuten in {city.name}.<br />
              Vergelijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-4 text-white">
                <div className="text-2xl font-bold mb-1">{city.places.length}</div>
                <div className="text-emerald-100 text-sm">ADHD Specialisten</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-4 text-white">
                <div className="text-2xl font-bold mb-1">{city.places.filter((p: any) => p.weekendAvailable).length}</div>
                <div className="text-emerald-100 text-sm">Weekend beschikbaar</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-4 text-white">
                <div className="text-2xl font-bold mb-1">{avgRating.toFixed(1)}<span className="text-yellow-400">★</span></div>
                <div className="text-emerald-100 text-sm">Gem. Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* ADHD Info Section */}
        {adhdStats && (
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ADHD in {city.name}
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{adhdStats.summary || city.tldr}</p>
                {adhdStats.details && (
                  <div className="space-y-2 text-gray-700">
                    {adhdStats.details.map((detail: string, index: number) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Chat Assistant */}
        <section className="mb-8">
          <ChatAssistant city={city.name} />
        </section>

        {/* ADHD Coaches op de kaart */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="text-blue-600" />
              ADHD Coaches op de kaart
            </h2>
            <p className="text-gray-600 mb-6">
              Ontdek de locaties van alle ADHD coaches in {city.name}. Klik op een marker voor meer informatie.
            </p>
            
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <GoogleMap
                coaches={city.places.filter((p: any) => p.latitude && p.longitude)}
                center={{ lat: parseFloat(city.latitude || '0'), lng: parseFloat(city.longitude || '0') }}
                zoom={13}
                height="100%"
              />
            </div>
          </div>
        </section>

        {/* Places List */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ADHD Coaches in {city.name}
            </h2>
            
            {/* Visible Filters - No Dropdown */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-medium text-gray-700">Filters:</span>
              <button 
                onClick={() => toggleFilter('kindvriendelijk')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
                  filters.kindvriendelijk 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
              >
                <Users size={16} />
                Kindvriendelijk
              </button>
              <button 
                onClick={() => toggleFilter('weekend')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
                  filters.weekend 
                    ? 'bg-green-600 text-white border-green-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-400 hover:bg-green-50'
                }`}
              >
                <Clock size={16} />
                Weekend beschikbaar
              </button>
              <button 
                onClick={() => toggleFilter('hoogsteBeoordeling')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
                  filters.hoogsteBeoordeling 
                    ? 'bg-yellow-600 text-white border-yellow-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-400 hover:bg-yellow-50'
                }`}
              >
                <Star size={16} />
                Hoogste beoordeling
              </button>
            </div>

            <p className="text-gray-600">
              {filteredPlaces.length} {filteredPlaces.length === 1 ? 'specialist gevonden' : 'specialisten gevonden'}
              {!filters.hoogsteBeoordeling && ' (gesorteerd op relevantie)'}
              {filters.hoogsteBeoordeling && ' (gesorteerd op hoogste beoordeling)'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPlaces.map((place) => {
              const getPrimaryAction = () => {
                if (place.phone) return { type: 'phone', href: `tel:${place.phone}`, label: 'Bellen', icon: Phone };
                if (place.website) return { type: 'website', href: place.website, label: 'Website', icon: Globe };
                if (place.email) return { type: 'email', href: `mailto:${place.email}`, label: 'E-mail', icon: Mail };
                return null;
              };

              const primaryAction = getPrimaryAction();

              return (
              <div key={place.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6 relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-semibold">
                      {place.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {place.slug ? (
                          <Link href={`/specialist/${place.slug}`} className="hover:text-blue-600 transition-colors">
                            {place.name}
                          </Link>
                        ) : (
                          <span>{place.name}</span>
                        )}
                      </h3>
                    </div>
                    
                    {/* Rating */}
                    {place.rating && place.rating > 0 && (
                      <div className="flex items-center gap-1 mb-2">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{place.rating}</span>
                        <span className="text-xs text-gray-500">({place.reviewCount} reviews)</span>
                      </div>
                    )}
                    
                    <p className="text-blue-600 font-medium mb-2 text-sm">
                      {place.specialization}
                    </p>
                    
                    <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                      <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{place.address}</span>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      {place.phone && (
                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-blue-600" />
                          <a href={`tel:${place.phone}`} className="hover:text-blue-600">{place.phone}</a>
                        </div>
                      )}
                      {place.email && (
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-blue-600" />
                          <a href={`mailto:${place.email}`} className="hover:text-blue-600">{place.email}</a>
                        </div>
                      )}
                      {place.website && (
                        <div className="flex items-center gap-2">
                          <Globe size={14} className="text-blue-600" />
                          <a href={place.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 line-clamp-1">
                            Bezoek website
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {place.isChildFriendly && (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          Kindvriendelijk
                        </span>
                      )}
                      {place.weekendAvailable && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Weekend beschikbaar
                        </span>
                      )}
                      {place.acceptsInsurance && (
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                          Zorgverzekering
                        </span>
                      )}
                      {place.studentFriendly && (
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                          Studentvriendelijk
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                {primaryAction && (
                  <a
                    href={primaryAction.href}
                    target={primaryAction.type === 'website' ? '_blank' : undefined}
                    rel={primaryAction.type === 'website' ? 'noopener noreferrer' : undefined}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <primaryAction.icon size={18} />
                    {primaryAction.label}
                  </a>
                )}
              </div>
              );
            })}
          </div>

          {/* No Results Message */}
          {filteredPlaces.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600 text-lg mb-2">Geen specialisten gevonden met de geselecteerde filters.</p>
              <p className="text-gray-500 text-sm">Probeer de filters aan te passen om meer resultaten te zien.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
