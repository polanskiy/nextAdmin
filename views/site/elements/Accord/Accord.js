import React from 'react';
import AccordItem from './AccordItem';

const Accord = ({ tabs, maxCol }) => {
  const renderTabs = () => (tabs.map((tab) => (
    <AccordItem key={tab.id} tab={tab} />
  )));

  return (
    <div className="accordBox">
      {tabs.length && renderTabs()}
    </div>
  );
};

export default Accord;
