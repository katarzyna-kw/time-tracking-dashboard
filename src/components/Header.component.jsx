import React, {useState} from 'react'
import './Header.css'
import avatar from '../img/image-jeremy.png'

  function Header({timeframe, view}) {

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
          <li className={timeframe==='daily' ? "param-links active" : "param-links"} onClick={showDaily}>Daily</li>
          <li className={timeframe==='weekly' ? "param-links active" : "param-links"} onClick={showWeekly}>Weekly</li>
          <li className={timeframe==='monthly' ? "param-links active" : "param-links"} onClick={showMonthly}>Monthly</li>
        </ul>
      </section>
   )
}

export default Header
