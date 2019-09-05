import React from 'react';
import SlideItem from './SlideItem';

const Slides = ({
  data, updateData, setSlideList, slideList,
}) => {
  const addSlide = async () => {
    const newSlide = {
      name: '',
      value: '',
    };
    const slides = [...slideList];
    slides.push(newSlide);
    await updateData({ ...data, slides });
    setSlideList(slides);
  };

  const renderSlides = () => slideList.map((slide, i) => (
    <SlideItem
      key={slide._id}
      setSlideList={setSlideList}
      slide={slide}
      data={data}
      slideList={slideList}
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
