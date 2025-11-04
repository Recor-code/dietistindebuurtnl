import Link from 'next/link';
import Image from 'next/image';

// Static blog posts data - latest 3 articles
const latestPosts = [
  {
    title: '10 Redenen Waarom Afvallen Niet Lukt (En Hoe Een Dietist Kan Helpen)',
    slug: 'waarom-afvallen-niet-lukt',
    excerpt: 'Ontdek waarom 95% van de diëten faalt en hoe professionele begeleiding het verschil maakt voor duurzaam gewichtsverlies.',
    publishedAt: '2025-10-14',
    readingTime: '15 min leestijd',
  },
  {
    title: 'Hoeveel Kilo Per Week Afvallen is Gezond? Complete Gids 2025',
    slug: 'hoeveel-kilo-per-week-afvallen',
    excerpt: 'Leer wat een gezond en haalbaar afvalltempo is, hoe je dit bereikt zonder jojo-effect, en wanneer een dietist kan helpen.',
    publishedAt: '2025-10-14',
    readingTime: '12 min leestijd',
  },
  {
    title: 'Wat Kost een Diëtist? Prijzen, Vergoeding & Kosten Overzicht 2025',
    slug: 'wat-kost-een-dietist',
    excerpt: 'Complete overzicht van diëtist kosten in Nederland en België. Tarieven, verzekeringsdekking en waar je op moet letten.',
    publishedAt: '2025-10-14',
    readingTime: '10 min leestijd',
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