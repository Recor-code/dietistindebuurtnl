import React from 'react';
import HeroSearchSection from '@/components/HeroSearchSection';
import Header from '@/components/Header';
import BlogPostsSection from '@/components/BlogPostsSection';
import MatchingQuiz from '@/components/MatchingQuiz';
import { Search, MapPin, Star, Users, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ADHD Coach in de Buurt',
  url: 'https://adhdcoachindebuurt.nl',
  logo: 'https://adhdcoachindebuurt.nl/logo.png',
  description: 'De grootste directory voor ADHD coaches in Nederland en België. Vergelijk gecertificeerde coaches, bekijk reviews en vind de perfecte match voor ADHD ondersteuning.',
  areaServed: [
    {
      '@type': 'Country',
      name: 'Nederland'
    },
    {
      '@type': 'Country', 
      name: 'België'
    }
  ],
  serviceType: 'ADHD Coaching Directory',
  sameAs: [
    'https://adhdcoachindebuurt.nl'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['Dutch', 'Nederlands']
  }
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ADHD Coach in de Buurt',
  url: 'https://adhdcoachindebuurt.nl',
  description: 'De grootste directory voor ADHD coaches in Nederland en België.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://adhdcoachindebuurt.nl/stad/{search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative isolate py-16 px-4 h-[55vh] flex items-center bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:z-0" style={{backgroundImage: "url('/adhd-bg3.webp')"}}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Vind de beste ADHD coaches<br />
            bij jou in de buurt
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Vergelijk gecertificeerde ADHD coaches en gedragstherapeuten in jouw stad.<br />
            Bekijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
          </p>

          {/* Quick Search */}
          <HeroSearchSection />

        </div>
      </section>

      {/* Matching Quiz Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Vind de perfecte ADHD coach voor jou
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Beantwoord 6 snelle vragen en ontvang gepersonaliseerde aanbevelingen
          </p>
          <button
            onClick={() => setIsQuizOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Doe Onze Matching Quiz
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Duurt slechts 2 minuten • Geheel gratis
          </p>
        </div>
      </section>

      {/* Matching Quiz Modal */}
      <MatchingQuiz 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Waarom kiezen voor ons platform?
            </h3>
            <p className="text-lg text-gray-500">
              Al het onderzoek is al voor je gedaan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Alleen gecertificeerde professionals</h4>
              <p className="text-gray-600 leading-relaxed">
                Alle coaches en therapeuten zijn geverifieerd en hebben bewezen expertise in ADHD behandeling.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-6 h-6 text-blue-400 fill-current" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Betrouwbare reviews</h4>
              <p className="text-gray-600 leading-relaxed">
                Lees eerlijke ervaringen van andere cliënten om de beste keuze te maken.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Lokale specialisten</h4>
              <p className="text-gray-600 leading-relaxed">
                Vind coaches bij jou in de buurt voor persoonlijke sessies of online consultaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Laatste Blog Artikelen</h3>
              <p className="text-lg text-gray-600">Lokale ADHD informatie en tips voor jouw regio</p>
            </div>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Alle artikelen →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BlogPostsSection />
          </div>
        </div>
      </section>

      {/* ADHD Statistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ADHD in Nederland & België
          </h3>
          <p className="text-lg text-gray-600 mb-16">
            Belangrijke statistieken en trends
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                5-7%
              </div>
              <p className="text-gray-600 leading-relaxed">
                van kinderen heeft ADHD
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-500 mb-3">
                2.5%
              </div>
              <p className="text-gray-600 leading-relaxed">
                van volwassenen heeft ADHD
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
                1.2M+
              </div>
              <p className="text-gray-600 leading-relaxed">
                mensen met ADHD in NL
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                68%
              </div>
              <p className="text-gray-600 leading-relaxed">
                verbetert met coaching
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid md:grid-cols-3 gap-8 mb-8">
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