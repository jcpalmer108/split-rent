import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bedroomReducer from '../features/bedroom/bedroomSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bedroom: bedroomReducer,
  },
});
