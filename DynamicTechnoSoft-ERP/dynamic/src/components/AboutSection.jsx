import React from "react";
import "./AboutSection.css";
import Carousel from "./Carousel";
import AboutImage1 from "../assets/images/about1.png";
import AboutImage2 from "../assets/images/about2.png";
import AboutImage3 from "../assets/images/about3.png";
import AboutImage4 from "../assets/images/about4.png";
import AboutImage5 from "../assets/images/about5.png";
import Company1 from "../assets/images/company1.png";
import Company2 from "../assets/images/company2.png";
import Company3 from "../assets/images/company3.png";
import Company4 from "../assets/images/company4.png";
import Company5 from "../assets/images/company5.png";
import Company6 from "../assets/images/company6.png";
import Company7 from "../assets/images/company7.png";

const AboutSection = () => {
  return (
    <>
    {/* <section> */}
      <div className="about-pivotal " >
        <div className="all-about-pivotal">
          <h1>
            About
          </h1>
          <h2 >
            Pivotal
            <span
              style={{
                color: "green",
                fontWeight: "500",
              }}
            >
              ERP
            </span>
          </h2>

          <p>
            Pivotal ERP is a next-generation business management solution
            designed to streamline operations, enhance productivity, and drive
            growth. Whether you are a small startup or an established
            enterprise, our intelligent ERP adapts to your business needs.
          </p>
        </div>

        <div className="display-showcase">
          <div className="five-showcases">
            <div className="first-showcase">
              <img src={AboutImage1}></img>
              <h4>Customizable Modules </h4>
            </div>
            <div className="second-showcase">
              <img src={AboutImage3}></img>
              <h4>AI-Driven Insights & Analytics</h4>
            </div>
            <div className="third-showcase">
              <img src={AboutImage2}></img>
              <h4>Scalable for Businesses of All Sizes</h4>
            </div>
            <div className="fourth-showcase">
              <img src={AboutImage4}></img>
              <h4>Real-Time Collaboration</h4>
            </div>
            <div className="fifth-showcase">
              <img src={AboutImage5}></img>
              
              <h4>Cloud-Based & Secure</h4>
            </div>
          </div>
        </div>
      </div>


    {/* </section> */}


      <div className="total-company-network">
        <div className="total-customers">
          <p className="total-count">248,000+ customers in over 52 cities grow thier business with PivotalERP</p>
        </div>

        <div className="slide-images">
        <Carousel/>
      </div>

      </div>
     
      
    </>
  );
};

export default AboutSection;
