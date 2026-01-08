import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { SERVICES, COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Our Services | Step Right Homes',
  description: 'Professional fencing, roofing, electrical, and plumbing services for residential properties in South Australia.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray" spacing="small">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary-yellow">Services</span>
          </h1>
          <p className="text-lg text-gray-700">
            Comprehensive property maintenance solutions for residential homes across South Australia
          </p>
        </div>
      </Section>

      {/* Services Details */}
      {SERVICES.map((service, index) => (
        <Section
          key={service.id}
          background={index % 2 === 0 ? 'white' : 'gray'}
          spacing="default"
        >
          <div id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg text-gray-700 mb-6">{service.description}</p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-3">What We Offer:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-yellow mr-2">✓</span>
                    Professional installation and repairs
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-yellow mr-2">✓</span>
                    Quality materials and workmanship
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-yellow mr-2">✓</span>
                    Competitive pricing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-yellow mr-2">✓</span>
                    Licensed and insured professionals
                  </li>
                </ul>
              </div>
              <Button variant="primary" size="lg">
                <a href={COMPANY_INFO.phoneHref}>Request a Quote</a>
              </Button>
            </div>
            <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-6xl">{service.icon}</span>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section background="yellow" spacing="small">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Multiple Services?
          </h2>
          <p className="text-lg mb-6">
            We offer package deals for multiple services. Contact us for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Get Custom Quote
              </Button>
            </Link>
            <Button variant="primary" size="lg">
              <a href={COMPANY_INFO.phoneHref}>Call Now</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
