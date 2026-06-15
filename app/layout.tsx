import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG, EVENT_INFO } from '@/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${EVENT_INFO.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `Join us at ${SITE_CONFIG.name} - ${EVENT_INFO.description} Experience keynotes from industry leaders, hands-on workshops, and unparalleled networking opportunities.`,
  keywords: [
    'tech summit',
    'technology conference',
    'developer conference',
    'AI',
    'machine learning',
    'cloud computing',
    'web development',
    'startup',
    'networking',
    'innovation',
    'San Francisco',
    'tech event',
    'workshop',
    'keynote',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${EVENT_INFO.tagline}`,
    description: EVENT_INFO.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${EVENT_INFO.date}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${EVENT_INFO.tagline}`,
    description: EVENT_INFO.description,
    images: ['/og-image.png'],
    creator: '@techsummit',
    site: '@techsummit',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Event',
                  '@id': `${SITE_CONFIG.url}/#event`,
                  name: SITE_CONFIG.name,
                  description: EVENT_INFO.description,
                  startDate: '2026-03-15T09:00:00-08:00',
                  endDate: '2026-03-17T18:00:00-08:00',
                  eventStatus: 'https://schema.org/EventScheduled',
                  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                  location: {
                    '@type': 'Place',
                    name: EVENT_INFO.venue,
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: '747 Howard St',
                      addressLocality: 'San Francisco',
                      addressRegion: 'CA',
                      postalCode: '94103',
                      addressCountry: 'US',
                    },
                  },
                  organizer: {
                    '@type': 'Organization',
                    name: SITE_CONFIG.name,
                    url: SITE_CONFIG.url,
                    email: SITE_CONFIG.email,
                  },
                  offers: [
                    {
                      '@type': 'Offer',
                      name: 'Early Bird',
                      price: 299,
                      priceCurrency: 'USD',
                      availability: 'https://schema.org/LimitedAvailability',
                      validFrom: '2024-06-01',
                      validThrough: '2025-12-31',
                      url: `${SITE_CONFIG.url}/#pricing`,
                    },
                    {
                      '@type': 'Offer',
                      name: 'Standard',
                      price: 499,
                      priceCurrency: 'USD',
                      availability: 'https://schema.org/InStock',
                      url: `${SITE_CONFIG.url}/#pricing`,
                    },
                    {
                      '@type': 'Offer',
                      name: 'VIP',
                      price: 999,
                      priceCurrency: 'USD',
                      availability: 'https://schema.org/LimitedAvailability',
                      url: `${SITE_CONFIG.url}/#pricing`,
                    },
                  ],
                  performer: [],
                  speaker: [],
                  image: `${SITE_CONFIG.url}/og-image.png`,
                },
                {
                  '@type': 'Organization',
                  '@id': `${SITE_CONFIG.url}/#organization`,
                  name: SITE_CONFIG.name,
                  url: SITE_CONFIG.url,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${SITE_CONFIG.url}/logo.png`,
                    width: 512,
                    height: 512,
                  },
                  sameAs: [
                    SITE_CONFIG.social.twitter,
                    SITE_CONFIG.social.linkedin,
                    SITE_CONFIG.social.instagram,
                    SITE_CONFIG.social.facebook,
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: SITE_CONFIG.phone,
                    contactType: 'customer service',
                    email: SITE_CONFIG.email,
                    availableLanguage: ['English'],
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_CONFIG.url}/#website`,
                  url: SITE_CONFIG.url,
                  name: SITE_CONFIG.name,
                  publisher: {
                    '@id': `${SITE_CONFIG.url}/#organization`,
                  },
                  inLanguage: 'en-US',
                },
                {
                  '@type': 'WebPage',
                  '@id': `${SITE_CONFIG.url}/#webpage`,
                  url: SITE_CONFIG.url,
                  name: SITE_CONFIG.name,
                  isPartOf: {
                    '@id': `${SITE_CONFIG.url}/#website`,
                  },
                  about: {
                    '@id': `${SITE_CONFIG.url}/#organization`,
                  },
                  description: EVENT_INFO.description,
                  inLanguage: 'en-US',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
