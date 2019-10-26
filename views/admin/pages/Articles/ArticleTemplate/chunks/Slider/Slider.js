import React, { useContext } from 'react';
import TemplateCtx from '../../TemplateCtx';
import SlideItem from './SlideItem';
import Gradient from '../../../../../elements/Settings/Gradient';
import SelectImage from '../../../../../elements/Settings/SelectImage';
import Checkbox from '../../../../../elements/Settings/Checkbox';
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

  const handleEl = (newVal, el) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem[el] = newVal;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
    if (el === 'image' || el === 'slides') updateArticle({ ...data, elements: newElements });
  };


  const renderSlides = () => chunkData.slides.map((slide, i) => (
    <SlideItem
      key={slide.id}
      setData={(val) => handleEl(val, 'slides')}
      slide={slide}
      data={data}
      chunkData={chunkData}
      index={i}
    />
  ));

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Карусель:</h1>
      <div className="adminSettingsBox">
        <Gradient background={chunkData.gradient} handleGradient={(val) => handleEl(val, 'gradient')} />
        <SelectImage
          page={chunkData}
          image={chunkData.image}
          handleImages={(val) => handleEl(val, 'image')}
          name={data._id}
          thumb={false}
        />
        <Checkbox data={chunkData.repeat === 'repeat'} setData={(val) => handleEl(val ? 'repeat' : 'no-repeat', 'repeat')} label="Повтор изображения" />
      </div>
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
