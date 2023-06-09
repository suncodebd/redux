// state -count : 0
// action - increment - decrement - reset
// reducer
// store

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENTBYVALUE = "INCREMENTBYVALUE";
const RESET = "RESET";

const inatialState = {
  count: 0,
};

// action
// increment
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// action decrement
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const incrementByValue = (value) => {
  return {
    type: INCREMENTBYVALUE,
    payload: value,
  };
};

// reset
const resetCounter = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = inatialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

// carete store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
// store.dispatch(resetCounter());
store.dispatch(incrementByValue(10));
