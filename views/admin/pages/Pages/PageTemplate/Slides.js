import React from 'react';
import SlideItem from './SlideItem';
import randomId from '../../../../../utils/randomId';

const Slides = ({
  data, updateData, fetchData, setData,
}) => {
  const addSlide = async () => {
    const newSlide = {
      name: '',
      value: '',
      id: randomId(6),
    };
    const slides = [...data.slides];
    slides.push(newSlide);
    await updateData({ ...data, slides });
    fetchData();
  };

  const renderSlides = () => data.slides.map((slide, i) => (
    <SlideItem
      key={slide.id}
      setData={setData}
      slide={slide}
      data={data}
      updateTravel={updateData}
      index={i}
    />
  ));

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Слайды:</h1>
      <div className="adminBtnsBox">
        <button type="button" onClick={addSlide} className="adminBtn">Добавить слайд</button>
      </div>
      <div className="flexElements">
        {renderSlides()}
      </div>
    </div>
  );
};

export default Slides;
