import React from "react";
import "./CustomerReview.css";
import Customer1 from "../assets/images/customer1.png";
import Customer2 from "../assets/images/customer2.png";
import Customer3 from "../assets/images/customer3.png";

const CustomerReview = () => {
  return (
    <section className="section6">
      <div className="customer-heading">
        <h1
          style={{
            color: "#00A6E0",
          }}
        >
          Customer
        </h1>
        <h1>Success</h1>
        <h1
          style={{
            color: "#7EB90F",
          }}
        >
          Stories
        </h1>
      </div>
 
      <div className="customer-reviews">
        <div className="customer1">
          <div className="customer1-image">
            <img src={Customer1}></img>
            <div className="customer1-info">
              <h3 style={{
                color:"#FFFFFF",
                fontSize:"14px",
                paddingBottom:"5px",
              }}>Sarah Lee</h3>
              <h3 style={{
                color:"#FFFFFF80",
                fontSize:"12px",

              }}>CFO, Global Innovations Ltd.</h3>
            </div>
          </div>
          <div className="customer1-container">
            <h3>
              From inventory tracking to automated invoicing, everything is now
              streamlined and stress-free! From inventory tracking to automated
              invoicing, everything is now streamlined and stress-free!”
            </h3>
          </div>
        </div>

        <div className="customer2">
          <div className="customer2-image">
            <img src={Customer2}></img>
            <div className="customer2-info">
            <h3 style={{
                color:"#ffffff",
                fontSize:"16px",
                paddingBottom:"10px"
            }}>Michael Chan</h3>
            <h3 style={{
                color:"#E5E5E5",
                fontSize:"14px",
                fontWeight:"300"
            }}>CFO, Global Innovations Ltd.</h3>
            </div>
          </div>
    
          <div className="customer2-container">
            <h3>
              The AI-driven insights have revolutionized our decision-making
              process. We're now always one step ahead of market trends.The
              AI-driven insights have revolutionized our decision-making
              process. We're now always one step ahead of market trends.
            </h3>
          </div>
        </div>

        <div className="customer3">
          <div className="customer3-image">
            <img src={Customer3}></img>
            <div className="customer3-info">
            <h3 style={{
                color:"#ffffff",
                fontSize:"16px",
                paddingBottom:"5px"
            }}>Sarah Lee</h3>
            <h3 style={{
                color:"#FFFFFF80",
                fontSize:"14px"
            }}>CFO, Global Innovations Ltd.</h3>
            </div>
          </div>
          <div className="customer3-container">
            <h3>
              From inventory tracking to automated invoicing, everything is now
              streamlined and stress-free! From inventory tracking to automated
              invoicing, everything is now streamlined and stress-free!”
            </h3>
          </div>
        </div>
        
      </div>
            <div className="slide-button">
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="#00A6E0" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
            <button className="slider"></button>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="#00A6E0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
      </div>
    </section>
  );
};

export default CustomerReview;
