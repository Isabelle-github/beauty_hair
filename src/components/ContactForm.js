import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { contactSchema } from "./FormValidation";

const ContactForm = () => {
  const form = useRef();
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const validateInputs = async (e) => {
    // setInputs({
    //   name: e.target.value,
    //   email: e.target.value,
    //   message: e.target.value,
    // });
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    // const isValid = await contactSchema.isValid(inputs);
    setIsValid(await contactSchema.isValid(inputs));
    console.log(isValid);
    setErrorMessage(
      isValid ? "" : "Please enter valid Name, Email and Message"
    );
  };

  // const userID = process.env.REACT_APP_USER_ID;
  //   console.log(userID);
  const sendEmail = (e) => {
    if (isValid) {
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
    } else {
      setErrorMessage("Please enter valid Name, Email and Message");
    }
  };
  return (
    <form ref={form}>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          onChange={validateInputs}
        />

        <input
          type="email"
          placeholder="Email address"
          name="email"
          required
          onChange={validateInputs}
        />
      </div>
      <textarea
        rows="10"
        placeholder="Message"
        name="message"
        required
        onChange={validateInputs}
      ></textarea>
      <p>{errorMessage}</p>
      <button type="submit" onClick={sendEmail}>
        Submit
      </button>
      {/* <input type="submit" value="Submit"></input> */}
    </form>
  );
};

export default ContactForm;
