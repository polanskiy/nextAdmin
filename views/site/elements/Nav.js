import React, { useState } from 'react';
import { Link } from '../../../routes';

const Nav = () => {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <div className={showMenu ? 'menuFixedBox active' : 'menuFixedBox'}>
      <button className={showMenu ? 'hamburger--arrowturn is-active' : 'hamburger--arrowturn'} type="button" onClick={() => toggleMenu(!showMenu)}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      {showMenu && (
        <div className="headerMenuBox">
          <Link route="/">
            <a>Главная</a>
          </Link>
          <Link route="/travels">
            <a>Галерея путешествий</a>
          </Link>
          <Link route="/blog">
            <a>Блог путешественника</a>
          </Link>
          <Link route="/about">
            <a>Обо мне</a>
          </Link>
          <Link route="/faq">
            <a>Вопрос - ответ</a>
          </Link>
          <Link route="/event">
            <a>Event</a>
          </Link>
          <Link route="/contacts">
            <a>Контакты</a>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Nav;
