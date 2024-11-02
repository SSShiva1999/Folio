import React from "react";
import boxone from "../../../images/boxone.svg";
import boxtwo from "../../../images/boxtwo.svg";
import "./imageposition.css";


const Imageposition = () => {
  return (
    <div className="imagepositioncontainer">
      <img src={boxone} alt="Box One" className="imageposition-top-right" />
      <img src={boxtwo} alt="Box Two" className="imageposition-bottom-left" />
    </div>
  );
};

export default Imageposition;
