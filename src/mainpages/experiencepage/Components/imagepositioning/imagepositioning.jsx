// Experienceimage.jsx
import React from 'react';
import './imagepositioning.css'; // Import the corresponding CSS file
import highlighter from '../../../images/highlighter.svg'; // Import your image

const Experienceimage = () => {
  return (
    <div className="experience-image-main">
      <img src={highlighter} alt="highlighter" className="experience-image" />
    </div>
  );
};

export default Experienceimage;
