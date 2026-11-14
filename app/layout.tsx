import type { Metadata, Viewport } from 'next';
import './globals.css';
import { CookieConsent } from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://advibetech.top'),
  title: 'AdVibe Tech - Campaign Merchandise & Digital Marketing | Rajampet, Kadapa',
  description: 'Custom Election Campaign T-Shirts, Double-Sided Keychains (MOQ 500), Mobile Stickers, Placards & Digital Marketing by Sura Devi Prasad (+91 7075209795), Rajampet, Kadapa.',
  keywords: [
    'election campaign merchandise Rajampet',
    'sarpanch keychains printing Kadapa',
    'panchayat election t shirts Andhra Pradesh',
    'election mobile stickers printing',
    'political digital marketing agency Andhra Pradesh',
    'Meta ads election campaign Kadapa',
    'AdVibe Tech Rajampet',
    'Sura Devi Prasad',
  ],
  authors: [{ name: 'Sura Devi Prasad' }],
  openGraph: {
    title: 'AdVibe Tech - Election Merchandise & Digital Marketing | Call +91 7075209795',
    description: 'Custom Election Keychains (MOQ 500), T-Shirts, Stickers & Targeted Digital Marketing Ads by Sura Devi Prasad, Rajampet.',
    url: 'https://advibetech.top',
    siteName: 'AdVibe Tech',
    images: [
      {
        url: '/assets/digital-marketing-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'AdVibe Tech Election Merchandise and Digital Marketing',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AdVibe Tech',
    image: 'https://advibetech.top/assets/digital-marketing-banner.jpg',
    telephone: '+917075209795',
    email: 'support@advibetech.com',
    url: 'https://advibetech.top',
    founder: {
      '@type': 'Person',
      name: 'SURA DEVI PRASAD',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6/279 B, Balaji Nagar',
      addressLocality: 'Rajampet',
      addressRegion: 'Andhra Pradesh',
      postalCode: '516115',
      addressCountry: 'IN',
    },
    description: 'Manufacturer of political campaign merchandise (keychains, t-shirts, stickers) and provider of hyper-local digital marketing, Meta ads and video campaign management.',
    priceRange: '₹₹',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans pb-16 md:pb-0 bg-slate-950 text-slate-100 min-h-screen">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
