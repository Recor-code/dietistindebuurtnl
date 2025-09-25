import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact - ADHD Coach in de Buurt',
  description: 'Neem contact met ons op voor vragen over ADHD coaches, coaching of onze platform. We helpen je graag verder.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white py-16 px-4">
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
              
              <ContactForm />
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
                Selecteer &quot;Coach toevoegen aan platform&quot; als onderwerp
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
                <div>
                  <span className="text-xl font-bold">ADHD Coach in de Buurt</span>
                  <div className="text-sm text-gray-500 mt-1">De grootste directory voor ADHD hulp</div>
                </div>
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