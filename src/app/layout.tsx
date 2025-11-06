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
    default: "Diëtist in de Buurt | Vind de beste diëtisten bij jou in de buurt",
    template: "%s | Diëtist in de Buurt"
  },
  description: "De grootste directory voor Diëtisten in Nederland en België. Vergelijk gecertificeerde diëtisten, bekijk reviews en vind de perfecte match voor voedingsadvies.",
  keywords: "Diëtisten, Diëtiek, voedingsadvies, voedingsdeskundige, Nederland, België, voedingsbegeleiding",
  authors: [{ name: "Diëtist in de Buurt" }],
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
    title: "Diëtist in de Buurt | Vind de beste diëtisten bij jou in de buurt",
    description: "De grootste directory voor Diëtisten in Nederland en België. Vergelijk gecertificeerde diëtisten, bekijk reviews en vind de perfecte match voor voedingsadvies.",
    type: "website",
    locale: "nl_NL",
    alternateLocale: ["nl_BE"],
    url: "https://dietistindebuurt.nl",
    siteName: "Diëtist in de Buurt",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Diëtist in de Buurt Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Diëtist in de Buurt",
    description: "Vind de beste diëtisten bij jou in de buurt. Vergelijk gecertificeerde diëtisten en vind de perfecte match.",
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
      <head>
        {/* VWO Preconnect for faster loading */}
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* VWO Async SmartCode - Loads before GTM for A/B testing */}
        <Script id="vwoCode" strategy="afterInteractive">
          {`
            window._vwo_code ||
            (function () {
            var w=window,
            d=document;
            var account_id=34044,
            version=2.2,
            settings_tolerance=2000,
            hide_element='body',
            hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important';
            /* DO NOT EDIT BELOW THIS LINE */
            if(f=!1,v=d.querySelector('#vwoCode'),cc={},-1<d.URL.indexOf('__vwo_disable__')||w._vwo_code)return;try{var e=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=e&&'object'==typeof e?e:{}}catch(e){}function r(t){try{return decodeURIComponent(t)}catch(e){return t}}var s=function(){var e={combination:[],combinationChoose:[],split:[],exclude:[],uuid:null,consent:null,optOut:null},t=d.cookie||'';if(!t)return e;for(var n,i,o=/(?:^|;\\s*)(?:(_vis_opt_exp_(\\d+)_combi=([^;]*))|(_vis_opt_exp_(\\d+)_combi_choose=([^;]*))|(_vis_opt_exp_(\\d+)_split=([^:;]*))|(_vis_opt_exp_(\\d+)_exclude=[^;]*)|(_vis_opt_out=([^;]*))|(_vwo_global_opt_out=[^;]*)|(_vwo_uuid=([^;]*))|(_vwo_consent=([^;]*)))/g;null!==(n=o.exec(t));)try{n[1]?e.combination.push({id:n[2],value:r(n[3])}):n[4]?e.combinationChoose.push({id:n[5],value:r(n[6])}):n[7]?e.split.push({id:n[8],value:r(n[9])}):n[10]?e.exclude.push({id:n[11]}):n[12]?e.optOut=r(n[13]):n[14]?e.optOut=!0:n[15]?e.uuid=r(n[16]):n[17]&&(i=r(n[18]),e.consent=i&&3<=i.length?i.substring(0,3):null)}catch(e){}return e}();function i(){var e=function(){if(w.VWO&&Array.isArray(w.VWO))for(var e=0;e<w.VWO.length;e++){var t=w.VWO[e];if(Array.isArray(t)&&('setVisitorId'===t[0]||'setSessionId'===t[0]))return!0}return!1}(),t='a='+account_id+'&u='+encodeURIComponent(w._vis_opt_url||d.URL)+'&vn='+version+'&ph=1'+('undefined'!=typeof platform?'&p='+platform:'')+'&st='+w.performance.now();e||((n=function(){var e,t=[],n={},i=w.VWO&&w.VWO.appliedCampaigns||{};for(e in i){var o=i[e]&&i[e].v;o&&(t.push(e+'-'+o+'-1'),n[e]=!0)}if(s&&s.combination)for(var r=0;r<s.combination.length;r++){var a=s.combination[r];n[a.id]||t.push(a.id+'-'+a.value)}return t.join('|')}())&&(t+='&c='+n),(n=function(){var e=[],t={};if(s&&s.combinationChoose)for(var n=0;n<s.combinationChoose.length;n++){var i=s.combinationChoose[n];e.push(i.id+'-'+i.value),t[i.id]=!0}if(s&&s.split)for(var o=0;o<s.split.length;o++)t[(i=s.split[o]).id]||e.push(i.id+'-'+i.value);return e.join('|')}())&&(t+='&cc='+n),(n=function(){var e=[];if(s&&s.exclude)for(var t=0;t<s.exclude.length;t++)e.push(s.exclude[t].id);return e.join('|')}())&&(t+='&e='+n),s&&s.uuid&&(t+='&uuid='+s.uuid),s&&s.consent&&(t+='&cn='+s.consent),s&&s.optOut&&(t+='&opt='+s.optOut);var n,o=new XMLHttpRequest;o.open('GET','https://dev.visualwebsiteoptimizer.com/j.php?'+t,!0),o.send()}setTimeout(i,settings_tolerance)}());
          `}
        </Script>

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
