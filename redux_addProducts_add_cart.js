const { createStore, combineReducers } = require("redux");

// Product var
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart var
const GET_CART_ITEMS = "ADD_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// products
let productsState = {
  products: ["sugar", "salt"],
  Productcount: 2,
};

// CART STATE

let initialCartState = {
  cart: ["sugar"],
  cartCount: 1,
};

// cart Actions
const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

// products Action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

// product reducer
const productReducer = (state = productsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };

    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        Productcount: state.Productcount + 1,
      };

    default:
      return state;
  }
};

// CART REDUCER
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };

    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        cartCount: state.cartCount + 1,
      };

    default:
      return state;
  }
};

// create store
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("orange"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));
