import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Slider = ({ slides }) => {
  const renderSlides = () => slides.map((item) => (
    <div
      className="sliderItem"
      key={item.id}
    >
      <img src={item.value} alt="" />
      {item.name && <p className="legend">{item.name}</p>}
    </div>
  ));

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={5000}
      statusFormatter={() => {}}
      emulateTouch
    >
      {renderSlides()}
    </Carousel>
  );
};

export default Slider;
