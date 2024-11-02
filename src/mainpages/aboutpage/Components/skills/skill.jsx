import React from 'react';
import './skill.css'; // Ensure to create this CSS file
import TechnicalSkillImage from '../../../images/technicalskill.svg'; // Update the path as needed
import Additionalskills from '../../../images/additionalskills.svg'; // Update the path as needed
import Othersskills from '../../../images/othersskills.svg'; // Removed extra space



const Skill = () => {
  return (
    <>
    <h2 className="skills_title">Skills</h2>
    <div className="skill_container"> {/* Full height and width */}
      
      <div className="skills_boxes"> {/* Background with dotted style */}
        <div className="skill_box">
          <div className="skill_title">Core Technical...</div> {/* Title with background */}
          <img src={TechnicalSkillImage} alt="Technical Skills" className="skill_image" />
        </div>
        <div className="skill_box">
          <div className="skill_title">Supporting Technical...</div>
          <img src={Additionalskills} alt="Additional Skills" className="skill_image" />
        </div>
        <div className="skill_box">
          <div className="skill_title"> design and documents...</div>
          <img src={Othersskills} alt="Other Skills" className="skill_image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Skill;
