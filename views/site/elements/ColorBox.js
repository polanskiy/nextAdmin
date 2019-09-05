import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';

const ColorBox = ({ colorBg, text }) => (
  <div className="aboutColorBox">
    <img className="headerBg" src={colorBg} alt="индивидуальный туроператор" />
    <div className="colorPositionBox">
      <div className="contentMidWrapper">
        <div className="colorBox">
          <div dangerouslySetInnerHTML={{ __html: xss(text, xssOptions) }} />
        </div>
      </div>
    </div>
  </div>
);

export default ColorBox;
