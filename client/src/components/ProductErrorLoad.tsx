import React from 'react';

interface ProductErrorLoadProps {
  message: string;
  icon?: React.ReactNode;
};

const ProductErrorLoad: React.FC<ProductErrorLoadProps> = ({ message, icon }) => {
  return (
    <div className="container mx-auto p-4 h-[80%] flex items-center justify-center">
      <div className="p-6 border rounded-lg shadow-lg bg-gradient-to-r from-[#e10000] to-[#001568] text-white w-[60%] flex flex-col items-center">
        {icon && <div className="text-6xl mb-4">{icon}</div>}
        <p className="text-lg font-semibold text-center">{message}</p>
      </div>
    </div>
  );
};

export default ProductErrorLoad;