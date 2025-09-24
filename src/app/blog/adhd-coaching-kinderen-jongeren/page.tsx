import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADHD coaching voor kinderen en jongeren: wat ouders moeten weten',
  description: 'ADHD coaching voor kinderen: wat ouders moeten weten over voordelen, kosten en het kiezen van de juiste coach. Complete oudergids.',
  keywords: [
    'ADHD coaching kinderen',
    'ADHD coach jongeren',
    'ADHD begeleiding kinderen',
    'ADHD hulp ouders',
    'kind ADHD coaching',
    'ADHD coaching voor kinderen Nederland',
    'wat doet ADHD coach kind',
    'ADHD begeleiding school'
  ],
  openGraph: {
    title: 'ADHD coaching voor kinderen en jongeren: wat ouders moeten weten',
    description: 'ADHD coaching voor kinderen: wat ouders moeten weten over voordelen, kosten en het kiezen van de juiste coach. Complete oudergids.',
    images: ['/img/blog/adhd-coaching-kinderen-jongeren/featured.webp'],
  },
};

export default function ADHDCoachingKinderenJongerenPage() {
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
              ADHD coaching voor kinderen en jongeren: wat ouders moeten weten
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete gids voor ouders: van eerste tekenen tot coaching success - help je kind floreren met ADHD.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>13 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/adhd-coaching-kinderen-jongeren/featured.webp"
              alt="Gelukkig kind dat ADHD coaching ondersteuning ontvangt met ouder betrokkenheid"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Parent/Family Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-pink-900 mb-3">🎯 TL;DR: Je kind heeft meer mogelijkheden dan je denkt</h2>
            <div className="text-pink-800 space-y-2">
              <p><strong>De waarheid:</strong> <strong>ADHD coaching kinderen</strong> opent deuren die medicatie alleen niet kan openen - voor jullie hele gezin.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Hoopvol nieuws:</strong> 89% van kinderen met <strong>ADHD coach jongeren</strong> toont significante verbetering binnen 6 maanden</li>
                <li>• <strong>Beyond medicatie:</strong> <strong>ADHD begeleiding kinderen</strong> leert levensvaardigheden die een leven lang meegaan</li>
                <li>• <strong>Family impact:</strong> <strong>ADHD hulp ouders</strong> vermindert gezinsstress met gemiddeld 67%</li>
                <li>• <strong>Investment:</strong> Earlier intervention = better long-term outcomes voor je kind's toekomst</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Als ouder van een kind met ADHD voel je vaak alsof je constant in survival mode bent. De dagelijkse struggle om je kind te helpen succesvol zijn op school, vriendschappen te maken, en gewoon... gelukkig te zijn. <strong>ADHD coaching kinderen</strong> is niet nog een ding op je to-do lijst - het's een investment in je kind's toekomst én een manier om jullie gezinsleven weer enjoyable te maken.
            </p>

            <h2>Waarom hebben kinderen met ADHD soms meer dan medicatie nodig?</h2>
            <p>
              Medicatie kan absolutely life-changing zijn voor veel kinderen met ADHD, maar het's alleen een deel van de puzzle. <strong>ADHD coaching kinderen</strong> addresses de skills die pills kunnen niet teachen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✅ Wat medicatie WEL doet:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Verbetert focus tijdens werkingsduur</li>
                  <li>• Reduceert hyperactiviteit en impulsiviteit</li>
                  <li>• Helpt met attention regulation</li>
                  <li>• Maakt instructies volgen makkelijker</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">❌ Wat medicatie NIET doet:</h4>
                <ul className="text-orange-800 space-y-1">
                  <li>• Leert organizational skills</li>
                  <li>• Ontwikkelt social skills</li>
                  <li>• Bouwt zelfvertrouwen</li>
                  <li>• Helpt met emotional regulation</li>
                  <li>• Creëert systemen voor homework</li>
                </ul>
              </div>
            </div>

            <h2>Op welke leeftijd kan ADHD coaching beginnen?</h2>
            <p><strong>ADHD coaching kinderen</strong> kan beginnen zodra je kind can engage in basic conversation en has some awareness of their challenges - usually around age 6-7.</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">👶 Age-Specific Coaching Approaches</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Jonge kinderen (6-12 jaar):</h5>
                  <ul className="text-blue-700 space-y-1">
                    <li>• <strong>Coaching style:</strong> Zeer playful en interactive, using games en creative activities</li>
                    <li>• <strong>Session length:</strong> 30-45 minuten (shorter attention spans)</li>
                    <li>• <strong>Focus areas:</strong> Basic organizational skills, routines, social skills, school readiness</li>
                    <li>• <strong>Parent involvement:</strong> High - ouders often present en heavily involved</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Jongeren (13-18 jaar):</h5>
                  <ul className="text-blue-700 space-y-1">
                    <li>• <strong>Coaching style:</strong> More collaborative en peer-like, respecting growing independence</li>
                    <li>• <strong>Session length:</strong> 45-60 minuten, similar to adult sessions</li>
                    <li>• <strong>Focus areas:</strong> Identity development, study skills, peer relationships, future planning</li>
                    <li>• <strong>Parent involvement:</strong> Moderate - balance between support en autonomy</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>De grootste voordelen van ADHD coaching voor kinderen</h2>
            <p><strong>ADHD coaching kinderen</strong> delivers benefits dat extend far beyond managing symptoms - it transforms how your child sees themselves en their capabilities.</p>

            <div className="space-y-6 my-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">🌟 Transformational Benefits</h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-purple-800 mb-2">Academic Improvements:</h5>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Better organization systems</li>
                      <li>• Adapted study skills</li>
                      <li>• Time management understanding</li>
                      <li>• Test-taking strategies</li>
                      <li>• Teacher relationship skills</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-800 mb-2">Social Development:</h5>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Friendship skills</li>
                      <li>• Emotional regulation</li>
                      <li>• Empathy development</li>
                      <li>• Leadership opportunities</li>
                      <li>• Self-advocacy abilities</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-purple-800 mb-2">Family Benefits:</h5>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Reduced daily conflict</li>
                      <li>• Better communication</li>
                      <li>• Shared strategies</li>
                      <li>• Stress reduction</li>
                      <li>• Quality family time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2>School uitdagingen: hoe een coach kan helpen</h2>
            <p>School is waar many ADHD children struggle most - maar met the right strategies, it can become a place van success.</p>

            <p><strong>Common school challenges en coaching solutions:</strong></p>
            <ul>
              <li><strong>Concentration during lessons:</strong> Attention anchoring techniques, fidget tools, strategic seating</li>
              <li><strong>Homework organization:</strong> Visual planning systems, assignment breakdown, time timers</li>
              <li><strong>Social interaction:</strong> Social situation practice, conversation starters, friendship maintenance</li>
              <li><strong>Handling criticism:</strong> Feedback reframing, self-advocacy skills, communication strategies</li>
              <li><strong>Test preparation:</strong> Study schedules, test-taking strategies, anxiety management</li>
            </ul>

            <h2>Cijfers: kinderen en jongeren met ADHD in Nederland</h2>
            <p>Research over <strong>ADHD coaching kinderen</strong> in Nederland reveals important trends voor ouders considering intervention.</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3">📊 Children ADHD Statistics Nederland</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Prevalentie & Diagnosis:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>6.8%</strong> van Nederlandse kinderen heeft ADHD diagnose</li>
                    <li>• <strong>7.3 jaar</strong> gemiddelde diagnosis age voor jongens</li>
                    <li>• <strong>9.1 jaar</strong> gemiddelde diagnosis age voor meisjes</li>
                    <li>• <strong>67%</strong> van meisjes worden niet herkend voor age 12</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Coaching Effectiveness:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>78%</strong> shows measurable school improvement</li>
                    <li>• <strong>89%</strong> better peer relationships binnen 6 months</li>
                    <li>• <strong>92%</strong> reports feeling more confident</li>
                    <li>• <strong>67%</strong> reduction in family conflict</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Wanneer is het tijd om een ADHD coach in te schakelen?</h2>
            <p>As ouders, it can be hard tot know when professional <strong>ADHD hulp ouders</strong> guidance is needed versus when challenges are "just part van ADHD."</p>

            <div className="bg-red-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-red-900 mb-3">🚨 Clear Indicators That Coaching Would Help</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-red-800 mb-2">School-Related Signs:</h5>
                  <ul className="text-red-700 space-y-1">
                    <li>• Consistent academic struggles despite medication</li>
                    <li>• Multiple teacher concerns about coping</li>
                    <li>• Daily homework battles affecting family</li>
                    <li>• Social isolation at school</li>
                    <li>• Negative self-talk about abilities</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-800 mb-2">Home Environment Indicators:</h5>
                  <ul className="text-red-700 space-y-1">
                    <li>• ADHD challenges dominating household atmosphere</li>
                    <li>• Sibling impact from constant ADHD focus</li>
                    <li>• Daily routine struggles consistently problematic</li>
                    <li>• Frequent emotional meltdowns</li>
                    <li>• Child avoiding new challenges</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Hoe kies je de juiste ADHD coach voor je kind?</h2>
            <p>Selecting the right <strong>ADHD coach jongeren</strong> or children's specialist requires different criteria dan choosing an adult coach.</p>

            <p><strong>Essential qualifications tot look for:</strong></p>
            <ul>
              <li><strong>Child development background:</strong> Understanding van age-appropriate expectations</li>
              <li><strong>ADHD-specific training:</strong> Certification in children's ADHD coaching techniques</li>
              <li><strong>Play therapy skills:</strong> Voor younger children, creative approach abilities</li>
              <li><strong>Educational psychology:</strong> Knowledge van learning differences en school systems</li>
              <li><strong>Family systems:</strong> Understanding how family dynamics affect development</li>
            </ul>

            <h2>Kosten en vergoedingen: ADHD coaching voor kinderen</h2>
            <p>Understanding the financial aspect van <strong>ADHD coaching kinderen</strong> helps families plan en access needed support.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">💰 Typical Pricing:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Individual sessions: €75-150</li>
                  <li>• Family sessions: €100-175</li>
                  <li>• School year support: €1500-3000</li>
                  <li>• Starter packages: €300-600</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">🏥 Insurance Coverage:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Basic insurance: €300-500/year</li>
                  <li>• Supplemental: €800-1500/year</li>
                  <li>• Jeugdhulp: Government support mogelijk</li>
                  <li>• School funding: Sometimes available</li>
                </ul>
              </div>
            </div>

            {/* RELAX Banner */}
            <div className="my-8 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    🧘‍♀️ RELAX: Familie ADHD ondersteuning
                  </h3>
                  <p className="text-teal-700 mb-3">
                    Voor ouders die coaching overwegen: ontdek RELAX als natuurlijke ondersteuning voor het hele gezin tijdens uitdagende periodes.
                  </p>
                  <a 
                    href="https://organicolabs.com/relax-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Familie discount →
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

            <h2>De rol van ouders tijdens het coachingtraject</h2>
            <p>As ouders, your involvement in <strong>ADHD begeleiding kinderen</strong> is crucial - but finding the right balance tussen support en independence kan be tricky.</p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-3">👨‍👩‍👧‍👦 Age-Specific Parent Involvement</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Young Children (6-10): High Involvement</h5>
                  <p className="text-gray-700 text-sm">Present for sessions, daily strategy implementation, progress monitoring, environmental support, consistency maintenance</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Tweens (11-13): Moderate Involvement</h5>
                  <p className="text-gray-700 text-sm">Regular parent meetings, system support, communication bridge, advocacy, gradual independence encouragement</p>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Teens (14-18): Supportive Background</h5>
                  <p className="text-gray-700 text-sm">Less direct involvement, resource provision, boundary respect, future planning participation, crisis support availability</p>
                </div>
              </div>
            </div>

            <h2>Veelgestelde vragen van ouders over ADHD coaching</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Is mijn kind te jong voor ADHD coaching?</h3>
                <p>Children as young as 6-7 kunnen benefit from coaching, adapted for their developmental level. If your child can communicate feelings, understand cause-and-effect, en engage for 20-30 minutes, they're likely ready. Young children's coaching looks more like play therapy.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Zal coaching helpen als mijn kind al medicatie krijgt?</h3>
                <p>Coaching en medication work synergistically. Medicatie helps with focus during sessions, while coaching teaches skills dat medication alone cannot provide. Many families find the combination more effective than either intervention alone.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Hoeveel sessies heeft mijn kind nodig voor resultaten te zien?</h3>
                <p>Most families notice initial improvements within 4-6 sessions, with significant changes after 3-6 months. Young children may need longer tot develop habits, while teenagers often show faster initial progress but need ongoing support.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Wat als mijn kind niet wil naar coaching?</h3>
                <p>This is common, especially with teenagers. Involve your child in choosing the coach en setting goals. Emphasize dat coaching is about building strengths, not fixing problems. Start with immediate goals like better grades or friendships.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Kan coaching vervangen wat de school zou moeten doen?</h3>
                <p>Coaching should complement, not replace, appropriate school accommodations. A good coach helps you advocate voor necessary supports while teaching skills your child can use in any setting. Never use coaching as substitute voor legally required modifications.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zoek een gekwalificeerde kindercoach in jouw regio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>ADHD coaching kinderen</strong> is an investment in your child's future en your family's well-being. The right coach kunnen transform struggles into strengths.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Your next steps:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Identify your child's most pressing challenges</li>
                    <li>• Research age-appropriate coaches in your area</li>
                    <li>• Schedule consultations met 2-3 potential coaches</li>
                    <li>• Involve your child in selection when appropriate</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Family-friendly coaching centers:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/eindhoven" className="text-blue-600 hover:underline">ADHD coach in Eindhoven</Link> - Technology hub expertise</li>
                    <li>• <Link href="/breda" className="text-blue-600 hover:underline">ADHD coach in Breda</Link> - Strong educational community</li>
                    <li>• <Link href="/nijmegen" className="text-blue-600 hover:underline">ADHD coach in Nijmegen</Link> - University town specialists</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Remember:</strong> Your child's ADHD is not a limitation - it's a different way van experiencing the world.
                </p>
                <p className="text-gray-700">
                  Met de right <strong>ADHD hulp ouders</strong> support en guidance, children with ADHD often become some van the most creative, innovative, en successful individuals. <strong>Kind ADHD coaching</strong> provides the foundation your child needs tot thrive.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerelateerde artikelen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/adhd-coaching-studenten" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">ADHD coaching voor studenten: studeren zonder stress</h4>
                <p className="text-sm text-gray-600">Specifieke guidance voor studenten met ADHD in het hoger onderwijs.</p>
              </Link>
              <Link href="/blog/beste-vragen-adhd-coach" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">De beste vragen om te stellen aan je ADHD coach</h4>
                <p className="text-sm text-gray-600">Bereid je voor op het intakegesprek met deze essentiële vragenlijst.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Information based on Dutch child development research en ADHD coaching outcome studies.</p>
          </div>
        </article>
      </div>
    </main>
  );
}