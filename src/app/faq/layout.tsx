import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen over Diëtisten | Diëtist in de Buurt',
  description: 'Uitgebreide antwoorden op de meest voorkomende vragen over diëtisten, voedingsadvies, kosten, vergoeding en het vinden van een diëtist bij jou in de buurt.',
  keywords: 'dietist FAQ, dietist vragen, voedingsadvies vragen, dietist kosten, vergoeding diëtist, veelgestelde vragen diëtist, dietist kiezen',
  openGraph: {
    title: 'Veelgestelde Vragen over Diëtisten | Diëtist in de Buurt',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over diëtisten, voedingsadvies, kosten en vergoeding in Nederland en België.',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Diëtist in de Buurt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veelgestelde Vragen over Diëtisten',
    description: 'Uitgebreide antwoorden op de meest voorkomende vragen over diëtisten, voedingsadvies en vergoeding.',
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
