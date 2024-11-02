// Experiencecontent.jsx
import React from 'react';
import './experiencecontent.css';
import Experienceimage from '../imagepositioning/imagepositioning';

const Experiencecontent = ({ selectedOption }) => {
  // Define summaries for each option
  const summaries = {
    Finance: (
      <>
        <h2 className="title">Learning Highlights</h2>
        <h3 className="subtitle">Sundaram Finance</h3>
        <p className="summary">Since joining Sundaram Finance Limited in May 2022, I have developed solutions to enhance business operations by utilizing APIs from external companies and creating an inbuilt application for customers and sales officers, driving efficiency and engagement.</p>
        
        <div className="learning-list-container">
          <ul className="learning-list">
            <li>
              <strong>Project Coordinations</strong>
              <p>
              Led coordination for applications like the Customer Management System (CMS) for salespersons and SF Next for company customers, ensuring alignment with business goals.
                </p>
            </li>
            <hr />
            <li>
              <strong>Application Enhancement</strong>
              <p>Gathered insights from sales management to implement improvements in existing applications, boosting functionality and user satisfaction.</p>
            </li>
            <hr />
            <li>
              <strong>Scope Managemen</strong>
              <p>Managed project documentation and scope updates to maintain transparency and clarity among stakeholders.</p>
            </li>
            <hr />
            <li>
              <strong>Client-Centric Solutions</strong>
              <p>Developed solutions that enable customers to access their holdings and interact with Sundaram Finance products, enhancing their overall experience.</p>
            </li>
            <hr />
            <li>
              <strong>Innovation Focus</strong>
              <p>Drove the implementation of ongoing projects and feature rollouts, fostering a culture of innovation and responsiveness to market needs.</p>
            </li>
            <hr />
            <li>
              <strong>Cross-Functional Collaboration</strong>
              <p>Worked closely with IT and sales management to ensure seamless integration of solutions, addressing customer requirements effectively.</p>
            </li>
          </ul>
        </div>
      </>
    ),
    "Accenture Passenger": (
      <>
        <h2 className="title">Learning Highlights</h2>
        <h3 className="subtitle">Accenture</h3>
        <p className="summary">
        I spent a year at Messenger from 2021 to 2022 as a Data Entry Person, where I dived into MySQL and honed my front-end design skills. I had the opportunity to create eye-catching email banners and public street designs, allowing me to blend creativity with data management.
        </p>

        <div className="learning-list-container">
          <ul className="learning-list">
            <li>
              <strong>Database Management</strong>
              <p>Gained hands-on experience in managing and maintaining databases, ensuring data integrity and availability for various applications.</p>
            </li>
            <hr />
            <li>
              <strong>Query Optimization</strong>
              <p>Developed efficient SQL queries to retrieve and manipulate data, improving performance and reducing response times for data access.</p>
            </li>
            <hr />
            <li>
              <strong>Schema Design</strong>
              <p>Assisted in designing database schemas that reflect business requirements, optimizing data storage and retrieval processes.</p>
            </li>
            <hr />
            <li>
              <strong>Collaboration</strong>
              <p>Collaborated with cross-functional teams to understand data needs and implement effective database solutions, enhancing overall project outcomes.</p>
            </li>
          </ul>
        </div>
      </>
    )
  };

  return (
    <div className="experience-main-conten">
      
      <div className="white-container">
      <Experienceimage /> {/* Add the image component here */}

        <div className="black-container">
          {summaries[selectedOption]}
        
        </div>
        
      </div>
      
    </div>
  );
};

export default Experiencecontent;
