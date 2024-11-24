// src/mainpages/projectpage/Components/tablecontainer/tableaswer/TableAnswer.jsx

import React, { useState } from 'react';
import Reactjs from '../../../../images/reactjs.svg'; 
import Reactnative from '../../../../images/reactnative.svg'; 
import Dev from '../../../../images/dev.svg'; 
import Whatsapp from '../../../../images/whatsapp.svg'; 
import IoiImage5 from '../../../../images/ioi.svg'; 
import Websvg from '../../../../images/websvg.svg'; 
import Salern from '../../../../images/saleRn.svg'; 
import Cuzrn from '../../../../images/cuzrn.svg'; 
import './tableaswer.css';

const optionsData = [
  { name: 'Back Office Site', img: Reactjs },
  { name: 'Application For Sales Team', img: Salern },
  { name: 'Application For Customers', img: Cuzrn },
  { name: 'Website Revamp', img: Websvg },
  { name: 'My Dev Folio', img: Dev },
  { name: 'WhatsApp API', img: Whatsapp },
  { name: 'Coming Soon....', img: IoiImage5 },
];

const TableAnswer = ({ selectedOption = 'Back Office Site' }) => {
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
