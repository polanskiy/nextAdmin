import React from 'react';
import xss from 'xss';

const options = {
  whiteList: {
    p: ['style'],
    span: ['style'],
    br: [],
    strong: [],
  },
};
const BlockAbout = ({ aboutText, aboutImg }) => {
  console.log('about', aboutImg);
  return (
    <div className="whiteBg">
      <div className="contentMidWrapper">
        <div className="homeAboutContentBox">
          <div className="homeAboutTextBox">
            <div dangerouslySetInnerHTML={{ __html: xss(aboutText, options) }} />
            <button type="button" className="btn">Узнать больше</button>
          </div>
          <div className="homeAboutImgBox">
            <img src={aboutImg} alt="дася сурикова туроператор" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlockAbout);
