'use client';

import { Search } from 'lucide-react';
import CitySearchInput from './CitySearchInput';

export default function HeroSearchSection() {
  const handleCitySelect = (result: { slug?: string; type?: string; value?: string }) => {
    console.log('Selected:', result);
    // Navigate to city page if it has a slug
    if (result.slug) {
      window.location.href = `/stad/${result.slug}`;
    } else if (result.type === 'postcode') {
      // For postcode, could redirect to a search results page or show coaches in that area
      console.log('Postcode selected:', result.value);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Vind de beste ADHD coaches<br />bij jou in de buurt</h3>
        <div className="flex gap-3">
          <CitySearchInput 
            className="flex-1"
            placeholder="Typ je stad of postcode..."
            onSelect={handleCitySelect}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Search size={20} />
            Zoeken
          </button>
        </div>
      </div>
    </div>
  );
}