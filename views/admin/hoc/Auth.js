import React, { useState, useEffect } from 'react';
import Router from 'next/router';

const Auth = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const theCookies = document.cookie.split(';');
    const cookie = theCookies[0].split('=')[1];
    if (Router.pathname !== '/dlogin' && !cookie) {
      Router.push('/dlogin');
    } else if (Router.pathname === '/blogs') {
      setIsAuth(true);
    } else if (cookie) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {isAuth && <Component {...props} />}
    </>
  );
};
export default Auth;
