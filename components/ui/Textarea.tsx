import React from 'react';

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
}) => {
  const textareaId = id || name;
  const baseStyles = 'px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow resize-vertical';
  const widthStyle = fullWidth ? 'w-full' : '';
  const errorStyle = error ? 'border-red-500' : 'border-gray-300';
  const disabledStyle = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={textareaId} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`${baseStyles} ${widthStyle} ${errorStyle} ${disabledStyle} ${className}`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
