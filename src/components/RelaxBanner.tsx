import Link from 'next/link';

export default function RelaxBanner() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="https://ketogeen.com/keto-quiz/?utm_source=dietistindebuurt.nl&utm_medium=banner&utm_campaign=keto_quiz_banner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-90 transition-opacity"
        >
          <img 
            src="/relax-banner-500.webp" 
            alt="Ontdek Hoeveel Je Kan Afvallen Met Het Keto Plan - Doe De Keto-Quiz" 
            className="w-full max-w-[500px] mx-auto rounded-lg"
          />
        </a>
        
        <div className="mt-4">
          <Link 
            href="/banner"
            className="text-sm text-gray-600 hover:text-sky-600 transition-colors underline"
          >
            Jouw banner hier? Klik hier
          </Link>
        </div>
      </div>
    </div>
  );
}
