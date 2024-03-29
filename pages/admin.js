import React from 'react';
import { withRouter } from 'next/router';
import '../styles/admin/admin.scss';
import AdminLayout from '../views/admin/hoc/AdminLayout';
import Pages from '../views/admin/pages/Pages/Pages';
import Articles from '../views/admin/pages/Articles/Articles';
import Travels from '../views/admin/pages/Travels/Travels';
import Media from '../views/admin/pages/Media/Media';
import TravelTemplate from '../views/admin/pages/Travels/TravelTemplate/TravelTemplate';
import ArticleTemplate from '../views/admin/pages/Articles/ArticleTemplate/ArticleTemplate';
import PageTemplate from '../views/admin/pages/Pages/PageTemplate/PageTemplate';
import Preloader from '../views/admin/elements/Preloader/Preloader';
import useToggle from '../utils/useToggle';

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
        case 'articles':
          return <Articles {...props} preloader={toggleOpen} />;
        case 'media':
          return <Media {...props} preloader={toggleOpen} />;
        default:
          return <Pages {...props} preloader={toggleOpen} />;
      }
    } else if (slug === 'travels') {
      return <TravelTemplate id={id} preloader={toggleOpen} />;
    } else if (slug === 'pages') {
      return <PageTemplate name={id} preloader={toggleOpen} />;
    } else if (slug === 'articles') {
      return <ArticleTemplate id={id} preloader={toggleOpen} />;
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
