
import React, { useContext } from 'react'
import { AppContext } from 'Context/LocationContext';
import { Item } from '../../components/Item/Item'
import {Pay} from '../../components/Pay/Pay'
import { EMPTY_CART } from 'reducer/actions';

export const ItemList = ({cart}) => {
  const {  dispatch } =useContext(AppContext);
  const handlerEmpty = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch({type: EMPTY_CART});    
  }  
  return (
    <>
    <div className='itemList'>
      <div className='itemList__body'>
        {
          cart.map((i)=>(
            
            <Item 
              id={i.id}
              name={i.name}
              image={i.image}
              price={i.price}
              quiantityProduct={i.quiantity}
              key={i.id}
            />
          ))
        }
      </div>
      
      <div className='itemList__footer'>
        <span className='body-2-regular itemList__empty' onClick={handlerEmpty}>
          Vaciar canasta
        </span>
        <Pay />
      </div>
    </div>
   
    </>

  )
}
