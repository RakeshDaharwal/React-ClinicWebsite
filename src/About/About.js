import React from 'react';
import "../About/About.css";
import { NavLink } from 'react-router-dom';
import Img from "../Img/about.jpg";

const About = () => {

  return (
    <>

      <div className='section section-about'>
        <div className='container grid grid-two-column'>
          <div className='about-data' data-aos="fade-up" data-aos-duration="3000">
            <h4>Hyy, Iam Rakesh Daharwal</h4>
            <h1>Doctor <span style={{ color: "blueviolet" }}>(MBBS)</span></h1>
            <NavLink to="/"><button className='btn'>Read More</button> </NavLink>
          </div>
          <div className='about-img' data-aos="zoom-in" data-aos-duration="3000">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About;