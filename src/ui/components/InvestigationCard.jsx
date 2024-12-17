import React from "react";

export const InvestigationCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-4/5 max-w-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Investigation Report</h2>
          <p className="text-gray-600">Balance: 100 ETH</p>
        </div>

        {/* Report Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="space-y-4 mb-4">
            {/* Name */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Name</span>
              <span className="text-gray-700">Rishab Lamba</span>
            </div>

            {/* Report Type */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Report Type</span>
              <span className="text-gray-700">Molestation</span>
            </div>

            {/* Description */}
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Description</span>
              <span className="text-gray-700">Victim was sexually harassed while writing a code for Hello world</span>
            </div>
          </div>

          {/* Buttons (Accept/Decline) */}
          <div className="flex space-x-4 mb-6">
            <button className="bg-green-500 text-white py-1 px-4 rounded-md">
              Accept
            </button>
            <button className="bg-red-500 text-white py-1 px-4 rounded-md">
              Decline
            </button>
          </div>

          {/* Investigation Comments */}
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6"
            rows="4"
            placeholder="Enter Investigation Comments"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700">
              Submit Investigation Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

