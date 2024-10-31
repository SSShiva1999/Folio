import React from 'react';
import './resumes.css' 

const Resumes = () => {
  return (
    <>
      <div className="resume-page">
        {/* Lines for the sides */}
        <div className="line left"></div>
        <div className="line right"></div>

        {/* Title above the center container */}
        <div className="title-Resume-font">Resume</div>

        <div className="center-container">
          <div className="resume-svg">
         
            {/* <ResumeSVG /> */} 
          </div>
        </div>

        <div className="download-resume">
          Download Resume /
          <span className="underline"></span> {/* Separate underline */}
        </div>
      </div>
    </>
  );
};

export default Resumes;
