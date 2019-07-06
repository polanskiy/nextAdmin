import React from 'react';
import Layout from '../views/site/hoc/Layout';
import Home from '../views/site/pages/Home';
import About from '../views/site/pages/About';
import Contacts from '../views/site/pages/Contacts';

const Main = ({ page }) => {
  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home />;
    }
  };
  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};


Main.getInitialProps = ({ query }) => {
  console.log('wtf1', query);
  const { page } = query;
  return { page };
};

export default Main;
