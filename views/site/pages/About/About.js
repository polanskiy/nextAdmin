import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});


const About = ({ pages }) => {
  const [colorBox, setColorBox] = useState(false);
  const [sliderBox, setSliderBox] = useState(false);


  const renderSlider = useCallback(async () => {
    const { default: Slider } = await import('../../elements/Slider');
    setSliderBox(<Slider />);
  }, []);

  const renderColorBox = useCallback(async () => {
    const { default: AboutColorBox } = await import('./AboutColorBox');
    setColorBox(<AboutColorBox renderNext={renderSlider} />);
  }, []);

  console.log('pages, ', pages);
  return (
    <div>
      <Header title={pages[0].value} subTitle="Дася Сурикова" headerBg="/static/images/aboutHeaderBg.jpg" noSearch />
      <BlockAbout renderNext={renderColorBox} />
      {colorBox || <p>LOADING COLOR BOX</p>}
      {sliderBox || <p>LOADING SLIDER BOX</p>}

    </div>
  );
};

export default About;
