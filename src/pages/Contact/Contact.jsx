import React from "react";
import '../../styles/contact.css'
import HeaderPageText from "../../UI/header-page-text/HeaderPageText";

const Contact = () => {

  return (
    <div className="contact-parent" id="contact">
      <HeaderPageText header='Contact'
        text='Curabitur arcu erat,
     accumsan id imperdiet et,
     porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.'/>
      <div className="form-container">
        <form action="">
          <input type="text" name="name" id="" placeholder="Your Name" />
          <input type="text" name="email" id="" placeholder="Your Email" />
          <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
          <button>Send Message</button>
        </form>
        <div className="details">
          <div className="numbers">
            <h4>Get in Touch</h4>
            <p>+00 123.456.789</p>
            <p>+00 123.456.789</p>
          </div>
          <div className="address">
            <h4>Where are you</h4>
            <p>Awesome Address 17 <br />New York, NYC <br />123-4567-890 <br />USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
