import React from 'react';
import HeroSearchSection from '@/components/HeroSearchSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelaxBanner from '@/components/RelaxBanner';
import BlogPostsSection from '@/components/BlogPostsSection';
import ClientQuizLauncher from '@/components/ClientQuizLauncher';
import { Search, MapPin, Star, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Diëtist in de Buurt',
  url: 'https://dietistindebuurt.nl',
  logo: 'https://dietistindebuurt.nl/images/logo.webp',
  description: 'De grootste directory voor Diëtisten in Nederland en België. Vergelijk gecertificeerde diëtisten, bekijk reviews en vind de perfecte match voor voedingsadvies.',
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
  serviceType: 'Diëtist Directory',
  sameAs: [
    'https://dietistindebuurt.nl'
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
  name: 'Diëtist in de Buurt',
  url: 'https://dietistindebuurt.nl',
  description: 'De grootste directory voor Diëtisten in Nederland en België.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://dietistindebuurt.nl/stad/{search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function Home() {
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
      <section className="relative isolate py-12 sm:py-16 px-4 min-h-[55vh] flex items-center bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:z-0" style={{backgroundImage: "url('/adhd-bg3.webp')"}}>
        <div className="w-full mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-4">
            Vind de beste Diëtisten<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>bij jou in de buurt
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-md px-4">
            Vergelijk gecertificeerde diëtisten en voedingsdeskundigen in jouw stad.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Bekijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
          </p>

          {/* Quick Search */}
          <HeroSearchSection />

        </div>
      </section>

      {/* Client Quiz Launcher */}
      <ClientQuizLauncher />

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
                Alle diëtisten zijn geverifieerd en hebben bewezen expertise in voedingsadvies.
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
                Vind diëtisten bij jou in de buurt voor persoonlijke sessies of online consultaties.
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
              <p className="text-lg text-gray-600">Lokale voedingsinformatie en tips voor jouw regio</p>
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

      {/* Diëtist Statistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Diëtiek in Nederland & België
          </h3>
          <p className="text-lg text-gray-600 mb-16">
            Belangrijke statistieken en trends
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                3000+
              </div>
              <p className="text-gray-600 leading-relaxed">
                gecertificeerde diëtisten
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-500 mb-3">
                85%
              </div>
              <p className="text-gray-600 leading-relaxed">
                gezondere leefstijl na advies
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-3">
                5M+
              </div>
              <p className="text-gray-600 leading-relaxed">
                mensen zoeken voedingsadvies
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                90%
              </div>
              <p className="text-gray-600 leading-relaxed">
                verbetert gezondheid
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelaxBanner />
      <Footer />
    </div>
  );
}