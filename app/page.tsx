import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray" spacing="default">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Property Maintenance
            <span className="block text-primary-yellow mt-2">You Can Trust</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Specializing in residential property maintenance across South Australia.
            From fencing to roofing, electrical to plumbing - we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get a Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Overview Section */}
      <Section background="white" spacing="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive home maintenance solutions for residential properties
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-yellow transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={`/services#${service.id}`} className="text-primary-yellow font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="black" spacing="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Step Right Homes?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for residential property maintenance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">Licensed & Insured</h3>
            <p className="text-gray-300">
              Fully licensed professionals with comprehensive insurance coverage for your peace of mind
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">Fast Response</h3>
            <p className="text-gray-300">
              Quick turnaround times and emergency services available when you need us most
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">Quality Guaranteed</h3>
            <p className="text-gray-300">
              High-quality workmanship and materials backed by our satisfaction guarantee
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="yellow" spacing="small">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6">
            Contact us today for a free quote on your property maintenance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <a href={COMPANY_INFO.phoneHref}>Call {COMPANY_INFO.phone}</a>
            </Button>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
