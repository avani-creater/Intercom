import { useState } from "react";

const suggestions = ["How do I get a refund?"];

const suggestionReplies = {
  "How do I get a refund?": "To get a refund, please visit your order history, select the item, and click on 'Request Refund'. Follow the steps provided.",
};

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSuggestionClick = (text) => {
    const aiReply = suggestionReplies[text] || "Let me look that up for you!";
    setMessages([
      ...messages,
      { from: "ai", text: aiReply },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { from: "ai", text: `Reply to: "${input}"` },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white">
      {/* Avatar */}
      <div className="flex flex-col justify-between">
        <div className="flex justify-center mb-4">
          <img
            src="images/avtar-1.png"
            alt="AI Avatar"
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Copilot Text */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold">Hi, I'm Fin, your AI copilot</h2>
          <p className="text-sm text-gray-500">
            Ask me anything about this conversation
          </p>
        </div>
      </div>

   
      <div className="text-center text-sm text-gray-600 mb-2">
        suggestions: {suggestions[0]}
      </div>

  
      <div className="flex justify-center mb-3">
        {suggestions.map((text, idx) => (
          <button
            key={idx}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm"
            onClick={() => handleSuggestionClick(text)}
          >
            {text}
          </button>
        ))}
      </div>

 
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={"p-2 rounded-lg max-w-xs bg-blue-100"}>
            {msg.text}
          </div>
        ))}
      </div>
 
      <div className="flex items-center border rounded-full px-3 py-2">
        <input
          className="flex-1 outline-none"
          placeholder="Ask a follow-up question…"
          value={input}
          onChange={(e) => setInput(e.target.value)}/>
        <button
          onClick={handleSend}
          className="text-gray-500 hover:text-black">
          ➤
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
