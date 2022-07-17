import React, { useState } from 'react'
import {useOffer} from '../../hooks/useOffer';
import {ModalProduct} from '../ModalProduct/ModalProduct';
import {AddButton} from '../AddButton/AddButton'
export const Product = (
  {
    name, 
    descuento, 
    price, 
    image,
    id
  }) => {

  const [show, setShow] = useState(false);
  
  if (descuento === null) {
    return (<>
      <div className='product'>
          <figure className='product__image' onClick={()=>setShow(true)}>
            <img src={image} alt="" />
          </figure>
          <div className='product__body'>
              <h3>${price}</h3>
              <p>
                  {name}
              </p>
          </div>
          {/*<button className='product__button'>
              Agregar
    </button>*/}
      <AddButton name={name}  price={price} image={image} />
      </div>
      {
        show && <ModalProduct id={id} price={price} name={name} image={image} setShow={setShow} />
        
      }
      </>
    )
  }else{
     const offerView = () => 100 * descuento;
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const {newPrice} = useOffer(descuento, price)
     return (
      <>
      <div className='product'>
          <span className='product__offer'>
            {offerView()}% dto.
          </span>
          <figure className='product__image' onClick={()=>setShow(true)}>
            <img src={image} alt="" />
          </figure>
          <div className='product__body'>
              <h3>${newPrice}/Kg <span className='product__body--offer'>$ {price}/kg</span></h3>
              <p>
                  {name}
              </p>
          </div>
         {/* <button className='product__button'>
              Agregar
     </button>*/}
          <AddButton name={name} />  
      </div>
      {
        show && <ModalProduct id={id} price={price} name={name} image={image} setShow={setShow} />
      }
      </>
    )
  
  }
  
}
