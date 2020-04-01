import React, { useContext, useEffect, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);
  const { contacts, filtered, getContacts, loading } = contactContext;
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>No available contacts at the moment</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  {/* use key inside the wrapper instead of the component to detect key change*/}
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
