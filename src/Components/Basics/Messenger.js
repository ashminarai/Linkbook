import React from 'react'
import "./Style.css";
import { Link } from "react-router-dom";

const Messenger = () => {
  return (
   <>
   <section className="toploadsquad">
        <div className="topbarContanier">
          <div className="topbarcontent">
            <div className="topbar-container">
              <Link to="/">
                <img src="../Images/logo.png" className="logo" alt=""></img>
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
              {/* <img className="fa-sharp fa-solid fa-house hover-element" src="../Images/house.png"  alt=""></img> */}
              <i class="fa-sharp fa-solid fa-house hover-element"></i>
              <span class="home">Home</span>
            </div>
            <div class="container2">
              <i class="fa-solid fa-user-group"></i>
              <span class="home">Friends</span>
            </div>
            <div class="container3">
              <i class="fa-solid fa-store"></i>
              <span class="home">Marketplace</span>
            </div>
            <div class="container4">
              <i class="fa-solid fa-people-group"></i>
              <span class="home">Groups</span>
            </div>
            <div class="container5">
              <i class="fa-solid fa-gamepad"></i>
              <span class="home">Gaming</span>
            </div>

            <div class="container12">
              <i class="fa-solid fa-bars"></i>
              <span className="home">Menu</span>
              {/* <Popup trigger={buttonPopup} setTrigger={() => setButtonPopup}>
                <h5 className="chatboxlist">messenger list</h5>
              </Popup> */}
            </div>

            {/* <div class="container7" onClick={() => setButtonPopup(true)}> */}


           
           {/* <div class="container7">
                <i class="fa-brands fa-facebook-messenger">{""}</i>
                <span className="home">Messenger</span>
              </div> */}
          
              
          

            <div class="container8">
              <i class="fa-solid fa-bell"></i>
              <span className="home">Notifications</span>
            </div>
            <div class="container9">
              <img src="../Images/User.jpeg" className="user" alt=""></img>
              <span className="home">Account</span>
            </div>
          </div>
        </div>

        demo
      </section>

     
   </>
  )
}

export default Messenger;