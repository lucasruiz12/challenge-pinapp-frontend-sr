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
      className="px-4 py-2 border rounded-2xl w-[100%] md:w-[35%]"
      onChange={onSearchChange}
      value={searchTerm}
    />
  );
};

export default SearchBar;
