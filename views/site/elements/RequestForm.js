import React from 'react';

const RequestForm = ({ footerImg }) => (
  <div className="requestFormBox">
    <img className="headerBg" src={footerImg} alt="индивидуальный туроператор" />
    <div className="headerPositionBox">
      <div className="requestFormContainer">
        <p className="requestFormTitle">У вас есть вопросы?</p>
        <form className="requestForm">
          <label htmlFor="name" className="requestFormLabel">
            <span>Как Вас зовут ?</span>
            <input type="text" name="name" />
          </label>
          <label htmlFor="name" className="requestFormLabel">
            <span>Ваш e-mail</span>
            <input type="email" name="email" />
          </label>
          <label htmlFor="name" className="requestFormLabel">
            <span>Ваш номер телефона</span>
            <input type="text" name="phone" />
          </label>
          <label htmlFor="message" className="requestFormLabel">
            <span>Ваше сообщение</span>
            <textarea rows="5" name="message" />
          </label>
          <button type="button" className="btn">Отправить Вопрос</button>
        </form>
        <footer className="footerBox">
          <p>Дася Сурикова (с) - 2019 - Все права защищены - Политика конфиденциальности</p>
        </footer>
      </div>
    </div>
  </div>
);

export default RequestForm;
