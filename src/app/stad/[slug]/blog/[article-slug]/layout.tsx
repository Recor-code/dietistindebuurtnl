import { Metadata } from 'next';
import { supabase } from '../../../../../../lib/supabase';

interface PageProps {
  params: Promise<{
    slug: string;
    'article-slug': string;
  }>;
}

// City-specific article data - this would ideally come from a database
const cityArticles: Record<string, Record<string, any>> = {
  amsterdam: {
    'adhd-coach-in-amsterdam-hoe-vind-je-de-juiste-begeleiding-dichtbij-huis': {
      title: 'ADHD coach in Amsterdam: hoe vind je de juiste begeleiding dichtbij huis?',
      description: 'Ontdek hoe je de beste ADHD coach in Amsterdam vindt. Complete gids over ADHD coaching in de hoofdstad, kosten, specialisaties en praktische tips voor Amsterdam.',
      publishedAt: new Date('2024-12-15'),
      keywords: 'ADHD coach Amsterdam, ADHD coaching Amsterdam, ADHD behandeling Amsterdam, ADHD hulp Amsterdam, gedragstherapeut Amsterdam, ADHD begeleiding Noord-Holland',
      author: 'ADHD Coach in de Buurt',
      content: '', // Content will be in the page component
    }
  }
};

async function getCityForBlog(citySlug: string) {
  try {
    const { data: city, error } = await supabase
      .from('cities')
      .select('id, name, slug, province, country, population')
      .eq('slug', citySlug)
      .maybeSingle();

    if (error || !city) {
      return null;
    }

    return city;
  } catch (error) {
    console.error('Error fetching city for blog:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: citySlug, 'article-slug': articleSlug } = await params;
  
  const city = await getCityForBlog(citySlug);
  const article = cityArticles[citySlug]?.[articleSlug];
  
  if (!city || !article) {
    return {
      title: 'Artikel niet gevonden',
      description: 'Het gezochte artikel kon niet worden gevonden.',
    };
  }

  const title = article.title;
  const description = article.description;

  return {
    title,
    description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'nl_NL',
      url: `https://adhdcoachindebuurt.nl/stad/${citySlug}/blog/${articleSlug}`,
      siteName: 'ADHD Coach in de Buurt',
      publishedTime: article.publishedAt.toISOString(),
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title}`,
      description: `${description.substring(0, 150)}...`,
    },
    alternates: {
      canonical: `https://adhdcoachindebuurt.nl/stad/${citySlug}/blog/${articleSlug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function CityBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}