import React from "react";
import "./WhyChoose.css";
import MainImage from "../assets/images/mainImage.png";
import Choose1 from "../assets/images/choose1.png";
import Choose2 from "../assets/images/choose2.png";
import Choose3 from "../assets/images/choose3.png";
import Choose4 from "../assets/images/choose4.png";
import Choose5 from "../assets/images/choose5.png";

const WhyChoose = () => {
  return (
    <section className="section3">
      <>
        <div className="why-choose-title">
          <h1> Why Choose</h1>
          <h1
            style={{
              color: "#00A6E0",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Pivotal
          </h1>
          <h1
            style={{
              color: "#7EB90F",
            }}
          >
            ERP
          </h1>
          <h1>?</h1>
        </div>
      </>

      <div className="choose-pivotal-main">
        {/* <div className="choose-pivotal-div"> */}
        <div className="container-div">
             <div className="blue-container">
          <div className="choose-pivotal-image">
            <img src={MainImage}></img>
          </div>
        </div>
        </div>    
       
        <div className="five-reasons">
          <div className="all-in-one">
            <div className="first-div">
                <div><img src={Choose1}></img></div>
                <div>              
                <h3>All-in-One Solution</h3>
              <p>Fully integrated modules for a seamless experience.
                </p>
                </div>

            </div>
          </div>
          <div className="scalable">
            <div className="second-div">
                <div><img src={Choose2}></img></div>
              <div>
                <h3>Scalable & Flexible</h3>
              <p>Grows with your business needs.</p>
              </div>

            </div>
          </div>
          <div className="enterprise">
            <div className="third-div">
                <div> <img src={Choose3}></img></div>
             <div> <h3>Enterprise-Grade Security</h3>
              <p>Protects your data with top-tier security protocols.</p></div>
            </div>
          </div>
          <div className="data-driven">
            <div className="fourth-div">
                <div>
                     <img src={Choose4}></img>
                </div>
             <div>
            <h3>Data-Driven Insights</h3>
              <p>AI-powered analytics for smarter decision-making.</p>
             </div>

            </div>
          </div>
          <div className="mobile-cloud">
            <div className="fifth-div">
              <div><img src={Choose5}></img></div>
              <div>
            <h3>Mobile & Cloud-Friendly</h3>
            <p>Access anywhere, anytime.</p>
              </div>

            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default WhyChoose;
