import React from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const FAQ = ({ page }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <div className="contentMidWrapper">
      <div dangerouslySetInnerHTML={{ __html: xss(page.description.value, xssOptions) }} />
    </div>
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default FAQ;
