import React from 'react'

export const ProductList = ({children, title, boostrap, styles}) => (
    <section className='productList' style={styles}>
        <h3>{title}</h3>
        <div className='productList__container'>
            {children}
        </div>
    </section>
  )

