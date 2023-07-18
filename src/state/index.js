import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "6543542663", // this id is from db after user login
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      /*this basically a function that changes the global state of the mode 
      thus this will switch when we change the color mode*/
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
