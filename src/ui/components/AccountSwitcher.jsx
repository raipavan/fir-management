import React, { useState, useEffect } from "react";

function AccountSwitcher({ onAccountChange }) {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);

  // Function to connect or switch MetaMask account
  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to proceed.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setMetaMaskAddress(accounts[0]);
      if (onAccountChange) {
        onAccountChange(accounts[0]); // Notify parent about account change
      }
    } catch (error) {
      console.error("MetaMask connection failed:", error);
      alert("MetaMask connection failed.");
    }
  };

  // Auto-connect MetaMask on component mount
  useEffect(() => {
    connectMetaMask();
  }, []);

  return (
    <div className="flex items-center justify-between mb-4">
      {metaMaskAddress ? (
        <p className="text-sm text-gray-700">
          Connected with: <span className="font-bold">{metaMaskAddress}</span>
        </p>
      ) : (
        <p className="text-red-600 font-semibold">Not connected to MetaMask.</p>
      )}
      <button
        onClick={connectMetaMask}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        {metaMaskAddress ? "Switch Account" : "Connect MetaMask"}
      </button>
    </div>
  );
}

export default AccountSwitcher;
