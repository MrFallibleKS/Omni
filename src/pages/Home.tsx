import React from 'react';
import WalletConnector from '../components/WalletConnector';
import ChatInterface from '../components/ChatInterface';
import Dashboard from '../components/Dashboard';

const Home: React.FC = () => {
  return (
    <div>
      <WalletConnector />
      <ChatInterface />
      <Dashboard />
    </div>
  );
};

export default Home;
