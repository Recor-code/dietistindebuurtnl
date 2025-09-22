import ChatAssistant from '@/components/ChatAssistant';
import { Search, MapPin, Star, Users, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header with CTA */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">ADHD Coach in de Buurt</h1>
          </div>
          <a
            href="https://adhdzelftest.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            Doe de ADHD Test
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative isolate py-16 px-4 min-h-screen flex items-center bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-0" style={{backgroundImage: "url('/hero-adhd-background.jpg')"}}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Vind de perfecte ADHD coach bij jou in de buurt
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Vergelijk gecertificeerde ADHD coaches en gedragstherapeuten in jouw stad. Bekijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
          </p>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Zoek in jouw stad</h3>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Typ je stad of postcode..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  <Search size={20} />
                  Zoeken
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Steden</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">ADHD Coaches</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.5★</div>
              <div className="text-gray-600">Gem. Rating</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.000+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Praat met onze AI ADHD Assistente
            </h3>
            <p className="text-lg text-gray-600">
              Krijg direct hulp en advies over ADHD. Onze AI assistente helpt je met vragen 
              en geeft een persoonlijke analyse van je situatie.
            </p>
          </div>
          <ChatAssistant />
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Populaire steden
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht',
              'Eindhoven', 'Groningen', 'Tilburg', 'Almere',
              'Breda', 'Nijmegen', 'Enschede', 'Haarlem',
              'Brussel', 'Antwerpen', 'Gent', 'Charleroi'
            ].map((city) => (
              <Link
                key={city}
                href={`/stad/${city.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{city}</span>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span>4.5</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  12 coaches beschikbaar
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Waarom kiezen voor ADHD Coach in de Buurt?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <MapPin className="text-blue-600 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-3">Lokaal & Bereikbaar</h4>
              <p className="text-gray-600">
                Vind ADHD coaches en therapeuten in jouw directe omgeving. 
                Geen lange reizen, wel persoonlijke ondersteuning.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Star className="text-blue-600 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-3">Betrouwbare Reviews</h4>
              <p className="text-gray-600">
                Lees echte ervaringen van anderen en maak een weloverwogen keuze 
                gebaseerd op reviews en ratings.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="text-blue-600 mb-4" size={32} />
              <h4 className="text-xl font-semibold mb-3">Direct Contact</h4>
              <p className="text-gray-600">
                Bekijk beschikbaarheid, specialisaties en neem direct contact op 
                met de coach die bij jou past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/blog"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-800">ADHD Blog</h4>
              <p className="text-gray-600">
                Lees de laatste artikelen over ADHD, tips en lokale informatie per stad.
              </p>
            </Link>
            <Link
              href="/faq"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Veelgestelde Vragen</h4>
              <p className="text-gray-600">
                Vind antwoorden op de meest gestelde vragen over ADHD en coaching.
              </p>
            </Link>
            <Link
              href="/over-adhd"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-800">Over ADHD</h4>
              <p className="text-gray-600">
                Uitgebreide informatie over ADHD symptomen, behandeling en ondersteuning.
              </p>
            </Link>
          </div>
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
                <li><Link href="/over-adhd" className="hover:text-white">Over ADHD</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
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