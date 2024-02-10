import { useState } from "react";

export default function Chats() {

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  // Function to handle sending a message
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        user: "You",
        text: inputMessage,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-base-200 bg-opacity-50">
      <div className="w-5/12 h-9/12 border bg-base-300 rounded-lg overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-2 ${message.user === 'You' ? 'text-right' : 'text-left'}`}
              >
                <span className="text-sm font-bold">{message.user}</span>
                <p className="text-sm">{message.text}</p>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 mr-2 py-2 px-4 border rounded-lg focus:outline-none"
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyPress={e => {
                if (e.key === 'Enter') sendMessage();
              }}
            />
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
