import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import Slider from './Slider';
import { Link } from '../../../routes';

const SmallSlider = ({
  text, slides, link, textLink, sliderBg,
}) => (
  <div className="smallSliderBox" style={{ backgroundImage: `url(${sliderBg})` }}>
    <div className="smallSliderText">
      <div dangerouslySetInnerHTML={{ __html: xss(text, xssOptions) }} />
      <Link route={link}>
        <a className="orngBtn">{textLink}</a>
      </Link>
    </div>
    <div className="smallSlider">
      {slides.length
      && (
      <Slider
        slides={slides}
        className="aboutSlider"
        dots={false}
        colorArr="#fff"
        slidesToShow={1}
        fade
      />
      )}
    </div>
  </div>
);

export default SmallSlider;
