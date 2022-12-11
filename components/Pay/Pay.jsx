import { AppContext } from 'Context/LocationContext'
import React, {useContext} from 'react'
import Link from "next/link";

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
        <Link href="/Payment" passHref> 
           <a className='body-2-bold' > Ir a pagar</a>
        </Link>
        <p className='body-2-regular'>
            
        </p>
    </button>
  )
}
