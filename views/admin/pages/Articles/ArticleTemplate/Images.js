import React from 'react';
import SelectImage from '../../../elements/Editor/SelectImage';

const Images = ({ data, setArticleData, updateArticle }) => {
  const handleImages = (images) => {
    setArticleData({ data: { ...data, images }, isFetching: false });
  };

  const renderImages = () => Object.keys(data.images).map(image => (
    <SelectImage
      key={image}
      page={data}
      image={image}
      updateData={updateArticle}
      setNowImages={handleImages}
      nowImages={data.images}
      thumb
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
