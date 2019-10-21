import React from 'react';
import { Link } from '../routes';

const Error = () => (
  <div className="errorBox">
    <p>Такой страницы нет :(</p>
    <Link route="/">
      <a className="btn">
        Перейти на главную
      </a>
    </Link>
  </div>
);

export default Error;
