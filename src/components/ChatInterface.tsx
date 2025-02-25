import React, { useState } from 'react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Chat with Omni</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, index) => (
          <div key={index} className="my-1">
            <span className="text-gray-800">{msg}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Type your command..."
        />
        <button 
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
