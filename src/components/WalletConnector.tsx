import React from 'react';

const WalletConnector: React.FC = () => {
  const handleConnect = () => {
    // Placeholder: Wallet connection logic will be added later
    console.log("Wallet connect clicked");
  };

  return (
    <div className="my-4">
      <button 
        onClick={handleConnect} 
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletConnector;
