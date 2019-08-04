import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const TravelsList = dynamic({
  loader: () => import('../../elements/TravelsList'),
  loading: () => <p>LOADING TravelsList</p>,
  ssr: false,
});

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING BlockAbout</p>,
  ssr: false,
});

const Travels = () => {
  const [requestForm, setRequestForm] = useState(false);

  const renderRequestForm = useCallback(async () => {
    const { default: RequestForm } = await import('../../elements/RequestForm');
    setRequestForm(<RequestForm />);
  }, []);

  return (
    <div className="travelsBox">
      <Header title="Галерея путешествий" headerClass="headerBox_travels" headerBg="/static/images/travelsHeaderBg.jpg" />
      <TravelsList />
      <BlockAbout renderNext={renderRequestForm} />
      {requestForm || <p>LOADING REQUEST FORM</p>}
    </div>
  );
};

export default Travels;
