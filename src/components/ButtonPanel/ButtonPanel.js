import React from 'react';
import './ButtonPanel.css';
import Button from '../Button/Button';

const ButtonPanel = () => (
  <div className="panel-container">
    <div className="row">
      <Button
        color="#e0e0e0"
        name="AC"
      />
      <Button
        color="#e0e0e0"
        name="+/-"
      />
      <Button
        color="#e0e0e0"
        name="%"
      />
      <Button
        name="/"
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        name="7"
      />
      <Button
        color="#e0e0e0"
        name="8"
      />
      <Button
        color="#e0e0e0"
        name="9"
      />
      <Button
        name="*"
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        name="4"
      />
      <Button
        color="#e0e0e0"
        name="5"
      />
      <Button
        color="#e0e0e0"
        name="6"
      />
      <Button
        name="-"
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        name="1"
      />
      <Button
        color="#e0e0e0"
        name="2"
      />
      <Button
        color="#e0e0e0"
        name="3"
      />
      <Button
        name="+"
      />
    </div>
    <div className="row">
      <Button
        color="#e0e0e0"
        wide={1}
        name="0"
      />
      <Button
        color="#e0e0e0"
        name="."
      />
      <Button
        name="="
      />
    </div>
  </div>
);

export default ButtonPanel;
