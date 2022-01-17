import React, { useState, useEffect } from 'react'
import './TrackingCards.css'
import ellipsis from '../../img/icon-ellipsis.svg'

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
               {data && data.length > 0 && data.map((item) => 
                  <div class="card">
                     <div class="card__header"></div>
                     <div class="card__body">
                        <div className="card__label">
                           <p 
                              className="card__title" 
                              key="title">
                                 {item.title}
                           </p>
                           <img  
                              className="card__ellipsis" 
                              src={ellipsis}
                              alt="ellipsis"
                           />
                        </div>

                        <div class="card__data"> 
                           {timeframe==="daily" && 
                              <p 
                                 className="card__data--current" 
                                 key="current">
                                    {item.timeframes.daily.current}hrs
                              </p>
                           }
                           {timeframe==="daily" && 
                              <p 
                                 className="card__data--previous" 
                                 key="previous">
                                    Yesterday - {item.timeframes.daily.previous}hrs
                              </p>
                           }
                           {timeframe==="weekly" && 
                              <p 
                                 className="card__data--current" 
                                 key="current">
                                    {item.timeframes.weekly.current}hrs
                              </p>
                           }
                           {timeframe==="weekly" && 
                              <p 
                                 className="card__data--previous" 
                                 key="previous">
                                    Last Week - {item.timeframes.weekly.previous}hrs
                              </p>
                           }
                           {timeframe==="monthly" && 
                              <p 
                                 className="card__data--current" 
                                 key="current">
                                    {item.timeframes.monthly.current}hrs
                              </p>
                           }
                           {timeframe==="monthly" && 
                              <p className="card__data--previous" 
                              key="previous">
                                 Last Month - {item.timeframes.monthly.previous}hrs
                              </p>
                           }
                        </div>
                     </div>
                  </div>
               )}
      </section>
   )
}

export default TrackingCards