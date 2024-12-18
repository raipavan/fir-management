import React, { useState, useEffect } from "react";

function AssignRole() {
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  // Function to connect MetaMask
  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to proceed.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setMetaMaskAddress(accounts[0]); // Set the connected MetaMask address
      setStatusMessage("MetaMask connected successfully.");
    } catch (error) {
      console.error("MetaMask connection failed:", error);
      setStatusMessage("MetaMask connection failed.");
    }
  };

  // Function to switch accounts
  const changeAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setMetaMaskAddress(accounts[0]); // Set the new MetaMask address
      setStatusMessage("Account switched successfully.");
    } catch (error) {
      console.error("Failed to switch account:", error);
      setStatusMessage("Failed to switch account.");
    }
  };

  // Listen for MetaMask account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setMetaMaskAddress(accounts[0]); // Update the MetaMask address
          setStatusMessage("MetaMask account changed.");
        } else {
          setMetaMaskAddress(null); // User disconnected MetaMask
          setStatusMessage("MetaMask disconnected.");
        }
      });
    }
  }, []);

  // Function to handle the form submission
  const handleAssignRole = async (e) => {
    e.preventDefault();

    if (!metaMaskAddress) {
      alert("Please connect MetaMask before assigning a role.");
      return;
    }

    if (!address || !role) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/assign-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          role,
          sender_address: metaMaskAddress,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage("Role assigned successfully!");
      } else {
        setStatusMessage(result.message || "Error assigning role.");
      }
    } catch (error) {
      console.error("API call failed:", error);
      setStatusMessage("Failed to assign role.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Assign Role</h1>

        {/* MetaMask Address Display */}
        <div className="mb-4">
          {metaMaskAddress ? (
            <div>
              <p className="text-green-600 font-semibold">
                Connected with: {metaMaskAddress}
              </p>
              <button
                onClick={changeAccount}
                className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Change Account
              </button>
            </div>
          ) : (
            <button
              onClick={connectMetaMask}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Connect MetaMask
            </button>
          )}
        </div>

        {/* Assign Role Form */}
        <form onSubmit={handleAssignRole}>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Ethereum Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter Ethereum address"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
              Role
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter role"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Assign Role
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center font-semibold text-gray-700">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

export default AssignRole;
