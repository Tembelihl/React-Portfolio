import "./FooterStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaFacebook, FaMailBulk, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    // ungaDelete
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="left__title">
                <h4>Get In Touch</h4>
            </div>
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>11601 Tsakane Street, Village4</p>
                        <p>Philippi Cape Town, 7785</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                +27 653563754</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    lihlebiyana1@gmail.com</h4>
                
                </div>
              </div>

                <div className="right">
                    <h4>Visit My  Social Media</h4>
                    <p>I am active on the following social media platforms. Please feel free to visit my social media platforms to learn more about my work and to connect with me.</p>
                    <div className="social"></div>
                    <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                    <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                    <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem" }}/>

            </div>
        </div>
    </div>
  );
};

export default Footer