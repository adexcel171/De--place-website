import React from 'react'
import './Header.css'

import { useState } from 'react'

const Header = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <div>
       <nav className='nav-container'>
      <h1 className='logo' >De Playce</h1>

                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>

                </div>

                <ul className='nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Programs</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>plan</li>
            <li className='nav-item'>Testimonials</li>
            <li className='nav-item'>Contact</li>
        </ul>

            </nav>

  
       

    <div className={menu_class}>
    <ul className=' mobile-nav-list'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>programs</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>plan</li>
            <li className='nav-item'>Contact</li>
        </ul>
    </div>
      
    </div>

  )
}

export default Header