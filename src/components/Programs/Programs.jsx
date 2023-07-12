import React from 'react'
import './Programs.css'
import {programsData} from "../../data/programsData";
import RightArrow from  "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
     
            <span className='stroke-text'>programs</span>
        </div>

        <div className='program-categories'>
            {programsData.map((program,index) => (
                <div className='category' key={index}>
                   {program.image}
                   <span>{program.heading}</span>
                   <span>{program.details}</span>
                   <div className='join-now'>
                     <span>
                        Join Now
                     </span>
                     <img src={RightArrow} alt="right-arrow"></img>
                   </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs