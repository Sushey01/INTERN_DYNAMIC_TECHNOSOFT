import React from 'react'
import './Information.css'
import Information1 from '../assets/images/information1.png'
import Information2 from '../assets/images/information2.png'

export default function Information() {
  return (

    <section className='section5'>
    <div className='main-information'>
      <div className="info-heading">
        <h1> At Pivotal Technologies Pvt Ltd, we prioritize the security and compliance
        of your data.</h1>
        <h5 className='border-line'>___</h5>
      </div>

      <div className="two-information">
        <div className="info-1">
            <img src={Information1}></img>
            <p>Our information security management system is ISO 27001 certified, ensuring robust data protection. IRD Certified</p>
        </div>

        <div className="info-2">
            <img src={Information2}></img>
            <p>We are recognized by the Inland Revenue Department (IRD), reflecting our adherence to national standards and regulations.</p>
        </div>
      </div>

      <div className="small-info">
        <h3>Your data is encrypted all the way, at all times.</h3>
      </div>

      <div className="six-infos">
        <div className='first-three-infos'>
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
                <p>ISO 27001 Certified</p>

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

                <p>Triple replication for enhanced data security.</p>

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

                <p>Strict privacy policies: we do not share or sell your data.</p>
                </div>

                <div className='second-three-infos'>
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
                <p>Data encryption at rest and in transit, accessible only with your authorization.</p>

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

                <p>Multi-layered security protocols encompassing both infrastructure and software.</p>



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

                <p>Daily comprehensive data backups.</p>
                </div>
      </div>
    </div>
    </section>
  )
}


