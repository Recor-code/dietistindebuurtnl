import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dietistindebuurt.nl';

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
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Blog posts
  const blogPosts = [
    'waarom-afvallen-niet-lukt',
    'hoeveel-kilo-per-week-afvallen',
    'dietist-vs-voedingsdeskundige',
    'wat-kost-een-dietist',
    'eerste-consult-dietist',
    'dieet-diabetes-type-2',
    'hoog-cholesterol-dietist',
    'afvallen-na-50',
    'sportvoeding-voor-tijdens-na',
    'veganistisch-voedingsstoffen',
    'prikkelbare-darm-dieet',
    'voedselallergien-intoleranties',
    'emotioneel-eten',
    'gezonde-voeding-kinderen',
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  try {
    // Use Supabase REST API to avoid IPv6 connectivity issues during static generation
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.warn('Supabase credentials not found, returning static pages only');
      return staticPages;
    }

    const headers = {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
    };

    // Get all cities using REST API
    const citiesResponse = await fetch(`${supabaseUrl}/rest/v1/cities?select=slug,created_at,updated_at`, {
      headers,
    });
    
    let cityPages = [];
    if (citiesResponse.ok) {
      const allCities = await citiesResponse.json();
      cityPages = (allCities || []).map((city: any) => ({
        url: `${baseUrl}/stad/${city.slug}`,
        lastModified: city.updated_at ? new Date(city.updated_at) : new Date(city.created_at || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }

    // Get all specialists/places using REST API
    const placesResponse = await fetch(`${supabaseUrl}/rest/v1/places?select=slug,created_at,updated_at&limit=1000`, {
      headers,
    });
    
    let specialistPages = [];
    if (placesResponse.ok) {
      const allPlaces = await placesResponse.json();
      specialistPages = (allPlaces || [])
        .filter((place: any) => place.slug)
        .map((place: any) => ({
          url: `${baseUrl}/specialist/${place.slug}`,
          lastModified: place.updated_at ? new Date(place.updated_at) : new Date(place.created_at || new Date()),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }));
    }

    return [...staticPages, ...blogPages, ...cityPages, ...specialistPages];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [...staticPages, ...blogPages];
  }
}