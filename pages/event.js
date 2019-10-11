import React from 'react';
import axios from 'axios';
import Event from '../views/site/pages/Event/Event';

const EventPage = ({ page }) => (
  <div><Event page={page} /></div>
);

EventPage.getInitialProps = async (ctx) => {
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  let eventPage = {};
  try {
    const res = await axios.get('/api/pages/event', axioscfg);
    eventPage = res.data;
  } catch (e) {
    console.log('err EventPage getinitialprops');
  }
  return { page: eventPage };
};

export default EventPage;
