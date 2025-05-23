import React from "react";
import "./Contact.css";
import Contact0 from "../assets/images/contact.png";
import Contact1 from "../assets/images/contact1.png";
import Contact2 from "../assets/images/contact2.png";
import Contact3 from "../assets/images/contact3.png";

const Contact = () => {
  return (
    <section className="section4">
      <div className="main-contact">
        <div className="contact-page">

            <h1 className="contact-us">Contact Us About</h1>

          
          <div className="second-title">
            <h1 style={{
              color:"#00A6E0"
            }}>Pivotal</h1>
            <h1 style={{
              color:"#7EB90F"
            }}>ERP</h1>
          </div>

          <div className="contact-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue.
            </p>
          </div>


     
          <div className="contact-method">
            <div className="call-us">
              <img src={Contact1}></img>
              <h5>Call us directly</h5>
              <h5>+977 9987654321</h5>
              <h5 className="local-number" >See more locals number</h5>
            </div>

            <div className="chat-team">
              <img src={Contact2}></img>
              <h5>Chat with our sales teams</h5>
              <button >Chat with sales</button>
            </div>

            <div className="product-demo">
              <img src={Contact3}></img>
              <h5>Get a product demo</h5>
              <button>Get a demo</button>
            </div>
          </div>


        </div>
            <div className="contact-img-section">
            <img src={Contact0}></img>
          </div>
      </div>
    </section>
  );
};

export default Contact;
