/* eslint-disable */
import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div
    className={`button-wrapper`}
  >
    {name}
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
}


export default Button;
