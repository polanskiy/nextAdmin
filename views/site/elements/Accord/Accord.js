import React from 'react';
import AccordItem from './AccordItem';

const Accord = ({ tabs }) => {
  const renderTabs = () => {
    const col = [];
    const col2 = [];
    tabs.forEach((tab, i) => {
      const kek = i + 1;
      if (kek % 2 !== 0) {
        col.push(<AccordItem key={tab.id} tab={tab} />);
      } else {
        col2.push(<AccordItem key={tab.id} tab={tab} />);
      }
    });
    return (
      <>
        <div className="leftAccords">{col}</div>
        <div className="rightAccords">{col2}</div>
      </>
    );
  };

  return (
    <div className="accordBox">
      {tabs.length && renderTabs()}
    </div>
  );
};

export default Accord;
