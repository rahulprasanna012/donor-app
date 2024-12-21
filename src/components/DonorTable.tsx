import React from 'react';
import { Donor } from '../types/donor';
import { TableHeader } from './table/TableHeader';
import { TableRow } from './table/TableRow';

interface DonorTableProps {
  donors: Donor[];
}

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'state', label: 'State' },
  { key: 'amount', label: 'Donation Amount' },
];

export function DonorTable({ donors }: DonorTableProps) {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <TableHeader columns={columns} />
        <tbody className="divide-y divide-gray-200 bg-white">
          {donors.map((donor) => (
            <TableRow key={donor.id} donor={donor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}