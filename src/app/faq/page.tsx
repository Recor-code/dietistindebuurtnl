'use client';

import { useState } from 'react';
import { ChevronDown, Heart, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelaxBanner from '@/components/RelaxBanner';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

const comprehensiveFAQs: FAQItem[] = [
  {
    id: "general-1",
    question: "Wat is een dietist en wat doet een dietist?",
    answer: "Een dietist is een erkend zorgprofessional die gespecialiseerd is in voeding en gezondheid. Dietisten hebben een HBO-opleiding Voeding en Diëtetiek afgerond en zijn geregistreerd bij de beroepsvereniging Nederlandse Vereniging van Dietisten (NVD). Ze geven evidence-based voedingsadvies op maat, medische voedingstherapie bij chronische ziekten, begeleiding bij gewichtsmanagement, en helpen bij voedselallergieën, intoleranties en sportvoeding. Dietisten werken wetenschappelijk onderbouwd en houden rekening met jouw persoonlijke situatie, voorkeuren en gezondheid.",
    category: "Algemeen",
    order: 1
  },
  {
    id: "general-2",
    question: "Wanneer moet ik naar een dietist?",
    answer: "Je kunt naar een dietist bij diverse situaties: bij medische aandoeningen zoals diabetes, hoog cholesterol, hart- en vaatziekten, darmproblemen (IBS, Crohn, colitis ulcerosa), nierziekten of kanker. Ook bij gewichtsmanagement (afvallen of aankomen), voedselallergieën of intoleranties, zwangerschap en borstvoeding, sportvoeding, eetproblemen bij kinderen, of als je gewoon gezonder wilt eten. Eigenlijk kun je bij iedere voedingsgerelateerde vraag of uitdaging terecht bij een dietist.",
    category: "Algemeen",
    order: 2
  },
  {
    id: "costs-1",
    question: "Wat kosten dietist consulten en wordt het vergoed?",
    answer: "Gemiddelde tarieven voor een eerste consult liggen tussen €70-€95 (60 minuten) en vervolgconsulten tussen €45-€70 (30-45 minuten). Medische voedingstherapie bij diagnoses zoals diabetes type 2, hart- en vaatziekten, COPD en nierziekten wordt vaak vergoed vanuit de basisverzekering (3-7 consulten per jaar). Veel aanvullende verzekeringen bieden extra vergoeding van €100-€400 per jaar voor dieetadvies. Controleer altijd bij je verzekeraar welke vergoeding je precies krijgt.",
    category: "Kosten & Vergoeding",
    order: 3
  },
  {
    id: "costs-2",
    question: "Heb ik een verwijzing nodig van mijn huisarts?",
    answer: "Sinds 2022 is de verwijsplicht voor vrijwel alle zorgverzekeraars afgeschaft. Je kunt nu direct naar een dietist zonder eerst naar de huisarts te gaan. Een verwijzing kan wel nuttig zijn om de medische noodzaak aan te tonen voor vergoeding uit het basispakket. Voor vergoeding vanuit de aanvullende verzekering is meestal geen verwijzing nodig. Check de voorwaarden van jouw zorgverzekeraar voor zekerheid.",
    category: "Kosten & Vergoeding",
    order: 4
  },
  {
    id: "weight-1",
    question: "Kan een dietist mij helpen met afvallen?",
    answer: "Ja, absoluut! Gewichtsmanagement is één van de kernexpertises van dietisten. Ze bieden wetenschappelijk onderbouwde, persoonlijke afvalplannen die gericht zijn op duurzame gedragsverandering in plaats van crash diëten. Een dietist kijkt naar jouw eetpatroon, leefstijl, medische situatie en persoonlijke uitdagingen. Gezond afvallen is gemiddeld 0,5-1 kg per week. Afvallen bij overgewicht (BMI > 30) of met gezondheidsproblemen zoals diabetes wordt vaak (gedeeltelijk) vergoed door de zorgverzekering.",
    category: "Afvallen & Gewicht",
    order: 5
  },
  {
    id: "weight-2",
    question: "Hoe snel kan ik resultaat verwachten bij afvallen?",
    answer: "Duurzaam gewichtsverlies vraagt tijd en geduld. Een gezond tempo is 0,5-1 kg per week, wat neerkomt op 2-4 kg per maand. Te snel afvallen (meer dan 1 kg per week) verhoogt het risico op het jojo-effect en verlies van spiermassa. De eerste weken zie je vaak sneller resultaat door vochtverlies. Na 3-6 maanden zie je meestal significante veranderingen in gewicht, energie en gezondheid. Een dietist helpt je realistische doelen te stellen en ondersteunt je bij het volhouden van gezonde gewoonten.",
    category: "Afvallen & Gewicht",
    order: 6
  },
  {
    id: "sports-1",
    question: "Kan een dietist helpen met sportvoeding?",
    answer: "Ja! Veel dietisten zijn gespecialiseerd in sportvoeding en kunnen je helpen optimale prestaties te leveren. Ze adviseren over de juiste timing van voeding rondom training, hoeveel koolhydraten, eiwitten en vetten je nodig hebt, supplementen (wel of niet), herstel en hydratatie. Of je nu recreatief sport of topsporter bent, een sportdietist stelt een voedingsplan op dat past bij jouw trainingsschema, doelen en sport. Goede voeding kan je prestaties met 10-20% verbeteren.",
    category: "Sportvoeding",
    order: 7
  },
  {
    id: "medical-1",
    question: "Helpt een dietist bij diabetes?",
    answer: "Absoluut! Dieettherapie is een fundamenteel onderdeel van diabetesbehandeling. Een dietist leert je hoe koolhydraten je bloedsuiker beïnvloeden, welke voeding je bloedsuikerwaarden stabiel houdt, hoe je kunt genieten van eten zonder pieken en dalen, en hoe voeding en medicatie op elkaar afstemmen. Bij diabetes type 2 wordt dieetbegeleiding standaard vergoed vanuit de basisverzekering (minimaal 3 consulten per jaar). Goede voeding kan insulinegevoeligheid verbeteren en soms medicatie verminderen.",
    category: "Medische Aandoeningen",
    order: 8
  },
  {
    id: "medical-2",
    question: "Kan een dietist helpen bij een hoog cholesterol?",
    answer: "Ja, een dietist is dé expert op het gebied van cholesterolverlaging door voeding. Ze adviseren over verzadigde vetten verminderen, meer onverzadigde vetten gebruiken (olijfolie, noten, vette vis), vezels verhogen (havermout, peulvruchten), plantenstanolen/sterolen, en de impact van leefstijl op cholesterol. Vaak kun je met de juiste voedingsaanpassingen je cholesterol met 10-20% verlagen. Bij hart- en vaatziekten of verhoogd cholesterol wordt dieetadvies vaak vergoed vanuit de basisverzekering.",
    category: "Medische Aandoeningen",
    order: 9
  },
  {
    id: "medical-3",
    question: "Helpt een dietist bij darmproblemen zoals IBS?",
    answer: "Ja! Dietisten zijn gespecialiseerd in het behandelen van darmproblemen zoals het prikkelbare darm syndroom (IBS), de ziekte van Crohn, colitis ulcerosa, en andere maag-darmklachten. Ze kunnen je begeleiden met een FODMAP-dieet (bewezen effectief bij IBS), identificeren van trigger voedingsmiddelen, zorgen voor voldoende voedingsstoffen ondanks beperkingen, en stapsgewijs voeding herintroduceren. Dieettherapie bij IBS heeft een succespercentage van 70-80% in het verminderen van klachten.",
    category: "Medische Aandoeningen",
    order: 10
  },
  {
    id: "emotional-1",
    question: "Kan een dietist helpen bij emotioneel eten?",
    answer: "Ja, veel dietisten zijn opgeleid in gedragsverandering en kunnen helpen bij emotioneel eten. Ze helpen je patronen herkennen (wanneer eet je uit emotie?), onderscheid maken tussen echte honger en emotionele honger, gezonde copingstrategieën ontwikkelen, en een ontspannen relatie met eten opbouwen. Bij ernstige eetproblemen werken dietisten samen met psychologen of eetstoornisspecialisten. Ze bieden een oordeel-vrije ruimte waar je open kunt praten over je eetgedrag.",
    category: "Emotioneel Eten",
    order: 11
  },
  {
    id: "allergies-1",
    question: "Helpt een dietist bij voedselallergieën en intoleranties?",
    answer: "Absoluut! Dietisten zijn experts in het omgaan met voedselallergieën (zoals noten, melk, ei, gluten) en intoleranties (zoals lactose, fructose). Ze helpen met het veilig vermijden van allergenen, zorgen dat je voldoende voedingsstoffen blijft binnenkrijgen, lezen van voedingslabels en verborgen allergenen herkennen, alternatieven vinden voor verboden voedingsmiddelen, en bij kinderen met allergieën een gevarieerd dieet samenstellen. Ze kunnen ook eliminatiediëten begeleiden om intoleranties op te sporen.",
    category: "Allergieën & Intoleranties",
    order: 12
  },
  {
    id: "allergies-2",
    question: "Wat is het verschil tussen een voedselallergie en intolerantie?",
    answer: "Een voedselallergie is een reactie van het immuunsysteem op bepaald voedsel, vaak binnen minuten tot 2 uur na inname. Symptomen kunnen zijn: huiduitslag, zwelling, ademhalingsproblemen, of zelfs anafylaxie (levensgevaarlijk). Een intolerantie is een spijsverteringsprobleem waarbij het lichaam moeite heeft bepaalde stoffen te verwerken. Symptomen zijn vaak maag-darmklachten (krampen, diarree, winderigheid) en komen meestal later (uren tot dagen). Allergieën worden getest door een arts, intoleranties vaak met een eliminatiedieet onder begeleiding van een dietist.",
    category: "Allergieën & Intoleranties",
    order: 13
  },
  {
    id: "children-1",
    question: "Kan een dietist helpen bij voeding voor kinderen?",
    answer: "Ja! Pediatrische dietisten zijn gespecialiseerd in kindervoeding. Ze helpen bij selectief eten (picky eating), overgewicht of ondergewicht bij kinderen, voedselallergieën, groeiproblemen, diabetes type 1, coeliakie, en algemene voedingsvragen voor ouders. Ze houden rekinding met de groei- en ontwikkelingsbehoefte van kinderen en geven praktische tips die werken in het gezin. Bij medische problemen wordt dieetbegeleiding voor kinderen vaak vergoed vanuit de basisverzekering.",
    category: "Kinderen",
    order: 14
  },
  {
    id: "children-2",
    question: "Hoe help je een kind dat selectief eet (picky eater)?",
    answer: "Een dietist helpt bij selectief eten door oorzaken te achterhalen (sensorische gevoeligheid, negatieve ervaringen, ontwikkelingsfase), kleine stapjes te zetten zonder druk, speelse benaderingen te gebruiken (samen koken, voedsel verkennen), nieuwe voedingsmiddelen vaak aanbieden (10-15 keer kan nodig zijn), en te zorgen voor voldoende voedingsstoffen ondanks beperkte variatie. Belangrijk is geen dwang gebruiken, eten positief houden, en geduld hebben. Bij ernstige selectieve eetproblemen kan samenwerking met een logopedist of ergotherapeut nodig zijn.",
    category: "Kinderen",
    order: 15
  },
  {
    id: "pregnancy-1",
    question: "Helpt een dietist tijdens de zwangerschap?",
    answer: "Ja! Voeding tijdens zwangerschap is cruciaal voor moeder en baby. Een dietist adviseert over voldoende foliumzuur, ijzer, calcium en andere voedingsstoffen, veilige voeding (wat te vermijden), gewichtstoename tijdens zwangerschap (10-16 kg is normaal), misselijkheid en voedingsaversies, zwangerschapsdiabetes, en voorbereiding op borstvoeding. Bij zwangerschapsdiabetes wordt dieetbegeleiding standaard vergoed. Goede voeding tijdens zwangerschap vermindert risico's en bevordert gezonde ontwikkeling van de baby.",
    category: "Zwangerschap",
    order: 16
  },
  {
    id: "pregnancy-2",
    question: "Kan een dietist helpen bij borstvoeding?",
    answer: "Ja! Een dietist kan je helpen met de juiste voeding tijdens borstvoeding om te zorgen dat jij en je baby alle benodigde voedingsstoffen binnenkrijgen. Ze adviseren over extra calorieën (ongeveer 500 kcal per dag), voldoende vocht (2-3 liter per dag), belangrijke voedingsstoffen (omega-3, calcium, vitamine D, jodium), voeding die mogelijk koliek veroorzaakt bij de baby, en gezond gewichtsverlies na de bevalling. Goede voeding ondersteunt de melkproductie en je herstel na de zwangerschap.",
    category: "Zwangerschap",
    order: 17
  },
  {
    id: "finding-1",
    question: "Hoe vind ik een goede dietist bij mij in de buurt?",
    answer: "Je kunt op verschillende manieren een dietist vinden: via de website van de Nederlandse Vereniging van Dietisten (NVD) met een zoekfunctie op postcode, via je zorgverzekeraar (lijst van gecontracteerde dietisten), door aanbeveling van je huisarts of specialist, via online platforms zoals Dietist in de Buurt, of door reviews te lezen van eerdere cliënten. Controleer altijd of de dietist geregistreerd is bij de NVD en gekwalificeerd voor jouw specifieke vraag (bijvoorbeeld diabetes, sportvoeding, of kindervoeding).",
    category: "Dietist Vinden",
    order: 18
  },
  {
    id: "finding-2",
    question: "Wat moet ik vragen bij het eerste gesprek met een dietist?",
    answer: "Goede vragen voor het eerste gesprek zijn: Bent u gespecialiseerd in mijn specifieke probleem (diabetes, afvallen, IBS)? Hoe ziet een behandeltraject eruit en hoeveel consulten zijn gemiddeld nodig? Wat zijn de kosten en welk deel wordt vergoed? Welke behandelmethoden gebruikt u? Hoe vaak zijn de consulten? Is online begeleiding mogelijk? Werkt u samen met andere zorgverleners (huisarts, specialist)? Belangrijk is ook of je je op je gemak voelt bij de dietist - een goede klik is essentieel voor succesvol resultaat.",
    category: "Dietist Vinden",
    order: 19
  },
  {
    id: "finding-3",
    question: "Wat is het verschil tussen een dietist en een voedingsdeskundige?",
    answer: "Een dietist is een BIG-geregistreerd zorgprofessional met een HBO-opleiding Voeding en Diëtetiek (4 jaar). Dietisten mogen medische voedingstherapie geven, werken evidence-based, en hun zorg wordt vergoed door zorgverzekeraars. Een voedingsdeskundige of voedingsadviseur heeft vaak een kortere opleiding en mag geen dieetbehandeling bij ziekte geven. Alleen dietisten zijn wettelijk erkend als zorgverleners. Voor medische problemen, vergoeding en wetenschappelijk onderbouwd advies kies je altijd een erkende dietist.",
    category: "Dietist Vinden",
    order: 20
  }
];

const categories = ["Alle", "Algemeen", "Kosten & Vergoeding", "Afvallen & Gewicht", "Sportvoeding", "Medische Aandoeningen", "Emotioneel Eten", "Allergieën & Intoleranties", "Kinderen", "Zwangerschap", "Dietist Vinden"];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);

  const filteredFAQs = selectedCategory === "Alle" 
    ? comprehensiveFAQs 
    : comprehensiveFAQs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comprehensiveFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* FAQ Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veelgestelde Vragen over Dietisten
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uitgebreide antwoorden op de meest voorkomende vragen over dietisten, voedingsadvies, kosten en vergoeding
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="transition-colors hover:bg-blue-50/30">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left group"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform flex-shrink-0 ${
                      openFAQId === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFAQId === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-xl">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">
            Vind de Perfecte Dietist bij jou in de Buurt
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Klaar om met een dietist te starten? Vind gekwalificeerde dietisten in jouw regio en vergelijk tarieven, specialisaties en reviews.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Vind een Dietist
          </Link>
        </div>

        <RelaxBanner />
      </main>

      <Footer />
    </div>
  );
}
