import React,{ useState } from "react";
import  {Configuration, OpenAI} from "openai";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_KEY, // Add API key in .env
    })
  );

  const sendMessage = async () => {
    if (!input) return;
    
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: newMessages,
    });

    setMessages([...newMessages, { role: "ai", content: response.data.choices[0].message?.content || "Error" }]);
  };

  return (
    <div className="w-full max-w-2xl p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-2">Chat with Omni AI</h2>
      <div className="h-64 overflow-y-auto border border-gray-700 p-2 rounded-lg">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "text-right" : "text-left"}>
            <span className={msg.role === "user" ? "text-blue-400" : "text-green-400"}>
              {msg.role === "user" ? "You: " : "Omni: "}
            </span>
            {msg.content}
          </p>
        ))}
      </div>
      <input
        className="w-full p-2 mt-2 bg-gray-800 border border-gray-700 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default Chatbot;
