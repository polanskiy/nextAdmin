import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';

const Auth = (Component) => (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = async () => {
    const res = await axios({
      method: 'get',
      url: '/api/auth/',
    });
    if (Router.pathname !== '/dlogin' && !res.data.isAuth) {
      Router.push('/dlogin');
    } else if (Router.pathname === '/blogs') {
      setIsAuth(true);
    } else {
      setIsAuth(true);
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <>
      {isAuth && <Component {...props} />}
    </>
  );
};
export default Auth;
