import React from 'react';
import './FilterDropdown.module.css';
const FilterDropdown = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <select
        className="w-full px-4 py-2 border rounded-lg bg-white" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
      </select>
    </div>
  );
};
export default FilterDropdown; 