import { useState, useEffect } from "react";
import ContactList from "./ContactList";

export default function Body() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState("");
  const [messages, setMessages] = useState([]);

  // Function to load contacts
  useEffect(() => {
    // Fetch contacts from the backend and setContacts
  }, []);

  // Function to load messages for selected contact
  useEffect(() => {
    if (selectedContact) {
      // Fetch messages for selectedContact from the backend and setMessages
    }
  }, [selectedContact]);

  // Function to handle sending messages
  const sendMessage = (message) => {
    // Send message to the backend
    // Update messages state
  };

  return (
    <div className="flex h-screen">
      <div className="w-3/12 bg-gray-200 rounded-3xl p-4 m-6">
        <ContactList contacts={contacts} onSelectContact={setSelectedContact} />
      </div>
      <div className="flex flex-col w-9/12 m-6">
        <div className="bg-gray-200 rounded-full h-16 mx-6">
          <div className="flex flex-row pl-4 ">
            {selectedContact.profilePicture ? (
              <div className="h-16 flex items-center justify-center">
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={selectedContact.profilePicture}
                />
              </div>
            ) : (
              <div className="h-16 flex items-center justify-center">
                {selectedContact.fname && selectedContact.fname.length > 0 ? (
                  <span className="object-cover w-12 h-12 rounded-full bg-slate-600 flex justify-center items-center">
                    {selectedContact.fname[0]}
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full p-4">
          {selectedContact ? (
            <div>
              <h2>Chat with {selectedContact.name}</h2>
              <ul>
                {messages.map((message, index) => (
                  <li key={index}>{message.text}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Type a message..."
                // Handle input change
              />
              <button onClick={() => sendMessage(message)}>Send</button>
            </div>
          ) : (
            <p className="text-center">Select a contact to start chatting</p>
          )}
        </div>
      </div>
    </div>
  );
}
