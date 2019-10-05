import React, { useState } from 'react';
import { Link } from '../../../../routes';

const SideNav = ({ slug }) => {
  const [active, setActive] = useState(slug || 'pages');

  return (
    <div className="adminSidenavBox">
      <div className="adminSidenavSticky">
        {/* <Link href="/admin">
        <a style={{ fontSize: 20 }}>Главная</a>
      </Link> */}
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
          <a>Медиа</a>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
