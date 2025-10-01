import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - ADHD Coach in de Buurt',
  description: 'Privacybeleid van ADHD Coach in de Buurt. Lees hoe wij omgaan met uw persoonsgegevens.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Laatst bijgewerkt: Oktober 2025</p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Inleiding</h2>
              <p className="text-gray-700 mb-4">
                ADHD Coach in de Buurt hecht veel waarde aan de bescherming van uw persoonsgegevens. 
                In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen, 
                waarom wij deze verzamelen en hoe wij deze gebruiken.
              </p>
              <p className="text-gray-700">
                Deze privacyverklaring is van toepassing op het gebruik van de website en de 
                daarop ontsloten dienstverlening van ADHD Coach in de Buurt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-gray-700 mb-4">
                Wij kunnen de volgende categorieën persoonsgegevens van u verwerken:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Voor- en achternaam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>IP-adres en browsergegevens</li>
                <li>Locatiegegevens (indien u toestemming heeft gegeven)</li>
                <li>Gegevens over uw gebruik van onze website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Waarom verzamelen wij uw gegevens?</h2>
              <p className="text-gray-700 mb-4">
                ADHD Coach in de Buurt verwerkt uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Om contact met u op te kunnen nemen</li>
                <li>Om u te kunnen helpen bij het vinden van een geschikte ADHD coach</li>
                <li>Om u nieuwsbrieven en andere informatie te sturen (alleen met uw toestemming)</li>
                <li>Om de website te analyseren en te verbeteren</li>
                <li>Om fraude te voorkomen en de veiligheid van de website te waarborgen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="text-gray-700">
                ADHD Coach in de Buurt bewaart uw persoonsgegevens niet langer dan noodzakelijk 
                voor het doel waarvoor deze zijn verstrekt dan wel op grond van de wet is vereist. 
                Wanneer u contact met ons opneemt, bewaren wij uw gegevens maximaal 2 jaar na het 
                laatste contact.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Delen met derden</h2>
              <p className="text-gray-700 mb-4">
                ADHD Coach in de Buurt verkoopt uw gegevens niet aan derden en verstrekt deze 
                uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u 
                of om te voldoen aan een wettelijke verplichting.
              </p>
              <p className="text-gray-700">
                Wij kunnen uw gegevens delen met:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>ADHD coaches en therapeuten waarmee u contact wenst</li>
                <li>Dienstverleners die ons ondersteunen bij het aanbieden van onze diensten</li>
                <li>Overheidsinstanties indien wij daartoe wettelijk verplicht zijn</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-700 mb-4">
                ADHD Coach in de Buurt gebruikt functionele en analytische cookies. Een cookie is 
                een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen 
                op uw computer, tablet of smartphone.
              </p>
              <p className="text-gray-700">
                U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat 
                deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder 
                is opgeslagen via de instellingen van uw browser verwijderen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Uw rechten</h2>
              <p className="text-gray-700 mb-4">
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. 
                Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking 
                in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door 
                ADHD Coach in de Buurt.
              </p>
              <p className="text-gray-700 mb-4">
                U heeft tevens het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons 
                een verzoek kunt indienen om de persoonsgegevens die wij van u beschikken in een 
                computerbestand naar u of een ander, door u genoemde organisatie, te sturen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Beveiliging</h2>
              <p className="text-gray-700">
                ADHD Coach in de Buurt neemt de bescherming van uw gegevens serieus en neemt 
                passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste 
                openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft 
                dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, 
                neem dan contact met ons op.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Wijzigingen privacyverklaring</h2>
              <p className="text-gray-700">
                ADHD Coach in de Buurt kan deze privacyverklaring van tijd tot tijd aanpassen. 
                Wij raden u aan deze privacyverklaring regelmatig te raadplegen, zodat u op de 
                hoogte bent van eventuele wijzigingen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
              <p className="text-gray-700 mb-4">
                Als u vragen heeft over deze privacyverklaring of over de manier waarop wij 
                omgaan met uw persoonsgegevens, neem dan contact met ons op via:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>E-mail:</strong> <a href="mailto:info@adhdcoachindebuurt.nl" className="text-blue-600 hover:text-blue-700">info@adhdcoachindebuurt.nl</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Website:</strong> <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact pagina</Link>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Klachten</h2>
              <p className="text-gray-700">
                Mocht u een klacht hebben over de verwerking van uw persoonsgegevens, dan vragen 
                wij u hierover direct contact met ons op te nemen. Komt u er met ons niet uit, dan 
                heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
              </p>
            </section>
          </div>

          {/* Back to home link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Terug naar home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
