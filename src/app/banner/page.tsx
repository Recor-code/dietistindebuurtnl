import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, TrendingUp, Target, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Adverteer op ADHD Coach in de Buurt | Premium Bannerplekken',
  description: 'Bereik duizenden mensen die actief zoeken naar ADHD hulp. Exclusieve bannerplekken op de grootste ADHD coach directory van Nederland en België.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BannerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-500 to-sky-700 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Stop Met Geld Verspillen aan Advertenties Die Niet Werken
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              Bereik mensen die NU actief op zoek zijn naar ADHD hulp
            </p>
            <p className="text-xl mb-12 opacity-90">
              Geen loze beloftes. Geen onduidelijke metrics. Alleen echte klanten die klaar zijn om te bestellen.
            </p>
            <Link 
              href="#pricing"
              className="inline-block bg-white text-sky-700 px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl"
            >
              Bekijk Beschikbare Plekken
            </Link>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Het Probleem Met "Normale" Advertenties
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">❌ Google Ads</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• €3-8 per klik (zonder garantie)</li>
                  <li>• Concurrentie met 50+ andere adverteerders</li>
                  <li>• 90% van bezoekers klikken door</li>
                  <li>• Duur en onvoorspelbaar</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">❌ Social Media Ads</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mensen scrollen maar door</li>
                  <li>• Lage intent, hoge kosten</li>
                  <li>• Complexe targeting</li>
                  <li>• Eindeloos optimaliseren nodig</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ ADHD Coach in de Buurt Banners
              </h3>
              <p className="text-xl text-gray-700 mb-4">
                Eén vaste prijs. Nul gedoe. Alleen mensen die ACTIEF zoeken naar jouw diensten.
              </p>
              <p className="text-lg font-semibold text-green-700">
                Geen klikkosten. Geen verassingen. Gewoon resultaat.
              </p>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Waarom Dit De Beste Investering Is Die Je Dit Jaar Kunt Maken
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              (En waarom je concurrenten dit al doen)
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-sky-500">
                <Target className="w-12 h-12 text-sky-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Ultieme Targeting</h3>
                <p className="text-gray-700">
                  Onze bezoekers zijn niet "misschien geïnteresseerd". Ze typen letterlijk: "ADHD coach Amsterdam" en komen direct bij jou uit.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-sky-500">
                <Users className="w-12 h-12 text-sky-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Massaal Bereik</h3>
                <p className="text-gray-700">
                  Duizenden bezoekers per maand die actief op zoek zijn. Jouw banner verschijnt op ALLE 415+ stadspaginas én de homepage.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-sky-500">
                <TrendingUp className="w-12 h-12 text-sky-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Groeiend Platform</h3>
                <p className="text-gray-700">
                  Ons verkeer groeit elke maand met 15-20%. Je investering wordt automatisch waardevoller.
                </p>
              </div>
            </div>

            <div className="bg-sky-50 border-2 border-sky-300 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-sky-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Waarom Dit Eigenlijk Te Goedkoop Is</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Als je €499/maand betaalt en je krijgt 5 nieuwe klanten binnen... hoeveel is dat waard? 
                    Bij een gemiddelde ADHD coaching package van €1500-3000 praat je over €7500-15000 omzet.
                  </p>
                  <p className="text-lg font-semibold text-sky-700">
                    Dat is een 15-30x return. En je concurrent krijgt deze klanten NU als jij dit niet doet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Beschikbare Bannerplekken
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Beperkte plekken. First come, first served.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Premium Spot */}
              <div className="bg-white rounded-xl shadow-xl border-4 border-yellow-400 p-8 relative transform hover:scale-105 transition-transform">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    MEEST POPULAIR
                  </span>
                </div>
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center mb-2">Premium Positie</h3>
                <p className="text-center text-gray-600 mb-6">Eerste banner, hoogste zichtbaarheid</p>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-900">€499</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Bovenste bannerlocatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op alle 415+ stadspagina's</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Homepage plaatsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse statistieken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Doorklikken naar jouw website</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-yellow-400 text-gray-900 text-center py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
                >
                  Reserveer Nu
                </Link>
              </div>

              {/* Standard Spot 1 */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-gray-300 p-8 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-center mb-2">Standaard Positie</h3>
                <p className="text-center text-gray-600 mb-6">Tweede banner positie</p>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-900">€349</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Tweede bannerlocatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op alle stadspagina's</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Homepage plaatsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse statistieken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Doorklikken naar jouw website</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-sky-600 text-white text-center py-4 rounded-lg font-bold hover:bg-sky-700 transition-colors"
                >
                  Reserveer Nu
                </Link>
              </div>

              {/* Standard Spot 2 */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-gray-300 p-8 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-center mb-2">Basis Positie</h3>
                <p className="text-center text-gray-600 mb-6">Derde banner positie</p>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-900">€249</span>
                  <span className="text-gray-600">/maand</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Derde bannerlocatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op alle stadspagina's</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Homepage plaatsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse statistieken</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Doorklikken naar jouw website</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-sky-600 text-white text-center py-4 rounded-lg font-bold hover:bg-sky-700 transition-colors"
                >
                  Reserveer Nu
                </Link>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 text-center">
              <p className="text-xl font-bold text-red-900 mb-2">
                ⚠️ Slechts 3 plekken beschikbaar. Eerst komen, eerst malen.
              </p>
              <p className="text-gray-700">
                Zodra deze vol zijn, kom je op de wachtlijst. De volgende beschikbaarheid kan maanden duren.
              </p>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 px-4 bg-sky-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">De No-Brainer Garantie</h2>
            <p className="text-2xl mb-8 font-light">
              Als je binnen 30 dagen niet tevreden bent, krijg je je geld terug. Geen vragen gesteld.
            </p>
            <p className="text-xl opacity-90 mb-8">
              Wij nemen het risico. Jij krijgt de resultaten. Zo simpel is het.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-sky-700 px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl"
            >
              Start Vandaag Nog
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Veelgestelde Vragen
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Hoeveel bezoekers krijgt jullie website?</h3>
                <p className="text-gray-700">
                  We ontvangen duizenden unieke bezoekers per maand die actief zoeken naar ADHD hulp. En dit groeit maandelijks met 15-20%. Je banner wordt gezien op alle 415+ stadspagina's én de homepage.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Wat als ik mijn eigen banner niet heb?</h3>
                <p className="text-gray-700">
                  Geen probleem! We kunnen je helpen met het ontwerpen van een professionele banner die converteert. Dit is inbegrepen in de prijs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Kan ik opzeggen?</h3>
                <p className="text-gray-700">
                  Ja, je kunt maandelijks opzeggen. Geen verplichtingen voor de lange termijn. Maar we zijn er vrij zeker van dat je dit niet wilt doen na de eerste maand.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Krijg ik statistieken?</h3>
                <p className="text-gray-700">
                  Absoluut. Je ontvangt maandelijks een rapport met het aantal vertoningen en klikken op jouw banner. Volledige transparantie.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Waarom zijn er maar 3 plekken?</h3>
                <p className="text-gray-700">
                  We willen onze bezoekers niet overladen met advertenties. Meer banners = lagere conversie voor iedereen. Door het beperkt te houden, maximaliseren we de waarde voor onze adverteerders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Klaar om te stoppen met geld weggooien?
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Reserveer je bannerplek voordat je concurrent het doet.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sky-500 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:bg-sky-600 transition-all shadow-2xl"
            >
              Ja, Ik Wil Deze Plek
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Of heb je vragen? <Link href="/contact" className="underline">Neem contact met ons op</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
