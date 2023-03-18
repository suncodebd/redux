// state -count : 0
// action - increment - decrement - reset
// reducer
// store

const { createStore } = require("redux");

const ADD_USER = "ADD_USER";

const inatialState = {
  users: ["Sadia"],
  count: 0,
};

// action

const userIncrement = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const addReducer = (state = inatialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

// carete store

const store = createStore(addReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(userIncrement("Ayat"));
