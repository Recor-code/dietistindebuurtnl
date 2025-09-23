import { MetadataRoute } from 'next';
import { db, cities, blogPosts } from '../../lib/db';
import { isNotNull } from 'drizzle-orm';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://adhdcoachindebuurt.nl';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/over-adhd`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  try {
    // Get all cities
    const allCities = await db
      .select({
        slug: cities.slug,
        createdAt: cities.createdAt,
        updatedAt: cities.updatedAt,
      })
      .from(cities);
      
    const cityPages = (allCities || []).map(city => ({
      url: `${baseUrl}/stad/${city.slug}`,
      lastModified: new Date(city.updatedAt || city.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    // Get all blog posts
    const allPosts = await db
      .select({
        slug: blogPosts.slug,
        createdAt: blogPosts.createdAt,
        updatedAt: blogPosts.updatedAt,
        publishedAt: blogPosts.publishedAt,
      })
      .from(blogPosts)
      .where(isNotNull(blogPosts.publishedAt));
      
    const blogPages = (allPosts || []).map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...staticPages, ...cityPages, ...blogPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}