import { Metadata } from 'next';
import { COMPANY_INFO } from './constants';

const siteUrl = 'https://steprighthomes.com.au';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY_INFO.name} | Professional Property Maintenance in SA`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    'property maintenance',
    'fencing',
    'roofing',
    'electrical',
    'plumbing',
    'South Australia',
    'Adelaide',
    'residential maintenance',
    'home repairs',
    'property services',
    'fence installation',
    'roof repairs',
    'electrician Adelaide',
    'plumber Adelaide',
    'real estate maintenance',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Professional Property Maintenance`,
    description: COMPANY_INFO.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} - Property Maintenance Services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} | Property Maintenance`,
    description: COMPANY_INFO.description,
    images: ['/images/og-image.jpg'],
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
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD Structured Data for Local Business
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#organization`,
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  url: siteUrl,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '26 Spencer Street',
    addressLocality: 'Cowandilla',
    addressRegion: 'SA',
    postalCode: '5033',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.9285, // Approximate coordinates for Cowandilla
    longitude: 138.5618,
  },
  areaServed: {
    '@type': 'State',
    name: 'South Australia',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    // Add social media links here when available
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Property Maintenance Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fencing Services',
          description: 'Professional fencing installation, repairs, and custom designs for residential properties.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roofing Services',
          description: 'Complete roofing solutions including installations, repairs, inspections, and gutter maintenance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical Services',
          description: 'Licensed electrical services for installations, repairs, safety inspections, and lighting solutions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plumbing Services',
          description: 'Expert plumbing services including installations, repairs, leak detection, and drain cleaning.',
        },
      },
    ],
  },
};

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.url}`,
  })),
});

// Service Page Schema Generator
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@id': `${siteUrl}/#organization`,
  },
  name: service.name,
  description: service.description,
  url: `${siteUrl}${service.url}`,
  areaServed: {
    '@type': 'State',
    name: 'South Australia',
  },
});

// FAQ Schema Generator
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
