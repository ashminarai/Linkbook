// creating a popup component which we can pass things through
import React from "react";
import "./Style.css";

function Popup(props) {
  // props.trigger triggers down the button
  return (props.trigger) ? (
    <>
      <div className="popup">
        <div className="popup-inner">
          {/* <button className="close-btn" onClick={()=>props.setTrigger(false)}>Close</button> */}
          {props.children}
        </div>
      </div>
    </>
  ) : "";
}

export default Popup;
