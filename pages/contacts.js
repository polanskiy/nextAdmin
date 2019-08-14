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
    const res = await axios.get('/api/pages', axioscfg);
    res.data.forEach((page) => {
      if (page.name === 'contacts') contactsPage = page;
    });
  } catch (e) {
    console.log('err contactsPage getinitialprops');
  }
  return { page: contactsPage };
};

export default ContactsPage;
