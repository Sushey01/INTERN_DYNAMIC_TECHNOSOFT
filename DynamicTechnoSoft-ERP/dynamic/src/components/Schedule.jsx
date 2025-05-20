import React, { useState } from "react";
import "./Schedule.css";
import Schedule1 from "../assets/images/schedule1.png";
import Schedule2 from "../assets/images/schedule2.png";
import Schedule3 from "../assets/images/Vector.svg";
import PlayButton from "../assets/images/play.svg"

const Schedule = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!fName || !lName || !email || !companyName) return;
    alert("Please fill all the details");
  }

  return (
    <section className="section7">
      <div className="main-chart-container">
      <div className="chart-container">
        
        <div className="two-charts">
          <div className="first-chart">
            <div className="two-div">
              <div className="blank"></div>
              <div className="chart">
                <img src={Schedule1}></img>
              </div>
            </div>
          </div>

          <div className="second-chart">
            <img src={Schedule2}></img>
          </div>

   
        </div>
               {/* <div className="learn-more-div">
            <img src={PlayButton}></img>
            <div className="learn-content">
              <h6>Learn More</h6>
              <p>1.45 min</p>
            </div>
          </div> */}


        <div className="schedule-container">
          <div className="schedule-title">
            <h1>Schedule a demo</h1>
          </div>

          <form className="schedule-form" onSubmit={handleSubmit}>
            <div className="first-last-name">
              <div className="fname">
                <label>First name</label>
                <input
                  className="first-name"
                  type="text"
                  value={fName}
                  placeholder="Enter your first name"
                  onChange={(e) => setFName(e.target.value)}
                />
              </div>

              <div className="lname">
                <label>Last name</label>
                <input
                className="last-name"
                  type="text"
                  value={lName}
                  placeholder="Enter your last name"
                  onChange={(e) => setLName(e.target.value)}
                />
              </div>
            </div>


        <div className="email-address">
            <label>Work email</label>
            <input
            className="email"
              type="text"
              value={email}
              placeholder="Enter your work email"
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    
            <div className="company-name">
            <label>Company name</label>
            <input
            className="company"
              type="text"
              value={companyName}
              placeholder="Enter your company name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            </div>
    

            <div className="condition-message">
              <img src={Schedule3}></img>
              <h1>
                I accept Privacy Policy and agree to receive promotional
                messages from PivotalERP about its products and services. You
                can unsubscribe at any time by clicking on the link at the
                bottom of our emails.
              </h1>
            </div>
            <div className="send-button">
                <button className="schedule-button">Send Message</button>
            </div>
            
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Schedule;
