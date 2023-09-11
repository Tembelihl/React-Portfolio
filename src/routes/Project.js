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
              My goal when I created this Mzamomtsha Primary School website was
              to create a website that will be User-friendly and accessible to
              all users, including students, teachers, parents, and the general
              public. Up-to-date with the latest information about the school,
              functional and easy to use.
            </p>
            <a
              href="https://github.com/Tembelihl/Mzamomtsha-Website"
              className="btn__project"
              target="link"
            >
              Github
            </a>
          </div>
        </div>
        <div class="project_card">
          <img src={ChatImg} alt="" />
          <div class="project_card_info">
            <h2>Chat App</h2>
            <p>
              My goal when I created this chat app was to provide a platform for
              people to communicate with each other, to provide a way for people
              to share information and ideas,to allow people to stay connected
              with friends and family and also to entertain and engage users.
            </p>
            <a
              href="https://github.com/Tembelihl/Chat-App"
              className="btn__project"
              target="link"
            >
              Github
            </a>
          </div>
        </div>

        <div class="project_card">
          <img src={PortfolioImg} alt="" />
          <div class="project_card_info">
            <h2>Portfolio Website</h2>
            <p>
              My goal when I created a personal portfolio was to showcase my
              skills and experience to potential employers. This portfolio
              include variety of projects that demonstrate my abilities, as well
              as my skills in different programming languages, frameworks, and
              technologies.
            </p>
            <a
              href="https://github.com/Tembelihl/Personal-Portfolio"
              className="btn__project"
              target="link"
            >
              Github
            </a>
          </div>
        </div>

        <div class="project_card">
          <img src={FinanceImg} alt="" />
          <div class="project_card_info">
            <h2>Finance Calculator</h2>
            <p>
              My goal when I created a finance calculator was to help people
              make better financial decisions, to make financial concepts more
              accessible to people who are not familiar with them, to save
              people time and effort when doing financial calculations and to
              provide a platform for people to share financial information.
            </p>
            <a
              href="https://github.com/Tembelihl/Financial-Calculator"
              className="btn__project"
              target="link"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
