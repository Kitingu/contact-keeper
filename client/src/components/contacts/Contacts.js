import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  // get contacts from the state
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>No available contacts at the moment</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                {/* use key inside the wrapper instead of the component to detect key change*/}
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
