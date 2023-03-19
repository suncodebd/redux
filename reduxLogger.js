const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Product var
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// products
let productsState = {
  products: ["sugar", "salt"],
  Productcount: 2,
};

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

// create store
const rootReducer = combineReducers({
  productR: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("Book"));
