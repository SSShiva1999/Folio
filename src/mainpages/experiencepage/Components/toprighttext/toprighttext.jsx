// Experiencecontent.jsx
import React from 'react';
import './toprighttext.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Toprighttext = ( ) => {

  return (
    <div className="toprighttext-main-conten">
    <div className="toprighttext-view">
    <Link to="/project" className="link">View Project /.</Link>
          <span className="viewunderline"></span>
        </div>
    </div>
  );
};

export default Toprighttext;
