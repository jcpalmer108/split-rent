import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bedroomReducer from "./bedroomSlice.js";
import bathroomReducer from "./bathroomSlice";
import rentReducer from "./rentSlice";
import roommateReducer from "./roommateSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bedroom: bedroomReducer,
    bathroom: bathroomReducer,
    rent: rentReducer,
    roommate: roommateReducer,
  },
});
