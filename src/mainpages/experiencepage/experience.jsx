// Experience.jsx
import React, { useState } from 'react';
import './experience.css';
import Headercom from '../components/header/header';
import Experiencoptione from './Components/experienceoption/experienceoption';
import Experiencecontent from './Components/experiencecontent/experiencecontent';
import Toprighttext from './Components/toprighttext/toprighttext';

const Experience = () => {
  const [selectedOption, setSelectedOption] = useState("Finance");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Headercom />
      <Toprighttext />
      <div> 
        <Experiencoptione onSelectOption={handleSelectOption} />
      </div>
      <div className="main-experience">
     
        <Experiencecontent selectedOption={selectedOption} />
      </div>
    </>
  );
}

export default Experience;
