import React from 'react';
import axios from 'axios';
import FAQ from '../views/site/pages/FAQ/FAQ';

const FAQPage = ({ page }) => (
  <div>
    <FAQ page={page} />
  </div>
);

FAQPage.getInitialProps = async (ctx) => {
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  let faqPage = {};
  try {
    const res = await axios.get('/api/pages/faq', axioscfg);
    faqPage = res.data;
  } catch (e) {
    console.log('err main getinitialprops');
  }
  return { page: faqPage };
};

export default FAQPage;
