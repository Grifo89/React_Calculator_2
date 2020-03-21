import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

const Display = ({ input }) => (
  <div className="display">{input}</div>
);

export default Display;

Display.propTypes = {
  input: PropTypes.string,
};

Display.defaultProps = {
  input: '0',
};
