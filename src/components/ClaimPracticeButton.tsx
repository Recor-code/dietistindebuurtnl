'use client';

import { useState } from 'react';
import { Building2 } from 'lucide-react';
import ClaimPracticeModal from './ClaimPracticeModal';

interface ClaimPracticeButtonProps {
  practiceName: string;
  specialistSlug: string;
}

export default function ClaimPracticeButton({ practiceName, specialistSlug }: ClaimPracticeButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-t border-b border-sky-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-sky-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Is dit jouw praktijk?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Neem de controle over je profiel en kom in contact met meer families die ADHD hulp zoeken.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-600 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg"
          >
            <Building2 className="w-5 h-5" />
            Claim mijn praktijk
          </button>
          <p className="text-sm text-gray-500 mt-4">
            100% gratis • Geen creditcard vereist • Binnen 24 uur actief
          </p>
        </div>
      </div>

      <ClaimPracticeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        practiceName={practiceName}
        specialistSlug={specialistSlug}
      />
    </>
  );
}
