import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over ADHD Coaching | ADHD Coach in de Buurt',
  description: 'Uitgebreide antwoorden op de meest voorkomende vragen over ADHD coaching, diagnose, kosten en behandeling in Nederland en België.',
  keywords: 'ADHD FAQ, ADHD vragen, ADHD coaching vragen, ADHD diagnose, ADHD behandeling, ADHD kosten, veelgestelde vragen',
  openGraph: {
    title: 'Veelgestelde Vragen over ADHD Coaching | ADHD Coach in de Buurt',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over ADHD coaching, diagnose, kosten en behandeling in Nederland en België.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'ADHD Coach in de Buurt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veelgestelde Vragen over ADHD Coaching',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over ADHD coaching, diagnose, kosten en behandeling.',
  },
  alternates: {
    canonical: 'https://adhdcoachindebuurt.nl/faq',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            name: 'Veelgestelde Vragen over ADHD Coaching',
            description: 'Uitgebreide antwoorden op de meest voorkomende vragen over ADHD coaching, diagnose, kosten en behandeling in Nederland en België.',
            url: 'https://adhdcoachindebuurt.nl/faq',
            publisher: {
              '@type': 'Organization',
              name: 'ADHD Coach in de Buurt',
              url: 'https://adhdcoachindebuurt.nl',
            },
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wat is ADHD precies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ADHD staat voor Attention Deficit Hyperactivity Disorder (Aandachtstekort Hyperactiviteitsstoornis). Het is een neurobiologische aandoening die invloed heeft op de uitvoerende functies van de hersenen.'
                }
              },
              {
                '@type': 'Question',
                name: 'Hoe wordt ADHD gediagnosticeerd?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ADHD diagnose is een uitgebreid proces dat verschillende stappen omvat: intake en anamnese, vragenlijsten, observatie, neuropsychologisch onderzoek, lichamelijk onderzoek en analyse van school- of werkgegevens.'
                }
              },
              {
                '@type': 'Question',
                name: 'Wat kosten ADHD coaching sessies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'De kosten voor ADHD coaching variëren afhankelijk van de coach, locatie en type sessie. Sessies kunnen tussen de €60-€150 per uur kosten. Sommige sessies kunnen vergoed worden door de zorgverzekering.'
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}