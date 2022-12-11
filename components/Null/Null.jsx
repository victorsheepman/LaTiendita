import React from 'react'

export const Null = ({handle}) => {
  return (
    <div className='null'>
        <img src="images/Family.png" />
        <h3>Tu canasta está vacía</h3>
        <button className='null__button' onClick={handle}>
            Agregar productos
        </button>
    </div>
  )
}
