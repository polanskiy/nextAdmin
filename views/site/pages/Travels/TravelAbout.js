import React from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';
import Tabs from '../../elements/Tabs';

const TravelAbout = ({ tabs, tabsBg }) => {
  const renderTabs = () => tabs.map(tab => (
    <div
      name={tab.name}
      className="travelTabContent"
      key={tab._id}
      icon={tab.icon}
      dangerouslySetInnerHTML={{ __html: xss(tab.value, xssOptions) }}
    />
  ));
  return (
    <div className="travelAboutBox" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%), url(${tabsBg})` }}>
      <div className="contentMidWrapper ">
        {tabs.length && (
          <Tabs tabsBoxClass="travelTabsBox" tabHeaderBoxClass="travelTabsHeader" tabHeaderClass="travelTab">
            { renderTabs()}
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default TravelAbout;
