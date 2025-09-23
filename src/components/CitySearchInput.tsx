'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchResult {
  id: string;
  label: string;
  value: string;
  slug?: string;
  country?: string;
  type: 'city' | 'postcode';
}

interface CitySearchInputProps {
  placeholder?: string;
  onSelect?: (result: SearchResult) => void;
  className?: string;
}

export default function CitySearchInput({ 
  placeholder = "Typ je stad of postcode...", 
  onSelect,
  className = "" 
}: CitySearchInputProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    // Don't search if we have a selection and the query matches the selected value
    if (hasSelection && query === selectedValue) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchTimeout = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search-cities?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        setResults(data || []);
        setIsOpen(data?.length > 0);
        setSelectedIndex(-1);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
        setIsOpen(false);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query, hasSelection, selectedValue]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, selectedIndex, results]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (result: SearchResult) => {
    setQuery(result.value);
    setSelectedValue(result.value);
    setHasSelection(true);
    setIsOpen(false);
    setSelectedIndex(-1);
    onSelect?.(result);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
    
    // Reset selection state if user changes the input from selected value
    if (hasSelection && newValue !== selectedValue) {
      setHasSelection(false);
      setSelectedValue('');
    }
  };

  const handleInputFocus = () => {
    // Only show dropdown if we don't have a selection or if results exist and query doesn't match selection
    if (!hasSelection && results.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-colors"
          autoComplete="off"
        />
        {isLoading && (
          <div className="absolute right-3 top-3">
            <div className="w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleSelect(result)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-sky-50 transition-colors ${
                index === selectedIndex ? 'bg-sky-50 border-l-4 border-sky-400' : ''
              } ${index !== results.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex-shrink-0">
                {result.type === 'city' ? (
                  <MapPin size={16} className="text-gray-500" />
                ) : (
                  <Search size={16} className="text-sky-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{result.label}</div>
                {result.type === 'city' && result.country && (
                  <div className="text-sm text-gray-500">{result.country}</div>
                )}
                {result.type === 'postcode' && (
                  <div className="text-sm text-gray-500">Nederlandse postcode</div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}