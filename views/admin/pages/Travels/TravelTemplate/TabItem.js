import React, { useState } from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';

const TabItem = ({
  tab, updateTravel, travelData, handleFocus, fetchTravelData,
}) => {
  const [tabName, setTabName] = useState(tab.name);
  const [tabValue, setTabValue] = useState(tab.value);

  const handleTabName = (e) => {
    const name = e.target.value;
    setTabName(name);
    const newTabs = travelData.tabs.map((item) => {
      const newTab = { ...item };
      if (newTab._id === tab._id) {
        newTab.name = name;
        newTab.value = tabValue;
        return newTab;
      }
      return item;
    });
    updateTravel({ ...travelData, tabs: newTabs });
  };

  const handleTabValue = (value) => {
    setTabValue(value);
    const newTabs = travelData.tabs.map((item) => {
      const newTab = { ...item };
      if (newTab._id === tab._id) {
        newTab.value = value;
        newTab.name = tabName;
        return newTab;
      }
      return item;
    });
    updateTravel({ ...travelData, tabs: newTabs });
  };

  const handleDelete = () => {
    const newTabs = travelData.tabs.filter(item => item._id !== tab._id);
    updateTravel({ ...travelData, tabs: newTabs });
    fetchTravelData();
  };

  return (
    <div className="adminTabItemBox">
      <div className="adminEditorTitle">
        <p>Заголовок вкладки:</p>
        <button type="button" className="adminBtn adminDelBtn" onClick={handleDelete}>Удалить</button>
      </div>
      <input type="text" value={tabName} onChange={handleTabName} className="adminArticleInput" />
      <div>
        <TextEditor
          selector={tab._id}
          title="Текст вкладки"
          data={tabValue}
          setData={handleTabValue}
          handleFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default TabItem;
