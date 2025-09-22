import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { Calendar, MapPin, Tag, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, content, excerpt, meta_description, published_at, tags, cities(id, name, slug)')
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    if (!data) {
      return null;
    }

    // Transform data shape to match UI expectations
    return {
      ...data,
      metaDescription: data.meta_description,
      publishedAt: data.published_at ? new Date(data.published_at) : null,
      city: data.cities && Array.isArray(data.cities) ? data.cities[0] : data.cities
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Artikel niet gevonden',
    };
  }

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: ['ADHD Coach in de Buurt'],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const tags = post.tags ? JSON.parse(post.tags) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-blue-600" size={32} />
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
              ADHD Coach in de Buurt
            </Link>
          </div>
          <a
            href="https://adhdzelftest.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            Doe de ADHD Test
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
          >
            <ArrowLeft size={16} />
            Terug naar blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-8 pb-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(post.publishedAt!).toLocaleDateString('nl-NL', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                {post.city && (
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <Link 
                      href={`/stad/${post.city.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.city.name}
                    </Link>
                  </div>
                )}
                {tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <Tag size={16} />
                    <span>
                      {tags.slice(0, 2).join(', ')}
                      {tags.length > 2 && ` +${tags.length - 2}`}
                    </span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="px-8 pb-8">
              <div 
                className="prose prose-lg prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="px-8 pb-6 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string, index: number) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-blue-50 px-8 py-6 border-t border-blue-200">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Op zoek naar ADHD ondersteuning?
                </h3>
                <p className="text-blue-700 mb-4">
                  {post.city 
                    ? `Bekijk ADHD coaches in ${post.city.name} of praat met onze AI assistente.`
                    : 'Vind ADHD coaches in jouw stad of praat met onze AI assistente.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {post.city && (
                    <Link
                      href={`/stad/${post.city.slug}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Coaches in {post.city.name}
                    </Link>
                  )}
                  <Link
                    href="/"
                    className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Praat met AI Assistente
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Gerelateerde Artikelen
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Placeholder for related articles - would need additional query */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  ADHD Coaching Tips voor Dagelijks Leven
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Praktische tips om beter om te gaan met ADHD in je dagelijks leven.
                </p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm">
                  Lees meer →
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Hoe Kies Je de Juiste ADHD Coach?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Een gids om de perfecte ADHD coach voor jouw situatie te vinden.
                </p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm">
                  Lees meer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

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