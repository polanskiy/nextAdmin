import React from 'react';
import ReactDOM from 'react-dom';

const PortalPreloader = () => {
  const modalMarkup = (
    <div className="adminPreloaderBox">
      <div>
     123
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

export default PortalPreloader;
