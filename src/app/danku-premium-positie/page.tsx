import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Crown, Mail, Calendar, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bedankt voor je Aankoop! | Diëtisten in de Buurt',
  description: 'Bedankt voor je premium positie aankoop. We nemen zo snel mogelijk contact met je op.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DankUPremiumPositiePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Success Hero Section */}
        <section className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="text-white" size={80} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🎉 Gefeliciteerd met je Premium Positie!
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Je betaling is succesvol verwerkt
            </p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Welkom bij de elite groep van diëtisten die hun zichtbaarheid maximaliseren en dagelijks nieuwe cliënten aantrekken.
            </p>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              📋 Wat Gebeurt Er Nu?
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. Bevestiging per E-mail (binnen 5 minuten)
                    </h3>
                    <p className="text-gray-700">
                      Je ontvangt direct een bevestigingsmail met alle details van je premium positie aankoop. Check ook je spam folder als je deze niet ziet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      2. Onboarding Call (binnen 24 uur)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Ons team neemt binnen 24 uur contact met je op om:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Je gekozen stad te bevestigen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Je praktijkprofiel compleet te maken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Eventuele vragen te beantwoorden</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                    <Crown className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. Activatie (binnen 48 uur)
                    </h3>
                    <p className="text-gray-700">
                      Je premium positie wordt binnen 48 uur geactiveerd. Je profiel verschijnt bovenaan in jouw gekozen stad met een premium crown badge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Start met Groeien! 🚀
                    </h3>
                    <p className="text-gray-700">
                      Vanaf dat moment begin je direct nieuwe aanvragen te ontvangen. Je ontvangt maandelijks een performance rapportage met je statistieken.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                💡 Belangrijke Informatie
              </h3>
              <div className="space-y-3 text-blue-900">
                <p>
                  <strong>Contact:</strong> Als je vragen hebt, kun je ons bereiken via{' '}
                  <a href="mailto:info@dietistindebuurt.nl" className="text-blue-600 hover:text-blue-700 underline">
                    info@dietistindebuurt.nl
                  </a>
                </p>
                <p>
                  <strong>Betalingsbevestiging:</strong> Je hebt een betalingsbevestiging ontvangen van Stripe (onze betalingspartner).
                </p>
                <p>
                  <strong>Facturatie:</strong> Je factuur wordt binnen 2 werkdagen naar je e-mailadres gestuurd.
                </p>
                <p>
                  <strong>Annulering:</strong> Je kunt op elk moment je abonnement annuleren. Neem hiervoor contact met ons op.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klaar om te Starten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bereid je voor op een stroom van nieuwe cliënten. De beste investering die je voor je praktijk hebt gedaan.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Terug naar Homepage
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
