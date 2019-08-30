import React, { useState, useEffect } from 'react';
import Tabs from '../../elements/Tabs';

const TravelAbout = ({ tabs, tabsBg }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const renderTabs = () => tabs.map(tab => <div name={tab.name} className="travelTabContent" key={tab._id}>{tab.value}</div>);
  return (
    <div className="travelAboutBox">
      <img className="headerBg" src={tabsBg} alt="индивидуальный туроператор" />
      <div className="imgBg">
        <div className="contentWrapper ">
          <Tabs tabsBoxClass="travelTabsBox" tabHeaderBoxClass="travelTabsHeader" tabHeaderClass="travelTab">
            {show && renderTabs()}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TravelAbout;
