import React from 'react'

import { logo } from '../../assets'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="logo" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar