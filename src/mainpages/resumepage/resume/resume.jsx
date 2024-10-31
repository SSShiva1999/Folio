import React from 'react';
import './resume.css';
// import Headercom from '../components/header'; // Uncomment if you have a header component
import { ReactComponent as ResumeSVG } from '../../images/Resumesvg.svg'; // Your main resume SVG
import { ReactComponent as ResumeContactSVG } from '../../images/resumecontact.svg'; // Import your new SVG

const Resume = () => {
  return (
    <>
      {/* <Headercom /> */} {/* Uncomment if using a header component */}
      <div className="resume-page">
        {/* Lines for the sides */}
        <div className="line left"></div>
        <div className="line right"></div>

        {/* Title above the center container */}
        <div className="title-Resume-font">Resume</div>

        {/* Floating SVG for resume contact */}
        <div className="float-svg">
          <ResumeContactSVG />
        </div>

        <div className="center-container">
          <div className="resume-svg">
            <ResumeSVG /> {/* Render the main resume SVG */}
          </div>
        </div>

        <div className="download-resume">
          Download Resume /.
          <span className="underline"></span> {/* Separate underline */}
        </div>
      </div>
    </>
  );
};

export default Resume;
