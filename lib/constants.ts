export const COMPANY_INFO = {
  name: 'Step Right Homes',
  address: '26 Spencer Street, Cowandilla SA 5033',
  abn: '74 692 705 267',
  phone: '0478 733 998',
  phoneFormatted: '0478 733 998',
  phoneHref: 'tel:+61478733998',
  email: 'info@steprighthomes.com.au',
} as const;

export const SERVICES = [
  {
    id: 'fencing',
    title: 'Fencing',
    description: 'Professional fencing installation, repairs, and custom designs for residential properties.',
    icon: '🏗️',
  },
  {
    id: 'roofing',
    title: 'Roofing',
    description: 'Complete roofing solutions including installations, repairs, inspections, and gutter maintenance.',
    icon: '🏠',
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    description: 'Licensed electrical services for installations, repairs, safety inspections, and lighting solutions.',
    icon: '⚡',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Works',
    description: 'Expert plumbing services including installations, repairs, leak detection, and drain cleaning.',
    icon: '🔧',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
] as const;
