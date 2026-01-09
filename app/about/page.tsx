'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Phone, 
  Target, 
  Gem, 
  Handshake,
  Shield,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Building2,
  FileCheck,
  ClipboardCheck,
  Search
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { COMPANY_INFO, SERVICE_AREAS } from '@/lib/constants';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'We show up on time, every time. Our clients count on us, and we never let them down.',
    },
    {
      icon: Gem,
      title: 'Quality',
      description: 'We use only the best materials and employ skilled professionals who take pride in their work.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Honest pricing, transparent communication, and ethical business practices in everything we do.',
    },
  ];

  const certifications = [
    { title: 'Licensed Builder', icon: Building2 },
    { title: 'Fully Insured', icon: Shield },
    { title: 'Quality Assured', icon: Award },
    { title: '24/7 Support', icon: Clock },
  ];

  const workProcess = [
    {
      icon: Search,
      title: 'Thorough Inspections',
      description: 'Every job begins with a comprehensive inspection to identify all issues and requirements.',
    },
    {
      icon: ClipboardCheck,
      title: 'Detailed Reporting',
      description: 'We provide detailed reports with photos and documentation for every project we undertake.',
    },
    {
      icon: FileCheck,
      title: 'Proper Documentation',
      description: 'Complete paperwork, compliance certificates, and warranty documentation provided.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <Users size={18} className="text-primary-yellow" />
            <span className="text-sm font-heading font-semibold text-white">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            About <span className="text-primary-yellow">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Your trusted partner for residential property maintenance in South Australia
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <Section background="white" spacing="default">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-title text-neutral-900 mb-6">
              Professional Property Maintenance{' '}
              <span className="text-primary-yellow">Done Right</span>
            </h2>
            <div className="space-y-4 text-body-lg text-neutral-600">
              <p>
                Step Right Homes is a trusted name in residential property maintenance 
                across South Australia. We specialize in providing comprehensive 
                maintenance solutions for real estate properties, ensuring your 
                investment is well-maintained and your tenants are satisfied.
              </p>
              <p>
                Our team of licensed professionals brings years of experience in 
                fencing, roofing, electrical work, and plumbing. We understand the 
                unique needs of property managers and homeowners, delivering reliable 
                service that exceeds expectations.
              </p>
              <p>
                Based in Cowandilla, we proudly serve the entire South Australian 
                region with fast response times and quality workmanship guaranteed.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
              <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/50 rounded-2xl flex items-center justify-center">
                    <span className="text-5xl">🏠</span>
                  </div>
                  <p className="text-neutral-500 font-body">About Us Image</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-yellow rounded-2xl -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* How We Work - Proper Jobs Section */}
      <Section background="gray" spacing="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-4">
            <ClipboardCheck size={18} className="text-primary-yellow-dark" />
            <span className="text-sm font-heading font-semibold text-primary-yellow-dark">
              Our Approach
            </span>
          </div>
          <h2 className="text-title text-neutral-900 mb-4">
            Proper Jobs with Proper Documentation
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            We believe in doing things right the first time, with full transparency and documentation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {workProcess.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 bg-primary-yellow/10 rounded-2xl flex items-center justify-center">
                <item.icon size={32} className="text-primary-yellow-dark" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-600 font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-card"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                What You Get With Every Job
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-body">Pre-work inspection and assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-body">Detailed quote with no hidden costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-body">Photo documentation before and after</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-body">Completion report for your records</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-body">Compliance certificates where required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-body">Warranty documentation on all work</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-yellow/10 rounded-2xl p-6">
              <p className="text-lg font-heading font-semibold text-neutral-900 mb-2">
                Perfect for Property Managers
              </p>
              <p className="text-neutral-600 font-body">
                Our detailed reporting and documentation makes it easy to keep landlords 
                informed and maintain accurate property records. We understand the 
                importance of proper documentation in property management.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Our Values */}
      <Section background="black" spacing="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-white mb-4">
            Our Core <span className="text-primary-yellow">Values</span>
          </h2>
          <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary-yellow/10 rounded-2xl flex items-center justify-center">
                <value.icon size={36} className="text-primary-yellow" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-400 font-body">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="white" spacing="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-title text-neutral-900 mb-4">
            Certifications & Guarantees
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Your peace of mind is our priority
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-yellow/10 rounded-xl flex items-center justify-center">
                <cert.icon size={28} className="text-primary-yellow-dark" />
              </div>
              <h3 className="font-heading font-bold text-neutral-900">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section background="gray" spacing="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-4">
              <MapPin size={18} className="text-primary-yellow-dark" />
              <span className="text-sm font-heading font-semibold text-primary-yellow-dark">
                Coverage Area
              </span>
            </div>
            <h2 className="text-title text-neutral-900 mb-4">
              Serving South Australia
            </h2>
            <p className="text-body-lg text-neutral-600 mb-6">
              Based in Cowandilla, we provide property maintenance services 
              throughout the South Australian region. Whether you&apos;re a property 
              manager, real estate agent, or homeowner, we&apos;re here to help.
            </p>

            {/* Service Areas Grid */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-primary-yellow flex-shrink-0" />
                  <span className="text-neutral-700 font-body">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Location Card */}
            <div className="bg-white rounded-3xl shadow-elevated p-8">
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-6">
                Our Location
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-yellow-dark" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-neutral-900">Address</p>
                    <p className="text-neutral-600 font-body">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-yellow-dark" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-neutral-900">Phone</p>
                    <a href={COMPANY_INFO.phoneHref} className="text-primary-yellow-dark hover:underline font-body">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500 font-body">
                    ABN: {COMPANY_INFO.abn}
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/50 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🗺️</span>
                  </div>
                  <p className="text-neutral-500 font-body text-sm">Map Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="yellow" spacing="small">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-title text-neutral-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-body-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Experience the Step Right Homes difference. Contact us today for a 
            free consultation and see why we&apos;re trusted by property managers 
            and homeowners across South Australia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
                Get in Touch
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              icon={Phone}
              href={COMPANY_INFO.phoneHref}
              className="border-neutral-900"
            >
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
