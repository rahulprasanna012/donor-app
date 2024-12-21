import React, { useState } from 'react';
import { Donor } from '../types/donor';
import { US_STATES } from '../constants/states';
import { FormInput } from './form/FormInput';
import { FormSelect } from './form/FormSelect';

interface DonorFormProps {
  onAddDonor: (donor: Omit<Donor, 'id'>) => void;
}

export function DonorForm({ onAddDonor }: DonorFormProps) {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && state && amount) {
      onAddDonor({
        name,
        state,
        amount: parseFloat(amount),
      });
      setName('');
      setState('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <FormInput
        label="Name"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <FormSelect
        label="State"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        options={US_STATES}
      />
      
      <FormInput
        label="Donation Amount ($)"
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        step="0.01"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                 transition-colors"
      >
        Add Donor
      </button>
    </form>
  );
}