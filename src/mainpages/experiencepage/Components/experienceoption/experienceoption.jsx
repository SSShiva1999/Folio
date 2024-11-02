// Experiencoptione.jsx
import React from 'react';
import './experienceoption.css';

const Experiencoptione = ({ onSelectOption }) => {
  return (
    <div className="main-experience-option">
      <div className="option-item-option" onClick={() => onSelectOption("Finance")}>Sundaram Finance</div>
      <div className="option-item-option" onClick={() => onSelectOption("Accenture Passenger")}>Accenture</div>
    </div>
  );
}

export default Experiencoptione;
