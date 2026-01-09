'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Property Manager',
    content: 'Step Right Homes has been our go-to maintenance provider for over 3 years. Their response time is incredible, and the quality of work is consistently excellent. Highly recommend for any property management needs.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Thompson',
    role: 'Homeowner',
    content: 'Had a roofing emergency during a storm and they were at my place within hours. Professional, efficient, and fair pricing. They\'ve earned a customer for life.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Real Estate Agent',
    content: 'I refer all my clients to Step Right Homes for property maintenance. They make my job easier with their reliable service and excellent communication. True professionals.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Roberts',
    role: 'Landlord',
    content: 'Managing multiple properties is stressful, but Step Right Homes takes care of all maintenance issues promptly. Their online quote system is a game-changer.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = 'What Our Clients Say',
  subtitle = 'Trusted by property managers and homeowners across South Australia',
  testimonials = defaultTestimonials,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

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
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-neutral-600 font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* Testimonial Card */}
      <div className="relative max-w-4xl mx-auto">
        {/* Quote Icon Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
          <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center shadow-yellow">
            <Quote size={28} className="text-neutral-900" />
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-elevated p-8 md:p-12 pt-16 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < currentTestimonial.rating ? 'fill-primary-yellow text-primary-yellow' : 'text-neutral-300'}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-neutral-700 font-body leading-relaxed mb-8 italic">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-yellow to-primary-yellow-dark flex items-center justify-center text-neutral-900 font-heading font-bold text-lg">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-neutral-900">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500 font-body">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white shadow-card hover:shadow-card-hover flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-yellow w-8' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white shadow-card hover:shadow-card-hover flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
