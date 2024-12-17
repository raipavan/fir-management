import React from 'react';
export   const CourtReportCard = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Court Report Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Court
        </h2>

        {/* Balance */}
        <div className="text-right text-gray-600 mb-4">
          <p className="text-lg font-semibold">Balance: 100 ETH</p>
        </div>

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

        {/* Investigation Report */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Investigation Report</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700">
              We have conducted an operation with the CID team headed by ACP
              Pradyuman who concluded "kuch toh gadbad hai diyaa" and hence were
              forced to arrest Tapu of the gang Tapu sena
            </p>
          </div>
          {/* Status */}
          <div className="space-x-3 mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Created
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Approved
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Investigated
            </button>
          </div>

          {/* Textarea */}
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 resize-none"
            rows="4"
            placeholder="Enter verdict here..."
          ></textarea>
        </div>

        {/* Release Verdict Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Release Verdict
          </button>
        </div>
      </div>
    </div>
  );
};


