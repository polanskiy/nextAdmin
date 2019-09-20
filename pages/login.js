import React, { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: 'post',
      url: '/api/login',
      data: { login, password: pass },
    });
    if (res.data.isAuth) {
      console.log('kek');
      Router.push('/admin');
    }
  };

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit} className="loginFormBox">
        <input type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder="Логин" />
        <input type="text" value={pass} onChange={e => setPass(e.target.value)} placeholder="Пароль" />
        <input
          type="submit"
          value="Войти"
          onClick={handleSubmit}
          style={login && pass ? { background: '#098B8C' } : undefined}
        />
      </form>
    </div>
  );
};
export default Login;
