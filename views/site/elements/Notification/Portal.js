import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({
  onClose, title,
}) => {
  const modalMarkup = (
    <div className="notificationBox" onMouseDown={onClose}>
      <div className="notificationBody">
        <div className="notificationTitle">{title}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

export default Portal;
