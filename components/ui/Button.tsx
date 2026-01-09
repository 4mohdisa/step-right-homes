'use client';

import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  href,
  loading = false,
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-heading font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const variantStyles = {
    primary: `
      bg-primary-yellow text-black
      hover:bg-primary-yellow-dark hover:shadow-yellow
      focus:ring-primary-yellow
      active:scale-[0.98]
    `,
    secondary: `
      bg-neutral-900 text-white
      hover:bg-neutral-800 hover:shadow-elevated
      focus:ring-neutral-900
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent text-neutral-900
      border-2 border-neutral-900
      hover:bg-neutral-900 hover:text-white
      focus:ring-neutral-900
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-neutral-700
      hover:bg-neutral-100 hover:text-neutral-900
      focus:ring-neutral-300
      active:scale-[0.98]
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const buttonContent = (
    <>
      {/* Hover shine effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
      
      {/* Loading spinner */}
      {loading && (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
          </svg>
        </motion.span>
      )}
      
      {/* Button content */}
      <span className={`relative flex items-center gap-2 ${loading ? 'opacity-0' : ''}`}>
        {Icon && iconPosition === 'left' && <Icon size={iconSizes[size]} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={iconSizes[size]} />}
      </span>
    </>
  );

  const combinedClassName = `group ${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={combinedClassName}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={combinedClassName}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
