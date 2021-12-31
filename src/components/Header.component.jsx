import React from 'react'
import './Header.css'
import avatar from '../img/image-jeremy.png'

  function Header({view}) {

    const showDaily = () => {
      view("daily")
    }

    const showWeekly = () => {
      view("weekly")
    }

    const showMonthly = () => {
      view("monthly")
    }

    let name = "Jeremy Robson";

   return (
      <section className="header-container">
        <header>
          <img className="avatar" src={avatar} alt="profile avatar" />
          <div className="subhead">
            <p>Report for</p>
            <h3>{name}</h3>
          </div>
        </header>
        <ul className="parameters">
          <li onClick={showDaily}>Daily</li>
          <li onClick={showWeekly}>Weekly</li>
          <li onClick={showMonthly}>Monthly</li>
        </ul>
      </section>
   )
}

export default Header
