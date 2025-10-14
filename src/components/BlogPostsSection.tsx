import Link from 'next/link';
import Image from 'next/image';
import { Users } from 'lucide-react';

// Static blog posts data - latest 3 articles
const latestPosts = [
  {
    title: 'Dietist Vinden: Complete Gids per Regio',
    slug: 'adhd-coach-vinden-regio',
    excerpt: 'Ontdek hoe je de beste Dietist vindt in jouw regio. Van Amsterdam tot Antwerpen - complete gids met tips, kosten en waar je op moet letten.',
    publishedAt: '2024-12-15',
    readingTime: '8 min leestijd',
    shares: '5.1K',
  },
  {
    title: 'Voeding & Gezondheid: Hoe een Dietist Helpt je Balans Vinden',
    slug: 'adhd-relaties-coach-balans',
    excerpt: 'Voedingsproblemen kunnen uitdagingen veroorzaken. Leer hoe een gespecialiseerde dietist je helpt om balans te vinden in je eetpatroon en gezondheid.',
    publishedAt: '2024-12-10',
    readingTime: '6 min leestijd',
    shares: '4.2K',
  },
  {
    title: 'Afvallen: Diëten vs Professioneel Advies - Wat Werkt?',
    slug: 'adhd-volwassenen-coaching-vs-medicatie',
    excerpt: 'Vergelijk de voor- en nadelen van zelfstandig diëten versus professioneel voedingsadvies. Welke aanpak past bij jouw situatie?',
    publishedAt: '2024-12-05',
    readingTime: '9 min leestijd',
    shares: '3.8K',
  },
];

export default function BlogPostsSection() {
  return (
    <>
      {latestPosts.map((post, index) => {
        return (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`} 
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-teal-50">
              <Image
                src={`/img/blog/${post.slug}/featured.webp`}
                alt={`${post.title} - Diëtiek artikel`}
                width={400}
                height={225}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-end mb-3">
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