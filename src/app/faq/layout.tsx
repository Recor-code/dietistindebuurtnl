import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over Dietisten | Dietist in de Buurt',
  description: 'Uitgebreide antwoorden op de meest voorkomende vragen over dietisten, voedingsadvies, kosten, vergoeding en het vinden van een dietist bij jou in de buurt.',
  keywords: 'dietist FAQ, dietist vragen, voedingsadvies vragen, dietist kosten, vergoeding dietist, veelgestelde vragen dietist, dietist kiezen',
  openGraph: {
    title: 'Veelgestelde Vragen over Dietisten | Dietist in de Buurt',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over dietisten, voedingsadvies, kosten en vergoeding in Nederland en België.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Dietist in de Buurt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veelgestelde Vragen over Dietisten',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over dietisten, voedingsadvies en vergoeding.',
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
            name: 'Veelgestelde Vragen over Dietisten',
            description: 'Uitgebreide antwoorden op de meest voorkomende vragen over dietisten, voedingsadvies, kosten en vergoeding in Nederland en België.',
            url: 'https://dietistindebuurt.nl/faq',
            publisher: {
              '@type': 'Organization',
              name: 'Dietist in de Buurt',
              url: 'https://dietistindebuurt.nl',
            },
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Wat is een dietist en wat doet een dietist?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Een dietist is een erkend zorgprofessional die gespecialiseerd is in voeding en gezondheid. Dietisten hebben een HBO-opleiding Voeding en Diëtetiek afgerond en zijn geregistreerd bij de beroepsvereniging. Ze geven voedingsadvies op maat, medische voedingstherapie, begeleiding bij gewichtsmanagement, en helpen bij allergieën, intoleranties en sportvoeding.'
                }
              },
              {
                '@type': 'Question',
                name: 'Wat kosten dietist consulten en wordt het vergoed?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Gemiddelde tarieven voor een eerste consult zijn €70-€95 (60 min) en vervolgconsulten €45-€70 (30-45 min). Medische voedingstherapie bij diagnoses zoals diabetes en hart- en vaatziekten wordt vaak vergoed vanuit de basisverzekering (3-7 consulten per jaar). Aanvullende verzekeringen bieden vaak extra vergoeding van €100-€400 per jaar.'
                }
              },
              {
                '@type': 'Question',
                name: 'Heb ik een verwijzing nodig van mijn huisarts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sinds 2022 is de verwijsplicht voor vrijwel alle zorgverzekeraars afgeschaft. Je kunt direct naar een dietist zonder huisarts. Een verwijzing kan wel nuttig zijn om medische noodzaak aan te tonen voor vergoeding uit het basispakket.'
                }
              },
              {
                '@type': 'Question',
                name: 'Kan een dietist mij helpen met afvallen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ja! Gewichtsmanagement is kernexpertise van dietisten. Ze bieden wetenschappelijk onderbouwde, persoonlijke plannen gericht op duurzame gedragsverandering. Gezond afvallen is 0,5-1 kg per week. Afvallen bij overgewicht (BMI > 30) of met gezondheidsproblemen wordt vaak (gedeeltelijk) vergoed door de zorgverzekering.'
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
