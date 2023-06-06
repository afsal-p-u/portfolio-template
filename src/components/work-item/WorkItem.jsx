import React from 'react'

import './WorkItem.scss'

const WorkItem = ({ img, title, desc }) => {
  return (
    <div className="work">
        <img src={img} alt="work3" />

        <div className="layer">
            <h3>Online Shopping App</h3>
            <p>
            the app connects you to talented people around the world.
            Download it from play store.
            </p>
            <a href="#">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    </div>
  )
}

export default WorkItem