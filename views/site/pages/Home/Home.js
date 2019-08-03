import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const HomeAbout = dynamic({
  loader: () => import('./HomeAbout'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});

const Home = () => {
  const [renderAdv, setRenderAdv] = useState(false);
  const [renderForm, setRenderForm] = useState(false);

  const renderRequestForm = async () => {
    const { default: RequestForm } = await import('../../elements/RequestForm');
    setRenderForm(<RequestForm />);
  };

  const renderRequest = useCallback(renderRequestForm, []);


  const renderHomeAdvantages = async () => {
    const { default: HomeAdvantages } = await import('./HomeAdvantages');
    setRenderAdv(<HomeAdvantages renderRequest={renderRequest} />);
  };
  const renderAdvantages = useCallback(renderHomeAdvantages, []);

  return (
    <div className="homePageBox">
      <Header title="Индивидуальные путешествия" subTitle="с Дасей Суриковой" headerBg="/static/images/homeHeaderBg.jpg" />
      <HomeAbout renderHomeAdvantages={renderAdvantages} />
      {renderAdv || <p>LOADING ADVANTAGES</p>}
      {renderForm || <p>LOADING REQUEST FORM</p>}
    </div>
  );
};

export default Home;
