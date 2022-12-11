import { Actions } from "./actions";


export const reducerShop = (state:any, {type, payload}:any) => {
  switch (type) {     
      case Actions.addToCart:
        const isCart = state.cart.some((i:any) => i.id == payload.id);
        return {   
         ...state,
        cart: isCart ? [...state.cart] : [...state.cart, payload]
        };
      case Actions.addToState:
        const dataPopular = payload.filter((item:any) => item.descuento == null)
        const dataOffer = payload.filter((item:any) => item.descuento != null)
        return{
          ...state,
          popular: state.popular = dataPopular,
          offer: state.offer = dataOffer,
        } 
        case Actions.REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(product =>
              product.id !== payload.id),
          };
      
      
    
/*
        case EMPTY_CART:
          return {
            ...state,
            cart: state.cart = [],
          };
*/
      default:
        throw new Error();
      }
  }