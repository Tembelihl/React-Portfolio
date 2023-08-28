import "./ContactImgStyles.css";
import React from "react";
import ContImg from "../Pictures/Contact.bg.jpg";

const ContactImg = () => {
  return <div className="contact">
  <div className="image">
      <img className="into-img" src= {ContImg} alt="ContImg" />
  </div>
  <div className="title">
    <h1>Contact</h1>
    <p>Let's have a chat</p>
    </div>  
  </div>
};

export default ContactImg