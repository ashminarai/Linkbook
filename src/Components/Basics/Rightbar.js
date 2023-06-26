import React from "react";
import "./Style.css";

const Rightbar = () => {
  return (
    <>
      <section className="rightsquad">
        <h3 className="demosponsered">Sponsored</h3>
        <img
          className="rightsponser"
          src="../Images/sponser.png"
          alt="sp"
        ></img>
        <hr className="contactshr" />
        <div className="contacts-container-content">
          <div className="contacts-container">
            <h3 className="rightcontactss">Contacts</h3>
          </div>
          <div className="contacts-container1">
            <img
              src="../Images/camcroder.png"
              alt="cam"
              className="camcroder"
            ></img>
          </div>
          <div className="contacts-container2">
            <img
              src="../Images/investigate.png"
              alt="invest"
              className="investigate"
            ></img>
          </div>
          <div className="contacts-container3">
            <img
              src="../Images/loader.png"
              alt="invest"
              className="investigate"
            ></img>
          </div>
        </div>
        <img
          src="../Images/contactli.png"
          alt="contact"
          className="contlist"
        ></img>
      </section>
    </>
  );
};

export default Rightbar;
