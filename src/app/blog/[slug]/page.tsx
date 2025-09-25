import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
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

  const featuredImageUrl = `https://adhdcoachindebuurt.nl/img/blog/${slug}/featured.webp`;
  const ogImageUrl = `https://adhdcoachindebuurt.nl/img/blog/${slug}/og.webp`;

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      authors: ['ADHD Coach in de Buurt'],
      images: [
        {
          url: ogImageUrl,
          width: 1024,
          height: 1024,
          alt: 'ADHD coaching - professionele begeleiding en ondersteuning',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [ogImageUrl],
    },
  };
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug')
      .not('published_at', 'is', null);

    if (error || !posts) {
      console.warn('Error fetching blog posts for static generation:', error);
      return [];
    }

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('Failed to generate static params for blog posts:', error);
    return [];
  }
}

// Enable Incremental Static Regeneration (ISR) - revalidate every hour
export const revalidate = 3600; // 1 hour in seconds

// Enable static generation with dynamic fallback
export const dynamicParams = true;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const tags = post.tags ? JSON.parse(post.tags) : [];

  const featuredImageUrl = `https://adhdcoachindebuurt.nl/img/blog/${slug}/og.webp`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [featuredImageUrl],
    author: {
      '@type': 'Organization',
      name: 'ADHD Coach in de Buurt',
      url: 'https://adhdcoachindebuurt.nl'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADHD Coach in de Buurt',
      url: 'https://adhdcoachindebuurt.nl'
    },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.publishedAt?.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://adhdcoachindebuurt.nl/blog/${slug}`
    },
    url: `https://adhdcoachindebuurt.nl/blog/${slug}`,
    articleSection: 'ADHD Coaching',
    keywords: tags.join(', '),
    inLanguage: 'nl-NL',
    ...(post.city && {
      locationCreated: {
        '@type': 'Place',
        name: post.city.name
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
            {/* Featured Image */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50">
              <Image
                src={`/img/blog/${slug}/featured.webp`}
                alt="ADHD coaching - professionele begeleiding en ondersteuning"
                width={1200}
                height={675}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Header */}
            <div className="p-8 pb-6">
              {/* Social Share Buttons */}
              <div className="py-4 mb-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 font-medium">Deel dit artikel:</span>
                    <div className="flex items-center gap-2">
                      {/* Facebook */}
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://adhdcoachindebuurt.nl/blog/${slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                        title="Deel op Facebook"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      
                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://adhdcoachindebuurt.nl/blog/${slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                        title="Deel via WhatsApp"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                        </svg>
                      </a>
                      
                      {/* Facebook Messenger */}
                      <a
                        href={`https://www.facebook.com/dialog/send?link=${encodeURIComponent(`https://adhdcoachindebuurt.nl/blog/${slug}`)}&app_id=YOUR_APP_ID`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                        title="Deel via Messenger"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8l3.13 3.259L19.785 8l-6.592 6.963z"/>
                        </svg>
                      </a>
                      
                      {/* X (Twitter) */}
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.title}`)}&url=${encodeURIComponent(`https://adhdcoachindebuurt.nl/blog/${slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-black hover:bg-gray-800 text-white rounded-full transition-colors"
                        title="Deel op X"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Share Counter */}
                  <div className="flex items-center gap-2">
                    <Share2 size={16} className="text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">4.2K</span>
                    <span className="text-xs text-gray-500">shares</span>
                  </div>
                </div>
              </div>

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

            {/* Organicolabs CTA */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="text-center">
                <a
                  href="https://organicolabs.com/relax-plus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <img 
                    src="https://adhdcoachindebuurt.nl/relax-banner-new.jpg" 
                    alt="RELAX - Natuurlijke rust zonder loom gevoel" 
                    className="w-auto mx-auto max-w-full"
                  />
                </a>
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