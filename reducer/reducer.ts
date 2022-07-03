import { addToCart, addToState, removeFromCart } from "./actions";

export const initialState = {
  cart: [],
  offer:[],
  popular:[]
  //orderIsOpen: false,
  //menuIsOpen: false,
};

export const reducerShop = (state:any, {type, payload}) => {
  //debugger;  
  switch (type) {
      //debugger;
      case addToCart:
        return {
          
         ...state,
         cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload]
        };
      case removeFromCart:
        return {
          ...state,
          cart: state.cart.filter((item => item.id !== payload.id))
        };
      case addToState:
        const dataPopular = payload.filter(item => item.descuento == null)
        const dataOffer = payload.filter(item => item.descuento != null)
        return{
          ...state,
          popular: state.popular = dataPopular,
          offer: state.offer = dataOffer,
        } 
      default:
        throw new Error();
      }
  }