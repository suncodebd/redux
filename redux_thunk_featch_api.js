// async actions -api calling
// api url -https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axios api

const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: axios } = require("axios");

// const var
const GET_TOTOS_REQUEST = "GET_TOTOS_REQUEST";
const GET_TOTOS_SUCCESS = "GET_TOTOS_SUCCESS";
const GET_TOTOS_FAILED = "GET_TOTOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// states
const initialTodosState = {
  todos: [],
  isLoding: false,
  error: null,
};

// action
const getTodosRequest = () => {
  return {
    type: GET_TOTOS_REQUEST,
  };
};
const getTodosSucess = (todos) => {
  return {
    type: GET_TOTOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TOTOS_FAILED,
    payload: error,
  };
};

// reducer
const todoReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TOTOS_REQUEST:
      return {
        ...state,
        isLoding: true,
      };

    case GET_TOTOS_SUCCESS:
      return {
        ...state,
        isLoding: false,
        todos: action.payload,
      };

    case GET_TOTOS_FAILED:
      return {
        ...state,
        isLoding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSucess(titles));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getTodosFailed(errorMessage));
      });
  };
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
