import { useState } from "react";
import ContactList from "./ContactList";
import Messages from "./Messages";

export default function Body() {
  const [messages, setMessages] = useState([
  { id: 1, text: "hiya", messageId: 1 },
  { id: 1, text: "this is text", messageId: 2},
  { id: 2, text: "Sup", messageId: 3}
]);

  const [contacts, setContacts] = useState([
    { id: 1, fname: "John", lname: "Smith", profilePicture: "" },
    { id: 2, fname: "Jane", lname: "Johnson", profilePicture: "" },
    {
      id: 3,
      fname: "Alice",
      lname: "Johnson",
      profilePicture: "public/Professional-headshot.png",
    },
  ]);

  const [selectedContact, setSelectedContact] = useState("");

  // Handle selecting a contact
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const filteredMessages = selectedContact
    ? messages.filter((message) => message.id === selectedContact.id)
    : [];

  return (
    <div className="bg-background h-screen w-full p-8 flex flex-row">
      <ContactList
        contacts={contacts}
        selectedContact={selectedContact}
        onSelectContact={handleContactSelect}
        messages={filteredMessages}
      />
      <div className="w-full flex flex-col justify-start items-center">
        <div className="bg-accent100 w-11/12 h-16 max-h-16 rounded-full">
          <div className="flex justify-start h-16 max-h-16 items-center ml-4">
            {selectedContact.profilePicture ? (
              <div className="h-16 flex items-center justify-center">
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={selectedContact.profilePicture}
                  alt={`${selectedContact.fname}'s profile`}
                />
              </div>
            ) : (
              <div className="h-16 flex items-center justify-center">
                {selectedContact.fname && selectedContact.fname.length > 0 ? (
                  <span className="object-cover w-12 h-12 rounded-full bg-slate-600 flex justify-center items-center text-4xl">
                    {selectedContact.fname[0]}
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            )}
            <div className=" ml-2">
              {selectedContact.fname + " "}
              {selectedContact.lname}
            </div>
          </div>
        </div>
        <Messages messages={filteredMessages} />
      </div>
    </div>
  );
}
