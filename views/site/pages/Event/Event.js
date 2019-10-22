import React from 'react';
import Header from '../../elements/Header';
import BlockAbout from '../../elements/BlockAbout';
import ColorBox from '../../elements/ColorBox';
import SmallSlider from '../../elements/SmallSlider';

const Event = ({ page }) => (
  <div className="eventBox">
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <div className="contentMidWrapper">
      <p className="eventTitle">
Гарантирую
        {' '}
        <span>индивидуальный подход к каждому клиенту</span>
        <br />
и максимальное соответствие его запросам.
      </p>
      <div className="eventIconBox">
        <div className="eventIconItemBox">
          <div className="eventIcon">
            <img src="/static/images/icons/birthday.svg" alt="" />
          </div>
          <p>День Рождения</p>
        </div>
        <div className="eventIconItemBox">
          <div className="eventIcon">
            <img src="/static/images/icons/corporative.svg" alt="" />
          </div>
          <p>Корпоративы</p>
        </div>
        <div className="eventIconItemBox">
          <div className="eventIcon">
            <img src="/static/images/icons/master.svg" alt="" />
          </div>
          <p>Мастер-классы</p>
        </div>
        <div className="eventIconItemBox">
          <div className="eventIcon">
            <img src="/static/images/icons/teambuilding.svg" alt="" />
          </div>
          <p>Тимбилдинг</p>
        </div>
        <div className="eventIconItemBox">
          <div className="eventIcon">
            <img src="/static/images/icons/graduiation.svg" alt="" />
          </div>
          <p>Выпускной</p>
        </div>
      </div>
    </div>
    <BlockAbout
      btnLink="/contacts"
      btnText="Закать праздник"
      aboutText={page.about.value}
      aboutImg={page.images.about}
      orngBtn
    />
    <ColorBox stars text={page.description.value} colorBg={page.images.description} />
    <SmallSlider text={page.slider.value} slides={page.slides} link="/contacts" textLink="Заказать праздник" sliderBg={page.images.slider} />
  </div>
);

export default Event;
