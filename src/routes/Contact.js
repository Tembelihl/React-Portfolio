import React from "react";
import Navbar from "../components/Navbar";
import ContactImg from "../components/ContactImg";
import Form from "../components/Form";
import Footer from "../components/Footer";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactImg />
      <Form/>
       <Footer />
    </div>
  );
};

export default Contact