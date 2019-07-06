import React from 'react';
import { Link } from '../../../routes';

const SideNav = () => (
  <div className="adminSidenavBox">
    <Link route="/">
      <a style={{ fontSize: 20 }}>Главная</a>
    </Link>
    <Link route="/about">
      <a style={{ fontSize: 20 }}>О нас</a>
    </Link>
    <Link route="/contacts">
      <a>Контакты</a>
    </Link>

  </div>
);

export default SideNav;
