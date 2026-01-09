'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '@/lib/constants';
import Container from '@/components/ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container>
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 inline-block">
                <Image
                  src="/logo.svg"
                  alt="Step Right Homes"
                  width={260}
                  height={75}
                  className="h-16 w-auto"
                />
              </div>
            </Link>
            <p className="text-neutral-400 font-body mb-6 leading-relaxed">
              Professional residential property maintenance services in South Australia. 
              Your trusted partner for quality home maintenance.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="font-mono">ABN:</span>
              <span>{COMPANY_INFO.abn}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-yellow mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-neutral-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-yellow mr-0 group-hover:mr-2 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-yellow mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group flex items-center text-neutral-400 hover:text-white transition-colors duration-200 font-body"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-yellow mr-0 group-hover:mr-2 transition-all duration-200" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-yellow mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-primary-yellow group-hover:text-black transition-all duration-200">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-body font-medium text-white">{COMPANY_INFO.phone}</p>
                  <p className="text-sm text-neutral-500">Call us anytime</p>
                </div>
              </a>
              
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-primary-yellow group-hover:text-black transition-all duration-200">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-body font-medium text-white">{COMPANY_INFO.email}</p>
                  <p className="text-sm text-neutral-500">Email us</p>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-neutral-400">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-body text-white">{COMPANY_INFO.address}</p>
                  <p className="text-sm text-neutral-500">South Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-neutral-400">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-body text-white">Mon - Fri: 7am - 6pm</p>
                  <p className="text-sm text-neutral-500">Sat: 8am - 4pm</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative py-8 border-t border-neutral-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-heading font-bold text-white mb-1">
                Ready to get started?
              </h4>
              <p className="text-neutral-400 font-body">
                Contact us for your property maintenance needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3 bg-primary-yellow text-black font-heading font-semibold rounded-xl hover:bg-primary-yellow-light hover:shadow-yellow transition-all duration-300"
            >
              Request Quote
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="relative py-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500 font-body">
            <p>
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
