import React from "react";
import './Project.css';
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import MzamoImg from "../Pictures/mzamo.bg.jpg"
import ChatImg from "../Pictures/chatapp.bg.jpg"
import PortfolioImg from "../Pictures/Portfolio.bg.jpg"
import FinanceImg from "../Pictures/financecalc.bg.jpg"

const Project = () => {
  return <div>
    <Navbar/>
    <div className='project'>
    <h5>My Recent Work</h5>
       <h1>Projects</h1>

  <div className="project__container">
  <article className='project__item'>
        <div className="project__item-image">
            <img src={MzamoImg} alt="FinanceImg"/>
        </div>
        <h3>Mzamomtsha Website</h3>
        <a href="http://github.com" className='btn__project'>Github</a>
    </article>
    <article className='project__item'>
        <div className="project__item-image">
            <img src={PortfolioImg} alt="FinanceImg"/>
        </div>
        <h3>Portfolio Website</h3>
        <a href="http://github.com" className='btn__project'>Github</a>
    </article>
    <article className='project__item'>
        <div className="project__item-image">
            <img src={ChatImg} alt="ChatImg"/>
        </div>
        <h3>Chat App</h3>
        <a href="http://github.com" className='btn__project'>Github</a>
    </article>
    <article className='project__item'>
        <div className="project__item-image">
            <img src={FinanceImg} alt="FinanceImg"/>
        </div>
        <h3>Finance Calc</h3>
        <a href="http://github.com" className='btn__project'>Github</a>
    </article>
  </div>
  </div>
    {/* <Footer/> */}
  </div>
}

export default Project