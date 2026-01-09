'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  className?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What areas do you service?',
    answer: 'We provide property maintenance services throughout South Australia, with our base in Cowandilla. We can service Adelaide metropolitan areas and surrounding regions. Contact us to confirm coverage for your specific location.',
  },
  {
    question: 'What is your callout fee?',
    answer: 'We charge a minimum callout fee of $250 which includes the first hour of work and quote preparation. If the issue can be resolved within the first hour, this is the total cost. If additional work is required, we will provide a detailed quote for the remaining work.',
  },
  {
    question: 'How quickly can you respond to emergency repairs?',
    answer: 'For emergency repairs, we aim to respond within 2-4 hours during business hours. We also offer after-hours emergency services for urgent issues like burst pipes or electrical hazards. Call our emergency line for immediate assistance.',
  },
  {
    question: 'Are your tradespeople licensed and insured?',
    answer: 'Absolutely. All our tradespeople are fully licensed and hold the appropriate certifications for their respective trades. We also carry comprehensive public liability insurance and workers compensation coverage for your peace of mind.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfer, credit/debit cards, and cash. For larger projects, we can arrange payment plans. Payment terms are discussed and agreed upon before work commences.',
  },
  {
    question: 'Do you offer ongoing maintenance contracts?',
    answer: 'Yes, we offer flexible maintenance contracts for property managers and homeowners who require regular upkeep. These contracts can be customized to your specific needs and often include priority scheduling and discounted rates.',
  },
  {
    question: 'Do you provide reports and documentation?',
    answer: 'Yes, we provide comprehensive documentation for every job including pre-work inspections, photo documentation, completion reports, and compliance certificates where required. This is especially useful for property managers who need to keep landlords informed.',
  },
];

const FAQItem: React.FC<{ 
  faq: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
  index: number;
}> = ({ faq, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-neutral-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-heading font-semibold text-neutral-900 pr-8 group-hover:text-primary-yellow-dark transition-colors duration-200">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-primary-yellow text-neutral-900' : 'bg-neutral-100 text-neutral-600'
          }`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 font-body leading-relaxed pr-16">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services',
  faqs = defaultFAQs,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-yellow/10 rounded-full mb-4">
          <HelpCircle size={18} className="text-primary-yellow-dark" />
          <span className="text-sm font-heading font-semibold text-primary-yellow-dark">
            Got Questions?
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-neutral-600 font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft p-2 md:p-4">
        <div className="divide-y divide-neutral-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
