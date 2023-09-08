import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";
import React from "react";

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    function showAlert() {
      alert("Your message has been sent.");
    }

    const button = document.querySelector("button");
    button.onclick = showAlert;

    emailjs
      .sendForm(
        "service_a4mgkfm",
        "template_96dm2fq",
        form.current,
        "1q-hx506alRfH1SRC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label> Full Name</label>
        <input type="text" name="from_name" placeholder="Enter Name" required />
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          placeholder="example@gmail.com"
          required
        />
        <label>Phone</label>
        <input type="phone" name="from_phone" placeholder="+27" required />
        <label>Message</label>
        <textarea
          name="from_message"
          placeholder="Type Message Here..."
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Form;
