import React from 'react';
import axios from 'axios';
import Contacts from '../views/site/pages/Contacts/Contacts';

const ContactsPage = props => (
  <div><Contacts {...props} /></div>
);

ContactsPage.getInitialProps = async (ctx) => {
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  let contactsPage = {};
  try {
    const res = await axios.get('/api/pages/contacts', axioscfg);
    contactsPage = res.data;
  } catch (e) {
    console.log('err contacts getinitialprops');
  }
  console.log('props', ctx.query.id);
  return { page: contactsPage, scrollTo: ctx.query.id };
};

export default ContactsPage;
