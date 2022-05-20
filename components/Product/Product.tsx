import React from 'react'
import {useOffer} from '../../hooks/useOffer';
export const Product = ({name, descuento, price, image}) => {
  if (descuento === null) {

    return (
      <div className='product'>
          <figure className='product__image'>
            <img src={image} alt="" />
          </figure>
          <div className='product__body'>
              <h3>${price}</h3>
              <p>
                  {name}
              </p>
          </div>
          <button className='product__button'>
              Agregar
          </button>
      </div>
    )
  }else{
     const offerView = () => 100 * descuento;
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const {newPrice} = useOffer(descuento, price)
     return (
      <div className='product'>
          <span className='product__offer'>
            {offerView()}% dto.
          </span>
          <figure className='product__image'>
            <img src={image} alt="" />
          </figure>
          <div className='product__body'>
              <h3>${newPrice}/Kg <span className='product__body--offer'>$ {price}/kg</span></h3>
              <p>
                  {name}
              </p>
          </div>
          <button className='product__button'>
              Agregar
          </button>
      </div>
    )
  
  }
  
}
