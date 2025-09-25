'use client';

import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-spam honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setError(result.error || 'Er is een fout opgetreden');
      }
    } catch (err) {
      setError('Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Bericht verzonden!</h3>
        <p className="text-gray-600 mb-6">
          Bedankt voor je bericht. We nemen binnen 24 uur contact met je op.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Nog een bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Naam *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Je volledige naam"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="je@email.nl"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Onderwerp
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        >
          <option value="">Selecteer een onderwerp</option>
          <option value="coach-listing">Coach toevoegen aan platform</option>
          <option value="general-question">Algemene vraag</option>
          <option value="technical-issue">Technisch probleem</option>
          <option value="partnership">Samenwerking</option>
          <option value="other">Anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
          placeholder="Vertel ons waar we je mee kunnen helpen..."
        />
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
      >
        <Send size={20} />
        {isSubmitting ? 'Verzenden...' : 'Bericht versturen'}
      </button>
    </form>
  );
}