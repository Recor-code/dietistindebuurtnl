'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizData {
  age: string;
  goal: string;
  experience: string;
  concern: string;
  location: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
}

interface MatchingQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const MatchingQuiz: React.FC<MatchingQuizProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<QuizData>({
    age: '',
    goal: '',
    experience: '',
    concern: '',
    location: '',
    name: '',
    email: '',
    countryCode: '+31',
    phone: ''
  });

  const totalSteps = 6;

  const ageOptions = [
    '13-17 jaar (tiener)', 
    '18-25 jaar (jongvolwassene)',
    '26-45 jaar (volwassene)',
    '46-60 jaar',
    '60+ jaar'
  ];

  const goalOptions = [
    'Afvallen en gewichtsverlies',
    'Gezonder leven en preventie',
    'Medische aandoening (diabetes, cholesterol, etc.)',
    'Sportvoeding en prestatie',
    'Voedselallergieën of intoleranties',
    'Veganistisch of plantaardig eten'
  ];

  const experienceOptions = [
    'Nooit eerder bij een diëtist geweest',
    'Momenteel in behandeling bij een diëtist',
    'Eerder gehad maar gestopt',
    'Op zoek naar een andere diëtist'
  ];

  const concernOptions = [
    'Ik weet niet waar ik moet beginnen',
    'Moeite met volhouden van een dieet',
    'Emotioneel eten en stress',
    'Specifieke gezondheidsklachten',
    'Advies over voedingsstoffen en supplementen'
  ];

  const handleOptionSelect = (field: keyof QuizData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-advance to next step after selection (except for the last step)
    if (currentStep < totalSteps) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 500); // Small delay for better UX
    }
  };

  const handleInputChange = (field: keyof QuizData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.age !== '';
      case 2: return formData.goal !== '';
      case 3: return formData.experience !== '';
      case 4: return formData.concern !== '';
      case 5: return formData.location.trim() !== '';
      case 6: return formData.name.trim() !== '' && formData.email.trim() !== '';
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setCurrentStep(7); // Thank you step
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.details || errorData.error || 'Er ging iets mis bij het versturen.';
        setSubmitError(errorMessage);
      }
    } catch (error) {
      console.error('Quiz submission error:', error);
      setSubmitError('Netwerkfout. Controleer je internetverbinding en probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitted) {
      // Reset form when closing after submission
      setCurrentStep(1);
      setIsSubmitted(false);
      setSubmitError(null);
      setFormData({
        age: '',
        goal: '',
        experience: '',
        concern: '',
        location: '',
        name: '',
        email: '',
        countryCode: '+31',
        phone: ''
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
    >
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Diëtist Matching Quiz</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {currentStep <= totalSteps && (
          <div className="p-6 pb-3">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                Stap {currentStep} van {totalSteps}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Quiz Content */}
        <div className="p-6 pt-3">
          {/* Step 1: Age */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Wat is de leeftijd? (van de persoon die hulp nodig heeft)
              </h3>
              <div className="space-y-3">
                {ageOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect('age', option)}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      formData.age === option
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Goal */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Wat is je belangrijkste doel?
              </h3>
              <div className="space-y-3">
                {goalOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect('goal', option)}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      formData.goal === option
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Experience */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Heb je eerder met een diëtist gewerkt?
              </h3>
              <div className="space-y-3">
                {experienceOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect('experience', option)}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      formData.experience === option
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Biggest Concern */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Wat is je grootste uitdaging op dit moment?
              </h3>
              <div className="space-y-3">
                {concernOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect('concern', option)}
                    className={`w-full p-3 text-left rounded-lg border transition-colors ${
                      formData.concern === option
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Location */}
          {currentStep === 5 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Waar ben je gevestigd?
              </h3>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Voer je stad in..."
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          {/* Step 6: Contact Info */}
          {currentStep === 6 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Laten we je verbinden met de beste opties!
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Je volledige naam"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="je@email.com"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoon (optioneel)
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => handleInputChange('countryCode', e.target.value)}
                      className="w-28 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="+31">🇳🇱 +31</option>
                      <option value="+32">🇧🇪 +32</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={formData.countryCode === '+31' ? '6 12345678' : '470 12 34 56'}
                      className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                We sturen je gepersonaliseerde zorg matches op basis van je antwoorden
              </p>
              
              {/* Error Message */}
              {submitError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{submitError}</p>
                  <button
                    onClick={() => setSubmitError(null)}
                    className="text-xs text-red-500 underline mt-1 hover:text-red-700"
                  >
                    Verbergen
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 7: Thank You */}
          {currentStep === 7 && (
            <div className="text-center py-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bedankt!</h3>
                <p className="text-gray-600">
                  We hebben je antwoorden ontvangen en gaan op zoek naar de beste Diëtisten voor jou.
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Je ontvangt binnen 24 uur een e-mail met gepersonaliseerde aanbevelingen.
              </p>
              <button
                onClick={handleClose}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Sluiten
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {currentStep <= totalSteps && (
          <div className="flex justify-between items-center p-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={20} />
              Vorige
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
                  canProceed()
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Volgende
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={`optin-ok px-6 py-2 rounded-lg transition-colors ${
                  canProceed() && !isSubmitting
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Bezig...' : 'Krijg Mijn Aanbevelingen'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchingQuiz;