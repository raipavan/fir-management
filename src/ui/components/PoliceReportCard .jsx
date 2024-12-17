import React from 'react';

export const PoliceReportCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl my-7">
    {/* Title */}
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Police Report
    </h2>

    {/* Case Report */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Case Report</h3>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>Name</div>
        <div>- Rishab Lamba</div>
        <div>Report Type</div>
        <div>- Molestation</div>
        <div>Description</div>
        <div>- Victim was sexually harassed while writing a code for Hello world</div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-end space-x-4">
      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
        Decline
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Approve
      </button>
    </div>
  </div>
  );
};


