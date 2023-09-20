import "./AboutStyles.css";
import React from "react";
import AboutImg from "../Pictures/About.bg.jpg";
import HtmlImg from "../Pictures/Html.bg.jpg";
import CSSImg from "../Pictures/CSS.bg.jpg";
import JavascriptImg from "../Pictures/Javascript.bg.jpg";
import ReactImg from "../Pictures/React.bg.jpg";
import NodeImg from "../Pictures/Node-js.bg.jpg";
import pythonImg from "../Pictures/python.bg.jpg";
import JavaImg from "../Pictures/Java.bg.jpg";
import figmaImg from "../Pictures/figma.bg.jpg";
import firebaseImg from "../Pictures/firebase.bg.jpg";
import gitImg from "../Pictures/git.bg.jpg";
import resume from "../Pictures/Minimalist CV Resume.pdf";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={AboutImg} alt="About Image" />
        </div>
      </div>
      <div className="heading">
        <h5>Get To Know</h5>
        <h1>About Me</h1>
      </div>
      <div className="box">
        <p>
          I have a Diploma in IT from Walter Sisulu University. I am passionate
          about Web developer and Web Design. I am a skilled front-end developer
          having the knowledge of frontend and backend, I am a quick learner and
          a team worker that gets the job done. I enjoy meeting challenges and
          seeing them through, while remaining confident and good honored under
          pressure. I am self motivated and responsible Software Developer with
          knowledge and skills acquired from my studies and CapaCiTi Software
          Development Program.
        </p>
      </div>
      <div className="heading__skills">
        <h5>What I've learnt</h5>
        <h1> My Skills</h1>
      </div>
      <div className="about__me-icons">
        <img src={HtmlImg} alt="" />
        <img src={CSSImg} alt="" />
        <img src={JavascriptImg} alt="" />
        <img src={ReactImg} alt="" />
        <img src={NodeImg} alt="" />
        <img src={pythonImg} alt="" />
        <img src={JavaImg} alt="" />
        <img src={figmaImg} alt="" />
        <img src={firebaseImg} alt="" />
        <img src={gitImg} alt="" />
      </div>

      <a
        href={resume}
        download="Minimalist CV Resume.pdf"
        className="download minimalist"
      >
        Download Resume
      </a>
    </div>
  );
};
export default About;
