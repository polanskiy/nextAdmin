import React, { useState } from 'react';
import ReactSVG from 'react-svg';

const Tabs = ({
  children, tabHeaderClass, tabsBoxClass, tabHeaderBoxClass, startTab, activeTabClass,
}) => {
  const [activeTab, setActiveTab] = useState(startTab - 1);

  const renderTabs = (tabs) => {
    if (tabs.length) {
      return (tabs.map((tab, i) => (
        <div
          key={tab.props.name}
          role="presentation"
          className={activeTab === i ? `${tabHeaderClass} ${activeTabClass}` : tabHeaderClass}
          onClick={() => setActiveTab(i)}
        >
          <ReactSVG src={tab.props.icon} />
          {tab.props.name}
        </div>
      )));
    }
    return (
      <div className={tabHeaderClass}>
        {tabs.props.name}
      </div>
    );
  };
  const renderContent = (tabs) => {
    if (tabs.length) {
      return (tabs.map((tab, i) => (
        <React.Fragment key={tab.props.name}>
          {activeTab === i && (
            <>
              {tab}
            </>
          )}
        </React.Fragment>
      )));
    }
    return (
      <>
        {tabs}
      </>
    );
  };

  return (
    <div className={tabsBoxClass}>
      <div className={tabHeaderBoxClass}>
        {children && renderTabs(children)}
      </div>
      {children && renderContent(children)}
    </div>
  );
};

export default Tabs;

Tabs.defaultProps = {
  startTab: 1,
  tabsBoxClass: 'tabsBox',
  tabHeaderClass: 'tabHeader',
  tabHeaderBoxClass: 'tabHeaderBox',
  activeTabClass: 'activeTab',
};
