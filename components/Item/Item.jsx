import React, { useContext } from 'react'
import { AppContext } from 'Context/LocationContext';
import { Actions } from 'reducer/actions';

export const Item = ({id,image, name, price}) => {
    const { dispatch, sumTotal } = useContext( AppContext );
    sumTotal(
        {
            id,
            price
        }
    )

    const handleRemove = ()=>{
        dispatch({
            type:Actions.REMOVE_FROM_CART,
            payload:{
                id:id
            }
        })
    }
  return (
    <div className='item'>
        <figure className='item__image'>
            <img src={image} />
        </figure>
        <div className='item__body'>
            <h4 className='body-2-regular'>
                {name}
            </h4>
            <span className='body-1-bold'>
                {parseFloat(price)}$
            </span>
        </div>
        <svg onClick={handleRemove} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff1f18" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
    </div>
  )
}
