'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic will be added later
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="gray" spacing="small">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-primary-yellow">Us</span>
          </h1>
          <p className="text-lg text-gray-700">
            Get in touch with us for a free quote or to discuss your property maintenance needs
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section background="white" spacing="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                label="Full Name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                label="Email Address"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                label="Phone Number"
                placeholder="0412 345 678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div className="w-full">
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">
                  Service Required <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow bg-white"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="multiple">Multiple Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Textarea
                name="message"
                label="Message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
              <Button type="submit" variant="primary" size="lg" fullWidth>
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re here to help with all your property maintenance needs.
              Reach out to us using any of the methods below.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Phone</h3>
                  <p className="text-gray-700">
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="text-primary-yellow hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Monday - Friday: 7am - 6pm</p>
                  <p className="text-sm text-gray-600">Saturday: 8am - 4pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-700">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-primary-yellow hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Address</h3>
                  <p className="text-gray-700">{COMPANY_INFO.address}</p>
                  <p className="text-sm text-gray-600 mt-1">ABN: {COMPANY_INFO.abn}</p>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="mt-8 bg-primary-yellow p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Need Urgent Help?</h3>
              <p className="text-gray-900 mb-4">
                For emergency services or urgent property maintenance needs,
                call us directly for the fastest response.
              </p>
              <Button variant="secondary" size="lg" fullWidth>
                <a href={COMPANY_INFO.phoneHref}>Call Now: {COMPANY_INFO.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section background="gray" spacing="small">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Find Us</h2>
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-700 font-medium">Map Placeholder</p>
              <p className="text-sm text-gray-600 mt-2">{COMPANY_INFO.address}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
