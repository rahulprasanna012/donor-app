import React from 'react';
import { Donor } from '../../types/donor';
import { getStateName } from '../../utils/stateUtils';

interface TableRowProps {
  donor: Donor;
}

export function TableRow({ donor }: TableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {donor.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {getStateName(donor.state)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ${donor.amount.toLocaleString()}
      </td>
    </tr>
  );
}