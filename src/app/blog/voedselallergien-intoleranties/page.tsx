import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, CheckCircle2, XCircle, Info, ShieldAlert, FileSearch, Apple, Pill, Brain, Heart, Zap, Clock, Award , ArrowLeft } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Voedselallergieën en Intoleranties: Het Verschil en Wat Te Eten | Gids 2025',
  description: 'Complete gids voedselallergieën vs intoleranties: symptomen, diagnose, glutenvrij, lactosevrij, notenallergie en veilig eten met alternatieven.',
  keywords: [
    'voedselallergie',
    'voedselintolerantie',
    'glutenvrij',
    'lactosevrij',
    'notenallergie',
    'allergie symptomen',
    'intolerantie symptomen',
    'gluten intolerantie',
    'allergie dieet',
    'voedselallergie test'
  ],
  openGraph: {
    title: 'Voedselallergieën en Intoleranties: Het Verschil en Wat Te Eten',
    description: 'Complete gids over voedselallergieën en intoleranties met praktische eetadviezen',
    images: ['/img/blog/voedselallergien-intoleranties/featured.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Voedselallergieën en Intoleranties: Het Verschil en Wat Te Eten',
  description: 'Uitgebreide gids over het verschil tussen voedselallergieën en intoleranties en veilig eten.',
  author: {
    '@type': 'Organization',
    name: 'Dietist in de Buurt',
    url: 'https://dietistindebuurt.nl'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dietist in de Buurt',
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
    '@id': 'https://dietistindebuurt.nl/blog/voedselallergien-intoleranties'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://dietistindebuurt.nl/img/blog/voedselallergien-intoleranties/featured.webp',
    width: 1200,
    height: 630
  },
  url: 'https://dietistindebuurt.nl/blog/voedselallergien-intoleranties',
  inLanguage: 'nl-NL'
};

export default function VoedselallergienIntolerantiesPage() {
  const keyDifferences = {
    allergy: {
      title: "Voedselallergie",
      icon: ShieldAlert,
      system: "Immuunsysteem reageert",
      reaction: "IgE-antilichamen aangemaakt",
      timing: "Binnen minuten tot 2 uur",
      severity: "Kan levensbedreigend zijn (anafylaxie)",
      amount: "Kleinste beetje kan reactie geven",
      symptoms: [
        "Huiduitslag, jeuk, zwelling (lippen, tong, keel)",
        "Benauwdheid, piepende ademhaling",
        "Buikpijn, misselijkheid, braken, diarree",
        "Duizeligheid, flauwvallen",
        "Anafylactische shock (levensgevaarlijk)"
      ],
      diagnosis: "Bloedtest (IgE), huidpriktest, provocatietest",
      treatment: "Strikte vermijding, EpiPen bij ernstige allergie"
    },
    intolerance: {
      title: "Voedselintolerantie",
      icon: AlertTriangle,
      system: "Spijsverteringssysteem reageert",
      reaction: "Enzymtekort of overgevoeligheid",
      timing: "Uren tot dagen later",
      severity: "Vervelend maar niet levensgevaarlijk",
      amount: "Hoeveelheid maakt verschil (drempelwaarde)",
      symptoms: [
        "Opgeblazen gevoel, gasvorming",
        "Buikpijn, krampen",
        "Diarree of obstipatie",
        "Vermoeidheid, hoofdpijn",
        "Huidproblemen (acne, eczeem)"
      ],
      diagnosis: "Eliminatiedieet, H2-ademtest (lactose/fructose), dagboek",
      treatment: "Beperken of vermijden, enzymsupplementen mogelijk"
    }
  };

  const commonAllergies = [
    {
      allergen: "Koemelkeiwit Allergie",
      icon: Apple,
      prevalence: "2-3% kinderen, 0.5% volwassenen",
      proteins: "Caseïne en wei-eiwitten",
      crossReaction: "Vaak ook geit/schapenmelk (80-90%)",
      symptoms: "Huiduitslag, eczeem, buikklachten, benauwdheid",
      avoidList: [
        "Melk, yoghurt, kaas, boter, room",
        "Melkpoeder, wei, caseïne (ingrediënten)",
        "Veel gebak, koekjes, chocolade",
        "Sauzen (bechamel, roomsaus)"
      ],
      alternatives: [
        "Sojamelk, havermelk, amandelmelk",
        "Kokosyoghurt, soja yoghurt",
        "Plantaardige margarine, olijfolie",
        "Specialistische vegan producten"
      ],
      labels: "E-nummers vaak zuivel: E966, E1105, E4511",
      note: "Lactosevrij ≠ melkeiwitvrij! Lactosevrije zuivel bevat nog steeds eiwit"
    },
    {
      allergen: "Notenallergie",
      icon: ShieldAlert,
      prevalence: "1-2% bevolking",
      proteins: "Specifieke eiwitten per nootsoort",
      crossReaction: "50% reageert op meerdere noten",
      symptoms: "Jeuk mond/keel, zwelling, benauwdheid, anafylaxie mogelijk",
      avoidList: [
        "Boom noten: amandel, hazelnoot, walnoot, cashew, pistache, pecannoot",
        "Pinda (peulvrucht, maar vaak samen vermeden)",
        "Notenpasta's, pindakaas",
        "Nougat, marzepein, pesto (pijnboompitten)"
      ],
      alternatives: [
        "Zaden: zonnebloempitten, pompoenpitten",
        "Zaadpasta's: zonnebloemzaad spread, tahini (sesam)",
        "Kokos (botanisch geen noot, meestal veilig)",
        "Peulvruchten voor eiwit (als pinda ook veilig)"
      ],
      labels: "Let op: 'kan sporen van noten bevatten' = kruisbesmetting risico",
      note: "Ernstige notenallergie? Draag altijd EpiPen, vermijd ook kruisbesmetting"
    },
    {
      allergen: "Glutenallergie (Tarweallergie)",
      icon: AlertTriangle,
      prevalence: "0.5-1% bevolking (≠ coeliakie!)",
      proteins: "Gluten-eiwitten in tarwe, gerst, rogge",
      crossReaction: "Soms ook gerst/rogge, niet altijd",
      symptoms: "Huiduitslag, neusloop, benauwdheid, astma, jeuk",
      avoidList: [
        "Tarwe: brood, pasta, couscous, bulgur",
        "Gerst: bier, mout",
        "Rogge: roggebrood",
        "Verborgen gluten: sojasaus, bouillonblokjes"
      ],
      alternatives: [
        "Glutenvrije granen: rijst, maïs, quinoa, boekweit",
        "Glutenvrij brood, pasta (controleer etiket)",
        "Aardappel, zoete aardappel",
        "Haver (vaak veilig, controleer kruisbesmetting)"
      ],
      labels: "Gluten-ingrediënten: tarwemeel, gerstemout, roggebloem, seitan",
      note: "Tarweallergie ≠ coeliakie (auto-immuun) ≠ glutenintolerantie (niet-coeliakie)"
    },
    {
      allergen: "Ei-allergie",
      icon: Zap,
      prevalence: "1-2% kinderen, vaak uitgegroeid bij 5 jaar",
      proteins: "Eiwit (ovomucoid) en dooier (ovalbumine)",
      crossReaction: "Sommigen alleen eiwit, anderen ook dooier",
      symptoms: "Huiduitslag, eczeem, buikpijn, braken, zelden anafylaxie",
      avoidList: [
        "Eieren (gekookt, gebakken, rauw)",
        "Mayonaise, aioli",
        "Veel gebak, koekjes, pannenkoeken",
        "Pasta (verse pasta vaak ei)"
      ],
      alternatives: [
        "Chiazaad gel: 1el chiazaad + 3el water (bindt als ei)",
        "Lijnzaad: 1el gemalen + 3el water",
        "Appelmoes: 60g = 1 ei (in bakken)",
        "Commercial: Orgran No Egg, Follow Your Heart VeganEgg"
      ],
      labels: "E-nummers: E1105 (lysozym uit ei), albumine, lecithine (kan ei zijn)",
      note: "Sommige vaccins bevatten ei-eiwit, meld allergie aan arts!"
    },
    {
      allergen: "Vis en Schaal-/Schelpdieren",
      icon: Heart,
      prevalence: "0.5% bevolking, vaak levenslang",
      proteins: "Parvalbumine (vis), tropomyosine (schaaldieren)",
      crossReaction: "Visallergie ≠ schaaldieren allergie (verschillende eiwitten)",
      symptoms: "Jeuk, zwelling, misselijkheid, anafylaxie mogelijk",
      avoidList: [
        "Vis: alle soorten (zalm, tonijn, kabeljauw, etc.)",
        "Schaaldieren: garnalen, kreeft, krab",
        "Schelpdieren: mosselen, oesters, inktvis",
        "Vissaus, visolie (vaak allergeen aanwezig)"
      ],
      alternatives: [
        "Omega-3: algenolie (EPA/DHA zonder vis)",
        "Eiwit: kip, vlees, eieren, peulvruchten",
        "Jodium: gejodeerd zout, zeewier (voorzichtig testen)",
        "Vitamine D: supplement, paddenstoelen, zonlicht"
      ],
      labels: "Let op: Aziatische gerechten vaak vissaus, ook in vegetarisch",
      note: "Visolie supplements vaak allergeen! Kies algenolie bij visallergie"
    },
    {
      allergen: "Soja-allergie",
      icon: Brain,
      prevalence: "0.3% bevolking, vaak kinderen",
      proteins: "Soja-eiwitten",
      crossReaction: "50% ook pinda allergie (beide peulvruchten)",
      symptoms: "Jeuk, huiduitslag, buikklachten, zelden ernstig",
      avoidList: [
        "Sojamelk, soja yoghurt, tofu, tempeh",
        "Sojasaus, tamari, miso",
        "Veel vegan alternatieven (controleer etiket)",
        "Edamame, sojanoten"
      ],
      alternatives: [
        "Andere melk: haver, amandel, rijst, kokos",
        "Eiwit: kikkererwten, linzen, quinoa",
        "Saus: kokos aminos (sojasaus vervanger)",
        "Tofu/tempeh: kikkererwten, bonen, seitan (tarwe)"
      ],
      labels: "Ingrediënten: lecithine (vaak soja, maar meestal veilig - verwerkt), sojaproteïne",
      note: "Sojalecithine vaak veilig (verwerkt), maar test eerst kleine hoeveelheid"
    }
  ];

  const commonIntolerances = [
    {
      intolerance: "Lactose-intolerantie",
      icon: Info,
      prevalence: "65% wereldbevolking, vooral Azië/Afrika/Zuid-Amerika",
      cause: "Tekort enzym lactase (koolhydraat afbraak)",
      mechanism: "Lactose niet verteerd → fermentatie dikke darm → gas/diarree",
      symptoms: [
        "Opgeblazen gevoel binnen 30min-2u na zuivel",
        "Buikpijn, krampen",
        "Diarree, gasvorming",
        "Misselijkheid",
        "Geen huiduitslag of benauwdheid (≠ allergie)"
      ],
      threshold: "Meeste mensen verdragen 12-15g lactose (1 glas melk)",
      alternatives: [
        "Lactosevrije melk/yoghurt (enzym toegevoegd)",
        "Harde kazen (weinig lactose: belegen, oud)",
        "Boter (bijna geen lactose)",
        "Plantaardige melk (soja, haver, amandel)"
      ],
      tips: [
        "Lactase tabletten bij maaltijd (Lactrase, Nutricia)",
        "Kleine hoeveelheden verspreid over dag vaak wel OK",
        "Yoghurt vaak beter verdragen (probiotica helpen)",
        "Verhitte melk beter verdragen dan koude"
      ]
    },
    {
      intolerance: "Fructose-intolerantie",
      icon: Apple,
      prevalence: "30-40% heeft fructosemalabsorptie",
      cause: "Slechte opname fructose in dunne darm",
      mechanism: "Overmaat fructose → dikke darm → fermentatie → klachten",
      symptoms: [
        "Opgeblazen gevoel na fruit",
        "Diarree, buikpijn",
        "Vermoeidheid",
        "Klachten 2-6u na eten",
        "Geen allergische reacties"
      ],
      threshold: "Meestal 10-25g fructose per keer (1-2 stuks fruit)",
      alternatives: [
        "Laag-fructose fruit: banaan, aardbei, blauwe bes, citroen",
        "Combineer met glucose (helpt opname): druivensuiker",
        "Glucose-rijke groenten: wortel, pompoen",
        "Kristalsuiker vaak beter dan honing/agave"
      ],
      tips: [
        "Vermijd honing, agave siroop (zeer hoog fructose)",
        "Let op fructose in verwerkte producten (fructose-glucose siroop)",
        "Eet fruit met maaltijd (niet op lege maag)",
        "Glucose helpt: eet fruit met glucose-rijke voeding"
      ]
    },
    {
      intolerance: "Histamine-intolerantie",
      icon: AlertTriangle,
      prevalence: "1-3% bevolking, vooral vrouwen 40+",
      cause: "Tekort enzym DAO (diamine oxidase - histamine afbraak)",
      mechanism: "Histamine stapelt op → pseudo-allergische reactie",
      symptoms: [
        "Hoofdpijn, migraine",
        "Rode huid, flushing, jeuk",
        "Neusverstopping, niezen",
        "Hartkloppingen, duizeligheid",
        "Buikklachten, diarree"
      ],
      threshold: "Varieert sterk, opbouw effect (cumulatief)",
      alternatives: [
        "Vers voedsel (histamine neemt toe bij bewaren)",
        "Verse vis i.p.v. ingeblikte/gerookte",
        "Verse groenten i.p.v. zuurkool",
        "Verse kaas i.p.v. oude/gefermenteerde"
      ],
      tips: [
        "Vermijd: oude kaas, gerookte vis, zuurkool, gefermenteerd",
        "Alcohol verergert (vooral rode wijn)",
        "Citrusvruchten zijn histamine liberators (triggeren afgifte)",
        "DAO supplement kan helpen (neem voor maaltijd)"
      ]
    },
    {
      intolerance: "Glutenintolerantie (Niet-Coeliakie)",
      icon: ShieldAlert,
      prevalence: "6% bevolking (geschat)",
      cause: "Onbekend, geen coeliakie (geen darmschade)",
      mechanism: "Gevoeligheid voor gluten/fructanen in graan",
      symptoms: [
        "Opgeblazen gevoel, buikpijn",
        "Vermoeidheid, 'brain fog'",
        "Hoofdpijn",
        "Gewrichtspijn",
        "Klachten binnen uren tot dagen"
      ],
      threshold: "Varieert per persoon, meestal geen kleine sporen probleem",
      alternatives: [
        "Glutenvrije granen: rijst, quinoa, maïs, boekweit",
        "Glutenvrij brood/pasta",
        "Aardappel, zoete aardappel",
        "Haver (vaak goed verdragen, glutenvrij label)"
      ],
      tips: [
        "Kan ook FODMAP gerelateerd zijn (fructanen in tarwe)",
        "Test eerst coeliakie (bloedtest) voor glutenvrij gaan",
        "Glutenvrij vaak ook beter voor PDS-patiënten",
        "Kruisbesmetting minder streng dan bij coeliakie"
      ]
    }
  ];

  const diagnosisMethods = {
    allergies: [
      {
        method: "Bloedtest (IgE)",
        what: "Meet specifieke IgE-antilichamen",
        accuracy: "70-80% accuraat",
        pros: "Veilig, geen allergeen contact nodig",
        cons: "Vals positief mogelijk (test positief, geen symptomen)",
        when: "Eerste stap bij vermoeden allergie"
      },
      {
        method: "Huidpriktest",
        what: "Kleine hoeveelheid allergeen op huid, prikje",
        accuracy: "80-90% accuraat voor voedsel",
        pros: "Snel resultaat (15-20 min)",
        cons: "Kleine kans op allergische reactie",
        when: "Na positieve bloedtest ter bevestiging"
      },
      {
        method: "Provocatietest (Dubbelblind)",
        what: "Eten van allergeen onder medisch toezicht",
        accuracy: "95%+ (gouden standaard)",
        pros: "Definitief bewijs allergie of juist niet",
        cons: "Risico allergische reactie, alleen in ziekenhuis",
        when: "Bij onduidelijkheid na andere tests"
      }
    ],
    intolerances: [
      {
        method: "Eliminatiedieet",
        what: "4-6 weken volledig vermijden, dan herintroduceren",
        accuracy: "Zeer accuraat als goed uitgevoerd",
        pros: "Geen kosten, definitief bewijs",
        cons: "Tijd, discipline nodig, begeleiding diëtist aan te raden",
        when: "Eerste keuze bij vermoeden intolerantie"
      },
      {
        method: "H2-ademtest",
        what: "Waterstof in adem meten na lactose/fructose inname",
        accuracy: "80-90% voor lactose/fructose",
        pros: "Objectieve meting",
        cons: "Alleen voor specifieke suikers (lactose, fructose)",
        when: "Bevestiging lactose/fructose intolerantie"
      },
      {
        method: "Voedingsdagboek",
        what: "Noteer alles + symptomen minimaal 2 weken",
        accuracy: "Varieert, afhankelijk van nauwkeurigheid",
        pros: "Gratis, overzicht patronen",
        cons: "Tijd, niet altijd duidelijke verbanden",
        when: "Eerste stap bij vage klachten"
      },
      {
        method: "IgG-test",
        what: "Meet IgG-antilichamen (GEEN IgE)",
        accuracy: "NIET WETENSCHAPPELIJK BEWEZEN",
        pros: "Geen (vals gevoel van zekerheid)",
        cons: "Onbetrouwbaar, duur, onnodige eliminatie voeding",
        when: "NIET AANBEVOLEN - geldverspilling"
      }
    ]
  };

  const labelReading = {
    allergyLabels: {
      title: "Allergenen Op Etiketten (EU Wet)",
      mandatory: "14 verplichte allergenen sinds 2014:",
      list: [
        "Glutenbevattende granen (tarwe, rogge, gerst, haver, spelt)",
        "Schaaldieren en producten op basis daarvan",
        "Eieren en producten op basis daarvan",
        "Vis en producten op basis daarvan",
        "Pinda's en producten op basis daarvan",
        "Soja en producten op basis daarvan",
        "Melk en producten op basis daarvan (incl. lactose)",
        "Noten (amandel, hazelnoot, walnoot, cashew, pecannoot, etc.)",
        "Selderij en producten op basis daarvan",
        "Mosterd en producten op basis daarvan",
        "Sesamzaad en producten op basis daarvan",
        "Zwaveldioxide en sulfieten (&gt; 10mg/kg)",
        "Lupine en producten op basis daarvan",
        "Weekdieren en producten op basis daarvan"
      ],
      formatting: "Allergenen verplicht vetgedrukt of HOOFDLETTERS op etiket"
    },
    warnings: [
      {
        text: "Kan sporen bevatten van...",
        meaning: "Kruisbesmetting mogelijk in fabriek",
        action: "Bij allergie: vermijden. Bij intolerantie: meestal klein risico",
        strict: "Notenallergie, visallergie → wel vermijden"
      },
      {
        text: "Vervaardigd in bedrijf waar ook... verwerkt wordt",
        meaning: "Kruisbesmetting mogelijk maar maatregelen genomen",
        action: "Bij ernstige allergie vermijden, anders vaak OK",
        strict: "Minder streng dan 'kan sporen bevatten'"
      },
      {
        text: "Glutenvrij (doorgestreepte aar)",
        meaning: "Max 20mg gluten/kg (EU norm)",
        action: "Veilig voor coeliakie en meeste intoleranties",
        strict: "Bij tarweallergie: controleer of tarwe gebruikt (kan nog eiwit bevatten)"
      },
      {
        text: "Lactosevrij",
        meaning: "Max 0.1g lactose/100g",
        action: "Veilig voor lactose-intolerantie, NIET voor melkeiwitallergie!",
        strict: "Bevat nog steeds melkeiwit (caseïne, wei)"
      }
    ],
    hiddenSources: [
      { allergen: "Melk", hidden: "Wei, caseïne, lactose, melkpoeder, boter, ghee, E966, E1105" },
      { allergen: "Gluten", hidden: "Tarwemeel, gerstemout, roggebloem, seitan, couscous, bulgur" },
      { allergen: "Ei", hidden: "Albumine, lecithine (kan ei zijn), E1105 (lysozym)" },
      { allergen: "Soja", hidden: "Lecithine (vaak soja), sojaproteïne, textured vegetable protein (TVP)" },
      { allergen: "Noten", hidden: "Marzepein (amandel), nougat, pesto (pijnboompitten)" }
    ]
  };

  const crossContamination = {
    home: [
      "Aparte snijplanken voor allergenen (bijv. brood apart van glutenvrij)",
      "Was handen/mes/plank na contact met allergeen",
      "Eigen pindakaaspotje (geen mes dubbel indopen na brood)",
      "Frituur niet delen met gluten producten",
      "Aparte koekenpan voor glutenvrij (gluten blijft plakken)",
      "Label duidelijk: 'Alleen voor glutenvrij' op potjes/planken"
    ],
    restaurant: [
      "Meld allergie ALTIJD vooraf (telefonisch + bij reserveren)",
      "Herhaal bij serveerder: 'Ik heb ernstige X allergie, geen kruisbesmetting'",
      "Vraag hoe ze kruisbesmetting voorkomen (aparte plank/mes?)",
      "Bij twijfel: simpel gerecht (gegrild vlees/vis + groenten)",
      "Sauzen vaak risicovol (gluten, zuivel, noten) - vraag om apart",
      "Desserts meestal risico (noten, zuivel, ei) - neem eigen mee of sla over"
    ],
    travel: [
      "Allergie kaartje in lokale taal (print vooraf)",
      "EpiPen altijd bij je, ook in handbagage (+ doktersverklaring)",
      "Boek hotel met keuken (zelf koken = veiligst)",
      "Google Translate klaar met allergie zinnen",
      "Noodvoeding in koffer (energie repen, glutenvrij crackers)",
      "Controleer supermarkten vooraf (Azië vaak moeilijk voor zuivel/gluten)"
    ]
  };

  const emergencyProtocol = {
    mild: {
      title: "Milde Reactie (Jeuk, Rode Huid)",
      symptoms: "Jeuk, rode plekken, lichte misselijkheid",
      action: [
        "Stop met eten van het voedsel",
        "Antihistamine tablet (cetirizine, loratadine)",
        "Blijf kalm, ga zitten",
        "Observeer 30-60 min of het erger wordt",
        "Bel huisarts bij verergering"
      ],
      when: "Niet levensbedreigend, wel oncomfortabel"
    },
    moderate: {
      title: "Matige Reactie (Zwelling, Buikklachten)",
      symptoms: "Zwelling lippen/tong, buikpijn, braken, diarree",
      action: [
        "Stop met eten",
        "Antihistamine direct innemen",
        "Bel huisarts of HAP voor advies",
        "Observeer zorgvuldig: wordt zwelling erger?",
        "Bij twijfel over ademhaling: 112"
      ],
      when: "Kan snel verergeren, goede monitoring nodig"
    },
    severe: {
      title: "Ernstige Reactie (Anafylaxie)",
      symptoms: "Benauwdheid, zwelling keel, duizeligheid, bewustzijnsverlies, erge buikpijn",
      action: [
        "BEL 112 DIRECT",
        "Gebruik EpiPen direct in bovenbeen (door kleding mag)",
        "Leg persoon plat met benen omhoog (behalve als braakt)",
        "Herhaal EpiPen na 5-15min als geen verbetering",
        "Blijf bij persoon tot ambulance er is"
      ],
      when: "LEVENSGEVAARLIJK - elke seconde telt"
    },
    epipen: {
      title: "EpiPen Gebruik (Adrenaline)",
      when: "Bij eerste tekenen anafylaxie (benauwdheid, zwelling keel)",
      how: [
        "Verwijder blauwe veiligheidskap",
        "Plaats oranje kant tegen bovenbeen (buitenkant)",
        "Druk hard in tot je 'klik' hoort",
        "Houd 3 seconden vast",
        "Masseer 10 seconden na verwijderen",
        "BEL 112 (ook na EpiPen = ziekenhuis nodig)"
      ],
      note: "Te vroeg EpiPen is veiliger dan te laat! Bij twijfel: gebruik"
    }
  };

  const nutritionConcerns = [
    {
      restriction: "Zuivelvrij (Allergie/Intolerantie)",
      risk: "Calcium, vitamine D, eiwit, B2 tekort",
      solution: [
        "Calcium: verrijkte plantmelk (250ml = 300mg), groene groenten, amandelen, vijgen",
        "Vitamine D: supplement 20-25mcg/dag, paddenstoelen, zonlicht",
        "Eiwit: tofu, tempeh, peulvruchten, noten (als geen notenallergie)",
        "B2: amandelen, paddenstoelen, verrijkte plantmelk"
      ],
      supplement: "Calcium (500mg 2x/dag) + D3 (25mcg) als voeding onvoldoende"
    },
    {
      restriction: "Glutenvrij (Allergie/Coeliakie/Intolerantie)",
      risk: "Vezels, B-vitamines, ijzer tekort",
      solution: [
        "Vezels: quinoa, boekweit, volkoren rijst, groenten, peulvruchten",
        "B-vitamines: vlees, ei, verrijkte glutenvrije producten, noten",
        "IJzer: rood vlees, peulvruchten, groene bladgroenten + vitamine C",
        "Variatie: niet alleen rijst, wissel met quinoa, boekweit, maïs"
      ],
      supplement: "Meestal niet nodig bij gevarieerd glutenvrij dieet"
    },
    {
      restriction: "Notenvrij (Allergie)",
      risk: "Gezonde vetten, vitamine E, magnesium tekort",
      solution: [
        "Gezonde vetten: avocado, olijfolie, visolie/algenolie, lijnzaad",
        "Vitamine E: zonnebloempitten, avocado, spinazie",
        "Magnesium: pompoenpitten, volkoren granen, peulvruchten",
        "Eiwit: peulvruchten, quinoa, zaden (pompoen, zonnebloempitten)"
      ],
      supplement: "Omega-3 algenolie bij weinig vette vis"
    },
    {
      restriction: "Ei-vrij (Allergie)",
      risk: "Eiwit, vitamine B12, choline tekort",
      solution: [
        "Eiwit: vlees, vis, zuivel (als geen allergie), peulvruchten, tofu",
        "B12: vlees, vis, zuivel, verrijkte producten, supplement",
        "Choline: lever (meeste), peulvruchten, broccoli, koolsoorten",
        "Bakken: gebruik ei-vervangers (chiazaad, lijnzaad, appelmoes)"
      ],
      supplement: "B12 (vooral bij ook zuivelvrij): 50-100mcg/dag"
    },
    {
      restriction: "Meerdere Allergieën",
      risk: "Cumulatieve tekorten, beperkte variatie",
      solution: [
        "Werk samen met diëtist (essentieel bij &gt;2 allergieën)",
        "Focus op wat WEL mag, niet op verboden",
        "Supplementen vaak nodig (B12, D, calcium)",
        "Regelmatige bloedwaarden controle (2x per jaar)"
      ],
      supplement: "Persoonlijk advies diëtist nodig"
    }
  ];

  const practicalTips = [
    {
      category: "Boodschappen Controlelijst",
      icon: Apple,
      tips: [
        "Lees ALTIJD ingrediëntenlijst (ook bij 'bekende' producten - recepten wijzigen)",
        "Controleer allergenen vetgedrukt/HOOFDLETTERS",
        "Download apps: SQTS (scan barcode = allergenen controle)",
        "Vermijd 'kan sporen bevatten' bij ernstige allergie",
        "Nieuwe producten eerst thuis testen (niet onderweg/restaurant)",
        "Bewaar verpakkingen met ingrediëntenlijst (foto op telefoon)"
      ]
    },
    {
      category: "Maaltijd Voorbereiding",
      icon: Info,
      tips: [
        "Maaltijdvoorbereiding is je vriend (weet precies wat erin zit)",
        "Maak grote batches veilig voedsel, vries in",
        "Aparte voorraad 'veilige' producten (eigen kastje)",
        "Label alles duidelijk in koelkast/kast",
        "Simpele gerechten = minder risico (minder ingrediënten)",
        "Zelf sauzen maken (winkel sauzen vaak verborgen allergenen)"
      ]
    },
    {
      category: "Sociaal Eten",
      icon: Heart,
      tips: [
        "Meld allergie ruim vooraf (gastvrouw/restaurant)",
        "Bied aan om zelf gerecht mee te nemen (feestjes)",
        "Eet voor je gaat als je risico niet wilt nemen",
        "Neem altijd medicatie mee (antihistamine, EpiPen)",
        "Leg uit: 'Het is geen keuze, ik word er echt ziek van'",
        "Vrienden/familie: toon hen veilige alternatieven (helpt begrip)"
      ]
    },
    {
      category: "Kinderen Met Allergie",
      icon: Brain,
      tips: [
        "Leer kind zelf te vragen naar ingrediënten (vanaf 4-5 jaar)",
        "School/kdv: actieplan + medicatie aanwezig",
        "Allergie armband of kaartje bij jonge kinderen",
        "Veilige snacks altijd in tas (verjaardagen, uitjes)",
        "Oefen EpiPen gebruik met trainer (kind + verzorgers)",
        "Contact met andere ouders: allergie-vriendelijke traktaties afspreken"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "IgG-test Doen Voor Intoleranties",
      problem: "IgG-test is NIET wetenschappelijk bewezen, meet normale immuunrespons (geen allergie/intolerantie)",
      correct: "Eliminatiedieet + herintroductie onder begeleiding diëtist",
      solution: "Spaar €150-300 en doe bewezen diagnostiek"
    },
    {
      mistake: "'Lactosevrij' Gelijk Aan 'Melkeiwitvrij'",
      problem: "Lactosevrije producten bevatten nog steeds melkeiwit (caseïne, wei) - gevaarlijk bij allergie!",
      correct: "Lactosevrij = OK voor intolerantie, NIET voor melkeiwit allergie",
      solution: "Bij allergie: volledige plantaardige alternatieven"
    },
    {
      mistake: "Kruisbesmetting Negeren",
      problem: "Kleinste beetje kan al reactie geven bij allergie (mes in pindakaaspot na brood)",
      correct: "Aparte planken, messen, potjes voor allergeen-vrije voeding",
      solution: "Behandel alsof het 'besmet' is - strikte scheiding"
    },
    {
      mistake: "Geen EpiPen Bij Je Bij Bekende Allergie",
      problem: "Anafylaxie kan ELKE keer gebeuren, ook als vorige keren mild waren",
      correct: "EpiPen ALTIJD bij je, ook 'even boodschappen doen'",
      solution: "2 EpiPens: 1 bij jezelf, 1 op vaste plek (werk/school)"
    },
    {
      mistake: "Te Strikt Vermijden Bij Intolerantie",
      problem: "Onnodig strikt = sociaal isolement, voedingstekorten, geen kwaliteit van leven",
      correct: "Bij intolerantie: test je drempelwaarde (hoeveel kun je verdragen?)",
      solution: "Eliminatie → herintroductie → persoonlijke grenzen kennen"
    },
    {
      mistake: "Geen Professionele Begeleiding",
      problem: "Zelf doen vaak verkeerd: te strikt OF onveilig, voedingstekorten, sociale problemen",
      correct: "Werk samen met allergoloog + diëtist bij diagnose en dieetopstelling",
      solution: "Investeer in juiste begeleiding = voorkom problemen"
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
            src="/img/blog/voedselallergien-intoleranties/featured.webp"
            alt="Voedselallergieën en Intoleranties - Het Verschil"
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Share Buttons */}
        <div className="px-6 md:px-12 py-6 border-b">
          <ShareButtons title="Voedselallergieën en Intoleranties: Het Verschil en Wat Te Eten" />
        </div>

        {/* Hero Section */}
        <header className="px-6 md:px-12 py-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-semibold uppercase text-sm tracking-wide">Allergieën & Intoleranties 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Voedselallergieën en Intoleranties: Het Verschil en Wat Te Eten
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Complete gids: symptomen herkennen, diagnose, veilig eten en praktische alternatieven
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Evidence-based</span>
            </div>
          </div>
        </header>

        {/* Key Differences */}
        <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Het Cruciale Verschil: Allergie vs Intolerantie
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(keyDifferences).map((type, idx) => (
                <div key={idx} className={`rounded-xl p-8 shadow-lg border-2 ${
                  idx === 0 ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'
                }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`rounded-full p-3 ${
                      idx === 0 ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      <type.icon className={`w-8 h-8 ${
                        idx === 0 ? 'text-red-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold">{type.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Mechanisme:</p>
                      <p className="font-semibold">{type.system}</p>
                      <p className="text-sm text-gray-700">{type.reaction}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Timing:</p>
                        <p className="text-sm font-semibold">{type.timing}</p>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <p className="text-xs text-gray-600">Ernst:</p>
                        <p className="text-sm font-semibold">{type.severity}</p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Hoeveelheid:</p>
                      <p className="text-sm text-gray-700">{type.amount}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Symptomen:</p>
                      <ul className="space-y-1">
                        {type.symptoms.map((symptom, sIdx) => (
                          <li key={sIdx} className="text-sm text-gray-700">• {symptom}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-1">Diagnose:</p>
                      <p className="text-sm text-gray-700">{type.diagnosis}</p>
                    </div>

                    <div className={`p-3 rounded font-semibold ${
                      idx === 0 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      ⚠️ {type.treatment}
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Common Allergies */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meest Voorkomende Voedselallergieën
            </h2>

            <div className="space-y-6">
              {commonAllergies.map((allergy, idx) => (
                <div key={idx} className="bg-red-50 rounded-xl p-6 shadow-md border-l-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                      <allergy.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{allergy.allergen}</h3>
                      
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        <div className="bg-white p-3 rounded">
                          <p className="text-xs text-gray-600">Prevalentie:</p>
                          <p className="text-sm font-semibold">{allergy.prevalence}</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-xs text-gray-600">Eiwitten:</p>
                          <p className="text-sm font-semibold">{allergy.proteins}</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-xs text-gray-600">Kruisreactie:</p>
                          <p className="text-sm font-semibold">{allergy.crossReaction}</p>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2">Symptomen:</p>
                        <p className="text-sm text-gray-700">{allergy.symptoms}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                            <XCircle className="w-4 h-4" />
                            Vermijd:
                          </h4>
                          <ul className="space-y-1">
                            {allergy.avoidList.map((item, aIdx) => (
                              <li key={aIdx} className="text-sm">• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Alternatieven:
                          </h4>
                          <ul className="space-y-1">
                            {allergy.alternatives.map((item, aIdx) => (
                              <li key={aIdx} className="text-sm text-green-700">• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-yellow-100 p-3 rounded mb-2">
                        <p className="text-sm"><strong>Labels:</strong> {allergy.labels}</p>
                      </div>

                      <div className="bg-red-100 p-3 rounded">
                        <p className="text-sm text-red-800"><strong>⚠️ Let op:</strong> {allergy.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Common Intolerances */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-yellow-50 to-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meest Voorkomende Voedselintoleranties
            </h2>

            <div className="space-y-6">
              {commonIntolerances.map((intol, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                      <intol.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{intol.intolerance}</h3>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="bg-yellow-50 p-3 rounded">
                          <p className="text-sm"><strong>Prevalentie:</strong> {intol.prevalence}</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded">
                          <p className="text-sm"><strong>Oorzaak:</strong> {intol.cause}</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-1">Mechanisme:</p>
                        <p className="text-sm text-gray-700">{intol.mechanism}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Symptomen:</p>
                          <ul className="space-y-1">
                            {intol.symptoms.map((symptom, sIdx) => (
                              <li key={sIdx} className="text-sm">• {symptom}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Drempelwaarde:</p>
                          <p className="text-sm text-green-700">{intol.threshold}</p>
                          <p className="font-semibold mt-3 mb-2">Alternatieven:</p>
                          <ul className="space-y-1">
                            {intol.alternatives.map((alt, aIdx) => (
                              <li key={aIdx} className="text-sm">• {alt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-semibold mb-1">💡 Tips:</p>
                        <ul className="space-y-1">
                          {intol.tips.map((tip, tIdx) => (
                            <li key={tIdx} className="text-sm">• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Emergency Protocol - abbreviated for length */}
        <section className="py-16 px-6 md:px-12 bg-red-50">
            <h2 className="text-3xl font-bold mb-4 text-center text-red-800">
              🚨 Noodprotocol Bij Allergische Reactie
            </h2>
            <p className="text-center text-gray-600 mb-12">Ken de tekenen, red levens</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[emergencyProtocol.mild, emergencyProtocol.moderate, emergencyProtocol.severe].map((protocol, idx) => (
                <div key={idx} className={`rounded-xl p-6 shadow-lg border-2 ${
                  idx === 0 ? 'bg-yellow-50 border-yellow-500' :
                  idx === 1 ? 'bg-orange-50 border-orange-500' :
                  'bg-red-100 border-red-600'
                }`}>
                  <h3 className="font-bold text-lg mb-3">{protocol.title}</h3>
                  <p className="text-sm mb-3"><strong>Symptomen:</strong> {protocol.symptoms}</p>
                  <p className="font-semibold text-sm mb-2">Actie:</p>
                  <ol className="space-y-1">
                    {protocol.action.map((step: string, sIdx: number) => (
                      <li key={sIdx} className="text-sm">{sIdx + 1}. {step}</li>
                    ))}
                  </ol>
                  <p className="text-xs mt-3 bg-white p-2 rounded">{protocol.when}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-600 text-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">EpiPen Gebruik (Adrenaline)</h3>
              <p className="mb-4"><strong>Wanneer:</strong> {emergencyProtocol.epipen.when}</p>
              <p className="font-semibold mb-2">Hoe te gebruiken:</p>
              <ol className="space-y-2 mb-4">
                {emergencyProtocol.epipen.how.map((step, idx) => (
                  <li key={idx}>{idx + 1}. {step}</li>
                ))}
              </ol>
              <div className="bg-red-500 p-4 rounded-lg">
                <p className="font-bold">⚠️ {emergencyProtocol.epipen.note}</p>
              </div>
            </div>
        </section>

        {/* Label Reading - abbreviated */}
        <section className="py-16 px-6 md:px-12 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Etiketten Lezen: Allergenen Herkennen
            </h2>

            <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-500 mb-8">
              <h3 className="text-xl font-bold mb-3">{labelReading.allergyLabels.title}</h3>
              <p className="mb-3">{labelReading.allergyLabels.mandatory}</p>
              <div className="grid md:grid-cols-2 gap-2">
                {labelReading.allergyLabels.list.map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 bg-teal-100 p-3 rounded text-sm">
                <strong>✓</strong> {labelReading.allergyLabels.formatting}
              </p>
            </div>

            <div className="space-y-4">
              {labelReading.warnings.map((warning, idx) => (
                <div key={idx} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold mb-1">"{warning.text}"</p>
                  <p className="text-sm mb-1"><strong>Betekenis:</strong> {warning.meaning}</p>
                  <p className="text-sm mb-1"><strong>Actie:</strong> {warning.action}</p>
                  <p className="text-sm bg-yellow-100 p-2 rounded mt-2"><strong>Strikt bij:</strong> {warning.strict}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-6 md:px-12 bg-red-50">
            <h2 className="text-3xl font-bold mb-12 text-center">
              6 Fatale Fouten Bij Allergieën/Intoleranties
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-red-800">{mistake.mistake}</h3>
                      <p className="text-sm text-red-700 mb-2"><strong>Probleem:</strong> {mistake.problem}</p>
                      <p className="text-sm text-green-700 mb-2"><strong>Correct:</strong> {mistake.correct}</p>
                      <div className="bg-green-50 p-2 rounded">
                        <p className="text-sm text-green-800"><strong>✅</strong> {mistake.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Hulp Nodig Bij Voedselallergieën of Intoleranties?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Vind een gespecialiseerde diëtist bij jou in de buurt voor veilig en gevarieerd eten
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
            >
              Vind Een Allergie Diëtist
            </Link>
        </div>
        </section>

          {/* Conclusion */}
          <section className="py-16 px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-6">Conclusie</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Het <strong>cruciale verschil tussen allergie en intolerantie</strong>: allergie = immuunsysteem reageert (kan levensgevaarlijk), intolerantie = spijsverteringsprobleem (vervelend maar niet dodelijk). Bij allergie kan kleinste beetje al reactie geven, bij intolerantie maakt hoeveelheid verschil (drempelwaarde).
              </p>
              <p>
                <strong>Diagnose is essentieel</strong>: bij allergie via bloedtest (IgE) + huidpriktest + provocatietest, bij intolerantie via eliminatiedieet + herintroductie. Vermijd onbetrouwbare IgG-testen (€150-300 verspilling, geen wetenschappelijk bewijs). Werk samen met allergoloog en diëtist voor juiste diagnose en veilig dieet.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
                <p className="font-semibold text-lg mb-3">💡 Veilig Leven Controlelijst:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Bij allergie:</strong> Strikte vermijding, EpiPen altijd bij je, kruisbesmetting voorkomen</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Bij intolerantie:</strong> Eliminatie → herintroductie → persoonlijke drempelwaarde vinden</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Labels lezen:</strong> Controleer ALLE ingrediënten, 14 allergenen vetgedrukt verplicht (EU)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Voedingstekorten:</strong> Werk met diëtist, supplements indien nodig (calcium, D, B12)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Noodsituatie:</strong> Ken symptomen anafylaxie, EpiPen direct gebruiken, bel 112</span>
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
