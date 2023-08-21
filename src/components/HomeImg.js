import "./HomeImgStyles.css";

import React from "react";

import IntroImg from "../Pictures/bckgrnd.bg.jpg";

import { Link } from "react-router-dom";

const HomeImg = () => {
  return <div className="home">
    <div className="mask">
        <img className="into-img" src= {IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>I'm Tembelihle Biyana</p>
        <h1>SOFTWARE DEVELOPER</h1>
        <div>
          <Link to="/projects" className="btn__home">Projects</Link>
          <Link to="/Contact" className="btn btn-light__home">Contact</Link>
        </div>
    </div>
  </div>
};

export default HomeImg