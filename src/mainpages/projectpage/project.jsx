// src/mainpages/projectpage/project.jsx

import React, { useState } from 'react';
import Imageposition from './Components/Imageposition/Imageposition';
import TableContainer from './Components/tablecontainer/tablecontainer';
import ProjectAbout from './Components/projectabout/projectabout';
import './project.css';
import Headercom from '../components/header/header';


const Project = () => {
  // Set default state values for the selected option
  const [selectedText, setSelectedText] = useState('Sundaram FAST Site'); // Default option name
  const [selectedDescription, setSelectedDescription] = useState('Developed a platform that streamlines user experiences and accelerates business growth for Sundaram Finance Limited.'); // Default description

  return (
    <>
   <Headercom />

    <div className="project-container">
      <ProjectAbout selectedText={selectedText} selectedDescription={selectedDescription} /> {/* Pass both states */}
      <Imageposition />
      <TableContainer setSelectedText={setSelectedText} setSelectedDescription={setSelectedDescription} /> {/* Pass both states */}
    </div>
    </>
  );
};

export default Project;
