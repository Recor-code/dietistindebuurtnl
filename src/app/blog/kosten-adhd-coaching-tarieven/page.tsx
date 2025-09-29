import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Kosten ADHD coaching tarieven | ADHD Coach in de Buurt",
  description: "Wat kost ADHD coaching? Overzicht van tarieven en vergoedingen."
}

export default function KostenADHDCoaching() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8">
        <article className="px-8 prose prose-lg max-w-none">
          <h1>Kosten en tarieven ADHD coaching</h1>
          <p>Een overzicht van de kosten voor ADHD coaching in Nederland.</p>
          
          <h2>Gemiddelde tarieven:</h2>
          <ul>
            <li>Intakegesprek: €50-100</li>
            <li>Individuele sessie: €75-150</li>
            <li>Pakket van 10 sessies: €700-1200</li>
            <li>Online coaching: €60-120</li>
          </ul>
          
          <div className="mt-8 p-6 bg-orange-50 rounded-lg">
            <h3>Vergelijk ADHD coaches</h3>
            <p>Vind de beste prijs-kwaliteitverhouding in jouw regio.</p>
            <Link href="/" className="inline-block bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
              Prijzen vergelijken
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
