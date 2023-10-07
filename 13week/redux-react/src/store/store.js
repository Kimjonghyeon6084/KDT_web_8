import { createStore } from "redux";

export const ADD = "ADD";
export const DELETE = "DELETE";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const newTodo = { text: action.text };
      return [...state, newTodo];
    case DELETE:
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

const store = createStore(todos);

export default store;
