import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';

const BlockAbout = ({
  aboutText, aboutImg, orngBtn, btnLink, btnText,
}) => (
  <div className="whiteBg">
    <div className="contentMidWrapper">
      <div className="homeAboutContentBox">
        <div className="homeAboutTextBox">
          <div dangerouslySetInnerHTML={{ __html: xss(aboutText, xssOptions) }} />
          {orngBtn ? (
            <Link route={btnLink}>
              <button type="button" className="orngBtn">{btnText}</button>
            </Link>
          )
            : (
              <Link route={btnLink}>
                <button type="button" className="btn">{btnText}</button>
              </Link>
            )
          }
        </div>
        <div className="homeAboutImgBox">
          <img src={aboutImg} alt="дася сурикова туроператор" />
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(BlockAbout);
