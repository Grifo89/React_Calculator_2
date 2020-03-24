import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="display">{total !== '0'? total : operation !== null?  next + operation : next}</div>
);

export default Display;

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string
};

Display.defaultProps = {
  total: '0',
  next: '0',
  operation: null
};
