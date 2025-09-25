import { Calendar, MapPin, Tag, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

// Static blog posts data
const blogPosts = [
  {
    id: 'adhd-coach-vinden-regio',
    title: 'ADHD coach vinden in jouw regio: zo pak je het slim aan',
    slug: 'adhd-coach-vinden-regio',
    excerpt: 'Complete gids om slim een ADHD coach vinden - van online zoeken tot lokale netwerken, met praktische tips voor heel Nederland.',
    metaDescription: 'ADHD coach vinden in jouw regio: complete gids met praktische tips, websites en stappenplan voor Nederland.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Coach zoeken', 'Regio', 'Nederland', 'Tips']
  },
  {
    id: 'adhd-relaties-coach-balans',
    title: 'ADHD en relaties: hoe een coach kan helpen balans te vinden',
    slug: 'adhd-relaties-coach-balans',
    excerpt: 'Ontdek hoe ADHD coaching relaties kan transformeren door betere communicatie, emotieregulatie en wederzijds begrip te ontwikkelen.',
    metaDescription: 'ADHD en relaties: ontdek hoe een coach helpt bij communicatie, begrip en balans vinden. Tips voor betere relaties met ADHD.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Relaties', 'Communicatie', 'Partnership', 'ADHD']
  },
  {
    id: 'adhd-coachtraject-duur',
    title: 'Hoe lang duurt een ADHD coachtraject gemiddeld?',
    slug: 'adhd-coachtraject-duur',
    excerpt: 'Realistische tijdslijnen en wat de ADHD coachtraject duur bepaalt - van korte intensieve trajecten tot langdurige transformatieprocessen.',
    metaDescription: 'Hoe lang duurt ADHD coaching gemiddeld? Ontdek alle factoren die de duur bepalen en wat je kunt verwachten van je traject.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Duur', 'Planning', 'Traject', 'Verwachtingen']
  },
  {
    id: 'adhd-volwassenen-coaching-medicatie',
    title: 'ADHD bij volwassenen: waarom coaching vaak beter helpt dan medicatie alleen',
    slug: 'adhd-volwassenen-coaching-medicatie',
    excerpt: 'Evidence-based guide explaining why combining coaching with medication produces superior results for adults with ADHD.',
    metaDescription: 'ADHD volwassenen: waarom coaching + medicatie beter werkt. Evidence-based onderzoek toont 73% betere uitkomsten met gecombineerde aanpak.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Volwassenen', 'Medicatie', 'Combinatie', 'Evidence']
  },
  {
    id: 'checklist-adhd-coach-voorbereiding',
    title: 'Checklist: zo bereid je je voor op je eerste gesprek met een ADHD coach',
    slug: 'checklist-adhd-coach-voorbereiding',
    excerpt: 'Complete timeline-based preparation guide with interactive preparation phases and printable checklists for your first ADHD coaching conversation.',
    metaDescription: 'Bereid je optimaal voor op je eerste ADHD coach gesprek met deze complete checklist. Tips voor kennismaking, vragen en verwachtingen.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Voorbereiding', 'Checklist', 'Eerste gesprek', 'Tips']
  },
  {
    id: 'ervaringen-adhd-coaching',
    title: 'Ervaringen met ADHD coaching: succesverhalen uit de praktijk',
    slug: 'ervaringen-adhd-coaching',
    excerpt: 'Real transformation stories and evidence-based metrics showing how ADHD coaching creates lasting positive change across different life domains.',
    metaDescription: 'Lees echte ervaringen met ADHD coaching: succesverhalen, transformaties en resultaten van mensen die hun leven drastisch verbeterden.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Ervaringen', 'Succesverhalen', 'Resultaten', 'Testimonials']
  },
  {
    id: 'adhd-coaching-kinderen-jongeren',
    title: 'ADHD coaching voor kinderen en jongeren: wat ouders moeten weten',
    slug: 'adhd-coaching-kinderen-jongeren',
    excerpt: 'Complete ouderhandleiding voor ADHD coaching bij kinderen: wanneer starten, wat verwachten, en hoe het gezin te betrekken.',
    metaDescription: 'ADHD coaching kinderen: alles wat ouders moeten weten over coaching voor kinderen en jongeren. Tips, timing en resultaten.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Kinderen', 'Jongeren', 'Ouders', 'Familie']
  },
  {
    id: 'adhd-coaching-studenten',
    title: 'ADHD coaching voor studenten: succesvol studeren met ADHD',
    slug: 'adhd-coaching-studenten',
    excerpt: 'Specifieke coaching strategieën voor studenten met ADHD: studieplanning, tentamenvoorbereiding, en sociale integratie op de campus.',
    metaDescription: 'ADHD coaching studenten: leer effectief studeren met ADHD. Tips voor planning, focus en studiesucces op universiteit en HBO.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Studenten', 'Studie', 'Universiteit', 'HBO']
  },
  {
    id: 'adhd-en-werk',
    title: 'ADHD coaching voor professionals: succesvol werken met ADHD',
    slug: 'adhd-en-werk',
    excerpt: 'Professionele ADHD coaching strategieën: career development, workplace productivity, en het benutten van ADHD strengths.',
    metaDescription: 'ADHD coaching werk: ontdek hoe professionals met ADHD succesvol kunnen zijn. Tips voor productiviteit en career development.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Werk', 'Professionals', 'Carrière', 'Productiviteit']
  },
  {
    id: 'adhd-coach-kiezen',
    title: 'De beste ADHD coach kiezen: waar moet je op letten?',
    slug: 'adhd-coach-kiezen',
    excerpt: 'Complete gids voor het kiezen van de juiste ADHD coach: qualificaties, specialisaties, en matching criteria voor optimale resultaten.',
    metaDescription: 'ADHD coach kiezen: complete gids met criteria, vragen en tips om de beste coach voor jouw situatie te vinden.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Coach kiezen', 'Criteria', 'Kwaliteit', 'Matching']
  },
  {
    id: 'adhd-coaching-kosten',
    title: 'ADHD coaching kosten en vergoedingen: complete gids 2025',
    slug: 'adhd-coaching-kosten',
    excerpt: 'Alles over ADHD coaching kosten, verzekeringsvergoedingen, en budget planning voor verschillende coaching trajecten.',
    metaDescription: 'ADHD coaching kosten 2025: tarieven, vergoedingen en budget tips. Complete gids voor financiële planning van ADHD coaching.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Kosten', 'Vergoeding', 'Budget', 'Financiën']
  },
  {
    id: 'adhd-coaching-signalen',
    title: 'ADHD coaching signalen: wanneer heb je een coach nodig?',
    slug: 'adhd-coaching-signalen',
    excerpt: 'Herken de signalen dat je baat zou hebben bij ADHD coaching: van dagelijkse struggles tot life transition momenten.',
    metaDescription: 'ADHD coaching signalen: wanneer heb je een coach nodig? Herken de tekenen en momenten voor professionele ADHD ondersteuning.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Signalen', 'Timing', 'Hulp zoeken', 'Assessment']
  },
  {
    id: 'online-adhd-coaching',
    title: 'Online ADHD coaching vs persoonlijk: wat werkt het beste?',
    slug: 'online-adhd-coaching',
    excerpt: 'Vergelijking tussen online en face-to-face ADHD coaching: voordelen, nadelen, en effectiveness voor verschillende doelgroepen.',
    metaDescription: 'Online ADHD coaching: vergelijk online vs persoonlijke coaching. Voordelen, nadelen en wat het beste werkt voor jou.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Online coaching', 'Vergelijking', 'Technology', 'Accessibility']
  },
  {
    id: 'adhd-coach-vs-psycholoog',
    title: 'ADHD coach vs psycholoog: wat is het verschil?',
    slug: 'adhd-coach-vs-psycholoog',
    excerpt: 'Duidelijke uitleg over verschillen tussen ADHD coaching en psychologie: wanneer welke hulp, en hoe ze elkaar aanvullen.',
    metaDescription: 'ADHD coach vs psycholoog: begrijp het verschil en kies de juiste hulp. Wanneer coaching, wanneer therapie?',
    publishedAt: new Date('2025-09-25'),
    tags: ['Verschil', 'Psychologie', 'Therapie', 'Professional']
  },
  {
    id: 'beste-vragen-adhd-coach',
    title: 'De beste vragen om je ADHD coach te stellen',
    slug: 'beste-vragen-adhd-coach',
    excerpt: 'Essential vragen voor kennismakingsgesprekken met ADHD coaches: kwaliteit beoordelen en de beste match vinden.',
    metaDescription: 'Beste vragen ADHD coach: stel de juiste vragen tijdens intake om de perfecte coach match te vinden voor jouw situatie.',
    publishedAt: new Date('2025-09-25'),
    tags: ['Vragen stellen', 'Intake', 'Evaluatie', 'Interview']
  }
];

export const metadata = {
  title: 'ADHD Blog - Tips, Nieuws en Lokale Informatie | ADHD Coach in de Buurt',
  description: 'Lees de laatste artikelen over ADHD coaching, tips voor dagelijks leven en lokale informatie per stad.',
};

export default function BlogPage() {
  // Sort posts by published date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ADHD Blog
          </h1>
          <p className="text-xl text-blue-100">
            Ontdek praktische tips, het laatste nieuws en lokale informatie over ADHD coaching en ondersteuning.
          </p>
          <div className="mt-6 bg-blue-400/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-blue-100 text-lg">
              📚 <strong>{sortedPosts.length} uitgebreide artikelen</strong> over ADHD coaching, relaties, werkstrategieën en meer
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Featured Image */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50 cursor-pointer hover:opacity-95 transition-opacity">
                    <Image
                      src={`/img/blog/${post.slug}/featured.webp`}
                      alt={`${post.title} - ADHD coaching artikel`}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                      priority={index < 6} // Priority for first 6 posts
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                    <Calendar size={14} />
                    <span>{post.publishedAt.toLocaleDateString('nl-NL')}</span>
                    <span className="text-green-600 font-medium">• Nieuw</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Lees meer →
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Organicolabs CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://organicolabs.com/relax-plus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://adhdcoachindebuurt.nl/relax-banner-new.jpg" 
              alt="RELAX - Natuurlijke rust zonder loom gevoel" 
              className="w-auto mx-auto"
            />
          </a>
        </div>
      </div>

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
                <li><Link href="/amsterdam" className="hover:text-white">Amsterdam</Link></li>
                <li><Link href="/rotterdam" className="hover:text-white">Rotterdam</Link></li>
                <li><Link href="/utrecht" className="hover:text-white">Utrecht</Link></li>
                <li><Link href="/eindhoven" className="hover:text-white">Eindhoven</Link></li>
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