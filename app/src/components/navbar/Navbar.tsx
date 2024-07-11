import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Menu = () => (
  <>
    <ul>
      <li>
        <a href="#header">Home</a>
      </li>
      <li>
        <a href="#WhySuite">Why this Suite</a>
      </li>
      <li>
        <a href="#Features">Features</a>
      </li>
      <li>
        <a>App</a>
      </li>
      {/*TODO: add link*/}
      <li>
        <a>Log In</a>
      </li>{" "}
      {/* TODO: add link */}
    </ul>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="suite__navbar">
      <div className="suite__navbar-links">
        <div className="suite__navbar-links_logo">
          <a>Sweet Suite</a> {/*TODO: Add logo*/}
        </div>
        <div className="suite__navbar-links_container">
          <Menu />
        </div>
        <div className="suite__navbar-menu">
          {toggleMenu ? (
            <div onClick={() => setToggleMenu(false)}>
              <IoClose color="#fff" size={27} />
            </div>
          ) : (
            <div onClick={() => setToggleMenu(true)}>
              <RiMenu3Fill color="#fff" size={27} />
            </div>
          )}
          {toggleMenu && (
            <div className="suite__navbar-menu_container scale-up-center gradient__section-background">
              <div className="suite__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
