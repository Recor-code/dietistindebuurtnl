import { supabase } from '../../../lib/supabase';
import { Calendar, MapPin, Tag, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

async function getBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, meta_description, published_at, tags, cities(id, name, slug)')
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    // Transform data shape to match UI expectations
    const transformedData = (data || []).map(post => ({
      ...post,
      metaDescription: post.meta_description,
      publishedAt: post.published_at ? new Date(post.published_at) : null,
      city: post.cities && Array.isArray(post.cities) ? post.cities[0] : post.cities
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export const metadata = {
  title: 'ADHD Blog - Tips, Nieuws en Lokale Informatie | ADHD Coach in de Buurt',
  description: 'Lees de laatste artikelen over ADHD coaching, tips voor dagelijks leven en lokale informatie per stad.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative isolate py-16 h-[40vh] flex items-center bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:z-0" style={{backgroundImage: "url('/relax-banner-new.jpg')"}}>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            ADHD Blog
          </h1>
          <p className="text-xl text-gray-100 drop-shadow-md">
            Ontdek praktische tips, het laatste nieuws en lokale informatie over ADHD coaching en ondersteuning.
          </p>
        </div>
      </section>


      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Featured Post */}
              {posts[0] && (
                <div className="lg:col-span-2">
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Featured Image */}
                    <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50">
                      <Image
                        src={`/img/blog/${posts[0].slug}/featured.webp`}
                        alt={`${posts[0].title} - ADHD coaching artikel`}
                        width={800}
                        height={450}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(posts[0].publishedAt!).toLocaleDateString('nl-NL')}</span>
                        </div>
                        {posts[0].city && (
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{posts[0].city.name}</span>
                          </div>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        <Link 
                          href={`/blog/${posts[0].slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {posts[0].title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      <Link
                        href={`/blog/${posts[0].slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Lees meer →
                      </Link>
                    </div>
                  </article>
                </div>
              )}

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Categorieën
                  </h3>
                  <div className="space-y-2">
                    <Link 
                      href="/blog?category=coaching"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      ADHD Coaching
                    </Link>
                    <Link 
                      href="/blog?category=tips"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Praktische Tips
                    </Link>
                    <Link 
                      href="/blog?category=lokaal"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Lokale Informatie
                    </Link>
                    <Link 
                      href="/blog?category=nieuws"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      ADHD Nieuws
                    </Link>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Populaire Artikelen
                  </h3>
                  <div className="space-y-4">
                    {posts.slice(1, 4).map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="flex gap-3 hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        {/* Thumbnail Image */}
                        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={`/img/blog/${post.slug}/featured.webp`}
                            alt={`${post.title} - thumbnail`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-800 mb-1 text-sm leading-tight line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Calendar size={12} />
                            <span>{new Date(post.publishedAt!).toLocaleDateString('nl-NL')}</span>
                            {post.city && (
                              <>
                                <MapPin size={12} />
                                <span>{post.city.name}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    Blijf op de hoogte
                  </h3>
                  <p className="text-blue-700 text-sm mb-4">
                    Ontvang wekelijks de beste ADHD tips en lokaal nieuws in je inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Je email adres"
                      className="w-full px-3 py-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium text-sm transition-colors">
                      Aanmelden
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Nog geen blog posts beschikbaar
              </h2>
              <p className="text-gray-600">
                We zijn bezig met het toevoegen van interessante artikelen over ADHD.
                Kom binnenkort terug voor nieuwe content!
              </p>
            </div>
          )}

          {/* All Posts Grid */}
          {posts.length > 1 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Alle Artikelen
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(1).map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Featured Image */}
                    <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50">
                      <Image
                        src={`/img/blog/${post.slug}/featured.webp`}
                        alt={`${post.title} - ADHD coaching artikel`}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                        <Calendar size={14} />
                        <span>{new Date(post.publishedAt!).toLocaleDateString('nl-NL')}</span>
                        {post.city && (
                          <>
                            <MapPin size={14} />
                            <span>{post.city.name}</span>
                          </>
                        )}
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
                      {post.tags && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {JSON.parse(post.tags).slice(0, 3).map((tag: string, index: number) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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
          )}
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