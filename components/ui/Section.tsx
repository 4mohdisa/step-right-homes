'use client';

import React from 'react';
import { motion } from 'motion/react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'default' | 'small' | 'none';
  background?: 'white' | 'gray' | 'black' | 'yellow' | 'dark-gradient' | 'pattern';
  className?: string;
  id?: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  containerSize = 'xl',
  spacing = 'default',
  background = 'white',
  className = '',
  id,
  animate = true,
}) => {
  const spacingStyles = {
    default: 'section-spacing',
    small: 'section-spacing-sm',
    none: '',
  };

  const backgroundStyles = {
    white: 'bg-white text-neutral-900',
    gray: 'bg-neutral-50 text-neutral-900',
    black: 'bg-neutral-950 text-white',
    yellow: 'bg-primary-yellow text-neutral-900',
    'dark-gradient': 'bg-gradient-dark text-white',
    pattern: 'bg-neutral-50 text-neutral-900 bg-hero-pattern',
  };

  const content = (
    <Container size={containerSize}>
      {children}
    </Container>
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className={`relative ${spacingStyles[spacing]} ${backgroundStyles[background]} ${className}`}
      >
        {/* Background decorations for certain backgrounds */}
        {background === 'black' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>
        )}
        
        {background === 'yellow' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30" />
          </div>
        )}

        <div className="relative">{content}</div>
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={`relative ${spacingStyles[spacing]} ${backgroundStyles[background]} ${className}`}
    >
      {content}
    </section>
  );
};

export default Section;
