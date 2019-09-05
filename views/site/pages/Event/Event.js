import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';
import BlockAbout from '../../elements/BlockAbout';
import ColorBox from '../../elements/ColorBox';
import SmallSlider from '../../elements/SmallSlider';

const Event = ({ page }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <div className="contentMidWrapper">
      <p>Гарантирую индивидуальный подход к каждому клиенту и максимальное соответствие его запросам.</p>
      <div>
        <img src="/static/images/icons/eventIcon.jpg" alt="" />
      </div>
    </div>
    <BlockAbout aboutText={page.about.value} aboutImg={page.images.about} orngBtn />
    <ColorBox text={page.description.value} colorBg={page.images.description} />
    <SmallSlider text={page.slider.value} slides={page.slides} link="/event" textLink="Заказать праздник" sliderBg={page.images.slider} />
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default Event;
