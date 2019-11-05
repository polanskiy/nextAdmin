import React, { useCallback } from 'react';
import SlideItem from './SlideItem';
import randomId from '../../../../utils/randomId';

const Slides = ({
  data, updateData, setPageData,
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
    setPageData({ data: { ...data, slides }, isFetching: false });
  };

  const handleName = (e, id) => {
    const { value } = e.target;
    const slides = data.slides.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        newItem.name = value;
        return newItem;
      }
      return item;
    });
    setPageData({ data: { ...data, slides }, isFetching: false });
  };

  const handleSlides = (newSlides) => {
    const newData = { ...data, slides: newSlides };
    setPageData({ data: newData, isFetching: false });
    updateData(newData);
  };

  const delSlide = (id) => {
    const newSlides = data.slides.filter((item) => item.id !== id);
    handleSlides(newSlides);
  };

  const renderSlides = useCallback(data.slides.map((slide, i) => (
    <SlideItem
      key={slide.id}
      setPageData={setPageData}
      slide={slide}
      data={data}
      updateData={updateData}
      handleName={handleName}
      delSlide={delSlide}
      index={i}
    />
  )), [data]);

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Слайды:</h1>
      <div className="adminBtnsBox">
        <button type="button" onClick={addSlide} className="adminBtn">Добавить слайд</button>
      </div>
      <div className="flexElements">
        {renderSlides}
      </div>
    </div>
  );
};

export default Slides;
