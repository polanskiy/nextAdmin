import React from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';

const HomeAdvantages = ({ descriptionText, descriptionImg }) => (
  <div className="homeAdvantagesBox" style={{ background: `url(${descriptionImg})` }}>
    <div className="contentMidWrapper">
      <div className="colorBox">
        <div dangerouslySetInnerHTML={{ __html: xss(descriptionText, xssOptions) }} />
      </div>
    </div>
  </div>
);

export default React.memo(HomeAdvantages);
