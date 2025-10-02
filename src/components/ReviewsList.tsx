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
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');
  const [visibleCount, setVisibleCount] = useState(6);

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    const score = review['SCORE'];
    if (score >= 1 && score <= 5) {
      ratingCounts[score - 1]++;
    }
  });
  const maxCount = Math.max(...ratingCounts);

  // Toggle rating selection
  const toggleRating = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  // Filter reviews
  let filteredReviews = [...reviews];
  if (selectedRatings.length > 0) {
    filteredReviews = filteredReviews.filter(review => selectedRatings.includes(review['SCORE']));
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
      {/* Rating Distribution */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Distribution</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingCounts[rating - 1];
            const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
            const isSelected = selectedRatings.includes(rating);
            
            return (
              <button
                key={rating}
                onClick={() => toggleRating(rating)}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  isSelected ? 'bg-blue-100 ring-2 ring-blue-500' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-1 w-12">
                  <span className="text-sm font-medium text-gray-900">{rating}</span>
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                </div>
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
              </button>
            );
          })}
        </div>
        {selectedRatings.length > 0 && (
          <button
            onClick={() => setSelectedRatings([])}
            className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Wis filters
          </button>
        )}
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
                Meer reviews laden ({filteredReviews.length - visibleCount} over)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">Geen reviews gevonden met de geselecteerde filters.</p>
          <button
            onClick={() => setSelectedRatings([])}
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
