'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, Phone, Mail, Globe, Crown } from 'lucide-react';

interface Coach {
  id: number;
  name: string;
  slug: string;
  email?: string;
  phone?: string;
  website?: string;
  specialization?: string;
  description?: string;
  address?: string;
  rating?: number;
  review_count?: number;
  is_child_friendly?: boolean;
  weekend_available?: boolean;
  online_available?: boolean;
  in_person_available?: boolean;
  accepts_insurance?: boolean;
  availability_status?: string;
}

interface FeaturedSpot {
  id: number;
  position: number;
  start_date: string;
  end_date: string;
  coaches: Coach;
}

interface FeaturedSpotsProps {
  cityId: number;
  cityName: string;
}

export default function FeaturedSpots({ cityId, cityName }: FeaturedSpotsProps) {
  const [featuredSpots, setFeaturedSpots] = useState<FeaturedSpot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedSpots();
  }, [cityId]);

  const fetchFeaturedSpots = async () => {
    try {
      const response = await fetch(`/api/featured-spots/${cityId}`);
      const data = await response.json();
      
      if (response.ok) {
        setFeaturedSpots(data.featuredSpots);
      } else {
        console.error('Failed to fetch featured spots:', data.error);
      }
    } catch (error) {
      console.error('Error fetching featured spots:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="text-amber-600" size={24} />
          <h3 className="text-xl font-bold text-amber-800">Premium ADHD Coaches</h3>
        </div>
        <div className="animate-pulse">
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg border border-amber-200 p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (featuredSpots.length === 0) {
    // Show purchase section when no featured spots available
    return (
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Crown className="text-yellow-600" size={28} />
          <div>
            <h3 className="text-2xl font-bold text-yellow-800">
              Premium Plaatsing Beschikbaar in {cityName}
            </h3>
            <p className="text-yellow-700 text-sm">
              Verhoog je zichtbaarheid en trek meer cliënten aan
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-6">
          <div className="bg-white rounded-lg border-2 border-yellow-300 p-8 text-center shadow-lg">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full inline-flex items-center gap-2 text-lg font-bold mb-6">
              <Crown size={20} />
              PREMIUM ZICHTBAARHEID
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Sta bovenaan en trek meer cliënten aan!</h4>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Als ADHD coach weet je hoe belangrijk zichtbaarheid is. Onze premium posities zorgen ervoor dat jouw profiel 
              direct opvalt tussen de andere coaches in {cityName}.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-left">
                <h5 className="font-bold text-gray-800 mb-3">✨ Wat krijg je?</h5>
                <ul className="text-gray-600 space-y-2">
                  <li>• Top positie met gouden crown badge</li>
                  <li>• Premium styling die opvalt</li>
                  <li>• Eerste indruk bij potentiële cliënten</li>
                  <li>• Hogere click-through rates</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h5 className="font-bold text-gray-800 mb-3">🎯 Waarom werkt dit?</h5>
                <ul className="text-gray-600 space-y-2">
                  <li>• Mensen scannen eerst de top resultaten</li>
                  <li>• Premium uitstraling = meer vertrouwen</li>
                  <li>• Directe toegang tot jouw specialisaties</li>
                  <li>• Meer aanvragen = meer inkomsten</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-medium">
                💡 Slechts 3 premium plekken beschikbaar per stad - First come, first served!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-yellow-700 text-lg mb-6 font-medium">
            Klaar om je praktijk te laten groeien? Neem contact op voor beschikbaarheid en tarieven.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Crown size={20} />
            Neem Contact Op voor Premium Positie
          </Link>
        </div>
      </div>
    );
  }

  const renderCoachCard = (spot: FeaturedSpot) => {
    const coach = spot.coaches;
    const rating = coach.rating ? parseFloat(coach.rating.toString()) : 0;

    return (
      <div
        key={spot.id}
        className="bg-white rounded-lg border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      >
        {/* Premium Badge */}
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-bl-lg">
          <div className="flex items-center gap-1 text-xs font-bold">
            <Crown size={12} />
            PREMIUM #{spot.position}
          </div>
        </div>

        <div className="p-6 pt-8">
          <h4 className="text-lg font-bold text-gray-900 mb-2 pr-20">
            <Link 
              href={`/specialist/${coach.slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {coach.name}
            </Link>
          </h4>

          {coach.specialization && (
            <p className="text-amber-700 font-medium text-sm mb-2">
              {coach.specialization}
            </p>
          )}

          {rating > 0 && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={
                      star <= rating
                        ? 'text-amber-400 fill-current'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {rating.toFixed(1)} ({coach.review_count || 0} reviews)
              </span>
            </div>
          )}

          {coach.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {coach.description.substring(0, 120)}...
            </p>
          )}

          <div className="space-y-2 mb-4">
            {coach.address && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={14} className="text-amber-600" />
                <span>{coach.address}</span>
              </div>
            )}

            {coach.phone && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={14} className="text-amber-600" />
                <span>{coach.phone}</span>
              </div>
            )}

            {coach.email && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={14} className="text-amber-600" />
                <span>{coach.email}</span>
              </div>
            )}

            {coach.website && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe size={14} className="text-amber-600" />
                <a 
                  href={coach.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 underline"
                >
                  Website
                </a>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="flex flex-wrap gap-1 mb-4">
            {coach.online_available && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Online
              </span>
            )}
            {coach.in_person_available && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Persoonlijk
              </span>
            )}
            {coach.weekend_available && (
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                Weekend
              </span>
            )}
            {coach.is_child_friendly && (
              <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
                Kindvriendelijk
              </span>
            )}
            {coach.accepts_insurance && (
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                Verzekering
              </span>
            )}
          </div>

          <Link
            href={`/specialist/${coach.slug}`}
            className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Bekijk Profiel
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Crown className="text-amber-600" size={28} />
        <div>
          <h3 className="text-2xl font-bold text-amber-800">
            Premium ADHD Coaches in {cityName}
          </h3>
          <p className="text-amber-700 text-sm">
            Handpicked professionals with verified expertise
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredSpots.map(renderCoachCard)}
      </div>

      <div className="mt-6 text-center">
        <p className="text-amber-700 text-sm">
          Wilt u ook een premium positie? 
          <Link href="/contact" className="ml-1 underline hover:text-amber-800 font-medium">
            Neem contact op
          </Link>
        </p>
      </div>
    </div>
  );
}