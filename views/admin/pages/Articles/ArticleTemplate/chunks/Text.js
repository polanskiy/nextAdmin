import React, { useContext } from 'react';
import TextEditor from '../../../../elements/Editor/TextEditor';
import TemplateCtx from '../TemplateCtx';
import Gradient from '../../../../elements/Settings/Gradient';
import SelectImage from '../../../../elements/Settings/SelectImage';
import Checkbox from '../../../../elements/Settings/Checkbox';

const Text = ({ chunkData }) => {
  const {
    setArticleData, setDeleteImg, data, updateArticle,
  } = useContext(TemplateCtx);
  const handleText = (text) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.text = text;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
  };

  const handleGradient = (newBg) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.gradient = newBg;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
  };

  const handleImages = (newImage) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.image.value = newImage;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
    updateArticle({ ...data, elements: newElements });
  };

  const handleRepeat = (repeat) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.image.repeat = repeat;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Текст:</h1>
      <div className="adminArticleElementBody">
        <div className="adminSettingsBox">
          <Gradient background={chunkData.gradient} handleGradient={handleGradient} />
          <SelectImage
            page={chunkData}
            image={chunkData.image.value}
            handleImages={handleImages}
            name={data._id}
            thumb={false}
          />
          <Checkbox data={chunkData.image.repeat} setData={handleRepeat} label="Повтор изображения" />
        </div>
        <div>
          <TextEditor
            selector={chunkData.id}
            title="Текст статьи"
            data={chunkData.text}
            setData={handleText}
            handleFocus={() => {}}
            height={450}
            name={data._id}
            setDeleteImg={setDeleteImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
