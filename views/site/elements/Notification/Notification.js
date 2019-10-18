import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './Portal';

const Modal = ({
  isOpen, toggleOpen, children, title, maxWidth,
}) => (
  <>
    <CSSTransition
      in={isOpen}
      className="notif-transition"
      classNames="notif-transition"
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
  </>
);

export default Modal;
