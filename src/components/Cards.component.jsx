import React, { useState, useEffect } from 'react'
import './Cards.css'
import ellipsis from '../img/icon-ellipsis.svg'

function Cards() {

   const [data, setData] = useState([])

   const fetchData = () => {
     fetch('data.json', {
       headers: {
         headers: {
           'Content-Type:': 'application/json',
           'Accept': 'application/json'
         }
       }
     }
     )
     .then((response) => {
       console.log(response)
       return response.json();
     })
     .then((jsonData) => {
       console.log(jsonData);
       setData(jsonData)
     });
   }
   
   useEffect(() => fetchData(), [])
 
   return (
      <section className="cards-container">
               {data && data.length > 0 && data.map((item) => 
                  <div class="card-top">
                     <div class="card-info">
                        <div className="card-title">
                           <p key="title">{item.title}</p>
                           <img className="icon" src={ellipsis} alt="click to choose daily, weekly, monthly view"/>
                        </div>
                        <div class="card-data">
                           <p className="current" key="current">{item.timeframes.weekly.current}hrs</p>
                           <p key="previous">Last week - {item.timeframes.weekly.previous}hrs</p>
                        </div>
                     </div>
                  </div>
               )}
      </section>
   )
}

export default Cards