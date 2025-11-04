'use client';

import React, { useState } from 'react';
import MatchingQuiz from './MatchingQuiz';

const ClientQuizLauncher: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      {/* Matching Quiz Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Vind de perfecte diëtist voor jou
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Beantwoord 6 snelle vragen en ontvang gepersonaliseerde aanbevelingen
          </p>
          <button
            onClick={() => setIsQuizOpen(true)}
            className="bg-sky-400 hover:bg-sky-500 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Doe Onze Matching Quiz
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Duurt slechts 2 minuten • Geheel gratis
          </p>
        </div>
      </section>

      {/* Matching Quiz Modal */}
      <MatchingQuiz 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
    </>
  );
};

export default ClientQuizLauncher;