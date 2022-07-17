import { AddButton } from '@components/AddButton/AddButton';
import { ButtonCount } from '@components/ButtonCount/ButtonCount';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
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
        <Form.Select className='selection__select' aria-label="Default select example" onChange={handleChange}> 
            <option  className='body-2-regular'>Por Elegir</option>
            <option  className='body-2-regular' value="Maduro">Maduro (para hoy)</option>
            <option  className='body-2-regular' value="Normal">Normal (3-5 dias)</option>
            <option  className='body-2-regular' value="Verde">Verde (7 dias)</option>
        </Form.Select>
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
