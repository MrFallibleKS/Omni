import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <Home />
      </main>
    </div>
  );
};

export default App;
