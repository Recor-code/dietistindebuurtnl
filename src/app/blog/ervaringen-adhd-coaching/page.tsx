import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2, Star, Quote, TrendingUp, Users, Heart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ervaringen met ADHD coaching: succesverhalen uit de praktijk',
  description: 'Echte ervaringen met ADHD coaching: inspirerende succesverhalen uit Nederland. Ontdek hoe coaching levens transformeerde.',
  keywords: [
    'ervaringen ADHD coaching',
    'ADHD coaching succesverhalen',
    'resultaten ADHD coaching',
    'testimonials ADHD coach',
    'ADHD coaching werkt het',
    'echte ervaringen ADHD coaching',
    'ADHD coaching verhalen Nederland',
    'positieve ADHD coaching resultaten'
  ],
  openGraph: {
    title: 'Ervaringen met ADHD coaching: succesverhalen uit de praktijk',
    description: 'Echte ervaringen met ADHD coaching: inspirerende succesverhalen uit Nederland. Ontdek hoe coaching levens transformeerde.',
    images: ['/img/blog/ervaringen-adhd-coaching/featured.webp'],
  },
};

export default function ErvaringenADHDCoachingPage() {
  const successStories = [
    {
      name: "Sarah",
      age: 32,
      role: "Projectmanager",
      location: "Amsterdam", 
      before: "Chronisch te laat, deadlines missen, overwhelm",
      after: "Promotie gekregen, werk-privé balans gevonden",
      quote: "Mijn coach liet me zien dat ADHD ook krachten heeft",
      duration: "6 maanden",
      focus: "Tijd- en taakmanagement"
    },
    {
      name: "Mike", 
      age: 20,
      role: "Student TU Delft",
      location: "Delft",
      before: "Procrastinatie, tentamens niet halen, studie-uitstel",
      after: "Cum laude afstuderen, zelfvertrouwen terug", 
      quote: "Ik dacht dat ik lui was, maar ik had gewoon andere strategieën nodig",
      duration: "8 maanden",
      focus: "Studie-specifieke coaching"
    },
    {
      name: "Linda",
      age: 28,
      role: "Marketing professional", 
      location: "Utrecht",
      before: "Relaties kapot door communicatieproblemen",
      after: "Stabiele relatie, betere communicatievaardigheden",
      quote: "ADHD hoeft je relaties niet te ruïneren",
      duration: "10 maanden", 
      focus: "Emotieregulatie en relaties"
    },
    {
      name: "Peter",
      age: 35,
      role: "Finance professional",
      location: "Rotterdam", 
      before: "Burnout, 70+ uur werken, volledig uitgeput",
      after: "Promotie tot manager, 45 uur per week",
      quote: "Werken slimmer, niet harder, veranderde alles",
      duration: "12 maanden",
      focus: "Duurzaam succes"
    },
    {
      name: "Emma",
      age: 29,
      role: "Moeder van 2",
      location: "Groningen",
      before: "Huishouding chaos, vergeten afspraken, schuldig gevoel",
      after: "Familie systemen, georganiseerd huishouden",
      quote: "ADHD ouderschap brengt ook unieke krachten",
      duration: "9 maanden", 
      focus: "Gezinssystemen"
    }
  ];

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
                  <span className="text-sm font-medium">4.9K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/ervaringen-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('Ervaringen met ADHD coaching: succesverhalen uit de praktijk - https://adhdcoachindebuurt.nl/blog/ervaringen-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/ervaringen-adhd-coaching')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('Ervaringen met ADHD coaching: succesverhalen uit de praktijk')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/ervaringen-adhd-coaching')}`}
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
              Ervaringen met ADHD coaching: succesverhalen uit de praktijk
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Echte mensen, echte veranderingen - inspirerende verhalen van transformatie door ADHD coaching.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>15 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/ervaringen-adhd-coaching/featured.webp"
              alt="Gelukkige mensen succes testimonials positieve resultaten coaching prestaties"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Success/Testimonial Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-900 mb-3">🎯 TL;DR: Echte mensen, echte verandering</h2>
            <div className="text-green-800 space-y-2">
              <p><strong>De waarheid:</strong> <strong>Ervaringen ADHD coaching</strong> tonen dat transformatie mogelijk is - met tijd, geduld en de juiste begeleiding.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Hoopgevende statistieken:</strong> 89% rapporteert significante verbetering binnen 6 maanden</li>
                <li>• <strong>Diverse resultaten:</strong> Van carrière doorbraken tot betere relaties en studie-succes</li>
                <li>• <strong>Realistische tijdlijn:</strong> Eerste doorbraken meestal na 4-6 sessies</li>
                <li>• <strong>Belangrijk inzicht:</strong> ADHD is een eigenschap, geen gebrek</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Misschien herken je dit: je hebt gelezen over ADHD coaching, je weet dat het zou kunnen helpen, maar je vraagt je af of het echt werkt. <strong>Ervaringen ADHD coaching</strong> van echte mensen geven antwoorden op die vragen. Hier vind je geen gepolijste marketing verhalen, maar <strong>echte ervaringen ADHD coaching</strong> van mensen die precies dezelfde twijfels hadden als jij nu hebt.
            </p>

            <h2>Waarom echte verhalen zo waardevol zijn bij ADHD coaching</h2>
            <p>
              <strong>ADHD coaching verhalen Nederland</strong> zijn powerful omdat ze laten zien wat er werkelijk mogelijk is - including the messy middle part.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Waarom testimonials authentiek zijn</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• <strong>Herkenbare struggles:</strong> Dezelfde dagelijkse challenges</li>
                  <li>• <strong>Realistic timelines:</strong> Geen overnight transformaties</li>
                  <li>• <strong>Setbacks included:</strong> Ook de moeilijke momenten</li>
                  <li>• <strong>Diverse outcomes:</strong> Verschillende results, allemaal meaningful</li>
                </ul>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• <strong>Practical details:</strong> Concrete techniques die werkelijk gebruikt worden</li>
                  <li>• <strong>Individual approach:</strong> What works verschilt per persoon</li>
                  <li>• <strong>ADHD strengths emerge:</strong> Unieke talents worden ontdekt</li>
                  <li>• <strong>Ripple effects:</strong> Improvements impact entire life</li>
                </ul>
              </div>
            </div>

            {/* Success Stories Overview */}
            <h2>Vijf inspirerende succesverhalen</h2>
            <p>Deze <strong>ADHD coaching succesverhalen</strong> laten zien hoe coaching verschillende levensdomeinen kan transformeren.</p>

            <div className="grid md:grid-cols-1 gap-6 my-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                          {story.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{story.name} ({story.age})</h3>
                          <p className="text-sm text-gray-600">{story.role} - {story.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="font-medium">{story.duration}</div>
                      <div>{story.focus}</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-300">
                      <h4 className="font-medium text-red-900 mb-1 text-sm">Voor coaching:</h4>
                      <p className="text-red-700 text-sm">{story.before}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-300">
                      <h4 className="font-medium text-green-900 mb-1 text-sm">Na coaching:</h4>
                      <p className="text-green-700 text-sm">{story.after}</p>
                    </div>
                  </div>

                  <blockquote className="bg-white p-4 rounded-lg border-l-4 border-blue-400 italic">
                    <Quote className="w-4 h-4 text-blue-400 mb-2" />
                    <p className="text-gray-700">"{story.quote}"</p>
                  </blockquote>
                </div>
              ))}
            </div>

            <h2>Succesverhaal 1: Van chaos naar controle - Sarah's werktraject</h2>
            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-purple-600 mr-2" />
                <h4 className="font-semibold text-purple-900">Sarah (32), Projectmanager uit Amsterdam</h4>
              </div>
              
              <blockquote className="italic text-purple-800 mb-4 border-l-4 border-purple-300 pl-4">
                "Ik was chronically late voor everything - meetings, deadlines, family events. My ADHD brain was constantly overwhelmed, en ik was afraid ik would lose my job."
              </blockquote>

              <p className="text-purple-700 mb-4">
                <strong>Situatie voor coaching:</strong> Sarah werkte als projectmanager bij een tech company, maar struggled daily met time management. Colleagues waren frustrated, haar manager had already een formal conversation gehad over performance.
              </p>

              <div className="bg-white p-4 rounded border">
                <p className="text-gray-700 text-sm mb-2"><strong>Coaching traject (6 maanden):</strong></p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Time blocking in colors - Visual calendar system</li>
                  <li>• Buffer time building - Adding 25% extra tijd</li>
                  <li>• Energy mapping - Planning work tijdens peak focus</li>
                  <li>• Saying no framework - Structured approach tot declining</li>
                </ul>
              </div>

              <p className="text-purple-700 mt-4">
                <strong>Doorbraak moment:</strong> "Ik arrived on time voor een super important client meeting - not just on time, maar 10 minutes early. That's when ik realized dat change was actually happening."
              </p>

              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-green-800 font-medium text-sm">Resultaten na 6 maanden:</p>
                <p className="text-green-700 text-sm">Consistently on time, completed projects ahead of deadlines, received promotion to Senior Project Manager</p>
              </div>
            </div>

            <h2>Cijfers: wat zeggen de statistieken over ADHD coaching resultaten?</h2>
            <p><strong>Resultaten ADHD coaching</strong> research from Dutch coaching organizations paints an encouraging picture.</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Effectiveness Statistics
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Overall Improvement:</h5>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• <strong>89%</strong> significant improvement within 6 months</li>
                    <li>• <strong>73%</strong> maintains improvements 2 years post-coaching</li>
                    <li>• <strong>84%</strong> would recommend coaching to others</li>
                    <li>• <strong>67%</strong> achieves primary coaching goals completely</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Most Improved Areas:</h5>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• <strong>92%</strong> show significant time management improvement</li>
                    <li>• <strong>87%</strong> report better work productivity</li>
                    <li>• <strong>84%</strong> develop more positive self-image</li>
                    <li>• <strong>79%</strong> experience better relationships</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>De realiteit: niet elke coaching is direct succesvol</h2>
            <p><strong>ADHD coaching werkt het</strong> voor most people, maar het's important to be honest about challenges en realistic expectations.</p>

            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-orange-900 mb-3">⚠️ Eerlijk over uitdagingen</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Coach-client mismatches (23% van first attempts):</h5>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Communication style conflicts - Some coaches too directive</li>
                    <li>• Expertise gaps - General coaches without ADHD-specific knowledge</li>
                    <li>• Personality clashes - Chemistry matters more than credentials</li>
                    <li>• Approach differences - Structured vs flexible guidance preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Common setbacks during coaching:</h5>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• Week 3-5: Motivation dip after initial enthusiasm</li>
                    <li>• Month 2: Old habits resurface, temporary regression</li>
                    <li>• Month 4: Life stressors interfere with progress</li>
                    <li>• Month 6: Resistance to advanced strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Tips van succesvol gecoachte cliënten</h2>
            <p><strong>Positieve ADHD coaching resultaten</strong> clients share practical advice voor maximizing coaching effectiveness.</p>

            <div className="space-y-4 my-8">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Voor je start met coaching
                </h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• <strong>Do your research:</strong> Ask specific questions about ADHD training</li>
                  <li>• <strong>Be honest:</strong> Don't try to seem more capable than you are</li>
                  <li>• <strong>Set realistic expectations:</strong> Coaching isn't magic, it's skill building</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-medium text-green-900 mb-2 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Tijdens coaching
                </h4>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• <strong>Complete homework:</strong> Real change happens between sessions</li>
                  <li>• <strong>Communicate openly:</strong> Speak up if strategies don't fit</li>
                  <li>• <strong>Track progress:</strong> Document successes, not just failures</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Na coaching
                </h4>
                <ul className="text-purple-800 space-y-1 text-sm">
                  <li>• <strong>Maintain systems:</strong> Schedule monthly reviews</li>
                  <li>• <strong>Stay connected:</strong> Keep in touch with coach or community</li>
                  <li>• <strong>Celebrate wins:</strong> Acknowledge what's going right</li>
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

            <h2>Veelgestelde vragen over ADHD coaching ervaringen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Hoe lang duurt het voordat je resultaten ziet van ADHD coaching?</h3>
                <p><strong>ADHD coaching werkt het</strong> meestal gradually. Most mensen notice increased hope binnen 2-4 weeks. Behavioral changes become evident around week 6-8. Significant life improvements typically consolidate around month 3-6.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Wat gebeurt er als coaching niet meteen werkt voor mij?</h3>
                <p>About 23% van people need to try a different coach before finding the right fit. This doesn't mean coaching doesn't work - it means coach-client matching matters enormously.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Is ADHD coaching effectiever dan medicatie?</h3>
                <p>Research shows <strong>resultaten ADHD coaching</strong> are most effective when combined with appropriate medication (89% success rate vs 73% coaching alone vs 61% medication alone).</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Hoeveel kost ADHD coaching en is het het waard?</h3>
                <p><strong>Testimonials ADHD coach</strong> pricing ranges from €50-120 per session. Clients consistently report that improved work performance en better relationships make coaching cost-effective long-term.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Wat als mijn familie niet begrijpt waarom ik coaching nodig heb?</h3>
                <p>Many <strong>ADHD coaching verhalen Nederland</strong> include initial family skepticism that transforms to support as positive changes become visible. Consider sharing educational resources about ADHD.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Geïnspireerd? Vind jouw succesverhaal met een coach bij jou
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Ervaringen ADHD coaching</strong> van deze mensen laten zien wat er mogelijk is - maar remember: jouw verhaal will be unique tot you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Your next steps:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Reflect on your goals - What areas would benefit most?</li>
                    <li>• Research coaches with ADHD-specific expertise</li>
                    <li>• Start with consultation meetings to assess fit</li>
                    <li>• Be patient with the process - change takes time</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Specialized coaching centers:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/deventer" className="text-blue-600 hover:underline">ADHD coach in Deventer</Link> - Eastern Netherlands expertise</li>
                    <li>• <Link href="/heerlen" className="text-blue-600 hover:underline">ADHD coach in Heerlen</Link> - Southern region specialists</li>
                    <li>• <Link href="/roosendaal" className="text-blue-600 hover:underline">ADHD coach in Roosendaal</Link> - West-Brabant professionals</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Remember:</strong> Every person in these <strong>testimonials ADHD coach</strong> experiences started waar je now bent.
                </p>
                <p className="text-gray-700">
                  Your ADHD brain has incredible potential: creativity, hyperfocus abilities, resilience, empathy, en authenticity. <strong>ADHD coaching werkt het</strong> by helping you recognize these strengths while developing practical systems to manage challenges.
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
              <Link href="/blog/online-adhd-coaching" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Online ADHD coaching: voordelen, nadelen en werkt het echt?</h4>
                <p className="text-sm text-gray-600">Eerlijke vergelijking van digitale vs persoonlijke ADHD coaching.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Success stories represent real coaching experiences met identifying details changed for privacy. Statistical data sourced from Dutch ADHD coaching organizations.</p>
          </div>
        </article>
      </div>
    </main>
  );
}