import React from 'react';
import './ButtonPanel.css';
import Button from '../Button/Button';

const ButtonPanel = ({ handleClick }) => (
  <div className="panel-container">
    <div className="row">
      <Button
        color="#e0e0e0"
        name="AC"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="+/-"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="%"
        handleClick={ handleClick }
      />
      <Button
        name="/"
        handleClick={ handleClick }
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        name="7"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="8"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="9"
        handleClick={ handleClick }
      />
      <Button
        name="*"
        handleClick={ handleClick }
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        name="4"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="5"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="6"
        handleClick={ handleClick }
      />
      <Button
        name="-"
        handleClick={ handleClick }
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        name="1"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="2"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="3"
        handleClick={ handleClick }
      />
      <Button
        name="+"
        handleClick={ handleClick }
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        wide
        name="0"
        handleClick={ handleClick }
      />
      <Button
        color="#e0e0e0"
        name="."
        handleClick={ handleClick }
      />
      <Button
        name="="
        handleClick={ handleClick }
      />
    </div>
  </div>
);

export default ButtonPanel;
