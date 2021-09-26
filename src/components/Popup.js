import React from "react";
import "./styles/popup.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p>
          Thank you {props.nameUser} for contacting us! A confirmation Email has
          been sent to you. Our Beauty Grace Team will get in touch with you
          soon!
        </p>
        <button className="close-btn" onClick={() => props.sethidePopup(false)}>
          X
        </button>
      </div>

      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
