import React from "react";

export const FIRRegistration = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-4/5 max-w-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          FIR Registration
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Input: Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Input: Report Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Report Type
            </label>
            <input
              type="text"
              placeholder="Enter report type"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Input: Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Phone Verification */}
          <div className="bg-gray-100 p-4 rounded-lg border">
            <p className="text-gray-600 mb-2">Enter your phone number</p>
            <div className="flex items-center space-x-2">
              <span className="inline-block bg-gray-300 px-4 py-2 rounded-md">
                🇮🇳 +91
              </span>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end mt-3 space-x-2">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Verify
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
