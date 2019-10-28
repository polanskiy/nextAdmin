import React from 'react';
import axios from 'axios';
import SelectImageArr from '../../../elements/Editor/SelectImageArr';

const SlideItem = ({
  slide, updateData, data, setData, index,
}) => {
  const handleSlides = (newSlides) => {
    const newData = { ...data, slides: newSlides };
    setData({ data: { ...newData, isFetching: false } });
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
        <button type="button" onClick={delSlide}>Удалить</button>
      </div>
      {/* <p>текст:</p>
      <input type="text" value={slide.name} onChange={handleName} /> */}
      <SelectImageArr
        key={slide.id}
        page={data}
        item={slide}
        handleItems={handleSlides}
        items={data.slides}
      />
    </div>
  );
};

export default SlideItem;
