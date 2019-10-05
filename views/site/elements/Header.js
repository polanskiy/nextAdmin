import React, { useState, useEffect } from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';
import SearchForm from './SearchForm';

const Header = ({ title = 'заголовок отсутствует', headerBg, noSearch }) => {
  const [width, setWidth] = useState('');

  const handleSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <div className="headerBox" style={{ backgroundImage: width <= 992 ? `url(${headerBg})` : 'transparent' }}>
      {width > 992 && <img className="headerBg" src={headerBg} alt="индивидуальный туроператор" /> }
      <div className="headerPositionBox">
        <div className="headerLogoNavBox">
          <div className="logoBox">
            <Link route="/">
              <a style={{ fontSize: 20 }}>
                <img src="/static/images/logo.png" alt="logo" />
              </a>
            </Link>
            <a href="tel:+ 7 (905) 524 16 10" className="headerPhone">+ 7 (905) 524 16 10</a>
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
        </div>
        <div className="headerContentBox">
          <div dangerouslySetInnerHTML={{ __html: xss(title, xssOptions) }} className="headerTitle" />
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
};

export default React.memo(Header);
