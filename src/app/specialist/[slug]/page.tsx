import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import Link from 'next/link';
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
  Home
} from 'lucide-react';

interface Params {
  slug: string;
}

// Generate static params for all coaches
export async function generateStaticParams() {
  try {
    const { data: allCoaches, error } = await supabase
      .from('coaches')
      .select('slug');
    
    if (error) {
      console.error('Error generating static params for coaches:', error);
      return [];
    }

    return (allCoaches || []).map((coach) => ({
      slug: coach.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for coaches:', error);
    return [];
  }
}

// Fetch coach data
async function getCoach(slug: string) {
  try {
    const { data: coach, error } = await supabase
      .from('coaches')
      .select(`
        id, name, slug, email, phone, website, specialization, description, address, 
        rating, review_count, is_child_friendly, weekend_available, online_available,
        in_person_available, accepts_insurance, availability_status,
        cities!inner(name, slug, province)
      `)
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error('Error fetching coach:', error);
      return null;
    }

    if (!coach) return null;

    // Transform data to match expected format
    return {
      id: coach.id,
      name: coach.name,
      slug: coach.slug,
      email: coach.email,
      phone: coach.phone,
      website: coach.website,
      specialization: coach.specialization,
      description: coach.description,
      address: coach.address,
      rating: coach.rating,
      reviewCount: coach.review_count,
      isChildFriendly: coach.is_child_friendly,
      weekendAvailable: coach.weekend_available,
      onlineAvailable: coach.online_available,
      inPersonAvailable: coach.in_person_available,
      acceptsInsurance: coach.accepts_insurance,
      availabilityStatus: coach.availability_status,
      cityName: coach.cities?.name,
      citySlug: coach.cities?.slug,
      province: coach.cities?.province,
    };
  } catch (error) {
    console.error('Error fetching coach:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const coach = await getCoach(resolvedParams.slug);
  
  if (!coach) {
    return {
      title: 'Specialist niet gevonden',
      description: 'De opgevraagde ADHD specialist kon niet worden gevonden.',
    };
  }

  return {
    title: `${coach.name} - ADHD ${coach.specialization} in ${coach.cityName || 'Nederland'}`,
    description: `${coach.description?.substring(0, 155)}...`,
    keywords: `ADHD coach, ${coach.name}, ${coach.cityName}, ADHD specialist, ${coach.specialization}`,
  };
}

export default async function SpecialistPage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const coach = await getCoach(resolvedParams.slug);

  if (!coach) {
    notFound();
  }

  const rating = coach.rating ? parseFloat(coach.rating.toString()) : 0;
  const reviewCount = coach.reviewCount || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            {coach.citySlug && (
              <>
                <Link href={`/stad/${coach.citySlug}`} className="hover:text-blue-600">
                  {coach.cityName}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900">{coach.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{coach.name}</h1>
                <p className="text-xl text-blue-100 mb-4">{coach.specialization}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-blue-100">
                    {rating > 0 ? `${rating.toFixed(1)}` : 'Nog geen reviews'} 
                    {reviewCount > 0 && ` (${reviewCount} reviews)`}
                  </span>
                </div>
              </div>

              {/* Availability status */}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                coach.availabilityStatus === 'available' 
                  ? 'bg-green-100 text-green-800'
                  : coach.availabilityStatus === 'busy'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {coach.availabilityStatus === 'available' && 'Beschikbaar'}
                {coach.availabilityStatus === 'busy' && 'Druk bezet'}
                {coach.availabilityStatus === 'not_accepting' && 'Niet beschikbaar'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Over {coach.name}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {coach.description || 'Geen beschrijving beschikbaar.'}
                  </p>
                </section>

                {/* Services & Availability */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services & Beschikbaarheid</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className={coach.isChildFriendly ? 'text-green-700' : 'text-gray-500'}>
                        {coach.isChildFriendly ? 'Kindvriendelijk' : 'Alleen volwassenen'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className={coach.weekendAvailable ? 'text-green-700' : 'text-gray-500'}>
                        {coach.weekendAvailable ? 'Weekend beschikbaar' : 'Alleen doordeweeks'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-5 h-5 text-blue-600" />
                      <span className={coach.onlineAvailable ? 'text-green-700' : 'text-gray-500'}>
                        {coach.onlineAvailable ? 'Online sessies' : 'Geen online sessies'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home className="w-5 h-5 text-blue-600" />
                      <span className={coach.inPersonAvailable ? 'text-green-700' : 'text-gray-500'}>
                        {coach.inPersonAvailable ? 'Persoonlijke sessies' : 'Geen persoonlijke sessies'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <span className={coach.acceptsInsurance ? 'text-green-700' : 'text-gray-500'}>
                        {coach.acceptsInsurance ? 'Accepteert verzekering' : 'Geen verzekering'}
                      </span>
                    </div>
                  </div>
                </section>

                {/* Reviews placeholder */}
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reviews</h2>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">Reviews komen binnenkort beschikbaar</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Wij werken hard aan een review systeem om je de beste ervaringen van andere cliënten te tonen.
                    </p>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contactgegevens</h3>
                  
                  {/* Location */}
                  {coach.address && (
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">{coach.address}</p>
                        {coach.cityName && (
                          <p className="text-sm text-gray-500">
                            {coach.cityName}{coach.province && `, ${coach.province}`}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Phone */}
                  {coach.phone && (
                    <div className="flex items-center space-x-3 mb-4">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {coach.phone}
                      </span>
                    </div>
                  )}

                  {/* Email */}
                  {coach.email && (
                    <div className="flex items-center space-x-3 mb-4">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {coach.email}
                      </span>
                    </div>
                  )}

                  {/* Website */}
                  {coach.website && (
                    <div className="flex items-center space-x-3 mb-4">
                      <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {coach.website}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}