'use client';

import { Star } from 'lucide-react';

interface RatingLinkProps {
  rating: number;
  reviewCount: number;
}

export default function RatingLink({ rating, reviewCount }: RatingLinkProps) {
  return (
    <a 
      href="#reviews-section"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
    >
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < Math.floor(rating) ? 'text-yellow-300 fill-yellow-300' : 'text-white/30'
            }`}
          />
        ))}
      </div>
      <span className="text-white font-medium">{rating.toFixed(1)} ({reviewCount} reviews)</span>
    </a>
  );
}
