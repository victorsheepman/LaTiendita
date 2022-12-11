import { createContext, useState, useReducer } from "react";
import { Actions } from "reducer/actions";
import { initialState } from "reducer/InitialState";
import { reducerShop } from "reducer/reducer";

export const AppContext = createContext({});    
  
export const initialLocation = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [location, setLocation] = useState('none');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alert, setAlert] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(reducerShop, initialState);
    
    
    /*let prices = [];

    const sumTotal = (current) => {
        if(current){
            prices.some((i)=>i.id == current.id) ? prices.map(
                (i)=>{
                    if(i.id === current.id){
                        return i.price = current.price;  
                    }
                }
            ): prices.push(current);

        }
		
	}*/
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
        //sumTotal, 
        //newPrice
    }
    
}

