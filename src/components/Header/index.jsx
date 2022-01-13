import React from 'react'
import './Header.css'
import avatar from '../../img/image-jeremy.png'

  function Header({timeframe, view}) {

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
          <li className={timeframe==='daily' ? "param-links active" : "param-links"} onClick={() => view("daily")}>Daily</li>
          <li className={timeframe==='weekly' ? "param-links active" : "param-links"} onClick={() => view("weekly")}>Weekly</li>
          <li className={timeframe==='monthly' ? "param-links active" : "param-links"} onClick={() => view("monthly")}>Monthly</li>
        </ul>
      </section>
   )
}

export default Header
