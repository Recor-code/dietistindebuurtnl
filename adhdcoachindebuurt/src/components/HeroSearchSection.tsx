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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Waar zoek je?</label>
            <CitySearchInput 
              className="w-full"
              placeholder="Bijv. Amsterdam, Utrecht, Antwerpen"
              onSelect={handleCitySelect}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type hulpverlener</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
              <option value="">Alle specialisten</option>
              <option value="adhd-coach">ADHD Coach</option>
              <option value="gedragstherapeut">Gedragstherapeut</option>
              <option value="psycholoog">Psycholoog</option>
              <option value="psychiater">Psychiater</option>
              <option value="kinder-psycholoog">Kinderpsycholoog</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Search size={20} />
            Zoeken
          </button>
        </div>
      </div>
    </div>
  );
}