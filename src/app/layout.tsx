import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ADHD Coach in de Buurt | Vind de beste ADHD coaches bij jou in de buurt",
    template: "%s | ADHD Coach in de Buurt"
  },
  description: "De grootste directory voor ADHD coaches in Nederland en België. Vergelijk gecertificeerde coaches, bekijk reviews en vind de perfecte match voor ADHD ondersteuning.",
  keywords: "ADHD coaches, ADHD coaching, ADHD behandeling, ADHD hulp, gedragstherapeut, Nederland, België, ADHD ondersteuning",
  authors: [{ name: "ADHD Coach in de Buurt" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ADHD Coach in de Buurt | Vind de beste ADHD coaches bij jou in de buurt",
    description: "De grootste directory voor ADHD coaches in Nederland en België. Vergelijk gecertificeerde coaches, bekijk reviews en vind de perfecte match voor ADHD ondersteuning.",
    type: "website",
    locale: "nl_NL",
    url: "https://adhdcoachindebuurt.nl",
    siteName: "ADHD Coach in de Buurt",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHD Coach in de Buurt",
    description: "Vind de beste ADHD coaches bij jou in de buurt. Vergelijk gecertificeerde coaches en vind de perfecte match.",
  },
  alternates: {
    canonical: "https://adhdcoachindebuurt.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
