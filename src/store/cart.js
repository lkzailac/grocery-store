

const ADD_CART = 'cart/ADD_CART';

//action creator
export const addToCart = () => {
  return {
    type: ADD_CART,
    id: 3
  }
}


export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CART:
      const cart = {...state, id: {id: 3, count: 1} }
      return cart;
    default:
      return state;
  }
}
