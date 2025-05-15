import React from "react";
import Logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="main-container">
        <div className="logo-image">
          <img src={Logo}></img>
        </div>
        <div className="nav-items">
          <ul className="four-navs">
            <li>Features</li>
            <li>Get Started</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    <section>

      
      </section>
    </>
  );
}
