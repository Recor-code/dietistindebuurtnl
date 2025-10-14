import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact - Dietist in de Buurt',
  description: 'Neem contact met ons op voor vragen over Dietisten, coaching of onze platform. We helpen je graag verder.',
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
            Heb je vragen over voedingsadvies of onze platform? We helpen je graag verder.
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
                    <a href="mailto:info@dietistindebuurt.nl" className="text-blue-600 hover:underline">
                      info@dietistindebuurt.nl
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">Ben je Dietist?</h3>
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

      <Footer />
    </div>
  );
}