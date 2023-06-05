import React, { useState } from 'react'

import { user } from '../../assets'
import './About.scss'
import ListItem from '../../components/list-item/ListItem'

const About = () => {
  const [openTab, setOpenTab] = useState('skills')

  return (
    <div id="about">
        <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img src={user} alt="user" />
              </div>

              <div className="about-col-2">
                <h1 className='sub-title'>About Me</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Quibusdam esse saepe repellendus obcaecati dolorem. 
                   Provident, 
                   iste odio reiciendis eos esse accusamus earum blanditiis nam quaerat sunt! Vel vero inventore, 
                   impedit, debitis ipsum quos delectus sunt ullam, repellat eos eligendi.
                </p>

                <div className="tab-titles">
                  <p 
                    className={`tab-links ${openTab === 'skills' && 'active-link'}`} 
                    onClick={()  => setOpenTab('skills')}
                    >
                      Skills
                  </p>
                  <p 
                    className={`tab-links ${openTab === 'experience' && 'active-link'}`} 
                    onClick={() => setOpenTab('experience')}
                    >
                      Experience
                  </p>
                  <p 
                    className={`tab-links ${openTab === 'education' && 'active-link'}`} 
                    onClick={() => setOpenTab('education')}
                    >
                      Education
                  </p>
                </div>

                {openTab === 'skills' ? (
                  <div className="tab-contents active-tab">
                    <ul>
                      <ListItem name="UI/UX" desc="Designing Web/App Interfaces" />
                      <ListItem name="Web Development" desc="Web App Interfaces" />
                      <ListItem name="App Development" desc="Building Android/iOS apps" />
                    </ul>
                  </div>
                ) : openTab === 'experience' ? (
                  <div className="tab-contents">
                    <ul>
                      <ListItem name="2021 - Current" desc="UI/UX Designing Training at ET Institute" />
                      <ListItem name="2019 - 2021" desc="Team lead at StartApp LLC." />
                      <ListItem name="2017 - 2019" desc="UI/UX Design Executive at Coin Digital Ltd." />
                      <ListItem name="2016 - 2017" desc="Internship at ekart eCommerce" />
                    </ul>
                  </div>
                ) : (
                  <div className="tab-contents">
                    <ul>
                      <ListItem name="2016" desc="UI/UX Design Training at ET Institute" />
                      <ListItem name="2017" desc="MBA from MIT Bangalore" />
                      <ListItem name="2014" desc="BBA from ISM Bangalore" />
                    </ul>
                  </div>
                )}
              </div>
            </div>
        </div>
    </div>
  )
}

export default About