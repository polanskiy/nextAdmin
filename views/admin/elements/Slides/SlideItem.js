import React from 'react';
import SelectImageArr from '../Editor/SelectImageArr';

const SlideItem = ({
  slide, data, index, delSlide, handleSlides, handleName,
}) => (
  <div>
    <div>
      <p>
        Слайд-
        {`${index + 1}`}
        :
      </p>
      <button type="button" className="adminBtn adminDelBtn" onClick={() => delSlide(slide.id)}>Удалить</button>
    </div>
    <p>текст:</p>
    <input type="text" value={slide.name} onChange={(e) => handleName(e, slide.id)} />
    <SelectImageArr
      key={slide.id}
      page={data}
      item={slide}
      handleItems={handleSlides}
      items={data.slides}
      name={data.name}
    />
  </div>
);

export default React.memo(SlideItem);
