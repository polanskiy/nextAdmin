import React from 'react';
import axios from 'axios';
import SelectImageArr from '../../../elements/Editor/SelectImageArr';

const SlideItem = ({
  slide, updateData, data, index, setTravelData,
}) => {
  const handleName = (e) => {
    const { value } = e.target;
    const newData = data.slides.map((item) => {
      if (item.id === slide.id) {
        const newItem = { ...item };
        newItem.name = value;
        return newItem;
      }
      return item;
    });
    setTravelData({ data: { ...data, slides: newData }, isFetching: false });
  };

  const handleSlides = (newSlides) => {
    const newData = { ...data, slides: newSlides };
    setTravelData({ data: newData, isFetching: false });
    updateData(newData);
  };

  const delSlide = () => {
    const newSlides = data.slides.filter((item) => item.id !== slide.id);
    axios({
      method: 'delete',
      url: `/api/images/${data._id}`,
      data: { filename: slide.value.split(`${data._id}/`)[1] },
    });
    handleSlides(newSlides);
  };

  return (
    <div>
      <div>
        <p>
        Слайд-
          {`${index + 1}`}
        :
        </p>
        <button type="button" className="adminBtn adminDelBtn" onClick={delSlide}>Удалить</button>
      </div>
      <p>текст:</p>
      <input type="text" value={slide.name} onChange={handleName} />
      <SelectImageArr
        key={slide.id}
        page={data}
        item={slide}
        handleItems={handleSlides}
        items={data.slides}
        name={data._id}
      />
    </div>
  );
};

export default SlideItem;
