import React, { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: 'post',
      url: '/api/login',
      data: { login, password: pass },
    });
    if (res.data.isAuth) {
      Router.push('/admin');
    } else if (res.data.error) {
      setError(res.data.error);
    }
  };

  const handleLogin = (e) => {
    setLogin(e.target.value);
    if (error) setError('');
  };
  const handlePass = (e) => {
    setPass(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit} className="loginFormBox">
        <input type="text" value={login} onChange={handleLogin} placeholder="Логин" />
        <input type="password" value={pass} onChange={handlePass} placeholder="Пароль" />
        <input
          type="submit"
          value="Войти"
          onClick={handleSubmit}
          style={login && pass ? { background: '#098B8C' } : undefined}
        />
        {error && <p style={{ position: 'absolute' }}>{error}</p>}
      </form>
    </div>
  );
};
export default Login;
