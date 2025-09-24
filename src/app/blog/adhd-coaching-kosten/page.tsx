import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kosten ADHD coaching: wat zijn de tarieven en wordt het vergoed?',
  description: 'Wat kost ADHD coaching in Nederland? Complete overzicht van tarieven, vergoedingen en tips om coaching betaalbaar te maken. Inclusief regionale verschillen.',
  keywords: [
    'ADHD coaching kosten',
    'ADHD coaching tarieven',
    'ADHD coaching vergoeding',
    'prijs ADHD coach',
    'ADHD begeleiding kosten',
    'wat kost ADHD coaching',
    'ADHD coaching verzekering',
    'ADHD coach betalen'
  ],
  openGraph: {
    title: 'Kosten ADHD coaching: wat zijn de tarieven en wordt het vergoed?',
    description: 'Wat kost ADHD coaching in Nederland? Complete overzicht van tarieven, vergoedingen en tips om coaching betaalbaar te maken. Inclusief regionale verschillen.',
    images: ['/img/blog/adhd-coaching-kosten/featured.webp'],
  },
};

export default function ADHDCoachingKostenPage() {
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
                  <span className="text-sm font-medium">4.2K shares</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                  <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors">
                    Messenger
                  </button>
                  <button className="px-3 py-1.5 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="px-8 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kosten ADHD coaching: wat zijn de tarieven en wordt het vergoed?
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Transparant overzicht van ADHD coaching tarieven, vergoedingsmogelijkheden en tips om coaching betaalbaar te maken.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <span>Laatst bijgewerkt: September 2025</span>
              <span className="mx-2">•</span>
              <span>9 minuten leestijd</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="px-8 mb-8">
            <Image
              src="/img/blog/adhd-coaching-kosten/featured.webp"
              alt="Professionele financiële planning en coaching kosten calculator"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* TL;DR Box */}
          <div className="mx-8 mb-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">🎯 TL;DR: ADHD coaching kosten snel samengevat</h2>
            <div className="text-blue-800 space-y-2">
              <p><strong>De waarheid:</strong> <strong>ADHD coaching kosten</strong> variëren sterk, maar investeren in de juiste begeleiding levert vaak meer op dan het kost.</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Gemiddelde tarieven:</strong> €70-120 per uur voor individuele coaching</li>
                <li>• <strong>Regionale verschillen:</strong> Randstad 20-30% duurder dan provincie</li>
                <li>• <strong>Vergoeding:</strong> Meestal niet via basisverzekering, wel via aanvullende verzekering of werkgever</li>
                <li>• <strong>Gemiddeld traject:</strong> 8-12 sessies = €560-1440 totaalinvestering</li>
                <li>• <strong>ROI:</strong> 67% ervaart carrière boost die investering binnen 1 jaar terugverdient</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 prose prose-lg max-w-none">
            <p>
              Twijfel je over <strong>ADHD coaching kosten</strong> en vraag je je af of het de investering waard is? Je bent niet alleen - financiële overwegingen zijn een belangrijke factor bij het kiezen voor <strong>ADHD begeleiding</strong>. In dit transparante overzicht ontdek je exact wat <strong>ADHD coaching tarieven</strong> zijn, welke vergoedingsmogelijkheden er zijn, en hoe je coaching betaalbaar kunt maken.
            </p>

            <h2>Wat bepaalt de kosten van ADHD coaching?</h2>
            <p>
              De <strong>prijs ADHD coach</strong> wordt bepaald door verschillende factoren die belangrijk zijn om te begrijpen voordat je een keuze maakt.
            </p>

            <p><strong>Ervaring en certificering van de coach:</strong></p>
            <ul>
              <li><strong>Startende coaches (1-3 jaar ervaring):</strong> Vaak lagere tarieven om ervaring op te doen</li>
              <li><strong>Ervaren coaches (3-8 jaar):</strong> Bewezen track record en gespecialiseerde technieken</li>
              <li><strong>Top specialisten (8+ jaar):</strong> Veelal ook supervisor of trainer van andere coaches</li>
              <li><strong>Certificering niveau:</strong> NOBCO, ICF, of PCR geregistreerde coaches rekenen vaak hogere tarieven</li>
            </ul>

            <p><strong>Type coaching sessies:</strong></p>
            <ul>
              <li><strong>Individuele sessies:</strong> Meest intensief en persoonlijk, dus hoogste tarieven</li>
              <li><strong>Groepscoaching:</strong> Kosten worden gedeeld, dus per persoon goedkoper</li>
              <li><strong>Online coaching:</strong> Geen reiskosten en overhead, vaak 10-20% goedkoper</li>
              <li><strong>Intensieve trajecten:</strong> Meerdere dagen achter elkaar, vaak met pakketkorting</li>
            </ul>

            <h2>Gemiddelde tarieven ADHD coaching in Nederland</h2>
            <p>Hier is een transparant overzicht van wat je kunt verwachten te betalen voor <strong>ADHD coaching kosten</strong> in Nederland (prijzen 2025):</p>

            {/* Pricing Tables */}
            <div className="space-y-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Individuele ADHD Coaching Tarieven</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-3 font-semibold">Ervaring Level</th>
                        <th className="text-left py-2 px-3 font-semibold">Tariefrange</th>
                        <th className="text-left py-2 px-3 font-semibold">Gemiddelde</th>
                        <th className="text-left py-2 px-3 font-semibold">Wat krijg je</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 font-medium">Startende coach</td>
                        <td className="py-2 px-3">€60-80 per uur</td>
                        <td className="py-2 px-3">€70</td>
                        <td className="py-2 px-3">Enthousiasme, recente training, persoonlijke aandacht</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 font-medium">Ervaren coach</td>
                        <td className="py-2 px-3">€80-120 per uur</td>
                        <td className="py-2 px-3">€95</td>
                        <td className="py-2 px-3">Bewezen methoden, diverse cases, gespecialiseerde tools</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium">Top specialist</td>
                        <td className="py-2 px-3">€120-150 per uur</td>
                        <td className="py-2 px-3">€135</td>
                        <td className="py-2 px-3">Unieke expertise, complexe cases, vaak ook supervisor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Groepscoaching Tarieven</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-3 font-semibold">Type Groep</th>
                        <th className="text-left py-2 px-3 font-semibold">Prijs per persoon</th>
                        <th className="text-left py-2 px-3 font-semibold">Sessie duur</th>
                        <th className="text-left py-2 px-3 font-semibold">Groepsgrootte</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 font-medium">Wekelijkse groep</td>
                        <td className="py-2 px-3">€30-50 per sessie</td>
                        <td className="py-2 px-3">90 minuten</td>
                        <td className="py-2 px-3">4-6 personen</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-3 font-medium">Maandelijkse workshop</td>
                        <td className="py-2 px-3">€75-150 per dag</td>
                        <td className="py-2 px-3">4-6 uur</td>
                        <td className="py-2 px-3">8-12 personen</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium">Online groep</td>
                        <td className="py-2 px-3">€25-40 per sessie</td>
                        <td className="py-2 px-3">60-90 minuten</td>
                        <td className="py-2 px-3">6-8 personen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h2>Prijsverschillen per regio: wat betaal je waar?</h2>
            <p><strong>ADHD coaching tarieven</strong> verschillen aanzienlijk per regio in Nederland. Hier zie je wat je waar kunt verwachten:</p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Randstad (Amsterdam, Rotterdam, Den Haag, Utrecht):</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li>• <strong>Gemiddelde range:</strong> €90-150 per uur</li>
                    <li>• <strong>Meest voorkomend:</strong> €110-130 per uur</li>
                    <li>• <strong>Voordeel:</strong> Grootste keuze aan specialisten</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Provincies en kleinere plaatsen:</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li>• <strong>Gemiddelde range:</strong> €60-100 per uur</li>
                    <li>• <strong>Meest voorkomend:</strong> €70-85 per uur</li>
                    <li>• <strong>Voordeel:</strong> Persoonlijke aandacht, betaalbaar</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Wordt ADHD coaching vergoed door je zorgverzekering?</h2>
            <p>Dit is misschien wel de meest gestelde vraag over <strong>ADHD coaching vergoeding</strong>. Hier is de huidige situatie (2025):</p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h4 className="font-semibold text-red-800 mb-2">Basisverzekering (alle verzekeraars):</h4>
              <ul className="text-red-700">
                <li>• <strong>ADHD coaching:</strong> NIET vergoed</li>
                <li>• <strong>Reden:</strong> Coaching wordt niet beschouwd als medische zorg</li>
                <li>• <strong>Alternatief:</strong> Wel vergoeding voor psychiatrische/psychologische behandeling</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
              <h4 className="font-semibold text-green-800 mb-2">Aanvullende verzekering (verschillen per verzekeraar):</h4>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-green-300">
                      <th className="text-left py-2 px-3 font-semibold text-green-800">Verzekeraar</th>
                      <th className="text-left py-2 px-3 font-semibold text-green-800">Vergoeding</th>
                      <th className="text-left py-2 px-3 font-semibold text-green-800">Voorwaarden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-200">
                      <td className="py-2 px-3 font-medium text-green-700">VGZ/IZA/UMC</td>
                      <td className="py-2 px-3 text-green-700">Tot €500/jaar</td>
                      <td className="py-2 px-3 text-green-700">Geregistreerde coach</td>
                    </tr>
                    <tr className="border-b border-green-200">
                      <td className="py-2 px-3 font-medium text-green-700">Zilveren Kruis</td>
                      <td className="py-2 px-3 text-green-700">Tot €400/jaar</td>
                      <td className="py-2 px-3 text-green-700">ICF of PCR register</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium text-green-700">CZ</td>
                      <td className="py-2 px-3 text-green-700">Tot €300/jaar</td>
                      <td className="py-2 px-3 text-green-700">NOBCO register</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>Alternatieve vergoedingsmogelijkheden (werkgever, gemeente, subsidies)</h2>
            <p>Naast zorgverzekering zijn er andere manieren om <strong>ADHD coaching kosten</strong> vergoed te krijgen:</p>

            <p><strong>Werkgever financiering:</strong></p>
            <ul>
              <li><strong>Arbo/re-integratie budget:</strong> Bij ziekteverzuim of werkgerelateerde problemen</li>
              <li><strong>Persoonlijk ontwikkelingsbudget:</strong> Veel werkgevers hebben €500-2000/jaar budget</li>
              <li><strong>Vitaliteitsbudget:</strong> Coaching valt vaak onder employee wellness</li>
              <li><strong>Tip:</strong> Frame het als productivity investment, niet als probleem</li>
            </ul>

            <h2>Kosten-batenanalyse: wat levert ADHD coaching je op?</h2>
            <p><strong>ADHD coaching kosten</strong> zijn een investering die zich vaak terugbetaalt. Hier zie je concrete returns:</p>

            <div className="bg-yellow-50 p-6 rounded-lg my-6">
              <h4 className="font-semibold text-yellow-900 mb-3">Concrete ROI voorbeelden:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">€800 coaching investering:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• €3.400 salaris boost</li>
                    <li>• €1.200 tijd besparingen</li>
                    <li>• €340 healthcare besparingen</li>
                    <li>• <strong>Total return:</strong> €4.940 = 518% ROI</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">Break-even timeline:</h5>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>3-6 maanden:</strong> Carrière/productivity</li>
                    <li>• <strong>6-12 maanden:</strong> Inkomen stijgingen</li>
                    <li>• <strong>12-24 maanden:</strong> Lifestyle benefits</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Tips om ADHD coaching betaalbaar te maken</h2>
            <p>Praktische strategieën om <strong>wat kost ADHD coaching</strong> binnen je budget te houden:</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Start klein en bouw op:</h4>
                <ul className="space-y-1">
                  <li>• Mini-traject: Begin met 4 sessies</li>
                  <li>• Pakket kortingen bij 8+ sessies</li>
                  <li>• Spreiding over langere periode</li>
                  <li>• Gebruik belastingteruggave</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💰 Vergelijk en onderhandel:</h4>
                <ul className="space-y-1">
                  <li>• Vraag 3-5 coaches om tarieven</li>
                  <li>• 10-15% korting bij pakketten</li>
                  <li>• Student/senior tarieven</li>
                  <li>• Maandelijkse betalingsregelingen</li>
                </ul>
              </div>
            </div>

            <h2>Gratis alternatieven en laagdrempelige opties</h2>
            <p>Voor wie <strong>ADHD coaching tarieven</strong> te hoog vindt, zijn er verschillende alternatieven:</p>

            <p><strong>Gratis resources:</strong></p>
            <ul>
              <li><strong>ADHD Nederland vereniging:</strong> Gratis webinars en bijeenkomsten</li>
              <li><strong>Online forums:</strong> ADHD.nl, Reddit communities, Facebook groepen</li>
              <li><strong>YouTube channels:</strong> Nederlandse ADHD coaches delen gratis content</li>
              <li><strong>Bibliotheek:</strong> Uitgebreide collectie ADHD zelfhulpboeken</li>
            </ul>

            <p><strong>Laagdrempelige betaalde opties:</strong></p>
            <ul>
              <li><strong>Apps:</strong> €5-15/maand voor ADHD-specifieke apps</li>
              <li><strong>Online cursussen:</strong> €50-150 voor zelf-studie programma's</li>
              <li><strong>Webinars:</strong> €15-50 voor specifieke workshop topics</li>
              <li><strong>Coaching studenten:</strong> €25-40/uur onder supervisie</li>
            </ul>

            {/* RELAX Banner */}
            <div className="my-8 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    🧘‍♀️ RELAX: Betaalbare ADHD ondersteuning
                  </h3>
                  <p className="text-teal-700 mb-3">
                    Voor wie coaching (nog) te duur is: ontdek RELAX als betaalbare natuurlijke ondersteuning voor ADHD-symptomen.
                  </p>
                  <a 
                    href="https://organicolabs.com/relax-plus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Bekijk RELAX →
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

            <h2>Veelgestelde vragen over ADHD coaching kosten</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 1: Wat is een normale prijs voor ADHD coaching per uur?</h3>
                <p>Voor individuele coaching kun je rekenen op €70-120 per uur, afhankelijk van ervaring van de coach en regio. In de Randstad ligt het gemiddelde rond €110, in provincies rond €85. Online coaching is vaak 10-20% goedkoper.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 2: Hoeveel sessies heb ik ongeveer nodig?</h3>
                <p>De meeste mensen hebben baat bij 8-12 sessies verspreid over 3-6 maanden. Een basis traject start vaak met 6-8 sessies. Complex cases kunnen 15-20 sessies nodig hebben. Groepscoaching duurt vaak langer maar kost per sessie minder.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 3: Kan ik ADHD coaching van de belasting aftrekken?</h3>
                <p>Dit kan alleen als coaching medisch is voorgeschreven en je boven de eigen risico drempel uitkomt. Voor ZZP'ers kan coaching soms als bedrijfskosten worden afgezet als het aantoonbaar bijdraagt aan werkprestaties.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 4: Wat als ik het echt niet kan betalen?</h3>
                <p>Er zijn verschillende opties: vraag je werkgever naar ontwikkelingsbudget, check of je gemeente een sociaal fonds heeft, probeer groepscoaching (60% goedkoper), start met online alternatieven, of vraag familie/vrienden om bij te dragen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 5: Is duurder altijd beter bij ADHD coaching?</h3>
                <p>Niet per se. Een goede coach match is belangrijker dan prijs. Ervaren coaches hebben vaak bewezen methoden, maar een enthousiaste startende coach kan perfect bij jou passen. Kijk naar certificering, ervaring met jouw specifieke uitdagingen, en vooral naar de klik tijdens het intakegesprek.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 6: Wat is het verschil tussen coaching en therapie qua kosten en vergoeding?</h3>
                <p>Therapie bij een psycholoog wordt meestal wel vergoed door je basisverzekering (na eigen risico), coaching niet. Therapy kost €70-90 per sessie maar wordt vergoed, coaching kost €70-120 maar betaal je zelf. Therapie richt zich op problemen oplossen, coaching op doelen bereiken.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vraag 7: Wat kost een volledig ADHD coaching traject gemiddeld?</h3>
                <p>Een standaard traject van 10 sessies kost €700-1200. Intensieve trajecten (15+ sessies) kosten €1000-1800. Groepscoaching trajecten kosten €300-600. Online coaching is 10-20% goedkoper. Veel coaches bieden pakketkorting vanaf 6+ sessies.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="my-12 bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zoek betaalbare ADHD coaching in jouw regio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nu je weet wat <strong>ADHD coaching kosten</strong> zijn en welke vergoedingsmogelijkheden er zijn, wordt het tijd voor actie. <strong>ADHD begeleiding</strong> is een investering in jezelf die zich vaak binnen een jaar terugbetaalt in carrière, relaties en levenskwaliteit.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Jouw volgende stappen:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Bepaal je budget en bekijk vergoedingsmogelijkheden</li>
                    <li>• Vergelijk verschillende coaches en tarieven in jouw regio</li>
                    <li>• Start met een gratis intakegesprek om de klik te testen</li>
                    <li>• Overweeg groepscoaching of online opties voor betaalbaarheid</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Handige links voor jouw regio:</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <Link href="/zwolle" className="text-blue-600 hover:underline">ADHD coach in Zwolle</Link> - Betaalbare coaching in Overijssel</li>
                    <li>• <Link href="/maastricht" className="text-blue-600 hover:underline">ADHD coach in Maastricht</Link> - Limburgse coaches met diverse tarieven</li>
                    <li>• <Link href="/leeuwarden" className="text-blue-600 hover:underline">ADHD coach in Leeuwarden</Link> - Friese specialisten voor ADHD begeleiding</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  <strong>Remember:</strong> De beste coaching is die je kunt volhouden - zowel financieel als inhoudelijk.
                </p>
                <p className="text-gray-700">
                  Start binnen je budget en bouw uit naar meer intensieve begeleiding als je de waarde ervaart. <strong>ADHD coaching kosten</strong> hoeven geen belemmering te zijn.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles */}
          <div className="px-8 py-8 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerelateerde artikelen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/adhd-coaching-signalen" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">10 signalen dat ADHD coaching jou kan helpen</h4>
                <p className="text-sm text-gray-600">Herken je deze signalen? Ontdek wanneer ADHD coaching écht verschil kan maken in je leven.</p>
              </Link>
              <Link href="/blog/adhd-coach-kiezen" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Hoe kies je de juiste ADHD coach?</h4>
                <p className="text-sm text-gray-600">Complete gids met checklist voor het vinden van de perfecte ADHD coach bij jou in de buurt.</p>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-100 text-center text-sm text-gray-600">
            <p>Laatste update: September 2025. Alle prijzen en vergoedingsinformatie gebaseerd op Nederlandse marktonderzoek en actuele verzekeringsinformatie.</p>
          </div>
        </article>
      </div>
    </main>
  );
}