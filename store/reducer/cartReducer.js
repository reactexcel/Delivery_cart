const INITIAL_STATE = {
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        cart: action.payload,
      };
    case "removeFromCart":
      return {
        ...state,
        cart: action.payload,
      };
    case "updateCart":
      return {
        ...state,
        cart: action.payload,
      };
    case "addDetailedItem":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
