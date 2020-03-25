import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => {
  let number = '';

  if (total !== '0' && total !== null) {
    number = total;
  } else if (operation !== null) {
    number = next + operation;
  } else {
    number = next;
  }

  return (
    <div className="display">{number}</div>
  );
};
export default Display;

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
  next: '0',
  operation: null,
};
