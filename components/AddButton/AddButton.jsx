import React, { useEffect, useReducer } from 'react'
import { addToCart } from '../../reducer/actions';
import { initialState, reducerShop } from '../../reducer/reducer';

export const AddButton = ({name, price, image, quiantity, madurez}) => {
    const [state, dispatch] = useReducer(reducerShop,initialState);
  
    useEffect(() => {
        console.log(state);
    }, [state])
    
    return (
    <button 
        className='AddButton'  
        onClick={()=>dispatch({type: addToCart, payload:{name, price, image, quiantity, madurez}})}
    >
        Agregar
    </button>
  )
}

