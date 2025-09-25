import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users } from 'lucide-react';

// Static blog posts data - latest 3 articles
const latestPosts = [
  {
    title: 'ADHD Coach Vinden: Complete Gids per Regio',
    slug: 'adhd-coach-vinden-regio',
    excerpt: 'Ontdek hoe je de beste ADHD coach vindt in jouw regio. Van Amsterdam tot Antwerpen - complete gids met tips, kosten en waar je op moet letten.',
    publishedAt: '2024-12-15',
    readingTime: '8 min leestijd',
    shares: '5.1K',
  },
  {
    title: 'ADHD & Relaties: Hoe een Coach Helpt je Balans Vinden',
    slug: 'adhd-relaties-coach-balans',
    excerpt: 'ADHD kan relationele uitdagingen veroorzaken. Leer hoe een gespecialiseerde coach je helpt om balans te vinden in liefde, vriendschap en werk.',
    publishedAt: '2024-12-10',
    readingTime: '6 min leestijd',
    shares: '4.2K',
  },
  {
    title: 'ADHD Volwassenen: Coaching vs Medicatie - Wat Werkt?',
    slug: 'adhd-volwassenen-coaching-vs-medicatie',
    excerpt: 'Vergelijk de voor- en nadelen van ADHD coaching versus medicatie voor volwassenen. Welke aanpak past bij jouw situatie?',
    publishedAt: '2024-12-05',
    readingTime: '9 min leestijd',
    shares: '3.8K',
  },
];

export default function BlogPostsSection() {
  return (
    <>
      {latestPosts.map((post, index) => {
        const publishedDate = new Date(post.publishedAt);
        
        return (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50">
              <Image
                src={`/img/blog/${post.slug}/featured.webp`}
                alt={`${post.title} - ADHD coaching artikel`}
                width={400}
                height={225}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{publishedDate.toLocaleDateString('nl-NL', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                  <Users className="w-4 h-4" />
                  <span>{post.shares}</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.readingTime}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}