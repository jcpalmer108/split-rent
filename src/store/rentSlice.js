import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: 'rent',
  initialState: 0,
  reducers: {
    setRent: (state, action) => state = action.payload,
  }
})

export const { setRent } = slice.actions;

export default slice.reducer;