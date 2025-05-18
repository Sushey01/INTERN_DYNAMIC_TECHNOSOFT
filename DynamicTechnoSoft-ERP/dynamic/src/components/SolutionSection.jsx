import React from "react";
import "./SolutionSection.css";
import Solution1 from "../assets/images/solution1.png";
import Solution2 from "../assets/images/solution2.png";
import Solution3 from "../assets/images/solution3.png";

const SolutionSection = () => {
  return (
    <section className="section2">
      <div className="solution-page">
        <div className="solution-title">
          <h2>Industry-Specific Solutions</h2>
          <h3>
            Whether you run a retail store, manufacturing business, or
            service-based enterprise, our ERP adapts to you!
          </h3>
        </div>

        <div className="major-locations">
          <div className="retail-ecommerce">
            <div className="ecommerce-contents">
              <img src={Solution1}></img>
              <span>Retail & eCommerce</span>
            </div>
            <div className="ecommerce-paragraph">
            
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="#7EB90F"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <p>  POS & Billing – Faster transactions with barcode & mobile POS
                systems.</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                   color="#7EB90F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <p>Customer Loyalty & Discounts – Increase repeat customers with
                AI-based engagement.</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                   color="#7EB90F"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <p>Stock Replenishment Automation – Never run out of best-sellers.</p>

            </div>
              
          </div>
          <div className="manufacturing">
            <div className="manufacture-image">
              <img src={Solution2}></img>
              <span>Manufacturing & Production</span>
              </div>
              <div className="manufacture-paragraph">
          
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                   color="#7EB90F"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <p>Smart Scheduling & Workflows – Reduce production delays.</p>
            
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   color="#7EB90F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
               <p> Real-Time Quality Checks – Improve product consistency.</p>
          
             
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   color="#7EB90F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              <p>  End-to-End Supply Chain – Track raw materials, WIP, and final
                products.</p>
          
              </div>
          </div>
          <div className="health-care">
            <div className="healthcare-image">
              <img src={Solution3}></img>
              <span>Healthcare & Pharmacy</span>
            </div>
            <div className="healthcare-paragraph">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                   color="#7EB90F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
               <p>HIPAA-Compliant Patient Management.</p>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                   color="#7EB90F"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
      
              <p>Medicine Inventory & Expiry Alerts.</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                   color="#7EB90F"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              <p> Billing & Insurance Processing.</p>
            </div>
          </div>
  
        </div>

      <div className="scroll-page">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="#00A6E0" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1" /></svg>
            <button className="empty-button"></button>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="#00A6E0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
        </div>


      </div>
    </section>
  );
};

export default SolutionSection;
