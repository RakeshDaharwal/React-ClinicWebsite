import React from 'react';
import Img1 from "../Img/pic1.jpg";
import Img2 from "../Img/pic2.jpg";
import Img3 from "../Img/pic3.jpg";
import "../Service/Service.css";


const Service = () => {
  return (
    <>
      <div className='section section-service'>
        <h1 className='heading'>-- Our Services --</h1>
        <div className=' container grid grid-three-column'>
          <div className="service">
            <img src={Img1} alt="..." />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="service">
            <img src={Img2} alt="..." />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="service">
            <img src={Img3} alt="..." />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
