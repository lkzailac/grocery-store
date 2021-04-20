const ADD_CART = "cart/ADD_CART";

//action creator
export const addToCart = (id) => {
  return {
    type: ADD_CART,
    id,
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CART:
      const cart = { ...state, cart: { ...state.cart, id, count: 1 } };
      return cart;
    default:
      return state;
  }
}
