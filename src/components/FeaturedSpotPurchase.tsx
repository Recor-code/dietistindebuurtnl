'use client';

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Crown, CreditCard, Lock, Star, MapPin } from 'lucide-react';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface Coach {
  id: number;
  name: string;
  slug: string;
  specialization?: string;
  address?: string;
  rating?: number;
  review_count?: number;
}

interface City {
  id: number;
  name: string;
  slug: string;
}

interface FeaturedSpotPurchaseProps {
  coach: Coach;
  city: City;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const FEATURED_SPOT_PRICES = {
  1: 199, // Top spot - €199/month
  2: 149, // Second spot - €149/month
  3: 99,  // Third spot - €99/month
};

const CheckoutForm: React.FC<FeaturedSpotPurchaseProps> = ({ coach, city, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [selectedPosition, setSelectedPosition] = useState<1 | 2 | 3>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availablePositions, setAvailablePositions] = useState<number[]>([1, 2, 3]);

  useEffect(() => {
    // Check which positions are available for this city
    checkAvailablePositions();
  }, [city.id]);

  const checkAvailablePositions = async () => {
    try {
      const response = await fetch(`/api/featured-spots/${city.id}`);
      const data = await response.json();
      
      if (response.ok) {
        const occupiedPositions = data.featuredSpots.map((spot: any) => spot.position);
        const available = [1, 2, 3].filter(pos => !occupiedPositions.includes(pos));
        setAvailablePositions(available);
        
        if (available.length > 0 && !available.includes(selectedPosition)) {
          setSelectedPosition(available[0] as 1 | 2 | 3);
        }
      }
    } catch (error) {
      console.error('Error checking available positions:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found');
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: FEATURED_SPOT_PRICES[selectedPosition],
          coachId: coach.id,
          cityId: city.id,
          position: selectedPosition,
          duration: 30, // 30 days
        }),
      });

      const { clientSecret, paymentIntentId } = await response.json();

      if (!clientSecret) {
        throw new Error('Failed to create payment intent');
      }

      // Confirm payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: coach.name,
            },
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message || 'Payment failed');
      } else if (paymentIntent?.status === 'succeeded') {
        // Confirm featured spot creation
        const confirmResponse = await fetch('/api/confirm-featured-spot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
          }),
        });

        const confirmData = await confirmResponse.json();

        if (confirmResponse.ok) {
          onSuccess?.();
        } else {
          setError(confirmData.error || 'Failed to confirm featured spot');
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const getPositionLabel = (position: number) => {
    switch (position) {
      case 1: return 'Top Positie';
      case 2: return 'Tweede Positie';
      case 3: return 'Derde Positie';
      default: return `Positie ${position}`;
    }
  };

  const getPositionDescription = (position: number) => {
    switch (position) {
      case 1: return 'Meest prominente plek - eerste wat bezoekers zien';
      case 2: return 'Tweede meest zichtbare positie';
      case 3: return 'Derde zichtbare positie in de premium sectie';
      default: return '';
    }
  };

  if (availablePositions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="text-center">
          <Crown className="mx-auto text-amber-600 mb-4" size={48} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Geen Premium Spots Beschikbaar
          </h3>
          <p className="text-gray-600 mb-4">
            Alle premium posities voor {city.name} zijn momenteel bezet.
          </p>
          <button
            onClick={onCancel}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Sluiten
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <Crown className="mx-auto text-amber-600 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Premium Positie Aanschaffen
        </h3>
        <p className="text-gray-600">
          Verhoog de zichtbaarheid van {coach.name} in {city.name}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Position Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Kies je gewenste positie:
          </label>
          <div className="space-y-3">
            {availablePositions.map((position) => (
              <div
                key={position}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedPosition === position
                    ? 'border-amber-400 bg-amber-50 ring-2 ring-amber-200'
                    : 'border-gray-200 hover:border-amber-300'
                }`}
                onClick={() => setSelectedPosition(position as 1 | 2 | 3)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <input
                        type="radio"
                        name="position"
                        value={position}
                        checked={selectedPosition === position}
                        onChange={() => setSelectedPosition(position as 1 | 2 | 3)}
                        className="text-amber-600"
                      />
                      <span className="font-semibold text-gray-800">
                        {getPositionLabel(position)}
                      </span>
                      {position === 1 && (
                        <Crown className="text-amber-500" size={16} />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {getPositionDescription(position)}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">
                      €{FEATURED_SPOT_PRICES[position as keyof typeof FEATURED_SPOT_PRICES]}
                    </div>
                    <div className="text-xs text-gray-500">per maand</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coach Info */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Coach Details:</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="text-amber-500" size={14} />
              <span>{coach.name}</span>
            </div>
            {coach.specialization && (
              <div>{coach.specialization}</div>
            )}
            {coach.address && (
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{coach.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Payment Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <CreditCard className="inline mr-2" size={16} />
            Betaalgegevens:
          </label>
          <div className="border rounded-lg p-3 bg-gray-50">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors"
          >
            Annuleren
          </button>
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                Verwerken...
              </>
            ) : (
              <>
                <Lock size={16} />
                Betaal €{FEATURED_SPOT_PRICES[selectedPosition]}
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          <Lock className="inline" size={12} /> Veilig betalen met Stripe • Premium spot geldig voor 30 dagen
        </p>
      </div>
    </div>
  );
};

const FeaturedSpotPurchase: React.FC<FeaturedSpotPurchaseProps> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
};

export default FeaturedSpotPurchase;