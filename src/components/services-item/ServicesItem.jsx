import React from 'react'

import './ServicesItem.scss'

const ServicesItem = ({ title, desc, iconClass}) => {
  return (
    <div className="services-list-item">
        <i class={iconClass}></i>
        <h2>{title}</h2>
        <p>
            {desc}
        </p>
        <a href="#">Learn more</a>
    </div>
  )
}

export default ServicesItem