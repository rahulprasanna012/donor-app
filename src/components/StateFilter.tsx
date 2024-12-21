import React from 'react';
import { FormSelect } from './form/FormSelect';
import { US_STATES } from '../constants/states';

interface StateFilterProps {
  selectedState: string;
  onChange: (state: string) => void;
}

export function StateFilter({ selectedState, onChange }: StateFilterProps) {
  return (
    <div className="w-48">
      <FormSelect
        label="Filter by State"
        id="stateFilter"
        value={selectedState}
        onChange={(e) => onChange(e.target.value)}
        options={[{ code: '', name: 'All States' }, ...US_STATES]}
        required={false}
      />
    </div>
  );
}