import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  // const userID = process.env.REACT_APP_USER_ID;
  //   console.log(userID);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "For Beauty Grace",
        form.current,
        "user_EQWKA0M4xlpIT8g3wOTqs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <form ref={form}>
      <div>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email address" name="email" required />
      </div>
      <textarea
        rows="10"
        placeholder="Message"
        name="message"
        required
      ></textarea>
      <button type="submit" onClick={sendEmail}>
        Submit
      </button>
      {/* <input type="submit" value="Submit"></input> */}
    </form>
  );
};

export default ContactForm;
