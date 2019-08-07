import React from 'react';
import Layout from '../views/site/hoc/Layout';
import Home from '../views/site/pages/Home/Home';
import About from '../views/site/pages/About';
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

Main.getInitialProps = async ({ query }) => {
  const { page } = query;
  return { page };
};

export default Main;