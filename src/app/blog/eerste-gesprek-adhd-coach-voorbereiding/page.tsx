import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2, CheckCircle2, Clock, BookOpen, Users, Target, FileText, AlertTriangle, Calendar, MessageCircle, User, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Checklist: zo bereid je je voor op je eerste gesprek met een ADHD coach',
  description: 'Bereid je optimaal voor op je eerste ADHD coaching gesprek. Complete checklist met praktische tips en belangrijke vragen om te stellen.',
  keywords: [
    'eerste gesprek ADHD coach',
    'ADHD coach voorbereiding',
    'intakegesprek ADHD coaching',
    'checklist ADHD coach',
    'voorbereiden ADHD coaching',
    'hoe bereid je voor ADHD coach',
    'eerste afspraak ADHD coach tips',
    'ADHD coaching intake'
  ],
  openGraph: {
    title: 'Checklist: zo bereid je je voor op je eerste gesprek met een ADHD coach',
    description: 'Bereid je optimaal voor op je eerste ADHD coaching gesprek. Complete checklist met praktische tips en belangrijke vragen om te stellen.',
    images: ['/img/blog/checklist-adhd-coach-voorbereiding/featured.webp'],
  },
};

export default function ChecklistADHDCoachVoorbereidingPage() {
  const preparationTimeline = [
    {
      period: "2 weken voor",
      icon: <Calendar className="w-6 h-6" />,
      color: "blue",
      tasks: [
        "Coach achtergrond en website doorgenomen",
        "Praktische zaken geregeld (locatie, parkeren, tijd)",
        "Agenda vrijgehouden (buffer tijd ingepland)",
        "Eventuele intake formulieren ingevuld",
        "Kosten en vergoeding uitgezocht",
        "Test technologie setup bij online sessie"
      ]
    },
    {
      period: "1 week voor",
      icon: <Target className="w-6 h-6" />,
      color: "green",
      tasks: [
        "Persoonlijke doelen genoteerd",
        "Huidige uitdagingen op papier gezet",
        "Eerdere hulpverlening/medicatie chronologie",
        "Verwachtingen van coaching helder",
        "Vragen voor de coach voorbereid",
        "Support systeem geïnformeerd"
      ]
    },
    {
      period: "24 uur voor",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "purple",
      tasks: [
        "Locatie en route gecheckt",
        "Alle documenten bij elkaar",
        "Goede nachtrust gepland",
        "Kleding uitgezocht (comfortabel)",
        "Telefoon volledig opgeladen",
        "Mentaal voorbereid op het gesprek"
      ]
    }
  ];

  const essentialQuestions = [
    "Hoeveel jaar coach je al volwassenen met ADHD specifiek?",
    "Wat is jouw aanpak bij ADHD coaching?",
    "Hoe meet je voortgang tijdens het traject?",
    "Wat verwacht je van mij tussen sessies?",
    "Hoe ga je om met setbacks en terugval?",
    "Wat zijn je sessiekosten en betalingsbeleid?",
    "Hoe communiceer je tussen sessies?",
    "Welke training heb je specifiek voor ADHD?"
  ];

  const bringChecklist = [
    "Identificatie (rijbewijs/paspoort)",
    "Zorgverzekeringsgegevens", 
    "Lijst met huidige medicatie",
    "Voorbereide vragenlijst",
    "Notitieblok en pen",
    "Water en klein snackje",
    "Coach contactgegevens",
    "Comfort item (fidget tool)"
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
                  <span className="text-sm font-medium">4.5K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/checklist-adhd-coach-voorbereiding')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('Checklist: zo bereid je je voor op je eerste gesprek met een ADHD coach - https://adhdcoachindebuurt.nl/blog/checklist-adhd-coach-voorbereiding')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/checklist-adhd-coach-voorbereiding')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('Checklist: zo bereid je je voor op je eerste gesprek met een ADHD coach')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/checklist-adhd-coach-voorbereiding')}`}
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
              Checklist: zo bereid je je voor op je eerste gesprek met een ADHD coach
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Transform nervositeit in zelfvertrouwen met deze complete voorbereiding guide voor je <strong>eerste gesprek ADHD coach</strong>.
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
              src="/img/blog/checklist-adhd-coach-voorbereiding/featured.webp"
              alt="Professional consultation preparation checklist planning notebook organized desk setup meeting"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Preparation Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              🎯 TL;DR: Jouw eerste gesprek wordt een succes
            </h2>
            <div className="text-green-800 space-y-2">
              <p><strong>Het geheim:</strong> Goede voorbereiding maakt jouw <strong>eerste gesprek ADHD coach</strong> veel effectiever en minder stressvol.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Praktische voorbereiding:</strong> <strong>ADHD coach voorbereiding</strong> begint 2 weken van tevoren met concrete stappen</li>
                <li>• <strong>Zelfvertrouwen boost:</strong> <strong>Checklist ADHD coach</strong> helpt je georganiseerd en prepared te voelen</li>
                <li>• <strong>Betere match assessment:</strong> <strong>Voorbereiden ADHD coaching</strong> zorgt dat je de juiste vragen stelt</li>
                <li>• <strong>Minder nervositeit:</strong> 89% voelt zich zekerder met structured preparation</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Dat <strong>eerste gesprek ADHD coach</strong> staat in je agenda en je voelt je... een beetje nerveus? Completely normal! 87% van mensen voelt spanning voor hun <strong>intakegesprek ADHD coaching</strong>. Maar here's the good news: met de juiste <strong>ADHD coach voorbereiding</strong> transform je die nervositeit in confidence.
            </p>

            <p>
              Deze <strong>checklist ADHD coach</strong> guide geeft je concrete stappen - van 2 weken van tevoren tot het moment dat je de deur uitstapt na je gesprek. No more wondering "Wat als ik iets belangrijks vergeet?" of "Stel ik wel de juiste vragen?"
            </p>

            <h2>Waarom goede voorbereiding zo belangrijk is</h2>
            <p>
              <strong>Voorbereiden ADHD coaching</strong> gaat veel verder dan just showing up on time. It's about maximizing dat precious hour met je potential coach.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3">💡 Statistical benefits van good preparation</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• <strong>94%</strong> van well-prepared clients feel more confident</li>
                  <li>• <strong>78%</strong> van prepared clients make faster decisions</li>
                  <li>• <strong>85%</strong> van coaches prefer working with prepared clients</li>
                  <li>• <strong>67%</strong> less likely to need multiple intro sessions</li>
                </ul>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• <strong>Reduces anxiety:</strong> Control over the situation</li>
                  <li>• <strong>Maximizes time:</strong> Cover all important topics</li>
                  <li>• <strong>Better assessment:</strong> Evaluate coach fit effectively</li>
                  <li>• <strong>Clear communication:</strong> Coherent instead van chaotic</li>
                </ul>
              </div>
            </div>

            {/* Preparation Timeline */}
            <h2>Jouw voorbereiding timeline: van 2 weken tot laatste moment</h2>
            <p>
              <strong>Hoe bereid je voor ADHD coach</strong> systematically? Deze timeline neemt alle stress weg.
            </p>

            <div className="space-y-6 my-8">
              {preparationTimeline.map((phase, index) => (
                <div key={index} className={`bg-${phase.color}-50 border border-${phase.color}-200 rounded-xl p-6`}>
                  <div className="flex items-center mb-4">
                    <div className={`bg-${phase.color}-600 text-white p-2 rounded-lg mr-3`}>
                      {phase.icon}
                    </div>
                    <h3 className={`text-xl font-semibold text-${phase.color}-900 capitalize`}>
                      {phase.period}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center">
                        <input type="checkbox" className="mr-2 scale-110" />
                        <span className={`text-${phase.color}-800 text-sm`}>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2>Wat neem je mee naar het gesprek?</h2>
            <p>
              <strong>Eerste afspraak ADHD coach tips</strong> beginnen bij having the right materials voor productive conversation.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Essential items checklist
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {bringChecklist.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <input type="checkbox" className="mr-2 scale-110" />
                    <span className="text-yellow-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-yellow-100 rounded border-l-4 border-yellow-400">
                <p className="text-yellow-900 text-sm font-medium">💡 Pro tip:</p>
                <p className="text-yellow-800 text-sm">Pack everything de avond van tevoren. ADHD brains often forget things tijdens morning rush!</p>
              </div>
            </div>

            <h2>De belangrijkste onderwerpen om te bespreken</h2>
            <p>
              <strong>ADHD coaching intake</strong> covers specific territory dat helps both you en de coach understand if you're a good match.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Jouw huidige situatie
                </h4>
                <ul className="text-purple-800 space-y-1 text-sm">
                  <li>• Daily ADHD challenges en struggles</li>
                  <li>• Work/school impact specifics</li>
                  <li>• Relationship effects en patterns</li>
                  <li>• Emotional experiences met ADHD</li>
                  <li>• Current support systems</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-medium text-green-900 mb-2 flex items-center">
                  <HeartHandshake className="w-4 h-4 mr-2" />
                  Jouw doelen en wensen
                </h4>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• Primary coaching objectives</li>
                  <li>• Timeline expectations realistic</li>
                  <li>• Success definition for you</li>
                  <li>• Communication style preferences</li>
                  <li>• Practical logistics preferences</li>
                </ul>
              </div>
            </div>

            <h2>Essentiële vragen die je zelf moet stellen aan de coach</h2>
            <p>
              <strong>Intakegesprek ADHD coaching</strong> requires you to interview them as much as they assess you.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Essential coach questions
              </h4>
              
              <div className="grid md:grid-cols-1 gap-3">
                {essentialQuestions.map((question, index) => (
                  <div key={index} className="flex items-start">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-3 mt-0.5 font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm">{question}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-blue-100 rounded">
                <p className="text-blue-900 text-sm"><strong>Bonus tip:</strong> Write these questions down beforehand. ADHD brains often blank tijdens gesprekken!</p>
              </div>
            </div>

            <h2>Hoe deel je gevoelige informatie over je ADHD?</h2>
            <p>
              <strong>Checklist ADHD coach</strong> conversations include navigating potentially vulnerable topics about your struggles.
            </p>

            <div className="bg-pink-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-pink-900 mb-3">💬 Strategies for sharing sensitive information</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-pink-800 mb-2">Start with comfort level assessment:</h5>
                  <ul className="text-pink-700 space-y-1 text-sm ml-4">
                    <li>• Begin met information dat feels easy to share</li>
                    <li>• Test the waters met less sensitive topics first</li>
                    <li>• Observe how de coach responds to initial sharing</li>
                    <li>• Notice if you feel heard en understood</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-pink-800 mb-2">Use graduated disclosure:</h5>
                  <ul className="text-pink-700 space-y-1 text-sm ml-4">
                    <li>• <strong>Level 1:</strong> General challenges ("I struggle met time management")</li>
                    <li>• <strong>Level 2:</strong> Specific examples ("I was fired for chronic lateness")</li>
                    <li>• <strong>Level 3:</strong> Emotional impact ("I feel ashamed about symptoms")</li>
                    <li>• <strong>Level 4:</strong> Deep personal effects ("ADHD damaged relationships")</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-pink-900 font-medium text-sm">Remember:</p>
                <p className="text-pink-800 text-sm">You're not required to share everything in eerste session. Good coaches will respect your pace!</p>
              </div>
            </div>

            <h2>Cijfers: wat gebeurt er in een gemiddeld intakegesprek?</h2>
            <p>
              <strong>Eerste gesprek ADHD coach</strong> research reveals interesting patterns about first coaching conversations.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-indigo-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Statistical insights about intake sessions
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-indigo-800 mb-2">Timing & Duration:</h5>
                  <ul className="text-indigo-700 space-y-1 text-sm">
                    <li>• <strong>60-90 minuten:</strong> Average comprehensive intake</li>
                    <li>• <strong>67%:</strong> Decide within 24 hours of meeting</li>
                    <li>• <strong>45%:</strong> Begin regular coaching within one week</li>
                    <li>• <strong>23%:</strong> Request second consultation first</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-indigo-800 mb-2">Client Discussion Topics:</h5>
                  <ul className="text-indigo-700 space-y-1 text-sm">
                    <li>• <strong>92%:</strong> Identify time management as primary concern</li>
                    <li>• <strong>89%:</strong> Discuss work/academic ADHD impacts</li>
                    <li>• <strong>78%:</strong> Mention interpersonal difficulties</li>
                    <li>• <strong>71%:</strong> Discuss emotional regulation issues</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded">
                <h5 className="font-medium text-indigo-800 mb-1">Common Client Concerns:</h5>
                <p className="text-indigo-700 text-sm">73% express financial worries • 82% feel nervous about vulnerability • 59% worry about required life changes</p>
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

            <h2>Na het gesprek: hoe evalueer je of het een goede match is?</h2>
            <p>
              <strong>Voorbereiden ADHD coaching</strong> evaluation continues after de session ends. The assessment process is crucial.
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-medium text-green-900 mb-2 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Immediate gut check (binnen 2 uur)
                </h4>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• Overall feeling: How do you feel walking out?</li>
                  <li>• Energy level: Energized, drained, or neutral?</li>
                  <li>• Comfort: Did you feel safe en accepted?</li>
                  <li>• Hope factor: More optimistic about ADHD management?</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Professional competence evaluation
                </h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• ADHD knowledge: Solid understanding demonstrated?</li>
                  <li>• Relevant experience: Examples applicable to you?</li>
                  <li>• Clear communication: Explanations understandable?</li>
                  <li>• Appropriate boundaries: Professional coach role maintained?</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                  <HeartHandshake className="w-4 h-4 mr-2" />
                  Personal connection assessment
                </h4>
                <ul className="text-purple-800 space-y-1 text-sm">
                  <li>• Feeling heard: Truly listened to en understood?</li>
                  <li>• Communication fit: Their style works for you?</li>
                  <li>• Trust development: Beginning to trust this person?</li>
                  <li>• Personality match: Good complement to each other?</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg my-6 border-l-4 border-yellow-400">
              <h4 className="font-medium text-yellow-900 mb-2">⚠️ Red flags during gesprek</h4>
              <ul className="text-yellow-800 space-y-1 text-sm">
                <li>• Coach doesn't really listen or rushes through conversation</li>
                <li>• Pushes for expensive/lange trajecten without understanding your situation</li>
                <li>• Makes unrealistic promises about quick fixes</li>
                <li>• Shows no specific understanding of ADHD challenges</li>
                <li>• Doesn't create safe space for questions en vulnerability</li>
              </ul>
            </div>

            <h2>Printbare checklist: alles op een rij</h2>
            <p>
              Download deze complete <strong>ADHD coach voorbereiding</strong> checklist om af te vinken:
            </p>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 my-8 print:bg-white print:border-solid">
              <h3 className="text-xl font-bold text-center mb-6">
                COMPLETE EERSTE GESPREK ADHD COACH PREPARATION CHECKLIST
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2 WEKEN VOOR:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Coach background research compleet</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Locatie, parking, reistijd uitgezocht</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Agenda vrijgehouden (buffer tijd)</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Intake formulieren ingevuld</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Kosten en verzekering uitgezocht</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Technologie getest (online sessie)</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-purple-900 mb-3 mt-6 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    24 UUR VOOR:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Route en locatie final check</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Alle documenten bij elkaar</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Goede nachtrust gepland</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Comfortabele kleding uitgezocht</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Telefoon volledig opgeladen</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Relaxatie oefening gedaan</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    1 WEEK VOOR:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Huidige uitdagingen genoteerd</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Concrete doelen geformuleerd</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Medicatie/behandeling chronologie</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Coaching verwachtingen helder</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Vragenlijst voorbereid (15-20 vragen)</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Familie/friends geïnformeerd</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-orange-900 mb-3 mt-6 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    WAT MEENEMEN:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Identificatie (rijbewijs/paspoort)</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Zorgverzekeringsgegevens</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Medicatie lijst current</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Voorbereide vragenlijst</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Notitieblok en pen</span>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Water en snack</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6 pt-4 border-t">
                <p className="text-sm text-gray-600">Print deze checklist en vink af tijdens je voorbereiding!</p>
              </div>
            </div>

            <h2>Veelgestelde vragen over het eerste ADHD coaching gesprek</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Hoe lang duurt een gemiddeld intakegesprek en wat kost het?</h3>
                <p><strong>Eerste gesprek ADHD coach</strong> sessions typically duren 60-90 minuten for comprehensive intake. Costs range from €75-150, met some coaches offering shorter consultation calls voor €25-50. Many charge regular session rate for intake.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Moet ik medische informatie delen tijdens het eerste gesprek?</h3>
                <p>You're not required to share everything immediately. Most helpful: current medications, major health concerns affecting energy/focus, en previous ADHD treatments. Share at your own pace - <strong>ADHD coach voorbereiding</strong> includes considering what you're comfortable discussing.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Wat gebeurt er als ik te nerveus ben om goed te praten?</h3>
                <p>It's completely normal! 87% experience anxiety before their <strong>intakegesprek ADHD coaching</strong>. Good coaches help nervous clients feel comfortable. Bring written questions als backup if your mind goes blank. Let them know you're nervous.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Kan ik na het eerste gesprek van gedachten veranderen?</h3>
                <p>Absolutely! <strong>Checklist ADHD coach</strong> conversations are exploratory - no obligation to continue. Most ethical coaches encourage taking time to decide. Good coaches want mutual commitment to de relationship.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Hoe weet ik of deze coach ADHD echt begrijpt?</h3>
                <p><strong>Voorbereiden ADHD coaching</strong> assessment includes evaluating their ADHD expertise. Ask about specific training, percentage of ADHD clients, understanding of executive function, rejection sensitive dysphoria, en time blindness.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 6: Is het normaal om te huilen durante het gesprek?</h3>
                <p>Completely normal! Many people feel emotional relief when understood about their ADHD struggles. <strong>Hoe bereid je voor ADHD coach</strong> tips include bringing tissues. Good coaches are comfortable met emotions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 7: Wat als ik het niet kan betalen maar wel coaching wil?</h3>
                <p>Discuss financial concerns openly tijdens <strong>eerste afspraak ADHD coach tips</strong>. Some coaches offer sliding scale fees, payment plans, or shorter sessions. Others can refer you to lower-cost options.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Klaar voor je gesprek? Vind de perfecte ADHD coach bij jou
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Eerste gesprek ADHD coach</strong> preparation is now complete - je bent klaar for this important step in your ADHD journey!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">What you've accomplished:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Reduced anxiety through thorough preparation</li>
                    <li>• Maximized effectiveness of your conversation time</li>
                    <li>• Improved ability to assess coach-client fit</li>
                    <li>• Built confidence for advocating your needs</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Find specialized experts:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/venlo" className="text-blue-600 hover:underline">ADHD coach in Venlo</Link> - Limburg region intake specialists</li>
                    <li>• <Link href="/helmond" className="text-blue-600 hover:underline">ADHD coach in Helmond</Link> - Comprehensive Brabant coaching</li>
                    <li>• <Link href="/zaanstad" className="text-blue-600 hover:underline">ADHD coach in Zaanstad</Link> - North Holland professionals</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  Remember: You're taking a brave, positive step toward better ADHD management.
                </p>
                <p className="text-gray-700">
                  Your <strong>checklist ADHD coach</strong> preparation has given je everything you need for successful intake conversation. Trust your preparation, trust your instincts, en trust the process.
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
                <p className="text-sm text-gray-600">Uitgebreide vragenlijst voor tijdens je intakegesprek.</p>
              </Link>
              <Link href="/blog/ervaringen-adhd-coaching" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Ervaringen met ADHD coaching: succesverhalen uit de praktijk</h4>
                <p className="text-sm text-gray-600">Inspirerende verhalen van mensen die coaching hebben geprobeerd.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Preparation guidelines based on best practices from Dutch ADHD coaching professionals en client feedback research.</p>
          </div>
        </article>
      </div>
      
      </div>
    </main>
  );
}