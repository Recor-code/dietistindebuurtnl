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
                  <span className="text-sm font-medium">3.4K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-kinderen-jongeren')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('ADHD coaching voor kinderen en jongeren: wat ouders moeten weten - https://adhdcoachindebuurt.nl/blog/adhd-coaching-kinderen-jongeren')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-kinderen-jongeren')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('ADHD coaching voor kinderen en jongeren: wat ouders moeten weten')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-kinderen-jongeren')}`}
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

                <div className="ml-4">
                  <Image
                    src="/relax-plus-banner.png"
                    alt="RELAX ADHD ondersteuning"
                    width={120}
                    height={80}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
