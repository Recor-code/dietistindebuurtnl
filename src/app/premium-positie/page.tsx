import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Crown, TrendingUp, Users, Target, Zap, Award, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Premium Posities | Word de #1 Diëtiek Coach in Jouw Stad',
  description: 'Stop met onzichtbaar zijn. Domineer de top 3 posities in jouw stad en trek dagelijks nieuwe cliënten aan. Beperkte plekken beschikbaar.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PremiumPositiePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white scroll-smooth">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="text-yellow-200" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Jouw Concurrent Steelt Jouw Cliënten
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">
              ...En jij kijkt toe terwijl ze boven jou staan in elke stad
            </p>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Elk moment dat je niet op positie 1, 2 of 3 staat, verlies je duizenden euro's aan potentiële cliënten. Letterlijk. Elke. Dag.
            </p>
            <Link 
              href="#pricing"
              className="inline-block bg-white text-amber-600 px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl"
            >
              Claim Mijn Premium Positie
            </Link>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Het Harde Feit Dat Niemand Je Vertelt
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-red-900">
                92% van de mensen kijkt NOOIT verder dan positie 3
              </h3>
              <p className="text-lg text-gray-800 mb-4">
                Je hebt een geweldige praktijk. Jarenlange ervaring. Bewezen resultaten. Maar als je niet in de top 3 staat...
              </p>
              <p className="text-xl font-bold text-red-800">
                Ben je letterlijk onzichtbaar. En onzichtbaar = geen cliënten = geen omzet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">❌ Zonder Premium</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Je zit op pagina 2 (= niemand ziet je)</li>
                  <li>• Mensen bellen je concurrent die WEL bovenaan staat</li>
                  <li>• Je mist dagelijks 5-10 potentiële cliënten</li>
                  <li>• Elke maand verlies je €3000-8000 omzet</li>
                  <li>• Je advertentiebudget wordt verspild aan cold leads</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-lg shadow-lg border-2 border-amber-300">
                <h3 className="text-2xl font-bold mb-4 text-amber-900">✅ Met Premium Positie</h3>
                <ul className="space-y-3 text-gray-800 font-medium">
                  <li>• Je staat BOVENAAN (iedereen ziet je eerst)</li>
                  <li>• Cliënten bellen JOU, niet je concurrent</li>
                  <li>• 10-20 nieuwe aanvragen per maand</li>
                  <li>• €8000-15000 extra omzet per maand</li>
                  <li>• Je concurrent kijkt jaloers naar jouw positie</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-100 border-2 border-amber-400 rounded-lg p-8 text-center">
              <p className="text-2xl font-bold text-amber-900 mb-3">
                Simpele Rekensom
              </p>
              <p className="text-lg text-gray-800 mb-2">
                Premium Positie = €1000/maand
              </p>
              <p className="text-lg text-gray-800 mb-2">
                Extra omzet per maand = €8000-15000
              </p>
              <p className="text-3xl font-bold text-green-700 mt-4">
                ROI: 800% - 1500%
              </p>
              <p className="text-gray-700 mt-4 italic">
                Als je NU 1 cliënt pakt die €1500-2500 waard is, heeft je premium positie zich al terugverdiend. Voor de rest van de maand.
              </p>
            </div>
          </div>
        </section>

        {/* Value Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Waarom Dit Elke Euro Waard Is
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              (En waarom je concurrent dit waarschijnlijk al doet)
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
                <Crown className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Onmiddellijke Zichtbaarheid</h3>
                <p className="text-gray-700">
                  Je staat bovenaan met een gouden crown badge. Mensen zien JOU het eerst in jouw gekozen stad. Altijd.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
                <Target className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Hot Leads</h3>
                <p className="text-gray-700">
                  Dit zijn geen koude leads. Dit zijn mensen die NU een Dietist zoeken en klaar zijn om te boeken. Geen tijd verspillen.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
                <TrendingUp className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Groeiend Platform</h3>
                <p className="text-gray-700">
                  Ons verkeer groeit 15-20% per maand. Je investering wordt automatisch waardevoller. Zonder extra werk.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <Zap className="w-10 h-10 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">De Keiharde Waarheid</h3>
                  <p className="text-lg text-gray-800 mb-4">
                    Als jij €1000/maand investeert en je krijgt 6 nieuwe cliënten binnen... dat is €9000-15000 omzet bij een gemiddelde voedingsadvies package van €1500-2500.
                  </p>
                  <p className="text-xl font-bold text-green-700 mb-4">
                    Dat is een 9-15x return op je investering. Elke. Maand.
                  </p>
                  <p className="text-lg text-gray-800 italic">
                    En als jij dit NIET doet, pakt je concurrent deze cliënten. Letterlijk jouw geld dat in hun zak verdwijnt.
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
              Kies Jouw Positie
            </h2>
            <p className="text-xl text-center text-gray-600 mb-2">
              Slechts 4 plekken per stad. Wie het eerst komt, het eerst maalt.
            </p>
            <p className="text-center text-red-600 font-bold mb-12">
              ⚠️ Als je stad vol is, kom je op de wachtlijst. Volgende beschikbaarheid kan maanden duren.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Position 1 */}
              <div className="bg-white rounded-xl shadow-2xl border-4 border-yellow-400 p-6 md:p-8 relative transform hover:scale-105 transition-transform">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-3 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                    👑 KONING POSITIE
                  </span>
                </div>
                <div className="text-center mb-6 mt-4">
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Positie #1</h3>
                  <p className="text-gray-600">De absolute top. Iedereen ziet jou eerst.</p>
                </div>
                <div className="text-center mb-6">
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-900">€149</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold text-green-600 mb-1">Jaarprijs: €1.490</div>
                    <div className="line-through text-gray-400">i.p.v. €1.788</div>
                    <div className="text-xs text-green-600 font-medium">2 maanden gratis!</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Bovenste positie met #1 crown badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op jouw gekozen stadspagina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Grootste visuele impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Hoogste click-through rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse performance rapportage</span>
                  </li>
                </ul>
                <a
                  href="https://shop-nu.plugandpay.nl/checkout/premium-positie-1-adhdcoachindebuurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-center py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-600 transition-colors shadow-lg"
                >
                  Claim Positie #1
                </a>
              </div>

              {/* Position 2 */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-gray-300 p-6 md:p-8 transform hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <Crown className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Positie #2</h3>
                  <p className="text-gray-600">Sterke zichtbaarheid, hoge conversie.</p>
                </div>
                <div className="text-center mb-6">
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-900">€99</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold text-green-600 mb-1">Jaarprijs: €990</div>
                    <div className="line-through text-gray-400">i.p.v. €1.188</div>
                    <div className="text-xs text-green-600 font-medium">2 maanden gratis!</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Tweede premium positie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op jouw gekozen stadspagina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Premium crown badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Hoge zichtbaarheid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse performance rapportage</span>
                  </li>
                </ul>
                <a
                  href="https://shop-nu.plugandpay.nl/checkout/premium-positie-2-adhdcoachindebuurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-center py-4 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg"
                >
                  Claim Positie #2
                </a>
              </div>

              {/* Position 3 */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-gray-300 p-6 md:p-8 transform hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <Crown className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Positie #3</h3>
                  <p className="text-gray-600">Premium zichtbaarheid, toegankelijk tarief.</p>
                </div>
                <div className="text-center mb-6">
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-900">€69</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold text-green-600 mb-1">Jaarprijs: €690</div>
                    <div className="line-through text-gray-400">i.p.v. €828</div>
                    <div className="text-xs text-green-600 font-medium">2 maanden gratis!</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Derde premium positie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op jouw gekozen stadspagina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Premium crown badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Goede zichtbaarheid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse performance rapportage</span>
                  </li>
                </ul>
                <a
                  href="https://shop-nu.plugandpay.nl/checkout/premium-positie-3-adhdcoachindebuurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-center py-4 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg"
                >
                  Claim Positie #3
                </a>
              </div>

              {/* Position 4 */}
              <div className="bg-white rounded-xl shadow-xl border-2 border-gray-300 p-6 md:p-8 transform hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <Crown className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Positie #4</h3>
                  <p className="text-gray-600">Goede zichtbaarheid, beste prijs.</p>
                </div>
                <div className="text-center mb-6">
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-900">€49</span>
                    <span className="text-gray-600">/maand</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold text-green-600 mb-1">Jaarprijs: €490</div>
                    <div className="line-through text-gray-400">i.p.v. €588</div>
                    <div className="text-xs text-green-600 font-medium">2 maanden gratis!</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Vierde premium positie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Op jouw gekozen stadspagina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Premium crown badge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Zichtbaarheid boven standaard resultaten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Maandelijkse performance rapportage</span>
                  </li>
                </ul>
                <a
                  href="https://shop-nu.plugandpay.nl/checkout/premium-positie-4-adhdcoachindebuurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 text-white text-center py-4 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg"
                >
                  Claim Positie #4
                </a>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 text-center">
              <p className="text-xl font-bold text-red-900 mb-2">
                ⚠️ Waarschuwing: Wachten Kost Je Geld
              </p>
              <p className="text-gray-800">
                Elke dag dat je wacht, pakt je concurrent cliënten die JIJ had moeten helpen. En verdient geld dat JIJ had moeten verdienen.
              </p>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-16 px-4 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">De "Ik Neem Het Risico" Garantie</h2>
            <p className="text-2xl mb-8 font-light">
              Als je binnen 30 dagen niet minimaal 3 nieuwe aanvragen krijgt, krijg je je geld terug. Geen vragen gesteld.
            </p>
            <p className="text-xl opacity-90 mb-8">
              Wij nemen het risico. Jij krijgt de resultaten. Want wij weten dat dit werkt.
            </p>
            <Link
              href="#pricing"
              className="inline-block bg-white text-amber-700 px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl"
            >
              Ja, Ik Wil Premium Worden
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De Keuze Is Simpel
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Blijf onzichtbaar en kijk hoe je concurrent groeit...
            </p>
            <p className="text-3xl font-bold mb-8 text-amber-400">
              Of domineer de top 3 en trek dagelijks nieuwe cliënten aan.
            </p>
            <Link
              href="#pricing"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-2xl"
            >
              Start Vandaag Met Groeien
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Vragen? <Link href="/contact" className="underline">Neem direct contact op</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
