import { Metadata } from 'next';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Static metadata for this specific article
export const metadata: Metadata = {
  title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
  description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
  openGraph: {
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
    type: 'article',
    publishedTime: '2025-09-24T14:00:00.000Z',
    authors: ['ADHD Coach in de Buurt'],
    images: [
      {
        url: 'https://adhdcoachindebuurt.nl/img/blog/hoe-kies-je-juiste-adhd-coach/featured.webp',
        width: 1024,
        height: 1024,
        alt: 'Hoe kies je de juiste ADHD coach? Complete gids'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
    images: ['https://adhdcoachindebuurt.nl/img/blog/hoe-kies-je-juiste-adhd-coach/featured.webp']
  }
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
  description: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
  author: {
    '@type': 'Organization',
    name: 'ADHD Coach in de Buurt',
    url: 'https://adhdcoachindebuurt.nl'
  },
  publisher: {
    '@type': 'Organization',
    name: 'ADHD Coach in de Buurt',
    url: 'https://adhdcoachindebuurt.nl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://adhdcoachindebuurt.nl/logo.png'
    }
  },
  datePublished: '2025-09-24T14:00:00.000Z',
  dateModified: '2025-09-25T12:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://adhdcoachindebuurt.nl/blog/hoe-kies-je-juiste-adhd-coach'
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://adhdcoachindebuurt.nl/img/blog/hoe-kies-je-juiste-adhd-coach/featured.webp',
    width: 1024,
    height: 1024
  },
  url: 'https://adhdcoachindebuurt.nl/blog/hoe-kies-je-juiste-adhd-coach',
  wordCount: 2500,
  articleSection: 'ADHD Coaching',
  keywords: ['ADHD coach', 'ADHD coaching', 'coach vinden', 'ADHD hulp', 'coach kiezen'],
  inLanguage: 'nl-NL'
};

export default function BlogPost() {
  const post = {
    id: 3,
    title: 'Hoe kies je de juiste ADHD coach bij jou in de buurt? [Complete gids]',
    slug: 'adhd-coach-kiezen',
    excerpt: 'Het ADHD coach kiezen kan overweldigend aanvoelen. Deze complete gids helpt je stap voor stap de juiste ADHD coach vinden die perfect aansluit bij jouw behoeften, budget en locatie.',
    metaDescription: 'Complete gids voor het kiezen van de juiste ADHD coach bij jou in de buurt. Inclusief checklist, vragen en tips om de beste match te vinden.',
    publishedAt: new Date('2025-09-24T14:00:00.000Z'),
    tags: ['ADHD', 'Coaching', 'Keuzewijzer', 'Gids', 'Coach vinden'],
    city: null
  };

  const featuredImageUrl = `/img/blog/${post.slug}/featured.webp`;
  const currentUrl = `https://adhdcoachindebuurt.nl/blog/${post.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back link */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Link>

            {/* Featured Image */}
            <div className="mb-8">
              <Image 
                src={featuredImageUrl}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
                priority
              />
            </div>
            {/* Social Share Buttons - Above Title */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 font-medium">Deel dit artikel:</span>
                <div className="flex gap-2">
                  {/* Facebook */}
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Facebook
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    WhatsApp
                  </a>
                  
                  {/* Messenger */}
                  <a 
                    href={`https://www.messenger.com/t/?link=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    Messenger
                  </a>
                  
                  {/* X (Twitter) */}
                  <a 
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
