import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, published_at, tags')
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false })
      .limit(3);

    if (error) {
      console.error('Error fetching blog posts:', error);
      return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      count: posts?.length || 0,
      posts: posts || []
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}