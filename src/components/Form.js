import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormStyles.css";
import React from "react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4mgkfm', 'template_96dm2fq', form.current, '1q-hx506alRfH1SRC')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent Successfully")
      }, (error) => {
          console.log(error.text);
      }
      );
  };
    
  return <div className="form">
  <h1>Contact <span>Here</span></h1>
      <form ref={form} onSubmit={sendEmail}>
      <label> Full Name</label>
      <input type="text" name="Enter Name" required/>
      <label>Email</label>
      <input type="email" name="example@gmail.com" required/>
      <label>Phone</label>
      <input type="phone" name="+27" required/>
      <label>Message</label>
      <textarea name=" Type Message Here..." required/>
      <button type="submit>"> Send Message</button>
    </form>
    </div> 

    };
export default Form;