'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import QuoteGenerator from '@/components/QuoteGenerator';
import { COMPANY_INFO, SERVICES, BUSINESS_HOURS } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: COMPANY_INFO.phone,
      href: COMPANY_INFO.phoneHref,
      subtitle: 'Call us anytime',
    },
    {
      icon: Mail,
      title: 'Email',
      content: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
      subtitle: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: COMPANY_INFO.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`,
      subtitle: 'South Australia',
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
              <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
            <MessageSquare size={18} className="text-primary-yellow" />
            <span className="text-sm font-heading font-semibold text-white">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Contact <span className="text-primary-yellow">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Get in touch with us for a free quote or to discuss your property maintenance needs
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section background="white" spacing="small" className="-mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              target={info.title === 'Address' ? '_blank' : undefined}
              rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-elevated hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-primary-yellow group-hover:scale-110 transition-all duration-300">
                  <info.icon size={24} className="text-primary-yellow-dark group-hover:text-neutral-900 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-neutral-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-primary-yellow-dark font-body font-medium">
                    {info.content}
                  </p>
                  <p className="text-sm text-neutral-500 font-body mt-1">
                    {info.subtitle}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Main Content: Quote Generator + Contact Form */}
      <Section background="gray" spacing="default">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quote Generator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-title text-neutral-900 mb-2">
                Get an Instant Quote
              </h2>
              <p className="text-body text-neutral-600">
                Use our AI-powered calculator for an instant estimate
              </p>
            </div>
            <QuoteGenerator />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6">
              <h2 className="text-title text-neutral-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-body text-neutral-600">
                Or fill out the form and we&apos;ll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-elevated p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-neutral-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600 font-body">
                    Thank you for your inquiry. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <Input
                      type="email"
                      name="email"
                      label="Email Address"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      icon={Mail}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      label="Phone Number"
                      placeholder="0412 345 678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      icon={Phone}
                    />
                  </div>

                  {/* Service Select */}
                  <div className="w-full">
                    <label htmlFor="service" className="block mb-2 text-sm font-body font-medium text-neutral-700">
                      Service Required <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-neutral-200 rounded-xl font-body text-neutral-900 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-yellow/20 focus:border-primary-yellow bg-white"
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
                    maxLength={1000}
                    showCount
                  />

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    icon={Send}
                    iconPosition="right"
                    loading={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Business Hours & Emergency */}
      <Section background="white" spacing="default">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-yellow/10 rounded-xl flex items-center justify-center">
                <Clock size={24} className="text-primary-yellow-dark" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-900">
                Business Hours
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-body text-neutral-600">Monday - Friday</span>
                <span className="font-heading font-semibold text-neutral-900">{BUSINESS_HOURS.weekdays}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-body text-neutral-600">Saturday</span>
                <span className="font-heading font-semibold text-neutral-900">{BUSINESS_HOURS.saturday}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                <span className="font-body text-neutral-600">Sunday</span>
                <span className="font-heading font-semibold text-neutral-500">{BUSINESS_HOURS.sunday}</span>
              </div>
            </div>
          </motion.div>

          {/* Emergency Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary-yellow rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle size={24} className="text-neutral-900" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-900">
                Need Urgent Help?
              </h3>
            </div>

            <p className="text-neutral-800 font-body mb-6">
              For emergency services or urgent property maintenance needs, 
              call us directly for the fastest response. We offer 24/7 
              emergency support for critical issues.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 size={18} />
                <span className="font-body">Burst pipes & water damage</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 size={18} />
                <span className="font-body">Electrical hazards</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-800">
                <CheckCircle2 size={18} />
                <span className="font-body">Storm damage</span>
              </div>
            </div>

            <a
              href={COMPANY_INFO.phoneHref}
              className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-4 bg-neutral-900 text-white font-heading font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-300"
            >
              <Phone size={20} />
              Call Now: {COMPANY_INFO.phone}
            </a>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray" spacing="small">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-title text-neutral-900 mb-2">Find Us</h2>
          <p className="text-body text-neutral-600">{COMPANY_INFO.address}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="aspect-[21/9] rounded-3xl overflow-hidden shadow-elevated"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.0673927371977!2d138.5641!3d-34.9359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c9d2e3f5e8c7%3A0x1234567890abcdef!2s26%20Spencer%20St%2C%20Cowandilla%20SA%205033!5e0!3m2!1sen!2sau!4v1704700000000!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Step Right Homes Location"
            className="w-full h-full"
          />
        </motion.div>
      </Section>
    </>
  );
}
