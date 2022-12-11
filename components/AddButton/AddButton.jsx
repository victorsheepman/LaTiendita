
import { AppContext } from 'Context/LocationContext';

import React, { useContext } from 'react'

import { Actions} from '../../reducer/actions';

export const AddButton = ({id,name, price, image, quiantity, madurez}) => {
    const {  setAlert, dispatch } = useContext (AppContext);
    const handler = () =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        dispatch(
            {
                type: Actions.addToCart, 
                payload:{
                    id,
                    name, 
                    price, 
                    image, 
                    quiantity, 
                    madurez
                }
            }
        );    
        setAlert(true);
    }   

    return (
    <button 
        className='AddButton'  
        onClick={handler}
    >
        Agregar
    </button>
  )
}

