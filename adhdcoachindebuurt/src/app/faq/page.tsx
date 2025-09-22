import { supabase } from '../../../lib/supabase';
import { ChevronDown, Heart, HelpCircle } from 'lucide-react';
import Link from 'next/link';

async function getFAQItems() {
  try {
    const { data, error } = await supabase
      .from('faq_items')
      .select('id, question, answer, category, "order", is_published, created_at, updated_at')
      .eq('is_published', true)
      .order('order', { ascending: true });

    if (error) {
      console.error('Error fetching FAQ items:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching FAQ items:', error);
    return [];
  }
}

export const metadata = {
  title: 'Veelgestelde Vragen over ADHD - ADHD Coach in de Buurt',
  description: 'Vind antwoorden op de meest gestelde vragen over ADHD, coaching, behandeling en ondersteuning.',
};

export default async function FAQPage() {
  const faqs = await getFAQItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-800 leading-tight">ADHD Coaching</span>
                <span className="text-sm text-gray-600 leading-tight">in de Buurt</span>
              </div>
            </Link>
            
            {/* Navigation Menu */}
            <nav className="flex items-center gap-4 md:gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Home
              </Link>
              <Link href="/coaches" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Coaches
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm md:text-base">
                Blog
              </Link>
              <Link href="/faq" className="text-blue-600 font-medium text-sm md:text-base">
                FAQ
              </Link>
            </nav>

            <a
              href="https://adhdzelftest.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
            >
              Doe de ADHD Test
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
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

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
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
                      {faq.answer.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              FAQ Categorieën
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Algemeen over ADHD
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Basisinformatie over ADHD symptomen, diagnose en behandeling.
                </p>
                <div className="text-blue-600 text-sm">
                  {faqs.filter(f => f.category === 'Algemeen').length} vragen
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Coaching Process
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Alles over het coaching proces, sessies en verwachtingen.
                </p>
                <div className="text-blue-600 text-sm">
                  {faqs.filter(f => f.category === 'Proces').length} vragen
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Kosten & Vergoeding
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Informatie over kosten, verzekeringen en vergoedingen.
                </p>
                <div className="text-blue-600 text-sm">
                  {faqs.filter(f => f.category === 'Vergoeding').length} vragen
                </div>
              </div>
            </div>
          </div>

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
                <span className="text-xl font-bold">ADHD Coach in de Buurt</span>
              </div>
              <p className="text-gray-400">
                De grootste directory van ADHD coaches en therapeuten in Nederland en België.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Handige Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/over-adhd" className="hover:text-white">Over ADHD</Link></li>
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