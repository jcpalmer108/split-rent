import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: 'bathroom',
  initialState: 0,
  reducers: {
    setBathroom: (state, action) => state = action.payload,
  }
})

export const { setBathroom } = slice.actions;

export default slice.reducer;