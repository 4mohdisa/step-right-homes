'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  rows?: number;
  className?: string;
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCount?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  fullWidth = true,
  rows = 5,
  className = '',
  label,
  error,
  helperText,
  maxLength,
  showCount = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaId = id || name;

  const hasValue = value && value.length > 0;
  const isFloating = isFocused || hasValue;
  const charCount = value?.length || 0;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      <div className="relative">
        {/* Floating Label */}
        {label && (
          <motion.label
            htmlFor={textareaId}
            initial={false}
            animate={{
              y: isFloating ? -12 : 12,
              scale: isFloating ? 0.85 : 1,
              color: isFocused 
                ? 'rgb(249, 202, 1)' 
                : error 
                  ? 'rgb(239, 68, 68)' 
                  : 'rgb(115, 115, 115)',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`
              absolute left-4 top-0
              font-body text-base pointer-events-none
              origin-left z-10
              ${isFloating ? 'font-medium' : ''}
            `}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        )}

        {/* Textarea Field */}
        <textarea
          id={textareaId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={isFloating ? placeholder : ''}
          required={required}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-4
            ${label ? 'pt-6' : ''}
            bg-white border-2 rounded-xl
            font-body text-neutral-900
            transition-all duration-200
            placeholder:text-neutral-400
            disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-500
            resize-y min-h-[120px]
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
              : 'border-neutral-200 focus:border-primary-yellow focus:ring-primary-yellow/20'
            }
            focus:outline-none focus:ring-4
            ${className}
          `}
        />

        {/* Focus Border Animation */}
        <motion.div
          initial={false}
          animate={{
            scaleX: isFocused ? 1 : 0,
            opacity: isFocused ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className={`
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-[calc(100%-2rem)] h-0.5
            ${error ? 'bg-red-500' : 'bg-primary-yellow'}
            rounded-full origin-center
          `}
        />
      </div>

      {/* Bottom Row: Error/Helper + Character Count */}
      <div className="flex items-start justify-between mt-2 gap-4">
        <div className="flex-1">
          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1.5 text-sm text-red-500 font-body"
              >
                <AlertCircle size={14} />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Helper Text */}
          {helperText && !error && (
            <p className="text-sm text-neutral-500 font-body">{helperText}</p>
          )}
        </div>

        {/* Character Count */}
        {showCount && maxLength && (
          <span className={`
            text-sm font-body whitespace-nowrap
            ${charCount >= maxLength ? 'text-red-500' : 'text-neutral-400'}
          `}>
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default Textarea;
