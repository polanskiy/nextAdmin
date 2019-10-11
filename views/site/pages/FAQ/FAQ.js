import React from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';
import Header from '../../elements/Header';

const FAQ = ({ page }) => (
  <div className="faqBox">
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <div className="contentMidWrapper">
      <div dangerouslySetInnerHTML={{ __html: xss(page.description.value, xssOptions) }} />
    </div>
  </div>
);

export default FAQ;
