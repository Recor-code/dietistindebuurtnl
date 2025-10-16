import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL('https://dietistindebuurt.nl'),
  title: {
    default: "Dietist in de Buurt | Vind de beste Dietisten bij jou in de buurt",
    template: "%s | Dietist in de Buurt"
  },
  description: "De grootste directory voor Dietisten in Nederland en België. Vergelijk gecertificeerde dietisten, bekijk reviews en vind de perfecte match voor voedingsadvies.",
  keywords: "Dietisten, Diëtiek, voedingsadvies, voedingsdeskundige, Nederland, België, voedingsbegeleiding",
  authors: [{ name: "Dietist in de Buurt" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico"
  },
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
    title: "Dietist in de Buurt | Vind de beste Dietisten bij jou in de buurt",
    description: "De grootste directory voor Dietisten in Nederland en België. Vergelijk gecertificeerde dietisten, bekijk reviews en vind de perfecte match voor voedingsadvies.",
    type: "website",
    locale: "nl_NL",
    url: "https://dietistindebuurt.nl",
    siteName: "Dietist in de Buurt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dietist in de Buurt",
    description: "Vind de beste Dietisten bij jou in de buurt. Vergelijk gecertificeerde dietisten en vind de perfecte match.",
  },
  alternates: {
    canonical: "https://dietistindebuurt.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager - Delayed 3 seconds for performance */}
        <Script id="google-tag-manager-delayed" strategy="afterInteractive">
          {`
            (function() {
              var gtmDidInit = false;
              
              function initGTM() {
                if (gtmDidInit) return;
                gtmDidInit = true;
                
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MWMH3KH7');
              }
              
              // Load GTM after 3 seconds
              setTimeout(initGTM, 3000);
              
              // Also load on first user interaction (whichever comes first)
              var events = ['scroll', 'mousemove', 'touchstart', 'click'];
              var loaded = false;
              
              events.forEach(function(eventName) {
                document.addEventListener(eventName, function handler() {
                  if (!loaded) {
                    loaded = true;
                    initGTM();
                    events.forEach(function(name) {
                      document.removeEventListener(name, handler);
                    });
                  }
                }, { passive: true });
              });
            })();
          `}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWMH3KH7"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
