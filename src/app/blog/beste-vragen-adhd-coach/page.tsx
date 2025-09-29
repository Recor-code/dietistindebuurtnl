import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Beste vragen voor ADHD coach | ADHD Coach in de Buurt",
  description: "De belangrijkste vragen om aan je ADHD coach te stellen tijdens het eerste gesprek."
}

export default function BestVragenADHDCoach() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8">
        <article className="px-8 prose prose-lg max-w-none">
          <h1>De beste vragen om te stellen aan je ADHD coach</h1>
          <p>Het eerste gesprek met een ADHD coach is cruciaal voor een succesvolle samenwerking.</p>
          
          <h2>Belangrijke vragen voor je ADHD coach:</h2>
          <ul>
            <li>Wat is je ervaring met ADHD coaching?</li>
            <li>Welke aanpak gebruik je bij coaching?</li>
            <li>Hoe meet je voortgang?</li>
            <li>Wat zijn je tarieven?</li>
          </ul>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3>Zoek een ADHD coach in jouw regio</h3>
            <p>Vind de beste ADHD coaches bij jou in de buurt.</p>
            <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Zoek coach
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
