import { AppContext } from 'Context/LocationContext'
import React, {useContext} from 'react'

export const Pay = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
  return (
    <button className='pay'>
        <div className='pay__count'>
            <p className='body-2-bold'>
                {cart.length}
            </p>
        </div>
        <p className='body-2-bold'> 
            Ir a pagar
        </p>
        <p className='body-2-regular'>
            
        </p>
    </button>
  )
}
