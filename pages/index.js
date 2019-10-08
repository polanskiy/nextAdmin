import React from 'react';
import axios from 'axios';
import Home from '../views/site/pages/Home/Home';


const Main = ({ page }) => (
  <Home page={page} />
);

Main.getInitialProps = async (ctx) => {
  const axioscfg = ctx.req ? { baseURL: 'http://localhost:3000' } : {};
  let homePage = {};
  try {
    const res = await axios.get('/api/pages/home', axioscfg);
    homePage = res.data;
  } catch (e) {
    console.log('err main getinitialprops');
  }
  return { page: homePage };
};

export default Main;
