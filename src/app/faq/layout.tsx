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
  return <>{children}</>;
}
