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

    // Get coach count for this city
    const { count: coachCount } = await supabase
      .from('coaches')
      .select('*', { count: 'exact', head: true })
      .eq('city_id', city.id);

    return { ...city, coachCount: coachCount || 0 };
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

  const title = `ADHD Coaches in ${city.name} | Vind lokale ADHD ondersteuning`;
  const description = `Ontdek ${city.coachCount} gecertificeerde ADHD coaches in ${city.name}, ${city.province}. Vergelijk specialisaties, bekijk reviews en vind de perfecte ADHD coach bij jou in de buurt.`;

  return {
    title,
    description,
    keywords: `ADHD coach ${city.name}, ADHD coaching ${city.name}, ADHD behandeling ${city.province}, gedragstherapeut ${city.name}, ADHD hulp ${city.country}`,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'nl_NL',
      url: `https://adhdcoachindebuurt.nl/stad/${slug}`,
      siteName: 'ADHD Coach in de Buurt',
    },
    twitter: {
      card: 'summary_large_image',
      title: `ADHD Coaches in ${city.name}`,
      description: `Vind de beste ADHD coaches in ${city.name}. ${city.coachCount} gecertificeerde professionals beschikbaar.`,
    },
    alternates: {
      canonical: `https://adhdcoachindebuurt.nl/stad/${slug}`,
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