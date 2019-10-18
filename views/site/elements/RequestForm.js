import React, { useState } from 'react';
import request from '../../../utils/request';
import Notification from './Notification/Notification';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [isOpen, toggleOpen] = useState(false);
  const [notif, setNotif] = useState('');
  const [timer, setTimer] = useState(null);
  const inputRef = React.createRef(null);

  const handleMail = async (e) => {
    const data = {
      title: 'Вопрос',
      phone: number,
      name,
      mail,
      text,
    };

    if (name && number && !inputRef.current.value) {
      e.preventDefault();
      try {
        await request('/api/mail', 'post', data);
        setNotif('Вам скоро позвонят!');
        toggleOpen(true);
        setName('');
        setMail('');
        setNumber('');
        setText('');
      } catch (e) {
        setNotif('Что-то пошло не так...\nПовторите попытку');
        toggleOpen(true);
      }
      clearTimeout(timer);
      const newTimer = setTimeout(() => {
        toggleOpen(false);
      }, 3000);
      setTimer(newTimer);
    }
  };

  const closeNotif = () => {
    toggleOpen(false);
    clearTimeout(timer);
  };


  return (
    <div className="requestFormBox">
      <div className="requestFormContainer">
        <p className="requestFormTitle">У вас есть вопросы?</p>
        <form className="requestForm">
          <input ref={inputRef} type="hidden" value="" />
          <label htmlFor="name" className="requestFormLabel">
            <span>Как Вас зовут ?</span>
            <input required type="text" name="name" value={name.trim() ? name : name.trim()} onChange={(e) => { setName(e.target.value); }} />
          </label>
          <label htmlFor="name" className="requestFormLabel">
            <span>Ваш e-mail</span>
            <input type="email" name="email" value={mail} onChange={(e) => { setMail(e.target.value); }} />
          </label>
          <label htmlFor="name" className="requestFormLabel">
            <span>Ваш номер телефона</span>
            <input required type="text" name="phone" value={number.trim() ? number : number.trim()} onChange={(e) => setNumber(e.target.value)} />
          </label>
          <label htmlFor="message" className="requestFormLabel">
            <span>Ваше сообщение</span>
            <textarea rows="5" name="message" value={text} onChange={(e) => { setText(e.target.value); }} />
          </label>
          <button type="submit" className="btn" onClick={handleMail}>Отправить Вопрос</button>
        </form>
        <footer className="footerBox">
          <p>Дася Сурикова (с) - 2019 - Все права защищены - Политика конфиденциальности</p>
        </footer>
      </div>
      <Notification title={notif} isOpen={isOpen} toggleOpen={closeNotif} />
    </div>
  );
};

export default RequestForm;
