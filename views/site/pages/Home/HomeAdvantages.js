import React from 'react';
import xss from 'xss';

const options = {
  whiteList: {
    p: ['style'],
    span: ['style'],
    br: [],
    strong: [],
    ul: [],
    li: [],
  },
};

const HomeAdvantages = ({ descriptionText, descriptionImg }) => (
  <div className="homeAdvantagesBox" style={{ background: `url(${descriptionImg})` }}>
    <div className="contentMidWrapper">
      <div className="colorBox">
        <div dangerouslySetInnerHTML={{ __html: xss(descriptionText, options) }} />
      </div>
    </div>
  </div>
);

export default React.memo(HomeAdvantages);
