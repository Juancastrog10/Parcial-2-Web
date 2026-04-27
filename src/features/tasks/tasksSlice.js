import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
      });
    },

    deleteTask: (state, action) => {
      state.list = state.list.filter(
        task => task.id !== action.payload
      );
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;