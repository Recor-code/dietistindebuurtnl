'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// Declare global google types
declare global {
  interface Window {
    google: typeof google;
  }
}

interface Coach {
  id: number;
  name: string;
  latitude: string | null;
  longitude: string | null;
  rating: string | null;
  address: string | null;
  specialization: string | null;
}

interface GoogleMapProps {
  coaches: Coach[];
  center: { lat: number; lng: number };
  zoom?: number;
  height?: string;
}

export default function GoogleMap({ coaches, center, zoom = 12, height = '400px' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted and running on client-side only
  useEffect(() => {
    // Only run on client-side after component mounts
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Skip if not mounted or if running on server-side
    if (!isMounted || typeof window === 'undefined') return;

    const initMap = async () => {
      try {
        console.log('🗺️ GoogleMap: Starting initialization');
        console.log('📍 GoogleMap: Center coordinates:', center);
        console.log('👥 GoogleMap: Total coaches received:', coaches.length);
        
        // Debug coach data
        coaches.forEach((coach, index) => {
          console.log(`🏃 Coach ${index + 1}:`, {
            name: coach.name,
            latitude: coach.latitude,
            longitude: coach.longitude,
            address: coach.address
          });
        });

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        
        if (!apiKey) {
          console.error('❌ Google Maps API key is missing');
          setError('Google Maps API key is niet geconfigureerd.');
          return;
        }

        console.log('🔑 GoogleMap: API key available');

        const loader = new Loader({
          apiKey,
          version: 'weekly',
          libraries: ['maps']
        });

        console.log('⏳ GoogleMap: Loading Google Maps API...');
        await loader.load();
        console.log('✅ GoogleMap: Google Maps API loaded successfully');

        // Try direct DOM access if ref isn't available
        let mapElement = mapRef.current;
        if (!mapElement) {
          console.error('❌ GoogleMap: React ref not available, trying direct DOM access...');
          mapElement = document.getElementById('google-map-container') as HTMLDivElement;
          if (!mapElement) {
            console.error('🚨 GoogleMap: Neither ref nor DOM element found');
            setError('Map container niet gevonden. Probeer de pagina opnieuw te laden.');
            return;
          }
          console.log('✅ GoogleMap: Using direct DOM access for map element');
        } else {
          console.log('✅ GoogleMap: Using React ref for map element');
        }

        const map = new google.maps.Map(mapElement, {
          center,
          zoom,
        });

        console.log('🗺️ GoogleMap: Map instance created successfully');

        let markersAdded = 0;
        let markersSkipped = 0;

        // Add markers for coaches
        coaches.forEach((coach) => {
          if (coach.latitude && coach.longitude) {
            const lat = parseFloat(coach.latitude);
            const lng = parseFloat(coach.longitude);
            
            console.log(`📍 Processing ${coach.name}: lat=${lat}, lng=${lng}`);
            
            if (!isNaN(lat) && !isNaN(lng)) {
              const marker = new google.maps.Marker({
                position: { lat, lng },
                map: map,
                title: coach.name,
              });

              console.log(`✅ Marker added for ${coach.name} at ${lat}, ${lng}`);
              markersAdded++;

              // Create info window content
              const infoContent = `
                <div class="p-3 max-w-xs">
                  <h3 class="font-semibold text-gray-800 mb-1">${coach.name}</h3>
                  <p class="text-sky-500 text-sm mb-2">${coach.specialization || 'ADHD Coach'}</p>
                  ${coach.rating ? `<div class="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <span class="text-yellow-400">★</span>
                    <span>${coach.rating}</span>
                  </div>` : ''}
                  ${coach.address ? `<p class="text-gray-600 text-xs">${coach.address}</p>` : ''}
                </div>
              `;

              const infoWindow = new google.maps.InfoWindow({
                content: infoContent,
              });

              marker.addListener('click', () => {
                infoWindow.open(map, marker);
              });
            } else {
              console.warn(`⚠️ Invalid coordinates for ${coach.name}: lat=${coach.latitude}, lng=${coach.longitude}`);
              markersSkipped++;
            }
          } else {
            console.warn(`⚠️ Missing coordinates for ${coach.name}: lat=${coach.latitude}, lng=${coach.longitude}`);
            markersSkipped++;
          }
        });

        console.log(`📊 GoogleMap: Summary - ${markersAdded} markers added, ${markersSkipped} markers skipped`);
        setIsLoaded(true);

      } catch (err) {
        console.error('❌ Error loading Google Maps:', err);
        setError('Kon de kaart niet laden. Controleer je internetverbinding.');
      }
    };

    initMap();
  }, [coaches, center, zoom, isMounted]);

  // Show loading state while mounting
  if (!isMounted) {
    return (
      <div 
        className="bg-gray-50 border-gray-200 border rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-pulse h-4 w-32 bg-gray-300 rounded mx-auto mb-2"></div>
          <p className="text-gray-500 text-sm">Kaart voorbereiden...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className="bg-red-100 border-red-300 border-2 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center p-4">
          <p className="text-red-600 mb-2">❌ Google Maps Error</p>
          <p className="text-red-600 text-sm font-medium">{error}</p>
          <p className="text-gray-600 text-xs mt-2">
            Rotterdam heeft {coaches.length} coach{coaches.length !== 1 ? 'es' : ''}
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div 
        className="bg-sky-50 border-sky-300 border-2 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500 mx-auto mb-2"></div>
          <p className="text-sky-500 text-sm font-medium">Kaart laden...</p>
          <p className="text-gray-600 text-xs mt-2">
            {coaches.length} coach{coaches.length !== 1 ? 'es' : ''} gereed voor {center.lat.toFixed(4)}, {center.lng.toFixed(4)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div 
        ref={mapRef} 
        id="google-map-container"
        style={{ height }} 
      />
    </div>
  );
}