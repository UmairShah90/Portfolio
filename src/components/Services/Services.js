import React from 'react'
import webImage from '../../images/web.svg'
import uiImage from '../../images/ui.svg'
import "../../index.css";
import './services.css';

function Services() {
    return (
        <section
        className="services-container"
        data-aos="zoom-in"
        id="services"
        name="services"
        
        >
       <h1 className="heading">Services I Provide</h1>

       <div className="service-wrapper">

       <div className="services">
       <li>
          <img src={webImage} alt="" />
          <p>Frontend Web Development</p>
       </li>
       </div>

       <div className="services">
           <li>
               <img src={uiImage} alt="" />
               <p>React JS Development</p>
           </li>
       </div>
         



       </div>
       </section>
    )
}

export default Services;
