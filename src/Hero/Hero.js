import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Hero/Hero.css";
import Img from "../Img/doctor.png";

const Hero = () => {
    return (
        <>
            <div className='section section-hero'>
                <div className='container grid grid-two-column'>
                    <div className='hero-data' data-aos="fade-up" data-aos-duration="3000">
                        <h4>Welcome to Apolo clinic </h4>
                        <h1>Your <span style={{ color: "blueviolet" }}>Health</span> Is Our First Priority</h1>
                        <NavLink to="/contact"><button className='btn'>Make Appointment</button> </NavLink>
                    </div>
                    <div className='hero-img' data-aos="zoom-in" data-aos-duration="3000">
                        <img src={Img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
