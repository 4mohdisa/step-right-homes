import React from 'react';

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
}) => {
  const inputId = id || name;
  const baseStyles = 'px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow';
  const widthStyle = fullWidth ? 'w-full' : '';
  const errorStyle = error ? 'border-red-500' : 'border-gray-300';
  const disabledStyle = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`${baseStyles} ${widthStyle} ${errorStyle} ${disabledStyle} ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
