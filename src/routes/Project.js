import React from "react";
import "./Projects.css";
import Navbar from "../components/Navbar";
import MzamoImg from "../Pictures/mzamo.bg.jpg";
import ChatImg from "../Pictures/chatapp.bg.jpg";
import PortfolioImg from "../Pictures/Portfolio.bg.jpg";
import FinanceImg from "../Pictures/financecalc.bg.jpg";

const Project = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="project_section" class="container">
 </div>
 <div className="project__heading">
 <p>My Recent Work</p>
    <h1>Project</h1>
</div> */}

      <div className="project_section" class="container"></div>
      <div className="title">
        <h1>Project</h1>
        <p>My Recent Work</p>
      </div>
      <div class="project_all_card">
        <div class="project_card">
          <img src={MzamoImg} alt="" />
          <div class="project_card_info">
            <h2>Mzamomtsha Website</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae velit, est vero fugit sunt laborum?
            </p>
            <a href="#" className="btn__project" target="link">
              Github
            </a>
          </div>
        </div>
        <div class="project_card">
          <img src={ChatImg} alt="" />
          <div class="project_card_info">
            <h2>Chat App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae velit, est vero fugit sunt laborum?
            </p>
            <a href="#" className="btn__project" target="link">
              Github
            </a>
          </div>
        </div>

        <div class="project_card">
          <img src={PortfolioImg} alt="" />
          <div class="project_card_info">
            <h2>Portfolio Website</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae velit, est vero fugit sunt laborum?
            </p>
            <a href="#" className="btn__project" target="link">
              Github
            </a>
          </div>
        </div>

        <div class="project_card">
          <img src={FinanceImg} alt="" />
          <div class="project_card_info">
            <h2>Finance Calculator</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae velit, est vero fugit sunt laborum?
            </p>
            <a href="#" className="btn__project" target="link">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
