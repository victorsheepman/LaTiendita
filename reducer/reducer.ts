import { addToCart, removeFromCart } from "./actions";

export const initialState = {
  cart: [],
  offer:[],
  popular:[]
  //orderIsOpen: false,
  //menuIsOpen: false,
};

export const reducerShop = (state:any, {type, payload}) => {
    switch (type) {
      case addToCart:
        return {
         ...state,
         cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload]
        };
      case removeFromCart:
        return {
          ...state,
          cart: state.cart.filter((items =>items.id !== payload.id))
        };
      case 'AddToOffer':
        return {
          ...state,
          offer: state.offer.filter(item => item.descuento !== null)
        };
      case: 'AddToPopular':
      return{
        ...state,
        popular: state.offer.filter(item => item.descuento == null)
      } 
      default:
        throw new Error();
    }
  }
  