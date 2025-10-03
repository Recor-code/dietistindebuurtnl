'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image 
                src="/images/logo.png"
                alt="ADHD Coach in de Buurt Logo"
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 leading-tight">ADHD Coaching</span>
              <span className="text-sm text-gray-600 leading-tight">in de Buurt</span>
            </div>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="https://adhdzelftest.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            Gratis ADHD Test
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-sky-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-sky-500 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-sky-500 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-sky-500 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>
          
          {/* Mobile CTA Button - Full Width Outside Hamburger */}
          <div className="px-4 pb-4">
            <a
              href="https://adhdzelftest.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gratis ADHD Test
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
