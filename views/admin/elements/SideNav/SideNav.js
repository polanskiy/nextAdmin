import React from 'react';
import { Link } from '../../../../routes';

const SideNav = () => (
  <div className="adminSidenavBox">
    <div className="adminSidenavSticky">
      <Link href="/admin">
        <a style={{ fontSize: 20 }}>Главная</a>
      </Link>
      <Link route="admin" params={{ slug: 'pages' }}>
        <a style={{ fontSize: 20 }}>Страницы</a>
      </Link>
      <Link route="admin" params={{ slug: 'travels' }}>
        <a>Путешествия</a>
      </Link>
      <Link route="admin" params={{ slug: 'media' }}>
        <a>Медиа</a>
      </Link>
    </div>
  </div>
);

export default SideNav;
