import React, { useState, useEffect } from "react";
// Import the reusable component
import AccountSwitcher from "../../components/AccountSwitcher";

function ViewAllFIR() {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [firs, setFirs] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  // Function to fetch FIRs
  const fetchFIRs = async (address) => {
    try {
      const response = await fetch(
        `http://localhost:3000/view-all-fir?from=${address}`
      );
      const data = await response.json();

      if (response.ok) {
        setFirs(data); // Set the FIRs data
      } else {
        setStatusMessage(data.message || "Error fetching FIRs.");
      }
    } catch (error) {
      console.error("API call failed:", error);
      setStatusMessage("Failed to fetch FIRs.");
    }
  };

  // Function to approve an FIR
  const handleApproveFIR = async (fir_id) => {
    if (!metaMaskAddress) {
      alert("Please connect MetaMask before approving an FIR.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/validate-fir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fir_id,
          isApproved: true,
          message: "FIR Approved",
          sender_address: metaMaskAddress,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("FIR approved successfully!");
        fetchFIRs(metaMaskAddress); // Re-fetch FIRs after approval
      } else {
        setStatusMessage(result.message || "Error approving FIR.");
      }
    } catch (error) {
      console.error("API call failed:", error);
      setStatusMessage("Failed to approve FIR.");
    }
  };

  // Fetch FIRs when MetaMask account changes
  const handleAccountChange = (address) => {
    setMetaMaskAddress(address);
    fetchFIRs(address);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">View All FIRs</h1>

        {/* AccountSwitcher Component */}
        <AccountSwitcher onAccountChange={handleAccountChange} />

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center text-red-600 font-semibold mb-4">
            {statusMessage}
          </p>
        )}

        {/* FIR List */}
        {firs.length > 0 ? (
          <div className="space-y-4">
            {firs.map((fir, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded p-4 bg-gray-50"
              >
                <p>
                  <span className="font-bold text-gray-700">FIR ID:</span>{" "}
                  {fir['0']}
                </p>
                <p>
                  <span className="font-bold text-gray-700">From:</span>{" "}
                  {fir['1']}
                </p>
                <p>
                  <span className="font-bold text-gray-700">Message:</span>{" "}
                  {fir['2']}
                </p>
                <p>
                  <span className="font-bold text-gray-700">Message:</span>{" "}
                  {fir['3']=='2'?'approved':'not approved'}
                </p>

                {/* Approve Button for Police */}
                <div className="mt-4">
                  <button
                    onClick={() => handleApproveFIR(fir['0'])}
                    disabled={fir['3']=='2'}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Approve FIR
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No FIRs found.</p>
        )}
      </div>
    </div>
  );
}

export default ViewAllFIR;
