const { createStore } = require("redux");

// var
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// STATE
const initaialState = {
  count: 0,
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer

const counterReducer = (state = initaialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};
// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
