import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "bedroom",
  initialState: {
    count: 0,
    details: [],
  },
  reducers: {
    setBedroom: (state, action) => (state = {...state, count: action.payload}),
    generateDefaultBedroomDetails: (state) => {
      const keys = ['A', 'B', 'C', 'D', 'E']
      for(var i = 0; i < state.count; i++) {
        state.details.push({
          key: keys[i],
          label: 'Bedroom ' + keys[i],
          attachedBath: false,
          squarefootage: 0,
          numSharing: 0,
        })
      }
    },
    updateDetail: (state, action) => {
      state.details = state.details.map(item => {
        if(item.key === action.payload.key) {
          return {
            ...item,
            [action.payload.attribute]: action.payload.value
          }
        } else {
          return item;
        }
      })
      console.log('updateDetail', state.details)
    }
  },
});

export const { setBedroom, generateDefaultBedroomDetails, updateDetail } = slice.actions;

export default slice.reducer;
