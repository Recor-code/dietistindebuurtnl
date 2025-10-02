'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

declare global {
  interface Window {
    google: typeof google;
  }
}

interface Coach {
  id: number;
  placeId?: string;
  name: string;
  latitude: number | null;
  longitude: number | null;
  rating: number | null;
  address: string | null;
  specialization: string | null;
  slug?: string;
}

interface GoogleMapProps {
  coaches: Coach[];
  center: { lat: number; lng: number };
  zoom?: number;
  height?: string;
}

export default function GoogleMap({ coaches, center, zoom = 12, height = '400px' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Track component mount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    // Skip if not mounted or if running on server-side
    if (!isMounted || typeof window === 'undefined') return;

    // Skip if map already initialized
    if (mapInstanceRef.current) return;

    const initMap = async () => {
      try {
        console.log('🗺️ GoogleMap: Starting initialization');
        console.log('📍 GoogleMap: Center coordinates:', center);
        console.log('👥 GoogleMap: Total coaches received:', coaches.length);

        // Check if container ref is available
        if (!mapRef.current) {
          console.error('❌ GoogleMap: Map container ref not yet available, will retry');
          return;
        }

        console.log('✅ GoogleMap: Map container ref is available');

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        
        if (!apiKey) {
          console.error('❌ Google Maps API key is missing');
          setError('Google Maps API key is niet geconfigureerd.');
          return;
        }

        console.log('🔑 GoogleMap: API key available');

        // Load Google Maps API
        const loader = new Loader({
          apiKey,
          version: 'weekly',
          libraries: ['maps', 'marker']
        });

        console.log('⏳ GoogleMap: Loading Google Maps API...');
        await loader.load();
        console.log('✅ GoogleMap: Google Maps API loaded successfully');

        // Double-check ref is still available after async load
        if (!mapRef.current) {
          console.error('❌ GoogleMap: Map container ref lost after API load');
          setError('Map container niet gevonden na laden van API.');
          return;
        }

        // Create map instance
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        });

        mapInstanceRef.current = map;
        console.log('🗺️ GoogleMap: Map instance created successfully');

        let markersAdded = 0;
        let markersSkipped = 0;

        // Add markers for coaches with valid coordinates
        coaches.forEach((coach) => {
          if (coach.latitude && coach.longitude) {
            const lat = typeof coach.latitude === 'string' ? parseFloat(coach.latitude) : coach.latitude;
            const lng = typeof coach.longitude === 'string' ? parseFloat(coach.longitude) : coach.longitude;
            
            if (!isNaN(lat) && !isNaN(lng)) {
              const marker = new google.maps.Marker({
                position: { lat, lng },
                map: map,
                title: coach.name,
              });

              markersAdded++;

              // Create info window with link to specialist page
              const infoContent = `
                <div style="padding: 12px; max-width: 280px; font-family: system-ui, -apple-system, sans-serif;">
                  <h3 style="font-size: 16px; font-weight: 600; color: #1f2937; margin: 0 0 4px 0;">${coach.name}</h3>
                  <p style="font-size: 14px; color: #0ea5e9; margin: 0 0 8px 0;">${coach.specialization || 'ADHD Specialist'}</p>
                  ${coach.rating ? `
                    <div style="display: flex; align-items: center; gap: 4px; font-size: 14px; color: #6b7280; margin-bottom: 8px;">
                      <span style="color: #fbbf24;">★</span>
                      <span>${coach.rating.toFixed(1)}</span>
                    </div>
                  ` : ''}
                  ${coach.address ? `<p style="font-size: 12px; color: #6b7280; margin: 0 0 12px 0;">${coach.address}</p>` : ''}
                  ${coach.slug ? `
                    <a href="/specialist/${coach.slug}" 
                       style="display: inline-block; color: #3b82f6; text-decoration: none; font-size: 13px; font-weight: 400; margin-top: 4px;">
                      Bekijk profiel →
                    </a>
                  ` : ''}
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
            markersSkipped++;
          }
        });

        console.log(`📊 GoogleMap: Summary - ${markersAdded} markers added, ${markersSkipped} markers skipped`);
        setIsLoaded(true);

      } catch (err) {
        console.error('❌ Error loading Google Maps:', err);
        console.error('❌ Error details:', err instanceof Error ? err.message : 'Unknown error');
        console.error('❌ Error stack:', err instanceof Error ? err.stack : 'No stack trace');
        setError('Kon de kaart niet laden. Controleer je internetverbinding.');
      }
    };

    // Add delay to ensure DOM is fully ready
    const timeoutId = setTimeout(() => {
      initMap();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [coaches, center, zoom, isMounted]);

  if (!isMounted) {
    return (
      <div 
        className="bg-gray-100 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <p className="text-gray-500 text-sm">Map voorbereiden...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className="bg-red-50 border border-red-200 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center p-4">
          <p className="text-red-600 font-medium mb-2">Google Maps kon niet laden</p>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md relative" style={{ height }}>
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: height }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-3"></div>
            <p className="text-blue-600 text-sm font-medium">Kaart laden...</p>
            <p className="text-gray-500 text-xs mt-1">
              {coaches.length} specialist{coaches.length !== 1 ? 'en' : ''} gereed
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
