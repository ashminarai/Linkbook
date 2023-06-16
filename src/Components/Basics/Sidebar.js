import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container-content">
        <div className="sidebar-container">
          {/* <Link to="/"> */}
          <div className="sidebar">
            <img src="../Images/profile.png" className="sideprofile"></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
          {/* </Link> */}
          <div className="sidebar1">
            <img src="../Images/findfriends.png" className="findfriends"></img>
            <h5 className="friendsvetau">Find Friends</h5>
          </div>
          <div className="sidebar2">
            <img src="../Images/profile.png" className="sideprofile"></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
          <div className="sidebar3">
            <img src="../Images/profile.png" className="sideprofile"></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
          <div className="sidebar4">
            <img src="../Images/profile.png" className="sideprofile"></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
          <div className="sidebar5">
            <img src="../Images/profile.png" className="sideprofile"></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
