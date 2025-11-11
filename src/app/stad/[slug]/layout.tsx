import { Metadata } from 'next';
import { supabase } from '../../../../lib/supabase';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getCityForMetadata(slug: string) {
  try {
    const { data: city, error } = await supabase
      .from('cities')
      .select('id, name, slug, province, country, population, adhd_stats')
      .eq('slug', slug)
      .maybeSingle();

    if (error || !city) {
      return null;
    }

    // Get places count for this city (using CITY column to match city name)
    const { count: placesCount } = await supabase
      .from('places')
      .select('*', { count: 'exact', head: true })
      .eq('CITY', city.name);

    return { ...city, coachCount: placesCount || 0 };
  } catch (error) {
    console.error('Error fetching city for metadata:', error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = await getCityForMetadata(slug);
  
  if (!city) {
    return {
      title: 'Stad niet gevonden',
      description: 'De gezochte stad kon niet worden gevonden.',
    };
  }

  const title = `Diëtisten in ${city.name} | Vind lokale voedingsbegeleiding`;
  const description = `Ontdek ${city.coachCount} gecertificeerde diëtisten in ${city.name}, ${city.province}. Vergelijk specialisaties, bekijk reviews en vind de perfecte diëtist bij jou in de buurt.`;

  return {
    title,
    description,
    keywords: `diëtist ${city.name}, voedingsadvies ${city.name}, voedingsbegeleiding ${city.province}, voedingsdeskundige ${city.name}, diëtiste ${city.country}`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'nl_NL',
      url: `https://dietistindebuurt.nl/stad/${slug}`,
      siteName: 'Diëtist in de Buurt',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Diëtisten in ${city.name}`,
      description: `Vind de beste diëtisten in ${city.name}. ${city.coachCount} gecertificeerde professionals beschikbaar.`,
    },
    alternates: {
      canonical: `https://dietistindebuurt.nl/stad/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}