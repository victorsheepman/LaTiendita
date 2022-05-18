import React from 'react'

export const ProductList = ({children, title}) => {
  return (
    <section className='productList'>
        <h3>{title}</h3>
        <div className='productList__container'>
            {children}
        </div>
    </section>
  )
}
