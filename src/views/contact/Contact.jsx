import React from 'react'

import { myCV } from '../../assets'
import './Contact.scss'
import CopyRight from '../../components/copyright/CopyRight'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className='sub-title'>Contact Me</h1>
                    <p><i class="fas fa-paper-plane" ></i>contact@example.com</p>
                    <p><i class="fas fa-phone-square-alt" ></i>12456543</p>
                    <div className="social-icons">
                        <a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com"><i class="fab fa-twitter-square"></i></a>
                        <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                        <a href="http://linkedin.com"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <a href={myCV} download className='btn btn2'>Download CV</a>
                </div>

                <div className="contact-right">
                    <form action="">
                        <input type="text" name='name' placeholder='Your Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" cols="15" rows="10" placeholder='Your Message'></textarea>
                        <button type="submit" className='btn btn2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <CopyRight />
    </div>
  )
}

export default Contact