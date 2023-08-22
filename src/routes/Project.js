import React from "react";
import './Project.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MzamoImg from "../Pictures/mzamo.bg.jpg"
import ChatImg from "../Pictures/chatapp.bg.jpg"
import PortfolioImg from "../Pictures/Portfolio.bg.jpg"
import FinanceImg from "../Pictures/financecalc.bg.jpg"

const Project = () => {
  return <div>
    <Navbar/>
    <section id='project'>
  <h5>My Recent Work</h5>
  <h2>Project</h2>

  <div className="project__container">
    <article className='project__item'>
        <div className="project__item-image">
            <img src={MzamoImg} alt="MzamoImg"/>
        </div>
        <h3>Mzamomtsha Website</h3>
        <a href="http://github.com" className='btn'>Github Link</a>
    </article>
    <article className='project__item'>
        <div className="project__item-image">
            <img src={PortfolioImg} alt="PortfolioImg"/>
        </div>
        <h3>Portfilio Website</h3>
        <a href="http://github.com" className='btn'>Github Link</a>
    </article>
    <article className='project__item'>
        <div className="project__item-image">
            <img src={ChatImg} alt="ChatImg"/>
        </div>
        <h3>Chat App</h3>
        <a href="http://github.com" className='btn'>Github Link</a>
    </article>
    <article className='project__item'>
        <div className="project__item-image">
            <img src={FinanceImg} alt="FinanceImg"/>
        </div>
        <h3>Finance Calc</h3>
        <a href="http://github.com" className='btn'>Github Link</a>
    </article>
  </div>
  </section>
    <Footer/>
  </div>
}

export default Project