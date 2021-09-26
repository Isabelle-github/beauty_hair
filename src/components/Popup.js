import React from "react";
import "./styles/popup.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">x</button>
      </div>

      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
