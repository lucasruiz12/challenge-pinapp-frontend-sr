// components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por SKU o nombre"
      className="p-2 border rounded"
      onChange={onSearchChange}
      value={searchTerm}
    />
  );
};

export default SearchBar;
