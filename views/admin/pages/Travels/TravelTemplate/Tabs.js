import React from 'react';
import TabItem from './TabItem';


const Tabs = ({
  data, handleFocus, fetchTravelData, updateTravel, setTravelData,
}) => {
  const addTab = async () => {
    const newTab = {
      name: '',
      value: '',
    };
    const tabs = [...data.tabs];
    tabs.push(newTab);
    await updateTravel({ ...data, tabs });
    fetchTravelData();
  };

  const renderTabs = () => data.tabs.map(tab => (
    <TabItem
      key={tab._id}
      tab={tab}
      updateTravel={updateTravel}
      travelData={data}
      handleFocus={handleFocus}
      fetchTravelData={fetchTravelData}
      setTravelData={setTravelData}
    />
  ));

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Вкладки:</h1>
      <div className="adminBtnsBox">
        <button type="button" onClick={addTab} className="adminBtn">Добавить вкладку</button>
      </div>
      {renderTabs()}
    </div>
  );
};

export default Tabs;
