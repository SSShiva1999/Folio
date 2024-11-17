import React, { useState, useEffect, useRef } from 'react';
import './tablecontainer.css';
import Sitefast from "../../../images/fastsite.svg";
import Comeing from "../../../images/comingsoon.svg";
import Foliomy from "../../../images/foliomy.svg";
import Site from "../../../images/site.svg";
import Smm from "../../../images/smm.svg";
import TableAnswer from './tableaswer/tableaswer';
import ContactMe from "../../../images/contactme.gif"; // Import the contactme.gif image
import View from "../../../images/productview.svg"; // Import the contactme.gif image

// Define options data including names, descriptions, and images
const optionsData = [
  { 
    name: 'Sundaram FAST Site', 
    description: 'Developed a platform that streamlines user experiences and accelerates business growth for Sundaram Fin Ltd.', 
    img: Site 
  },
  { 
    name: 'Sundaram FAST APP', 
    description: 'Created a versatile mobile application to enhance productivity and customer satisfaction for Sundaram Ltd.', 
    img: Sitefast 
  },
  { 
    name: 'My Dev Folio', 
    description: 'A comprehensive portfolio showcasing my journey and key projects in web and mobile development.', 
    img: Foliomy 
  },
  { 
    name: 'WhatsApp API', 
    description: 'Developed a WhatsApp API for daily reports, allowing clients to access updates from multiple salesmen.', 
    img: Smm 
  },
  { 
    name: 'Coming Soon....', 
    description: 'Building a feature-rich movie booking platform for back-office operations and end-user convenience using the MERN stack.', 
    img: Comeing 
  }
];

const TableContainer = ({ setSelectedText, setSelectedDescription }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const optionsRef = useRef(null); // Ref for the options list

  // Function to handle automatic cycling of options
  const startAutoCycle = () => {
    return setInterval(() => {
      if (!hovering) {
        setSelectedOptionIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % optionsData.length; // Cycle through options
          const optionData = optionsData[nextIndex];
          setSelectedText(optionData.name); // Update selectedText
          setSelectedDescription(optionData.description); // Update description
          return nextIndex;
        });
      }
    }, 2000); // Change option every 2 seconds
  };

  useEffect(() => {
    const intervalId = startAutoCycle(); // Start the cycling interval

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [hovering, setSelectedText, setSelectedDescription]);

  useEffect(() => {
    // Scroll the selected option into view
    if (optionsRef.current) {
      const selectedOption = optionsRef.current.children[selectedOptionIndex];
      if (selectedOption) {
        const { offsetTop, clientHeight } = selectedOption;
        const container = optionsRef.current;

        // Adjust scroll position only if the selected option is out of view
        const scrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;

        if (offsetTop < scrollTop) {
          // Scroll up to the selected option
          container.scrollTop = offsetTop;
        } else if (offsetTop + clientHeight > scrollTop + containerHeight) {
          // Scroll down to the selected option
          container.scrollTop = offsetTop + clientHeight - containerHeight;
        }
      }
    }
  }, [selectedOptionIndex]);

  return (
    <div className="table-container">
      <div className="table-options" ref={optionsRef}>
        <img src={ContactMe} alt="Contact Me" className="top-right-image" />
        <ul className="options-list">
        <img src={View} alt="Contact Me" className="top-viewitem-image"  />

          {optionsData.map((option, index) => (
            <li 
              key={option.name} 
              className={`option-item ${index === selectedOptionIndex ? 'selected' : ''} ${hovering ? '' : 'hoverable'}`} // Apply 'selected' and 'hoverable' classes
              onMouseEnter={() => {
                setHovering(true); // Set hovering to true on mouse enter
                setSelectedOptionIndex(index); // Update selected option index on hover
                setSelectedText(option.name); // Update selectedText on hover
                setSelectedDescription(option.description); // Update description on hover
              }} 
              onMouseLeave={() => {
                setHovering(false); // Set hovering to false on mouse leave
              }}
            >
              {option.name}
              <img src={option.img} alt={option.name} />
            </li>
          ))}
        </ul>
      </div>
      <TableAnswer selectedOption={optionsData[selectedOptionIndex].name} />
    </div>
  );
};

export default TableContainer;
