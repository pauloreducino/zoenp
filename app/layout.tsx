import type { Metadata, Viewport } from 'next';
import { Inter, Syne } from 'next/font/google';
import { SITE } from '@/lib/constants';
import './globals.css';

// ─── Fonts ────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300','400','500','600','700'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400','500','600','700','800'],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:  'ZOENP Solutions | Technology Solutions in Pompano Beach, FL',
    template: '%s | ZOENP Solutions',
  },
  description:
    'ZOENP Solutions offers technology solutions in Pompano Beach, FL — computer sales, IT support, network infrastructure and more. Backed by 27 years of expertise.',
  keywords: [
    'tech company florida',
    'IT support pompano beach',
    'computer repair florida',
    'technology solutions USA',
    'network infrastructure florida',
    'computer sales pompano beach',
    'IT company broward county',
    'tech support south florida',
  ],
  authors:   [{ name: 'ZOENP Solutions' }],
  creator:   'ZOENP Solutions',
  publisher: 'ZOENP Solutions',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type:      'website',
    locale:    'en_US',
    url:       SITE.url,
    siteName:  SITE.name,
    title:     'ZOENP Solutions | Technology Solutions in Pompano Beach, FL',
    description:
      'ZOENP Solutions offers technology solutions in Pompano Beach, FL — computer sales, IT support, network infrastructure and more.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ZOENP Solutions — Technology Solutions' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'ZOENP Solutions | Technology Solutions',
    description: 'Computer sales, IT support, and network infrastructure in Pompano Beach, FL.',
    images:      ['/og-image.jpg'],
  },
  alternates: { canonical: SITE.url },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor:   '#0D1B2A',
  width:        'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ─── Schema Markup ────────────────────────────────────────────────────────────
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ComputerRepairService'],
      '@id':   `${SITE.url}/#business`,
      name:    SITE.name,
      description:
        'Technology solutions company in Pompano Beach, FL — computer sales, IT support, network infrastructure.',
      url:       SITE.url,
      telephone: SITE.phone,
      email:     SITE.email,
      address: {
        '@type':          'PostalAddress',
        streetAddress:    '2335 E Atlantic BLVD 300-20',
        addressLocality:  'Pompano Beach',
        addressRegion:    'FL',
        postalCode:       '33062',
        addressCountry:   'US',
      },
      geo: {
        '@type':    'GeoCoordinates',
        latitude:    SITE.geo.lat,
        longitude:   SITE.geo.lng,
      },
      sameAs: [SITE.igUrl],
      priceRange: '$$',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
      ],
    },
    {
      '@type':    'WebSite',
      '@id':      `${SITE.url}/#website`,
      url:        SITE.url,
      name:       SITE.name,
      inLanguage: 'en-US',
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased bg-brand-dark text-gray-100">{children}</body>
    </html>
  );
}
