import React from 'react';
import '../Contact/Contact.css';
import Img from "../Img/Contact.png";

const Contact = () => {
  return (
    <>
      <div className='section section-contact'>
          <h1 className='heading'>-- Fix Appointment --</h1>
        <div className='container grid grid-two-column'>
          <div className='Contact-img'>
            <img src={Img} className="con-img" alt="Contact" />
          </div>
          <div className='contact-form'>
            <form action='https://formspree.io/f/xeqdzrqz' method='POST'>
              <input type="text" placeholder="Enter Name" name="username" required autoComplete="off" />
              <input type="email" placeholder="Enter Email" name="Email" required autoComplete="off" />
              <input type="date" name="date" required autoComplete="off" />
              <input type="time" name="time" required autoComplete="off" />
              <textarea placeholder="Enter Message" name="message" required autoComplete='off' />
              <button type="submit" className='btn'>Make Appointment</button>     
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
