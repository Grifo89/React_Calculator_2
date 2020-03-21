/* eslint-disable */
import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const isOperator = val => !isNaN(val) || val === 'AC' || val === '+/-' || val === '%' || val === '.';

const Button = ({ children }) => (
  <div className={`button-wrapper ${
    isOperator(children) ? null : 'operator'
  }`}
  >
    {children}
  </div>
);

Button.defaultProps = {
  children: PropTypes.string,
};

export default Button;
