'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  index = 0,
  href,
}) => {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      {/* Card */}
      <div className="relative h-full bg-white rounded-2xl p-8 border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden">
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/0 to-primary-yellow/0 group-hover:from-primary-yellow/5 group-hover:to-transparent transition-all duration-500" />
        
        {/* Accent Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-yellow/10 rounded-bl-[100px] -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div className="relative mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-100 group-hover:bg-primary-yellow transition-colors duration-300">
              <Icon 
                size={28} 
                className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300" 
                strokeWidth={1.5}
              />
            </div>
            {/* Floating dot decoration */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3 group-hover:text-neutral-900 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 font-body leading-relaxed mb-6">
            {description}
          </p>

          {/* Link */}
          <div className="flex items-center text-primary-yellow-dark font-heading font-semibold">
            <span className="mr-2">Learn More</span>
            <ArrowRight 
              size={18} 
              className="transform group-hover:translate-x-2 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ServiceCard;
