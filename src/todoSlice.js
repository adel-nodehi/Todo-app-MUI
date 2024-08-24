import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Task 1",
    details: "Répondre appel d'offre",
    imgUrl: "/default.png",
    completed: true,
  },
  {
    id: 2,
    title: "Task 2",
    details: "Signer contrat",
    imgUrl: "/default.png",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    details: "Aspirer le salon",
    imgUrl: "/default.png",
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state) => {
      return state;
    },
    toggleCompleted: (state, action) => {
      const curTodo = state.find((todo) => todo.id === action.payload);
      curTodo.completed = !curTodo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, toggleCompleted, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
