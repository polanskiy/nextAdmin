import React, { useEffect } from 'react';
import Header from '../../elements/Header';
import ContactsForm from './ContactsForm';

const Contacts = (props) => {
  const { page, scrollTo } = props;

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }, [scrollTo]);

  return (
    <div className="contactsBox">
      <Header title={page.title.value} headerBg={page.images.header} noSearch />
      <ContactsForm />
    </div>
  );
};

export default Contacts;
