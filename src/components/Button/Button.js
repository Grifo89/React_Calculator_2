/* eslint-disable */
import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';


const Button = ({ name, color = "#f5913e", wide=false }) => (
  <div
    className={`button-wrapper`}
    style={{background: color, flex: `${wide? '2': '1' }`}}
  >
    {name}
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.boolean
}

Button.defaultProps = {
  children: PropTypes.string,
};



export default Button;
