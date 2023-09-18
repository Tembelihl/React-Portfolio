import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const form = useRef();
  const sendEmail = (e) => {
    // e.preventDefault();

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
          // setMessageSent(true)
          console.log("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label> Full Name</label>
        <input type="text" name="name" placeholder="Enter Name" required />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />
        <label>Phone</label>
        <input type="phone" name="phone" placeholder="+27" required />
        <label>Message</label>
        <textarea name="message" placeholder="Type Message Here..." required />
        <div className="recapture">
          <ReCAPTCHA
            sitekey="6LdSYSAoAAAAAA13T6AJcMtLZ1FjXBFn2WBGC-Wr"
            onChange={onChange}
          />
        </div>
        <button onclick="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Form;
