'use client';

import { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface ClaimPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  practiceName: string;
  specialistSlug: string;
}

interface FormData {
  practiceName: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  website: string;
  services: string[];
}

const SERVICES = [
  'ADHD Coach',
  'ADHD Psycholoog',
  'ADHD Kinderpsycholoog',
  'Anders'
];

export default function ClaimPracticeModal({ isOpen, onClose, practiceName, specialistSlug }: ClaimPracticeModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    practiceName: practiceName,
    name: '',
    email: '',
    countryCode: '+31',
    phone: '',
    website: '',
    services: []
  });

  if (!isOpen) return null;

  const handleClose = () => {
    if (!isSubmitting) {
      setStep(1);
      setFormData({
        practiceName: practiceName,
        name: '',
        email: '',
        countryCode: '+31',
        phone: '',
        website: '',
        services: []
      });
      setSubmitSuccess(false);
      onClose();
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const fullUrl = `https://adhdcoachindebuurt.nl/specialist/${specialistSlug}`;
    
    try {
      const response = await fetch('https://n8n-595.workflowapp.ai/webhook/e892c3b5-8e7c-4bcc-909f-9e4bcdf2a1a1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: fullUrl,
          type: 'claim_practice'
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        alert('Er is een fout opgetreden. Probeer het later opnieuw.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Er is een fout opgetreden. Probeer het later opnieuw.');
      setIsSubmitting(false);
    }
  };

  const canProceedToNext = () => {
    switch (step) {
      case 2:
        return formData.practiceName.trim().length > 0;
      case 3:
        return formData.name.trim().length > 0;
      case 4:
        return formData.email.trim().length > 0 && formData.email.includes('@');
      case 5:
        return formData.phone.trim().length > 0;
      case 6:
        return formData.website.trim().length > 0;
      case 7:
        return formData.services.length > 0;
      default:
        return true;
    }
  };

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Bedankt!</h3>
          <p className="text-gray-600">
            We hebben je aanvraag ontvangen en nemen binnenkort contact met je op.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Claim je praktijk
          </h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Stap {step} van 7</span>
            <span className="text-sm text-gray-600">{Math.round((step / 7) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-sky-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {step === 1 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-sky-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Klaar om meer referrals te krijgen?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Neem de controle over je praktijkprofiel en kom in contact met families die ADHD hulp zoeken.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">100% Gratis</h4>
                  <p className="text-sm text-gray-600">Geen creditcard vereist</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Krijg Referrals</h4>
                  <p className="text-sm text-gray-600">Verbind met families</p>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Bevestig je praktijknaam
              </h3>
              <p className="text-gray-600 mb-6">
                Is dit de juiste naam voor je praktijk?
              </p>
              <input
                type="text"
                value={formData.practiceName}
                onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
                placeholder="Praktijknaam"
                autoFocus
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wat is je naam?
              </h3>
              <p className="text-gray-600 mb-6">
                Laat ons weten met wie we contact opnemen.
              </p>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
                placeholder="Voor- en achternaam"
                autoFocus
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wat is je e-mailadres?
              </h3>
              <p className="text-gray-600 mb-6">
                We gebruiken dit om contact met je op te nemen.
              </p>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
                placeholder="naam@voorbeeld.nl"
                autoFocus
              />
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wat is je telefoonnummer?
              </h3>
              <p className="text-gray-600 mb-6">
                Zo kunnen we je snel bereiken als dat nodig is.
              </p>
              <div className="flex gap-3">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg bg-white"
                >
                  <option value="+31">🇳🇱 +31</option>
                  <option value="+32">🇧🇪 +32</option>
                </select>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
                  placeholder={formData.countryCode === '+31' ? '6 12345678' : '470 12 34 56'}
                  autoFocus
                />
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Wat is je praktijk website?
              </h3>
              <p className="text-gray-600 mb-6">
                Deel de URL van je website met ons.
              </p>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg"
                placeholder="https://www.jouwpraktijk.nl"
                autoFocus
              />
            </div>
          )}

          {step === 7 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Welke diensten bied je aan?
              </h3>
              <p className="text-gray-600 mb-6">
                Selecteer alle diensten die van toepassing zijn.
              </p>
              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className={`w-full px-4 py-4 border-2 rounded-lg text-left transition-all ${
                      formData.services.includes(service)
                        ? 'border-sky-500 bg-sky-50 text-sky-900'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{service}</span>
                      {formData.services.includes(service) && (
                        <CheckCircle className="w-5 h-5 text-sky-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between gap-4">
          {step > 1 && (
            <button
              onClick={handleBack}
              disabled={isSubmitting}
              className="px-6 py-3 text-gray-700 hover:text-gray-900 disabled:opacity-50 flex items-center gap-2 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Terug
            </button>
          )}
          
          <div className="flex-1" />

          {step < 7 ? (
            <button
              onClick={handleNext}
              disabled={!canProceedToNext()}
              className="px-8 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Volgende
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceedToNext() || isSubmitting}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? 'Versturen...' : 'Verstuur aanvraag'}
              {!isSubmitting && <CheckCircle className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
