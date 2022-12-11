import React from 'react'
import Form from 'react-bootstrap/Form';
export const InputSelection = ({styles, options, handleChange,bootstrap}) => {
  return (
    <Form.Select 
        className={`selection__select ${bootstrap}`}
        style={styles} 
        aria-label="Default select example" onChange={handleChange}> 
            {
                options.map(option =>(
                    // eslint-disable-next-line react/jsx-key
                    <option  
                        className='body-2-regular' 
                        value={option.value}
                        key={option.value}
                    >
                        {option.value}
                    </option>
                ))
                }
    </Form.Select>
  )
}
