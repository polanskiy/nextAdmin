import React, { useState, useEffect } from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';
import Tabs from '../../elements/Tabs';

const TravelAbout = ({ tabs, tabsBg }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const renderTabs = () => tabs.map(tab => (
    <div
      name={tab.name}
      className="travelTabContent"
      key={tab._id}
      dangerouslySetInnerHTML={{ __html: xss(tab.value, xssOptions) }}
    />
  ));
  return (
    <div className="travelAboutBox">
      <img className="headerBg" src={tabsBg} alt="индивидуальный туроператор" />
      <div className="imgBg">
        <div className="contentMidWrapper ">
          <Tabs tabsBoxClass="travelTabsBox" tabHeaderBoxClass="travelTabsHeader" tabHeaderClass="travelTab">
            {show && renderTabs()}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TravelAbout;
