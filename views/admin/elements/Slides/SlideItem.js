import React from 'react';
import SelectImageArr from '../Editor/SelectImageArr';

const SlideItem = ({
  slide, updateData, data, index, slideList, setSlideList,
}) => {
  // const handleName = (e) => {
  //   const { value } = e.target;
  //   const newData = data.slides.map((item) => {
  //     const newItem = { ...item };
  //     if (newItem._id === slide._id) {
  //       newItem.name = value;
  //       return newItem;
  //     }
  //     return item;
  //   });
  //   setTravelData({ data: { ...newData, isFetching: false } });
  //   updateTravel(...newData);
  // };

  const handleSlides = (newSlides) => {
    const newData = { ...data, slides: newSlides };
    setSlideList(newSlides);
    updateData(newData);
  };

  const delSlide = () => {
    const newSlides = slideList.filter(item => item._id !== slide._id);
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
        key={slide._id}
        page={data}
        item={slide}
        handleItems={handleSlides}
        items={slideList}
      />
    </div>
  );
};

export default SlideItem;
