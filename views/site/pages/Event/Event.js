import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const Event = () => (
  <div>
    <Header title="Event" headerBg="/static/images/eventHeaderBg.jpg" />
    <p>
    Гарантирую индивидуальный подход к каждому клиенту и максимальное соответствие его запросам.
    </p>
    <RequestForm />
  </div>
);

export default Event;
