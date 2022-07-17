import React, { useState } from 'react'

export const ButtonCount = ({quiantity,setQuantity }) => {
  
  return (
    <div  className='buttonCount'>
      <div 
        className='body-2-bold' 
        onClick={
          () => setQuantity(quiantity - 50)
        } 
        disabled={quiantity == 250}
          
      >-</div>
        <p className='body-2-bold'>{quiantity}</p>
      <div 
        className='body-2-bold' 
        onClick={() => setQuantity(quiantity + 50)} 
        disabled={quiantity == 500}
      >
        +
      </div>
            
    </div>
  )
}

