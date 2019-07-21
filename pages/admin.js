import React from 'react';
import { withRouter } from 'next/router';
import AdminLayout from '../views/admin/hoc/AdminLayout';
import Home from '../views/admin/pages/Home/Home';
import Pages from '../views/admin/pages/Pages/Pages';
import Articles from '../views/admin/pages/Articles/Articles';
import Media from '../views/admin/pages/Media/Media';

const Admin = ({ slug }) => {
  const renderPage = () => {
    switch (slug) {
      case 'pages':
        return <Pages />;
      case 'articles':
        return <Articles />;
      case 'media':
        return <Media />;
      default:
        return <Home />;
    }
  };
  return (
    <AdminLayout>
      {renderPage()}
    </AdminLayout>
  );
};

Admin.getInitialProps = ({ query }) => {
  const { slug } = query;
  return { slug };
};

export default withRouter(Admin);
