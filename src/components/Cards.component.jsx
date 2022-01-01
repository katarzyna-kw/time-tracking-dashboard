import React, { useState, useEffect } from 'react'
import './Cards.css'
import ellipsis from '../img/icon-ellipsis.svg'

   function Cards( {timeframe}) {

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
                           <img className="icon" src={ellipsis} alt="ellipsis"/>
                        </div>

                        {/* {timeframe==="daily" && 
                        <div class="card-data">
                           <p className="current" key="current">{item.timeframes.daily.current}hrs</p>
                           <p className="previous" key="previous">Yesterday - {item.timeframes.daily.previous}hrs</p>
                        </div>
                        }
                        {timeframe==="weekly" && 
                        <div class="card-data">
                           <p className="current" key="current">{item.timeframes.weekly.current}hrs</p>
                           <p className="previous" key="previous">Last Week - {item.timeframes.weekly.previous}hrs</p>
                        </div>
                        }
                        {timeframe==="monthly" && 
                        <div class="card-data">
                           <p className="current" key="current">{item.timeframes.monthly.current}hrs</p>
                           <p className="previous" key="previous">Last Month - {item.timeframes.monthly.previous}hrs</p>
                        </div>
                        } */}

                        <div class="card-data"> 
                           {timeframe==="daily" && <p className="current" key="current">{item.timeframes.daily.current}hrs</p>}
                           {timeframe==="daily" && <p className="previous" key="previous">Yesterday - {item.timeframes.daily.previous}hrs</p>}
                           {timeframe==="weekly" && <p className="current" key="current">{item.timeframes.weekly.current}hrs</p>}
                           {timeframe==="weekly" && <p className="previous" key="previous">Last Week - {item.timeframes.weekly.previous}hrs</p>}
                           {timeframe==="monthly" && <p className="current" key="current">{item.timeframes.monthly.current}hrs</p>}
                           {timeframe==="monthly" && <p className="previous" key="previous">Last Month - {item.timeframes.monthly.previous}hrs</p>}
                        </div>
                     </div>
                  </div>
               )}
      </section>
   )
}

export default Cards