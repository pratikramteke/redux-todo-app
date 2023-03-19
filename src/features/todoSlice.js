import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      console.log(action.payload);
      state.push(action.payload);
    },
    deleteTodo(state, action) {
      toast.error("Todo Deleted Successfully", { position: "top-right" });
      return state.filter((todo, id) => id !== action.payload);
    },
    deleteAll() {
      toast.error("All Todo Deleted Successfully ", { position: "top-right" });
      return [];
    },
  },
});

export const { addTodo, deleteTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
