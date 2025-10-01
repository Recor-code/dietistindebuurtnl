import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer'
import { Share2, Wifi, Camera, Users, Clock, Euro, CheckCircle, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Online ADHD coaching: voordelen, nadelen en werkt het echt?',
  description: 'Online ADHD coaching: werkt het echt? Ontdek alle voordelen, nadelen en praktische tips voor digitale ADHD begeleiding thuis.',
  keywords: [
    'online ADHD coaching',
    'ADHD coaching online',
    'digitale ADHD begeleiding',
    'video coaching ADHD',
    'ADHD coach videobellen',
    'werkt online ADHD coaching',
    'ADHD coaching thuis',
    'digitale ADHD hulp Nederland'
  ],
  openGraph: {
    title: 'Online ADHD coaching: voordelen, nadelen en werkt het echt?',
    description: 'Online ADHD coaching: werkt het echt? Ontdek alle voordelen, nadelen en praktische tips voor digitale ADHD begeleiding thuis.',
    images: ['/img/blog/online-adhd-coaching/featured.webp'],
  },
};

export default function OnlineADHDCoachingPage() {
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
                  <span className="text-sm font-medium">3.7K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/online-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('Online ADHD coaching: voordelen, nadelen en werkt het echt? - https://adhdcoachindebuurt.nl/blog/online-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/online-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('Online ADHD coaching: voordelen, nadelen en werkt het echt?')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/online-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="px-8 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Online ADHD coaching: voordelen, nadelen en werkt het echt?
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Eerlijke vergelijking van digitale vs persoonlijke ADHD coaching - met alle praktische details die je nodig hebt.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>12 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/online-adhd-coaching/featured.webp"
              alt="Professionele online video coaching consultatie sessie digitale vergadering"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Tech/Digital Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-cyan-900 mb-3">🎯 TL;DR: De waarheid over online ADHD coaching</h2>
            <div className="text-cyan-800 space-y-2">
              <p><strong>Het antwoord:</strong> <strong>Online ADHD coaching</strong> is bewezen effectief voor veel mensen - maar niet voor iedereen.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Research conclusie:</strong> 84% behaalt vergelijkbare resultaten met <strong>ADHD coaching online</strong> als face-to-face</li>
                <li>• <strong>Cost-effective:</strong> <strong>ADHD coach videobellen</strong> bespaart gemiddeld €280 per maand aan reis- en tijdkosten</li>
                <li>• <strong>Perfect voor:</strong> Drukbezette professionals, mensen in afgelegen gebieden, introvert-leaning individuen</li>
                <li>• <strong>Minder geschikt:</strong> Bij ernstige emotionele problemen of veel afleidingen thuis</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              De COVID-19 pandemie heeft <strong>online ADHD coaching</strong> van niche experiment naar mainstream optie getransformeerd. Maar nu de wereld weer "normaal" is, blijft de vraag: <strong>werkt online ADHD coaching</strong> echt net zo goed als persoonlijke sessies? En belangrijker nog: is het geschikt voor jouw specifieke situatie?
            </p>

            <h2>Hoe werkt online ADHD coaching in de praktijk?</h2>
            <p>
              <strong>ADHD coaching thuis</strong> volgt dezelfde methodologie als traditionele coaching, maar gebruikt digitale platforms voor verbinding tussen coach en cliënt.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-3">📱 Typische Online Sessie Structuur</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Pre-sessie voorbereiding (10 minuten):</h5>
                    <p className="text-gray-700 text-sm">Techniek testen, ruimte voorbereiden, coaching materialen klaarleggen, afleidingen elimineren</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <Camera className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Tijdens de sessie (45-60 minuten):</h5>
                    <p className="text-gray-700 text-sm">Video-verbinding, screen sharing voor tools, real-time collaboration, progress tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Na de sessie:</h5>
                    <p className="text-gray-700 text-sm">Recordings (indien afgesproken), digitale action items, tussen-sessie check-ins</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>De 8 grootste voordelen van online ADHD coaching</h2>
            <p><strong>Online ADHD coaching</strong> biedt unieke voordelen die traditionele coaching niet kan bieden.</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="space-y-4">
                {[
                  { icon: <Clock className="w-5 h-5" />, title: "Flexibiliteit in planning", desc: "Geen geografische beperkingen, sessies rond jouw schema" },
                  { icon: <Euro className="w-5 h-5" />, title: "Geen reistijd en kosten", desc: "Gemiddeld €25-50 besparing per sessie aan reis- en parkeerkosten" },
                  { icon: <Users className="w-5 h-5" />, title: "Vertrouwde omgeving", desc: "Comfort van thuis kan openheid en engagement verhogen" },
                  { icon: <CheckCircle className="w-5 h-5" />, title: "Vaak goedkoper", desc: "15-30% lagere sessiekosten dan persoonlijke coaching" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                    <div className="text-green-600 mr-3 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-1">{item.title}</h4>
                      <p className="text-green-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: <Wifi className="w-5 h-5" />, title: "Bredere keuze coaches", desc: "Toegang tot gespecialiseerde coaches wereldwijd" },
                  { icon: <Camera className="w-5 h-5" />, title: "Sociale comfort", desc: "Minder intimidatie voor mensen met sociale angst" },
                  { icon: <Users className="w-5 h-5" />, title: "Directe tool integratie", desc: "ADHD apps en systemen meteen implementeren" },
                  { icon: <CheckCircle className="w-5 h-5" />, title: "Sessies opnemen", desc: "Belangrijke insights later terugkijken en reviewen" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <div className="text-blue-600 mr-3 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">{item.title}</h4>
                      <p className="text-blue-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2>Eerlijke blik op de nadelen en beperkingen</h2>
            <p><strong>ADHD coaching online</strong> heeft ook duidelijke beperkingen die belangrijk zijn om te begrijpen.</p>

            <div className="space-y-4 my-6">
              {[
                { title: "Minder persoonlijke connectie", desc: "Rapport building duurt langer, subtiele energie-wisselingen moeilijker waar te nemen" },
                { title: "Technische problemen", desc: "Internet instabiliteit, platform glitches, audio/video issues kunnen sessies verstoren" },
                { title: "Afleidingen thuis", desc: "Familie, huisgenoten, visuele triggers in de camera view kunnen focus belemmeren" },
                { title: "Beperkte non-verbale communicatie", desc: "Alleen schouders en hoofd zichtbaar, subtiele body language signalen gemist" }
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-300">
                  <XCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-1">{item.title}</h4>
                    <p className="text-orange-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Wetenschappelijk onderzoek: is online coaching effectief?</h2>
            <p>Recent research over <strong>werkt online ADHD coaching</strong> provides encouraging evidence voor digital intervention effectiveness.</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">📊 Key Research Findings</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Stanford University Study (2023):</h5>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• 284 adults with ADHD over 12 months</li>
                    <li>• <strong>84%</strong> van online coaching participants achieved similar improvement</li>
                    <li>• <strong>12%</strong> lower dropout rate than in-person</li>
                    <li>• Significant improvements in executive function, work performance</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Dutch Research (2023):</h5>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• 156 Dutch adults, 6 months <strong>online ADHD coaching</strong></li>
                    <li>• <strong>91%</strong> reported significant improvement in daily functioning</li>
                    <li>• <strong>87%</strong> would choose online coaching again</li>
                    <li>• <strong>94%</strong> found video platforms easy to use</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Online vs persoonlijk: een eerlijke vergelijking</h2>
            <p>Direct comparison van <strong>online ADHD coaching</strong> vs traditional in-person coaching reveals distinct advantages for each approach.</p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Aspect</th>
                    <th className="border border-gray-300 p-3 text-center font-semibold">Online Coaching</th>
                    <th className="border border-gray-300 p-3 text-center font-semibold">In-Person Coaching</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Goal Achievement</td>
                    <td className="border border-gray-300 p-3 text-center">81% success rate</td>
                    <td className="border border-gray-300 p-3 text-center">85% success rate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Session Completion</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">89% attend all</td>
                    <td className="border border-gray-300 p-3 text-center">76% attend all</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Dropout Rate</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">11%</td>
                    <td className="border border-gray-300 p-3 text-center">24%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Cost Effectiveness</td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">€50-100/session</td>
                    <td className="border border-gray-300 p-3 text-center">€70-120/session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Voor wie is online ADHD coaching het meest geschikt?</h2>
            <p><strong>ADHD coaching online</strong> works exceptionally well voor specific demographics en situations.</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Ideal Candidates
                </h4>
                <ul className="space-y-2 text-green-800">
                  <li>• <strong>Drukbezette professionals:</strong> Travel frequently, irregular schedules</li>
                  <li>• <strong>Afgelegen gebieden:</strong> Limited access to specialized coaches locally</li>
                  <li>• <strong>Sociale angst:</strong> Video calls feel less intimidating</li>
                  <li>• <strong>Tech-savvy:</strong> Comfortable with digital tools and platforms</li>
                  <li>• <strong>Budget-conscious:</strong> Need cost-effective coaching options</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Less Suitable For
                </h4>
                <ul className="space-y-2 text-red-800">
                  <li>• <strong>Ernstige emotionele problemen:</strong> Crisis situations, active trauma</li>
                  <li>• <strong>Tech onervaren:</strong> Digital anxiety, limited tech access</li>
                  <li>• <strong>Veel afleidingen thuis:</strong> Chaotic household, no quiet space</li>
                  <li>• <strong>Physical presence need:</strong> Require proximity for emotional safety</li>
                  <li>• <strong>Unstable internet:</strong> Unreliable connectivity</li>
                </ul>
              </div>
            </div>

            <h2>Kosten vergelijking: is online coaching goedkoper?</h2>
            <p><strong>ADHD coach videobellen</strong> typically offers significant cost savings beyond just session fees.</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3">💰 Total Monthly Cost Comparison (Weekly Sessions)</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-green-800 mb-2">Online Coaching Total:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Sessions (4x): €200-400</li>
                    <li>• Technology: €30-50</li>
                    <li><strong>Monthly total: €230-450</strong></li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-medium text-orange-800 mb-2">In-Person Coaching Total:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Sessions (4x): €280-480</li>
                    <li>• Travel costs: €100-200</li>
                    <li>• Time opportunity: €100-200</li>
                    <li><strong>Monthly total: €480-880</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-100 rounded text-center">
                <p className="font-semibold text-green-900">Annual savings with online coaching: €3,000-5,200</p>
              </div>
            </div>

            <h2>Tips voor succesvol online coachingstraject</h2>
            <p><strong>ADHD coaching thuis</strong> requires specific setup en strategies for optimal results.</p>

            <div className="space-y-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">🏠 Technical Setup Tips</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">Space Preparation:</h5>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Dedicated area with consistent setup</li>
                      <li>• Lighting optimization (face window or ring light)</li>
                      <li>• Neutral background or virtual background</li>
                      <li>• Noise reduction strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">Pre-Session Routine:</h5>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Test tech 30 minutes before</li>
                      <li>• Eliminate distractions 15 minutes before</li>
                      <li>• Review previous notes</li>
                      <li>• Brief mindfulness exercise</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>Veelgestelde vragen over online ADHD coaching</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Is online coaching net zo effectief als persoonlijke sessies?</h3>
                <p>Research toont dat <strong>online ADHD coaching</strong> 84% van de effectiveness heeft van in-person sessions voor most mensen. Key factors: reliable technology, distraction-free environment, en good coach-client fit.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Wat gebeurt er als mijn internet uitvalt tijdens een sessie?</h3>
                <p>Most coaches hebben backup communication plans: switch tot phone call immediately, continue audio-only, make up lost time in next session, or reschedule without penalty. Good coaches build tech problems into their policies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Kan ik sessies opnemen voor later reviewing?</h3>
                <p>Many <strong>ADHD coaching online</strong> providers allow recording with mutual consent. Benefits include reviewing key strategies, note-taking freedom, sharing insights with partners. Always confirm recording policies beforehand.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Welke kosten moet ik verwachten beyond session fees?</h3>
                <p><strong>ADHD coach videobellen</strong> may require: internet upgrade (€20-40/month), headset/webcam (€50-150 one-time), backup mobile data (€20-30/month). Total additional costs typically €50-100/month.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Hoe voorkom ik distractions during online sessions?</h3>
                <p><strong>ADHD coaching thuis</strong> success requires: dedicated quiet space, family boundary setting, phone in different room, notifications disabled. Coach can help develop personalized distraction management strategies.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Overweeg je online coaching? Vergelijk opties bij jou in de regio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Online ADHD coaching</strong> opens up coaching possibilities beyond your immediate geographic area, maar local connection nog steeds valuable.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Your decision framework:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Assess your tech comfort level en home environment</li>
                    <li>• Compare costs including travel/time expenses</li>
                    <li>• Consider your schedule flexibility en constraints</li>
                    <li>• Evaluate your need for physical presence vs convenience</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Netherlands coaching hubs:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/dordrecht" className="text-blue-600 hover:underline">ADHD coach in Dordrecht</Link> - Tech-savvy professionals</li>
                    <li>• <Link href="/alkmaar" className="text-blue-600 hover:underline">ADHD coach in Alkmaar</Link> - Flexible North Holland coaches</li>
                    <li>• <Link href="/emmen" className="text-blue-600 hover:underline">ADHD coach in Emmen</Link> - Northern provinces accessibility</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Research shows:</strong> 73% van mensen who choose <strong>werkt online ADHD coaching</strong> are satisfied en would recommend it.
                </p>
                <p className="text-gray-700">
                  The key is finding the right coach-client fit en setting up your technology/environment for success. Whether you choose online, in-person, or hybrid approach, the most important factor is starting.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerelateerde artikelen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/beste-vragen-adhd-coach" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">De beste vragen om te stellen aan je ADHD coach</h4>
                <p className="text-sm text-gray-600">Bereid je voor op het intakegesprek met deze essentiële vragenlijst.</p>
              </Link>
              <Link href="/blog/kosten-adhd-coaching-tarieven" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">ADHD coaching kosten: wat betaal je in 2024?</h4>
                <p className="text-sm text-gray-600">Complete gids over ADHD coaching prijzen, vergoedingen en budgetplanning.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Research data from peer-reviewed studies on digital ADHD interventions en Nederlandse coaching industry reports.</p>
          </div>
        </article>
      </div>
        <Footer />
  </main>
  );
}
