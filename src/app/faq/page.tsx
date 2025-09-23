import { supabase } from '../../../lib/supabase';
import { ChevronDown, Heart, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  created_at?: string;
  updated_at?: string;
  is_published?: boolean;
}

// Comprehensive static FAQ data
const comprehensiveFAQs = [
  // General ADHD Information
  {
    id: 'general-1',
    question: 'Wat is ADHD precies?',
    answer: 'ADHD staat voor Attention Deficit Hyperactivity Disorder (Aandachtstekort Hyperactiviteitsstoornis). Het is een neurobiologische aandoening die invloed heeft op de uitvoerende functies van de hersenen. ADHD kenmerkt zich door drie hoofdsymptomen: aandachtsproblemen, hyperactiviteit en impulsiviteit. Deze symptomen zijn niet simpelweg een kwestie van wilskracht of opvoeding, maar hebben een biologische basis.\n\nMensen met ADHD hebben een andere manier van informatie verwerken en kunnen moeite hebben met concentratie, planning, organisatie en het reguleren van emoties. Het is belangrijk om te begrijpen dat ADHD ook veel positieve kanten heeft, zoals creativiteit, energie, spontaniteit en out-of-the-box denken.',
    category: 'Algemeen',
    order: 1
  },
  {
    id: 'general-2',
    question: 'Wat zijn de verschillende typen ADHD?',
    answer: 'ADHD wordt ingedeeld in drie hoofdtypen:\n\n1. **ADHD Voornamelijk Onoplettend** (vroeger ADD genoemd): Personen hebben vooral moeite met aandacht en concentratie, maar vertonen weinig hyperactiviteit. Symptomen zijn dagdromen, vergeetachtigheid, moeite met organisatie.\n\n2. **ADHD Voornamelijk Hyperactief-Impulsief**: Personen zijn vooral hyperactief en impulsief, maar hebben minder aandachtsproblemen. Symptomen zijn rusteloosheid, veel praten, moeite met wachten.\n\n3. **ADHD Gecombineerd Type**: Dit is het meest voorkomende type, waarbij zowel aandachtsproblemen als hyperactiviteit-impulsiviteit aanwezig zijn.\n\nHet type kan in de loop van het leven veranderen, vooral bij de overgang van kindertijd naar volwassenheid.',
    category: 'Algemeen',
    order: 2
  },
  {
    id: 'general-3',
    question: 'Hoe herken ik ADHD symptomen bij mezelf of mijn kind?',
    answer: 'ADHD symptomen variëren per persoon en leeftijd. Bij **kinderen** zie je vaak:\n- Moeite met stilzitten, veel bewegen\n- Snel afgeleid door externe prikkels\n- Vergeten van huiswerk of spullen\n- Moeite met instructies opvolgen\n- Praten zonder nadenken, onderbreken\n\nBij **volwassenen** zijn symptomen vaak subtieler:\n- Chronische desorganisatie\n- Uitstelgedrag en moeite met deadlines\n- Relatieproblemen door impulsiviteit\n- Werkproblemen, vaak jobhopping\n- Gevoelens van falen of inadequaatheid\n\n**Belangrijk:** Alleen een gekwalificeerde professional kan ADHD diagnosticeren. Als je meerdere symptomen herkent die al langere tijd bestaan en problemen veroorzaken in verschillende levensdomeinen, overweeg dan om hulp te zoeken.',
    category: 'Algemeen',
    order: 3
  },
  {
    id: 'diagnosis-1',
    question: 'Hoe wordt ADHD gediagnosticeerd?',
    answer: 'ADHD diagnose is een uitgebreid proces dat verschillende stappen omvat:\n\n**1. Intake en anamnese:** Uitgebreide gesprekken over symptomen, ontwikkelingsgeschiedenis en functioneren in verschillende situaties.\n\n**2. Vragenlijsten:** Gestandaardiseerde vragenlijsten voor patiënt en naasten (zoals ADHD Rating Scale, Conners vragenlijsten).\n\n**3. Observatie:** Gedragsobservatie in verschillende situaties.\n\n**4. Neuropsychologisch onderzoek:** Tests om aandacht, executieve functies en andere cognitieve vaardigheden te meten.\n\n**5. Lichamelijk onderzoek:** Om andere oorzaken uit te sluiten.\n\n**6. Schoolrapporten/werkgegevens:** Informatie over functioneren op school of werk.\n\n**Wie kan diagnosticeren?** Psychiaters, klinisch psychologen, en soms huisartsen met specialistische kennis. Het proces kan enkele weken tot maanden duren.',
    category: 'Diagnose',
    order: 4
  },
  {
    id: 'diagnosis-2',
    question: 'Kan ADHD ook op volwassen leeftijd voor het eerst gediagnosticeerd worden?',
    answer: 'Ja, absoluut! Steeds meer volwassenen krijgen een ADHD diagnose. Dit kan verschillende redenen hebben:\n\n**Waarom later gediagnosticeerd:**\n- ADHD werd vroeger minder herkend, vooral bij meisjes\n- Compensatiestrategieën werkten in jeugd, maar falen bij toenemende verantwoordelijkheden\n- Andere levensomstagigheden (studie, werk, ouderschap) maken symptomen duidelijker\n- Toegenomen bewustzijn en herkenning van ADHD\n\n**Volwassen ADHD signalen:**\n- Chronische organisatieproblemen\n- Moeite met tijdmanagement\n- Impulsieve beslissingen\n- Relatieproblemen\n- Werkgerelateerde uitdagingen\n- Gevoelens van underachievement\n\n**Diagnostiek volwassenen** is vaak complexer omdat:\n- Symptomen kunnen gemaskeerd zijn door coping strategieën\n- Andere aandoeningen (depressie, angst) kunnen overlappen\n- Kindertijdsymptomen moeten retrospectief beoordeeld worden',
    category: 'Diagnose',
    order: 5
  },
  {
    id: 'treatment-1',
    question: 'Welke behandelingsmogelijkheden zijn er voor ADHD?',
    answer: 'ADHD behandeling is meestal multimodaal en kan bestaan uit:\n\n**1. Medicatie:**\n- Stimulantia (methylfenidaat, dexamfetamine)\n- Non-stimulantia (atomoxetine)\n- Werken op dopamine en noradrenaline systemen\n\n**2. Psychologische behandeling:**\n- Cognitieve gedragstherapie (CGT)\n- ADHD coaching\n- Social skills training\n- Oudertraining (bij kinderen)\n\n**3. Psycho-educatie:**\n- Begrip van ADHD\n- Coping strategieën\n- Zelfacceptatie\n\n**4. Lifestyle interventies:**\n- Regelmatige beweging\n- Gezonde voeding\n- Voldoende slaap\n- Stress management\n\n**5. Praktische ondersteuning:**\n- Structuur en routine\n- Planningshulpmiddelen\n- Workplace accommodations\n\n**Beste aanpak:** Combinatie van behandelingen, afgestemd op individuele behoeften en levenssituatie.',
    category: 'Behandeling',
    order: 6
  },
  {
    id: 'coaching-1',
    question: 'Wat is het verschil tussen ADHD coaching en therapie?',
    answer: '**ADHD Coaching** is praktisch gericht:\n- Focus op concrete doelen en vaardigheden\n- Ontwikkelen van organisatie- en planningsstrategieën\n- Structuur aanbrengen in dagelijks leven\n- Accountability en motivatie\n- Geen focus op verleden of diepliggende trauma\'s\n- Vooruitkijkend en oplossingsgericht\n\n**Therapie/Psychologie** is meer analytisch:\n- Behandeling van onderliggende problemen\n- Verwerken van emoties en ervaringen\n- Focus op psychische symptomen (angst, depressie)\n- Inzicht in gedragspatronen\n- Vaak terugkijkend naar oorzaken\n\n**Wanneer kies je wat?**\n- **Coaching:** Als je praktische vaardigheden wilt ontwikkelen en beter wilt functioneren\n- **Therapie:** Als je emotionele problemen hebt of trauma verwerking nodig hebt\n- **Beide:** Vaak het meest effectief, coaching voor praktische vaardigheden en therapie voor emotionele verwerking\n\n**ADHD coaching** is specifiek ontwikkeld voor de unieke uitdagingen van ADHD en vaak zeer effectief.',
    category: 'Coaching',
    order: 7
  },
  {
    id: 'coaching-2',
    question: 'Hoe verloopt een ADHD coaching traject?',
    answer: 'Een typisch ADHD coaching traject bestaat uit verschillende fasen:\n\n**Fase 1: Intake en doelstelling (1-2 sessies)**\n- Kennismaking en vertrouwensband\n- ADHD impact in kaart brengen\n- Concrete doelen formuleren\n- Verwachtingen afstemmen\n\n**Fase 2: Vaardigheden ontwikkelen (6-12 sessies)**\n- Organisatie en planning strategieën\n- Tijdmanagement technieken\n- Structuur aanbrengen\n- Coping mechanismen\n- Praktische oefeningen\n\n**Fase 3: Implementatie en consolidatie (4-6 sessies)**\n- Toepassing in dagelijks leven\n- Obstakels identificeren en oplossen\n- Zelfvertrouwen opbouwen\n- Relapse prevention\n\n**Fase 4: Afsluiting en nazorg**\n- Evaluatie van vooruitgang\n- Toekomstplanning\n- Booster sessies indien nodig\n\n**Sessie frequentie:** Meestal wekelijks of tweewekelijks\n**Duur:** 60-90 minuten per sessie\n**Totale duur:** 3-9 maanden, afhankelijk van doelen en vooruitgang',
    category: 'Coaching',
    order: 8
  },
  {
    id: 'daily-life-1',
    question: 'Hoe kan ik mijn dagelijkse routine beter organiseren met ADHD?',
    answer: '**Structuur creëren:**\n- Vaste tijden voor opstaan, eten, werken, slapen\n- Gebruik van agenda\'s en planners (digitaal of papier)\n- To-do lijstjes met realistische doelen\n- Time-blocking technieken\n\n**Praktische tips:**\n- **Preparation is key:** Spullen de avond ervoor klaarzetten\n- **One thing at a time:** Focus op één taak tegelijk\n- **Timer methodes:** Pomodoro techniek (25 min work, 5 min pauze)\n- **Visual cues:** Sticky notes, whiteboards, apps met meldingen\n\n**Omgeving optimaliseren:**\n- Minimaliseer afleidingen (opgeruimde werkplek)\n- Vaste plekken voor belangrijke spullen\n- Gebruik van kleuren en labels\n- Background noise of stilte, wat voor jou werkt\n\n**Zelfzorg:**\n- Regelmatige pauzes inplannen\n- Beweging en frisse lucht\n- Gezond eten (stabiele bloedsuiker)\n- Voldoende slaap (7-9 uur)\n\n**Flexibiliteit:** Houd rekening met "ADHD dagen" en pas verwachtingen aan',
    category: 'Dagelijks Leven',
    order: 9
  },
  {
    id: 'workplace-1',
    question: 'Hoe ga ik om met ADHD op de werkplek?',
    answer: '**Workplace accommodations:**\n- Rustige werkplek, weg van afleidingen\n- Flexibele werktijden\n- Frequent overleg met supervisor\n- Schriftelijke instructies en deadlines\n- Pauzes voor movement\n\n**Productiviteit strategieën:**\n- Moeilijke taken \'s ochtends (betere focus)\n- Grote projecten opdelen in kleinere delen\n- Gebruik van project management tools\n- Reguliere check-ins met jezelf\n\n**Communicatie:**\n- **Openheid:** Overweeg om je ADHD te delen met je werkgever\n- **Educatie:** Leg uit wat ADHD betekent en wat je nodig hebt\n- **Oplossingen aanbieden:** Kom met concrete voorstellen\n- **Grenzen stellen:** Zeg nee tegen te veel taken tegelijk\n\n**Netwerken:**\n- Zoek mentors of collega\'s met begrip\n- ADHD support groepen\n- Professional development\n\n**Carrière keuzes:**\n- Banen die aansluiten bij ADHD sterke punten (creativiteit, energie)\n- Vermijd micro-management omgevingen\n- Overwegen van ondernemerschap',
    category: 'Werk & School',
    order: 10
  },
  {
    id: 'relationships-1',
    question: 'Hoe beïnvloedt ADHD mijn relaties en hoe kan ik dit verbeteren?',
    answer: '**ADHD impact op relaties:**\n- Vergeetachtigheid (vergeten afspraken, belangrijke data)\n- Impulsiviteit in communicatie\n- Moeite met luisteren en aandacht geven\n- Emotionele dysregulatie\n- Hyperfocus op bepaalde interesses\n\n**Verbetering strategieën:**\n\n**Communicatie:**\n- Open zijn over je ADHD\n- Samen leren over ADHD impact\n- Actief luisteren oefenen\n- "Time-outs" nemen bij emotionele momenten\n\n**Praktische aanpassingen:**\n- Gedeelde kalenders en reminders\n- Vaste overleg momenten\n- Verdeling taken op basis van sterke punten\n- Geduld en begrip van beide kanten\n\n**Intimiteit:**\n- Bewust quality time inplannen\n- Afleiding minimaliseren tijdens gesprekken\n- Waardering uiten (niet als vanzelfsprekend zien)\n- Ruimte geven voor individuele interesses\n\n**Professional hulp:**\n- Relatietherapie met ADHD kennis\n- Communicatie training\n- Support groepen voor partners',
    category: 'Relaties',
    order: 11
  },
  {
    id: 'medication-1',
    question: 'Moet ik medicatie nemen voor ADHD? Wat zijn de voor- en nadelen?',
    answer: '**Medicatie is een persoonlijke keuze** die je samen met een arts maakt:\n\n**Voordelen medicatie:**\n- Significante verbetering concentratie en focus\n- Betere impulscontrole\n- Verhoogde productiviteit\n- Minder emotionele dysregulatie\n- Snel merkbare effecten\n- Wetenschappelijk bewezen effectiviteit (70-80% van gebruikers)\n\n**Mogelijke nadelen:**\n- Bijwerkingen (verminderde eetlust, slaapproblemen, hoofdpijn)\n- Afhankelijkheid zorgen (hoewel weinig bewijs)\n- Kosten (afhankelijk van verzekering)\n- Stigma rondom medicatie gebruik\n- Individuele variatie in effectiviteit\n\n**Veel voorkomende misverstanden:**\n- "Medicatie verandert je persoonlijkheid" (niet waar)\n- "Je wordt er zombie van" (goede medicatie doet dit niet)\n- "Het is verslavend" (stimulantia zijn veilig bij correct gebruik)\n\n**Beslissing factors:**\n- Severity van symptomen\n- Impact op dagelijks functioneren\n- Andere behandelingen geprobeerd\n- Persoonlijke voorkeur\n- Medische geschiedenis\n\n**Tip:** Start met lage dosis, bouw langzaam op onder medische begeleiding',
    category: 'Medicatie',
    order: 12
  },
  {
    id: 'insurance-1',
    question: 'Wordt ADHD coaching vergoed door de zorgverzekering?',
    answer: '**Vergoeding situatie in Nederland:**\n\n**Basisverzekering:**\n- ADHD coaching wordt meestal niet vergoed uit basispakket\n- Psychologische behandeling (DBC-traject) wel\n- GGZ behandeling via huisarts verwijzing\n\n**Aanvullende verzekering:**\n- Sommige verzekeraars vergoeden coaching uit aanvullend pakket\n- Bedragen variëren (€200-€1000 per jaar)\n- Check je polis of bel je verzekeraar\n\n**Alternatieve vergoedingen:**\n- **Werkgever:** Vaak bereid coaching te vergoeden (productiviteit)\n- **Individueel budget (PGB):** Voor mensen met indicatie\n- **Belasting:** Coaching kan aftrekbaar zijn als ziektekosten\n- **Pgb/Zorgverzekering:** Via GGZ-traject soms mogelijk\n\n**Tips voor vergoeding:**\n- Vraag verwijsbrief van huisarts\n- Documenteer medische noodzaak\n- Zoek coach met juiste certificering\n- Check of coach gecontracteerd is\n\n**Kosten zonder vergoeding:**\n- ADHD coaching: €75-€150 per sessie\n- Traject van 10-15 sessies: €750-€2250\n- Investering in je toekomst en welzijn',
    category: 'Vergoeding',
    order: 13
  },
  {
    id: 'children-1',
    question: 'Hoe herken en help ik een kind met ADHD?',
    answer: '**Herkenning bij kinderen:**\n\n**Aandachtsproblemen:**\n- Snel afgeleid tijdens taken of spel\n- Moeite met instructies opvolgen\n- Vergeetachtig bij dagelijkse activiteiten\n- Vermijdt taken die concentratie vereisen\n- Verliest vaak spullen\n\n**Hyperactiviteit:**\n- Kan niet stilzitten op stoel\n- Rent of klimt excessief\n- Praat veel, moeilijk stil\n- Altijd "on the go"\n\n**Impulsiviteit:**\n- Antwoordt voordat vraag af is\n- Moeite met wachten op beurt\n- Onderbreekt anderen\n- Neemt risico\'s zonder na te denken\n\n**Hulp bieden:**\n\n**Thuis:**\n- Duidelijke structuur en routine\n- Positieve bekrachtiging\n- Korte, concrete instructies\n- Pauzes en beweging inplannen\n- Geduld en begrip\n\n**School:**\n- Overleg met leerkrachten\n- Eventueel passend onderwijs\n- Extra begeleiding of arrangementen\n- IEP (Individueel Educatie Plan)\n\n**Professional hulp:**\n- Kinderpsycholoog of psychiater\n- ADHD coaching voor kinderen\n- Oudertraining en -ondersteuning\n- Medicatie overweging (meestal vanaf 6 jaar)',
    category: 'Kinderen',
    order: 14
  },
  {
    id: 'women-1',
    question: 'Hoe uit ADHD zich bij vrouwen en meisjes?',
    answer: '**ADHD bij vrouwen wordt vaak gemist omdat:**\n- Symptomen zijn vaak minder opvallend\n- Meer internaliserende symptomen\n- Betere compensatiestrategieën\n- Historische focus op hyperactieve jongens\n\n**Typische symptomen bij vrouwen:**\n\n**Aandachtsproblemen:**\n- Dagdromen en "spacing out"\n- Moeite met organisatie en planning\n- Vergeetachtigheid\n- Hyperfocus op interessante onderwerpen\n\n**Emotionele aspecten:**\n- Intense emoties en mood swings\n- Perfectionisme als compensatie\n- Lage zelfwaarde en zelfkritiek\n- Angst en depressie (comorbiditeit)\n\n**Hormonale invloeden:**\n- Symptomen verergeren tijdens menstruatie\n- Veranderingen tijdens zwangerschap\n- Overgang kan symptomen intensiveren\n\n**Masking gedrag:**\n- Inspanning om "normaal" te lijken\n- Sociale camouflage\n- Uitputting door constant compenseren\n\n**Unieke uitdagingen:**\n- Later gediagnosticeerd (gemiddeld 12 jaar later)\n- Mommy guilt en perfecte moeder druk\n- Carrière vs familie balans\n- Hormonale therapie interacties\n\n**Belangrijke boodschap:** ADHD bij vrouwen is net zo reëel en behandelbaar als bij mannen',
    category: 'Vrouwen & ADHD',
    order: 15
  }
];

async function getFAQItems(): Promise<FAQItem[]> {
  try {
    const { data, error } = await supabase
      .from('faq_items')
      .select('id, question, answer, category, "order", is_published, created_at, updated_at')
      .eq('is_published', true)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching FAQ items:', error);
      return comprehensiveFAQs; // Fallback to static content
    }

    // Combine and deduplicate content, prioritize database entries
    const dbItems = (data || []) as FAQItem[];
    const staticItems = comprehensiveFAQs.filter(
      staticItem => !dbItems.some(dbItem => dbItem.id === staticItem.id)
    );
    
    const allItems = [...dbItems, ...staticItems];
    
    // Sort by category, then by order within category
    return allItems.sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.order - b.order;
    });
  } catch (error) {
    console.error('Error fetching FAQ items:', error);
    return comprehensiveFAQs; // Fallback to static content
  }

  function groupFAQsByCategory(faqs: FAQItem[]) {
    return faqs.reduce((groups, faq) => {
      const category = faq.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(faq);
      return groups;
    }, {} as Record<string, FAQItem[]>);
  }
}

export const metadata = {
  title: 'Veelgestelde Vragen over ADHD - ADHD Coach in de Buurt',
  description: 'Vind antwoorden op de meest gestelde vragen over ADHD, coaching, behandeling en ondersteuning.',
};

export default async function FAQPage() {
  const faqs = await getFAQItems();
  
  // Group FAQs by category
  const faqsByCategory = faqs.reduce((groups, faq) => {
    const category = faq.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(faq);
    return groups;
  }, {} as Record<string, FAQItem[]>);

  const categories = Object.keys(faqsByCategory).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle size={64} className="mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Veelgestelde Vragen over ADHD
          </h1>
          <p className="text-xl text-blue-100">
            Vind antwoorden op de meest gestelde vragen over ADHD, coaching, behandeling en ondersteuning.
          </p>
        </div>
      </section>


      {/* FAQ Categories Overview */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            FAQ Categorieën
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map(category => (
              <div key={category} className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">
                  {category}
                </h3>
                <div className="text-blue-600 text-sm">
                  {faqsByCategory[category].length} {faqsByCategory[category].length === 1 ? 'vraag' : 'vragen'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content organized by category */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200">
                {category}
              </h2>
              <div className="space-y-4">
                {faqsByCategory[category].map((faq) => (
                  <details key={faq.id} className="bg-white rounded-lg shadow-md">
                    <summary className="p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown className="text-gray-400 flex-shrink-0 transform transition-transform duration-200" size={20} />
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-200">
                        <div className="prose prose-blue max-w-none text-gray-600">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {faq.answer}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Niet gevonden wat je zocht?
            </h2>
            <p className="text-blue-700 mb-6">
              Praat met onze AI ADHD Assistente of bekijk ADHD coaches in jouw stad voor persoonlijke ondersteuning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Praat met AI Assistente
              </Link>
              <Link
                href="/#cities"
                className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Vind een Coach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-blue-400" size={24} />
                <div>
                  <span className="text-xl font-bold">ADHD Coach in de Buurt</span>
                  <div className="text-sm text-gray-500 mt-1">De grootste directory voor ADHD hulp</div>
                </div>
              </div>
              <p className="text-gray-400">
                Vind de beste ADHD coaches en therapeuten bij jou in de buurt. Vergelijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Handige Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Populaire Steden</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/stad/amsterdam" className="hover:text-white">Amsterdam</Link></li>
                <li><Link href="/stad/rotterdam" className="hover:text-white">Rotterdam</Link></li>
                <li><Link href="/stad/utrecht" className="hover:text-white">Utrecht</Link></li>
                <li><Link href="/stad/eindhoven" className="hover:text-white">Eindhoven</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ADHD Coach in de Buurt. Alle rechten voorbehouden.
              </p>
              <div className="text-center">
                <a
                  href="https://shop.organicolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm underline"
                >
                  Op zoek naar natuurlijke supplementen die doen wat ze beloven?
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}