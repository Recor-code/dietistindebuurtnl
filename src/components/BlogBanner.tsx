import Link from 'next/link';

export default function BlogBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          Zoek je een diëtist in jouw regio?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Vergelijk gecertificeerde Diëtisten en gedragstherapeuten in jouw stad.<br />
          Bekijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          🔍 Vind jouw diëtist
        </Link>
      </div>
    </div>
  );
}