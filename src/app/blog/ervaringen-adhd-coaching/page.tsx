import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ervaringen ADHD coaching | ADHD Coach in de Buurt",
  description: "Echte ervaringen van mensen die ADHD coaching hebben gevolgd."
}

export default function ErvaringenADHDCoaching() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-8">
        <article className="px-8 prose prose-lg max-w-none">
          <h1>Ervaringen met ADHD coaching</h1>
          <p>Lees de ervaringen van anderen die ADHD coaching hebben gevolgd.</p>
          
          <h2>Positieve ervaringen:</h2>
          <ul>
            <li>Betere zelforganisatie</li>
            <li>Meer zelfvertrouwen</li>
            <li>Praktische strategieën</li>
            <li>Duidelijke doelen</li>
          </ul>
          
          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h3>Start jouw ADHD coaching journey</h3>
            <p>Ontdek hoe ADHD coaching jou kan helpen.</p>
            <Link href="/" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
              Vind coach
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
