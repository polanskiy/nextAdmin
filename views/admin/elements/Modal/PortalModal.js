import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({
  onClose, title, children,
}) => {
  const modalMarkup = (
    <div className="adminModalBox" onMouseDown={onClose}>
      <div className="adminModalBody" onMouseDown={e => e.stopPropagation()}>
        <div>
          <div>
            <div className="adminModalClose" onClick={onClose}>&times;</div>
            <div className="adminModalTitle">{title}</div>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

export default Portal;
