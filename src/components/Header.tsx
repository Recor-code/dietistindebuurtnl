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
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image 
                src="/images/logo.webp"
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
          
          <nav className="flex items-center gap-8">
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

          <a
            href="https://adhdzelftest.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            Gratis ADHD Test
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Logo and Hamburger Row */}
          <div className="flex justify-between items-center mb-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/images/logo.webp"
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

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-sky-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* CTA Button - Always Visible Below Logo */}
          <a
            href="https://adhdzelftest.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md text-center"
          >
            Gratis ADHD Test
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only Home, Blog, FAQ */}
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
        </div>
      )}
    </header>
  );
}
