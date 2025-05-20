import React, { useState } from "react";
import "./Schedule.css";
import Schedule1 from "../assets/images/schedule1.png";
import Schedule2 from "../assets/images/schedule2.png";
import Schedule3 from "../assets/images/Vector.svg"

const Schedule = () => {
      const [fName, setFName] = useState("");
      const [lName, setLName] = useState("");
      const[email, setEmail] = useState("");
      const[companyName, setCompanyName] = useState("")





      function handleSubmit(e){
        e.preventDefault();


        if (!fName || !lName || !email || !companyName) return;
        alert("Please fill all the details")
      }


  return (

    <section className="section7">
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


    
      <div className="schedule-container">
         <div className="schedule-title">
        <h1>Schedule a demo</h1>
        </div>

        <form className="schedule-form" onSubmit={handleSubmit}>
            
            <div className="first-last-name">
                     <label>First name</label>
            <input className="first-name"
            type="text"
            value={fName}
            placeholder="Enter your first name"
            onChange={(e)=>setFName(e.target.value)}
            />

         

            <label>Last name</label>
            <input
            type="text"
            value={lName}
            placeholder="Enter your last name"
            onChange={(e)=>setLName(e.target.value)}
            />
            </div>
       


            <label>Work email</label>
            <input
            type="text"
            value={email}
            placeholder="Enter your work email"
            onChange={(e)=>setEmail(e.target.value)}
            />


            <label>Company name</label>
            <input
            type="text"
            value={companyName}
            placeholder="Enter your company name"
            onChange={(e)=>setCompanyName(e.target.value)}
            />


            <div className="condition-message">
                <img src={Schedule3}></img>
                <h1>I accept Privacy Policy and agree to receive promotional messages from PivotalERP about its products and services. You can unsubscribe at any time by clicking on the link at the bottom of our emails.</h1>
            </div>
            <button>Send Message</button>
        </form>
      </div>
      </div>

      <div className="send-button">
        
      </div>
    </section>
  );
};

export default Schedule;
