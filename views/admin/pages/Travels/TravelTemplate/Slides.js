import React from 'react';
import SlideItem from './SlideItem';

const Slides = ({
  data, setTravelData, updateTravel, fetchTravelData,
}) => {
  const addSlide = async () => {
    const newSlide = {
      name: '',
      value: '',
    };
    const slides = [...data.slides];
    slides.push(newSlide);
    await updateTravel({ ...data, slides });
    fetchTravelData();
  };

  const renderSlides = () => data.slides.map((slide, i) => (
    <SlideItem
      key={slide._id}
      setTravelData={setTravelData}
      slide={slide}
      data={data}
      updateTravel={updateTravel}
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
