import React, { useState, useEffect } from 'react';
import Router from 'next/router';

const Auth = Component => (props) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (Router.pathname !== '/login') {
      Router.push('/login');
    } else if (Router.pathname === '/blogs') {
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
