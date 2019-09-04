import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const FAQ = ({ page }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} />
    <div className="contentMidWrapper">
      {page.description.value}
    </div>
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default FAQ;
