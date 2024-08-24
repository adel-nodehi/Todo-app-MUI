import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Task 1",
    details: "Répondre appel d'offre",
    imgUrl: "/default.png",
  },
  {
    id: 2,
    title: "Task 2",
    details: "Signer contrat",
    imgUrl: "/default.png",
  },
  {
    id: 3,
    title: "Task 3",
    details: "Aspirer le salon",
    imgUrl: "/default.png",
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
