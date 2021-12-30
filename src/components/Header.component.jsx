import React from 'react'
import './Header.css'
import avatar from '../img/image-jeremy.png'

function Header() {
   return (
      <section className="header-container">
        <header>
          <img className="avatar" src={avatar} alt="profile avatar" />
          <div className="subhead">
            <p>Report for</p>
            <h3>Jeremy Robson</h3>
          </div>
        </header>
        <ul className="parameters">
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </section>
   )
}

export default Header
