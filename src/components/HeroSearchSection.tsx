'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CitySearchInput from './CitySearchInput';

export default function HeroSearchSection() {
  const [selectedCity, setSelectedCity] = useState<{ slug?: string; type?: string; value?: string } | null>(null);
  const [queryText, setQueryText] = useState<string>('');

  const handleCitySelect = (result: { slug?: string; type?: string; value?: string }) => {
    console.log('Selected:', result);
    setSelectedCity(result);
    
    // Auto-navigate when city is selected from dropdown
    if (result.slug) {
      window.location.href = `/stad/${result.slug}`;
    } else if (result.type === 'postcode') {
      console.log('Searching for postcode:', result.value);
      // TODO: Implement postcode search functionality
    }
  };

  const handleQueryChange = (query: string) => {
    setQueryText(query);
  };

  const handleSearch = async () => {
    // If user selected from dropdown, use that
    if (selectedCity && selectedCity.slug) {
      window.location.href = `/stad/${selectedCity.slug}`;
      return;
    }

    // If user just typed text, search for matching city
    if (queryText.trim()) {
      try {
        const response = await fetch(`/api/search-cities?q=${encodeURIComponent(queryText)}`);
        const data = await response.json();
        
        // If there's an exact or close match, navigate to the first result
        if (data && data.length > 0 && data[0].slug) {
          window.location.href = `/stad/${data[0].slug}`;
        }
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };

  // Enable button if there's a selection OR if there's text typed
  const isButtonEnabled = Boolean(selectedCity) || queryText.trim().length >= 2;

  return (
    <div className="w-full max-w-[600px] mx-auto mb-12 px-4 sm:px-0">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-9">
            <label className="block text-sm font-medium text-gray-700 mb-2">Waar zoek je?</label>
            <CitySearchInput 
              className="w-full"
              placeholder="Bijv. Amsterdam, Utrecht, Antwerpen"
              onSelect={handleCitySelect}
              onQueryChange={handleQueryChange}
            />
          </div>
          <div className="md:col-span-3">
            <button 
              onClick={handleSearch}
              disabled={!isButtonEnabled}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                isButtonEnabled 
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
