import React from 'react';
import './homepage.css';
import Imageposition from './Components/imageposition/imageposition';
import { Link } from 'react-router-dom'; // Import Link from React Router
import Usernamewithimage from './Components/username/username';
import Headercom from '../components/header/header';


const Homepage = () => {
  return (
    <div className="homepage-main-container">
        {/* <Headercom /> */}
      <div className="container_position">
        <div className="content">
          <p><Link to="/about" className="homelink">About /.</Link>  </p>    
          <p> <Link to="/project" className="homelink">Project View /.</Link></p>
           <p><Link to="/experience" className="homelink">Experiences /.</Link></p> 
          <p><Link to="/resumes" className="homelink">Resume /.</Link></p>
        </div>
      </div>

      <Usernamewithimage />
      <Imageposition />
    </div>
  );
}

export default Homepage;
