import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Header/Header.css";

const Header = () => {

    const [menuIcon, setMenuIcon] = useState();

    return (
        <>
            <div className="header">
                <NavLink to="/" className="logo">Apolo.</NavLink>
                <div className={menuIcon ? "navbar active" : "navbar"} >
                    <ul className='ul-list'>
                        <li><NavLink className="nav-list" to="/" onClick={() => setMenuIcon(false)}>Home</NavLink></li>
                        <li><NavLink className="nav-list" to="/about" onClick={() => setMenuIcon(false)}>About</NavLink></li>
                        <li><NavLink className="nav-list" to="/service" onClick={() => setMenuIcon(false)}>Services</NavLink></li>
                        <li><NavLink className="nav-list" to="/contact" onClick={() => setMenuIcon(false)}>Contact</NavLink></li>
                        <li><a href="tel:8999538318" className="btn" to="" onClick={() => setMenuIcon(false)}>Call Now</a></li>
                    </ul>
                    <div className='hamburger-btn'>
                        <ion-icon name="menu-outline" onClick={() => setMenuIcon(true)} ></ion-icon>
                        <ion-icon name="close-outline" onClick={() => setMenuIcon(false)} ></ion-icon>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header;
