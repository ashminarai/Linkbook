import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
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

            <div class="container6">
              <i class="fa-solid fa-bars"></i>
              <span className="home">Menu</span>
              {/* <Popup trigger={buttonPopup} setTrigger={() => setButtonPopup}>
                <h5 className="chatboxlist">messenger list</h5>
              </Popup> */}
            </div>

            {/* <div class="container7" onClick={() => setButtonPopup(true)}> */}

            <Link to="/messengerchatbox">
              <div class="container7">
                <i class="fa-brands fa-facebook-messenger">{""}</i>
                <span className="home">Messenger</span>
              </div>
            </Link>

            <div class="container8">
              <i class="fa-solid fa-bell"></i>
              <span className="home">Notifications</span>
            </div>

            <Link to="/userprofile">
              <div class="container9">
                <img src="../Images/User.jpeg" className="user" alt=""></img>
                <span className="home">Account</span>
              </div>
            </Link>
          </div>
        </div>

        {/* profile actual content starts after nav bar */}

        <div className="account-profile">
          <img src="../Images/cover.JPG" className="coverpicture" alt=""></img>
        </div>

        <div className="profileaccount-container-content">
          <div className="profileaccount-container">
            <div className="profile-content">
              <img
                src="../Images/anita.jpeg"
                className="profilepictures"
                alt=""
              ></img>
            </div>
            <div className="profile-content1">
              <h1>Anita Paudel</h1>
            </div>
            <div className="profile-content2">
              <i class="fa-solid fa-user-plus profileadds"></i>
              <h5>Add friend</h5>
              {/* <button>Add friend</button> */}
            </div>
            <div className="profile-content3">
              <i class="fa-brands fa-facebook-messenger profilechat"></i>
              <h5>Message</h5>
            </div>
            <div className="profile-content4">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <hr className="accountshr" />

        <div className="profileaccountlists-container-content">
          <div className="profileaccountlist-container">
            <div className="profileaccountlist-content">
              <h2>Posts</h2>
            </div>
            <div className="profileaccountlist-content1">
              <h2>About</h2>
            </div>
            <div className="profileaccountlist-content2">
              <h2>Friends</h2>
            </div>
            <div className="profileaccountlist-content3">
              <h2>Photos</h2>
            </div>
            <div className="profileaccountlist-content4">
              <h2>Videos</h2>
            </div>
            <div className="profileaccountlist-content5">
              <h2>Check-ins</h2>
            </div>
            <div className="profileaccountlist-content6">
              <img src="../Images/loader.png" className="aload" alt=""></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
