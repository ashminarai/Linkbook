import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
// import {Search} from "@material-ui/icons"

const Topload = () => {
  return (
    <>
      <div className="topbarContanier">
        <div className="topbarcontent">
          <div className="topbar-container">
            <Link to="/">
              <img src="../Images/logo.png" className="logo"></img>
            </Link>
          </div>
          <div className="topbar-container1">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Linkbook"
              className="search"
            ></input>
          </div>
          <div class="container">
            {/* <div class="hover-element"> */}
            <i class="fa-sharp fa-solid fa-house hover-element"></i>
              <span class="text">Home</span>
            </div>
          </div>

          {/* <div className="topbar-container2">
            <i class="fa-sharp fa-solid fa-house"></i>
            <br />
            <br />
            <span className="fa-sharps">Home</span>
          </div> */}
          {/* <div className="topbar-container3">
            <i class="fa-solid fa-user-group"></i>
          </div>

          <div className="topbar-container4">
            <i class="fa-solid fa-store"></i>
          </div>
          <div className="topbar-container5">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <div className="topbar-container6">
            <i class="fa-solid fa-gamepad"></i>
          </div> */}
        </div>
    </>
  );
};

export default Topload;
