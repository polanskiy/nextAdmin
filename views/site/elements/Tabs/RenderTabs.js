import React from 'react';
import xss from 'xss';
import xssOptions from '../../../../utils/xssOptions';
import Tabs from './Tabs';

const RenderTabs = ({
  tabs, tabsBg, gradient = 'linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%)', repeat = 'no-repeat',
}) => {
  const renderTabs = () => tabs.map((tab) => (
    <div
      name={tab.name}
      className="travelTabContent"
      key={tab.id}
      icon={tab.icon}
      dangerouslySetInnerHTML={{ __html: xss(tab.value, xssOptions) }}
    />
  ));
  return (
    <div className="travelAboutBox" style={{ background: `${gradient}, url(${tabsBg}) ${repeat}` }}>
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

export default RenderTabs;
