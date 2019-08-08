import React from 'react';

const AboutColorBox = ({ renderNext }) => {
  const bg = new Image();
  bg.src = '/static/images/aboutColorBoxBg.jpg';
  bg.onload = renderNext;

  return (
    <div className="aboutColorBox" style={bg && { background: `url(${bg.src})` }}>
      <div className="contentMidWrapper">
        <div className="colorBox">
          <p className="title">Что я могу сделать для Вас?</p>
          <p className="aboutPageColorText">
          Я помогу подобрать для Вас оптимальный туристический маршрут любой сложности,  качественно организую подходящий Вам вариант трансфера в выбранную страну, обеспечу бронирование отеля, апартаментов, виллы и т.д.,  в соответствии с вашими пожеланиями, сделаю расчет стоимости вашего путешествия.
            <br />
            <br />
          Во время Вашей поездки я нахожусь на связи, Вы можете звонить и консультироваться со мной по любым вопросам Вашего отдыха.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutColorBox;
