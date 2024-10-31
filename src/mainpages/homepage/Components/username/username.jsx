import React from 'react';
import './username.css';
import Icon from '../../../images/user_image.svg'; // Updated path
import Iconside from '../../../images/user_image_rightside.svg'; // Updated path
import hello from '../../../images/hello.svg'; // Updated path

const Usernamewithimage = () => {
  return (
    <>
      <div className="username-container">
        <img src={Icon} alt="Icon" className="username-icon" />
        <p>Shiva Shankar S /.</p>
      </div>
      <img src={Icon} alt="Icon" className="username-icon-backside" />
      <img src={Iconside} alt="Icon" className="username-icon-backside-two" />
      <img src={hello} alt="Icon" className="username-icon-backside-three" />
    </>
  );
}

export default Usernamewithimage;
