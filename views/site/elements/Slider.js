import React from 'react';
import Slick from 'react-slick';
import Arr from '../../../static/images/icons/sliderAngle.svg';

const Slider = ({
  slides, className, dots, colorArr, slidesToShow, fade,
}) => {
  const renderSlides = () => slides.map(item => (
    <div
      className="sliderItem"
      key={item._id}
    >
      <img src={item.value} alt="" />

    </div>
  ));

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        role="presentation"
        className="nextArrow"
        onClick={onClick}
      >
        <Arr fill={colorArr} />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        role="presentation"
        className="prevArrow"
        onClick={onClick}
      >
        <Arr fill={colorArr} />
      </div>
    );
  };

  const slideToShow = slides.length >= 2 ? slidesToShow : 1;

  const settings = {
    customPaging() {
      return (
        <div className="sliderDot" />
      );
    },
    dots,
    infinite: true,
    speed: 1000,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className,
    fade,
  };

  return (
    <>
      <Slick {...settings}>
        {renderSlides()}
      </Slick>
    </>
  );
};

export default Slider;
