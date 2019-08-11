import React from 'react';
import axios from 'axios';
import Layout from '../views/site/hoc/Layout';
import About from '../views/site/pages/About/About';


const AboutPage = ({ pages }) => (
  <Layout>
    <About pages={pages[0].elements} />
  </Layout>
);

AboutPage.getInitialProps = async (ctx) => {
  console.log('req');
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  const res = await axios.get('/api/pages', axioscfg);
  console.log(res.data);

  return { pages: res.data };
};


export default AboutPage;
