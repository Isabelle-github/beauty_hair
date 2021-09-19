import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <footer>
      <p> &#9400; Copyright 2021</p>
      <a href="tel:+44 7404 403711">
        <CallIcon></CallIcon>
        +44 7404 403711
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
