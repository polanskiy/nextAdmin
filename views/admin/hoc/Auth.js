import React, { useState, useEffect } from 'react';
import Router from 'next/router';

const Auth = Component => (props) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem('tokendasya');
    if (Router.pathname !== '/login' && !token) {
      Router.push('/login');
    } else if (Router.pathname === '/blogs') {
      setIsAuth(true);
    } else if (token) {
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
