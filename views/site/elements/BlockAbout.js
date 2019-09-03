import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';

const BlockAbout = ({ aboutText, aboutImg }) => (
  <div className="whiteBg">
    <div className="contentMidWrapper">
      <div className="homeAboutContentBox">
        <div className="homeAboutTextBox">
          <div dangerouslySetInnerHTML={{ __html: xss(aboutText, xssOptions) }} />
          <button type="button" className="btn">Узнать больше</button>
        </div>
        <div className="homeAboutImgBox">
          <img src={aboutImg} alt="дася сурикова туроператор" />
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(BlockAbout);
