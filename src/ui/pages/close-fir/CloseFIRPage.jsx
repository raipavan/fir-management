import React, { useState, useEffect } from "react";
import Web3 from "web3";
// import { ethers } from "ethers";  // Using ethers.js for interaction

export const CloseFIRPage =()=> {
  const [metaMaskAddress, setMetaMaskAddress] = useState(null);
  const [firId, setFirId] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [contract, setContract] = useState(null);

  // Contract ABI and address (Update these with your actual values)
//   const contractABI = [
//     {
//       "inputs": [
//         { "internalType": "uint256", "name": "_firId", "type": "uint256" },
//         { "internalType": "string", "name": "_message", "type": "string" }
//       ],
//       "name": "closeFIR",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//   ];
//   const contractAddress = "YOUR_CONTRACT_ADDRESS";  // Replace with your contract address

//   useEffect(() => {
//     if (window.ethereum) {
//       const web3 = new Web3(window.ethereum);
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
//       setContract(contractInstance);
//     }
//   }, []);

//   // Function to connect MetaMask
//   const connectMetaMask = async () => {
//     if (!window.ethereum) {
//       alert("MetaMask is not installed. Please install it to proceed.");
//       return;
//     }
//     try {
//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       setMetaMaskAddress(accounts[0]); // Set the connected MetaMask address
//     } catch (error) {
//       console.error("MetaMask connection failed:", error);
//       setStatusMessage("MetaMask connection failed.");
//     }
//   };

//   // Function to handle FIR closure
//   const handleCloseFIR = async (e) => {
//     e.preventDefault();

//     if (!metaMaskAddress) {
//       alert("Please connect MetaMask before closing an FIR.");
//       return;
//     }

//     if (!firId || !message) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const tx = await contract.closeFIR(firId, message);
//       setStatusMessage("FIR Closed successfully!");
//       await tx.wait(); // Wait for transaction to be mined
//       console.log("Transaction successful:", tx);
//     } catch (error) {
//       console.error("Error closing FIR:", error);
//       setStatusMessage("Failed to close FIR.");
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Close FIR</h1>

        {/* MetaMask Address */}
        <div className="mb-4">
          {metaMaskAddress ? (
            <p className="text-green-600 font-semibold">
              Connected with: {metaMaskAddress}
            </p>
          ) : (
            <button
              onClick={connectMetaMask}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Connect MetaMask
            </button>
          )}
        </div>

        {/* FIR ID Input */}
        <div className="mb-4">
          <label htmlFor="firId" className="block text-gray-700 font-medium mb-2">
            FIR ID
          </label>
          <input
            type="number"
            id="firId"
            value={firId}
            onChange={(e) => setFirId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter FIR ID"
            required
          />
        </div>

        {/* Investigator's Message Input */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Investigator's Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter Investigator's Message"
            required
          />
        </div>

        {/* Close FIR Button */}
        <button
          onClick={handleCloseFIR}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Close FIR
        </button>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-center text-gray-600 font-semibold">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

export default CloseFIRPage;
