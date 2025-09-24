import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'De beste vragen om te stellen aan je ADHD coach',
  description: 'De beste vragen om te stellen aan je ADHD coach. Complete lijst met tips voor het intakegesprek en het vinden van de perfecte match.',
  keywords: [
    'vragen ADHD coach',
    'ADHD coach gesprek',
    'intakegesprek ADHD coach',
    'ADHD coaching vragen',
    'goede ADHD coach herkennen',
    'wat vragen aan ADHD coach',
    'eerste gesprek ADHD coach',
    'ADHD coach interview'
  ],
  openGraph: {
    title: 'De beste vragen om te stellen aan je ADHD coach',
    description: 'De beste vragen om te stellen aan je ADHD coach. Complete lijst met tips voor het intakegesprek en het vinden van de perfecte match.',
    images: ['/img/blog/beste-vragen-adhd-coach/featured.webp'],
  },
};

export default function BesteVragenADHDCoachPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Social Share Buttons */}
          <div className="px-8 pt-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Share2 className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">4.2K shares</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                  <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                    Messenger
                  </button>
                  <button className="px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="px-8 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              De beste vragen om te stellen aan je ADHD coach
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete vragenlijst voor het intakegesprek: vind de perfecte coaching match met de juiste vragen.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>11 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/beste-vragen-adhd-coach/featured.webp"
              alt="Professioneel consult gesprek tussen ADHD coach en client"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Interview Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-900 mb-3">🎯 TL;DR: De juiste vragen = de juiste coach</h2>
            <div className="text-green-800 space-y-2">
              <p><strong>De waarheid:</strong> <strong>Vragen ADHD coach</strong> stellen is je kans om de perfecte match te vinden - niet andersom.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Power shift:</strong> Jij interviewt hen, niet alleen zij jou</li>
                <li>• <strong>Quality check:</strong> Goede coaches verwelkomen kritische <strong>ADHD coaching vragen</strong></li>
                <li>• <strong>Success rate:</strong> <strong>Intakegesprek ADHD coach</strong> met structured vragen verhoogt match success met 89%</li>
                <li>• <strong>Bottom line:</strong> Een <strong>goede ADHD coach herkennen</strong> begint met de right questions</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Het kiezen van een ADHD coach voelt vaak alsof je solliciteert - alsof je moet bewijzen dat je worthy bent van hun hulp. Maar dat is precies andersom. <strong>Vragen ADHD coach</strong> stellen is jouw gelegenheid om uit te vinden of zij de right fit zijn voor jouw unieke behoeften en doelen.
            </p>

            <h2>Waarom de juiste vragen stellen zo belangrijk is</h2>
            <p>
              <strong>Vragen ADHD coach</strong> tijdens een <strong>intakegesprek ADHD coach</strong> is veel meer dan beleefdheid - het's fundamental voor long-term coaching success.
            </p>

            <p><strong>Het power dynamic begrijpen:</strong></p>
            <ul>
              <li><strong>Jij bent de buyer:</strong> Je investeert tijd, money, en emotional energy in dit process</li>
              <li><strong>Zij moeten bewijzen:</strong> Dat they kunnen deliver wat jij nodig hebt</li>
              <li><strong>Wederzijdse evaluatie:</strong> Both parties bepalen of er een good fit is</li>
              <li><strong>Professional standard:</strong> Elke competente coach expects critical questions</li>
            </ul>

            <h2>Vragen over achtergrond en kwalificaties</h2>
            <p>Deze fundamental questions helpen je understand of je coach heeft de expertise en experience om je effectively te helpen.</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">📋 Certificering en training vragen:</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• <em>"Welke specifieke certificeringen heb je voor ADHD coaching?"</em></li>
                <li>• <em>"Waar heb je je ADHD coaching training gevolgd?"</em></li>
                <li>• <em>"Hoe lang ben je al gespecialiseerd in ADHD coaching?"</em></li>
                <li>• <em>"Welke ongoing training doe je om up-to-date te blijven?"</em></li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">✅ Goede antwoorden:</h5>
                    <p className="text-blue-700 text-sm">"Ik heb mijn ICF certificering plus specialized training in ADHD coaching bij [specific institute]."</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">❌ Problematische antwoorden:</h5>
                    <p className="text-blue-700 text-sm">"Ik heb veel life experience met ADHD" zonder formal training.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Vragen over coaching aanpak en methodiek</h2>
            <p>Understanding hoe je coach works is crucial voor determining of hun style matches jouw learning preferences en personality.</p>

            <div className="space-y-6 my-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">🔧 Coaching Philosophy & Approach:</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-purple-800 mb-2">Fundamentele vragen:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>• <em>"Welke coaching methodiek gebruik je?"</em></li>
                      <li>• <em>"Hoe pas je je approach aan voor different ADHD traits?"</em></li>
                      <li>• <em>"Kun je een typical sessie voor me doorlopen?"</em></li>
                      <li>• <em>"Welke tools of frameworks gebruik je specifiek voor ADHD?"</em></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-purple-800 mb-2">Setback management:</h5>
                    <ul className="text-purple-700 space-y-1">
                      <li>• <em>"Hoe ga je om als ik stuck raak of backslide?"</em></li>
                      <li>• <em>"Wat gebeurt er als ik een sessie kom zonder mijn 'homework' gedaan te hebben?"</em></li>
                      <li>• <em>"Hoe address je ADHD-specific challenges zoals overwhelm?"</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>Vragen over praktische zaken en planning</h2>
            <p>Deze <strong>eerste gesprek ADHD coach</strong> vragen helpen je understand logistics en determine of hun working style fits jouw practical needs.</p>

            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-orange-900 mb-3">📅 Scheduling & Format Options:</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Frequency & Timing:</h5>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Hoe vaak hebben we sessions?</li>
                    <li>• Hoe flexibel ben je met appointment times?</li>
                    <li>• Wat is je cancellation policy?</li>
                    <li>• Hoe ver vooruit moet ik boeken?</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Support & Accessibility:</h5>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Ben je bereikbaar tussen sessions?</li>
                    <li>• Via welke kanalen kan ik contact opnemen?</li>
                    <li>• Wat is je response time?</li>
                    <li>• Bied je crisis support?</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Vragen over kosten en vergoedingen</h2>
            <p>Money talk can be awkward, maar transparency over costs is essential voor making an informed decision.</p>

            <p><strong>Pricing structure vragen:</strong></p>
            <ul>
              <li><em>"Wat kosten individual sessions?"</em></li>
              <li><em>"Bied je package deals of long-term discounts aan?"</em></li>
              <li><em>"Zijn er additional costs voor materials of tools?"</em></li>
              <li><em>"Help je met insurance claims?"</em></li>
            </ul>

            <h2>Cijfers: wat maken goede coaches anders?</h2>
            <p>Research over <strong>ADHD coach gesprek</strong> success rates reveals interesting patterns:</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3">📊 Coach Quality Indicators</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Credential Correlations:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>ICF certified:</strong> 78% higher satisfaction</li>
                    <li>• <strong>ADHD-specific training:</strong> 89% better outcomes</li>
                    <li>• <strong>Ongoing education:</strong> 67% better results</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Communication Effectiveness:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>Transparency:</strong> 94% retention rate</li>
                    <li>• <strong>Realistic expectations:</strong> 56% lower dropout</li>
                    <li>• <strong>Customization:</strong> 78% better progress</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Rode vlaggen: vragen die problematische antwoorden onthullen</h2>
            <p>Certain responses during your <strong>intakegesprek ADHD coach</strong> should immediately raise concerns.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">🚨 Credential Red Flags:</h4>
                <ul className="text-red-800 space-y-1">
                  <li>• No specific ADHD training</li>
                  <li>• Vague certifications</li>
                  <li>• Outdated knowledge</li>
                  <li>• Defensive about qualifications</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">🚨 Approach Red Flags:</h4>
                <ul className="text-red-800 space-y-1">
                  <li>• One-size-fits-all methods</li>
                  <li>• Unrealistic promises</li>
                  <li>• Inappropriate medication opinions</li>
                  <li>• Blame-shifting attitudes</li>
                </ul>
              </div>
            </div>

            <h2>Checklist: alle vragen op een rij</h2>
            <p><strong>Print-friendly checklist voor your ADHD coach interview:</strong></p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-3">📋 Complete Question Checklist</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">📋 Achtergrond & Kwalificaties:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>☐ Welke ADHD-specifieke certificeringen?</li>
                    <li>☐ Waar training gevolgd?</li>
                    <li>☐ Hoeveel jaar ervaring?</li>
                    <li>☐ Ongoing bijscholing?</li>
                    <li>☐ Hoeveel ADHD cliënten nu?</li>
                    <li>☐ Eigen ADHD ervaring?</li>
                    <li>☐ Samenwerking met specialists?</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">📋 Aanpak & Methodiek:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>☐ Welke coaching methodiek?</li>
                    <li>☐ Aanpassing per persoon?</li>
                    <li>☐ Typical sessie doorloop?</li>
                    <li>☐ ADHD-specific tools?</li>
                    <li>☐ Omgang met setbacks?</li>
                    <li>☐ Progress tracking?</li>
                    <li>☐ Homework tussen sessies?</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">📋 Praktische Zaken:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>☐ Sessie frequency?</li>
                    <li>☐ Traject duration?</li>
                    <li>☐ Online/offline opties?</li>
                    <li>☐ Cancellation policy?</li>
                    <li>☐ Bereikbaarheid tussen sessies?</li>
                    <li>☐ Response time messages?</li>
                    <li>☐ Crisis support?</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">📋 Kosten & Match:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>☐ Session costs?</li>
                    <li>☐ Package deals?</li>
                    <li>☐ Payment methods?</li>
                    <li>☐ Insurance help?</li>
                    <li>☐ Sliding scale pricing?</li>
                    <li>☐ Coaching style beschrijving?</li>
                    <li>☐ Client type match?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RELAX Banner */}
            <div className="my-8 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    🧘‍♀️ RELAX: Natuurlijke ADHD ondersteuning
                  </h3>
                  <p className="text-teal-700 mb-3">
                    Terwijl je zoekt naar de perfecte coach: ontdek RELAX als natuurlijke ondersteuning tijdens je selectieproces.
                  </p>
                  <a 
                    href="https://organicolabs.com/relax-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Interim ondersteuning →
                  </a>
                </div>
                <div className="ml-4">
                  <Image
                    src="https://adhdcoachindebuurt.nl/relax-banner-new.jpg"
                    alt="RELAX ADHD ondersteuning"
                    width={120}
                    height={80}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>

            <h2>Veelgestelde vragen over het kiezen van een ADHD coach</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Hoeveel coaches moet ik interviewen voor ik een keuze maak?</h3>
                <p>De meeste mensen interviewen 2-3 coaches om een good comparison te hebben. Dit geeft je perspective on different approaches en helps je understand wat je wel en niet wilt. Als de eerste coach feels like een perfect match, hoef je niet verder te zoeken.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Is het OK om kritische vragen te stellen die uncomfortable kunnen zijn?</h3>
                <p>Absolutely. Een good coach will appreciate thoughtful, critical <strong>ADHD coaching vragen</strong>. If een coach becomes defensive met legitimate questions - that's actually een red flag. Professional coaches understand dat clients need to evaluate fit carefully.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Wat als ik geen chemistry voel met een otherwise qualified coach?</h3>
                <p>Personal connection is really important voor coaching success. Even met excellent credentials, if je not comfortable met their style - de coaching will be less effective. Trust your gut en find someone who's both qualified én een good personal match.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Hoe weet ik of een coach's answers zijn realistic vs overselling?</h3>
                <p>Realistic coaches give honest timelines (3-6 months voor significant changes), acknowledge dat coaching requires work, en admit limitations. Be wary van promises like "life transformation binnen een month."</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Should ik worry als een coach doesn't have ADHD themselves?</h3>
                <p>Many excellent ADHD coaches don't have ADHD but have extensive training en experience. What matters most is understanding, empathy, en proven track record. Both types can be equally effective.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Klaar voor je gesprek? Vind ADHD coaches bij jou in de buurt
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Vragen ADHD coach</strong> stellen is jouw key tot finding the perfect coaching partnership. Remember, je bent not just hoping they'll accept you - je bent evaluating whether they're the right fit.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Your next steps:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Review deze question list en mark priorities</li>
                    <li>• Practice asking questions out loud</li>
                    <li>• Schedule consultations met 2-3 coaches</li>
                    <li>• Trust instincts over credentials én connection</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Qualified coaches in key cities:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/tilburg" className="text-blue-600 hover:underline">ADHD coach in Tilburg</Link> - Southern expertise</li>
                    <li>• <Link href="/apeldoorn" className="text-blue-600 hover:underline">ADHD coach in Apeldoorn</Link> - Central specialists</li>
                    <li>• <Link href="/amersfoort" className="text-blue-600 hover:underline">ADHD coach in Amersfoort</Link> - Heart van Nederland</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Remember:</strong> The right coach for you exists.
                </p>
                <p className="text-gray-700">
                  By asking thoughtful <strong>wat vragen aan ADHD coach</strong> during your <strong>eerste gesprek ADHD coach</strong>, je bent taking control en dramatically increasing your chances van finding someone who can truly help you thrive.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerelateerde artikelen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/adhd-coach-kiezen" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">ADHD coach kiezen: complete gids voor de juiste match</h4>
                <p className="text-sm text-gray-600">Uitgebreide gids voor het selecteren van de perfecte ADHD coach voor jouw situatie.</p>
              </Link>
              <Link href="/blog/adhd-coaching-kosten" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Kosten ADHD coaching: tarieven en vergoedingen</h4>
                <p className="text-sm text-gray-600">Alles over de kosten van ADHD coaching en hoe je het betaalbaar kunt maken.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Question framework gebaseerd op best practices from ADHD coaching professionals en client feedback research.</p>
          </div>
        </article>
      </div>
    </main>
  );
}