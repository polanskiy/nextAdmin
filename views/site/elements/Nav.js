import React from 'react';
import { Link } from '../../../routes';

const SideNav = () => (
  <div className="adminSidenavBox">
    <Link route="/">
      <a style={{ fontSize: 20 }}>Главная</a>
    </Link>
    <Link route="/travels">
      <a style={{ fontSize: 20 }}>Галерея путешествий</a>
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
);

export default SideNav;
