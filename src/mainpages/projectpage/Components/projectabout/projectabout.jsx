// src/mainpages/projectpage/Components/projectabout/projectabout.jsx

import React from 'react';
import './projectabout.css';

const ProjectAbout = ({ selectedText, selectedDescription }) => {
  return (
    <div className="project-about">
      <div className="selected-text-top">My Experience In/.</div>
      <div className="selected-option-text">
        {selectedText} {/* Shows 'Select an option' until an option is chosen */}
      </div>
      <div className="selected-description-text">
        {selectedDescription} {/* Shows description */}
      </div>
    </div>
  );
};

export default ProjectAbout;
