import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_IMG_URL = "/default.png";

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
    addTodo: {
      prepare(action) {
        console.log(action.title);
        return {
          payload: {
            id: crypto.randomUUID(),
            title: action.title,
            details: action.description,
            imgUrl: action.imgUrl || DEFAULT_IMG_URL,
          },
        };
      },

      reducer(state, action) {
        state.unshift({
          id: action.payload.id,
          title: action.payload.title,
          details: action.payload.details,
          imgUrl: action.payload.imgUrl,
          completed: false,
        });
      },
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
export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
