import React, { useState, useEffect } from 'react'
import TrackingCard from '../TrackingCard'
import './TrackingCards.css'

   function TrackingCards( {timeframe}) {

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
      <section className="cards">
               {data && data.length > 0 && data.map((item) => (
                  <TrackingCard 
                     item={item}
                     timeframe={timeframe}
                     key="card"
                  />
               ))}
      </section>
   )
}

export default TrackingCards