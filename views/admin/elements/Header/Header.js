import React from 'react';
import { Link } from '../../../../routes';

const Header = () => (
  <div className="adminHeaderBox">
    <div>
      <div>лого</div>
      <div>Административная панель</div>
    </div>
    <div>
      <Link route="/">
        <a target="_blank">Посмотреть сайт</a>
      </Link>
    </div>
  </div>
);

export default Header;
