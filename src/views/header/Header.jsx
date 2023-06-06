import React from 'react'

import './Header.scss'
import Navbar from '../../components/navbar/Navbar'

const Header = () => {
  return (
    <div id="header">
        <div className="container">
            <Navbar />

            <div className='header-text'>
                <p>UI/UX Designer</p>
                <h1>Hi, I'm <span>KEVIN ALBERT</span> <br /> From India</h1>
            </div>
        </div>  
    </div>
  )
}

export default Header