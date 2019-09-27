import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';
import SearchForm from './SearchForm';

const Header = ({ title = 'заголовок отсутствует', headerBg, noSearch }) => (
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
        <div dangerouslySetInnerHTML={{ __html: xss(title, xssOptions) }} />
        {!noSearch
       && (
       <SearchForm />
       )
        }
        <div className="downArr">
          <img src="/static/images/icons/downArr.svg" alt="down arrow" />
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(Header);
