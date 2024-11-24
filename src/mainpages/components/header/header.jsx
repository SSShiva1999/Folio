
import React, { useState, useEffect } from 'react';
import './header.css';
import Headerimage from '../../images/header.svg';
import Headerimage679 from '../../images/header786.svg';
import resume from '../../images/resume.svg';
import { Link } from 'react-router-dom';

const Headercom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 950);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (isOpen) {
      setIsVisible(false);
      setTimeout(() => setIsOpen(false), 400); // Wait for the animation to finish
    } else {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 0); // Make it visible immediately
    }
  };

  return (
    <div className="headercom_main_container">
      {!isOpen && !isSmallScreen && (
        <div className="open_text" onClick={handleClick}>
          <img src={Headerimage} alt="Header image" />
        </div>
      )}
      {!isOpen && isSmallScreen && (
        <div className="open_text" onClick={handleClick}>
          <img src={Headerimage679} alt="Header image" />
        </div>
      )}
      {isOpen && (
        <div className="hello_message">
          <div className={`hello_content ${isVisible ? 'visible' : ''}`}>
            <div className="close_text" onClick={handleClick}>close</div>
            <Link to="/" className="link"><p>The Home</p></Link>
            <hr />
            <Link to="/about" className="link"><p>About</p></Link>
            <hr />
            <Link to="/project" className="link"><p>Project View</p></Link>
            <hr />
            <Link to="/experience" className="link"><p>Experiences</p></Link>
            <hr />
            <Link to="https://ssshiva1999.github.io/Contactme/" target="_blank" rel="noopener noreferrer" className="link"><p>ContactMe</p></Link>
            <hr />
          </div>
          <div className="resume_tem">
            <Link to="/resumes" className="link"><img src={resume} className='img_resume' /></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Headercom;
