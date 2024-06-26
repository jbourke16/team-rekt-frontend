import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className="about-us">
              <NavLink className="about-link" to="/about">Dev Team</NavLink>
              
          </div>
          <div className='sw-icons'> 
            <img className='mongo-png' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.png'/>
            <img className='express-png' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png'/>
            <img className='reactjs-png' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png'/>
            <img className='node-png' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.png'/>
            <p className='repo'><a href="https://github.com/jbourke16/team-rekt-frontend"><img className='github-repo' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"/></a></p>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer