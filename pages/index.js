import React from 'react';
import axios from 'axios';
import Layout from '../views/site/hoc/Layout';
import Home from '../views/site/pages/Home/Home';
import About from '../views/site/pages/About/About';
import Contacts from '../views/site/pages/Contacts';
import Blog from '../views/site/pages/Blog';
import FAQ from '../views/site/pages/FAQ';
import Event from '../views/site/pages/Event';

const Main = ({ page }) => {
  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'contacts':
        return <Contacts />;
      case 'blog':
        return <Blog />;
      case 'faq':
        return <FAQ />;
      case 'event':
        return <Event />;
      default:
        return <Home />;
    }
  };
  console.log('reeeender');
  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

Main.getInitialProps = async ({ query, req }) => {
  const { page } = query;
  let elements = [];
  console.log('req', req);
  if (req) {
    elements = await axios({
      method: 'get',
      url: '/api/pages/',
    });
  } else {
    elements = await axios({
      method: 'get',
      url: '/api/pages/',
    });
  }
  // switch (page) {
  //   case 'about':
  //     console.log('hahaha1');
  //     break;
  //   case 'contacts':
  //     console.log('hahaha2');
  //     break;
  //   case 'blog':
  //     console.log('hahaha3');
  //     break;
  //   case 'faq':
  //     console.log('hahaha4');
  //     break;
  //   case 'event':
  //     console.log('hahaha5');
  //     break;
  //   default:
  //     elements = await axios({
  //       method: 'get',
  //       url: '/api/pages/',
  //     });
  //     console.log('hahaha6', elements);
  // }
  console.log('elements', elements);
  return { page };
};

export default Main;
