import { createSlice } from "@reduxjs/toolkit";
import { server } from "./helper/server";

const DEFAULT_IMG_URL = "/default.png";

const dbServer = server("http://localhost:8000/todoData");
const data = await dbServer.getData();

const initialState = data;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare(action) {
        return {
          payload: {
            id: crypto.randomUUID(),
            title: action.title,
            details: action.description,
            imgUrl: action.imgUrl || DEFAULT_IMG_URL,
            deadLine: action.deadLine,
          },
        };
      },

      reducer(state, action) {
        const data = {
          id: action.payload.id,
          title: action.payload.title,
          details: action.payload.details,
          imgUrl: action.payload.imgUrl,
          completed: false,
          deadLine: action.payload.deadLine,
        };

        state.push(data);
        dbServer.addData(data);
      },
    },
    toggleCompleted: (state, action) => {
      const curTodo = state.find((todo) => todo.id === action.payload);
      curTodo.completed = !curTodo.completed;

      dbServer.updateItem(action.payload, { ...curTodo });
    },
    deleteTodo: (state, action) => {
      dbServer.deleteItem(action.payload);

      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: {
      prepare(action) {
        return {
          payload: {
            id: action.id,
            title: action.title,
            details: action.description,
            isCompleted: action.isCompleted,
            imgUrl: action.imgUrl || DEFAULT_IMG_URL,
            deadLine: action.deadLine,
          },
        };
      },

      reducer(state, action) {
        return state.map((todo) => {
          if (todo.id !== action.payload.id) return todo;

          const updatedTodo = {
            ...todo,
            title: action.payload.title,
            details: action.payload.details,
            isCompleted: action.payload.isCompleted,
            imgUrl: action.payload.imgUrl,
            deadLine: action.payload.deadLine,
          };

          dbServer.updateItem(todo.id, { ...updatedTodo });

          return updatedTodo;
        });
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleCompleted, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
