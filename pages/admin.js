import React from 'react';
import { withRouter } from 'next/router';
import AdminLayout from '../hoc/AdminLayout';
import Home from '../views/admin/Home/Home';
import Pages from '../views/admin/Pages/Pages';

const Admin = ({ router }) => {
  console.log('props', router);
  const renderPage = () => {
    switch (router.asPath) {
      case '/admin':
        return <Home />;
      case '/admin/pages':
        return <Pages />;
      default:
        break;
    }
  };
  return (
    <AdminLayout>
      {renderPage()}
    </AdminLayout>
  );
};
export default withRouter(Admin);
