import { AddButton } from '@components/AddButton/AddButton';
import { ButtonCount } from '@components/ButtonCount/ButtonCount';
import React, { useState } from 'react';
import {InputSelection} from '../../components/InputSelection/InputSelection'
import {options} from './Helper'

export const Selection = ({name, price, image}) => {
    const [quiantity, setQuantity] = useState(250);
    const [maduro, setMaduro] = useState('Maduro');
    const handleChange = (e)=>{
        setMaduro(e.target.value);
    }
  return (
    <section className='selection'>
        <h3 className='body-1-bold'>
            Selecciona la madurez que deseas
        </h3>
        <InputSelection 
            options={options}
            handleChange={handleChange}
        />
        <div className='selection__buttons mt-3'>
            <ButtonCount 
                quiantity={quiantity}
                setQuantity={setQuantity}
            />
            <AddButton 
                quiantity={quiantity}
                name={name}
                price={price}
                image={image}
                madurez={maduro}
            />
        </div>
    </section>
  )
}
