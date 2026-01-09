'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import Section from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="terms-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#terms-grid)" />
          </svg>
        </div>

        <div className="relative container-padding max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <FileText size={18} className="text-primary-yellow" />
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
            Terms of <span className="text-primary-yellow">Service</span>
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
                1. Acceptance of Terms
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                By accessing and using the services provided by {COMPANY_INFO.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                2. Services
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                {COMPANY_INFO.name} provides residential property maintenance services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>Fencing installation, repairs, and maintenance</li>
                <li>Roofing services including repairs, installations, and inspections</li>
                <li>Electrical works performed by licensed electricians</li>
                <li>Plumbing services including repairs and installations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                3. Quotes and Pricing
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                All quotes provided are estimates based on the information available at the time of quotation. Final pricing may vary based on:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>Site conditions discovered during work</li>
                <li>Additional work requested by the client</li>
                <li>Changes in material costs</li>
                <li>Unforeseen complications</li>
              </ul>
              <p className="text-neutral-600 font-body leading-relaxed mt-4">
                Any changes to the quoted price will be communicated and approved by the client before proceeding.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                4. Payment Terms
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>A deposit may be required for larger projects</li>
                <li>Final payment is due upon completion of work unless otherwise agreed</li>
                <li>We accept bank transfer, credit/debit cards, and cash</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                5. Warranties and Guarantees
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                We stand behind our workmanship and offer warranties on our services. Specific warranty periods vary by service type and will be detailed in your service agreement. Warranties cover defects in workmanship but do not cover damage caused by misuse, accidents, or normal wear and tear.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                6. Cancellations and Rescheduling
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                We understand that circumstances change. Please provide at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may incur a cancellation fee. For emergency services, different terms may apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                7. Client Responsibilities
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 font-body space-y-2">
                <li>Providing accurate information about the work required</li>
                <li>Ensuring safe access to the work area</li>
                <li>Obtaining any necessary permits or approvals</li>
                <li>Informing us of any known hazards or special conditions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                While we carry comprehensive insurance and take all reasonable precautions, our liability is limited to the value of the services provided. We are not liable for indirect, incidental, or consequential damages arising from our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                9. Dispute Resolution
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                In the event of a dispute, we encourage open communication to resolve issues amicably. If a resolution cannot be reached, disputes will be handled in accordance with South Australian law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                11. Contact Information
              </h2>
              <p className="text-neutral-600 font-body leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-6 bg-neutral-50 rounded-xl">
                <p className="font-heading font-bold text-neutral-900">{COMPANY_INFO.name}</p>
                <p className="text-neutral-600 font-body">{COMPANY_INFO.address}</p>
                <p className="text-neutral-600 font-body">Phone: {COMPANY_INFO.phone}</p>
                <p className="text-neutral-600 font-body">Email: {COMPANY_INFO.email}</p>
                <p className="text-neutral-600 font-body">ABN: {COMPANY_INFO.abn}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
