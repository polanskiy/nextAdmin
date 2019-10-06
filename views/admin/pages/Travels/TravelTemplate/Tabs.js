import React, { useState } from 'react';
import TabItem from './TabItem';
import randomId from '../../../../../utils/randomId';


const Tabs = ({
  data, handleFocus, updateTravel, setTravelData,
}) => {
  const [isNewTab, setNewTab] = useState(false);

  const addTab = async () => {
    const newTab = {
      id: randomId(6),
      name: '',
      value: '',
      icon: '',
    };
    const tabs = [...data.tabs];
    tabs.push(newTab);
    const newTravel = { ...data, tabs };
    if (!isNewTab) setNewTab(true);
    setTravelData({ data: newTravel, isFetching: false });
    await updateTravel(newTravel);
  };

  const renderTabs = () => data.tabs.map(tab => (
    <TabItem
      key={tab.id}
      tab={tab}
      updateTravel={updateTravel}
      travelData={data}
      handleFocus={isNewTab ? () => {} : handleFocus}
      setTravelData={setTravelData}
    />
  ));

  console.log('data.tabs', data.tabs);

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Вкладки:</h1>
      <div className="adminBtnsBox">
        <button type="button" onClick={addTab} className="adminBtn">Добавить вкладку</button>
      </div>
      <div className="adminTravelTabsBox">
        {renderTabs()}
      </div>
    </div>
  );
};

export default Tabs;
