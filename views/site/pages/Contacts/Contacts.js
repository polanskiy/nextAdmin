import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const Contacts = () => (
  <div>
    <Header title="Контакты" headerBg="/static/images/blogHeaderBg.jpg" />
    <p>
    Форма заказа вашего
    </p>
    <RequestForm />
  </div>
);

export default Contacts;
