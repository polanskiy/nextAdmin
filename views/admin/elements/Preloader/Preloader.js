import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from './PortalPreloader';

const Preloader = ({ isOpen }) => (
  <React.Fragment>
    <CSSTransition
      in={isOpen}
      className="preloader-transition"
      classNames="preloader-transition"
      unmountOnExit
      timeout={300}
    >
      <Portal />
    </CSSTransition>
  </React.Fragment>
);

export default Preloader;
