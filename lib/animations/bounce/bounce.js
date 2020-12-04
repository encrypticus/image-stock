import React from 'react';

import PropTypes from 'prop-types';
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

Bounce.propTypes = {
  inProp: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
