import React from 'react';
import SearchForm from '../../elements/SearchForm';
import CelebForm from '../../elements/CelebForm';

const ContactsForm = () => (
  <div>
    <p className="contactsTitle">
Форма заказа вашего
      <br />
      <span>путешествия</span>
    </p>
    <SearchForm />
    <p className="contactsTitle">
Форма заказа вашего
      <br />
      <span>праздника</span>
    </p>
    <CelebForm />
  </div>
);

export default ContactsForm;
