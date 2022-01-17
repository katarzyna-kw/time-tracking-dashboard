import React from 'react'
import './TrackingCard.css'
import ellipsis from '../../img/icon-ellipsis.svg'

function TrackingCard( {timeframe, item} ) {
   return (
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
   )
}

export default TrackingCard
