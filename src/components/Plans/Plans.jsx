import React from 'react'
import './Plans.css';
import {plansData} from "../../data/plansData.js"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{padding:'0 auto',  paddingLeft:'20px', paddingTop:'20px'}}>
            <span className='stroke-text'> START A PLAN <br /> WITH US</span>
          
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan,i) => (
              <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>

                <div className="features">
                  {plan.features.map((feature,i)=>(
                    <div className="feature" key={i}>
                       <img src={whiteTick} alt="white-tick" />
                       <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <span>See more benefits -</span>
                </div>
         
                             <button >Join now</button>
             
     
              </div>
            ))}
        </div>
    </div>
  )
}

export default Plans