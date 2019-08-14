import React from 'react';
import axios from 'axios';
import Layout from '../views/site/hoc/Layout';
import About from '../views/site/pages/About/About';


const AboutPage = ({ page }) => (
  <Layout>
    <About page={page} />
  </Layout>
);

AboutPage.getInitialProps = async (ctx) => {
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  let aboutPage = {};
  try {
    const res = await axios.get('/api/pages', axioscfg);
    res.data.forEach((page) => {
      if (page.name === 'about') aboutPage = page;
    });
  } catch (e) {
    console.log('err AboutPage getinitialprops');
  }
  return { page: aboutPage };
};


export default AboutPage;
