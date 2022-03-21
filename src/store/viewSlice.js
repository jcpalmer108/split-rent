import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "roommate",
  initialState: {
    current: "apartment",
    options: ["apartment", "bedroom"]
  },
  reducers: {
    setCurrentView: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentView } = slice.actions;

export default slice.reducer;
