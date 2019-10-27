import React, { useRef } from 'react';
import ReactSVG from 'react-svg';
import useToggle from '../../../../utils/useToggle';

const AccordItem = ({ tab }) => {
  const [active, setActive] = useToggle(false);
  const el = useRef(null);

  return (
    <div
      key={tab.id}
      role="presentation"
      className={active ? 'accordItemBox accordItemBoxActive' : 'accordItemBox'}
    >
      <div
        className="accordTitle"
        onClick={setActive}
      >
        <ReactSVG className="accordIcon" src={tab.icon} />
        <p>{tab.name}</p>
      </div>
      <div className="accordContentBox" style={{ height: active ? el.current.offsetHeight : 0 }}>
        <div ref={el} className="accordContent">
          {tab.value}
        </div>
      </div>
    </div>
  );
};

export default AccordItem;
