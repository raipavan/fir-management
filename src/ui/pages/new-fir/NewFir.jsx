import React, { useState, useEffect } from "react";
import AccountSwitcher from "../../components/AccountSwitcher" // Reusable AccountSwitcher component

function NewFIR() {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Function to handle form submission for creating a new FIR
  const handleCreateFIR = async (e) => {
    e.preventDefault();

    if (!metaMaskAddress) {
      alert("Please connect MetaMask before submitting the FIR.");
      return;
    }

    if (!message) {
      alert("Please provide a message for the FIR.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/new-fir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          sender_address: metaMaskAddress,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("New FIR created successfully!");
      } else {
        setStatusMessage(result.message || "Error creating FIR.");
      }
    } catch (error) {
      console.error("API call failed:", error);
      setStatusMessage("Failed to create FIR.");
    }
  };

  // Function to handle MetaMask account changes
  const handleAccountChange = (address) => {
    setMetaMaskAddress(address);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Create New FIR</h1>

        {/* AccountSwitcher Component */}
        <AccountSwitcher onAccountChange={handleAccountChange} />

        {/* Status Message */}
        {statusMessage && (
          <p className="text-center text-red-600 font-semibold mb-4">
            {statusMessage}
          </p>
        )}

        {/* FIR Creation Form */}
        <form onSubmit={handleCreateFIR}>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              FIR Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter FIR message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create FIR
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewFIR;
