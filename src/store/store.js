import { configureStore } from '@reduxjs/toolkit'
import bedroomReducer from './bedroomSlice.js'
import bathroomReducer from './bathroomSlice'
import rentReducer from './rentSlice'
import roommateReducer from './roommateSlice'
import viewReducer from './viewSlice'

export const store = configureStore({
  reducer: {
    bedroom: bedroomReducer,
    bathroom: bathroomReducer,
    rent: rentReducer,
    roommate: roommateReducer,
    view: viewReducer,
  },
})
