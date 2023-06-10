import React from "react";
import "./Style.css";

import { Link } from "react-router-dom";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>;

const Home = () => {
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
            <input
              type="text"
              placeholder="Email or phone number"
              className="userdetails"
            ></input>
            <br />
            <input
              type="text"
              placeholder="Password"
              className="userpassword"
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
      <div>
        <h5>jotma lekheko because i need to upload still</h5>
      </div>
      <h5>hdsfhj bhdjwds bwehdsghjws behwdghjwe bbewhasgd hedws</h5>
      <section>
        <p>ds bdhsdhvhdghs vhsgd vdhsgd vdhsgd dhwsa </p>
      </section>
      
    </>
  );
};

export default Home;
