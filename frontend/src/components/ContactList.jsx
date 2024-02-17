export default function ContactList({ contacts, onSelectContact, messages }) {
  return (
    <div className="bg-accent100 h-full w-4/12 rounded-3xl shadow-lg text-6xl">
      {contacts.map((contact) => {
        // Find messages for the current contact
        const contactMessages = messages.filter((message) => message.id === contact.id);
        
        // Get the newest message for the current contact
        const newestMessage = contactMessages.length > 0 ? contactMessages[contactMessages.length - 1] : null;

        return (
          <div key={contact.id}>
            <div
              onClick={() => onSelectContact(contact)}
              className="flex flex-row mt-4 mb-4 p-6"
            >
              {contact.profilePicture ? (
                <div className="h-16 flex items-center justify-center">
                  <img
                    className="object-cover w-24 h-24 rounded-full"
                    src={contact.profilePicture}
                    alt={`${contact.fname}'s profile`}
                  />
                </div>
              ) : (
                <div className="h-16 flex items-center justify-center">
                  {contact.fname && contact.fname.length > 0 ? (
                    <span className="object-cover w-24 h-24 rounded-full bg-slate-600 flex justify-center items-center text-4xl">
                      {contact.fname[0]}
                    </span>
                  ) : (
                    <span></span>
                  )}
                </div>
              )}
              <div className="flex flex-col justify-around items-start">
                <div className="flex flex-col ml-4">
                  <div className="text-primary text-xl font-sans font-bold ">
                    {contact.fname} {contact.lname}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="border-b-2 border-accent300 opacity-30 flex justify-self-center place-items-center w-10/12 rounded-full"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
