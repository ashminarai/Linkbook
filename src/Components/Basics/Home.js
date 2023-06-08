import React from "react";
import "./Style.css";

const Home = () => {
  return (
    <>
      {/* <div className="home-container">
        <div className="navigation-container">
          <div className="navigation-container-content">
            <h2 className="nfb">hi</h2>
            <h2 className="nfb">hi</h2>

          </div>

          <div className="form-container">
            <div className="form-container-content">
              <input>
              </input>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <h2>Welcome to Facebook</h2>
        <p>Log in to connect with friends and the world around you.</p>
        <p>
          <strong>Email or Phone</strong>
        </p>
      </div>
      <div className="login-container">
        <div className="logo">Facebook</div>
        <form className="login-form">
          <input type="text" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Home;
