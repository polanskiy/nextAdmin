import React, { useContext } from 'react';
import TemplateCtx from '../../TemplateCtx';
import SlideItem from './SlideItem';
import randomId from '../../../../../../../utils/randomId';

const Slider = ({ chunkData }) => {
  const { setArticleData, data, updateArticle } = useContext(TemplateCtx);
  const addSlide = async () => {
    const newSlide = {
      name: '',
      value: '',
      id: randomId(6),
    };
    const slides = [...chunkData.slides];
    slides.push(newSlide);
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.slides = slides;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
  };

  const handleSlideImages = (newSlides) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.slides = newSlides;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
    updateArticle({ ...data, elements: newElements });
  };

  const renderSlides = () => chunkData.slides.map((slide, i) => (
    <SlideItem
      key={slide.id}
      setData={handleSlideImages}
      slide={slide}
      data={data}
      chunkData={chunkData}
      index={i}
    />
  ));

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Карусель:</h1>
      <div className="adminBtnsBox">
        <button type="button" onClick={addSlide} className="adminBtn">Добавить слайд</button>
      </div>
      <div className="flexElements">
        {renderSlides()}
      </div>
    </div>
  );
};

export default Slider;
