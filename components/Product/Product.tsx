import React from 'react'

export const Product = ({name, descuento, price, image}) => {
  if (descuento === null) {

    return (
      <div className='product'>
          <span className='product__offer'>
          32% dto.
          </span>
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
  }
  
}
