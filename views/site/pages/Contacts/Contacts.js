import React, { useEffect } from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';
import ContactsForm from './ContactsForm';

const Contacts = (props) => {
  const { page, scrollTo } = props;

  useEffect(() => {
    if (scrollTo) {
      console.log('scrollTo');
      const element = document.getElementById(scrollTo);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }, [scrollTo]);

  return (
    <div>
      <Header title={page.title.value} headerBg={page.images.header} noSearch />
      <ContactsForm />
      <RequestForm footerImg={page.images.footer} />
    </div>
  );
};

export default Contacts;
