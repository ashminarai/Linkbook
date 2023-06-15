import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';
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
            {/* <HomeIcon/> */}
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
            <i class="fa-sharp fa-solid fa-house hover-element"></i>
            <span class="home">Home</span>
          </div>
          <div class="container2">
            <i class="fa-solid fa-user-group"></i>
            <span class="home">Friends</span>
          </div>
          <div class="container3">
            <i class="fa-solid fa-store"></i>
            <span class="home">Markets</span>
          </div>
          <div class="container4">
            <i class="fa-solid fa-people-group"></i>
            <span class="home">Groups</span>
          </div>
          <div class="container5">
            <i class="fa-solid fa-gamepad"></i>
            <span class="home">Gaming</span>
          </div>

          <div class="container6">
          <i class="fa-solid fa-bars"></i>
          <span className="home">Menu</span>
          </div>


          
        </div>
        demo
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
