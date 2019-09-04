import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const Event = ({ page }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} />
    <p>
    Гарантирую индивидуальный подход к каждому клиенту и максимальное соответствие его запросам.
    </p>
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default Event;
