import React from 'react'
import ellipsis from '../../img/icon-ellipsis.svg'
import './Ellipsis.css'

function Ellipis() {
   return (
      <img  
         className="card__ellipsis" 
         src={ellipsis}
         alt="ellipsis"
         data-testid="ellipsis"
      />
   )
}

export default Ellipis