import React from "react";

const ContactForm = () => {
  return (
    <form
      id="contact-form"
      // onSubmit={this.handleSubmit.bind(this)}
      method="POST"
    >
      <div>
        <input type="text" placeholder="Name" />
        <input
          type="email"
          //   aria-describedby="emailHelp"
          placeholder="Email address"
          required
        />
      </div>
      <textarea rows="5" placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
