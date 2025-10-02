'use client';

import { useState } from 'react';
import { Star, Clock, Filter } from 'lucide-react';

interface Review {
  'INTERNAL REVIEW ID': string;
  'USER NAME': string;
  'SCORE': number;
  'TEXT': string;
  'PUBLISHED AT DATETIME': string;
  'RESPONSE FROM OWNER'?: string;
}

interface ReviewsListProps {
  reviews: Review[];
  specialistName: string;
}

export default function ReviewsList({ reviews, specialistName }: ReviewsListProps) {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter reviews
  let filteredReviews = [...reviews];
  if (filterRating !== null) {
    filteredReviews = filteredReviews.filter(review => review['SCORE'] >= filterRating);
  }

  // Sort reviews
  filteredReviews.sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b['PUBLISHED AT DATETIME']).getTime() - new Date(a['PUBLISHED AT DATETIME']).getTime();
    } else if (sortBy === 'highest') {
      return (b['SCORE'] || 0) - (a['SCORE'] || 0);
    } else {
      return (a['SCORE'] || 0) - (b['SCORE'] || 0);
    }
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <Clock className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-gray-600 font-medium mb-2">Nog geen reviews beschikbaar</p>
        <p className="text-gray-500 text-sm">
          {specialistName} heeft nog geen reviews ontvangen.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilterRating(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterRating === null
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Ratings
        </button>
        <button
          onClick={() => setFilterRating(5)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterRating === 5
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          5 ⭐
        </button>
        <button
          onClick={() => setFilterRating(4)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterRating === 4
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          4 ⭐
        </button>
        <button
          onClick={() => setFilterRating(3)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterRating === 3
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          3 ⭐
        </button>
        <button
          onClick={() => setFilterRating(2)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterRating === 2
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          2 ⭐
        </button>
        <button
          onClick={() => setFilterRating(1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterRating === 1
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          1 ⭐
        </button>
      </div>

      {/* Reviews List */}
      {filteredReviews.length > 0 ? (
        <>
          <div className="space-y-4">
            {displayedReviews.map((review, index) => (
              <div 
                key={review['INTERNAL REVIEW ID'] || index} 
                className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition-shadow duration-200"
              >
                {/* Rating and Date Row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < review['SCORE'] ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{review['SCORE']}/5</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review['PUBLISHED AT DATETIME']).toLocaleDateString('en-US', { 
                      month: 'numeric', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                {/* User Name */}
                <p className="font-semibold text-gray-900 mb-3">{review['USER NAME']}</p>
                
                {/* Review Text */}
                {review['TEXT'] && (
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{review['TEXT']}</p>
                )}
                
                {/* Owner Reply */}
                {review['RESPONSE FROM OWNER'] && (
                  <div className="mt-4 pt-4 border-t border-gray-200 bg-blue-50 -mx-5 -mb-5 px-5 py-4 rounded-b-xl">
                    <p className="text-xs font-bold text-blue-800 mb-2 flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-blue-600 rounded-full"></span>
                      Reactie van eigenaar
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">{review['RESPONSE FROM OWNER']}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Load more reviews ({filteredReviews.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">Geen reviews gevonden met de geselecteerde filters.</p>
          <button
            onClick={() => setFilterRating(null)}
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
