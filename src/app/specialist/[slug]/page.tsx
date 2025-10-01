import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import Link from 'next/link';
import Header from '@/components/Header';
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
      cityName: coach.cities ? (Array.isArray(coach.cities) ? coach.cities[0]?.name : (coach.cities as any)?.name) : null,
      citySlug: coach.cities ? (Array.isArray(coach.cities) ? coach.cities[0]?.slug : (coach.cities as any)?.slug) : null,
      province: coach.cities ? (Array.isArray(coach.cities) ? coach.cities[0]?.province : (coach.cities as any)?.province) : null,
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
      <Header />
      
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
          <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 p-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{coach.name}</h1>
                <p className="text-xl text-white/90 mb-4">{coach.specialization}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= rating ? 'text-yellow-300 fill-current' : 'text-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/90">
                    {rating > 0 ? `${rating.toFixed(1)}` : 'Nog geen reviews'} 
                    {reviewCount > 0 && ` (${reviewCount} reviews)`}
                  </span>
                </div>
              </div>

              {/* Availability status */}
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                coach.availabilityStatus === 'available' 
                  ? 'bg-white text-green-700'
                  : coach.availabilityStatus === 'busy'
                  ? 'bg-white text-yellow-700'
                  : 'bg-white text-red-700'
              }`}>
                {coach.availabilityStatus === 'available' && 'Beschikbaar'}
                {coach.availabilityStatus === 'busy' && 'Druk bezet'}
                {coach.availabilityStatus === 'not_accepting' && 'Niet beschikbaar'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
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

            {/* Contactgegevens */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contactgegevens</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Location */}
                {coach.address && (
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{coach.address}</p>
                      {coach.cityName && (
                        <p className="text-gray-500">
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
                    <span className="text-gray-700">
                      {coach.phone}
                    </span>
                  </div>
                )}

                {/* Email */}
                {coach.email && (
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      {coach.email}
                    </span>
                  </div>
                )}

                {/* Website */}
                {coach.website && (
                  <div className="flex items-center space-x-3 mb-0">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      {coach.website}
                    </span>
                  </div>
                )}
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

            {/* Claim Practice Section - After Reviews */}
            <div className="mt-8 -mx-8 -mb-8">
              <ClaimPracticeButton practiceName={coach.name} specialistSlug={coach.slug} />
            </div>
          </div>
        </div>
      </div>

      {/* Organicolabs CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://organicolabs.com/relax-plus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <img 
              src="/relax-banner-new.jpg" 
              alt="RELAX - Natuurlijke rust zonder loom gevoel" 
              className="w-auto mx-auto"
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-blue-400" size={24} />
                <div>
                  <span className="text-xl font-bold">ADHD Coach in de Buurt</span>
                  <div className="text-sm text-gray-500 mt-1">De grootste directory voor ADHD hulp</div>
                </div>
              </div>
              <p className="text-gray-400">
                Vind de beste ADHD coaches en therapeuten bij jou in de buurt.<br />
                Vergelijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Handige Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/gratis-adhd-test" className="hover:text-white">Gratis ADHD Test</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
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