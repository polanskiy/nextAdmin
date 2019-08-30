import React from 'react';
import { withRouter } from 'next/router';
import AdminLayout from '../views/admin/hoc/AdminLayout';
import Home from '../views/admin/pages/Home/Home';
import Pages from '../views/admin/pages/Pages/Pages';
import Travels from '../views/admin/pages/Travels/Travels';
import Media from '../views/admin/pages/Media/Media';
import TravelTemplate from '../views/admin/pages/Travels/TravelTemplate/TravelTemplate';

const Admin = (props) => {
  console.log('props', props);
  const renderPage = () => {
    if (!props.id) {
      switch (props.slug) {
        case 'pages':
          return <Pages {...props} />;
        case 'travels':
          return <Travels {...props} />;
        case 'media':
          return <Media {...props} />;
        default:
          return <Home {...props} />;
      }
    } else {
      return <TravelTemplate id={props.id} />;
    }
  };
  return (
    <AdminLayout>
      {renderPage()}
    </AdminLayout>
  );
};

Admin.getInitialProps = ({ query }) => {
  const { slug, id } = query;
  return { slug, id };
};

export default withRouter(Admin);
