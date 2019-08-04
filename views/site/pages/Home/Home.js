import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});

const Home = () => {
  const [renderAdv, setRenderAdv] = useState(false);
  const [renderForm, setRenderForm] = useState(false);

  const renderRequestForm = useCallback(async () => {
    const { default: RequestForm } = await import('../../elements/RequestForm');
    setRenderForm(<RequestForm />);
  }, []);

  const renderHomeAdvantages = useCallback(async () => {
    const { default: HomeAdvantages } = await import('./HomeAdvantages');
    setRenderAdv(<HomeAdvantages renderNext={renderRequestForm} />);
  }, []);

  return (
    <div className="homePageBox">
      <Header title="Индивидуальные путешествия" subTitle="с Дасей Суриковой" headerBg="/static/images/homeHeaderBg.jpg" />
      <BlockAbout renderNext={renderHomeAdvantages} />
      {renderAdv || <p>LOADING ADVANTAGES</p>}
      {renderForm || <p>LOADING REQUEST FORM</p>}
    </div>
  );
};

export default Home;
