import React from 'react';
import SelectImage from '../../../elements/Editor/SelectImage';

const Images = ({ data, setTravelData, updateTravel }) => {
  const handleImages = (images) => {
    setTravelData({ data: { ...data, images }, isFetching: false });
  };
  const renderImages = () => Object.keys(data.images).map((image) => {
    if (image !== 'thumb') {
      return (
        <SelectImage
          key={image}
          page={data}
          image={image}
          updateData={updateTravel}
          setNowImages={handleImages}
          nowImages={data.images}
          name={data._id}
          thumb={image === 'header'}
        />
      );
    } return null;
  });

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Фоновые изображения:</h1>
      <div className="flexElements">
        {renderImages()}
      </div>
    </div>
  );
};

export default Images;
