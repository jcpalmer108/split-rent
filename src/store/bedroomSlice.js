import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "bedroom",
  initialState: 0,
  reducers: {
    setBedroom: (state, action) => (state = action.payload),
  },
});

export const { setBedroom } = slice.actions;

export default slice.reducer;