import React from 'react';
import { DollarSign, Users } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

interface DonationSummaryProps {
  totalAmount: number;
  donorCount: number;
  averageAmount: number;
}

export function DonationSummary({ totalAmount, donorCount, averageAmount }: DonationSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Summary</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-green-100 rounded-full">
            <DollarSign className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Donations</p>
            <p className="text-xl font-semibold text-green-600">{formatCurrency(totalAmount)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users className="text-blue-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Donors</p>
            <p className="text-xl font-semibold text-blue-600">{donorCount}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-100 rounded-full">
            <DollarSign className="text-purple-600" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Average Donation</p>
            <p className="text-xl font-semibold text-purple-600">{formatCurrency(averageAmount)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}