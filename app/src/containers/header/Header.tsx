import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="suite__header section__margin" id="header">
      <div className="suite__header-section">
        <div className="suite__header-section_title gradient__text1">
          <h1>All your Assignments. All in one Suite</h1>
        </div>
        <div className="suite__header-section_subtitle">
          <p>
            With Sweet Suite you will find everything you have to do in order to
            succeed in school all in one place
          </p>
        </div>
        <div>
          <button
            className="suite__header-section_button gradient__button"
            id="createSuite"
          >
            Create Suite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
