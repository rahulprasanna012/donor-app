import React, { useState, useMemo } from 'react';
import { Heart } from 'lucide-react';
import { DonorForm } from './components/DonorForm';
import { DonorTable } from './components/DonorTable';
import { StateFilter } from './components/StateFilter';
import { DonationSummary } from './components/DonationSummary';
import { Donor } from './types/donor';
import { formatCurrency } from './utils/formatters';

export default function App() {
  const [donors, setDonors] = useState<Donor[]>([
    { id: '1', name: 'John Doe', state: 'CA', amount: 1000 },
    { id: '2', name: 'Jane Smith', state: 'NY', amount: 2500 },
  ]);
  const [selectedState, setSelectedState] = useState('');

  const filteredDonors = useMemo(() => {
    return selectedState
      ? donors.filter(donor => donor.state === selectedState)
      : donors;
  }, [donors, selectedState]);

  const handleAddDonor = (newDonor: Omit<Donor, 'id'>) => {
    const donor: Donor = {
      ...newDonor,
      id: crypto.randomUUID(),
    };
    setDonors([...donors, donor]);
  };

  const totalDonations = useMemo(() => 
    filteredDonors.reduce((sum, donor) => sum + donor.amount, 0),
    [filteredDonors]
  );

  const averageDonation = useMemo(() => 
    filteredDonors.length ? totalDonations / filteredDonors.length : 0,
    [filteredDonors, totalDonations]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-red-500 mr-2" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">Donor Management</h1>
          </div>
          <p className="text-gray-600">Track and manage your generous donors</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold">Donor List</h2>
                <StateFilter 
                  selectedState={selectedState}
                  onChange={setSelectedState}
                />
              </div>
              <div className="text-green-600 font-semibold">
                Total: {formatCurrency(totalDonations)}
              </div>
            </div>
            <DonorTable donors={filteredDonors} />
            <DonationSummary
              totalAmount={totalDonations}
              donorCount={filteredDonors.length}
              averageAmount={averageDonation}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Add New Donor</h2>
            <DonorForm onAddDonor={handleAddDonor} />
          </div>
        </div>
      </div>
    </div>
  );
}