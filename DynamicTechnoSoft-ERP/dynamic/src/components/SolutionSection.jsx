import React from "react";
import "./SolutionSection.css";
import Solution1 from "../assets/images/solution1.png";
import Solution2 from "../assets/images/solution2.png";
import Solution3 from "../assets/images/solution3.png";

const SolutionSection = () => {
  return (
    <section>
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

              <p>
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
                POS & Billing – Faster transactions with barcode & mobile POS
                systems.
              </p>

              <p>
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
                Customer Loyalty & Discounts – Increase repeat customers with
                AI-based engagement.
              </p>
              <p>
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
                Stock Replenishment Automation – Never run out of best-sellers.
              </p>
            </div>
          </div>
          <div className="manufacturing">
            <div className="manufacture-image">
              <img src={Solution2}></img>
              <span>Manufacturing & Production</span>
              <p>
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
                Smart Scheduling & Workflows – Reduce production delays.
              </p>
              <p>
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
                Real-Time Quality Checks – Improve product consistency.
              </p>
              <p>
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
                End-to-End Supply Chain – Track raw materials, WIP, and final
                products.
              </p>
            </div>
          </div>
          <div className="health-care">
            <div className="healthcare-image">
              <img src={Solution3}></img>
              <span>Healthcare & Pharmacy</span>
              <p>
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
                HIPAA-Compliant Patient Management.
              </p>
              <p>
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
                Medicine Inventory & Expiry Alerts.
              </p>
              <p>
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
                Billing & Insurance Processing.
              </p>
            </div>
          </div>
        </div>



        <div className="scroll-page">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1" color="#7EB90F"/></svg> */}
            <button className="empty-button"></button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" color="#7EB90F" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg> */}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
