import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main>
      <div className="parallax bgContact">
        <h1>contact</h1>
      </div>
      <div class="map">
        <iframe
          width="1046"
          height="399"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=15%20Wordsworth%20Ave,%20Doncaster%20DN4%208JU,%20%D7%91%D7%A8%D7%99%D7%98%D7%A0%D7%99%D7%94&t=k&z=17&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <div>
        <ContactForm></ContactForm>
        <aside></aside>
      </div>
    </main>
  );
};

export default Contact;
