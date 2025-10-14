import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over Diëtiek Coaching | Dietist in de Buurt',
  description: 'Uitgebreide antwoorden op de meest voorkomende vragen over voedingsadvies, diagnose, kosten en behandeling in Nederland en België.',
  keywords: 'Diëtiek FAQ, Diëtiek vragen, voedingsadvies vragen, Diëtiek diagnose, Diëtiek behandeling, Diëtiek kosten, veelgestelde vragen',
  openGraph: {
    title: 'Veelgestelde Vragen over Diëtiek Coaching | Dietist in de Buurt',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over voedingsadvies, diagnose, kosten en behandeling in Nederland en België.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Dietist in de Buurt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veelgestelde Vragen over Diëtiek Coaching',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over voedingsadvies, diagnose, kosten en behandeling.',
  },
  alternates: {
    canonical: 'https://dietistindebuurt.nl/faq',
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
            name: 'Veelgestelde Vragen over Diëtiek Coaching',
            description: 'Uitgebreide antwoorden op de meest voorkomende vragen over voedingsadvies, diagnose, kosten en behandeling in Nederland en België.',
            url: 'https://dietistindebuurt.nl/faq',
            publisher: {
              '@type': 'Organization',
              name: 'Dietist in de Buurt',
              url: 'https://dietistindebuurt.nl',
            },
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wat is Diëtiek precies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Diëtiek staat voor Attention Deficit Hyperactivity Disorder (Aandachtstekort Hyperactiviteitsstoornis). Het is een neurobiologische aandoening die invloed heeft op de uitvoerende functies van de hersenen.'
                }
              },
              {
                '@type': 'Question',
                name: 'Hoe wordt Diëtiek gediagnosticeerd?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Diëtiek diagnose is een uitgebreid proces dat verschillende stappen omvat: intake en anamnese, vragenlijsten, observatie, neuropsychologisch onderzoek, lichamelijk onderzoek en analyse van school- of werkgegevens.'
                }
              },
              {
                '@type': 'Question',
                name: 'Wat kosten voedingsadvies sessies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'De kosten voor voedingsadvies variëren afhankelijk van de coach, locatie en type sessie. Sessies kunnen tussen de €60-€150 per uur kosten. Sommige sessies kunnen vergoed worden door de zorgverzekering.'
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