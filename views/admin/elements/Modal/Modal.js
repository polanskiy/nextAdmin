import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './PortalModal';

const Modal = ({
  isOpen, toggleOpen, children, title, maxWidth,
}) => (
  <React.Fragment>
    <CSSTransition
      in={isOpen}
      className="modal-transition"
      classNames="modal-transition"
      unmountOnExit
      timeout={300}
    >
      <Portal
        title={title}
        open={isOpen}
        onClose={toggleOpen}
        onSave={toggleOpen}
        maxWidth={maxWidth}
      >
        {children}
      </Portal>
    </CSSTransition>
  </React.Fragment>
);

export default Modal;
