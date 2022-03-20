import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "roommate",
  initialState: 0,
  reducers: {
    setRoommate: (state, action) => (state = action.payload),
  },
});

export const { setRoommate } = slice.actions;

export default slice.reducer;
