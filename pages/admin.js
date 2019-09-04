import React from 'react';
import { withRouter } from 'next/router';
import AdminLayout from '../views/admin/hoc/AdminLayout';
import Home from '../views/admin/pages/Home/Home';
import Pages from '../views/admin/pages/Pages/Pages';
import Travels from '../views/admin/pages/Travels/Travels';
import Media from '../views/admin/pages/Media/Media';
import TravelTemplate from '../views/admin/pages/Travels/TravelTemplate/TravelTemplate';
import Preloader from '../views/admin/elements/Preloader/Preloader';
import useToggle from '../utils/useToggle';
import PageTemplate from '../views/admin/pages/Pages/PageTemplate/PageTemplate';

const Admin = (props) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { slug, id } = props;
  const renderPage = () => {
    if (!id) {
      switch (slug) {
        case 'pages':
          return <Pages {...props} preloader={toggleOpen} />;
        case 'travels':
          return <Travels {...props} preloader={toggleOpen} />;
        case 'media':
          return <Media {...props} preloader={toggleOpen} />;
        default:
          return <Pages {...props} preloader={toggleOpen} />;
          // return <Home {...props} preloader={toggleOpen} />;
      }
    } else if (slug === 'travels') {
      return <TravelTemplate id={id} preloader={toggleOpen} />;
    } else if (slug === 'pages') {
      return <PageTemplate name={id} preloader={toggleOpen} />;
    }
    return null;
  };
  return (
    <AdminLayout slug={slug}>
      {renderPage()}
      <Preloader isOpen={isOpen} />
    </AdminLayout>
  );
};

Admin.getInitialProps = ({ query }) => {
  const { slug, id } = query;
  return { slug, id };
};

export default withRouter(Admin);
