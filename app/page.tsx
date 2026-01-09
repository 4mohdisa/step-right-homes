'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Phone, 
  Shield, 
  Clock, 
  Award, 
  CheckCircle2,
  Sparkles,
  MapPin
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import QuoteGenerator from '@/components/QuoteGenerator';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section with Quote Generator */}
      <section className="relative min-h-screen flex items-center bg-neutral-50 overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-yellow/10 rounded-full blur-3xl" />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary-yellow rounded-2xl rotate-12 opacity-20"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-primary-yellow rounded-full opacity-30"
        />

        <div className="relative container-padding max-w-7xl mx-auto py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-6"
              >
                <MapPin size={16} className="text-primary-yellow" />
                <span className="text-sm font-body font-medium text-neutral-600">
                  Serving South Australia
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-display text-neutral-900 mb-6"
              >
                Professional Property Maintenance
                <span className="block text-primary-yellow">You Can Trust</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-lg text-neutral-600 mb-8 max-w-xl"
              >
                From fencing to roofing, electrical to plumbing — we deliver quality 
                residential maintenance services across South Australia with guaranteed satisfaction.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button variant="primary" size="lg" icon={Phone} href={COMPANY_INFO.phoneHref}>
                  {COMPANY_INFO.phone}
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-2 text-neutral-600">
                  <Shield size={20} className="text-primary-yellow" />
                  <span className="text-sm font-body">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Clock size={20} className="text-primary-yellow" />
                  <span className="text-sm font-body">Fast Response</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Award size={20} className="text-primary-yellow" />
                  <span className="text-sm font-body">Quality Guaranteed</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Quote Generator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <QuoteGenerator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section background="gray" spacing="default" id="services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-4">
            <Sparkles size={18} className="text-primary-yellow-dark" />
            <span className="text-sm font-heading font-semibold text-primary-yellow-dark">
              What We Offer
            </span>
          </div>
          <h2 className="text-headline text-neutral-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive home maintenance solutions for residential properties, 
            delivered by licensed professionals you can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              href={`/services#${service.id}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="black" spacing="default">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-headline text-white mb-6">
              Why Choose{' '}
              <span className="text-primary-yellow">Step Right Homes?</span>
            </h2>
            <p className="text-body-lg text-neutral-400 mb-8">
              We&apos;re not just another maintenance company. We&apos;re your trusted 
              partner for all property maintenance needs, delivering excellence 
              with every project.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: 'Licensed & Fully Insured',
                  description: 'All our tradespeople are licensed and we carry comprehensive insurance for your peace of mind.',
                },
                {
                  icon: Clock,
                  title: 'Fast Response Times',
                  description: 'We understand urgency. Our team responds quickly to all inquiries and emergency calls.',
                },
                {
                  icon: Award,
                  title: 'Quality Guaranteed',
                  description: 'We stand behind our work with a satisfaction guarantee on all services provided.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-yellow/10 rounded-xl flex items-center justify-center">
                    <item.icon size={24} className="text-primary-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated">
              <Image
                src="/images/home.png"
                alt="Step Right Homes professional team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Accent Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-yellow rounded-2xl -z-10" />
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="white" spacing="default">
        <TestimonialsSection />
      </Section>

      {/* FAQ Section */}
      <Section background="gray" spacing="default">
        <FAQSection />
      </Section>

      {/* Final CTA Section */}
      <Section background="yellow" spacing="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-headline text-neutral-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-neutral-700 mb-8">
            Contact us today to discuss your property maintenance needs. 
            We&apos;re here to help keep your property in perfect condition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={Phone}
              href={COMPANY_INFO.phoneHref}
            >
              Call {COMPANY_INFO.phone}
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right" className="border-neutral-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
