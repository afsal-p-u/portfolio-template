import React from 'react'

import { work1, work2, work3 } from '../../assets'
import "./Portfolio.scss"
import WorkItem from '../../components/work-item/WorkItem'

const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className="container">
            <h1 className='sub-title'>My Work</h1>

            <div className="work-list">
              <WorkItem
                img={work1}
                title="Social Media App"
                desc="the app connects you to talented people around the world.
                Download it from play store."
              />
              <WorkItem
                img={work2}
                title="Social Media App"
                desc="the app connects you to talented people around the world.
                Download it from play store."
              />
              <WorkItem
                img={work3}
                title="Online Shopping App"
                desc="the app connects you to talented people around the world.
                Download it from play store."
              />
            </div>

            <a href="#" className='btn'>See more</a>
        </div>
    </div>
  )
}

export default Portfolio