import React, { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('login');
    const res = await axios({
      method: 'post',
      url: '/api/login',
      data: { login, password: pass },
    });
    if (res.data.isAuth) {
      if (window) {
        window.localStorage.setItem('tokendasya', '123');
        Router.push('/admin');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
      <input type="text" value={pass} onChange={e => setPass(e.target.value)} />
      <input type="submit" value="Войти" onClick={handleSubmit} />
    </form>
  );
};
export default Login;
