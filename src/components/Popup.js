import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner"></div>
      <button className="close-btn">X</button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
