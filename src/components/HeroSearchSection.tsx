'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CitySearchInput from './CitySearchInput';

export default function HeroSearchSection() {
  const [selectedCity, setSelectedCity] = useState<{ slug?: string; type?: string; value?: string } | null>(null);

  const handleCitySelect = (result: { slug?: string; type?: string; value?: string }) => {
    console.log('Selected:', result);
    setSelectedCity(result);
    
    // Auto-navigate when city is selected
    if (result.slug) {
      window.location.href = `/stad/${result.slug}`;
    } else if (result.type === 'postcode') {
      console.log('Searching for postcode:', result.value);
      // TODO: Implement postcode search functionality
    }
  };

  const handleSearch = () => {
    if (selectedCity && selectedCity.slug) {
      window.location.href = `/stad/${selectedCity.slug}`;
    }
  };

  return (
    <div className="w-[800px] mx-auto mb-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-10">
            <label className="block text-sm font-medium text-gray-700 mb-2">Waar zoek je?</label>
            <CitySearchInput 
              className="w-full"
              placeholder="Bijv. Amsterdam, Utrecht, Antwerpen"
              onSelect={handleCitySelect}
            />
          </div>
          <div className="md:col-span-2">
            <button 
              onClick={handleSearch}
              disabled={!selectedCity}
              className={`w-full px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                selectedCity 
                  ? 'bg-sky-500 hover:bg-sky-600 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Search size={16} />
              Zoeken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
