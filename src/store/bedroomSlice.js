import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'bedroom',
  initialState: {
    count: 0,
    details: [],
  },
  reducers: {
    setBedroom: (state, action) =>
      (state = { ...state, count: action.payload }),
    generateDefaultBedroomDetails: (state) => {
      const keys = ['A', 'B', 'C', 'D', 'E']
      const labels = [
        'Master Suite',
        'Big Bedroom',
        'Cozy Bedroom',
        'Bright Bedroom',
        'Dark Bedroom',
      ]
      for (var i = 0; i < state.count; i++) {
        state.details.push({
          key: keys[i],
          label: labels[i],
          attachedBath: false,
          squarefootage: 0,
          numSharing: 0,
        })
      }
    },
    updateDetail: (state, action) => {
      state.details = state.details.map((item, index) => {
        if (
          item.key === action.payload.key &&
          state.details[index][action.payload.attribute] !==
            action.payload.value
        ) {
          return {
            ...item,
            [action.payload.attribute]: action.payload.value,
          }
        } else {
          return item
        }
      })
    },
  },
})

export const { setBedroom, generateDefaultBedroomDetails, updateDetail } =
  slice.actions

export default slice.reducer
