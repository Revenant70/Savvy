const contacts = [
    {id: 1, fname: "Jackson", lname: "", profilePicture: "./public/Professional-headshot.png"},
    {id: 2, fname: "Simon", lname: "Peter", profilePicture: ""}, 
]

function ContactList({ onSelectContact }) {
  return (
    <div className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => onSelectContact(contact)}>
            {contact.fname} {" "}
            {contact.lname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;