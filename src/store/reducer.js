import { ADD_TODO_INPUT, DELETE_TODO_INPUT, SET_TODO_INPUT } from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
          return {
            ...state,
            todoInput: action.payload,
          };
        case ADD_TODO_INPUT:
          return {
            ...state,
            todoInput: [...state.jobs, action.payload],
          };
        case DELETE_TODO_INPUT:
          const newJobs = [...state.jobs];
          newJobs.splice(action.payload, 1);
          return {
            ...state,
            todoInput: newJobs,
          };
        default:
          throw new Error("Invalid action");
      }
}
export { initState };
export default reducer;
