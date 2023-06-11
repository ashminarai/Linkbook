import React, { useState } from "react";
import "./Style.css";

import { Link } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>;

const Home = () => {
  const [firstname, setFirstName]=useState('')
  const [lastname, setLastName]=useState('')
  return (
    <>
      <div className="logintext-container">
        <div className="login-textcontainer-content">
          <h2 className="nfb">facebook</h2>
          <h2 className="connect">
            Connect with friends and the world <br /> around you on Facebook
          </h2>
        </div>

        <div className="form-container">
          <form className="form-container-content">
            <input onChange={e=>setFirstName(e.target.value)}
              type="text"
              placeholder="Email or phone number"
              className="userdetails"
            ></input>
            <br />
            <label>Username or email cannot be empty.</label>
            <input onChange={e=>setLastName(e.target.value)}
              type="text"
              placeholder="Password"
              className="userpassword"
            ></input>
            <label>Last name cannot be empty.</label>
            <label>Password should consist of more characters</label>
            <button type="submit" className="loginbutton">
              Log In
            </button>
            <div className="fpw">
              <Link to="/Forgot" className="forgetpassword">
                Forgot Password?{" "}
              </Link>
            </div>
            <hr className="loginhr" />
            <Link to="/register">
              <button type="submit" className="create">
                Create new account
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="final-login-container">
        <div className="final-login">
          <h5>Create a Page</h5>
        </div>
        <div className="final-login-one">
          <p>for a celebrity, brand or business.</p>
        </div>
      </div>
      
    </>
  );
};

export default Home;
