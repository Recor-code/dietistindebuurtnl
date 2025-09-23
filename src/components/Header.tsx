import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 leading-tight">ADHD Coaching</span>
              <span className="text-sm text-gray-600 leading-tight">in de Buurt</span>
            </div>
          </Link>
          
          {/* Navigation Menu */}
          <nav className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-sky-500 font-medium transition-colors text-sm md:text-base">
              FAQ
            </Link>
          </nav>

          <a
            href="https://adhdzelftest.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-400 hover:bg-sky-500 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors shadow-md text-sm md:text-base"
          >
            Gratis ADHD Test
          </a>
        </div>
      </div>
    </header>
  );
}