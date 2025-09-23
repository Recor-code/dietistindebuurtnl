import { MetadataRoute } from 'next';
import { supabase } from '../../server/db';

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
    const { data: allCities } = await supabase
      .from('cities')
      .select('slug, created_at, updated_at');
      
    const cityPages = (allCities || []).map(city => ({
      url: `${baseUrl}/stad/${city.slug}`,
      lastModified: new Date(city.updated_at || city.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    // Get all blog posts
    const { data: allPosts } = await supabase
      .from('blog_posts')
      .select('slug, created_at, updated_at, published_at')
      .not('published_at', 'is', null);
      
    const blogPages = (allPosts || []).map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    return [...staticPages, ...cityPages, ...blogPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}