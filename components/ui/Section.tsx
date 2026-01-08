import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'default' | 'small' | 'none';
  background?: 'white' | 'gray' | 'black' | 'yellow';
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  containerSize = 'xl',
  spacing = 'default',
  background = 'white',
  className = '',
}) => {
  const spacingStyles = {
    default: 'section-spacing',
    small: 'section-spacing-sm',
    none: '',
  };

  const backgroundStyles = {
    white: 'bg-white text-black',
    gray: 'bg-gray-50 text-black',
    black: 'bg-black text-white',
    yellow: 'bg-primary-yellow text-black',
  };

  return (
    <section className={`${spacingStyles[spacing]} ${backgroundStyles[background]} ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
