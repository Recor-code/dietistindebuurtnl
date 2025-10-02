import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  Calendar, 
  Users, 
  Monitor,
  Home,
  CreditCard,
  ArrowLeft
} from 'lucide-react';

interface Params {
  slug: string;
}

// Generate static params for all specialists from places table
export async function generateStaticParams() {
  try {
    const { data: allPlaces, error } = await supabase
      .from('places')
      .select('slug')
      .not('slug', 'is', null);
    
    if (error) {
      console.error('Error generating static params for specialists:', error);
      return [];
    }

    return (allPlaces || []).map((place) => ({
      slug: place.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for specialists:', error);
    return [];
  }
}

// Fetch specialist data from places table
async function getSpecialist(slug: string) {
  try {
    // Get place data by slug
    const { data: place, error } = await supabase
      .from('places')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error || !place) {
      console.error('Error fetching specialist:', error);
      return null;
    }

    // Get city info
    const { data: city } = await supabase
      .from('cities')
      .select('name, slug, province')
      .ilike('name', place['CITY'])
      .maybeSingle();

    // Get reviews for this place
    const { data: reviews } = await supabase
      .from('reviews')
      .select('*')
      .eq('PLACE ID', place['PLACE ID'])
      .order('PUBLISHED_TIME', { ascending: false })
      .limit(10);

    // Transform place data to match expected format
    return {
      id: place['PLACE ID'],
      name: place['NAME'],
      slug: place.slug,
      email: place['EMAIL'] && place['EMAIL'] !== 'n/a' ? place['EMAIL'] : null,
      phone: place['PHONE'],
      website: place['WEBSITE'],
      specialization: place['CATEGORY'] || 'ADHD Specialist',
      description: place.description || `Gecertificeerde specialist met specialisatie in ADHD begeleiding. Professionele ondersteuning voor kinderen, adolescenten en volwassenen.`,
      address: place['ADDRESS'],
      rating: place['SCORE'] ? parseFloat(place['SCORE']) : null,
      reviewCount: place['RATINGS'] ? parseInt(place['RATINGS']) : 0,
      isChildFriendly: place.kindvriendelijk_filter === 'yes',
      weekendAvailable: place.weekend_beschikbaar_filter === 'yes',
      onlineAvailable: true,
      inPersonAvailable: true,
      acceptsInsurance: place.basisverzekering_filter === 'yes',
      availabilityStatus: 'available',
      openingHours: place['OPENING HOURS'],
      cityName: city?.name || place['CITY'],
      citySlug: city?.slug,
      province: city?.province,
      reviews: reviews || [],
      placeId: place['PLACE ID'],
    };
  } catch (error) {
    console.error('Error fetching specialist:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const specialist = await getSpecialist(resolvedParams.slug);
  
  if (!specialist) {
    return {
      title: 'Specialist niet gevonden',
      description: 'De opgevraagde ADHD specialist kon niet worden gevonden.',
    };
  }

  return {
    title: `${specialist.name} - ${specialist.specialization} in ${specialist.cityName}`,
    description: specialist.description?.substring(0, 155),
    keywords: `ADHD coach, ${specialist.name}, ${specialist.cityName}, ADHD specialist`,
  };
}

export default async function SpecialistPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const specialist = await getSpecialist(resolvedParams.slug);

  if (!specialist) {
    notFound();
  }

  const rating = specialist.rating ? parseFloat(specialist.rating.toString()) : 0;
  const reviewCount = specialist.reviewCount || 0;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li className="text-gray-400">/</li>
              {specialist.cityName && (
                <>
                  <li><Link href={`/stad/${specialist.citySlug}`} className="hover:text-blue-600">{specialist.cityName}</Link></li>
                  <li className="text-gray-400">/</li>
                </>
              )}
              <li className="text-gray-900">{specialist.name}</li>
            </ol>
          </nav>

          {/* Back Link */}
          {specialist.citySlug && (
            <Link 
              href={`/stad/${specialist.citySlug}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft size={16} />
              Terug naar {specialist.cityName}
            </Link>
          )}

          {/* Hero Section with Gradient */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-lg p-8 mb-8 relative">
            <div className="flex justify-between items-start">
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-2">{specialist.name}</h1>
                <p className="text-lg text-white/90 mb-4">{specialist.specialization}</p>
                
                {/* Rating */}
                {rating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < Math.floor(rating) ? 'text-yellow-300 fill-yellow-300' : 'text-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium">{rating.toFixed(1)} ({reviewCount} reviews)</span>
                  </div>
                )}
              </div>
              
              {/* Availability Badge */}
              <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Beschikbaar
              </span>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Over {specialist.name}</h2>
            <p className="text-gray-700 leading-relaxed">
              {specialist.description}
            </p>
          </div>

          {/* Services & Availability */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Services & Beschikbaarheid</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {specialist.isChildFriendly && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Kindvriendelijk</span>
                </div>
              )}
              
              {specialist.weekendAvailable ? (
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Weekend beschikbaar</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Alleen doordeweeks</span>
                </div>
              )}
              
              {specialist.onlineAvailable && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  <span>Online sessies</span>
                </div>
              )}
              
              {specialist.inPersonAvailable && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Home className="w-5 h-5 text-blue-600" />
                  <span>Persoonlijke sessies</span>
                </div>
              )}
              
              {specialist.acceptsInsurance && (
                <div className="flex items-center gap-3 text-gray-700">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Accepteert verzekering</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contactgegevens</h2>
            <div className="space-y-4">
              {specialist.address && (
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div>{specialist.address}</div>
                    {specialist.cityName && specialist.province && (
                      <div className="text-sm text-gray-600">{specialist.cityName}, {specialist.province}</div>
                    )}
                  </div>
                </div>
              )}
              
              {specialist.phone && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${specialist.phone}`} className="hover:text-blue-600">
                    {specialist.phone}
                  </a>
                </div>
              )}
              
              {specialist.email && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${specialist.email}`} className="hover:text-blue-600">
                    {specialist.email}
                  </a>
                </div>
              )}
              
              {specialist.website && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={specialist.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    {specialist.website}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Reviews</h2>
            
            {specialist.reviews && specialist.reviews.length > 0 ? (
              <div className="space-y-6">
                {specialist.reviews.map((review: any, index: number) => (
                  <div key={review['INTERNAL REVIEW ID'] || index} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{review['USER NAME']}</p>
                        {review['RATING'] && (
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < review['RATING'] ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{review['RELATIVE PUBLISHED TIME']}</span>
                    </div>
                    {review['TEXT'] && (
                      <p className="text-gray-700 mt-2">{review['TEXT']}</p>
                    )}
                    {review['OWNER REPLY'] && (
                      <div className="mt-4 pl-4 border-l-2 border-blue-200">
                        <p className="text-sm font-medium text-blue-600">Reactie van eigenaar:</p>
                        <p className="text-gray-600 text-sm mt-1">{review['OWNER REPLY']}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Clock className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 font-medium mb-2">Reviews komen binnenkort beschikbaar</p>
                <p className="text-gray-500 text-sm">
                  Wij werken hard aan een review systeem om je de beste ervaringen van andere cliënten te tonen.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
