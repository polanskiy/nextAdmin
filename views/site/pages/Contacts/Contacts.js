import React, { useEffect } from 'react';
import Header from '../../elements/Header';
import ContactsForm from './ContactsForm';

const Contacts = (props) => {
  const { page, scrollTo } = props;

  const handleScroll = (h) => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (navigator.platform.toUpperCase().indexOf('WIN') >= 0) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const i = h || window.pageYOffset;
        if (i < window.innerHeight) {
          setTimeout(() => {
            window.scrollTo(0, i);
            handleScroll(i + 25);
          }, 10);
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleScroll(0);
    }, 0);
  }, [scrollTo]);

  return (
    <div className="contactsBox">
      <Header title={page.title.value} headerBg={page.images.header} noSearch />
      <ContactsForm />
    </div>
  );
};

export default Contacts;
