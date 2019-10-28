import React, { useContext, useState } from 'react';
import randomId from '../../../../../../../utils/randomId';
import TemplateCtx from '../../TemplateCtx';
import Gradient from '../../../../../elements/Settings/Gradient';
import SelectImage from '../../../../../elements/Settings/SelectImage';
import TabItem from './TabItem';

const Tabs = ({ chunkData }) => {
  const [isNewTab, setNewTab] = useState(false);

  const {
    setArticleData, data, updateArticle, handleFocus,
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

  const addTab = async () => {
    const newTab = {
      id: randomId(6),
      name: '',
      value: '',
      icon: '',
    };
    const tabs = [...chunkData.tabs];
    tabs.push(newTab);
    if (!isNewTab) setNewTab(true);
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.tabs = tabs;
        return newItem;
      }
      return item;
    });
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
  };

  const renderTabs = () => chunkData.tabs.map((tab) => (
    <TabItem
      key={tab.id}
      tab={tab}
      data={data}
      chunkData={chunkData}
      handleFocus={isNewTab ? () => {} : handleFocus}
      setArticleData={setArticleData}
      updateArticle={updateArticle}
    />
  ));

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Вкладки:</h1>
      <div className="adminArticleElementBody">
        <div className="adminSettingsBox">
          <SelectImage
            page={chunkData}
            image={chunkData.image}
            handleImages={(val) => handleEl(val, 'image')}
            name={data._id}
            thumb={false}
            handleRepeat={(val) => handleEl(val ? 'repeat' : 'no-repeat', 'repeat')}
          />
          <Gradient background={chunkData.gradient} handleGradient={(val) => handleEl(val, 'gradient')} />
        </div>
        <div className="adminBtnsBox">
          <button type="button" onClick={addTab} className="adminBtn">Добавить вкладку</button>
        </div>
        <div className="adminTravelTabsBox">
          {renderTabs()}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
