import { notFound } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';
import { Calendar, MapPin, Tag, Heart, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogPost(slug: string) {
  // No blog posts table available
  return null;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  // Blog functionality is disabled
  return {
    title: 'Artikel niet gevonden',
  };
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  // No blog posts table available - return empty array
  return [];
}

// Enable Incremental Static Regeneration (ISR) - revalidate every hour
export const revalidate = 3600; // 1 hour in seconds

// Enable static generation with dynamic fallback
export const dynamicParams = true;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Blog functionality is disabled - always show 404
  notFound();
}
