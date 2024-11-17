// SortDropdown.tsx
import React, { useState } from 'react';

interface SortDropdownProps {
  onSortChange: (sortType: 'alphabetical' | 'rating' | 'default') => void;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortSelection = (sortType: 'alphabetical' | 'rating' | 'default') => {
    onSortChange(sortType);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-14 mt-6 right-96 ">
      <button
        className="p-1.5 pl-2 pr-2 bg-custom-light rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        &#8942; {/* Three dots as an icon for dropdown */}
      </button>
      {isOpen && (
        <div className="absolute right-6 bottom-0  w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-index-10 ">
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSortSelection('alphabetical')}
          >
            Sort Alphabetically
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSortSelection('rating')}
          >
            Sort by Rating
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleSortSelection('default')}
          >
            Default Order
          </button>
        </div>
      )}
    </div>
  );
};
