import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Eerste gesprek ADHD coach voorbereiden | ADHD Coach in de Buurt",
  description: "Zo bereid je je optimaal voor op je eerste gesprek met een ADHD coach."
}

export default function EersteGesprekVoorbereiding() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8">
        <article className="px-8 prose prose-lg max-w-none">
          <h1>Eerste gesprek met ADHD coach: zo bereid je je voor</h1>
          <p>Een goede voorbereiding zorgt voor een succesvoller eerste gesprek met je ADHD coach.</p>
          
          <h2>Voorbereidingstips:</h2>
          <ul>
            <li>Noteer je belangrijkste uitdagingen</li>
            <li>Denk na over je doelen</li>
            <li>Bereid vragen voor</li>
            <li>Neem relevante documenten mee</li>
          </ul>
          
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3>Vind de juiste ADHD coach</h3>
            <p>Ontdek welke ADHD coach het beste bij jou past.</p>
            <Link href="/" className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Coach zoeken
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
