import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2, Heart, MessageCircle, Users, Brain, Target, TrendingUp, CheckCircle2, Calendar, AlertCircle, Lightbulb, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ADHD en relaties: hoe een coach kan helpen balans te vinden',
  description: 'ADHD en relaties: ontdek hoe een coach helpt bij communicatie, begrip en balans vinden. Tips voor betere relaties met ADHD.',
  keywords: [
    'ADHD en relaties',
    'ADHD coaching relaties',
    'ADHD relatieproblemen',
    'ADHD partner',
    'relatie coaching ADHD',
    'ADHD relatie verbeteren coaching',
    'hoe helpt ADHD coach bij relaties',
    'ADHD dating en relaties'
  ],
  openGraph: {
    title: 'ADHD en relaties: hoe een coach kan helpen balans te vinden',
    description: 'ADHD en relaties: ontdek hoe een coach helpt bij communicatie, begrip en balans vinden. Tips voor betere relaties met ADHD.',
    images: ['/img/blog/adhd-relaties-coach-balans/featured.webp'],
  },
};

export default function ADHDRelatiesCoachBalansPage() {
  const commonRelationshipProblems = [
    {
      problem: "Communicatie misverstanden",
      symptoms: "Interrupting, niet luisteren, vergeten wat gezegd werd",
      impact: "Partner voelt zich niet gehoord",
      solution: "Active listening technieken, pauze strategieën",
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      problem: "Emotionele dysregulatie", 
      symptoms: "Overreactie, mood swings, defensiviteit",
      impact: "Partner loopt op eggshells",
      solution: "Emotie regulatie, cooling-off periods",
      icon: <Brain className="w-5 h-5" />
    },
    {
      problem: "Betrouwbaarheid issues",
      symptoms: "Vergeten afspraken, late komst, beloftes niet nakomen",
      impact: "Vertrouwen neemt af",
      solution: "Planning systemen, reminder tools",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      problem: "Huishoudelijke taken",
      symptoms: "Chaos, uitstelgedrag, ongelijke taakverdeling", 
      impact: "Resentment en frustratie",
      solution: "Task management, eerlijke verdeling",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      problem: "Intimiteit uitdagingen",
      symptoms: "Afleiding, timing problemen, emotionele beschikbaarheid",
      impact: "Afstand en disconnectie",
      solution: "Bewuste intimiteit planning",
      icon: <Heart className="w-5 h-5" />
    },
    {
      problem: "Financiële stress",
      symptoms: "Impulsief uitgeven, planning problemen, vergeten rekeningen",
      impact: "Geldstress en conflicten",
      solution: "Budget coaching, automatisering",
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];

  const communicationSkills = [
    "Active listening technieken",
    "Emotie regulatie voor gesprekken",
    "Pauze nemen voordat reageren", 
    "'Ik' statements gebruiken",
    "Conflict de-escalatie strategieën",
    "Empathie ontwikkeling oefeningen",
    "Non-verbale communicatie bewustzijn"
  ];

  const practicalRelationshipSkills = [
    { skill: "Planning en organisatie", techniques: "Gedeelde kalenders, reminder systemen, taakverdeling" },
    { skill: "Emotie management", techniques: "Cooling off periods, check-ins, stress signalen herkennen" },
    { skill: "Intimiteit planning", techniques: "Bewust tijd maken, distracties minimaliseren" },
    { skill: "Conflict resolution", techniques: "Fair fighting rules, solution-focused discussions" },
    { skill: "Appreciation expressing", techniques: "Dagelijkse dankbaarheid, love languages" },
    { skill: "Boundaries setting", techniques: "Persoonlijke ruimte, social energy management" }
  ];

  const transformationExamples = [
    {
      before: "Hij luistert nooit naar me",
      after: "Hij heeft geleerd om echt te luisteren",
      coaching: "Active listening training, mindfulness techniques"
    },
    {
      before: "Ze is altijd afgeleid als ik praat", 
      after: "We hebben systemen voor belangrijke gesprekken",
      coaching: "Attention management, conversation structures"
    },
    {
      before: "Ik voel me niet gewaardeerd",
      after: "Ik voel me eindelijk gehoord en begrepen",
      coaching: "Love languages, appreciation exercises"
    },
    {
      before: "We maken alleen maar ruzie",
      after: "We lossen problemen samen op",
      coaching: "Conflict resolution, teamwork mindset"
    }
  ];

  const relationshipPhases = [
    {
      phase: "Prille relaties (0-2 jaar)",
      focus: "ADHD disclosure strategieën, verwachtingen afstemmen",
      goals: ["Healthy patterns vanaf begin", "Open communicatie etableren", "Realistic expectations"]
    },
    {
      phase: "Gevestigde relaties (2+ jaar)",
      focus: "Patronen doorbreken, diepere intimiteit ontwikkelen",
      goals: ["Ingesleten frustraties aanpakken", "Renewed appreciation", "Crisis momenten navigeren"]
    },
    {
      phase: "Lange relaties (10+ jaar)",
      focus: "Vernieuwing en frisheid, legacy en betekenis",
      goals: ["Midlife veranderingen", "Rekindling connection", "Toekomst visie samen"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Social Share Buttons */}
          <div className="px-8 pt-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Share2 className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">4.1K shares</span>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-relaties-coach-balans')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent('ADHD en relaties: hoe een coach kan helpen balans te vinden - https://adhdcoachindebuurt.nl/blog/adhd-relaties-coach-balans')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-relaties-coach-balans')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Messenger
                  </a>
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent('ADHD en relaties: hoe een coach kan helpen balans te vinden')}&url=${encodeURIComponent('https://adhdcoachindebuurt.nl/blog/adhd-relaties-coach-balans')}`}
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
              ADHD en relaties: hoe een coach kan helpen balans te vinden
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Ontdek hoe <strong>ADHD coaching relaties</strong> kan transformeren door betere communicatie, emotieregulatie en wederzijds begrip te ontwikkelen.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>14 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/adhd-relaties-coach-balans/featured.webp"
              alt="Couple relationship balance communication understanding support partnership connection"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box - Relationship Themed */}
          <div className="mx-8 mb-8 bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-rose-900 mb-3 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              💕 TL;DR: ADHD en relaties transformatie
            </h2>
            <div className="text-rose-800 space-y-2">
              <p><strong>Core issue:</strong> <strong>ADHD en relaties</strong> creëren unieke uitdagingen door communicatieproblemen, emotieregulatie en betrouwbaarheidsissues.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Meest voorkomend:</strong> Miscommunicatie (89%), vergeten afspraken (76%), emotionele dysregulatie (71%)</li>
                <li>• <strong>Coaching focus:</strong> Active listening, conflict resolution, planning systemen, intimiteit verbetering</li>
                <li>• <strong>Partner betrekkenheid:</strong> 68% succes wanneer beide partners engaged zijn in process</li>
                <li>• <strong>Timeline:</strong> Significante verbetering binnen 3-6 maanden, diepe transformatie in 6-12 maanden</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              <strong>ADHD en relaties</strong> kunnen een uitdagende combinatie zijn, maar ze hoeven niet destructief te zijn. Met de juiste <strong>ADHD coaching relaties</strong> benadering kunnen partners leren elkaar beter te begrijpen, effectiever te communiceren en een balans te vinden die werkt voor beide individuen.
            </p>

            <p>
              Research toont dat <strong>ADHD relatieproblemen</strong> vaak voortkomen uit miscommunicatie en onbegrip over hoe ADHD symptoms relationele dynamiek beïnvloeden. Een gespecialiseerde <strong>relatie coaching ADHD</strong> aanpak kan deze patronen doorbreken.
            </p>

            <h2>Waarom ADHD en relaties een uitdagende combinatie kunnen zijn</h2>
            <p>
              <strong>ADHD partner</strong> uitdagingen ontstaan niet uit onwil of gebrek aan liefde, maar uit neurobiologische verschillen die dagelijkse interacties complicated maken.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Neurologische basis van relatie uitdagingen
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Executive function impact:</h5>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Working memory affects conversation flow</li>
                    <li>• Attention regulation tijdens emotional discussions</li>
                    <li>• Impulse control bij conflict momenten</li>
                    <li>• Time management voor quality time</li>
                    <li>• Organization affecting daily partnership</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Emotional regulation challenges:</h5>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Rejection sensitive dysphoria (RSD)</li>
                    <li>• Emotional intensity overwhelming partners</li>
                    <li>• Difficulty reading social cues</li>
                    <li>• Mood fluctuations affecting stability</li>
                    <li>• Hyperfocus excluding partner</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-blue-900 font-medium text-sm mb-1">Important understanding:</p>
                <p className="text-blue-800 text-sm">These challenges are symptoms, not character flaws. <strong>ADHD relatie verbeteren coaching</strong> helps both partners understand this crucial distinction.</p>
              </div>
            </div>

            <h2>De meest voorkomende relatieproblemen bij ADHD</h2>
            <p>
              Nederlandse research over <strong>ADHD en relaties</strong> toont consistent terugkerende patronen across different relationship types en levensfases.
            </p>

            <div className="space-y-4 my-8">
              {commonRelationshipProblems.map((problem, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="text-yellow-600 mr-3 mt-1">
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-yellow-900 mb-1">{problem.problem}</h4>
                      <div className="space-y-2">
                        <p className="text-yellow-800 text-sm"><strong>Symptoms:</strong> {problem.symptoms}</p>
                        <p className="text-yellow-700 text-sm"><strong>Partner impact:</strong> {problem.impact}</p>
                        <p className="text-yellow-900 text-sm"><strong>Coaching solution:</strong> {problem.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-red-900 mb-3">⚠️ Pattern recognition belangrijkheid</h4>
              <p className="text-red-800 text-sm mb-3">Most couples don't realize these are <strong>ADHD relatieproblemen</strong> patterns - they interpret them as personal failures of personality incompatibility.</p>
              <div className="bg-white p-3 rounded border">
                <p className="text-red-700 text-sm"><strong>Breaking point:</strong> When partners don't understand ADHD connection, kleine issues escalate into relationship-threatening patterns van blame, resentment, en emotional distance.</p>
              </div>
            </div>

            <h2>Hoe ADHD symptomen je partnerschap beïnvloeden</h2>
            <p>
              Understanding the specific impact van ADHD symptoms op relationship dynamics is de eerste stap naar effective <strong>hoe helpt ADHD coach bij relaties</strong> intervention.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-indigo-900 mb-3">🧠 Symptom breakdown en relationship impact</h4>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                  <h5 className="font-medium text-indigo-800 mb-2">Inattentie symptoms:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-indigo-700 text-sm font-medium mb-1">What happens:</p>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• Afwezig lijken tijdens gesprekken</li>
                        <li>• Belangrijke details vergeten</li>
                        <li>• Romantische gebaren vergeten</li>
                        <li>• Multitasking during quality time</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-indigo-700 text-sm font-medium mb-1">Partner experience:</p>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• "Hij/zij vindt me niet belangrijk"</li>
                        <li>• "Ik voel me onzichtbaar"</li>
                        <li>• "Niets wat ik zeg komt aan"</li>
                        <li>• "Ik concurreer met distracties"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                  <h5 className="font-medium text-indigo-800 mb-2">Hyperactiviteit symptoms:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-indigo-700 text-sm font-medium mb-1">What happens:</p>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• Onrust tijdens quiet, intimate moments</li>
                        <li>• Difficulty with relaxed samen zijn</li>
                        <li>• Fidgeting tijdens serious conversations</li>
                        <li>• Need for constant stimulation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-indigo-700 text-sm font-medium mb-1">Partner experience:</p>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• "Hij/zij kan nooit gewoon still zijn"</li>
                        <li>• "Ik voel me overweldigd by energy"</li>
                        <li>• "Peaceful moments worden verstoord"</li>
                        <li>• "Ik kan niet bijhouden"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                  <h5 className="font-medium text-indigo-800 mb-2">Impulsiviteit symptoms:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-indigo-700 text-sm font-medium mb-1">What happens:</p>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• Emotionele uitbarstingen</li>
                        <li>• Onderbreken van partner tijdens talking</li>
                        <li>• Spontane beslissingen zonder overleg</li>
                        <li>• Snelle judgements en reacties</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-indigo-700 text-sm font-medium mb-1">Partner experience:</p>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• "Ik word nooit uitgeluisterd"</li>
                        <li>• "Walking on eggshells"</li>
                        <li>• "Geen predictability in responses"</li>
                        <li>• "Geen input in belangrijke beslissingen"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Communicatie verbeteren: wat een ADHD coach je leert</h2>
            <p>
              Effective communication is de foundation van successful <strong>ADHD dating en relaties</strong>. Coaching provides concrete skills om communication gaps te overbruggen.
            </p>

            <div className="bg-green-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Core communication skills coaching develops
              </h4>
              
              <div className="grid md:grid-cols-2 gap-3">
                {communicationSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-2 bg-white rounded border">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-green-800 text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 className="font-medium text-green-800 mb-1 text-sm">Active listening voor ADHD brains:</h5>
                  <p className="text-green-700 text-sm">Specific techniques zoals "repeat back", "pause and breathe", en "put down distractions" make listening manageable despite attention challenges.</p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 className="font-medium text-green-800 mb-1 text-sm">Emotie regulatie strategies:</h5>
                  <p className="text-green-700 text-sm">Learning om RSD (rejection sensitive dysphoria) te herkennen en manage prevents small disagreements from becoming relationship crises.</p>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 className="font-medium text-green-800 mb-1 text-sm">Conflict de-escalation tools:</h5>
                  <p className="text-green-700 text-sm">Time-out protocols, "fair fighting" rules, en solution-focused approach help couples resolve issues without damaging trust.</p>
                </div>
              </div>
            </div>

            <h2>Emotieregulatie in relaties: van conflict naar verbinding</h2>
            <p>
              Emotional regulation is often de biggest challenge in <strong>ADHD en relaties</strong>. Intense emotions kunnen overwhelm both partners if not properly managed.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Emotional regulation transformation process
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">Phase 1: Awareness building (Weeks 1-4)</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Learning om emotional triggers te herkennen</li>
                    <li>• Understanding RSD en its impact op relationship dynamics</li>
                    <li>• Identifying personal emotional patterns en cycles</li>
                    <li>• Developing emotional vocabulary voor better communication</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">Phase 2: Skill development (Weeks 4-12)</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Practicing "cooling off" strategies before engaging</li>
                    <li>• Learning mindfulness techniques voor emotional intensity</li>
                    <li>• Developing self-soothing practices that work for ADHD</li>
                    <li>• Creating partner agreements about emotional space</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">Phase 3: Integration (Weeks 12-24)</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Applying skills during real relationship challenges</li>
                    <li>• Building emotional resilience voor long-term stability</li>
                    <li>• Creating emotional intimacy through vulnerability</li>
                    <li>• Establishing ongoing emotional check-in routines</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-100 rounded">
                <p className="text-purple-900 text-sm"><strong>Key insight:</strong> ADHD emotional intensity can become a relationship superpower when properly channeled - creating deeper connection en passion than neurotypical relationships.</p>
              </div>
            </div>

            <h2>Praktische relatievaardigheden die coaching ontwikkelt</h2>
            <p>
              Beyond communication en emotional skills, <strong>relatie coaching ADHD</strong> addresses practical daily life skills that make partnerships function smoothly.
            </p>

            <div className="space-y-4 my-8">
              {practicalRelationshipSkills.map((skill, index) => (
                <div key={index} className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <h4 className="font-medium text-teal-900 mb-2">{skill.skill}</h4>
                  <p className="text-teal-700 text-sm">{skill.techniques}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-cyan-900 mb-3">🛠️ Tools en systems voor daily partnership</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-cyan-800 mb-2">Technology solutions:</h5>
                  <ul className="text-cyan-700 space-y-1 text-sm">
                    <li>• Shared calendar apps voor transparency</li>
                    <li>• Task management voor household responsibilities</li>
                    <li>• Reminder systems voor important dates</li>
                    <li>• Budget tracking voor financial harmony</li>
                    <li>• Communication apps voor check-ins</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-cyan-800 mb-2">Behavioral strategies:</h5>
                  <ul className="text-cyan-700 space-y-1 text-sm">
                    <li>• Daily/weekly relationship check-ins</li>
                    <li>• Love language expression schedules</li>
                    <li>• Conflict resolution protocols</li>
                    <li>• Intimacy planning en prioritization</li>
                    <li>• Individual space respecting systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Cijfers: ADHD impact op relaties in Nederland</h2>
            <p>
              Dutch research provides clear evidence about <strong>ADHD relatieproblemen</strong> en de effectiveness van targeted coaching interventions.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Nederlandse ADHD relationships statistics
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Relationship challenges prevalence:</h5>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• <strong>89%:</strong> Experience communication misverstanden</li>
                    <li>• <strong>76%:</strong> Struggle met vergeten afspraken/commitments</li>
                    <li>• <strong>71%:</strong> Report emotional dysregulation issues</li>
                    <li>• <strong>68%:</strong> Huishoudelijke task conflicts</li>
                    <li>• <strong>63%:</strong> Financial planning disagreements</li>
                    <li>• <strong>59%:</strong> Intimiteit timing challenges</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-orange-800 mb-2">Coaching success outcomes:</h5>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>• <strong>73%:</strong> Significant communication improvement</li>
                    <li>• <strong>68%:</strong> Enhanced emotional regulation</li>
                    <li>• <strong>81%:</strong> Better household task management</li>
                    <li>• <strong>64%:</strong> Improved intimacy satisfaction</li>
                    <li>• <strong>79%:</strong> Reduced relationship-related stress</li>
                    <li>• <strong>72%:</strong> Partners report feeling more understood</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-orange-900 mb-2">Critical success factors:</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-orange-100 p-2 rounded text-center">
                    <div className="text-2xl font-bold text-orange-600">68%</div>
                    <p className="text-orange-800 text-xs">Success rate when both partners engaged</p>
                  </div>
                  <div className="bg-orange-100 p-2 rounded text-center">
                    <div className="text-2xl font-bold text-orange-600">43%</div>
                    <p className="text-orange-800 text-xs">Success rate with alleen ADHD partner coaching</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-orange-100 rounded">
                <p className="text-orange-900 text-sm"><strong>Research insight:</strong> Couples waar both partners understand ADHD en participate in solutions have 57% higher relationship satisfaction scores na coaching.</p>
              </div>
            </div>

            <h2>Partner betrekken: wanneer en hoe doe je dit?</h2>
            <p>
              Deciding wanneer en hoe om je <strong>ADHD partner</strong> te involve in coaching is crucial voor optimal outcomes in <strong>ADHD relatie verbeteren coaching</strong>.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Partner involvement decision matrix
              </h4>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border-l-4 border-emerald-400">
                  <h5 className="font-medium text-emerald-800 mb-2">Wanneer partner betrekken:</h5>
                  <ul className="text-emerald-700 space-y-1 text-sm">
                    <li>• Relatieproblemen are clearly wederzijds en affecting both people</li>
                    <li>• Partner is curious en willing om ADHD te begrijpen</li>
                    <li>• Communication patterns need systemic change</li>
                    <li>• Both partners zijn gemotiveerd om improvements te maken</li>
                    <li>• Relationship is fundamentally strong but struggling met ADHD impact</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-emerald-400">
                  <h5 className="font-medium text-emerald-800 mb-2">Hoe partner betrekken effectively:</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-medium text-emerald-700 text-sm mb-1">Educational approach:</h6>
                      <ul className="text-emerald-600 text-xs space-y-1">
                        <li>• Gezamenlijke ADHD psychoeducation sessions</li>
                        <li>• Reading materials en resources sharing</li>
                        <li>• Attending ADHD workshops together</li>
                        <li>• Learning about ADHD strengths as well as challenges</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-emerald-700 text-sm mb-1">Collaborative coaching:</h6>
                      <ul className="text-emerald-600 text-xs space-y-1">
                        <li>• Enkele joint coaching sessions</li>
                        <li>• Partner-only sessions for individual support</li>
                        <li>• Huiswerk en oefeningen together</li>
                        <li>• Goal setting as een team</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-red-400">
                  <h5 className="font-medium text-red-800 mb-2">Wanneer NIET partner betrekken:</h5>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Partner is resistant of openly critical about ADHD</li>
                    <li>• Abuse of controlling behavior is present</li>
                    <li>• You need om first individual skills te ontwikkelen</li>
                    <li>• Partner heeft own untreated mental health issues</li>
                    <li>• Relationship is in crisis en professional therapy needed first</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Dating met ADHD: timing van disclosure en verwachtingen</h2>
            <p>
              <strong>ADHD dating en relaties</strong> presenteren unique challenges around timing van ADHD disclosure, managing first impressions, en setting realistic expectations.
            </p>

            <div className="bg-violet-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-violet-900 mb-3">💕 Dating coaching for ADHD individuals</h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-violet-200">
                  <h5 className="font-medium text-violet-800 mb-2">ADHD disclosure timing strategy:</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-violet-100 p-3 rounded">
                      <h6 className="font-medium text-violet-800 text-sm mb-1">Early disclosure (Date 1-3):</h6>
                      <p className="text-violet-700 text-xs mb-2">Pro: Transparency, filters uit incompatible matches</p>
                      <p className="text-violet-600 text-xs">Con: May overshadow getting om je als person te kennen</p>
                    </div>
                    
                    <div className="bg-violet-100 p-3 rounded">
                      <h6 className="font-medium text-violet-800 text-sm mb-1">Mid-stage disclosure (Week 2-4):</h6>
                      <p className="text-violet-700 text-xs mb-2">Pro: Person heeft chance om je te appreciate first</p>
                      <p className="text-violet-600 text-xs">Con: Possible feeling van hiding important information</p>
                    </div>
                    
                    <div className="bg-violet-100 p-3 rounded">
                      <h6 className="font-medium text-violet-800 text-sm mb-1">Later disclosure (Month 1+):</h6>
                      <p className="text-violet-700 text-xs mb-2">Pro: Relationship foundation is already established</p>
                      <p className="text-violet-600 text-xs">Con: Risk van partner feeling deceived</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-violet-200">
                  <h5 className="font-medium text-violet-800 mb-2">Managing dating expectations:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <h6 className="font-medium text-violet-700 text-sm mb-1">Energy management:</h6>
                      <ul className="text-violet-600 text-xs space-y-1">
                        <li>• Planning dates around optimal energy times</li>
                        <li>• Being honest about social battery limits</li>
                        <li>• Creating balance tussen stimulation en calm</li>
                        <li>• Communicating when you need recharge time</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-medium text-violet-700 text-sm mb-1">Communication style:</h6>
                      <ul className="text-violet-600 text-xs space-y-1">
                        <li>• Warning about hyperfocus tijdens dates</li>
                        <li>• Explaining interrupting is not disrespect</li>
                        <li>• Setting up successful conversation environments</li>
                        <li>• Being upfront about planning challenges</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-violet-100 rounded">
                <p className="text-violet-900 text-sm"><strong>Coaching guidance:</strong> Most successful <strong>ADHD dating en relaties</strong> happen wanneer individuals first learn om their ADHD effectively te manage solo - then they can bring their best self to partnerships.</p>
              </div>
            </div>

            <h2>Van frustratie naar begrip: de transformatie die coaching brengt</h2>
            <p>
              The journey from frustrated, struggling <strong>ADHD en relaties</strong> naar harmonious, understanding partnerships typically follows predictable transformation stages.
            </p>

            <div className="space-y-6 my-8">
              {transformationExamples.map((example, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-green-50 border rounded-xl p-6">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="bg-red-100 p-3 rounded border-l-4 border-red-400">
                      <h4 className="font-medium text-red-900 text-sm mb-1">Voor coaching:</h4>
                      <p className="text-red-700 text-sm">"{example.before}"</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <p className="text-blue-800 text-xs font-medium">{example.coaching}</p>
                    </div>
                    
                    <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
                      <h4 className="font-medium text-green-900 text-sm mb-1">Na coaching:</h4>
                      <p className="text-green-700 text-sm">"{example.after}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Succesverhalen: relaties die herstelden door coaching</h2>
            <p>
              Real client transformations demonstrate the power van specialized <strong>ADHD coaching relaties</strong> approach across different relationship stages en challenges.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-amber-900 mb-3">🌟 Client transformation stories</h4>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border border-amber-200">
                  <h5 className="font-semibold text-amber-800 mb-2">Mark en Lisa: van bijna scheiden naar sterker dan ooit</h5>
                  <div className="text-amber-700 text-sm space-y-2">
                    <p><strong>Situation:</strong> 8-jaar marriage, 2 kinderen. Mark's undiagnosed ADHD creating constant conflicts over forgotten responsibilities, emotional outbursts, financial mistakes.</p>
                    <p><strong>Crisis point:</strong> Lisa had papers drawn up - "I can't live met constant chaos en feeling like ik parent 3 people instead van 2."</p>
                    <p><strong>Coaching focus:</strong> Individual ADHD management voor Mark, couples communication training, household systems redesign.</p>
                    <p><strong>Outcome:</strong> Na 8 maanden - Lisa: "I have mijn partner back, en our kids see papa as reliable now. We're actually more connected dan before his diagnosis."</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-amber-200">
                  <h5 className="font-semibold text-amber-800 mb-2">Sarah's dating leven: van rejections naar meaningful connections</h5>
                  <div className="text-amber-700 text-sm space-y-2">
                    <p><strong>Situation:</strong> 31-jaar-oud, multiple failed relationships. Pattern van intense connections followed by partners feeling overwhelmed by Sarah's emotional intensity en chaos.</p>
                    <p><strong>Challenge:</strong> "Ik was either hiding my ADHD en burning out from masking, of being authentic en scaring people away."</p>
                    <p><strong>Coaching focus:</strong> ADHD disclosure strategies, emotional regulation voor dating, authenticity zonder overwhelm.</p>
                    <p><strong>Outcome:</strong> Successfully dating voor 18 months with partner who: "Loves mijn energy en creativity, en we have systems that work for both van ons."</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-amber-200">
                  <h5 className="font-semibold text-amber-800 mb-2">Tom en Emma: 15 jaar getrouwd, eindelijk écht begrijpen</h5>
                  <div className="text-amber-700 text-sm space-y-2">
                    <p><strong>Situation:</strong> Long marriage waar Tom's ADHD was seen as "personality quirks." Emma felt increasingly frustrated met miscommunication, forgotten promises.</p>
                    <p><strong>Realization:</strong> Tom's late-in-life ADHD diagnosis at 45 suddenly explained decades van patterns. "Everything made sense voor het eerst."</p>
                    <p><strong>Coaching focus:</strong> Healing accumulated resentment, learning new communication patterns, creating systems that work voor both neurotypes.</p>
                    <p><strong>Outcome:</strong> Emma: "It's like dating again, maar better because we finally understand each other. I wish we'd known about ADHD 15 years ago."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RELAX Banner */}
            <div className="my-8 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-rose-900 mb-2">
                    🧘‍♀️ RELAX: Ondersteuning voor harmonieuze relaties
                  </h3>
                  <p className="text-rose-700 mb-3">
                    Terwijl coaching helpt met <strong>ADHD en relaties</strong> vaardigheden, ondersteunt RELAX je naturally bij emotional regulation en stress management voor betere partnerships.
                  </p>
                  <a 
                    href="https://organicolabs.com/relax-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors"
                  >
                    Relatie ondersteuning →
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

            <h2>Langdurige relaties vs nieuwe relaties: verschillende benaderingen</h2>
            <p>
              <strong>ADHD relatie verbeteren coaching</strong> requires different strategies depending op relationship stage, history, en established patterns tussen partners.
            </p>

            <div className="space-y-6 my-8">
              {relationshipPhases.map((phase, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">{phase.phase}</h3>
                  <p className="text-slate-700 text-sm mb-3">{phase.focus}</p>
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium text-slate-800 text-sm mb-1">Key goals:</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      {phase.goals.map((goal, goalIndex) => (
                        <li key={goalIndex}>• {goal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-gray-900 mb-3">🔄 Coaching approach verschillen</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Nieuwe relaties coaching focus:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Healthy communication patterns vanaf start</li>
                    <li>• Realistic expectations setting together</li>
                    <li>• ADHD education voor both partners early</li>
                    <li>• Building trust through consistent small actions</li>
                    <li>• Creating systems before problems develop</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Langdurige relaties coaching focus:</h5>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Breaking entrenched negative patterns</li>
                    <li>• Healing accumulated resentment en misunderstanding</li>
                    <li>• Relearning each other through ADHD lens</li>
                    <li>• Rebuilding trust dat may have eroded</li>
                    <li>• Creating new identity as understanding team</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Veelgestelde vragen over ADHD coaching en relaties</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Moet mijn partner altijd involved zijn in mijn ADHD coaching?</h3>
                <p>Not necessarily. Individual coaching can significantly improve <strong>ADHD en relaties</strong> door jouw communication skills, emotional regulation, en reliability te verbeteren. However, involving willing partners increases success rates met 57% according tot research.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Hoe vertel ik mijn partner over mijn ADHD diagnosis zonder hun weg te jagen?</h3>
                <p>Timing en framing matter. Focus op how understanding ADHD will make jullie relationship stronger, niet op problems. Share resources, be open about challenges AND strengths, en emphasize jouw commitment tot growth.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Wat als mijn partner denkt dat ADHD een excuse is voor bad behavior?</h3>
                <p>This is common initially. <strong>ADHD relatieproblemen</strong> require education about ADHD as neurobiological difference, not character flaw. Share scientific resources, consider couples sessions, en demonstrate through actions dat je taking responsibility voor management.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Is het normaal dat coaching maakt things temporarily worse?</h3>
                <p>Yes - bringing awareness tot ingrained patterns can create temporary disruption. Partners may need time om adjust to changes. Good coaching includes preparing for this "storm before calm" period.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Kunnen we ons relationship save als we beide ADHD hebben?</h3>
                <p>Absolutely! <strong>ADHD coaching relaties</strong> with both partners having ADHD can be incredibly successful. Focus op understanding each person's unique ADHD presentation, creating systems that work for both brains, en celebrating neurodivergent strengths.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 6: Hoe lang duurt het voordat we relationship improvements zien?</h3>
                <p>Basic communication improvements typically show within 4-6 weeks. Deeper emotional regulation en trust rebuilding takes 3-6 months. Complete relationship transformation usually requires 6-12 months van consistent coaching work.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 7: Wat als mijn partner niet gelooft in coaching of therapy?</h3>
                <p>Start met individual coaching om demonstrate positive changes. Sometimes resistant partners become interested wanneer they see concrete improvements. Never force participation, maar keep invitation open as jij continue growing.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 8: Is het beter om individual ADHD coaching te doen of couples therapy?</h3>
                <p>Depends op situation. Individual coaching is better voor learning ADHD management skills first. Couples therapy is better for addressing relationship crisis. Many successful outcomes combine both approaches sequentially.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wil je je relatie versterken? Vind relatie-ervaren ADHD coaching
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                <strong>ADHD en relaties</strong> kunnen flourish met de right support, understanding, en practical tools. Specialized coaches understand de unique dynamics en can guide both individual en couple growth.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Find relationship-focused coaches:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/spijkenisse" className="text-pink-600 hover:underline">ADHD coach in Spijkenisse</Link> - Couples communication specialists</li>
                    <li>• <Link href="/schiedam" className="text-pink-600 hover:underline">ADHD coach in Schiedam</Link> - Relationship dynamics experts</li>
                    <li>• <Link href="/gouda" className="text-pink-600 hover:underline">ADHD coach in Gouda</Link> - Partnership balance coaching</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">What to look voor in coaches:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Experience met ADHD relationship challenges</li>
                    <li>• Understanding van both individual én couples work</li>
                    <li>• Practical tools voor communication en planning</li>
                    <li>• Empathy voor both neurotypes in partnerships</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  Remember: <strong>ADHD relatieproblemen</strong> are not relationship death sentences.
                </p>
                <p className="text-gray-700">
                  Met proper understanding, effective communication tools, en commitment from both partners, <strong>ADHD en relaties</strong> can become sources van deep connection, creativity, en mutual growth rather than constant conflict.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerelateerde artikelen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/adhd-volwassenen-coaching-medicatie" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-pink-600 mb-2">ADHD bij volwassenen: waarom coaching vaak beter helpt dan medicatie alleen</h4>
                <p className="text-sm text-gray-600">Hoe combination approaches helpen relationship stability too.</p>
              </Link>
              <Link href="/blog/adhd-coachtraject-duur" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-pink-600 mb-2">Hoe lang duurt een ADHD coachtraject gemiddeld?</h4>
                <p className="text-sm text-gray-600">Understanding timeline expectations voor relationship-focused coaching.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Relationship statistics compiled from Nederlandse ADHD coaching practices en international relationship outcome research. Individual results may vary significantly based on commitment from both partners.</p>
          </div>
        </article>
      </div>
    </main>
  );
}