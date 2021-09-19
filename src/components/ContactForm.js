// require("dotenv").config;
import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "For Beauty Grace",
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form}>
      <div>
        <input required type="text" placeholder="Name" name="name" />
        <input
          type="email"
          //   aria-describedby="emailHelp"
          placeholder="Email address"
          name="email"
          required
        />
      </div>
      <textarea
        required
        rows="10"
        placeholder="Message"
        name="message"
      ></textarea>
      <button type="submit" onclick={sendEmail}>
        Submit
      </button>
      {/* <input type="submit" value="Submit"></input> */}
    </form>
  );
};

export default ContactForm;
