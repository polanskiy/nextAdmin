import React from 'react';
import xss from 'xss';
import { Link } from '../../../routes';

const options = {
  whiteList: {
    p: ['style'],
    span: ['style'],
    br: ['style'],
  },
};
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
        <div dangerouslySetInnerHTML={{ __html: xss(title, options) }} />
        {!noSearch
       && (
       <div className="contentWrapper">
         <div className="customFormBox">
           <label htmlFor="way" className="way">
             <input className="customFormItem" placeholder="Направление" />
           </label>
           <label htmlFor="rest" className="rest">
             <input className="customFormItem" placeholder="Тип отдыха" />
           </label>
           <label htmlFor="budget" className="budget">
             <input className="customFormItem" placeholder="Бюджет" />
           </label>
           <div className="customFormItem customFormSearchItem">
             <div className="customFormItemBtn"><img src="/static/images/icons/plus.svg" alt="" /></div>
             <div className="customFormItemBtn"><img src="/static/images/icons/search.svg" alt="" /></div>
             <div className="customFormItemBtn customSearchBtn">подобрать</div>
           </div>
         </div>
       </div>
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
