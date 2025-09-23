import React from 'react';
import ChatAssistant from '@/components/ChatAssistant';
import HeroSearchSection from '@/components/HeroSearchSection';
import { Search, MapPin, Star, Users, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800 leading-tight">ADHD Coaching</span>
                <span className="text-sm text-gray-600 leading-tight">in de Buurt</span>
              </div>
            </Link>
            
            {/* Navigation Menu */}
            <nav className="flex items-center gap-4 md:gap-8">
              <Link href="/" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
                Home
              </Link>
              <Link href="/coaches" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
                Coaches
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
                FAQ
              </Link>
            </nav>

            <a
              href="https://adhdzelftest.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400 hover:bg-sky-500 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors shadow-md text-sm md:text-base"
            >
              Gratis ADHD Test
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative isolate py-16 px-4 h-[55vh] flex items-center bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:z-0" style={{backgroundImage: "url('/adhd-bg3.webp')"}}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Vind de beste ADHD coaches<br />
            bij jou in de buurt
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Vergelijk gecertificeerde ADHD coaches en gedragstherapeuten in jouw stad. Bekijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
          </p>

          {/* Quick Search */}
          <HeroSearchSection />

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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Populaire Steden</h3>
            <p className="text-lg text-gray-500">Vind ADHD coaches in de grootste steden van Nederland en België</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Netherlands Cities */}
            <Link href="/stad/amsterdam" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-sky-500">Amsterdam</h4>
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">NL</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">39 coaches beschikbaar</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                Noord-Holland
              </div>
            </Link>

            <Link href="/stad/rotterdam" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-sky-500">Rotterdam</h4>
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">NL</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">51 coaches beschikbaar</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                Zuid-Holland
              </div>
            </Link>

            <Link href="/stad/den-haag" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-sky-500">Den Haag</h4>
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">NL</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">108 coaches beschikbaar</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                Zuid-Holland
              </div>
            </Link>

            <Link href="/stad/utrecht" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-sky-500">Utrecht</h4>
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">NL</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">85 coaches beschikbaar</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                Utrecht
              </div>
            </Link>

            {/* Belgium Cities */}
            <Link href="/stad/brussel" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-sky-500">Brussel</h4>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">BE</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">26 coaches beschikbaar</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                Brussel-Hoofdstad
              </div>
            </Link>

            <Link href="/stad/antwerpen" className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-sky-500">Antwerpen</h4>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">BE</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">32 coaches beschikbaar</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                Vlaanderen
              </div>
            </Link>
          </div>

          {/* View All Cities Link */}
          <div className="text-right">
            <Link href="/steden" className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold transition-colors">
              <span>Alle steden</span>
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-500">Bekijk alle 150 steden</span>
            </Link>
          </div>
        </div>
      </section>

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
            {/* Article 1 - Amsterdam */}
            <Link href="/blog/adhd-diagnose-amsterdam-2024" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-3 font-medium">Amsterdam</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  ADHD diagnose in Amsterdam: Wat je moet weten in 2024
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Een complete gids voor het krijgen van een ADHD diagnose in Amsterdam, inclusief wachttijden, kosten en beste klinieken...
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>5 min leestijd</span>
                </div>
              </div>
            </Link>

            {/* Article 2 - Utrecht */}
            <Link href="/blog/kindvriendelijke-adhd-coaches-utrecht" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V14a1.5 1.5 0 01-1.5 1.5H9m8-8.5a1.5 1.5 0 00-1.5-1.5h-1m1.5 1.5V9a1.5 1.5 0 01-1.5 1.5M15 10.5a1.5 1.5 0 00-1.5-1.5H12a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-600 mb-3 font-medium">Utrecht</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Kindvriendelijke ADHD coaches in Utrecht
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Ontdek de beste ADHD coaches voor kinderen in Utrecht. Van speltherapie tot gedragsinterventies...
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>7 min leestijd</span>
                </div>
              </div>
            </Link>

            {/* Article 3 - België */}
            <Link href="/blog/online-adhd-coaching-belgie-voordelen" className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 mb-3 font-medium">België</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Online ADHD coaching: Voor- en nadelen
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Alles wat je moet weten over online ADHD coaching in België. Effectiviteit, kosten en hoe je de juiste coach kiest...
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>6 min leestijd</span>
                </div>
              </div>
            </Link>
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