import React, { useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import { motion } from "framer-motion";

// Move OpenAI initialization outside the component
const openai = new OpenAIApi(
  new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY, // Ensure API key is set in .env
  })
);

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: newMessages,
        max_tokens: 150,
      });

      const aiMessage = response.data.choices[0]?.message?.content || "Error processing request.";
      setMessages([...newMessages, { role: "ai", content: aiMessage }]);
    } catch (error) {
      console.error("OpenAI API Error:", error);
      setMessages([...newMessages, { role: "ai", content: "An error occurred. Please try again." }]);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Chat with Omni AI</h2>
      <div className="h-80 overflow-y-auto border border-gray-700 p-3 rounded-lg space-y-3 bg-gray-800">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`px-3 py-2 rounded-lg max-w-xs break-words ${msg.role === "user" ? "bg-blue-600" : "bg-green-600"}`}
            >
              {msg.content}
            </span>
          </motion.div>
        ))}
        {loading && <p className="text-gray-400">Omni AI is typing...</p>}
      </div>
      <div className="flex mt-4 gap-2">
        <input
          className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-600"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;