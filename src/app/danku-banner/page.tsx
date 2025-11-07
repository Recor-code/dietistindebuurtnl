import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Zap, Mail, Calendar, TrendingUp, Image } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bedankt voor je Banner Aankoop! | Diëtisten in de Buurt',
  description: 'Bedankt voor je banner advertising aankoop. We nemen zo snel mogelijk contact met je op.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DankUBannerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Success Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="text-white" size={80} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🎉 Gefeliciteerd met je Banner Plaatsing!
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Je betaling is succesvol verwerkt
            </p>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Welkom bij de elite groep van diëtisten die massaal zichtbaar zijn en dagelijks nieuwe cliënten aantrekken via strategische banner advertising.
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
                      Je ontvangt direct een bevestigingsmail met alle details van je banner advertising aankoop. Check ook je spam folder als je deze niet ziet.
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
                        <span>Je gekozen banner plaatsing te bevestigen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Je praktijkinformatie en doelstellingen te bespreken</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>De banner specificaties en design richtlijnen door te nemen</span>
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
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                    <Image className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. Banner Design & Goedkeuring (binnen 3-5 dagen)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      We ontwerpen je banner of je kunt je eigen design aanleveren:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Onze designers maken een professioneel banner design (gratis inbegrepen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Of lever je eigen design aan volgens onze specificaties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Je krijgt een preview en kan wijzigingen aanvragen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Na goedkeuring gaan we live!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Activatie & Go Live! (binnen 7 dagen)
                    </h3>
                    <p className="text-gray-700">
                      Je banner wordt live gezet op je gekozen locatie(s). Vanaf dat moment is je praktijk zichtbaar voor duizenden bezoekers per maand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-sky-500">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 rounded-full p-3 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      5. Maandelijkse Rapportages 📊
                    </h3>
                    <p className="text-gray-700">
                      Je ontvangt elke maand een gedetailleerde rapportage met clicks, impressions, en conversies van je banner advertising campagne.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Specifications Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                🎨 Banner Specificaties
              </h3>
              <div className="space-y-4 text-purple-900">
                <div>
                  <p className="font-bold mb-2">Aanbevolen formaten:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Desktop: 728x90 pixels (leaderboard)</li>
                    <li>• Mobiel: 320x100 pixels (mobiele banner)</li>
                    <li>• Bestandstype: JPG, PNG, of GIF (max 200KB)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Design richtlijnen:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Duidelijke call-to-action (bijv. "Maak een Afspraak", "Bel Nu")</li>
                    <li>• Je praktijknaam en logo prominent zichtbaar</li>
                    <li>• Gebruik van professionele kleuren en lettertypen</li>
                    <li>• Telefoonnummer of website URL vermelden</li>
                  </ul>
                </div>
                <p className="text-sm italic mt-4">
                  Geen zorgen als je geen designer hebt - ons team maakt gratis een professioneel banner design voor je!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 px-4 bg-gray-50">
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
                  <strong>Betalingsbevestiging:</strong> Je hebt een betalingsbevestiging ontvangen van Scalepulse (onze betalingspartner).
                </p>
                <p>
                  <strong>Facturatie:</strong> Je factuur wordt binnen 2 werkdagen naar je e-mailadres gestuurd.
                </p>
                <p>
                  <strong>Banner Updates:</strong> Je kunt op elk moment je banner design laten updaten. Neem hiervoor contact met ons op.
                </p>
                <p>
                  <strong>Annulering:</strong> Je kunt op elk moment je abonnement annuleren. Neem hiervoor contact met ons op.
                </p>
                <p>
                  <strong>Tracking & Analytics:</strong> We gebruiken professionele tracking tools om clicks en impressions nauwkeurig te meten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Results Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                📈 Wat Kun Je Verwachten?
              </h3>
              <div className="space-y-3 text-green-900">
                <p>
                  <strong>Zichtbaarheid:</strong> Je banner wordt duizenden keren per maand getoond aan actieve zoekers naar diëtisten.
                </p>
                <p>
                  <strong>Clicks:</strong> Gemiddeld ontvangen onze adverteerders 50-200 clicks per maand, afhankelijk van de banner locatie.
                </p>
                <p>
                  <strong>Conversies:</strong> Met een goede landing page kun je verwachten dat 5-15% van de clicks converteert naar contactaanvragen.
                </p>
                <p>
                  <strong>ROI:</strong> Bij een gemiddelde klantwaarde van €1500-3000 betaalt je banner investering zichzelf vaak al terug met slechts 1-2 nieuwe cliënten per maand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klaar om te Starten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Je praktijk is nu op weg naar massale zichtbaarheid. Bereid je voor op een stroom van nieuwe cliënten!
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
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
