import React, { useState } from "react";
import axios from "axios";
import { status } from "../../../utils/status";

function ViewFir() {
  const [fromAddress, setFromAddress] = useState(""); // Ethereum address from MetaMask
  const [firId, setFirId] = useState(""); // FIR ID input
  const [firDetails, setFirDetails] = useState(null); // FIR details from the API
  const [error, setError] = useState(""); // Error messages

  // Function to connect to MetaMask
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setFromAddress(accounts[0]); // Set the first connected address
        setError(""); // Clear any errors
      } catch (err) {
        setError("Failed to connect to MetaMask.");
      }
    } else {
      setError("Please install MetaMask to use this feature.");
    }
  };

  // Function to switch accounts
  const switchAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
      setFromAddress(accounts[0]); // Set the newly selected address
      setError(""); // Clear any errors
    } catch (err) {
      setError("Failed to switch accounts.");
    }
  };

  // Function to fetch FIR details
  const fetchFIRDetails = async () => {
    if (!firId) {
      setError("Please enter a valid FIR ID.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/view-fir?from=${fromAddress}&fir_id=${firId}`
      );
      setFirDetails(response.data); // Set FIR details
      setError(""); // Clear any errors
    } catch (err) {
      setError("Failed to fetch FIR details. Please check the FIR ID and try again.");
      setFirDetails(null); // Clear previous details if fetch fails
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">View FIR Details</h1>

        {/* MetaMask Connection Section */}
        <div className="mb-4">
          {!fromAddress ? (
            <button
              onClick={connectMetaMask}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Connect MetaMask
            </button>
          ) : (
            <div>
              <p className="text-green-600 font-semibold mb-2">Connected with: {fromAddress}</p>
              <button
                onClick={switchAccount}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Switch Account
              </button>
            </div>
          )}
        </div>

        {/* Input for FIR ID */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="firId">
            Enter FIR ID:
          </label>
          <input
            type="text"
            id="firId"
            value={firId}
            onChange={(e) => setFirId(e.target.value)}
            placeholder="Enter FIR ID"
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Fetch FIR Button */}
        <div className="mb-4">
          <button
            onClick={fetchFIRDetails}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Fetch FIR Details
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 font-semibold">{error}</p>}

        {/* FIR Details */}
        {firDetails ? (
          <div className="border border-gray-300 rounded p-4 bg-gray-50 mt-4">
            <p>
              <span className="font-bold text-gray-700">FIR ID:</span> {firDetails['0']}
            </p>
            <p>
              <span className="font-bold text-gray-700">Status:</span>{" "}
              {status[firDetails.status]}
            </p>
            <p>
              <span className="font-bold text-gray-700">FIR Message:</span> {firDetails['2']}
            </p>
            <p>
              <span className="font-bold text-gray-700">Rejection Message:</span>{" "}
              {firDetails.rejectionMessage || "N/A"}
            </p>
            <p>
              <span className="font-bold text-gray-700">Court Message:</span>{" "}
              {firDetails.courtMessage || "N/A"}
            </p>
            <p>
              <span className="font-bold text-gray-700">Investigation Details:</span>{" "}
              {firDetails.investigationDetails || "N/A"}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-600">No FIR details found.</p>
        )}
      </div>
    </div>
  );
}

export default ViewFir;
