import { supabase } from '../../../lib/supabase';
import { MapPin, Star, Phone, Mail, Globe, Heart } from 'lucide-react';
import Link from 'next/link';

async function getAllCoaches() {
  try {
    const { data, error } = await supabase
      .from('coaches')
      .select('*, cities(id, name, slug)')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching coaches:', error);
      return [];
    }

    // Transform data shape to match UI expectations
    const transformedData = (data || []).map(coach => ({
      ...coach,
      cityId: coach.city_id,
      reviewCount: coach.review_count,
      isChildFriendly: coach.is_child_friendly,
      weekendAvailable: coach.weekend_available,
      onlineAvailable: coach.online_available,
      inPersonAvailable: coach.in_person_available,
      acceptsInsurance: coach.accepts_insurance,
      availabilityStatus: coach.availability_status,
      city: coach.cities
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching coaches:', error);
    return [];
  }
}

export const metadata = {
  title: 'Alle ADHD Coaches - Vind de perfecte coach | ADHD Coach in de Buurt',
  description: 'Bekijk alle ADHD coaches en gedragstherapeuten in Nederland en België. Vergelijk specialisaties, reviews en beschikbaarheid.',
};

export default async function CoachesPage() {
  const coaches = await getAllCoaches();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">ADHD Coach in de Buurt</h1>
            </Link>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/coaches" className="text-blue-600 font-medium">
                Coaches
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                FAQ
              </Link>
            </nav>

            <a
              href="https://adhdzelftest.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
            >
              Doe de ADHD Test
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Alle ADHD Coaches
          </h1>
          <p className="text-xl text-blue-100">
            Ontdek gecertificeerde ADHD coaches en gedragstherapeuten in heel Nederland en België.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {coaches.length} coaches beschikbaar
            </h2>
            <p className="text-gray-600">
              Vergelijk specialisaties, reviews en beschikbaarheid om de perfecte match te vinden.
            </p>
          </div>

          {coaches.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 mb-4">
                <Heart size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Geen coaches gevonden</h3>
                <p>Er zijn momenteel geen coaches beschikbaar. Probeer het later opnieuw.</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coaches.map((coach) => (
                <div key={coach.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{coach.name}</h3>
                        {coach.city && (
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin size={16} className="mr-1" />
                            <Link 
                              href={`/stad/${coach.city.slug}`}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {coach.city.name}
                            </Link>
                          </div>
                        )}
                      </div>
                      {coach.rating && (
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="font-semibold">{coach.rating}</span>
                          {coach.reviewCount && (
                            <span className="text-gray-500 text-sm">({coach.reviewCount})</span>
                          )}
                        </div>
                      )}
                    </div>

                    {coach.specialization && (
                      <p className="text-blue-600 font-medium mb-3">{coach.specialization}</p>
                    )}

                    {coach.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{coach.description}</p>
                    )}

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {coach.isChildFriendly && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          Kindvriendelijk
                        </span>
                      )}
                      {coach.onlineAvailable && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          Online
                        </span>
                      )}
                      {coach.weekendAvailable && (
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                          Weekend
                        </span>
                      )}
                      {coach.acceptsInsurance && (
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          Verzekering
                        </span>
                      )}
                    </div>

                    {/* Availability Status */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        coach.availabilityStatus === 'available' 
                          ? 'bg-green-100 text-green-800' 
                          : coach.availabilityStatus === 'limited'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {coach.availabilityStatus === 'available' && 'Beschikbaar'}
                        {coach.availabilityStatus === 'limited' && 'Beperkt beschikbaar'}
                        {coach.availabilityStatus === 'unavailable' && 'Niet beschikbaar'}
                      </span>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t pt-4 space-y-2">
                      {coach.phone && (
                        <div className="flex items-center text-gray-600">
                          <Phone size={14} className="mr-2" />
                          <span className="text-sm">{coach.phone}</span>
                        </div>
                      )}
                      {coach.email && (
                        <div className="flex items-center text-gray-600">
                          <Mail size={14} className="mr-2" />
                          <span className="text-sm">{coach.email}</span>
                        </div>
                      )}
                      {coach.website && (
                        <div className="flex items-center">
                          <Globe size={14} className="mr-2 text-gray-600" />
                          <a 
                            href={coach.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            Website bezoeken
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
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
                <li><Link href="/coaches" className="hover:text-white">Alle Coaches</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Populaire Steden</h5>
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