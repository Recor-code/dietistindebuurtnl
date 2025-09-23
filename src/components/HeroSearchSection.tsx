'use client';

import React from 'react';
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
    <div className="w-[800px] mx-auto mb-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
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
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-white">
              <option value="">Alle specialisten</option>
              <option value="adhd-coach">ADHD Coach</option>
              <option value="gedragstherapeut">Gedragstherapeut</option>
              <option value="psycholoog">Psycholoog</option>
              <option value="psychiater">Psychiater</option>
              <option value="kinder-psycholoog">Kinderpsycholoog</option>
            </select>
          </div>
          <div>
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <Search size={16} />
              Zoeken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}