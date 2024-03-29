import React, { useState } from 'react';
import { Link } from '../../../../routes';

const SideNav = ({ slug }) => {
  const [active, setActive] = useState(slug || 'pages');
  return (
    <div className="adminSidenavBox">
      <div className="adminSidenavSticky">
        <Link route="admin" params={{ slug: 'pages' }}>
          <a className={active === 'pages' ? 'adminActiveNav' : undefined} onClick={() => setActive('pages')}>Страницы</a>
        </Link>
        <Link route="admin" params={{ slug: 'travels' }}>
          <a className={active === 'travels' ? 'adminActiveNav' : undefined} onClick={() => setActive('travels')}>Путешествия</a>
        </Link>
        <Link route="admin" params={{ slug: 'articles' }}>
          <a className={active === 'articles' ? 'adminActiveNav' : undefined} onClick={() => setActive('articles')}>Статьи</a>
        </Link>
        <Link route="admin" params={{ slug: 'media' }}>
          <a className={active === 'media' ? 'adminActiveNav' : undefined} onClick={() => setActive('media')}>Медиа</a>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
