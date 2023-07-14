import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Footer/Footer.css";

const Footer = () => {
    return (
        <>
            <div className='section-footer'>
                <div className='container grid grid-two-column'>
                    <div className='about '>
                        <h3>About</h3>
                        <NavLink to="/about"><h5>About</h5></NavLink>
                        <NavLink to="/contact"><h5>Contact</h5></NavLink>
                    </div>
                    <div className='call'>
                        <h3>Contact Us</h3>
                         <a href="tel:8999538318">8999538318</a>
                        <h5>rakeshdaharwal32@gmail.com</h5>
                    </div>
                </div>
                <div className='end'>
                    <div className='social-site'>
                        <NavLink to=""><ion-icon name="logo-instagram"></ion-icon> </NavLink>
                        <NavLink to=""><ion-icon name="logo-facebook"></ion-icon> </NavLink>
                    </div>
                    <h4>Copyright @ 2022 | All Right Reserved</h4>
                    <h4>(Developed By <span style={{ color: "red" }}>Rakesh Daharwal</span>)</h4>
                </div>
            </div>
        </>
    )
}

export default Footer;
