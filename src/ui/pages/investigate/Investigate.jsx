import React, { useState } from "react";
// Import the reusable component
import AccountSwitcher from "../../components/AccountSwitcher";

function InvestigateFIR() {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [firs, setFirs] = useState([]); // List of FIRs
  const [statusMessage, setStatusMessage] = useState(""); // Global status message
  const [investigationMessages, setInvestigationMessages] = useState({}); // Separate messages for each FIR

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

  // Function to mark an FIR as Investigated
  const handleInvestigateFIR = async (fir_id) => {
    if (!metaMaskAddress) {
      alert("Please connect MetaMask before investigating an FIR.");
      return;
    }

    const message = investigationMessages[fir_id]?.trim();
    if (!message) {
      alert("Please provide a message for the investigation.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/investigate-fir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fir_id,
          message,
          sender_address: metaMaskAddress,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage(`FIR ${fir_id} investigated successfully!`);
        setInvestigationMessages((prev) => ({
          ...prev,
          [fir_id]: "",
        })); // Clear the message field for this FIR
        fetchFIRs(metaMaskAddress); // Re-fetch FIRs after investigation
      } else {
        setStatusMessage(result.message || `Error investigating FIR ${fir_id}.`);
      }
    } catch (error) {
      console.error("API call failed:", error);
      setStatusMessage(`Failed to investigate FIR ${fir_id}.`);
    }
  };

  // Handle investigation message change for a specific FIR
  const handleInvestigationMessageChange = (fir_id, value) => {
    setInvestigationMessages((prev) => ({
      ...prev,
      [fir_id]: value,
    }));
  };

  // Fetch FIRs when MetaMask account changes
  const handleAccountChange = (address) => {
    setMetaMaskAddress(address);
    fetchFIRs(address);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Investigate FIR</h1>

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
                  {fir["0"]}
                </p>
                <p>
                  <span className="font-bold text-gray-700">From:</span>{" "}
                  {fir["1"]}
                </p>
                <p>
                  <span className="font-bold text-gray-700">Message:</span>{" "}
                  {fir["2"]}
                </p>

                {/* Investigator's Message for each FIR */}
                <div className="mt-4">
                  <textarea
                    placeholder="Enter investigation message"
                    value={investigationMessages[fir["0"]] || ""}
                    onChange={(e) =>
                      handleInvestigationMessageChange(fir["0"], e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    rows="3"
                  />
                </div>

                {/* Investigate Button for Police */}
                <div className="mt-4">
                  <button
                    onClick={() => handleInvestigateFIR(fir["0"])}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Investigate FIR
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

export default InvestigateFIR;
