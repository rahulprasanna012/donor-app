import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  type: 'text' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  step?: string;
  required?: boolean;
}

export function FormInput({
  label,
  id,
  type,
  value,
  onChange,
  min,
  step,
  required = true
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        step={step}
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}