import React from 'react'

import { work1, work2, work3 } from '../../assets'
import "./Portfolio.scss"

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className="container">
            <h1 className='sub-title'>My Work</h1>

            <div className="work-list">
              <div className="work">
                <img src={work1} alt="work1" />
                <div className="layer">
                  <h3>Social Media App</h3>
                  <p>
                    the app connects you to talented people around the world.
                    Download it from play store.
                  </p>
                  <a href="#">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>

              <div className="work">
                <img src={work2} alt="work2" />
              </div>

              <div className="work">
                <img src={work3} alt="work3" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio