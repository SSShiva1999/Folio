import React from 'react';
import './homepage.css';
import Imageposition from './Components/imageposition/imageposition';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Usernamewithimage from './Components/username/username';


const Homepage = () => {
  return (
    <div className="main_container">
        
      <div className="container_position">
        <div className="content">
          <p>
          <Link to="/about" className="link">About /.</Link> {/* Link to AboutSkillPart page */}
          </p>
          <p> <Link to="/Project" className="link">Project View /.</Link></p>
          <p>Experiences /.</p>
          {/* <p><Link to="/resume" className="link">Resume /. </Link></p> */}
          <p><Link to="/resumes" className="link">Resume /.</Link></p>

        </div>
      </div>

      <Usernamewithimage />
      <Imageposition />
    </div>
  );
}

export default Homepage;
