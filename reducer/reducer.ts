import { Actions } from "./actions";
import { IProduct } from "./models/product.model";

export const reducerShop = (state:any, {type, payload}:any) => {
  switch (type) {     
      case Actions.addToCart:
        const isCart = state.cart.some((i:IProduct) => i.id == payload.id);
        return {   
         ...state,
        cart: isCart ? [...state.cart] : [...state.cart, payload]
        };
      case Actions.addToState:
        const dataPopular = payload.filter((item:IProduct) => item.descuento == null)
        const dataOffer = payload.filter((item:IProduct) => item.descuento != null)
        return{
          ...state,
          popular: state.popular = dataPopular,
          offer: state.offer = dataOffer,
        } 
        case Actions.REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter((product:IProduct) =>
              product.id !== payload.id),
          };
      
        case Actions.EMPTY_CART:
          return {
            ...state,
            cart: state.cart = [],
          };

      default:
        throw new Error();
      }
  }