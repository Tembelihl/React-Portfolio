import "./FormStyles.css";
import React from 'react'

const Form = () => {
  return <div className="form">
  <form>
  <label>Your Name</label>
  <input type="text" value="Type your name here"/>
  <label>Your Email</label>
  <input type="text" value="Type your email here"/>
  <label>Message</label>
  <textarea rows="6" placeholder="Type your message here"></textarea>
  <button className="btn">Send Message</button>
  </form>
</div>
};

export default Form