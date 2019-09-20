import React, { useState, useEffect } from 'react';
import Router from 'next/router';

const Auth = Component => (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.dir(document);
    const theCookies = document.cookie.split(';');
    const cookie = theCookies[0].split('=')[1];
    console.log('cookie', cookie);
    if (Router.pathname !== '/login' && !cookie) {
      Router.push('/login');
    } else if (Router.pathname === '/blogs') {
      setIsAuth(true);
    } else if (cookie) {
      setIsAuth(true);
    }
  }, []);

  return (
    <React.Fragment>
      {isAuth && <Component {...props} />}
    </React.Fragment>
  );
};
export default Auth;
