import React from "react";
import "./Style.css";
// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <section className="sidebarsquad">
      <div className="sidebar-container-content">
        <div className="sidebar-container">
          {/* <Link to="/"> */}
          <div className="sidebar">
            <img src="../Images/profile.png" className="sideprofile"  alt=""></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
          {/* </Link> */}
          <div className="sidebar1">
            <img src="../Images/findfriends.png" className="findfriends"  alt=""></img>
            <h5 className="friendsvetau">Find Friends</h5>
          </div>
          <div className="sidebar2">
            <img src="../Images/newsfeed.png" className="feeds"  alt=""></img>
            <h5 className="feedsvetau">Feeds (most recent)</h5>
          </div>
          
          <div className="sidebar3">
            <img src="../Images/Groups.png" className="sidegroups"  alt=""></img>
            <h5 className="groupvetau">Groups</h5>
          </div>
          <div className="sidebar4">
            <img src="../Images/Marketplace.png" className="marketplace"  alt=""></img>
            <h5 className="market">Marketplace</h5>
          </div>
          <div className="sidebar4">
            <img src="../Images/Marketplace.png" className="marketplace"  alt=""></img>
            <h5 className="market">Marketplace</h5>
          </div>
         
        </div>
        <hr className="sidebarshr"/>

        <div className="sidebar-container">
          {/* <Link to="/"> */}
          <div className="sidebar">
            <img src="../Images/profile.png" className="sideprofile"  alt=""></img>
            <h5 className="profilename">Ashmina Rai</h5>
          </div>
          {/* </Link> */}
          <div className="sidebar1">
            <img src="../Images/findfriends.png" className="findfriends"  alt=""></img>
            <h5 className="friendsvetau">Find Friends</h5>
          </div>
          <div className="sidebar2">
            <img src="../Images/newsfeed.png" className="feeds"  alt=""></img>
            <h5 className="feedsvetau">Feeds (most recent)</h5>
          </div>
          
          <div className="sidebar3">
            <img src="../Images/Groups.png" className="sidegroups"  alt=""></img>
            <h5 className="groupvetau">Groups</h5>
          </div>
          <div className="sidebar4">
            <img src="../Images/Marketplace.png" className="marketplace"  alt=""></img>
            <h5 className="market">Marketplace</h5>
          </div>
          <div className="sidebar4">
            <img src="../Images/Marketplace.png" className="marketplace"  alt=""></img>
            <h5 className="market">Marketplace</h5>
          </div>
         
        </div>
      </div>
      </section>
      
    </>
  );
};

export default Sidebar;
