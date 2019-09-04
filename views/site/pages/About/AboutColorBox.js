import React from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';

const AboutColorBox = ({ aboutText, aboutImg }) => (
  <div className="aboutColorBox" style={{ background: `url(${aboutImg})` }}>
    <div className="contentMidWrapper">
      <div className="colorBox">
        <div dangerouslySetInnerHTML={{ __html: xss(aboutText, xssOptions) }} />
      </div>
    </div>
  </div>
);

export default AboutColorBox;
