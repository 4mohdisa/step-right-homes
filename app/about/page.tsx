import React from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'About Us | Step Right Homes',
  description: 'Learn about Step Right Homes, your trusted residential property maintenance specialists in South Australia.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gray" spacing="small">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary-yellow">Us</span>
          </h1>
          <p className="text-lg text-gray-700">
            Your trusted partner for residential property maintenance in South Australia
          </p>
        </div>
      </Section>

      {/* Company Overview */}
      <Section background="white" spacing="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Property Maintenance Since Day One
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Step Right Homes is a trusted name in residential property maintenance across South Australia.
              We specialize in providing comprehensive maintenance solutions for real estate properties,
              ensuring your investment is well-maintained and your tenants are satisfied.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our team of licensed professionals brings years of experience in fencing, roofing,
              electrical work, and plumbing. We understand the unique needs of property managers
              and homeowners, delivering reliable service that exceeds expectations.
            </p>
            <p className="text-lg text-gray-700">
              Based in Cowandilla, we proudly serve the entire South Australian region with
              fast response times and quality workmanship guaranteed.
            </p>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-8xl">🏠</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="black" spacing="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">Reliability</h3>
            <p className="text-gray-300">
              We show up on time, every time. Our clients count on us, and we never let them down.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">Quality</h3>
            <p className="text-gray-300">
              We use only the best materials and employ skilled professionals who take pride in their work.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">Integrity</h3>
            <p className="text-gray-300">
              Honest pricing, transparent communication, and ethical business practices in everything we do.
            </p>
          </div>
        </div>
      </Section>

      {/* Service Area */}
      <Section background="gray" spacing="default">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving South Australia
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Based in Cowandilla, we provide property maintenance services throughout the South Australian region.
            Whether you&apos;re a property manager, real estate agent, or homeowner, we&apos;re here to help.
          </p>
          <div className="bg-white p-8 rounded-lg inline-block">
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <p className="text-gray-700 mb-2">{COMPANY_INFO.address}</p>
            <p className="text-gray-700 mb-2">ABN: {COMPANY_INFO.abn}</p>
            <p className="text-gray-700">
              <a href={COMPANY_INFO.phoneHref} className="text-primary-yellow hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="yellow" spacing="small">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg mb-6">
            Experience the Step Right Homes difference. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Button variant="primary" size="lg">
              <a href={COMPANY_INFO.phoneHref}>Call Us Now</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
