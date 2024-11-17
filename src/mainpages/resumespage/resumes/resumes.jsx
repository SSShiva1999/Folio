import React from 'react';
import './resumes.css';
import Headercom from '../../components/header/header';
import Resumesvg from "../../images/resumesvg.svg";
import { Link } from 'react-router-dom';

const Resumes = () => {
  return (
    <>
      <Headercom />
      <div className="resume-page">
        {/* Lines for the sides */}
        <div className="line left"></div>
        <div className="line right"></div>
        <div className="title-Resume-font">Resume</div>
        <div className="center-container">
          <div className="resume-svg">
            <img src={Resumesvg} alt="Resume" className="resume-svg" />
          </div>
        </div>
        <div className="download-resume">
          <a href="/Folio/shivashankarresume.pdf" target="_blank" rel="noopener noreferrer" className="link">
            View Resume /.
          </a>
          <span className="underline"></span>
        </div>
        <div className="view-experience">
          <Link to="/experience" className="link">View My Experience /.</Link>
          <span className="underline"></span>
        </div>
      </div>
    </>
  );
};

export default Resumes;
