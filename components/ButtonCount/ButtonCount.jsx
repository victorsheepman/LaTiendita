import { AppContext } from 'Context/LocationContext';
import React, { useContext } from 'react'
import { Actions } from 'reducer/actions';

export const ButtonCount = ({quiantity,setQuantity, id, price }) => {
  let count = quiantity < 50 ? 1 : 50
  const { dispatch } =useContext(AppContext);
  let newPriceSub = price / quiantity ;
  const sub = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch({type:Actions.SUB_QUANTITY,payload:{
      id:id,
      price:newPriceSub 
    } });   
    setQuantity(quiantity - count) 
    
  } 
  
 const add = ()=>{
          dispatch({
                type:Actions.ADD_QUANTITY,
                payload:{
                  id: id,
                  price: price * quiantity,
                  quantity: quiantity
                }
            })
      setQuantity(quiantity + count);
 }
 



  return (
    <div  className='buttonCount'>
      <div 
        className='body-2-bold' 
        onClick={
          sub
        } 
        disabled={quiantity == 1 ? true : false}
        
          
      >-</div>
        <p className='body-2-bold'>{quiantity}</p>
      <div 
        className='body-2-bold' 
        onClick={add} 
        disabled={quiantity == 500}
      >
        +
      </div>
            
    </div>
  )
}

