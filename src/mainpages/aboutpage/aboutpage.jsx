import React from 'react';
import './aboutpage.css'; // Ensure to create this CSS file
// import Headercom from '../components/header';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Skill from './Components/skills/skill';
import Headercom from '../components/header/header';


const AboutPage = () => {
  return (
    <>
    <Headercom />
      {/* <Headercom /> */}
      <div className="about_container">
        <div className="view_resume">
          <div><Link to="/resumes" className="link">View Resume /.</Link></div>
          <span className="underline-view_resume"></span>
        </div>
        <div className="about_me">
          <h2>About Me</h2>
          <p className="slim_text">
I'm Shiva Shankar S, based in Chennai TN, an M.Sc. in Computer Science. Skilled in React,
 Java, and SQL, I’m passionate about building user-friendly apps. With multiple certifications,
 I’m always eager to take on new projects and make an impact!
          </p>
        </div>
        
        <Skill/>
      </div>
    
    </>
  );
}

export default AboutPage;
