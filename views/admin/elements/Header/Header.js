import React from 'react';
import Router from 'next/router';
import { Link } from '../../../../routes';

const Header = () => {
  const handleLogout = () => {
    document.cookie = 'auth=';
    Router.push('/dlogin');
  };

  return (
    <div className="adminHeaderBox">
      <div>
        <p>Административная панель</p>
        <Link route="/">
          <a target="_blank">Перейти на сайт</a>
        </Link>
      </div>
      <div>
        <button type="button" onClick={handleLogout} className="adminBtn">Выйти</button>
      </div>
    </div>
  );
};

export default Header;
