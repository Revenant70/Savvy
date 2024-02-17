import { useState } from "react";

export default function Messages({ messages, sendMessage }) {
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      sendMessage(inputMessage);
      setInputMessage("");
    }
    let jwt = localStorage.getItem("JWT")
    console.log(jwt)
  };

  return (
    <div className="mt-4 w-11/12 h-full flex flex-col justify-between">
      <div className="flex flex-col justify-center items-start p-4">
        {messages.map((message, index) => (
          <div key={index} className="m-2 text-primary bg-accent100 max-w-72 h-8 p-4 rounded-2xl flex justify-start items-center">
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center rounded-2xl">
        <input
          className="bg-accent100 rounded-lg w-3/5 text-wrap p-2 pl-4"
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className="bg-accent100 w-20 h-10 rounded-3xl ml-4" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
