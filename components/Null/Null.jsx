import Image from 'next/image'
import React from 'react'

export const Null = ({handle}) => {
  return (
    <div className='null'>
        <Image src="images/Family.png" alt=''/>
        <h3>Tu canasta está vacía</h3>
        <button className='null__button' onClick={handle}>
            Agregar productos
        </button>
    </div>
  )
}
