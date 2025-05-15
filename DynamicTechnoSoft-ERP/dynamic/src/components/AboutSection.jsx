import React from "react";
import "./AboutSection.css";
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
    <section
      style={{
        height: "75vh",
        border: "1px solid white",
        background: "white",
        display: "flex",
        // justifyContent:"center",
        // justifyContent:"space-around",
        padding: "40px",
      }}
    >
      <div className="about-pivotal " >
        <div className="all-about-pivotal">
          <h1
            style={{
              fontSize: "25px",
              width:"50px",
              height:"15px"
            }}
          >
            About
          </h1>
          <h2 style={{ color: "#00A6E0", fontSize: "35px", height:"20px", width:"50px" }}>
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


    </section>

      <div className="total-company-network">
        <div className="total-customers">
          <p className="total-count">248,000+ customers in over 52 cities grow thier business with PivotalERP</p>
        </div>
        <div className="company-images">
          <div className="left-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
          </div>
              <div className="company1">
                <img src={Company1}></img>
              </div>
              <div className="company2">
                <img src={Company2}></img>
              </div>
              <div className="company3">
                <img src={Company3}></img>
              </div>
              <div className="company4">
                <img src={Company4}></img>
              </div>
              <div className="company5">
                <img src={Company5}></img>
              </div>
              <div className="company6">
                <img src={Company6}></img>
              </div>
              <div className="company7">
                <img src={Company7}></img>
              </div>
              <div className="right-arrow">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
              </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
