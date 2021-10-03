import React from "react";
import ContactForm from "./ContactForm";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import "./styles/contact.scss";

const Contact = () => {
  return (
    <main>
      <div className="parallax bgContact">
        <h1>Let me take care of your Hair! Write/Call to schedule a Meeting</h1>
      </div>
      <div className="map">
        <iframe
          title="map"
          width="1046"
          height="399"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=15%20Wordsworth%20Ave,%20Doncaster%20DN4%208JU,%20%D7%91%D7%A8%D7%99%D7%98%D7%A0%D7%99%D7%94&t=k&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      <div className="form-area" id="contactForm">
        <ContactForm></ContactForm>
        <aside>
          <h2>BEAUTY GRACE</h2>
          <a href="tel:+44 7404 403711">
            <CallIcon></CallIcon>
            +44 7404 403711
          </a>
          {/* <p></p> */}
          <a href="mailto:tianamatawe@yahoo.fr">
            <EmailIcon></EmailIcon>
            tianamatawe@yahoo.fr
          </a>
          {/* <p>15 Wordsworth Ave</p>
          <p>Doncaster DN4 8JU, UK</p> */}
          <h2>WORKING HOURS</h2>
          <p>Mon - Fri: 9am - 2pm</p>
          <p>Sat - Sun: 1pm - 5pm</p>
        </aside>
      </div>
    </main>
  );
};

export default Contact;
