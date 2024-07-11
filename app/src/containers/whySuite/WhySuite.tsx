import React from "react";
import image1 from "../../assets/picture1.jpg";
import "./whysuite.css";

const WhySuite = () => {
  return (
    <div
      className="suite__whysuite-section gradient__section-background section__margin"
      id="WhySuite"
    >
      <div className="suite__whysuite-section-text">
        <div className="suite__whysuite-section-text_heading">
          <h1>
            Excel Sheets<br></br>
            Post-Its<br></br>
            Memorizing<br></br>
            Calendar
          </h1>
        </div>
        <div className="suite__whysuite-section-text_content">
          <p>
            Done are the days where you had to keep track of assignments on your
            own<br></br>
            <br></br>
            Simply add all you have to do with one click, and Sweet Suite will
            keep track of it for you.
          </p>
        </div>
      </div>
      <div className="suite__whysuite-section-image">
        <img src={image1} alt="organized desk" />
      </div>
    </div>
  );
};

export default WhySuite;
