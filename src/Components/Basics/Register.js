import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true);
    }
    if (firstName && lastName)
      console.log("First Name:", firstName, "\nLast Name:", lastName);
  };
  return (
    <>
      <div className="register-container-content">
        <div className="register-container">
          <div className="register">
            <h2 className="nfb">facebook</h2>
            <h2 className="connect">
              Connect with friends and the world <br /> around you on Facebook
            </h2>
          </div>
        </div>

        <div className="form-container-register">
          <form className="form-container-register-content" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Email or phone number"
              className="userdetails"
            ></input>
            <br />
            {error && firstName.length <= 0 ? (
              <label className="valid">
                Username or email cannot be empty.
              </label>
            ) : (
              ""
            )}
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Password"
              className="userpassword"
            ></input>
            <br />
            {error && lastName.length <= 0 ? (
              <label className="valid">Last name cannot be empty.</label>
            ) : (
              ""
            )}
            <br/>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="email"
            ></input>
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

export default Register;
