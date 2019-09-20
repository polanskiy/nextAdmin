import React from 'react';
import { Link } from '../../../routes';
import useToggle from '../../../utils/useToggle';

const Nav = ({ pathname }) => {
  const [showMenu, toggleMenu] = useToggle(false);

  return (
    <div className={showMenu ? 'menuFixedBox active' : 'menuFixedBox'}>
      {showMenu && <div className="closeMenuBox" onClick={toggleMenu} />}
      <button className={showMenu ? 'hamburger--arrowturn is-active' : 'hamburger--arrowturn'} type="button" onClick={toggleMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      {showMenu && (
        <div className="headerMenuBox">
          <Link route="/">
            <a className={pathname === '/' ? 'activeMenu' : undefined}>Главная</a>
          </Link>
          <Link route="/travels">
            <a className={pathname === '/travels' ? 'activeMenu' : undefined}>Галерея путешествий</a>
          </Link>
          <Link route="/blog">
            <a className={pathname === '/blog' ? 'activeMenu' : undefined}>Блог путешественника</a>
          </Link>
          <Link route="/about">
            <a className={pathname === '/about' ? 'activeMenu' : undefined}>Обо мне</a>
          </Link>
          <Link route="/faq">
            <a className={pathname === '/faq' ? 'activeMenu' : undefined}>Вопрос - ответ</a>
          </Link>
          <Link route="/event">
            <a className={pathname === '/event' ? 'activeMenu' : undefined}>Event</a>
          </Link>
          <Link route="/contacts">
            <a className={pathname === '/contacts' ? 'activeMenu' : undefined}>Контакты</a>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Nav;
