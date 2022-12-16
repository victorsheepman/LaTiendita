import { AppContext } from 'Context/LocationContext'
import Link from 'next/link'
import React, {useContext} from 'react'
import { Actions } from 'reducer/actions'

export const ModalAlert = () => {
    const {dispatch} = useContext(AppContext)
    const onRemove = ()=>{
        dispatch({
            type:Actions.EMPTY_CART
        })
    }
  return (
    <div className='modalAlert'>
        <div className='modalAlert__container'>
            <figure className='modalAlert__image'>
                <img src="images/Hands Buying.png" alt="" />
            </figure>
            <h2>¡Gracias por tu compra!</h2>
            <Link href="/" passHref>
                <button onClick={onRemove} className='modalAlert__button'>
                    Seguir comprando
                </button>
            </Link>
        </div>
    </div>
  )
}
