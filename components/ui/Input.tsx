'use client';

import React from 'react';
import { LucideIcon, AlertCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  label?: string;
  error?: string;
  icon?: LucideIcon;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  fullWidth = true,
  className = '',
  label,
  error,
  icon: Icon,
  helperText,
}) => {
  const inputId = id || name;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 text-sm font-body font-medium text-neutral-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {/* Icon */}
        {Icon && (
          <div className={`
            absolute left-4 top-1/2 -translate-y-1/2
            transition-colors duration-200
            text-neutral-400
            ${error ? 'text-red-500' : ''}
          `}>
            <Icon size={20} />
          </div>
        )}

        {/* Input Field */}
        <input
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            w-full px-4 py-3.5
            ${Icon ? 'pl-12' : ''}
            bg-white border-2 rounded-xl
            font-body text-neutral-900
            transition-all duration-200
            placeholder:text-neutral-400
            disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-500
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
              : 'border-neutral-200 focus:border-primary-yellow focus:ring-primary-yellow/20'
            }
            focus:outline-none focus:ring-4
            ${className}
          `}
        />
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 mt-2 text-sm text-red-500 font-body"
          >
            <AlertCircle size={14} />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helper Text */}
      {helperText && !error && (
        <p className="mt-2 text-sm text-neutral-500 font-body">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
