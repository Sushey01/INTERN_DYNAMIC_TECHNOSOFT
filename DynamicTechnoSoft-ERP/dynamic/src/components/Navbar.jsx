import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="main-container">
        <div className="logo-image">
          <img src={Logo}/>
        </div>
        {/* <div className={`nav-items ${isMobileMenuOpen ? "open": ""}`}> */}
          {/* <ul className="four-navs">
            <li>Features</li>
            <li>Get Started</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}


          <input type="checkbox" id="sidebar-active"/>
            <label for="sidebar-active" className="open-sidebar-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
            </label>


            <div className="links-container">
              <label for="sidebar-active" className="close-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </label>


              
              <a href="#features">Features</a>
              <a href="#solutions">Get Started</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

        </nav>

        {/* <div className="hamburger"
        onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
        >

        </div> */}
      {/* </div> */}

    </>
  );
}
