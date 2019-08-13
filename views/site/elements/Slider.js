import React from 'react';
import Slick from 'react-slick';

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <Slick {...settings}>
        <div className="sliderItem">
          <h3>1</h3>
        </div>
        <div className="sliderItem">
          <h3>2</h3>
        </div>
        <div className="sliderItem">
          <h3>3</h3>
        </div>
        <div className="sliderItem">
          <h3>4</h3>
        </div>
        <div className="sliderItem">
          <h3>5</h3>
        </div>
        <div className="sliderItem">
          <h3>6</h3>
        </div>
      </Slick>
    </div>
  );
};

export default Slider;
