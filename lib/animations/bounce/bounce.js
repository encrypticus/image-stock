import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Bounce = ({ inProp, children }) => (
  <CSSTransition
    in={inProp}
    timeout={500}
    classNames="bounce"
    unmountOnExit
  >
    {children}
  </CSSTransition>
);
