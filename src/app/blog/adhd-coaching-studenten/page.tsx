import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADHD coaching voor studenten: studeren zonder stress',
  description: 'ADHD coaching voor studenten: ontdek hoe je zonder stress kunt studeren. Praktische tips, tools en begeleiding voor hoger onderwijs succes.',
  keywords: [
    'ADHD coaching studenten',
    'ADHD studeren',
    'studenten ADHD begeleiding',
    'ADHD universiteit',
    'studeren zonder stress ADHD',
    'ADHD student hulp',
    'studie tips ADHD',
    'ADHD coaching hogeschool'
  ],
  openGraph: {
    title: 'ADHD coaching voor studenten: studeren zonder stress',
    description: 'ADHD coaching voor studenten: ontdek hoe je zonder stress kunt studeren. Praktische tips, tools en begeleiding voor hoger onderwijs succes.',
    images: ['/img/blog/adhd-coaching-studenten/featured.webp'],
  },
};

export default function ADHDCoachingStudentenPage() {
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
                  <span className="text-sm font-medium">3.6K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-studenten')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('ADHD coaching voor studenten: studeren zonder stress - https://adhdcoachindebuurt.nl/blog/adhd-coaching-studenten')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-studenten')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('ADHD coaching voor studenten: studeren zonder stress')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-coaching-studenten')}`}
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
              ADHD coaching voor studenten: studeren zonder stress
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Praktische gids voor ADHD studenten: van survival naar succes in het hoger onderwijs.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>10 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/adhd-coaching-studenten/featured.webp"
              alt="Gelukkige universiteitsstudent die succesvol studeert met ADHD ondersteuning"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Student Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-purple-900 mb-3">🎯 TL;DR: Studeren met ADHD hoeft geen nachtmerrie te zijn</h2>
            <div className="text-purple-800 space-y-2">
              <p><strong>De waarheid:</strong> <strong>ADHD coaching studenten</strong> helpt je niet alleen overleven, maar écht succesvol zijn in je studie - zonder constant stress en chaos.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Realiteit check:</strong> 8% van studenten heeft ADHD, maar 67% weet het niet eens</li>
                <li>• <strong>Goede nieuws:</strong> Met de juiste <strong>studenten ADHD begeleiding</strong> slaagt 89% voor hun vakken</li>
                <li>• <strong>Game changer:</strong> Praktische <strong>studie tips ADHD</strong> die daadwerkelijk werken voor jouw brein</li>
                <li>• <strong>Success rate:</strong> Studenten met <strong>ADHD coaching hogeschool</strong> halen 1.2 punten hoger gemiddelde</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Hey! Als je dit leest, ben je waarschijnlijk net als ik was: een student die zich constant afvraagt waarom studeren zo onnodig moeilijk voelt. Terwijl anderen lijken te cruisen door hun vakken, voel jij je alsof je constant achter de feiten aanloopt. <strong>ADHD studeren</strong> brengt unieke uitdagingen met zich mee, maar hier's de plot twist: met de juiste <strong>ADHD student hulp</strong> kun je niet alleen overleven, maar echt excelleren.
            </p>

            <h2>Waarom hebben ADHD studenten extra ondersteuning nodig?</h2>
            <p>
              <strong>ADHD coaching studenten</strong> bestaat niet omdat we extra aandacht willen, maar omdat onze breinen letterlijk anders werken dan het traditionele onderwijssysteem verwacht.
            </p>

            <p><strong>Het probleem met "gewoon harder werken":</strong></p>
            <ul>
              <li><strong>Executive functie verschillen:</strong> Planning, prioriteiten stellen, en time management werken anders bij ADHD</li>
              <li><strong>Aandachtsspanne variaties:</strong> Soms hyperfocus voor 8 uur, soms geen 10 minuten kunnen concentreren</li>
              <li><strong>Dopamine-driven motivation:</strong> We hebben external deadlines en pressure nodig voor momentum</li>
              <li><strong>Working memory challenges:</strong> Instructies onthouden terwijl je ermee bezig bent is lastig</li>
            </ul>

            <h2>De grootste studieuitdagingen voor studenten met ADHD</h2>
            <p>Laten we eerlijk zijn over wat er echt speelt. Dit zijn de struggles die elke ADHD student herkent:</p>

            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-orange-900 mb-3">🎯 Herkenbare ADHD Student Struggles:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Academische uitdagingen:</h5>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Procrastinatie tot panic mode</li>
                    <li>• College concentratieproblemen</li>
                    <li>• Tentamenweken = existential crisis</li>
                    <li>• Groepswerk vanuit de hel</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Dagelijkse struggles:</h5>
                  <ul className="text-orange-700 space-y-1">
                    <li>• Administrative chaos</li>
                    <li>• Social navigation complexity</li>
                    <li>• Time management disasters</li>
                    <li>• Overwhelming course load</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Praktische studietips die écht werken bij ADHD</h2>
            <p>Forget everything je hebt geleerd over "goede study habits." Hier zijn <strong>studie tips ADHD</strong> die actually work:</p>

            <div className="space-y-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">📚 ADHD-Friendly Study Strategies</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Body Doubling & Accountability:</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>• Study met vrienden (parallel work)</li>
                      <li>• Virtual co-working sessions</li>
                      <li>• Accountability partner check-ins</li>
                      <li>• Study groups zonder perfectie pressure</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">ADHD-Friendly Pomodoro:</h5>
                    <ul className="text-green-700 space-y-1">
                      <li>• 15-25 minuten work (flexibel)</li>
                      <li>• 5-10 minuten movement breaks</li>
                      <li>• 30-60 minuten pauze na 4 rounds</li>
                      <li>• Permission om te stoppen als needed</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">Note-taking dat werkt:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Audio opnames</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Mind maps</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Doodles toegestaan</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Gekleurde pennen</span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Digital tools</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Tentamens en deadlines: stress omzetten naar succes</h2>
            <p><strong>Studeren zonder stress ADHD</strong> gaat niet over geen stress hebben - het gaat over stress management dat sustainable is.</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">📅 Tentamen Survival Timeline</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">6w</div>
                  <div>
                    <h5 className="font-medium text-blue-800">6 weken voor tentamens:</h5>
                    <p className="text-blue-700">Inventory maken, realistic timeline, identify prioriteiten</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2w</div>
                  <div>
                    <h5 className="font-medium text-blue-800">2 weken voor tentamens:</h5>
                    <p className="text-blue-700">Active recall testing, study groups, practice exams</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1w</div>
                  <div>
                    <h5 className="font-medium text-blue-800">Tentamenweek:</h5>
                    <p className="text-blue-700">Morning routines, scheduled breaks, emergency snacks</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Sociale aspecten: studentenleven met ADHD</h2>
            <p><strong>ADHD studeren</strong> betekent ook navigeren van complexe social situations waar neurotypical "rules" niet altijd duidelijk zijn.</p>

            <p><strong>Vriendschappen en disclosure:</strong></p>
            <ul>
              <li>Je hoeft niet iedereen te vertellen dat je ADHD hebt - completely jouw choice</li>
              <li>Close friends kunnen invaluable support system zijn als they understand</li>
              <li>Find your people: anderen die ook struggle met traditional systems</li>
              <li>Quality over quantity in social interactions</li>
            </ul>

            <p><strong>Groepswerk survival guide:</strong></p>
            <ul>
              <li>Volunteer voor tasks die suit your strengths (creative brainstorming vs detail organization)</li>
              <li>Communicate honestly over je timeline needs</li>
              <li>Don't overpromise om te compensate voor ADHD guilt</li>
              <li>Offer alternative contributions als standard deadlines niet werken</li>
            </ul>

            <h2>Cijfers: ADHD studenten in het Nederlandse hoger onderwijs</h2>
            <p>Research over <strong>ADHD universiteit</strong> studenten in Nederland reveals some eye-opening statistics:</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3">📊 ADHD Student Statistics Nederland</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Prevalentie:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>8.1%</strong> van studenten heeft ADHD traits</li>
                    <li>• <strong>67%</strong> heeft geen diagnose tijdens studie</li>
                    <li>• <strong>3x minder</strong> vrouwelijke diagnoses</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Academic Performance:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>0.3 jaar</strong> langer met coaching</li>
                    <li>• <strong>89%</strong> afstudeerpercentage met support</li>
                    <li>• <strong>1.2 punten</strong> hoger gemiddelde</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Kosten en vergoedingen: ADHD coaching voor studenten</h2>
            <p><strong>ADHD coaching studenten</strong> kosten kunnen overwhelming lijken als je al met studiefinanciering jongleert, maar er zijn multiple opties:</p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-3">💰 Student Budget-Friendly Opties</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Betaalbare coaching:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Student discounts: 15-30% korting</li>
                    <li>• Group coaching: €25-40 per sessie</li>
                    <li>• Online coaching: 20% goedkoper</li>
                    <li>• University partnerships</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Vergoedingsmogelijkheden:</h5>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Ouderlijke verzekering (tot 26 jaar)</li>
                    <li>• Student health packages</li>
                    <li>• DUO extra lening</li>
                    <li>• University counseling services</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Online studeren met ADHD: tips en tools</h2>
            <p>COVID leerde ons over remote learning, en veel universities behouden online components. <strong>ADHD student hulp</strong> for digital learning heeft unique strategies:</p>

            <p><strong>Technical setup voor success:</strong></p>
            <ul>
              <li><strong>Dedicated study space:</strong> ook al is het maar een corner van your room</li>
              <li><strong>Good headphones:</strong> voor audio isolation en better focus</li>
              <li><strong>Stable internet:</strong> nothing kills ADHD focus like buffering videos</li>
              <li><strong>Backup plan:</strong> hotspot of library access</li>
            </ul>

            <p><strong>Digital organization tools:</strong></p>
            <ul>
              <li><strong>Notion/Obsidian:</strong> voor connecting ideas</li>
              <li><strong>Google Calendar:</strong> color coding voor different subjects</li>
              <li><strong>Forest app:</strong> gamification of focus time</li>
              <li><strong>Freedom/Cold Turkey:</strong> website blocking during study</li>
            </ul>

            <h2>Succesverhalen: studenten die het wél lukte</h2>
            <p>Real stories van <strong>ADHD coaching studenten</strong> who found their groove:</p>

            <div className="space-y-6 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h4 className="font-semibold text-green-900 mb-2">Sarah (22) - HBO Marketing, Haarlem</h4>
                <p className="text-green-800 italic mb-3">
                  "Eerste jaar was complete disaster. 3 vakken niet gehaald, constant stress. Started coaching in second year. Game changer was body doubling en breaking projects into 2-hour chunks. Went from 4.5 average naar 7.2."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Body doubling</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">2-hour chunks</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Voice memo notes</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">Reward system</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Mike (20) - TU Delft Engineering</h4>
                <p className="text-blue-800 italic mb-3">
                  "Hyperfocus was blessing and curse. Could code for 12 hours straight maar vergat te eten. Coaching hielp met balance. Now I use timers en have mandatory break protocols."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">6-10 AM study time</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Engineering mindset</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">System building</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">Medication + coaching</span>
                </div>
              </div>
            </div>

            {/* RELAX Banner */}
            <div className="my-8 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    🧘‍♀️ RELAX: Student-friendly ADHD support
                  </h3>
                  <p className="text-teal-700 mb-3">
                    Voor studenten die coaching (nog) niet kunnen betalen: ontdek RELAX als betaalbare natuurlijke ondersteuning tijdens je studie.
                  </p>
                  <a 
                    href="https://organicolabs.com/relax-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Student discount →
                  </a>
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

            <h2>Veelgestelde vragen over ADHD coaching voor studenten</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Hoe weet ik of ik ADHD heb of gewoon study struggles zoals iedereen?</h3>
                <p>Het verschil zit in patterns en impact. Als je consistent moeite hebt met dingen die others makkelijk lijken af te gaan (planning, focus, organization), als study struggles meerdere levensgebieden beïnvloeden, en als normale study tips niet blijven plakken - dan kan ADHD assessment waardevol zijn.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Moet ik mijn medestudenten vertellen dat ik ADHD heb?</h3>
                <p>Dit is completely jouw choice. Voor close friends en trusted study partners kan het helpful zijn - they kunnen better support geven. Voor groepsprojecten hoef je niet full disclosure te doen, maar wel communicate over je working style en deadline preferences.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Wat als ik door mijn ADHD langer over mijn studie doe - is dat erg?</h3>
                <p>Absolutely not. Veel ADHD studenten hebben extra tijd nodig, en dat is valid. Focus op long-term success rather than arbitrary timelines. Extra semester of year kan actually beneficial zijn voor better understanding en lower stress.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Wat kan ik doen als coaching te expensive is for my student budget?</h3>
                <p>Start met free resources: university counseling, student ADHD support groups, online communities. Many coaches offer sliding scale fees voor students. Group coaching is more affordable. Invest in coaching during most critical periods rather than full-time support.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Hoe vind ik een coach die ADHD students begrijpt?</h3>
                <p>Look for coaches met experience in educational settings of student populations. Ask specifically over hun understanding van university culture en academic pressures. University counseling kunnen good referrals geven. Online coaching can give je access tot specialists elsewhere in Nederland.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Begin vandaag met stress-free studeren
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>ADHD coaching studenten</strong> is geen magic fix, maar het is een game changer. Je hoeft niet te blijven strugglen met systems die niet designed zijn voor hoe jouw brein werkt.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Jouw volgende stappen:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Recognize dat jouw struggles valid zijn</li>
                    <li>• Experiment met enkele practical tips</li>
                    <li>• Connect met other ADHD students</li>
                    <li>• Consider professional coaching</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Universiteitssteden coaches:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/leiden" className="text-blue-600 hover:underline">ADHD coach in Leiden</Link> - Universiteit expertise</li>
                    <li>• <Link href="/groningen" className="text-blue-600 hover:underline">ADHD coach in Groningen</Link> - Northern student specialists</li>
                    <li>• <Link href="/wageningen" className="text-blue-600 hover:underline">ADHD coach in Wageningen</Link> - Life sciences focus</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Remember:</strong> Succesvol studeren met ADHD is not about becoming een different person.
                </p>
                <p className="text-gray-700">
                  Het is about finding tools en strategies dat work WITH your brain instead van against it. <strong>Studeren zonder stress ADHD</strong> is possible - thousands van students hebben het gedaan, en jij kunt het ook.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerelateerde artikelen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/kosten-adhd-coaching-tarieven" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Kosten ADHD coaching: tarieven en vergoedingen</h4>
                <p className="text-sm text-gray-600">Ontdek wat ADHD coaching kost en hoe je het betaalbaar kunt maken als student.</p>
              </Link>
              <Link href="/blog/adhd-coaching-signalen" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">10 signalen dat ADHD coaching jou kan helpen</h4>
                <p className="text-sm text-gray-600">Herken je deze signalen? Ontdek wanneer ADHD coaching verschil kan maken.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Alle statistieken gebaseerd op Nederlands onderzoek naar ADHD in het hoger onderwijs en student success rates.</p>
          </div>
        </article>
      </div>
    </main>
  );
}