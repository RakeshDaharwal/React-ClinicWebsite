import React from 'react';
import "../Error/Error.css";
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className="container">
      <div className='error'>
        <h1>404</h1>
        <h2> Page Not Found</h2>
        <h5>This Page Dosen't Exit</h5>
        <NavLink to="/" className="btn">Back To Home</NavLink>
      </div>
    </div>
    </>
  )
}

export default ErrorPage;
