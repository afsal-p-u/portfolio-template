import React from 'react'

import './Services.scss'
import ServicesItem from '../../components/services-item/ServicesItem'

const Services = () => {
  return (
    <div id='services'>
        <div className="container">
            <h1 className='sub-title'>My Services</h1>

            <div className="services-list">
              <ServicesItem
                title="Web Design"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro repellendus sequi incidunt? Modi aperiam minus excepturi! Eligendi minima assumenda cum."
                iconClass="fa-solid fa-code"
              />

              <ServicesItem
                title="UI/UX Design"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro repellendus sequi incidunt? Modi aperiam minus excepturi! Eligendi minima assumenda cum."
                iconClass="fa-solid fa-crop-simple"
              />

              <ServicesItem
                title="App Design"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Porro repellendus sequi incidunt? Modi aperiam minus excepturi! Eligendi minima assumenda cum."
                iconClass="fa-brands fa-app-store"
              />
            </div>
        </div>
    </div>
  )
}

export default Services