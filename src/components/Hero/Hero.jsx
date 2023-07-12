import React from "react";

import "./Hero.css";
import hero_image from '../../assets/hero_image.png';
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import  AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {

    AOS.init();
  }, [])

  return (
    <div className="hero">
      <div data-aos="fade-up" className="left-h">
        {/* the best ad */}
        <div data-aos="fade-up" className="the-best-ad">
          <span>The best fitness club in the bwari</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span data-aos="fade-up">
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div  className="figures">
          <div>
            <span>+14</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+400</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
           <button className="btn">Get Started</button>
           <button className="btn">Learn More</button>
        </div>

      </div>


      {/* Right side */}
      <div className="right-h">
          <button className="btn">
              Join Now
          </button>

          <div data-aos="fade-up"  className="heart-rate">
            <img src={Heart} alt="heart" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
      </div>

      {/* hero image */}
      <img src={hero_image} alt="Body" className="hero-image"/>
      <img src={hero_image_back} alt="Body-Asset" className="hero-image-back"/>
      
      {/* calories */}
      <div className="calories">
        <img src={Calories} alt="Calories" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
