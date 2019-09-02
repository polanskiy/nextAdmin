import React from 'react';
import Slick from 'react-slick';

const Slider = ({ slides }) => {
  const renderSlides = () => slides.map(item => (
    <div
      className="sliderItem"
      key={item._id}
    >
      <img src={item.value} alt="" />

    </div>
  ));

  const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        role="presentation"
        className="nextArrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        role="presentation"
        className="prevArrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };

  const slideToShow = slides.lenght >= 3 ? 3 : 1;

  const settings = {
    customPaging() {
      return (
        <div className="sliderDot" />
      );
    },
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h2> Multiple items </h2>
      <Slick {...settings}>
        {renderSlides()}
      </Slick>
    </div>
  );
};

export default Slider;
