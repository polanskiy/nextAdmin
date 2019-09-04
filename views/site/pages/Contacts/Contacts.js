import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';

const Contacts = ({ page }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} />
    <p>
    Форма заказа вашего
    </p>
    <RequestForm />
  </div>
);

export default Contacts;
