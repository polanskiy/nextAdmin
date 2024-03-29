import React from 'react';
import SelectImage from '../../../elements/Editor/SelectImage';

const Images = ({ data, setTravelData, updateData }) => {
  const handleImages = (images) => {
    setTravelData({ data: { ...data, images } });
  };

  const renderImages = () => Object.keys(data.images).map(image => (
    <SelectImage
      key={image}
      page={data}
      image={image}
      updateData={updateData}
      setNowImages={handleImages}
      nowImages={data.images}
      name={data.name}
    />
  ));

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
