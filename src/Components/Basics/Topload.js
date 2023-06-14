import React from "react";
import "./Style.css";
// import {Search} from "@material-ui/icons"

const Topload = () => {
  return (
    <>
      <div className="topbarContanier">
        <div className="topbarcontent">
          <div className="topbar-container">
            <img src="../Images/logo.png" className="logo"></img>
          </div>
          <div className="topbar-container1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Linkbook"
              className="search"
            ></input>
          </div>

          <div className="topbar-container2">
            <i class="fa-sharp fa-solid fa-house"></i>
          </div>
          <div className="topbar-container2">
            <i class="fa-solid fa-user-group"></i>
          </div>

          <div className="topbar-container2">
          <i class="fa-solid fa-store"></i>
          </div>
          <div className="topbar-container2">
          <i class="fa-solid fa-people-group"></i>
          </div>
          <div className="topbar-container2">
          <i class="fa-solid fa-gamepad"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topload;
