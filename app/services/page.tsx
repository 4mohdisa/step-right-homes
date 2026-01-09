'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Phone, 
  CheckCircle2, 
  Sparkles,
  ClipboardList,
  Wrench,
  ThumbsUp,
  MessageSquare,
  FileText
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import QuoteGenerator from '@/components/QuoteGenerator';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import { SERVICES, COMPANY_INFO } from '@/lib/constants';

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openQuoteModal = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsQuoteModalOpen(true);
  };

  const processSteps = [
    {
      icon: MessageSquare,
      title: 'Get in Touch',
      description: 'Contact us with your requirements via phone, email, or our online form.',
    },
    {
      icon: ClipboardList,
      title: 'Site Assessment',
      description: 'We\'ll visit your property to assess the work and provide a detailed quote.',
    },
    {
      icon: Wrench,
      title: 'Expert Work',
      description: 'Our licensed professionals complete the work to the highest standards.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Assured',
      description: 'We ensure you\'re completely satisfied with our workmanship.',
    },
  ];

  return (
    <>
      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedService}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl" />

        <div className="relative container-padding max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <Sparkles size={18} className="text-primary-yellow" />
            <span className="text-sm font-heading font-semibold text-white">
              Professional Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Our <span className="text-primary-yellow">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Comprehensive property maintenance solutions for residential homes 
            across South Australia, delivered by licensed professionals.
          </motion.p>
        </div>
      </section>

      {/* Services Details */}
      {SERVICES.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <Section
            key={service.id}
            id={service.id}
            background={isEven ? 'white' : 'gray'}
            spacing="default"
          >
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={isEven ? 'lg:order-1' : 'lg:order-2'}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon size={32} className="text-primary-yellow-dark" />
                </div>

                {/* Title */}
                <h2 className="text-title text-neutral-900 mb-4">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-body-lg text-neutral-600 mb-6">
                  {service.longDescription}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 size={20} className="text-primary-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 font-body">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    icon={FileText}
                    onClick={() => openQuoteModal(service.id)}
                  >
                    Request Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    icon={Phone}
                    href={COMPANY_INFO.phoneHref}
                  >
                    Call Us
                  </Button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={isEven ? 'lg:order-2' : 'lg:order-1'}
              >
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elevated">
                    {service.id === 'fencing' ? (
                      <Image
                        src="/images/fence.png"
                        alt="Professional fencing installation by Step Right Homes"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : service.id === 'roofing' ? (
                      <Image
                        src="/images/roof.png"
                        alt="Professional roofing services by Step Right Homes"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : service.id === 'electrical' ? (
                      <Image
                        src="/images/electrical.png"
                        alt="Professional electrical services by Step Right Homes"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : service.id === 'plumbing' ? (
                      <Image
                        src="/images/plumbing.png"
                        alt="Professional plumbing services by Step Right Homes"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-4 bg-white/50 rounded-2xl flex items-center justify-center">
                            <Icon size={40} className="text-neutral-500" />
                          </div>
                          <p className="text-neutral-500 font-body">{service.title} Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Accent */}
                  <div className={`absolute -bottom-4 ${isEven ? '-right-4' : '-left-4'} w-24 h-24 bg-primary-yellow rounded-2xl -z-10`} />
                </div>
              </motion.div>
            </div>
          </Section>
        );
      })}

      {/* Process Section */}
      <Section background="black" spacing="default">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-white mb-4">
            Our Simple <span className="text-primary-yellow">Process</span>
          </h2>
          <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto">
            We&apos;ve streamlined our process to make getting quality property 
            maintenance as easy as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-neutral-800">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-yellow rounded-full" />
                </div>
              )}

              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary-yellow/10 rounded-2xl mb-4">
                <step.icon size={28} className="text-primary-yellow" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-yellow rounded-full flex items-center justify-center text-xs font-heading font-bold text-neutral-900">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-400 font-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quote Generator Section */}
      <Section background="gray" spacing="default">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-title text-neutral-900 mb-4">
              Need Multiple Services?
            </h2>
            <p className="text-body-lg text-neutral-600 mb-6">
              We offer package deals for multiple services. Use our instant quote 
              calculator for an estimate, or submit a detailed quote request for 
              a custom quote tailored to your needs.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary-yellow" />
                <span className="text-neutral-700 font-body">Bundle discounts available</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary-yellow" />
                <span className="text-neutral-700 font-body">Priority scheduling for regular clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-primary-yellow" />
                <span className="text-neutral-700 font-body">Maintenance contracts available</span>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              icon={FileText}
              onClick={() => openQuoteModal('multiple')}
            >
              Submit Detailed Quote Request
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <QuoteGenerator />
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
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your property maintenance needs. 
            Our team is ready to help with all your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={FileText}
              onClick={() => openQuoteModal('')}
            >
              Request Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              icon={Phone}
              href={COMPANY_INFO.phoneHref}
              className="border-neutral-900"
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
