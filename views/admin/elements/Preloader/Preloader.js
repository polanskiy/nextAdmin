import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './PortalPreloader';

const Preloader = ({ isOpen }) => (
  <React.Fragment>
    <CSSTransition
      in={isOpen}
      className="modal-transition"
      classNames="modal-transition"
      unmountOnExit
      timeout={300}
    >
      <Portal />
    </CSSTransition>
  </React.Fragment>
);

export default Preloader;
