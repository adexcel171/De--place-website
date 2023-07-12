import React from 'react'
import './Reasons.css'
import  AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import image1 from '../../assets/basketball.jpg'
import image2 from '../../assets/football pitch.jpg'
import image3 from '../../assets/foot.jpg'
import image4 from '../../assets/image1.png'
import image5 from '../../assets/image2.png'

import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
  
  useEffect(() => {

    AOS.init();
  }, [])

  return (
    <div data-aos="fade-up" className="Reasons" id="Reasons"  >
      <div className="left-r">
          <img src={image1} alt="img-one" />
          <img src={image2} alt="img-two" />
          <img src={image3} alt="img-three" />
          <img src={image4} alt="img-three" />
      
          <img src={image5} alt="img-three" />
          
      </div>

      <div className="right-r">
         <span>some reasons</span>
         <div>
            <span className='stroke-text'>why </span>
            <span>choose us?</span>
         </div>  

         <div data-aos="fade-up" className='details-r'>
            <div>
                <img src={tick} alt="" />
                <span>OVER 140+ EXPERT COACHS</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>
         </div>

         <span style={{color:'var(--gray)', fontWeight:"normal"}}>OUR PARTNERS</span>
         <div className="partners">
            <img src={nb} alt="nb" />
            <img src={adidas} alt="adidas" />
            <img src={nike} alt="nike" />
         </div>

      </div>
    </div>
  )
}

export default Reasons