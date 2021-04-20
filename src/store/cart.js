const ADD_CART = "cart/ADD_CART";
const REMOVE = "cart/REMOVE";
const INCREMENT = "cart/INCREMENT";

//action creator
export const addToCart = (id) => {
  return {
    type: ADD_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

export const increment = ({ item }) => {
  return {
    type: INCREMENT,
    [item.count]: count,
    [item.id]: id,
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CART:
      const cart = { ...state, [action.id]: { id: action.id, count: 1 } };
      return cart;
    case REMOVE:
      console.log("state", state);
      const currentState = { ...state };
      delete currentState[action.id];
      // const cartArray = Object.keys(currentState);
      // const index = cartArray.indexOf(action.id);
      // const newState = [...state];
      // newState.splice(index, 1);
      // const stateobj = {...newState}
      return currentState;
    case INCREMENT:
      return {
        ...state,
        [action.item.id]: { id: action.item.id, count: action.item.count + 1 },
      };

    default:
      return state;
  }
}
