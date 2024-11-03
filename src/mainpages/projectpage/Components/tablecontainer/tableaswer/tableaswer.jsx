// src/mainpages/projectpage/Components/tablecontainer/tableaswer/TableAnswer.jsx

import React, { useState } from 'react';
import Reactjs from '../../../../images/reactjs.svg'; 
import Reactnative from '../../../../images/reactnative.svg'; 
import Dev from '../../../../images/dev.svg'; 
import Whatsapp from '../../../../images/whatsapp.svg'; 
import IoiImage5 from '../../../../images/ioi.svg'; 
import './tableaswer.css';

const optionsData = [
  { name: 'Sundaram FAST Site', img: Reactjs },
  { name: 'Sundaram FAST APP', img: Reactnative },
  { name: 'My Dev Folio', img: Dev },
  { name: 'WhatsApp API', img: Whatsapp },
  { name: 'Coming Soon....', img: IoiImage5 },
];

const TableAnswer = ({ selectedOption = 'Sundaram FAST Site' }) => {
  const [isClicked, setIsClicked] = useState(false);

  const selectedOptionData = optionsData.find(option => option.name === selectedOption);
  const selectedImage = selectedOptionData ? selectedOptionData.img : optionsData[0].img; // Default image if no option is selected

  const handleImageClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset after animation
  };

  return (
    <div className="table-answer" style={{ textAlign: 'center', padding: '20px' }}>
      <img
        src={selectedImage}
        alt="Selected Option"
        className={`ioi-image ${isClicked ? 'clicked' : ''}`}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default TableAnswer;
