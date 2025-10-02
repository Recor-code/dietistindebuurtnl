'use client';

import { useState } from 'react';
import { Star, Clock, Filter } from 'lucide-react';

interface Review {
  'INTERNAL REVIEW ID': string;
  'USER NAME': string;
  'RATING': number;
  'TEXT': string;
  'RELATIVE PUBLISHED TIME': string;
  'PUBLISHED_TIME': string;
  'OWNER REPLY'?: string;
}

interface ReviewsListProps {
  reviews: Review[];
  specialistName: string;
}

export default function ReviewsList({ reviews, specialistName }: ReviewsListProps) {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');

  // Filter reviews
  let filteredReviews = [...reviews];
  if (filterRating !== null) {
    filteredReviews = filteredReviews.filter(review => review['RATING'] >= filterRating);
  }

  // Sort reviews
  filteredReviews.sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b['PUBLISHED_TIME']).getTime() - new Date(a['PUBLISHED_TIME']).getTime();
    } else if (sortBy === 'highest') {
      return (b['RATING'] || 0) - (a['RATING'] || 0);
    } else {
      return (a['RATING'] || 0) - (b['RATING'] || 0);
    }
  });

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
      {/* Filter and Sort Controls */}
      <div className="mb-6 flex flex-wrap gap-4 items-center pb-4 border-b">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterRating(null)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filterRating === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Alle
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filterRating === 5
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            5 sterren
          </button>
          <button
            onClick={() => setFilterRating(4)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filterRating === 4
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            4+ sterren
          </button>
          <button
            onClick={() => setFilterRating(3)}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              filterRating === 3
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            3+ sterren
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Sorteer:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'newest' | 'highest' | 'lowest')}
            className="px-3 py-1 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Nieuwste eerst</option>
            <option value="highest">Hoogste beoordeling</option>
            <option value="lowest">Laagste beoordeling</option>
          </select>
        </div>
      </div>

      {/* Reviews Count */}
      <p className="text-sm text-gray-600 mb-4">
        {filteredReviews.length} {filteredReviews.length === 1 ? 'review' : 'reviews'}
        {filterRating !== null && ` met ${filterRating}+ sterren`}
      </p>

      {/* Reviews List */}
      {filteredReviews.length > 0 ? (
        <div className="space-y-6">
          {filteredReviews.map((review, index) => (
            <div key={review['INTERNAL REVIEW ID'] || index} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">{review['USER NAME']}</p>
                  {review['RATING'] && (
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < review['RATING'] ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-500">{review['RELATIVE PUBLISHED TIME']}</span>
              </div>
              {review['TEXT'] && (
                <p className="text-gray-700 mt-2">{review['TEXT']}</p>
              )}
              {review['OWNER REPLY'] && (
                <div className="mt-4 pl-4 border-l-2 border-blue-200">
                  <p className="text-sm font-medium text-blue-600">Reactie van eigenaar:</p>
                  <p className="text-gray-600 text-sm mt-1">{review['OWNER REPLY']}</p>
                </div>
              )}
            </div>
          ))}
        </div>
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
