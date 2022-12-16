import { createContext, useState, useReducer } from "react";
import { Actions } from "reducer/actions";
import { initialState } from "reducer/InitialState";
import { IProduct } from "reducer/models/product.model";
import { reducerShop } from "reducer/reducer";

export const AppContext = createContext({});    
  
export const initialLocation = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [location, setLocation] = useState('México City Marriott Reforma Hotel');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alert, setAlert] = useState({
        sucess:false,
        error:false
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducerShop, initialState);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cost, setCost] = useState(0)
    
    
    let prices = [];
    let costoTotal = 0;
    
    const sumTotal = (current) => {
        debugger
        if(current){
            let isCart =  prices.some((i)=>i.id === current.id);
            if (isCart) {
                console.log('ya esta en el carro')
            }else{
                prices.push(current);
            }
        } 
	}

    
   
    


    
    

/*
    const newPrice = (id, price, quiantity) =>{
        const product = state.cart.find(i=>i.id === id);
        if(product.quiantity !== quiantity){
        
            dispatch({
                type:addPrice,
                payload:{
                    id:id,
                    price:price,
                    quantity:quiantity
                }
            })
        
        }
    }
    */


    return {
        location,
        alert,
        setAlert,
        setLocation,
        dispatch,
        state, 
        sumTotal, 
        costoTotal,
        prices,
        setCost,
        cost
    }
    
}

