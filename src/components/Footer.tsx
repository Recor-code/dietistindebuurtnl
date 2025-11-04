import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-blue-400" size={24} />
              <div>
                <span className="text-xl font-bold">Diëtist in de Buurt</span>
                <div className="text-sm text-gray-500 mt-1">De grootste directory voor Diëtisten</div>
              </div>
            </div>
            <p className="text-gray-400">
              Vind de beste diëtisten bij jou in de buurt.<br />
              Vergelijk reviews, beschikbaarheid en specialisaties om de perfecte match te vinden.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Handige Links</h5>
            <ul className="space-y-1 text-gray-400">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><a href="https://ketogeen.com/keto-quiz/?utm_source=dietistindebuurt.nl&utm_medium=footer&utm_campaign=keto_quiz" target="_blank" rel="noopener noreferrer" className="hover:text-white">Doe de Keto-Quiz</a></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Diëtisten in de Buurt. Alle rechten voorbehouden.
            </p>
            <div className="text-center">
              <a
                href="https://ketogeen.com/keto-quiz/?utm_source=dietistindebuurt.nl&utm_medium=footer&utm_campaign=keto_quiz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Ontdek hoeveel je kan afvallen met het keto plan - Doe de keto-quiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
