import React from 'react';

// NavbarCard Component
export const NavbarCard = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-b-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        {/* Title */}
        <div className="text-2xl font-semibold text-gray-800">
          <span className="text-blue-600">Police</span> Portal
        </div>

        {/* Links */}
        <div className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600"></a>
          <a href="/investigation" className="text-gray-700 hover:text-blue-600"></a>
          <a href="/police" className="text-gray-700 hover:text-blue-600"></a>
        </div>
      </div>
    </div>
  );
};


