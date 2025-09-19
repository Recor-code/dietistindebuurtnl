'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

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

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          version: 'weekly',
        });

        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');
        const { InfoWindow } = await loader.importLibrary('maps');

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, {
          center,
          zoom,
          mapId: 'adhd-coaches-map',
        });

        // Add markers for coaches
        coaches.forEach((coach) => {
          if (coach.latitude && coach.longitude) {
            const lat = parseFloat(coach.latitude);
            const lng = parseFloat(coach.longitude);
            
            if (!isNaN(lat) && !isNaN(lng)) {
              const marker = new AdvancedMarkerElement({
                map,
                position: { lat, lng },
                title: coach.name,
              });

              // Create info window content
              const infoContent = document.createElement('div');
              infoContent.className = 'p-3 max-w-xs';
              infoContent.innerHTML = `
                <h3 class="font-semibold text-gray-800 mb-1">${coach.name}</h3>
                <p class="text-blue-600 text-sm mb-2">${coach.specialization || 'ADHD Coach'}</p>
                ${coach.rating ? `<div class="flex items-center gap-1 text-sm text-gray-600 mb-2">
                  <span class="text-yellow-400">★</span>
                  <span>${coach.rating}</span>
                </div>` : ''}
                ${coach.address ? `<p class="text-gray-600 text-xs">${coach.address}</p>` : ''}
              `;

              const infoWindow = new InfoWindow({
                content: infoContent,
              });

              marker.addListener('click', () => {
                infoWindow.open(map, marker);
              });
            }
          }
        });

        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Kon de kaart niet laden. Controleer je internetverbinding.');
      }
    };

    initMap();
  }, [coaches, center, zoom]);

  if (error) {
    return (
      <div 
        className="bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300"
        style={{ height }}
      >
        <div className="text-center p-4">
          <p className="text-gray-600 mb-2">🗺️</p>
          <p className="text-gray-600 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div 
        className="bg-gray-100 rounded-lg flex items-center justify-center"
        style={{ height }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Kaart laden...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div ref={mapRef} style={{ height }} />
    </div>
  );
}