'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import Section from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="privacy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#privacy-grid)" />
          </svg>
        </div>

        <div className="relative container-padding max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <Shield size={18} className="text-primary-yellow" />
            <span className="text-sm font-heading font-semibold text-white">
              Legal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Privacy <span className="text-primary-yellow">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Last updated: January 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <Section background="white" spacing="default">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                At {COMPANY_INFO.name}, we collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>Request a quote or consultation</li>
                <li>Contact us via phone, email, or our website</li>
                <li>Use our instant quote calculator</li>
                <li>Subscribe to our communications</li>
              </ul>
              <p className="text-neutral-600 font-body leading-relaxed mt-4">
                This information may include your name, email address, phone number, property address, and details about the services you require.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you quotes, invoices, and service updates</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about services, offers, and promotions</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted third parties who assist us in operating our business, conducting our services, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                8. Contact Us
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-neutral-50 rounded-xl">
                <p className="font-heading font-bold text-neutral-900">{COMPANY_INFO.name}</p>
                <p className="text-neutral-600 font-body">{COMPANY_INFO.address}</p>
                <p className="text-neutral-600 font-body">Phone: {COMPANY_INFO.phone}</p>
                <p className="text-neutral-600 font-body">Email: {COMPANY_INFO.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
