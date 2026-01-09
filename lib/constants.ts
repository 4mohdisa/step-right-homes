import { Fence, Home, Zap, Wrench, LucideIcon } from 'lucide-react';

export const COMPANY_INFO = {
  name: 'Step Right Homes',
  address: '26 Spencer Street, Cowandilla SA 5033',
  abn: '74 692 705 267',
  phone: '0478 733 998',
  phoneFormatted: '0478 733 998',
  phoneHref: 'tel:+61478733998',
  email: 'info@steprighthomes.com.au',
  tagline: 'Professional Property Maintenance You Can Trust',
  description: 'Step Right Homes provides professional residential property maintenance services including fencing, roofing, electrical, and plumbing works in South Australia.',
} as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'fencing',
    title: 'Fencing',
    description: 'Professional fencing installation, repairs, and custom designs for residential properties.',
    longDescription: 'From Colorbond to timber, we provide complete fencing solutions tailored to your property. Our expert team handles everything from new installations to repairs and maintenance, ensuring your property is secure and looking great.',
    icon: Fence,
    features: [
      'Colorbond & timber fencing',
      'Gate installation & repairs',
      'Pool fencing (compliant)',
      'Boundary fencing',
      'Custom designs',
      'Fence repairs & maintenance',
    ],
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'Complete roofing solutions including installations, repairs, inspections, and gutter maintenance.',
    longDescription: 'Protect your home with our comprehensive roofing services. We handle everything from minor repairs to complete roof replacements, including gutter cleaning and maintenance to keep your property in top condition.',
    icon: Home,
    features: [
      'Roof repairs & restoration',
      'Tile & metal roofing',
      'Gutter cleaning & repairs',
      'Roof inspections',
      'Leak detection & repair',
      'Downpipe installation',
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    description: 'Licensed electrical services for installations, repairs, safety inspections, and lighting solutions.',
    longDescription: 'Our licensed electricians provide safe, reliable electrical services for your home. From simple repairs to complete rewiring, we ensure all work meets Australian standards and keeps your family safe.',
    icon: Zap,
    features: [
      'Power point installation',
      'Lighting solutions',
      'Safety inspections',
      'Switchboard upgrades',
      'Smoke alarm installation',
      'Fault finding & repairs',
    ],
  },
  {
    id: 'plumbing',
    title: 'Plumbing Works',
    description: 'Expert plumbing services including installations, repairs, leak detection, and drain cleaning.',
    longDescription: 'Keep your water flowing smoothly with our professional plumbing services. We handle everything from dripping taps to blocked drains, hot water systems, and bathroom renovations.',
    icon: Wrench,
    features: [
      'Leak detection & repair',
      'Blocked drain clearing',
      'Hot water systems',
      'Tap & toilet repairs',
      'Pipe replacements',
      'Bathroom plumbing',
    ],
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
] as const;

export const BUSINESS_HOURS = {
  weekdays: '7:00 AM - 6:00 PM',
  saturday: '8:00 AM - 4:00 PM',
  sunday: 'Closed',
  emergency: '24/7 Emergency Service Available',
} as const;

export const PRICING_POLICY = {
  minimumCallout: 250,
  minimumCalloutDescription: 'Minimum callout fee of $250 which includes the first hour of work and quote preparation if the issue is not resolved within the first hour.',
  quoteValidity: '30 days',
  paymentTerms: 'Payment due upon completion unless otherwise agreed',
} as const;

export const SERVICE_AREAS = [
  'Adelaide CBD',
  'Adelaide Hills',
  'Northern Suburbs',
  'Southern Suburbs',
  'Eastern Suburbs',
  'Western Suburbs',
  'Glenelg',
  'Port Adelaide',
] as const;
