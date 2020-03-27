import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { current, addContact, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);
  //trigger only if context changes or the current contact is changed

  const [contact, setContact] = useState({
    /**initial state */
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const onChange = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    // clear form after adding contact
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        required
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={onChange}
        checked={type === "personal"}
      />
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={onChange}
        checked={type === "professional"}
      />
      Professional{" "}
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onclick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
