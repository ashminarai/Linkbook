import React, { useState } from "react";
import "./Style.css";

import { Link } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>;

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true);
    }
    console.log(firstName,lastName);
  };
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
          <form className="form-container-content" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Email or phone number"
              className="userdetails"
            ></input>
            <br />
            {error&&firstName.length<=0? <label>Username or email cannot be empty.</label> : ""}
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Password"
              className="userpassword"
            ></input>
            {error&&lastName.length<=0?
            <label>Last name cannot be empty.</label>:""}
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
