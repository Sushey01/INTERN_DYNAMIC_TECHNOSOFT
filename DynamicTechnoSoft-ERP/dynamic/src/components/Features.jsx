import React from 'react'
import "./Feature.css"
import Feature1 from '../assets/images/feature1.png'
import Feature2 from '../assets/images/feature2.png'
import Feature3 from '../assets/images/feature3.png'
import Feature4 from '../assets/images/feature4.png'
import Feature5 from '../assets/images/feature5.png'
import Feature6 from '../assets/images/feature6.png'

const Features = () => {
  return (
    <section className='section1'>
        <div className="modules-features">
            <div className='feature-heading'><h2>Core ERP Modules & Features </h2>
            </div>
            <div className="six-features">
            <div className="first-feature">
              <div className="first-feature-box">
                <img src={Feature1}></img>
              <h3>Finance & Accounting</h3>
              <p>Automate invoicing, compliance, and real-time financial tracking.</p>
              <p>Gain full control over your business cash flow.</p>
              </div>
              
            </div>
            <div className="second-feature">
              <div className="second-feature-box">
                <img src={Feature2}></img>
              <h3>Inventory & Supply Chain</h3>
              <p>
                AI-powered stock management to prevent overstocking or shortages.
              </p>
              <p>Supplier and procurement automation. </p>
              </div>
              
            </div>
            <div className="third-feature">
             <div className="third-feature-box">
               <img src={Feature3}></img>
              <h3>Sales & CRM</h3>
              <p>Engage customers, track sales, and automate follow-ups.</p>
              <p>Detailed sales insights to help you grow faster.</p>
             </div>
            </div>
            <div className="fourth-feature">
              <div className="fourth-feature-box">
                <img src={Feature4}></img>
              <h3>Human Resource Management</h3>
              <p>Payroll automation, attendance tracking, and performance insights.</p>
              <p>Reduce HR workload and focus on employee productivity.</p>
              </div>
            </div>
            <div className="fifth-feature">
              <div className="fifth-feature-box">
                <img src={Feature5}></img>
              <h3>Manufacturing & Production</h3>
              <p>Optimize production planning, scheduling, and quality control.</p>
              <p>Reduce downtime and maximize efficiency.</p>
              </div>
            </div>
            <div className="sixth-feature">
              <div className="sixth-feature-box">
                              <img src={Feature6}></img>
              <h3>Project Management</h3>
              <p>Keep your projects on track with smart collaboration tools</p>
              <p>Live dashboards and real-time reporting</p>
              </div>
            </div>
            </div>

            <div className='feature-button'>
            <button>Explore all features</button>
            </div>
        </div>
    </section>
  )
}

export default Features
