import React, { useState } from 'react'

import { logo } from '../../assets'
import './Navbar.scss'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const styles = {
    show: {
      right: openMenu ? 0 : '-200px',
    }
  }
  return ( 
    <nav>
        <img src={logo} alt="logo" />
        <ul style={styles.show}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i class="fas fa-times icon" onClick={() => setOpenMenu(false)}></i>
        </ul>
        <i class="fas fa-bars icon" onClick={() => setOpenMenu(true)}></i>
    </nav>
  )
}

export default Navbar