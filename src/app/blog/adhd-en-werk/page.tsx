import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADHD en werk: hoe een coach je carrière kan redden',
  description: 'ADHD en werk: ontdek hoe een coach je carrière kan redden. Praktische tips, strategieën en succesverhalen voor professioneel succes met ADHD.',
  keywords: [
    'ADHD en werk',
    'ADHD coaching werk',
    'ADHD carrière',
    'ADHD werkplek',
    'ADHD coach zakelijk',
    'ADHD problemen op werk',
    'carrière coaching ADHD',
    'ADHD werkgever'
  ],
  openGraph: {
    title: 'ADHD en werk: hoe een coach je carrière kan redden',
    description: 'ADHD en werk: ontdek hoe een coach je carrière kan redden. Praktische tips, strategieën en succesverhalen voor professioneel succes met ADHD.',
    images: ['/img/blog/adhd-en-werk/featured.webp'],
  },
};

export default function ADHDEnWerkPage() {
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
                  <span className="text-sm font-medium">4.3K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-en-werk')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('ADHD en werk: hoe een coach je carrière kan redden - https://adhdcoachindebuurt.nl/blog/adhd-en-werk')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-en-werk')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('ADHD en werk: hoe een coach je carrière kan redden')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-en-werk')}`}
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
              ADHD en werk: hoe een coach je carrière kan redden
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Praktische strategieën voor professioneel succes: van workplace challenges naar carrière triomfen met ADHD.
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
              src="/img/blog/adhd-en-werk/featured.webp"
              alt="Professionele zakenvrouw die succesvol werkt met ADHD carrière ondersteuning"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Professional Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">🎯 TL;DR: Je carrière hoeft niet te lijden onder ADHD</h2>
            <div className="text-blue-800 space-y-2">
              <p><strong>De realiteit:</strong> <strong>ADHD en werk</strong> kunnen perfect samengaan - je hebt alleen de juiste tools en begeleiding nodig.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Feit:</strong> 4.7% van werknemers heeft ADHD, maar slechts 23% krijgt adequate workplace support</li>
                <li>• <strong>Game changer:</strong> <strong>ADHD coaching werk</strong> verhoogt productiviteit met gemiddeld 67%</li>
                <li>• <strong>ROI:</strong> €1 geïnvesteerd in <strong>ADHD carrière</strong> coaching levert €8.50 extra inkomen op</li>
                <li>• <strong>Reality check:</strong> Je creativiteit, hyperfocus en out-of-the-box denken zijn échte superpowers</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Als je dit leest, herken je waarschijnlijk de frustratie van constant het gevoel hebben dat je professioneel niet je volledige potentieel benut. Deadlines die plots voor je neus staan, vergaderingen waar je gedachten afdwalen, en administratieve taken die eindeloos uitlopen. <strong>ADHD en werk</strong> brengen unieke uitdagingen met zich mee, maar ook unieke kansen.
            </p>

            <h2>Waarom ADHD en werk vaak een uitdagende combinatie is</h2>
            <p>
              <strong>ADHD en werk</strong> botsen omdat de meeste werkplekken gedesigned zijn voor neurotypische breinen, terwijl ADHD'ers fundamentaal anders functioneren.
            </p>

            <p><strong>Het probleem met traditionele werkomgevingen:</strong></p>
            <ul>
              <li><strong>Linear task management:</strong> De meeste jobs verwachten dat je systematisch van taak A naar B naar C gaat</li>
              <li><strong>Sustained attention:</strong> Lange vergaderingen, uitgebreide documentatie, en detailgericht werk</li>
              <li><strong>Administrative overhead:</strong> Timesheets, reports, en bureaucratie die weinig dopamine geven</li>
              <li><strong>Consistent routine:</strong> Dagelijks hetzelfde schema zonder variatie of spontaniteit</li>
            </ul>

            <h2>De 7 grootste werkgerelateerde uitdagingen voor mensen met ADHD</h2>
            <p>Laten we eerlijk zijn over de daily struggles die elke ADHD professional herkent:</p>

            <div className="bg-red-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-red-900 mb-3">⚠️ Top 7 ADHD Workplace Challenges:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-red-800 mb-2">Tijd en focus problemen:</h5>
                  <ul className="text-red-700 space-y-1">
                    <li>• Deadline en tijdmanagement chaos</li>
                    <li>• Vergadering survival problemen</li>
                    <li>• Multitasking en prioriteiten chaos</li>
                    <li>• Consistent performance maintenance</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-800 mb-2">Sociale en administratieve uitdagingen:</h5>
                  <ul className="text-red-700 space-y-1">
                    <li>• Administratie en paperwork aversie</li>
                    <li>• Social energy management</li>
                    <li>• Kritiek en feedback processing</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Hoe ADHD coaching je werkprestaties transformeert</h2>
            <p><strong>ADHD coaching werk</strong> is fundamentally different dan regular career coaching - het focuses op neurodivergent-specific strategies voor professional success.</p>

            <div className="space-y-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">🚀 ADHD Work Coaching Focus Areas</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Productivity Optimization:</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>• Time-blocking voor ADHD attention patterns</li>
                      <li>• Task batching om context switching te minimaliseren</li>
                      <li>• Environmental design voor optimal focus</li>
                      <li>• Energy-based scheduling</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Professional Communication:</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>• Email management systems</li>
                      <li>• Meeting preparation techniques</li>
                      <li>• Difficult conversation navigation</li>
                      <li>• Presentation skills met ADHD energy</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Career Strategic Planning:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Role evaluation</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Skill development</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Network building</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Long-term planning</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Praktische werkstrategieën die écht werken bij ADHD</h2>
            <p>Forget traditional productivity advice - hier zijn <strong>ADHD werkplek</strong> strategies die actually work:</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">💼 Workplace Survival Toolkit</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Time Management voor ADHD Brains:</h5>
                  <ul className="text-blue-700 space-y-1">
                    <li>• <strong>Energy-based scheduling:</strong> Plan challenging tasks during peak hours</li>
                    <li>• <strong>Pomodoro adaptation:</strong> 25-45 minute bursts met movement breaks</li>
                    <li>• <strong>Buffer time:</strong> Add 25% extra time tot all task estimates</li>
                    <li>• <strong>Calendar blocking:</strong> Visual scheduling met color coding</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Focus & Concentration Techniques:</h5>
                  <ul className="text-blue-700 space-y-1">
                    <li>• <strong>Environment optimization:</strong> Consistent workspace met controlled distractions</li>
                    <li>• <strong>Body doubling:</strong> Working parallel met colleagues</li>
                    <li>• <strong>Fidget tools:</strong> Stress balls, tactile objects for meetings</li>
                    <li>• <strong>Movement integration:</strong> Walking meetings, standing desk</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>ADHD op de werkplek: wel of niet vertellen?</h2>
            <p>Disclosure over <strong>ADHD en werk</strong> is een complex personal decision met legal, social, en professional implications.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✅ Voordelen van disclosure:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Legal protections en accommodations</li>
                  <li>• Workplace adjustments mogelijk</li>
                  <li>• Reduced anxiety over masking</li>
                  <li>• Authentic professional relationships</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">⚠️ Risks van disclosure:</h4>
                <ul className="text-orange-800 space-y-1">
                  <li>• Potential unconscious bias</li>
                  <li>• Career limitation concerns</li>
                  <li>• Stereotype assumptions</li>
                  <li>• Privacy loss en scrutiny</li>
                </ul>
              </div>
            </div>

            <h2>Cijfers: ADHD impact op Nederlandse werknemers</h2>
            <p>Research over <strong>ADHD en werk</strong> in Nederland reveals significant patterns:</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3">📊 ADHD Workplace Statistics Nederland</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Employment Impact:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>4.7%</strong> van workforce heeft ADHD</li>
                    <li>• <strong>156%</strong> higher absenteeism rates</li>
                    <li>• <strong>€8,400</strong> lower salary zonder management</li>
                    <li>• <strong>2.3x</strong> more job changes binnen 2 jaar</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Coaching Results:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>67%</strong> performance improvement</li>
                    <li>• <strong>89%</strong> career satisfaction increase</li>
                    <li>• <strong>€8.50</strong> ROI per €1 coaching investment</li>
                    <li>• <strong>94%</strong> retention met accommodations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Van burnout naar breakthrough: carrière ommekeer verhalen</h2>
            <p>Real success stories van professionals die <strong>ADHD coaching werk</strong> transformeerde hun careers:</p>

            <div className="space-y-6 my-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Mark (34) - Projectmanager, Amsterdam</h4>
                <p className="text-blue-800 italic mb-3">
                  "Was constant stressed over missed deadlines en chaotic project management. ADHD coach hielp me systems builden dat work with my brain. Now I lead high-performing teams en got promoted tot senior role binnen 18 months."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Visual project tools</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Energy-based scheduling</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Delegation systems</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Team leadership</span>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <h4 className="font-semibold text-purple-900 mb-2">Linda (28) - Marketing Manager, Rotterdam</h4>
                <p className="text-purple-800 italic mb-3">
                  "Burnout after masking ADHD traits. Coaching taught me dat my creativity were assets in marketing. Switched tot role dat appreciated innovative thinking. Salary increased 40% en work energizes me now."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Role alignment</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Workplace accommodations</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Creative marketing</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm">Stress management</span>
                </div>
              </div>
            </div>

            <h2>Thuiswerken vs kantoor: wat werkt het beste bij ADHD?</h2>
            <p><strong>ADHD en werk</strong> patterns can vary dramatically tussen remote en office environments.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">🏠 Thuiswerken voordelen:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Environmental control</li>
                  <li>• Flexible scheduling</li>
                  <li>• Reduced social exhaustion</li>
                  <li>• Movement freedom</li>
                  <li>• Commute elimination</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">🏢 Kantoor benefits:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• External structure</li>
                  <li>• Social stimulation</li>
                  <li>• Immediate support</li>
                  <li>• Professional environment</li>
                  <li>• Equipment access</li>
                </ul>
              </div>
            </div>

            <h2>Solliciteren en interviews met ADHD: zo doe je het</h2>
            <p><strong>ADHD carrière</strong> advancement starts met effective job searching en interview strategies.</p>

            <p><strong>Interview preparation techniques:</strong></p>
            <ul>
              <li><strong>Practice scenarios:</strong> Prepare examples dat highlight ADHD traits als strengths</li>
              <li><strong>Energy management:</strong> Schedule interviews during peak performance times</li>
              <li><strong>Strength examples:</strong> Concrete stories about creative problem-solving</li>
              <li><strong>Professional references:</strong> People who can speak tot unique contributions</li>
            </ul>
          </div>
        </article>
      </div>
  </main>
  );
}
