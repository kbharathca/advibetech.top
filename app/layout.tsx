import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://advibetech.top'),
  title: 'AdVibe Tech - Election Campaign Merchandise | Rajampet, Kadapa',
  description: 'Custom Election Campaign T-Shirts, Double-Sided Keychains (MOQ 500), Mobile Stickers, Placards & Badges by Sura Devi Prasad (+91 7075209795), Rajampet, Kadapa.',
  keywords: [
    'election campaign merchandise Rajampet',
    'sarpanch keychains printing Kadapa',
    'panchayat election t shirts Andhra Pradesh',
    'election mobile stickers printing',
    'AdVibe Tech Rajampet',
    'Sura Devi Prasad',
  ],
  authors: [{ name: 'Sura Devi Prasad' }],
  openGraph: {
    title: 'AdVibe Tech - Election Campaign Merchandise | Call +91 7075209795',
    description: 'Custom Sarpanch & Panchayat Election Keychains (MOQ 500), T-Shirts, Mobile Stickers & Placards with your candidate photo & symbol.',
    url: 'https://advibetech.top',
    siteName: 'AdVibe Tech',
    images: [
      {
        url: '/assets/hero-presenter.jpg',
        width: 1200,
        height: 630,
        alt: 'AdVibe Tech Election Merchandise',
      },
    ],
    locale: 'te_IN',
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
    image: 'https://advibetech.top/assets/hero-presenter.jpg',
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
    description: 'Manufacturer of political and election campaign promotional merchandise including custom keychains, t-shirts, stickers and placards.',
    priceRange: '₹₹',
  };

  return (
    <html lang="te" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Telugu:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans pb-16 sm:pb-0 bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
