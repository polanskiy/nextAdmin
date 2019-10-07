import React from 'react';
import SlideItem from './SlideItem';
import randomId from '../../../../../utils/randomId';

const Slides = ({
  data, updateData, setTravelData,
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
    setTravelData({ data: { ...data, slides }, isFetching: false });
  };

  const renderSlides = () => data.slides.map((slide, i) => (
    <SlideItem
      key={slide.id}
      setTravelData={setTravelData}
      slide={slide}
      data={data}
      updateData={updateData}
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
