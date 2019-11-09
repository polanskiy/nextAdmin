import React from 'react';
import xss from 'xss';
import { Carousel } from 'react-responsive-carousel';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';

const SmallSlider = ({
  text, slides, link, textLink, sliderBg,
}) => {
  const renderSlides = () => slides.map((item) => (
    <div
      className="sliderItem"
      key={item._id}
    >
      <img src={item.value} alt="" />
      {item.name && <p className="legend">{item.name}</p>}
    </div>
  ));
  return (
    <div className="smallSliderBox" style={{ backgroundImage: `url(${sliderBg})` }}>
      <div className="smallSliderText">
        <div dangerouslySetInnerHTML={{ __html: xss(text, xssOptions) }} />
        <Link route={link}>
          <a className="orngBtn">{textLink}</a>
        </Link>
      </div>
      <div className="smallSlider">
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
      </div>
    </div>
  );
};

export default SmallSlider;
