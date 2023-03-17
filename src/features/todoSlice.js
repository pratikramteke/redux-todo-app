import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo(state,action) {
      console.log(action.payload);
      state.push(action.payload)
    }
  }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer