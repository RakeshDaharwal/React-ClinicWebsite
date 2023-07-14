import React from 'react';
import "../Support/Support.css";

const Support = () => {


    return (
        <>
            <div className='section section-support'>
                <div className='container grid grid-three-column'>
                    <div className='free-shiping'>
                        <ion-icon name="school-outline"></ion-icon>
                        <h4>Qualified Doctor</h4>
                        <p>Qualified Doctor Qualified Doctor Qualified Doctor Qualified Doctor</p>
                    </div>
                    <div className='support'>
                        <ion-icon name="alarm-outline"></ion-icon>
                        <h4>Support 24/7</h4>
                        <p>We Are Always Ready To Help Our Patient 24/7 Dedicated At Any Time</p>
                    </div>
                    <div className='money-return'>
                        <ion-icon name="pulse-outline"></ion-icon>
                        <h4>Emergency</h4>
                        <p>Emergency Emergency Emergency Emergency Emergency </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support;
