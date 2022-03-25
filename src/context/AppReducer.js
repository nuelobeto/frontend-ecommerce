export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "SEARCH":
      return {
        ...state,
        searched: state.products.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
