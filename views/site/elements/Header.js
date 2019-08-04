import React from 'react';
// import Nav from './Nav';
import { Link } from '../../../routes';

const Header = ({ title, subTitle, headerBg }) => {
  console.log('header');
  return (
    <div className="headerBox">
      <img className="headerBg" src={headerBg} alt="индивидуальный туроператор" />
      <div className="headerPositionBox">
        <div className="headerLogoNavBox">
          <div className="logoBox">
            <Link route="/">
              <a style={{ fontSize: 20 }}>
                <img src="/static/images/logo.png" alt="logo" />
              </a>
            </Link>
            <a href="tel:+ 7 (905) 524 16 10">+ 7 (905) 524 16 10</a>
          </div>
          <div className="headerContactBox">
            <a style={{ fontSize: 20 }}>
              <img src="/static/images/icons/phone.svg" alt="logo" />
            </a>
            <a style={{ fontSize: 20 }}>
              <img src="/static/images/icons/inst.svg" alt="logo" />
            </a>
            <a style={{ fontSize: 20 }}>
              <img src="/static/images/icons/fb.svg" alt="logo" />
            </a>
          </div>
          {/* <Nav /> */}
        </div>
        <div className="headerContentBox">
          <h1 className="headerTitle">
            {title}
            <br />
            <span>{subTitle}</span>
          </h1>
          <div className="customFormBox">подобрать</div>
          <div className="downArr">
            <img src="/static/images/icons/downArr.svg" alt="down arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
