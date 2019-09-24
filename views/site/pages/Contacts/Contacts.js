import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';
import ContactsForm from './ContactsForm';

const Contacts = ({ page }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <ContactsForm />
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default Contacts;
