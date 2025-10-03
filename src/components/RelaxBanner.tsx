import Link from 'next/link';

export default function RelaxBanner() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="https://organicolabs.com/relax-plus/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-90 transition-opacity"
        >
          <img 
            src="/relax-banner-new.jpg" 
            alt="RELAX - Natuurlijke rust zonder loom gevoel" 
            className="w-auto mx-auto"
          />
        </a>
        
        <div className="mt-4">
          <Link 
            href="/banner"
            className="text-sm text-gray-600 hover:text-sky-600 transition-colors underline"
          >
            Uw banner hier? Klik hier
          </Link>
        </div>
      </div>
    </div>
  );
}
