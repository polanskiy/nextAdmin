import React from 'react';
import Router from 'next/router';
import { Link } from '../../../../routes';

const Header = () => {
  const handleLogout = () => {
    window.localStorage.setItem('tokendasya', '');
    Router.push('/dlogin');
  };

  return (
    <div className="adminHeaderBox">
      <div>
        <h1>Административная панель</h1>
      </div>
      <div>
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
