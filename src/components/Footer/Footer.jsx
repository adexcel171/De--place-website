import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'


const Footer = () => {
  return (
   <div className="Footer-container">
      
      <div className="footer">
        <div className='social-links'>
            <img src={Github} alt="Github" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
        </div>
        <div className='footer-text'>
<p>all right reserved by Excel</p>
        </div >
  
      </div>

    
   </div>
  )
}

export default Footer