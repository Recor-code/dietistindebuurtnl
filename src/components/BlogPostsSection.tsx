'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  tags: string;
}

export default function BlogPostsSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();
        
        if (data.success) {
          setPosts(data.posts);
        } else {
          setError('Failed to load blog posts');
        }
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="col-span-3 text-center py-12">
        <div className="text-gray-500">Laden...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-3 text-center py-12">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="col-span-3 text-center py-12">
        <div className="text-gray-500 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.247 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">Binnenkort meer artikelen</h4>
        <p className="text-gray-600">We zijn bezig met het schrijven van informatieve artikelen over ADHD coaching.</p>
      </div>
    );
  }

  const gradients = [
    'from-purple-100 to-pink-100',
    'from-green-100 to-blue-100', 
    'from-orange-100 to-yellow-100'
  ];
  const iconColors = [
    'text-purple-600',
    'text-green-600',
    'text-orange-600'
  ];

  return (
    <>
      {posts.map((post, index) => {
        const publishedDate = new Date(post.published_at);
        const readingTime = Math.ceil((post.excerpt?.length || 500) / 200);
        
        return (
          <Link 
            key={post.id} 
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
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{publishedDate.toLocaleDateString('nl-NL', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt || 'Lees dit artikel voor meer informatie over ADHD coaching...'}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{readingTime} min leestijd</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}