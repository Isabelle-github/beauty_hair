import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <footer>
      <p> &#9400; Copyright 2021</p>
      <a href="tel:555-666-7777">
        <CallIcon></CallIcon>
        (435)346-1098
      </a>
      <a href="mailto:abc@example.com">
        <EmailIcon></EmailIcon>
        My@Email.com
      </a>
      <a href="https://www.facebook.com/matawe.tatiana">
        <FacebookIcon></FacebookIcon>
        Follow me on Facebook
      </a>
    </footer>
  );
};

export default Footer;
