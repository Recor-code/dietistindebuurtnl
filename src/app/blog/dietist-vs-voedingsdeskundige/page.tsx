import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Shield, Euro, FileCheck, AlertCircle, CheckCircle2, XCircle, Users, Stethoscope, BookOpen, Award, Search, Info, Scale, Clock , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Diëtist vs Voedingsdeskundige: Het Verschil Uitgelegd | 2025 Gids',
  description: 'Ontdek het belangrijke verschil tussen een diëtist en voedingsdeskundige: opleiding, bevoegdheden, vergoeding en wanneer je voor welke professional kiest.',
  keywords: [
    'diëtist vs voedingsdeskundige',
    'verschil diëtist voedingsdeskundige',
    'wat is een diëtist',
    'wat is een voedingsdeskundige',
    'diëtist opleiding',
    'voedingskundige vergoeding',
    'diëtist BIG register',
    'wanneer diëtist',
    'voedingsadvies professional',
    'geregistreerde diëtist'
  ],
  openGraph: {
    title: 'Diëtist vs Voedingsdeskundige: Het Verschil Uitgelegd',
    description: 'Complete gids over het verschil tussen diëtisten en voedingsdeskundigen',
    images: ['/img/blog/dietist-vs-voedingsdeskundige/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diëtist vs Voedingsdeskundige: Het Verschil Uitgelegd',
  description: 'Uitgebreide uitleg over de verschillen tussen diëtisten en voedingsdeskundigen qua opleiding, bevoegdheden en vergoeding.',
  author: {
    '@type': 'Organization',
    name: 'Diëtist in de Buurt',
    url: 'https://dietistindebuurt.nl'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Diëtist in de Buurt',
    url: 'https://dietistindebuurt.nl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dietistindebuurt.nl/images/logo.webp'
    }
  },
  datePublished: '2025-10-14T10:00:00.000Z',
  dateModified: '2025-10-14T10:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dietistindebuurt.nl/blog/dietist-vs-voedingsdeskundige'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/dietist-vs-voedingsdeskundige/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/dietist-vs-voedingsdeskundige',
  inLanguage: 'nl-NL'
};

export default function DietistVsVoedingsdeskundigePage() {
  const quickComparison = {
    diëtist: {
      title: "Diëtist",
      protected: true,
      education: "HBO bachelor (4 jaar) of WO master",
      registration: "Verplicht BIG-register",
      insurance: "Meestal vergoed",
      medical: "Ja, mag medische diëtetiek",
      supervision: "Verplichte nascholing",
      color: "green"
    },
    voedingsdeskundige: {
      title: "Voedingsdeskundige",
      protected: false,
      education: "Varieert (HBO/cursussen/zelfbenoemd)",
      registration: "Niet verplicht",
      insurance: "Meestal niet vergoed",
      medical: "Nee, geen medische behandeling",
      supervision: "Niet verplicht",
      color: "orange"
    }
  };

  const detailedDifferences = [
    {
      category: "Wettelijke Status",
      icon: Shield,
      diëtist: {
        title: "Beschermde Titel (BIG-register)",
        points: [
          "Titel 'diëtist' is wettelijk beschermd sinds 1997",
          "Alleen afgestudeerden mogen zich diëtist noemen",
          "Overtreding is strafbaar met boete of celstraf",
          "Controle door Inspectie Gezondheidszorg (IGJ)",
          "Verplichte registratie in BIG-register"
        ],
        legal: "Wet BIG (Beroepen Individuele Gezondheidszorg)"
      },
      voedingsdeskundige: {
        title: "Geen Wettelijke Bescherming",
        points: [
          "Iedereen mag zich voedingsdeskundige noemen",
          "Geen minimale opleidingseisen",
          "Geen verplichte registratie",
          "Wel mogelijk vrijwillige registratie (NVD, VVVB)",
          "Geen wettelijk toezicht"
        ],
        warning: "Let op: kwaliteit kan sterk variëren!"
      }
    },
    {
      category: "Opleiding",
      icon: GraduationCap,
      diëtist: {
        title: "HBO Bachelor of WO Master",
        points: [
          "HBO: 4 jaar opleiding Voeding en Diëtetiek",
          "WO: Master Voeding en Gezondheid + aanvullende opleiding",
          "1500+ uur stage in ziekenhuizen en praktijken",
          "Medische vakken: fysiologie, pathologie, farmacologie",
          "Praktijkgericht: dieetberekeningen, consult vaardigheden",
          "Afstuderen met onderzoek en scriptie"
        ],
        institutions: "Hogescholen: HAN, Hogeschool Utrecht, Haagse Hogeschool, etc."
      },
      voedingsdeskundige: {
        title: "Geen Uniforme Opleiding",
        points: [
          "HBO Voeding en Diëtetiek (zelfde als diëtist)",
          "HBO Toegepaste Psychologie + voedingsmodules",
          "Post-HBO cursussen (enkele maanden)",
          "Online cursussen (dagen tot weken)",
          "Zelfstudie zonder formele opleiding",
          "Kwaliteit varieert enorm (excellent tot onvoldoende)"
        ],
        note: "Altijd vragen naar specifieke opleiding en diploma's!"
      }
    },
    {
      category: "Bevoegdheden",
      icon: FileCheck,
      diëtist: {
        title: "Medische Diëtetiek Toegestaan",
        points: [
          "Mag dieetbehandeling geven bij ziektes",
          "Voorschrijven therapeutische diëten",
          "Samenwerken met artsen en specialisten",
          "Behandeling diabetes, nierfalen, hart- en vaatziekten",
          "Aanvragen bloedonderzoek indien nodig",
          "Werken in ziekenhuizen en klinieken"
        ],
        scope: "Preventie + medische behandeling"
      },
      voedingsdeskundige: {
        title: "Alleen Preventie en Voorlichting",
        points: [
          "Algemeen voedingsadvies voor gezonde mensen",
          "Voorlichting over gezonde voeding",
          "Begeleiding gezond afvallen (zonder ziektes)",
          "Sportvoeding voor recreanten",
          "Voedingsadvies bedrijven en scholen",
          "GEEN behandeling van ziektes (illegaal!)"
        ],
        restriction: "Bij medische problemen moet doorverwijzen naar diëtist"
      }
    },
    {
      category: "Zorgverzekering",
      icon: Euro,
      diëtist: {
        title: "Meestal Vergoed",
        points: [
          "Basisverzekering: nee (sinds 2012)",
          "Aanvullende verzekering: meestal €100-€400/jaar",
          "Sommige verzekeraars: tot €600/jaar",
          "Geen verwijzing huisarts meer nodig (sinds 2022)",
          "Declaratie rechtstreeks bij verzekeraar",
          "Contracten met grote zorgverzekeraars"
        ],
        typical: "80-100% vergoed tot jaarlijks maximum"
      },
      voedingsdeskundige: {
        title: "Meestal NIET Vergoed",
        points: [
          "Vrijwel nooit in basisverzekering",
          "Zelden in aanvullende verzekering",
          "Alleen bij erkende registers (NVD, VVVB)",
          "Dan vaak lager bedrag dan diëtist",
          "Moet zelf kosten voorfinancieren",
          "Controleer altijd eerst bij verzekeraar!"
        ],
        cost: "Gemiddeld €50-80 per consult uit eigen zak"
      }
    },
    {
      category: "Kwaliteitsborging",
      icon: Award,
      diëtist: {
        title: "Strenge Eisen en Controle",
        points: [
          "Verplichte nascholing: 200 uur per 5 jaar",
          "Herregistratie BIG-register elke 5 jaar",
          "Beroepscode Nederlandse Vereniging Diëtisten (NVD)",
          "Tuchtrecht en klachtenprocedures",
          "Verplichte beroepsaansprakelijkheidsverzekering",
          "Intercollegiale toetsing"
        ],
        guarantee: "Hoge en gecontroleerde kwaliteitsstandaard"
      },
      voedingsdeskundige: {
        title: "Variabel - Afhankelijk van Register",
        points: [
          "Vrijwillige registers: NVD (andere categorie), VVVB",
          "Nascholing alleen bij vrijwillige registratie",
          "Geen verplichte beroepsaansprakelijkheid",
          "Geen tuchtrecht (wel civielrechtelijk)",
          "Zelfbenoemden: geen enkele controle",
          "Kwaliteit hangt af van individu"
        ],
        advice: "Controleer altijd registratie en referenties!"
      }
    }
  ];

  const whenToChoose = {
    diëtist: {
      title: "Kies Een Diëtist Bij:",
      icon: Stethoscope,
      situations: [
        {
          situation: "Medische Aandoeningen",
          examples: [
            "Diabetes type 1 of 2",
            "Hart- en vaatziekten, hoog cholesterol",
            "Nierproblemen of nierfalen",
            "Maag- en darmziekten (IBS, Crohn, colitis)",
            "Voedselallergieën en intoleranties",
            "Kanker (voor, tijdens, na behandeling)"
          ]
        },
        {
          situation: "Ernstig Over- of Ondergewicht",
          examples: [
            "Obesitas (BMI > 30)",
            "Extreem ondergewicht (BMI < 18,5)",
            "Eetstoornissen (anorexia, boulimie, eetbuistoornis)",
            "Gewichtsverlies na bariatrische chirurgie"
          ]
        },
        {
          situation: "Specialistische Voeding",
          examples: [
            "Zwangerschap met complicaties (zwangerschapsdiabetes)",
            "Voeding via sonde of infuus",
            "Kinderen met groei- of ontwikkelingsproblemen",
            "Topsport op professioneel niveau"
          ]
        },
        {
          situation: "Vergoeding Nodig",
          examples: [
            "Je wilt gebruik maken van zorgverzekering",
            "Kosten zijn een belangrijke factor",
            "Langdurige begeleiding nodig"
          ]
        }
      ],
      summary: "Bij medische problemen of complexe situaties is een diëtist de juiste keuze"
    },
    voedingsdeskundige: {
      title: "Kies Een Voedingsdeskundige Bij:",
      icon: Users,
      situations: [
        {
          situation: "Preventie en Algemeen Advies",
          examples: [
            "Gezonder willen eten zonder ziektes",
            "Meer energie door betere voeding",
            "Algemene kennis over voeding opdoen",
            "Gezinsvoeding optimaliseren"
          ]
        },
        {
          situation: "Licht Overgewicht (Gezond)",
          examples: [
            "5-10 kilo afvallen zonder medische problemen",
            "BMI tussen 25-30 zonder complicaties",
            "Behoud gezond gewicht",
            "Preventie verdere gewichtstoename"
          ]
        },
        {
          situation: "Levensstijl en Gedrag",
          examples: [
            "Bewust eten en aandachtig eten leren",
            "Emotioneel eten aanpakken (zonder eetstoornis)",
            "Kookworkshops en praktische tips",
            "Voedingscoaching en motivatie"
          ]
        },
        {
          situation: "Specifieke Doelgroepen",
          examples: [
            "Bedrijfsvitaliteit en werknemers",
            "Schoolvoorlichting en educatie",
            "Recreatieve sporters (niet topsport)",
            "Zwangere vrouwen zonder complicaties"
          ]
        }
      ],
      summary: "Voor algemeen advies en preventie kan een goede voedingsdeskundige voldoende zijn",
      warning: "Let op: kies alleen een voedingsdeskundige met HBO-opleiding en register!"
    }
  };

  const qualityChecklist = {
    diëtist: {
      title: "Checklist: Herken Een Goede Diëtist",
      checks: [
        { item: "Staat in BIG-register", critical: true, check: "Controleer op bigregister.nl" },
        { item: "Lid Nederlandse Vereniging Diëtisten (NVD)", critical: false, check: "Logo op website of visitiekaartje" },
        { item: "HBO diploma Voeding en Diëtetiek", critical: true, check: "Vraag naar diploma of controleer LinkedIn" },
        { item: "Specialisaties relevant voor jouw situatie", critical: false, check: "Website of intake gesprek" },
        { item: "Beroepsaansprakelijkheidsverzekering", critical: true, check: "Vraag ernaar bij intake" },
        { item: "Duidelijke werkwijze en tarieven", critical: true, check: "Transparant op website" },
        { item: "Positieve reviews en referenties", critical: false, check: "Google, Zorgkaart Nederland" }
      ]
    },
    voedingsdeskundige: {
      title: "Checklist: Herken Een Goede Voedingsdeskundige",
      checks: [
        { item: "HBO diploma Voeding en Diëtetiek of gelijkwaardig", critical: true, check: "MOET aantoonbaar zijn!" },
        { item: "Geregistreerd bij NVD of VVVB", critical: true, check: "Controleer op website beroepsvereniging" },
        { item: "Minimaal 3 jaar werkervaring", critical: false, check: "Vraag tijdens intake" },
        { item: "Duidelijk over beperkingen (geen medisch)", critical: true, check: "Moet doorverwijzen naar diëtist bij ziektes" },
        { item: "Overzicht met casussen/resultaten", critical: false, check: "Website of tijdens gesprek" },
        { item: "Regelmatige nascholing", critical: true, check: "Vraag naar recente cursussen" },
        { item: "Geen wilde claims (bijv. '10 kg in 2 weken')", critical: true, check: "Waarschuwingsteken bij unrealistische beloftes!" }
      ],
      warning: "Als deze controles niet kloppen: zoek een andere professional!"
    }
  };

  const commonMisconceptions = [
    {
      myth: "Een voedingsdeskundige is goedkoper dan een diëtist",
      reality: "Diëtist wordt vaak (deels) vergoed, voedingsdeskundige niet",
      truth: "Per saldo kan een diëtist goedkoper uitpakken door verzekeringsdekking",
      calculation: "Diëtist: €70 waarvan €50 vergoed = €20 vs Voedingsdeskundige: €60 volledig zelf betalen"
    },
    {
      myth: "Voedingsdeskundigen zijn meer gericht op preventie",
      reality: "Diëtisten doen ook veel preventie én kunnen medisch behandelen",
      truth: "Diëtisten zijn breder inzetbaar: preventie + medische behandeling"
    },
    {
      myth: "Het maakt niet uit, beide zijn even goed",
      reality: "Kwaliteit diëtist is gegarandeerd, voedingsdeskundige zeer variabel",
      truth: "Bij medische problemen is diëtist altijd veiliger en effectiever"
    },
    {
      myth: "Je hebt een verwijzing van huisarts nodig voor diëtist",
      reality: "Sinds 2022 niet meer! Je kunt direct naar diëtist",
      truth: "Diëtist is direct toegankelijk, geen verwijzing nodig"
    },
    {
      myth: "Diëtisten werken alleen in ziekenhuizen",
      reality: "Meeste diëtisten hebben eigen praktijk of werken in wijkteams",
      truth: "70% van diëtisten werkt in eerstelijns praktijken"
    }
  ];

  const costComparison = {
    diëtist: {
      consult1: "€70-95",
      followUp: "€45-70",
      insurance: "€100-400/jaar uit aanvullend",
      netCost: "€20-40 per consult (na vergoeding)",
      trajectory: "8 consulten = €160-320 netto (bij max vergoeding)"
    },
    voedingsdeskundige: {
      consult1: "€50-80",
      followUp: "€40-65",
      insurance: "Meestal €0",
      netCost: "€50-80 per consult (volledig zelf)",
      trajectory: "8 consulten = €400-640 volledig zelf"
    }
  };

  const registrationInfo = [
    {
      name: "BIG-register",
      forWho: "Alleen diëtisten",
      website: "bigregister.nl",
      purpose: "Wettelijk verplichte registratie voor diëtisten",
      check: "Zoek op naam of BIG-nummer",
      trust: "100% betrouwbaar - wettelijk geregeld"
    },
    {
      name: "Nederlandse Vereniging Diëtisten (NVD)",
      forWho: "Diëtisten + sommige voedingsdeskundigen",
      website: "nvdiëtist.nl",
      purpose: "Beroepsvereniging met kwaliteitseisen",
      check: "Ledenlijst op website",
      trust: "Hoog - strenge toelatingseisen"
    },
    {
      name: "Vereniging Voedingsdeskundigen Voeding en Beweging (VVVB)",
      forWho: "Voedingsdeskundigen",
      website: "vvvb.nl",
      purpose: "Register voor voedingsdeskundigen met HBO-opleiding",
      check: "Register op website",
      trust: "Redelijk - alleen HBO geschoolden"
    },
    {
      name: "Kwaliteitsregister Paramedici",
      forWho: "Diëtisten + fysiotherapeuten etc.",
      website: "keurmerkinstellingen.nl",
      purpose: "Kwaliteitskeurmerk voor paramedische zorg",
      check: "Zoek op praktijk of persoon",
      trust: "Hoog - extra kwaliteitscontrole"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Light Blue Background Wrapper */}

      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8">

      
        <article className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Back to Blog Link */}
        <div className="px-6 md:px-12 pt-6 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar blog
          </Link>
        </div>

        {/* Featured Image */}
        <div className="w-full aspect-video max-h-[500px] overflow-hidden">
          <Image
            src="/img/blog/dietist-vs-voedingsdeskundige/featured.webp"
            alt="Diëtist vs Voedingsdeskundige Verschil"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Diëtist vs Voedingsdeskundige: Het Verschil Uitgelegd" shareCount="3.5k" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <Scale className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Professional Vergelijking 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Diëtist vs Voedingsdeskundige: Het Verschil Uitgelegd
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Belangrijk te weten: opleiding, bevoegdheden, vergoeding en wanneer je voor welke professional kiest
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Quick Answer */}
        <section className="py-16 px-6 md:px-12">
            <div className="bg-blue-100 border-l-4 border-blue-600 p-8 mb-12 rounded-r-xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <Info className="w-8 h-8 text-blue-600" />
                Het Belangrijkste Verschil
              </h2>
              <p className="text-xl text-gray-800 mb-4">
                <strong>Diëtist is een wettelijk beschermde titel</strong> die alleen gebruikt mag worden door professionals met een erkende HBO/WO opleiding en BIG-registratie. <strong>Voedingsdeskundige mag iedereen zichzelf noemen</strong> - van HBO-geschoold tot zelfbenoemd zonder enige opleiding.
              </p>
              <p className="text-gray-700">
                Een diëtist mag medische dieetbehandeling geven en wordt meestal (deels) vergoed door de zorgverzekering. Een voedingsdeskundige mag alleen algemeen voedingsadvies geven en wordt zelden vergoed.
              </p>
            </div>

            {/* Quick Comparison Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <h2 className="text-2xl font-bold p-6 bg-gray-50 border-b">Snelle Vergelijking</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-semibold">Aspect</th>
                      <th className="p-4 text-left font-semibold bg-green-50">Diëtist</th>
                      <th className="p-4 text-left font-semibold bg-orange-50">Voedingsdeskundige</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Beschermde titel</td>
                      <td className="p-4 bg-green-50">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="font-semibold">Ja (wettelijk)</span>
                        </div>
                      </td>
                      <td className="p-4 bg-orange-50">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span className="font-semibold">Nee (iedereen mag dit)</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Opleiding</td>
                      <td className="p-4 bg-green-50">HBO bachelor 4 jaar of WO master</td>
                      <td className="p-4 bg-orange-50">Varieert sterk (HBO tot geen)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">BIG-register</td>
                      <td className="p-4 bg-green-50">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span>Verplicht</span>
                        </div>
                      </td>
                      <td className="p-4 bg-orange-50">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span>Niet mogelijk</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Zorgverzekering</td>
                      <td className="p-4 bg-green-50">Meestal €100-400/jaar vergoed</td>
                      <td className="p-4 bg-orange-50">Meestal niet vergoed</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Medische behandeling</td>
                      <td className="p-4 bg-green-50">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span>Ja, mag bij ziektes</span>
                        </div>
                      </td>
                      <td className="p-4 bg-orange-50">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span>Nee, alleen preventie</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Nascholing</td>
                      <td className="p-4 bg-green-50">Verplicht 200u/5 jaar</td>
                      <td className="p-4 bg-orange-50">Niet verplicht</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </section>

        {/* Detailed Differences */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              5 Belangrijke Verschillen in Detail
            </h2>

            <div className="space-y-8">
              {detailedDifferences.map((diff, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 shadow-md border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 rounded-full p-3">
                      <diff.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold">{idx + 1}. {diff.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Diëtist */}
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4 className="font-bold text-lg mb-3 text-green-800 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" />
                        Diëtist: {diff.diëtist.title}
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {diff.diëtist.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-2 text-gray-700">
                            <span className="text-green-600 font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {diff.diëtist.legal && (
                        <p className="text-sm text-green-700 italic bg-green-100 p-2 rounded">
                          📚 {diff.diëtist.legal}
                        </p>
                      )}
                      {diff.diëtist.institutions && (
                        <p className="text-sm text-gray-600 mt-2">
                          <strong>Opleidingen:</strong> {diff.diëtist.institutions}
                        </p>
                      )}
                      {diff.diëtist.scope && (
                        <p className="text-sm font-semibold text-green-700 mt-2">
                          ✓ {diff.diëtist.scope}
                        </p>
                      )}
                      {diff.diëtist.typical && (
                        <p className="text-sm font-semibold text-green-700 mt-2">
                          💰 {diff.diëtist.typical}
                        </p>
                      )}
                      {diff.diëtist.guarantee && (
                        <p className="text-sm font-semibold text-green-700 mt-2 bg-green-100 p-2 rounded">
                          ⭐ {diff.diëtist.guarantee}
                        </p>
                      )}
                    </div>

                    {/* Voedingsdeskundige */}
                    <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                      <h4 className="font-bold text-lg mb-3 text-orange-800 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6" />
                        Voedingsdeskundige: {diff.voedingsdeskundige.title}
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {diff.voedingsdeskundige.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-2 text-gray-700">
                            <span className="text-orange-600 font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {diff.voedingsdeskundige.warning && (
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
                          <p className="text-yellow-800 font-semibold text-sm">
                            ⚠️ {diff.voedingsdeskundige.warning}
                          </p>
                        </div>
                      )}
                      {diff.voedingsdeskundige.note && (
                        <p className="text-sm text-orange-700 font-semibold mt-2 bg-orange-100 p-2 rounded">
                          💡 {diff.voedingsdeskundige.note}
                        </p>
                      )}
                      {diff.voedingsdeskundige.restriction && (
                        <p className="text-sm font-semibold text-orange-700 mt-2">
                          ⚠️ {diff.voedingsdeskundige.restriction}
                        </p>
                      )}
                      {diff.voedingsdeskundige.cost && (
                        <p className="text-sm font-semibold text-orange-700 mt-2">
                          💰 {diff.voedingsdeskundige.cost}
                        </p>
                      )}
                      {diff.voedingsdeskundige.advice && (
                        <p className="text-sm font-semibold text-orange-700 mt-2 bg-orange-100 p-2 rounded">
                          👉 {diff.voedingsdeskundige.advice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* When to Choose */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Wanneer Kies Je Voor Welke Professional?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Maak de juiste keuze voor jouw situatie
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Diëtist */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 rounded-full p-3">
                    <whenToChoose.diëtist.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">{whenToChoose.diëtist.title}</h3>
                </div>

                {whenToChoose.diëtist.situations.map((sit, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{sit.situation}</h4>
                    <ul className="space-y-1">
                      {sit.examples.map((example, eIdx) => (
                        <li key={eIdx} className="flex gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mt-6">
                  <p className="font-semibold text-green-800">
                    ✅ {whenToChoose.diëtist.summary}
                  </p>
                </div>
              </div>

              {/* Voedingsdeskundige */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-100 rounded-full p-3">
                    <whenToChoose.voedingsdeskundige.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800">{whenToChoose.voedingsdeskundige.title}</h3>
                </div>

                {whenToChoose.voedingsdeskundige.situations.map((sit, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{sit.situation}</h4>
                    <ul className="space-y-1">
                      {sit.examples.map((example, eIdx) => (
                        <li key={eIdx} className="flex gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded mt-6">
                  <p className="font-semibold text-orange-800 mb-2">
                    ✅ {whenToChoose.voedingsdeskundige.summary}
                  </p>
                  <p className="text-sm text-red-700 font-semibold">
                    ⚠️ {whenToChoose.voedingsdeskundige.warning}
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Quality Checklists */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Kwaliteit Checken: Wat Moet Je Controleren?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Diëtist Checklist */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-md border border-green-200">
                <h3 className="text-xl font-bold mb-4 text-green-800">{qualityChecklist.diëtist.title}</h3>
                <div className="space-y-3">
                  {qualityChecklist.diëtist.checks.map((check, idx) => (
                    <div key={idx} className={`p-3 rounded-lg ${check.critical ? 'bg-green-100 border-l-4 border-green-600' : 'bg-gray-50'}`}>
                      <div className="flex items-start gap-2 mb-1">
                        {check.critical ? (
                          <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className={`font-semibold ${check.critical ? 'text-green-800' : 'text-gray-800'}`}>
                            {check.item}
                            {check.critical && <span className="text-red-600 ml-1">*</span>}
                          </p>
                          <p className="text-sm text-gray-600 italic">{check.check}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-green-700 mt-4 font-semibold">
                  * = Verplicht en cruciaal
                </p>
              </div>

              {/* Voedingsdeskundige Checklist */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-md border border-orange-200">
                <h3 className="text-xl font-bold mb-4 text-orange-800">{qualityChecklist.voedingsdeskundige.title}</h3>
                <div className="space-y-3">
                  {qualityChecklist.voedingsdeskundige.checks.map((check, idx) => (
                    <div key={idx} className={`p-3 rounded-lg ${check.critical ? 'bg-orange-100 border-l-4 border-orange-600' : 'bg-gray-50'}`}>
                      <div className="flex items-start gap-2 mb-1">
                        {check.critical ? (
                          <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className={`font-semibold ${check.critical ? 'text-orange-800' : 'text-gray-800'}`}>
                            {check.item}
                            {check.critical && <span className="text-red-600 ml-1">*</span>}
                          </p>
                          <p className="text-sm text-gray-600 italic">{check.check}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded mt-4">
                  <p className="text-sm text-red-800 font-semibold">
                    ⚠️ {qualityChecklist.voedingsdeskundige.warning}
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Kosten Vergelijking: Wat Betaal Je Echt?
            </h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
                    <th className="p-4 text-left">Kosten</th>
                    <th className="p-4 text-left">Diëtist</th>
                    <th className="p-4 text-left">Voedingsdeskundige</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Eerste consult</td>
                    <td className="p-4">{costComparison.diëtist.consult1}</td>
                    <td className="p-4">{costComparison.voedingsdeskundige.consult1}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Vervolgconsult</td>
                    <td className="p-4">{costComparison.diëtist.followUp}</td>
                    <td className="p-4">{costComparison.voedingsdeskundige.followUp}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Zorgverzekering vergoedt</td>
                    <td className="p-4 text-green-700 font-semibold">{costComparison.diëtist.insurance}</td>
                    <td className="p-4 text-red-700 font-semibold">{costComparison.voedingsdeskundige.insurance}</td>
                  </tr>
                  <tr className="border-b bg-yellow-50">
                    <td className="p-4 font-bold">Netto kosten per consult</td>
                    <td className="p-4 font-bold text-green-700">{costComparison.diëtist.netCost}</td>
                    <td className="p-4 font-bold text-red-700">{costComparison.voedingsdeskundige.netCost}</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Compleet traject (8 sessies)</td>
                    <td className="p-4 font-bold text-green-700">{costComparison.diëtist.trajectory}</td>
                    <td className="p-4 font-bold text-red-700">{costComparison.voedingsdeskundige.trajectory}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mt-8">
              <p className="font-semibold mb-2">💡 Conclusie:</p>
              <p className="text-gray-700">
                Door verzekeringsdekking is een diëtist vaak <strong>goedkoper</strong> dan een voedingsdeskundige, zelfs als de bruto tarieven hoger lijken. Check altijd eerst je aanvullende verzekering!
              </p>
            </div>
        </section>

        {/* Registration Info */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Belangrijke Registers en Hoe Je Ze Controleert
            </h2>

            <div className="space-y-4">
              {registrationInfo.map((register, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2">{register.name}</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-600"><strong>Voor wie:</strong> {register.forWho}</p>
                          <p className="text-sm text-gray-600"><strong>Website:</strong> <a href={`https://${register.website}`} target="_blank" rel="noopener" className="text-blue-600 hover:underline">{register.website}</a></p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600"><strong>Doel:</strong> {register.purpose}</p>
                          <p className="text-sm text-gray-600"><strong>Check:</strong> {register.check}</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 px-3 py-2 rounded inline-block">
                        <p className="text-sm font-semibold text-blue-800">
                          Betrouwbaarheid: {register.trust}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Common Misconceptions */}
        <section className="py-16 px-6 md:px-12 bg-yellow-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              5 Veelvoorkomende Misverstanden
            </h2>

            <div className="space-y-4">
              {commonMisconceptions.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-700">
                        Mythe: "{item.myth}"
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Realiteit:</strong> {item.reality}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-800">
                          <strong className="text-green-700">✅ De waarheid:</strong> {item.truth}
                        </p>
                      </div>
                      {item.calculation && (
                        <p className="text-sm text-gray-600 mt-2 italic">
                          💰 Rekenvoorbeeld: {item.calculation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Op Zoek Naar Een Gekwalificeerde Diëtist?
            </h2>
            <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
              Vind geregistreerde diëtisten in jouw regio - allemaal BIG-geregistreerd en vaak vergoed door je zorgverzekering
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg"
            >
              <Search className="w-5 h-5" />
              Vind Een Diëtist Bij Jou in de Buurt
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Het verschil tussen een diëtist en voedingsdeskundige is groter dan veel mensen denken. Een <strong>diëtist is een wettelijk beschermde, gereguleerde zorgprofessional</strong> met gegarandeerde kwaliteit, terwijl de titel voedingsdeskundige door iedereen gebruikt mag worden - van hoogopgeleid tot zelfbenoemd.
              </p>
              <p>
                Bij medische problemen, ernstig over- of ondergewicht, of als je verzekeringsdekking wilt, is een diëtist altijd de veiligste en vaak ook goedkoopste keuze. Voor algemeen voedingsadvies bij gezonde mensen kan een goed opgeleide en geregistreerde voedingsdeskundige voldoende zijn.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Belangrijkste Tips:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Check altijd het BIG-register voor diëtisten (bigregister.nl)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Bij voedingsdeskundigen: vraag naar HBO-diploma en registratie</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Check je zorgverzekering: diëtist is vaak (deels) vergoed</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Bij medische problemen: ga altijd naar een diëtist</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Je hebt geen verwijzing meer nodig sinds 2022</span>
                  </li>
                </ul>
              </div>
            </div>
        </section>
      </article>

      </div>
    </>
  );
}
