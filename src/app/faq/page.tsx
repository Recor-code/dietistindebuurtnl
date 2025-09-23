'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { ChevronDown, Heart, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '@/components/Header';
import ChatAssistant from '@/components/ChatAssistant';

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
    id: 'general-4',
    question: 'Is ADHD een echte aandoening of een excuus?',
    answer: 'ADHD is een wetenschappelijk erkende neurobiologische aandoening. Dit is geen mening, maar een feit ondersteund door decennia van onderzoek:\n\n**Wetenschappelijk bewijs:**\n- Hersenscans tonen structurele en functionele verschillen\n- Genetisch onderzoek toont erfelijkheid van 70-80%\n- Neurochemische verschillen in neurotransmitters\n- Consistent wereldwijd erkend door medische organisaties\n\n**Waarom misverstanden bestaan:**\n- Symptomen zijn niet altijd zichtbaar\n- Iedereen heeft wel eens concentratieproblemen\n- Stigma en gebrek aan begrip\n- Media representatie is vaak onnauwkeurig\n\n**De realiteit:**\n- ADHD veroorzaakt meetbare problemen in hersenfunctie\n- Mensen met ADHD willen wel, maar kunnen vaak niet\n- Het is geen kwestie van luiheid of gebrek aan wilskracht\n- Behandeling werkt omdat het een echte aandoening is\n\n**Belangrijk:** ADHD minimaliseren als "excuus" is schadelijk en incorrect.',
    category: 'Algemeen',
    order: 4
  },
  {
    id: 'general-5',
    question: 'Wat zijn de positieve kanten van ADHD?',
    answer: 'ADHD wordt vaak alleen negatief belicht, maar heeft ook veel sterke punten:\n\n**Creativiteit en innovatie:**\n- Out-of-the-box denken\n- Originele oplossingen voor problemen\n- Artistieke en creatieve talenten\n- Vermogen om verbanden te zien die anderen missen\n\n**Energie en passie:**\n- Hoge energie levels\n- Enthousiasme voor interessante onderwerpen\n- Hyperfocus: intense concentratie op passies\n- Doorzettingsvermogen bij uitdagingen\n\n**Sociale kwaliteiten:**\n- Spontaniteit en levendigheid\n- Empathie en gevoeligheid\n- Humor en entertainmentwaarde\n- Vermogen om anderen te inspireren\n\n**Probleemoplossend vermogen:**\n- Flexibel denken\n- Snel schakelen tussen onderwerpen\n- Multitasking (in de juiste omstandigheden)\n- Crisismanagement\n\n**Belangrijke boodschap:** ADHD is geen tekort maar een verschil. Veel succesvolle ondernemers, kunstenaars en innovators hebben ADHD.',
    category: 'Algemeen',
    order: 5
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
    id: 'diagnosis-3',
    question: 'Wat kost een ADHD diagnose en hoe lang duurt het?',
    answer: '**Kosten ADHD diagnose:**\n\n**Via GGZ (vergoed):**\n- Basispakket zorgverzekering dekt diagnostiek\n- Eigen risico van toepassing (€385 in 2024)\n- Verwijzing huisarts nodig\n- Wachttijden: 8-20 weken gemiddeld\n\n**Privé (niet vergoed):**\n- €1500-€3000 voor volledige diagnostiek\n- Sneller: 2-6 weken wachttijd\n- Uitgebreidere tests mogelijk\n- Meer tijd per consult\n\n**Wat is inbegrepen:**\n- Intake gesprekken (2-3 sessies)\n- Vragenlijsten en tests\n- Neuropsychologisch onderzoek\n- Rapportage en behandeladvies\n- Terugkoppeling gesprek\n\n**Tijdsduur proces:**\n- **Totaal:** 3-6 maanden (GGZ) of 1-2 maanden (privé)\n- **Actieve tijd:** 6-10 uur spreiding over meerdere afspraken\n- **Intake:** 1-2 weken\n- **Testfase:** 2-4 weken  \n- **Rapportage:** 2-3 weken\n\n**Tip:** Vraag vooraf kostenopgave en check dekking verzekering.',
    category: 'Diagnose',
    order: 6
  },
  {
    id: 'diagnosis-4',
    question: 'Welke tests worden gebruikt bij ADHD diagnose?',
    answer: '**Gesprekken en vragenlijsten:**\n- **ADHD Rating Scale:** Symptoom beoordeling\n- **Conners vragenlijsten:** Voor verschillende leeftijden\n- **DIVA interview:** Diagnostisch interview volwassenen\n- **Vragenlijsten voor familie/partners:** Externe observatie\n\n**Neuropsychologische tests:**\n- **Aandacht tests:** Continuous Performance Test (CPT)\n- **Werkgeheugen:** Digitspan, visuospatiële taken\n- **Inhibitie:** Stroop test, stop-signal taken\n- **Planning:** Tower tests, Trail Making Test\n\n**Observatie tests:**\n- **QbTest:** Computertest met bewegingssensor\n- **Gedragsobservatie:** In verschillende situaties\n- **Schoolrapporten:** Historische informatie\n\n**Medische onderzoeken:**\n- **Lichamelijk onderzoek:** Andere oorzaken uitsluiten\n- **Bloedonderzoek:** Schildklier, ijzer, vitamines\n- **Gehoortest:** Gehoorproblemen uitsluiten\n\n**Belangrijke noot:** Geen enkele test alleen is voldoende. Diagnose is gebaseerd op combinatie van alle informatie.',
    category: 'Diagnose',
    order: 7
  },
  {
    id: 'treatment-1',
    question: 'Welke behandelingsmogelijkheden zijn er voor ADHD?',
    answer: 'ADHD behandeling is meestal multimodaal en kan bestaan uit:\n\n**1. Medicatie:**\n- Stimulantia (methylfenidaat, dexamfetamine)\n- Non-stimulantia (atomoxetine)\n- Werken op dopamine en noradrenaline systemen\n\n**2. Psychologische behandeling:**\n- Cognitieve gedragstherapie (CGT)\n- ADHD coaching\n- Social skills training\n- Oudertraining (bij kinderen)\n\n**3. Psycho-educatie:**\n- Begrip van ADHD\n- Coping strategieën\n- Zelfacceptatie\n\n**4. Lifestyle interventies:**\n- Regelmatige beweging\n- Gezonde voeding\n- Voldoende slaap\n- Stress management\n\n**5. Praktische ondersteuning:**\n- Structuur en routine\n- Planningshulpmiddelen\n- Workplace accommodations\n\n**Beste aanpak:** Combinatie van behandelingen, afgestemd op individuele behoeften en levenssituatie.',
    category: 'Behandeling',
    order: 6
  },
  {
    id: 'treatment-2',
    question: 'Wat is cognitieve gedragstherapie (CGT) voor ADHD?',
    answer: '**Wat is CGT voor ADHD:**\nCognitieve gedragstherapie helpt bij het veranderen van denkpatronen en gedrag die problemen veroorzaken bij ADHD.\n\n**Cognitieve aspecten:**\n- **Negatieve gedachten herkennen:** "Ik faal altijd", "Ik ben dom"\n- **Gedachten uitdagen:** Bewijs zoeken, alternatieven bedenken\n- **Realistische denken:** Meer evenwichtige perspectieven\n- **Zelfcompassie:** Vriendelijker zijn voor jezelf\n\n**Gedragsaspecten:**\n- **Organisatie vaardigheden:** Planning en structuur\n- **Tijdmanagement:** Realistische inschatting van tijd\n- **Probleemoplossing:** Stap voor stap aanpak\n- **Sociale vaardigheden:** Betere communicatie\n\n**Specifieke technieken:**\n- **Gedachtenregistratie:** Bewustwording van denkpatronen\n- **Behavioral activation:** Plezierige activiteiten plannen\n- **Exposure:** Geleidelijk moeilijke taken aanpakken\n- **Mindfulness:** Aandacht training\n\n**Duur en opzet:**\n- 12-20 sessies gemiddeld\n- Wekelijks of tweewekelijks\n- Huiswerkopdrachten tussen sessies\n- Focus op praktische vaardigheden',
    category: 'Behandeling',
    order: 7
  },
  {
    id: 'treatment-3',
    question: 'Helpen natuurlijke behandelingen en supplementen bij ADHD?',
    answer: '**Wetenschappelijk ondersteunde aanvullingen:**\n\n**Beweging en sport:**\n- **Zeer effectief:** 30-60 min matige beweging dagelijks\n- **Mechanisme:** Verhoogt dopamine en noradrenaline natuurlijk\n- **Types:** Cardio, martial arts, team sporten\n- **Bonus:** Vermindert stress en verbetert slaap\n\n**Voeding:**\n- **Omega-3 vetzuren:** Enig bewijs voor verbetering (1000-2000mg/dag)\n- **Protein rijke ontbijt:** Stabiele bloedsuiker hele dag\n- **Vermijd:** Suiker pieken, cafeïne overdosis\n- **Regel:** 3 hoofdmaaltijden + gezonde snacks\n\n**Supplementen met beperkt bewijs:**\n- **Magnesium:** Bij tekort (laat testen)\n- **IJzer:** Alleen bij aantoonbare tekort\n- **Vitamine D:** Bij tekort aanvullen\n- **Probiotica:** Opkomend onderzoek naar darm-brein as\n\n**Niet bewezen:**\n- Elimatie diëten (tenzij allergieën)\n- Kruiden supplementen\n- Homeopathie\n- Detox kuren\n\n**Belangrijk:** Natuurlijke aanvullingen vervangen geen professionele behandeling, maar kunnen wel ondersteunen.',
    category: 'Behandeling',
    order: 8
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
    id: 'coaching-3',
    question: 'Hoe vind ik een goede ADHD coach?',
    answer: '**Kwalificaties om op te letten:**\n\n**Opleiding en certificering:**\n- **ADHD-specifieke training:** Niet alleen algemene coaching\n- **Erkende instituten:** NRVT, NOBCO, International Coach Federation\n- **Bijscholing:** Blijft up-to-date met ADHD onderzoek\n- **Ervaring:** Minimaal 2 jaar praktijkervaring met ADHD\n\n**Persoonlijke fit:**\n- **Chemie:** Voel je je begrepen en geaccepteerd?\n- **Communicatiestijl:** Past bij jouw voorkeuren\n- **Beschikbaarheid:** Flexibel met afspraken\n- **Locatie/online:** Wat werkt voor jou?\n\n**Praktische zaken:**\n- **Kosten:** Transparant over tarieven en trajekt\n- **Aanpak:** Vraag naar concrete methodes\n- **Resultaten:** Vraag om referenties of verhalen\n- **Grenzen:** Kent eigen beperkingen, verwijst door indien nodig\n\n**Rode vlaggen:**\n- Belooft snelle "genezing"\n- Heeft geen ADHD-specifieke training\n- Wil geen intake gesprek\n- Kritisch over medicatie zonder medische achtergrond\n\n**Tip:** Vraag altijd een kennismakingsgesprek voordat je begint.',
    category: 'Coaching',
    order: 9
  },
  {
    id: 'coaching-4',
    question: 'Wat zijn de kosten van ADHD coaching?',
    answer: '**Gemiddelde tarieven in Nederland:**\n\n**Per sessie:**\n- **Startende coaches:** €60-€85 per uur\n- **Ervaren coaches:** €85-€120 per uur\n- **Top specialists:** €120-€150 per uur\n- **Online coaching:** Vaak 20-30% goedkoper\n\n**Totale trajectkosten:**\n- **Kort traject (8-10 sessies):** €650-€1200\n- **Standaard traject (12-15 sessies):** €1000-€1800\n- **Intensief traject (20+ sessies):** €1500-€3000\n\n**Extra kosten:**\n- **Intake (uitgebreid):** €150-€300\n- **Tussentijdse evaluaties:** €100-€150\n- **E-mail/telefooncontact:** Vaak inbegrepen\n- **Huiswerkmaterialen:** €25-€75\n\n**Vergoedinsmogelijkheden:**\n- **Zorgverzekering:** Aanvullend pakket (€200-€800/jaar)\n- **Werkgever:** Vaak bereid te investeren\n- **Gemeente:** Soms via WMO\n- **Belastingaftrek:** Als ziektekosten\n\n**Bespaartips:**\n- Groepscoaching is goedkoper\n- Online sessies kosten minder\n- Vraag naar pakket deals\n- Check of je werkgever meebetaalt',
    category: 'Coaching',
    order: 10
  },
  {
    id: 'daily-life-1',
    question: 'Hoe kan ik mijn dagelijkse routine beter organiseren met ADHD?',
    answer: '**Structuur creëren:**\n- Vaste tijden voor opstaan, eten, werken, slapen\n- Gebruik van agenda\'s en planners (digitaal of papier)\n- To-do lijstjes met realistische doelen\n- Time-blocking technieken\n\n**Praktische tips:**\n- **Preparation is key:** Spullen de avond ervoor klaarzetten\n- **One thing at a time:** Focus op één taak tegelijk\n- **Timer methodes:** Pomodoro techniek (25 min work, 5 min pauze)\n- **Visual cues:** Sticky notes, whiteboards, apps met meldingen\n\n**Omgeving optimaliseren:**\n- Minimaliseer afleidingen (opgeruimde werkplek)\n- Vaste plekken voor belangrijke spullen\n- Gebruik van kleuren en labels\n- Background noise of stilte, wat voor jou werkt\n\n**Zelfzorg:**\n- Regelmatige pauzes inplannen\n- Beweging en frisse lucht\n- Gezond eten (stabiele bloedsuiker)\n- Voldoende slaap (7-9 uur)\n\n**Flexibiliteit:** Houd rekening met "ADHD dagen" en pas verwachtingen aan',
    category: 'Dagelijks Leven',
    order: 9
  },
  {
    id: 'daily-life-2',
    question: 'Welke apps en tools helpen bij ADHD?',
    answer: '**Organisatie en planning:**\n\n**Agenda apps:**\n- **Google Calendar:** Gratis, sync tussen apparaten\n- **Fantastical:** Mooie interface, natuurlijke taal\n- **Any.do:** Eenvoudig, met familie functie\n\n**Taakbeheer:**\n- **Todoist:** Projecten, labels, karma systeem\n- **Things 3:** Elegant, alleen Apple\n- **TickTick:** Pomodoro timer ingebouwd\n\n**Focus en concentratie:**\n- **Forest:** Bomen planten tijdens focus tijd\n- **Freedom:** Blokkeer afleidende websites/apps\n- **Brain.fm:** Muziek specifiek voor focus\n- **Noisli:** Achtergrondgeluiden voor concentratie\n\n**Tijd tracking:**\n- **RescueTime:** Automatisch tijd bijhouden\n- **Toggl:** Handmatig tijd loggen\n- **Forest:** Pomodoro timer met beloningssysteem\n\n**Gewoontes:**\n- **Habitica:** Gamification van gewoontes\n- **Streaks:** Simpel gewoontes bijhouden\n- **Way of Life:** Kleurcodering van activiteiten\n\n**Tips:**\n- Start met 1-2 apps, niet teveel tegelijk\n- Probeer gratis versies eerst\n- Kies apps die bij jouw stijl passen',
    category: 'Dagelijks Leven',
    order: 10
  },
  {
    id: 'daily-life-3',
    question: 'Hoe ga ik om met uitstelgedrag (procrastinatie)?',
    answer: '**Waarom uitstellen met ADHD:**\n- Taken lijken overweldigend groot\n- Perfectie angst: bang om te falen\n- Dopamine tekort: taken zijn niet bevredigend genoeg\n- Executive function problemen: moeilijk om te beginnen\n\n**Strategieën om te beginnen:**\n\n**Taken kleiner maken:**\n- **2-minuten regel:** Als het minder dan 2 min kost, doe het nu\n- **Eerste stap focus:** Alleen de eerste kleine stap plannen\n- **Salami techniek:** Grote taak in kleine plakjes verdelen\n\n**Weerstand verlagen:**\n- **Werk omgeving klaarzetten:** Alles binnen handbereik\n- **Makkelijke versie:** Begin met gedeeltelijke taak\n- **Samen werken:** Body doubling, iemand erbij\n\n**Motivatie verhogen:**\n- **Rewards:** Beloning na voltooiing\n- **Deadline druk:** Kunstmatige deadlines creëren\n- **Interessant maken:** Muziek, nieuwe locatie\n\n**Timing optimaliseren:**\n- **Prime time:** Werk tijdens jouw beste energie\n- **Time boxing:** Vaste tijd blokken voor taken\n- **Pomodoro:** 25 min werken, 5 min pauze\n\n**Zelfcompassie:** Wees vriendelijk voor jezelf, iedereen stelt uit.',
    category: 'Dagelijks Leven',
    order: 11
  },
  {
    id: 'workplace-1',
    question: 'Hoe ga ik om met ADHD op de werkplek?',
    answer: '**Workplace accommodations:**\n- Rustige werkplek, weg van afleidingen\n- Flexibele werktijden\n- Frequent overleg met supervisor\n- Schriftelijke instructies en deadlines\n- Pauzes voor movement\n\n**Productiviteit strategieën:**\n- Moeilijke taken \'s ochtends (betere focus)\n- Grote projecten opdelen in kleinere delen\n- Gebruik van project management tools\n- Reguliere check-ins met jezelf\n\n**Communicatie:**\n- **Openheid:** Overweeg om je ADHD te delen met je werkgever\n- **Educatie:** Leg uit wat ADHD betekent en wat je nodig hebt\n- **Oplossingen aanbieden:** Kom met concrete voorstellen\n- **Grenzen stellen:** Zeg nee tegen te veel taken tegelijk\n\n**Netwerken:**\n- Zoek mentors of collega\'s met begrip\n- ADHD support groepen\n- Professional development\n\n**Carrière keuzes:**\n- Banen die aansluiten bij ADHD sterke punten (creativiteit, energie)\n- Vermijd micro-management omgevingen\n- Overwegen van ondernemerschap',
    category: 'Werk & School',
    order: 12
  },
  {
    id: 'workplace-2',
    question: 'Hoe kan ik beter studeren met ADHD?',
    answer: '**Studiemethoden voor ADHD:**\n\n**Structuur en planning:**\n- **Study schedule:** Vaste tijden voor verschillende vakken\n- **Kleine blokken:** 25-45 minuten studie met pauzes\n- **Deadlines opdelen:** Grote opgaven in kleinere stukken\n- **Visuele planning:** Kalender met kleuren per vak\n\n**Actieve studiemethoden:**\n- **Samenvatten:** Eigen woorden, mindmaps\n- **Flashcards:** Herhaling met apps zoals Anki\n- **Uitleggen:** Verhaal vertellen aan iemand anders\n- **Beweging:** Loop tijdens lezen, fidget toys\n\n**Optimale studieomgeving:**\n- **Vaste studieplek:** Geassocieerd met focus\n- **Geluid:** Noise-cancelling koptelefoon of witte ruis\n- **Materialen:** Alles binnen handbereik\n- **Afleiding weg:** Telefoon in andere kamer\n\n**Examens:**\n- **Extra tijd:** Vraag accommodaties aan\n- **Rustige ruimte:** Minder afleidende omgeving\n- **Pauzes:** Korte breaks tijdens lange examens\n- **Voorbereiding:** Oefen onder examencondities\n\n**Tips:**\n- Study buddy voor accountability\n- Beloning na studiesessies\n- Varieer studiemethoden om het interessant te houden',
    category: 'Werk & School',
    order: 13
  },
  {
    id: 'workplace-3',
    question: 'Welke banen passen goed bij ADHD?',
    answer: '**ADHD-vriendelijke carrières:**\n\n**Creatieve beroepen:**\n- **Design/kunst:** Grafisch ontwerp, fotografie, kunst\n- **Media:** Journalist, contentcreator, filmmaker\n- **Marketing:** Creative director, social media\n- **Muziek/entertainment:** Musicus, producer, evenementenorganisatie\n\n**Hands-on werk:**\n- **Techniek:** Elektricien, loodgieter, monteur\n- **Gezondheidszorg:** Paramedicus, verpleegkundige, fysiotherapeut\n- **Sport/fitness:** Personal trainer, sportinstructeur\n- **Voeding:** Chef-kok, cateraar\n\n**Dynamische omgevingen:**\n- **Ondernemerschap:** Eigen bedrijf starten\n- **Sales:** Vertegenwoordiger, makelaar\n- **Consulting:** Freelance consultant\n- **Reizen:** Reisagent, piloot, tourguide\n\n**Waarom deze banen werken:**\n- Afwisseling en variatie\n- Flexibele structuur\n- Ruimte voor creativiteit\n- Directe feedback/resultaten\n- Mogelijkheid tot beweging\n\n**Banen om te vermijden:**\n- Extreme micro-management\n- Repetitieve administratie\n- Lange vergaderingen zonder pauzes\n- Perfectie-vereiste details\n\n**Belangrijk:** Elke persoon is uniek, vind wat bij jou past!',
    category: 'Werk & School',
    order: 14
  },
  {
    id: 'relationships-1',
    question: 'Hoe beïnvloedt ADHD mijn relaties en hoe kan ik dit verbeteren?',
    answer: '**ADHD impact op relaties:**\n- Vergeetachtigheid (vergeten afspraken, belangrijke data)\n- Impulsiviteit in communicatie\n- Moeite met luisteren en aandacht geven\n- Emotionele dysregulatie\n- Hyperfocus op bepaalde interesses\n\n**Verbetering strategieën:**\n\n**Communicatie:**\n- Open zijn over je ADHD\n- Samen leren over ADHD impact\n- Actief luisteren oefenen\n- "Time-outs" nemen bij emotionele momenten\n\n**Praktische aanpassingen:**\n- Gedeelde kalenders en reminders\n- Vaste overleg momenten\n- Verdeling taken op basis van sterke punten\n- Geduld en begrip van beide kanten\n\n**Intimiteit:**\n- Bewust quality time inplannen\n- Afleiding minimaliseren tijdens gesprekken\n- Waardering uiten (niet als vanzelfsprekend zien)\n- Ruimte geven voor individuele interesses\n\n**Professional hulp:**\n- Relatietherapie met ADHD kennis\n- Communicatie training\n- Support groepen voor partners',
    category: 'Relaties',
    order: 15
  },
  {
    id: 'relationships-2',
    question: 'Hoe help ik mijn partner/familie begrijpen wat ADHD inhoudt?',
    answer: '**Educatie is de sleutel:**\n\n**Begin met de basis:**\n- **ADHD is neurobiologisch:** Leg uit dat het hersenstructuur betreft\n- **Niet persoonlijk:** Gedrag komt voort uit aandoening, niet gebrek aan liefde\n- **Onzichtbare handicap:** Moeilijkheden zijn niet altijd zichtbaar\n- **Willen vs kunnen:** Verschil tussen niet willen en niet kunnen\n\n**Concrete voorbeelden geven:**\n- **Vergeetachtigheid:** "Alsof je telefoon vol is en geen nieuwe info opslaat"\n- **Hyperactiviteit:** "Motor die altijd aanstaat"\n- **Aandachtsproblemen:** "Radio die steeds tussen zenders springt"\n- **Hyperfocus:** "Tunnelvisie waarbij tijd verdwijnt"\n\n**Samen leren:**\n- **Boeken lezen:** "Driven to Distraction", "You Mean I\'m Not Lazy, Stupid or Crazy?"\n- **Videos kijken:** YouTube kanalen over ADHD\n- **Support groepen:** Voor partners van mensen met ADHD\n- **Workshops:** Samen naar ADHD informatiebijeenkomsten\n\n**Praktische afspraken maken:**\n- **Cues systeem:** Signalen voor aandacht\n- **Reminder systeem:** Samen organiseren\n- **Taken verdeling:** Op basis van sterke punten\n- **Geduld oefening:** Begrijpen dat het tijd kost',
    category: 'Relaties',
    order: 16
  },
  {
    id: 'relationships-3',
    question: 'Hoe ga ik om met vriendschappen en sociale situaties met ADHD?',
    answer: '**Sociale uitdagingen met ADHD:**\n- Onderbreken van gesprekken\n- Moeite met signalen lezen\n- Te persoonlijk worden te snel\n- Vergeten van afspraken\n- Emotionele reacties\n\n**Strategieën voor betere vriendschappen:**\n\n**Communicatie verbeteren:**\n- **Luister training:** Focus op de ander, stel vragen\n- **Pauze nemen:** Tel tot 3 voor je antwoordt\n- **Signalen leren:** Lichaamstaal en gezichtsuitdrukkingen\n- **Feedback vragen:** "Praat ik te veel?"\n\n**Afspraken beheren:**\n- **Alles opschrijven:** Agenda, reminders, alarmen\n- **Bevestigen:** Dag van tevoren even checken\n- **Buffer tijd:** Eerder vertrekken voor punctualiteit\n- **Backup plan:** Voor als je te laat bent\n\n**Emotionele regulatie:**\n- **Ademtechnieken:** Kalm blijven bij discussies\n- **Uitleg geven:** "Ik ben emotioneel, geef me even"\n- **Later praten:** Als je te geactiveerd bent\n- **Excuses maken:** Als je over de schreef ging\n\n**Vrienden kiezen:**\n- Zoek begripvolle mensen\n- ADHD vrienden begrijpen elkaar\n- Kwaliteit boven kwantiteit\n- Accepteer dat niet iedereen jou begrijpt',
    category: 'Relaties',
    order: 17
  },
  {
    id: 'medication-1',
    question: 'Moet ik medicatie nemen voor ADHD? Wat zijn de voor- en nadelen?',
    answer: '**Medicatie is een persoonlijke keuze** die je samen met een arts maakt:\n\n**Voordelen medicatie:**\n- Significante verbetering concentratie en focus\n- Betere impulscontrole\n- Verhoogde productiviteit\n- Minder emotionele dysregulatie\n- Snel merkbare effecten\n- Wetenschappelijk bewezen effectiviteit (70-80% van gebruikers)\n\n**Mogelijke nadelen:**\n- Bijwerkingen (verminderde eetlust, slaapproblemen, hoofdpijn)\n- Afhankelijkheid zorgen (hoewel weinig bewijs)\n- Kosten (afhankelijk van verzekering)\n- Stigma rondom medicatie gebruik\n- Individuele variatie in effectiviteit\n\n**Veel voorkomende misverstanden:**\n- "Medicatie verandert je persoonlijkheid" (niet waar)\n- "Je wordt er zombie van" (goede medicatie doet dit niet)\n- "Het is verslavend" (stimulantia zijn veilig bij correct gebruik)\n\n**Beslissing factors:**\n- Severity van symptomen\n- Impact op dagelijks functioneren\n- Andere behandelingen geprobeerd\n- Persoonlijke voorkeur\n- Medische geschiedenis\n\n**Tip:** Start met lage dosis, bouw langzaam op onder medische begeleiding',
    category: 'Medicatie',
    order: 18
  },
  {
    id: 'medication-2',
    question: 'Welke ADHD medicatie zijn er en hoe werken ze?',
    answer: '**Stimulantia (eerste keus):**\n\n**Methylfenidaat:**\n- **Merknamen:** Ritalin, Concerta, Medikinet\n- **Kortwerkend:** 3-5 uur effect\n- **Langwerkend:** 8-12 uur effect\n- **Mechanisme:** Blokkeert dopamine heropname\n\n**Dexamfetamine:**\n- **Merknamen:** Amfexa, Elvanse (lisdexamfetamine)\n- **Duur:** 6-10 uur (Elvanse tot 13 uur)\n- **Mechanisme:** Verhoogt dopamine en noradrenaline afgifte\n\n**Non-stimulantia (tweede keus):**\n\n**Atomoxetine (Strattera):**\n- **Duur:** 24 uur werkend\n- **Voordeel:** Geen misbruikpotentieel\n- **Nadeel:** Langzamer effect (4-6 weken)\n- **Mechanisme:** Noradrenaline heropname remmer\n\n**Guanfacine (Intuniv):**\n- **Gebruik:** Vooral bij kinderen\n- **Voordeel:** Helpt ook bij agressie\n- **Mechanisme:** Alpha-2 receptor agonist\n\n**Hoe medicatie werkt:**\n- Verhoogt beschikbare neurotransmitters\n- Verbetert signaaloverdracht in frontale hersenen\n- Effect merkbaar binnen 30-60 minuten (stimulantia)\n\n**Belangrijke noot:** Medicatie keuze is individueel, werkt niet voor iedereen hetzelfde.',
    category: 'Medicatie',
    order: 19
  },
  {
    id: 'medication-3',
    question: 'Wat zijn veelvoorkomende bijwerkingen en hoe ga ik ermee om?',
    answer: '**Meest voorkomende bijwerkingen:**\n\n**Eetlust en gewicht:**\n- **Probleem:** Verminderde eetlust, gewichtsverlies\n- **Oplossing:** Eten voor medicatie innemen, calorie-rijke snacks, medicatie pauzes\n- **Monitor:** Regelmatig wegen, vooral bij kinderen\n\n**Slaapproblemen:**\n- **Probleem:** Moeite met inslapen\n- **Oplossing:** Medicatie eerder innemen, slaaphygiëne, melatonine overleggen\n- **Vermijd:** Cafeïne na 14:00, schermen voor bedtijd\n\n**Hoofdpijn en maagklachten:**\n- **Oplossing:** Medicatie bij het eten, voldoende water drinken\n- **Tijdelijk:** Vaak wennen eerste weken\n\n**Emotionele bijwerkingen:**\n- **Rebound effect:** Emotioneel als medicatie uitwerkt\n- **Oplossing:** Timing aanpassen, dosis spreiden\n- **Persoonlijkheid:** Als je je niet jezelf voelt, bespreek met arts\n\n**Cardiovasculaire:**\n- **Hartslag/bloeddruk:** Regelmatige controle\n- **Waarschuwing:** Pijn op borst direct melden\n\n**Tips voor omgaan met bijwerkingen:**\n- Bijwerkingen-dagboek bijhouden\n- Geduld: veel bijwerkingen verdwijnen na 2-4 weken\n- Open communicatie met arts\n- Nooit zelf stoppen of dosis aanpassen',
    category: 'Medicatie',
    order: 20
  },
  {
    id: 'insurance-1',
    question: 'Wordt ADHD coaching vergoed door de zorgverzekering?',
    answer: '**Vergoeding situatie in Nederland:**\n\n**Basisverzekering:**\n- ADHD coaching wordt meestal niet vergoed uit basispakket\n- Psychologische behandeling (DBC-traject) wel\n- GGZ behandeling via huisarts verwijzing\n\n**Aanvullende verzekering:**\n- Sommige verzekeraars vergoeden coaching uit aanvullend pakket\n- Bedragen variëren (€200-€1000 per jaar)\n- Check je polis of bel je verzekeraar\n\n**Alternatieve vergoedingen:**\n- **Werkgever:** Vaak bereid coaching te vergoeden (productiviteit)\n- **Individueel budget (PGB):** Voor mensen met indicatie\n- **Belasting:** Coaching kan aftrekbaar zijn als ziektekosten\n- **Pgb/Zorgverzekering:** Via GGZ-traject soms mogelijk\n\n**Tips voor vergoeding:**\n- Vraag verwijsbrief van huisarts\n- Documenteer medische noodzaak\n- Zoek coach met juiste certificering\n- Check of coach gecontracteerd is\n\n**Kosten zonder vergoeding:**\n- ADHD coaching: €75-€150 per sessie\n- Traject van 10-15 sessies: €750-€2250\n- Investering in je toekomst en welzijn',
    category: 'Vergoeding',
    order: 21
  },
  {
    id: 'insurance-2',
    question: 'Hoe krijg ik vergoeding voor ADHD behandeling via de zorgverzekering?',
    answer: '**Stap-voor-stap vergoeding:**\n\n**1. Huisarts:**\n- **Verwijzing:** Vraag doorverwijzing naar GGZ\n- **Indicatie:** Leg uit waarom behandeling nodig is\n- **Documentatie:** Vraag kopie van verwijsbrief\n\n**2. GGZ instelling:**\n- **Intake:** Uitgebreid onderzoek en diagnose\n- **Behandelplan:** Samen opstellen wat nodig is\n- **DBC:** Diagnose Behandeling Combinatie wordt geopend\n\n**3. Behandeling opties (vergoed):**\n- **Psychiater/psycholoog:** DBC-tarief, volledig vergoed\n- **Cognitieve gedragstherapie:** In GGZ traject\n- **Medicatie:** Receptkosten via apotheek\n- **Groepstherapie:** Binnen GGZ instelling\n\n**4. Aanvullende vergoeding:**\n- **ADHD coaching:** Check aanvullend pakket\n- **Praktijkondersteuner:** Soms vergoed\n- **Tweede opinie:** Binnen referentiekader\n\n**Praktische tips:**\n- **Administratie:** Bewaar alle declaraties\n- **Eigen risico:** €385 (2024) eerst zelf betalen\n- **Maximale vergoeding:** Geen limiet binnen DBC\n- **Wachttijd:** 4-8 weken voor eerste afspraak\n\n**Let op:** Privé behandeling wordt niet vergoed uit basispakket.',
    category: 'Vergoeding',
    order: 22
  },
  {
    id: 'children-1',
    question: 'Hoe herken en help ik een kind met ADHD?',
    answer: '**Herkenning bij kinderen:**\n\n**Aandachtsproblemen:**\n- Snel afgeleid tijdens taken of spel\n- Moeite met instructies opvolgen\n- Vergeetachtig bij dagelijkse activiteiten\n- Vermijdt taken die concentratie vereisen\n- Verliest vaak spullen\n\n**Hyperactiviteit:**\n- Kan niet stilzitten op stoel\n- Rent of klimt excessief\n- Praat veel, moeilijk stil\n- Altijd "on the go"\n\n**Impulsiviteit:**\n- Antwoordt voordat vraag af is\n- Moeite met wachten op beurt\n- Onderbreekt anderen\n- Neemt risico\'s zonder na te denken\n\n**Hulp bieden:**\n\n**Thuis:**\n- Duidelijke structuur en routine\n- Positieve bekrachtiging\n- Korte, concrete instructies\n- Pauzes en beweging inplannen\n- Geduld en begrip\n\n**School:**\n- Overleg met leerkrachten\n- Eventueel passend onderwijs\n- Extra begeleiding of arrangementen\n- IEP (Individueel Educatie Plan)\n\n**Professional hulp:**\n- Kinderpsycholoog of psychiater\n- ADHD coaching voor kinderen\n- Oudertraining en -ondersteuning\n- Medicatie overweging (meestal vanaf 6 jaar)',
    category: 'Kinderen',
    order: 23
  },
  {
    id: 'children-2',
    question: 'Hoe praat ik met mijn kind over ADHD?',
    answer: '**Leeftijdsgepaste uitleg:**\n\n**Jonge kinderen (5-8 jaar):**\n- **Simpel:** "Je hersenen werken anders, dat maakt je speciaal"\n- **Vergelijking:** "Net als een auto die anders rijdt"\n- **Positief:** Focus op sterke punten (creatief, energiek)\n- **Geen schuld:** "Het is niet jouw schuld of die van papa/mama"\n\n**Oudere kinderen (9-12 jaar):**\n- **Uitgebreider:** "ADHD betekent dat je hersenen informatie anders verwerken"\n- **Voorbeelden:** "Daarom is stilzitten moeilijk" of "daarom vergeet je dingen"\n- **Behandeling:** "Er zijn manieren om het makkelijker te maken"\n- **Beroemdheden:** Vertel over succesvolle mensen met ADHD\n\n**Tieners (13+):**\n- **Volledige uitleg:** Neurobiologie, behandelopties\n- **Zelfadvocacy:** Leren zelf hulp vragen\n- **Toekomst:** "ADHD belemmert je dromen niet"\n- **Peer support:** Contact met andere tieners met ADHD\n\n**Belangrijke boodschappen:**\n- ADHD is geen excuus maar een verklaring\n- Iedereen heeft sterke en zwakke punten\n- Met hulp kun je alles bereiken\n- Je bent meer dan je ADHD\n\n**Timing:** Kies een rustig moment, geen stress situatie.',
    category: 'Kinderen',
    order: 24
  },
  {
    id: 'children-3',
    question: 'Welke school keuzes zijn er voor kinderen met ADHD?',
    answer: '**Regulier onderwijs met ondersteuning:**\n\n**Arrangementen:**\n- **Extra tijd:** Voor toetsen en taken\n- **Rustige werkplek:** Weg van afleidingen\n- **Bewegingspauzes:** Regelmatig even lopen\n- **Visuele structuur:** Schema\'s en timers\n- **Kleinere groepen:** Voor bepaalde vakken\n\n**School ondersteuningsprofiel:**\n- **Basisondersteuning:** Tot €3000 per jaar\n- **Arrangement:** €3000-€15000 per jaar\n- **Toelaatbaarheidsverklaring:** Voor speciaal onderwijs\n\n**Speciaal onderwijs:**\n\n**SO cluster 4:** \n- **Voor:** Ernstige gedragsproblematiek\n- **Kleine klassen:** 8-12 leerlingen\n- **Specialistische begeleiding:** ADHD expertise\n- **Intensieve ondersteuning:** Gedrag en leerproblemen\n\n**Praktijkonderwijs:**\n- **Voor:** Leerlingen die moeite hebben met theoretisch leren\n- **Praktijkgericht:** Veel hands-on activiteiten\n- **Kleinere groepen:** Meer persoonlijke aandacht\n\n**Keuze factors:**\n- Mate van ADHD symptomen\n- Leerproblemen\n- Sociale vaardigheden\n- Thuissituatie\n- Beschikbaarheid in de buurt\n\n**Tip:** Vraag schoolbezoek en praat met andere ouders.',
    category: 'Kinderen',
    order: 25
  },
  {
    id: 'women-1',
    question: 'Hoe uit ADHD zich bij vrouwen en meisjes?',
    answer: '**ADHD bij vrouwen wordt vaak gemist omdat:**\n- Symptomen zijn vaak minder opvallend\n- Meer internaliserende symptomen\n- Betere compensatiestrategieën\n- Historische focus op hyperactieve jongens\n\n**Typische symptomen bij vrouwen:**\n\n**Aandachtsproblemen:**\n- Dagdromen en "spacing out"\n- Moeite met organisatie en planning\n- Vergeetachtigheid\n- Hyperfocus op interessante onderwerpen\n\n**Emotionele aspecten:**\n- Intense emoties en mood swings\n- Perfectionisme als compensatie\n- Lage zelfwaarde en zelfkritiek\n- Angst en depressie (comorbiditeit)\n\n**Hormonale invloeden:**\n- Symptomen verergeren tijdens menstruatie\n- Veranderingen tijdens zwangerschap\n- Overgang kan symptomen intensiveren\n\n**Masking gedrag:**\n- Inspanning om "normaal" te lijken\n- Sociale camouflage\n- Uitputting door constant compenseren\n\n**Unieke uitdagingen:**\n- Later gediagnosticeerd (gemiddeld 12 jaar later)\n- Mommy guilt en perfecte moeder druk\n- Carrière vs familie balans\n- Hormonale therapie interacties\n\n**Belangrijke boodschap:** ADHD bij vrouwen is net zo reëel en behandelbaar als bij mannen',
    category: 'Vrouwen & ADHD',
    order: 26
  },
  {
    id: 'women-2',
    question: 'Hoe beïnvloeden hormonen ADHD symptomen bij vrouwen?',
    answer: '**Hormonale cyclus en ADHD:**\n\n**Menstruatiecyclus:**\n- **Week 1-2 (folliculaire fase):** Oestrogeen stijgt, symptomen vaak beter\n- **Week 3 (ovulatie):** Piek hormonen, vaak beste periode\n- **Week 4 (luteale fase):** Hormonen dalen, ADHD symptomen verergeren\n- **Menstruatie:** Laagste hormoonspiegels, moeilijkste periode\n\n**Zwangerschap:**\n- **1e trimester:** Vaak verergering door hormonale schommelingen\n- **2e trimester:** Verbetering door hoge oestrogeen\n- **3e trimester:** Wisselend, vermoeidheid speelt rol\n- **Postpartum:** Dramale hormoondaling, vaak ernstige symptomen\n\n**Menopauze:**\n- **Perimenopauze:** Onregelmatige hormonen, wisselende symptomen\n- **Menopauze:** Lage oestrogeen, vaak verergering ADHD\n- **Postmenopauze:** Stabiele (lage) hormonen\n\n**Waarom hormonen belangrijk zijn:**\n- Oestrogeen verhoogt dopamine beschikbaarheid\n- Progesteron kan ADHD symptomen verergeren\n- Hormonale schommelingen verstoren focus en emotieregulatie\n\n**Aanpassingen:**\n- **Medicatie:** Mogelijk dosisaanpassing tijdens cyclus\n- **Planning:** Zware taken in goede weken\n- **Zelfzorg:** Extra support tijdens moeilijke periodes\n- **Hormoontherapie:** Overleggen bij menopauze',
    category: 'Vrouwen & ADHD',
    order: 27
  },
  {
    id: 'women-3',
    question: 'Hoe ga ik om met ADHD als werkende moeder?',
    answer: '**Unieke uitdagingen werkende moeders:**\n- Dubbele belasting: werk en gezin organiseren\n- Mental load: aan alles denken voor het gezin\n- Perfectie druk: "supermom" syndroom\n- Weinig tijd voor zelfzorg\n- Schuldgevoelens over ADHD impact\n\n**Praktische strategieën:**\n\n**Organisatie:**\n- **Familie kalender:** Alles op één plek\n- **Meal prep:** Maaltijden voorbereiden\n- **Routines:** Vaste ochten- en avondroutines\n- **Delegeren:** Taken verdelen met partner/kinderen\n\n**Werk optimalisatie:**\n- **Flexibele werktijden:** Werk tijdens beste focus momenten\n- **Thuiswerken:** Minder reistijd, meer controle\n- **Prioriteiten:** Leer "nee" zeggen tegen extra taken\n- **Pauzes:** Neem bewust rustmomenten\n\n**Zelfzorg:**\n- **Eigen tijd:** Minimaal 30 min per dag voor jezelf\n- **Support netwerk:** Hulp vragen aan familie/vrienden\n- **Medicatie timing:** Afstemmen op dagritme\n- **Therapie/coaching:** Professionele ondersteuning\n\n**Kinderen:**\n- **Eerlijkheid:** Leg uit waarom mama soms gestrest is\n- **Structuur:** Kinderen hebben ook baat bij routines\n- **Quality time:** Bewuste aandacht belangrijker dan perfectie\n\n**Mantra:** Je bent een goede moeder, ook met ADHD. Perfectie bestaat niet.',
    category: 'Vrouwen & ADHD',
    order: 28
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

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFAQs() {
      try {
        const data = await getFAQItems();
        setFaqs(data);
      } catch (error) {
        console.error('Error loading FAQs:', error);
        setFaqs(comprehensiveFAQs);
      } finally {
        setLoading(false);
      }
    }
    
    loadFAQs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">FAQ's laden...</p>
        </div>
      </div>
    );
  }
  
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
            {categories.map(category => {
              const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
              return (
                <a 
                  key={category} 
                  href={`#${categorySlug}`}
                  className="bg-blue-50 rounded-lg border border-blue-200 p-4 hover:bg-blue-100 transition-colors cursor-pointer block"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(categorySlug);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <h3 className="text-sm font-semibold text-blue-800 mb-2">
                    {category}
                  </h3>
                  <div className="text-blue-600 text-sm">
                    {faqsByCategory[category].length} {faqsByCategory[category].length === 1 ? 'vraag' : 'vragen'}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content organized by category */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {categories.map(category => {
            const categorySlug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
            return (
              <div key={category} id={categorySlug} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200">
                  {category}
                </h2>
              <div className="space-y-4">
                {faqsByCategory[category].map((faq) => (
                  <details key={faq.id} className="bg-white rounded-lg shadow-md">
                    <summary className="p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown className="text-gray-400 flex-shrink-0 transform transition-transform duration-200" size={20} />
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-200">
                        <div className="prose prose-blue prose-lg max-w-none text-gray-700 
                                      prose-p:mb-4 prose-p:leading-relaxed 
                                      prose-headings:text-gray-800 prose-headings:font-semibold prose-headings:mb-3 prose-headings:mt-6
                                      prose-ul:mb-4 prose-ul:mt-2 prose-li:mb-1 prose-li:leading-relaxed
                                      prose-ol:mb-4 prose-ol:mt-2
                                      prose-strong:text-gray-800 prose-strong:font-semibold
                                      prose-em:text-gray-700
                                      first:prose-headings:mt-0">
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                              h1: ({children}) => <h1 className="text-xl font-semibold text-gray-800 mb-3 mt-6 first:mt-0">{children}</h1>,
                              h2: ({children}) => <h2 className="text-lg font-semibold text-gray-800 mb-3 mt-6 first:mt-0">{children}</h2>,
                              h3: ({children}) => <h3 className="text-base font-semibold text-gray-800 mb-2 mt-5 first:mt-0">{children}</h3>,
                              ul: ({children}) => <ul className="mb-4 mt-2 space-y-1">{children}</ul>,
                              ol: ({children}) => <ol className="mb-4 mt-2 space-y-1">{children}</ol>,
                              li: ({children}) => <li className="leading-relaxed">{children}</li>,
                              strong: ({children}) => <strong className="font-semibold text-gray-800">{children}</strong>
                            }}
                          >
                            {faq.answer}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
              </div>
            );
          })}

          {/* AI Chat Assistant Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Niet gevonden wat je zocht?
              </h2>
              <p className="text-lg text-gray-600">
                Praat met onze AI ADHD Assistente en krijg direct persoonlijke hulp
              </p>
            </div>
            <ChatAssistant />
          </div>

          {/* Additional CTA for finding coaches */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
            <p className="text-blue-700 mb-4">
              Of bekijk ADHD coaches in jouw stad voor persoonlijke ondersteuning
            </p>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Vind een Coach
            </Link>
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