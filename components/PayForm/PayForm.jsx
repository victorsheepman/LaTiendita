import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useForm } from "react-hook-form";
import {patterns} from '../../utils/regex'
import {messages} from '../../utils/messagesValidation'

export const PayForm = ({cost, setShow}) => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }
    const processPayment = () => {
      
    }
    const onSubmit = (userInfo) => {
        if (errors.mail) {
            
        }else{
            setShow(true)
        }
    };
  return (
    <section className='Payform'>
        <div className='Payform__card'>
            <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus}
            />
        </div>
       <div className='Payform__form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label  name="mail" class="body-2-regular">
                        Correo electronico
                    </label>
                    <br />
                    <input  
                        name="mail"
                        type="text"
                        placeholder="name@example.com" 
                        className="payment__form__input" 
                        onChange={handleInputChange}
                        
                        {...register("mail", 
                            {   
                                required: messages.req, 
                                pattern: 
                                {
                                    value: patterns.mail,
                                    message: messages.mail
                                }
                            }
                        )}
                    />
                    {errors.mail && <p className='caption-regular--error'>{errors.mail.message}</p>}
                    </div>
                    <div className="mb-3 mt-3" style={{ marginTop: "32px" }}>
                    <label  className="body-2-regular">
                        Numero de la tarjeta
                    </label>
                    <br />
                    <input
                        type="text"
                        className="payment__form__input"
                        name="number"
                        id="number"
                        maxLength="16"
                        placeholder="1234 1234 1234 1234"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                    />
                    {errors.number && <p className='caption-regular--error'>{errors.number.message}</p>}
                    <div className="content">
                        <input
                        type="text"
                        name="expiry"
                        id="expiry"
                        maxLength="4"
                        className="payment__form__input--sm"
                        placeholder="MM / YY"
                        onChange={handleInputChange}
                        onFocus={handleFocusChange}
                        />
                        <input
                            type="text"
                            className="payment__form__input--sm"
                            name="cvc"
                            id="cvc"
                            maxLength="3"
                            placeholder="CVC"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="mb-3" style={{ marginTop: "32px" }}>
                        <label for="exampleFormControlInput1" class="body-2-regular">
                            Nombre de la tarjeta
                        </label>
                        <br />
                        <input
                            type="text"
                            className="payment__form__input"
                            name="name"
                            id="name"
                            maxLength="30"
                            placeholder="Juan Perez"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                </div>
            <button onClick={processPayment} type="submit" className="payment__botton">Pagar {cost}$</button>
        </form>
       </div>
       
  </section>
  )
}
