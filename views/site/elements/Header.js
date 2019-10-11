import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';
import SearchForm from './SearchForm';

const Header = ({
  title = 'заголовок отсутствует', subtitle = '', headerBg, noSearch,
}) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="headerBox" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%), url(${headerBg})` }}>
      <div className="headerLogoNavBox">
        <div className="logoBox">
          <Link route="/">
            <a>
              <img src="/static/images/logo.png" alt="logo" />
            </a>
          </Link>
          <a href="tel:+ 7 (905) 524 16 10" className="headerPhone">+ 7 (905) 524 16 10</a>
        </div>
        <div className="headerContactBox">
          <a href="tel:+ 7 (905) 524 16 10">
            <img src="/static/images/icons/phone.svg" alt="logo" />
          </a>
          <a href="https://instagram.com/dasya_travel/" target="_blank" rel="noopener noreferrer">
            <img src="/static/images/icons/inst.svg" alt="logo" />
          </a>
          <a href="https://www.facebook.com/dasya.surikovatravel" target="_blank" rel="noopener noreferrer">
            <img src="/static/images/icons/fb.svg" alt="logo" />
          </a>
        </div>
      </div>
      <div className="headerContentBox">
        <div dangerouslySetInnerHTML={{ __html: xss(title, xssOptions) }} className="headerTitle" />
        <div dangerouslySetInnerHTML={{ __html: xss(subtitle, xssOptions) }} className="headerSubTitle" />
        {!noSearch
          && (
          <SearchForm />
          )}
      </div>
      <div className="downArr" onClick={handleScroll}>
        <img src="/static/images/icons/downArr.svg" alt="down arrow" />
      </div>
    </div>
  );
};

export default React.memo(Header);
