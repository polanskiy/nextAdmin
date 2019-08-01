import React from 'react';

const HomeAbout = () => (
  <div className="homeAboutBox">
    <div className="contentMidWrapper">
      <div className="homeAboutContentBox">
        <div className="homeAboutTextBox">
          <p className="homeAboutTitle">
            ваш
            {' '}
            <strong>персональный</strong>
            <br />
            <span>турагент</span>
          </p>
          <p className="homeAboutText">
            Я помогу подобрать для Вас оптимальный туристический маршрут любой сложности,  качественно организую подходящий Вам вариант трансфера в выбранную страну, обеспечу бронирование отеля, апартаментов, виллы и т.д.,  в соответствии с вашими пожеланиями, сделаю расчет стоимости вашего путешествия.
            <br />
            Во время Вашей поездки я нахожусь на связи, Вы можете звонить и консультироваться со мной по любым вопросам Вашего отдыха.
          </p>
          <button type="button" className="btn">Узнать больше</button>
        </div>
        <div className="homeAboutImgBox">
          <img src="/static/images/dasya.png" alt="дася сурикова туроператор" />
        </div>
      </div>
    </div>
  </div>
);

export default HomeAbout;
