import React from 'react';
import axios from 'axios';
import SelectImageArr from '../../../../../elements/Editor/SelectImageArr';

const SlideItem = ({
  slide, chunkData, setData, index, data,
}) => {
  const handleSlides = (newSlides) => {
    setData(newSlides, 'slides', true);
  };

  const handleName = (e) => {
    const { value } = e.target;
    const newSlides = chunkData.slides.map((item) => {
      if (item.id === slide.id) {
        const newItem = { ...item };
        newItem.name = value;
        return newItem;
      }
      return item;
    });
    setData(newSlides, 'slides');
  };

  const delSlide = () => {
    const newSlides = chunkData.slides.filter((item) => {
      if (item.id !== slide.id) {
        return item;
      }
      axios({
        method: 'delete',
        url: `/api/images/${data._id}`,
        data: { filename: item.value.split(`${data._id}/`)[1] },
      });
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
        name={data._id}
        item={slide}
        handleItems={handleSlides}
        items={chunkData.slides}
      />
    </div>
  );
};

export default SlideItem;
