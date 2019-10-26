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
    if (el === 'image') updateArticle({ ...data, elements: newElements });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Текст:</h1>
      <div className="adminArticleElementBody">
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
        <div>
          <TextEditor
            selector={chunkData.id}
            title="Текст статьи"
            data={chunkData.text}
            setData={(val) => handleEl(val, 'text')}
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
