import React from 'react';
import { Link } from '../../../../routes';

const SideNav = () => (
  <div className="adminSidenavBox">
    <Link href="/admin">
      <a style={{ fontSize: 20 }}>Главная</a>
    </Link>
    <Link route="admin" params={{ slug: 'pages' }}>
      <a style={{ fontSize: 20 }}>Страницы</a>
    </Link>
    <Link route="admin" params={{ slug: 'articles' }}>
      <a>Статьи</a>
    </Link>
    <Link route="admin" params={{ slug: 'media' }}>
      <a>Медиа</a>
    </Link>
  </div>
);

export default SideNav;
