import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClaimPracticeButton from '@/components/ClaimPracticeButton';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  Calendar, 
  Users, 
  Clock, 
  CreditCard,
  Monitor,
  Home,
  Heart
} from 'lucide-react';

interface Params {
  slug: string;
}

// Generate static params for all specialists
export async function generateStaticParams() {
  try {
    // Use coaches table which has slugs
    const { data: allCoaches, error } = await supabase
      .from('coaches')
      .select('slug');
    
    if (error) {
      console.error('Error generating static params for specialists:', error);
      return [];
    }

    return (allCoaches || []).map((coach) => ({
      slug: coach.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for specialists:', error);
    return [];
  }
}

// Fetch specialist data - use coaches table but enrich with places/reviews when available
async function getSpecialist(slug: string) {
  try {
    // Get coach data first
    const { data: coach, error } = await supabase
      .from('coaches')
      .select(`
        *, 
        cities!inner(name, slug, province)
      `)
      .eq('slug', slug)
      .maybeSingle();

    if (error || !coach) {
      console.error('Error fetching specialist:', error);
      return null;
    }

    // Try to find matching place by name and city
    let reviews = [];
    let placeData = null;
    
    if (coach.name) {
      // Try to find place by name
      const { data: places } = await supabase
        .from('places')
        .select('*')
        .ilike('NAME', `%${coach.name}%`)
        .limit(1);
      
      if (places && places.length > 0) {
        placeData = places[0];
        
        // Get reviews for this place
        const { data: placeReviews } = await supabase
          .from('reviews')
          .select('*')
          .eq('PLACE ID', placeData['PLACE ID'])
          .order('PUBLISHED_TIME', { ascending: false })
          .limit(10);
        
        reviews = placeReviews || [];
      }
    }

    // Transform and merge data
    return {
      id: coach.id,
      name: coach.name,
      slug: coach.slug,
      email: coach.email || placeData?.['EMAIL'],
      phone: coach.phone || placeData?.['PHONE'],
      website: coach.website || placeData?.['WEBSITE'],
      specialization: coach.specialization || placeData?.['CATEGORY'] || 'ADHD Specialist',
      description: coach.description,
      address: coach.address || placeData?.['ADDRESS'],
      rating: coach.rating || (placeData?.['SCORE'] ? parseFloat(placeData['SCORE']) : null),
      reviewCount: coach.review_count || (placeData?.['RATINGS'] ? parseInt(placeData['RATINGS']) : 0),
      isChildFriendly: coach.is_child_friendly,
      weekendAvailable: coach.weekend_available,
      onlineAvailable: coach.online_available,
      inPersonAvailable: coach.in_person_available,
      acceptsInsurance: coach.accepts_insurance,
      availabilityStatus: coach.availability_status,
      openingHours: placeData?.['OPENING HOURS'],
      mainImageUrl: placeData?.['MAIN IMAGE URL'],
      cityName: coach.cities?.name,
      citySlug: coach.cities?.slug,
      province: coach.cities?.province,
      reviews: reviews,
      placeId: placeData?.['PLACE ID'],
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
    title: `${specialist.name} - ADHD ${specialist.specialization} in ${specialist.cityName || 'Nederland'}`,
    description: `${specialist.description?.substring(0, 155)}...`,
    keywords: `ADHD coach, ${specialist.name}, ${specialist.cityName}, ADHD specialist, ${specialist.specialization}`,
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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li className="text-gray-400">/</li>
              {specialist.citySlug && (
                <>
                  <li><Link href={`/stad/${specialist.citySlug}`} className="hover:text-blue-600">{specialist.cityName}</Link></li>
                  <li className="text-gray-400">/</li>
                </>
              )}
              <li className="text-gray-900">{specialist.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{specialist.name}</h1>
                    <p className="text-lg text-blue-600">{specialist.specialization}</p>
                  </div>
                  <ClaimPracticeButton coachName={specialist.name} />
                </div>

                {/* Rating */}
                {rating > 0 && (
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 font-semibold">{rating.toFixed(1)}</span>
                    </div>
                    <span className="text-gray-600">({reviewCount} beoordelingen)</span>
                  </div>
                )}

                {/* Description */}
                <div className="prose max-w-none">
                  <p className="text-gray-700">{specialist.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Kenmerken</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${specialist.inPersonAvailable ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Home className={`w-5 h-5 ${specialist.inPersonAvailable ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <p className="font-medium">In-persoon sessies</p>
                      <p className="text-sm text-gray-600">{specialist.inPersonAvailable ? 'Beschikbaar' : 'Niet beschikbaar'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${specialist.onlineAvailable ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Monitor className={`w-5 h-5 ${specialist.onlineAvailable ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Online sessies</p>
                      <p className="text-sm text-gray-600">{specialist.onlineAvailable ? 'Beschikbaar' : 'Niet beschikbaar'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${specialist.weekendAvailable ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Calendar className={`w-5 h-5 ${specialist.weekendAvailable ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Weekend beschikbaarheid</p>
                      <p className="text-sm text-gray-600">{specialist.weekendAvailable ? 'Beschikbaar' : 'Niet beschikbaar'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${specialist.isChildFriendly ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <Heart className={`w-5 h-5 ${specialist.isChildFriendly ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Kindvriendelijk</p>
                      <p className="text-sm text-gray-600">{specialist.isChildFriendly ? 'Ja' : 'Alleen volwassenen'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${specialist.acceptsInsurance ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <CreditCard className={`w-5 h-5 ${specialist.acceptsInsurance ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Verzekering</p>
                      <p className="text-sm text-gray-600">{specialist.acceptsInsurance ? 'Geaccepteerd' : 'Niet geaccepteerd'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${specialist.availabilityStatus === 'available' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                      <Clock className={`w-5 h-5 ${specialist.availabilityStatus === 'available' ? 'text-green-600' : 'text-yellow-600'}`} />
                    </div>
                    <div>
                      <p className="font-medium">Beschikbaarheid</p>
                      <p className="text-sm text-gray-600">
                        {specialist.availabilityStatus === 'available' ? 'Accepteert nieuwe cliënten' : 
                         specialist.availabilityStatus === 'busy' ? 'Beperkt beschikbaar' : 
                         'Niet beschikbaar'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              {specialist.openingHours && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Openingstijden</h2>
                  <p className="text-gray-700 whitespace-pre-line">{specialist.openingHours}</p>
                </div>
              )}

              {/* Reviews */}
              {specialist.reviews && specialist.reviews.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recente beoordelingen</h2>
                  <div className="space-y-6">
                    {specialist.reviews.map((review: any, index: number) => (
                      <div key={review['INTERNAL REVIEW ID'] || index} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-medium">{review['USER NAME']}</p>
                            {review['RATING'] && (
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review['RATING'] ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
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
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
                <div className="space-y-4">
                  {specialist.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Adres</p>
                        <p className="text-sm text-gray-600">{specialist.address}</p>
                      </div>
                    </div>
                  )}
                  
                  {specialist.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Telefoon</p>
                        <a href={`tel:${specialist.phone}`} className="text-sm text-blue-600 hover:underline">
                          {specialist.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {specialist.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <a href={`mailto:${specialist.email}`} className="text-sm text-blue-600 hover:underline">
                          {specialist.email}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {specialist.website && (
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Website</p>
                        <a href={specialist.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                          Bezoek website
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${specialist.phone}`}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Bel nu
                  </a>
                  {specialist.email && (
                    <a
                      href={`mailto:${specialist.email}`}
                      className="block w-full bg-white border-2 border-blue-600 text-blue-600 text-center py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Stuur email
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}