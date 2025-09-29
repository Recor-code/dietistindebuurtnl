import { Metadata } from 'next';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Static metadata for this specific article
export const metadata: Metadata = {
  title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
  description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
  openGraph: {
    title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
    description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
    type: 'article',
    publishedTime: '2025-09-24T12:00:00.000Z',
    authors: ['ADHD Coach in de Buurt'],
    images: [
      {
        url: 'https://adhdcoachindebuurt.nl/img/blog/adhd-coach-vs-psycholoog/featured.webp',
        width: 1024,
        height: 1024,
        alt: 'ADHD coach vs psycholoog vergelijking'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
    description: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
    images: ['https://adhdcoachindebuurt.nl/img/blog/adhd-coach-vs-psycholoog/featured.webp']
  }
};

export default function BlogPost() {
  const post = {
    id: 2,
    title: 'ADHD coach vs psycholoog: wat is het verschil en wat past bij jou?',
    slug: 'adhd-coach-vs-psycholoog',
    excerpt: 'Twijfel je tussen een ADHD coach en psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest in deze complete vergelijking.',
    metaDescription: 'ADHD coach of psycholoog? Ontdek alle verschillen, kosten en wanneer je voor welke hulp kiest. Complete vergelijking + praktische keuzewijzer.',
    publishedAt: new Date('2025-09-24T12:00:00.000Z'),
    tags: ['ADHD', 'Coaching', 'Psychologie', 'Begeleiding', 'Keuzewijzer'],
    city: null
  };

  const featuredImageUrl = `/img/blog/${post.slug}/featured.webp`;
  const currentUrl = `https://adhdcoachindebuurt.nl/blog/${post.slug}`;

  return (
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
  );
}
