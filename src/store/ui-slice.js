import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // LOOKS like we are mutating the state, but redux toolkit ensures we are only mutating a copy of the current state object. Mutating actual state is BIG NO-NO!
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
