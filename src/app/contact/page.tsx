import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact - ADHD Coach in de Buurt',
  description: 'Neem contact met ons op voor vragen over ADHD coaches, coaching of onze platform. We helpen je graag verder.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800 leading-tight">ADHD Coaching</span>
                <span className="text-sm text-gray-600 leading-tight">in de Buurt</span>
              </div>
            </Link>
            
            {/* Navigation Menu */}
            <nav className="flex items-center gap-4 md:gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Home
              </Link>
              <Link href="/coaches" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Coaches
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                FAQ
              </Link>
              <Link href="/contact" className="text-blue-600 font-medium text-sm md:text-base">
                Contact
              </Link>
            </nav>

            <a
              href="https://adhdzelftest.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors shadow-md text-sm md:text-base"
            >
              ADHD Test
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl text-blue-100">
            Heb je vragen over ADHD coaching of onze platform? We helpen je graag verder.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Stuur ons een bericht</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Je volledige naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="je@email.nl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Onderwerp
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="coach-listing">Coach toevoegen aan platform</option>
                    <option value="general-question">Algemene vraag</option>
                    <option value="technical-issue">Technisch probleem</option>
                    <option value="partnership">Samenwerking</option>
                    <option value="other">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Vertel ons waar we je mee kunnen helpen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send size={20} />
                  Bericht versturen
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contactgegevens</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-700">E-mail</p>
                    <a href="mailto:info@adhdcoachindebuurt.nl" className="text-blue-600 hover:underline">
                      info@adhdcoachindebuurt.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-700">Reactietijd</p>
                    <p className="text-gray-600">Binnen 24 uur op werkdagen</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-700">Bereik</p>
                    <p className="text-gray-600">Nederland & België</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Veelgestelde vragen</h3>
              <p className="text-gray-600 mb-4">
                Misschien staat je vraag al beantwoord in onze uitgebreide FAQ sectie.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Bekijk FAQ →
              </Link>
            </div>

            {/* Coach Listing Card */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Ben je ADHD coach?</h3>
              <p className="text-gray-600 mb-4">
                Wil je jezelf toevoegen aan ons platform? Neem contact met ons op via het formulier.
              </p>
              <div className="text-sm text-gray-500">
                Selecteer "Coach toevoegen aan platform" als onderwerp
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-bold">ADHD Coach in de Buurt</span>
              </div>
              <p className="text-gray-400">
                Vind de beste ADHD coaches en therapeuten bij jou in de buurt. Vergelijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
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