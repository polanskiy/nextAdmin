import React from 'react';
import axios from 'axios';
import Layout from '../views/site/hoc/Layout';
import Home from '../views/site/pages/Home/Home';


const Main = ({ page }) => {
  console.log('reeeender');
  return (
    <Layout>
      <Home page={page} />
    </Layout>
  );
};

Main.getInitialProps = async (ctx) => {
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  let homePage = {};
  try {
    const res = await axios.get('/api/pages', axioscfg);
    res.data.forEach((page) => {
      if (page.name === 'home') homePage = page;
    });
  } catch (e) {
    console.log('err main getinitialprops');
  }
  return { page: homePage };
};

export default Main;
