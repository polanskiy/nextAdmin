import React from 'react';
import axios from 'axios';
import Contacts from '../views/site/pages/Contacts/Contacts';

const ContactsPage = ({ page }) => (
  <div><Contacts page={page} /></div>
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
  return { page: contactsPage };
};

export default ContactsPage;
